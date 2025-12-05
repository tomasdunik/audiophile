"use client";

import { useRouter } from "next/navigation";

const ButtonGoBack = () => {
  const router = useRouter();

  const handleGoBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back(); // Naviguje na predchádzajúcu stránku
    } else {
      router.push("/"); // Ak nie je predchádzajúca stránka, ide na home
    }
  };

  return (
    <div className="mt-4 mb-6 px-6 md:mt-[33px] md:px-10 lg:mx-auto lg:mt-[79px] lg:mb-14 lg:max-w-[1190px]">
      <button
        onClick={handleGoBack}
        className="text-black-50 text-md inline-block leading-25 font-medium"
      >
        Go Back
      </button>
    </div>
  );
};

export default ButtonGoBack;
