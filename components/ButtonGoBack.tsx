import Link from "next/link";

const ButtonGoBack = () => {
  return (
    <div className="mt-4 mb-6 px-6 md:mt-[33px] md:px-10 lg:mx-auto lg:mt-[79px] lg:mb-14 lg:max-w-[1190px]">
      <Link
        href="/"
        className="text-black-50 text-md inline-block leading-25 font-medium"
      >
        Go Back
      </Link>
    </div>
  );
};

export default ButtonGoBack;
