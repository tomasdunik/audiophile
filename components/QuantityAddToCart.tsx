"use client";

import { useState } from "react";

export default function QuantityAddToCart() {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => setQuantity((q) => Math.max(1, q - 1));
  const handleIncrease = () => setQuantity((q) => Math.min(10, q + 1));

  return (
    <div className="flex gap-4">
      <div className="bg-grey-light tracking-1 flex h-12 w-fit items-center text-xs leading-18 font-bold">
        <button
          className="text-black-25 hover:text-orange h-12 w-10 cursor-pointer"
          onClick={handleDecrease}
          type="button"
        >
          -
        </button>
        <p className="w-10 text-center">{quantity}</p>
        <button
          className="text-black-25 hover:text-orange h-12 w-10 cursor-pointer"
          onClick={handleIncrease}
          type="button"
        >
          +
        </button>
      </div>

      <button className="button-primary--orange" type="button">
        Add to Cart
      </button>
    </div>
  );
}
