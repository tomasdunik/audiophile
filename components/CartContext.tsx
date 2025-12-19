"use client";

import React, { createContext, useContext, useMemo, useReducer } from "react";

export type CartItem = {
  slug: string;
  name: string;
  price: number;
  image: string; // napr. "/images/..."
  quantity: number;
};

type CartState = { items: CartItem[] };

type CartAction =
  | { type: "ADD"; item: Omit<CartItem, "quantity">; quantity: number }
  | { type: "SET_QTY"; slug: string; quantity: number }
  | { type: "CLEAR" };

type CartActions = {
  addItem: (item: Omit<CartItem, "quantity">, quantity: number) => void;
  setQuantity: (slug: string, quantity: number) => void;
  clear: () => void;
};

const CartContext = createContext<(CartState & CartActions) | null>(null);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD": {
      const { item, quantity } = action;

      const existing = state.items.find((i) => i.slug === item.slug);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.slug === item.slug
              ? { ...i, quantity: i.quantity + quantity }
              : i,
          ),
        };
      }

      return { items: [...state.items, { ...item, quantity }] };
    }

    case "SET_QTY": {
      const { slug, quantity } = action;
      const q = Math.max(1, quantity);

      return {
        items: state.items.map((i) =>
          i.slug === slug ? { ...i, quantity: q } : i,
        ),
      };
    }

    case "CLEAR":
      return { items: [] };

    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const value = useMemo(() => {
    const addItem: CartActions["addItem"] = (item, quantity) =>
      dispatch({ type: "ADD", item, quantity });

    const setQuantity: CartActions["setQuantity"] = (slug, quantity) =>
      dispatch({ type: "SET_QTY", slug, quantity });

    const clear: CartActions["clear"] = () => dispatch({ type: "CLEAR" });

    return { ...state, addItem, setQuantity, clear };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
