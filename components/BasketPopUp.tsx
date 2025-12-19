import Image from "next/image";
import MarkII from "../public/images/cart/image-xx99-mark-two-headphones.jpg";
import XX59 from "../public/images/cart/image-xx59-headphones.jpg";
import YX1 from "../public/images/cart/image-yx1-earphones.jpg";

const BasketPopUp = () => {
  return (
    <>
      {/* <aside className="absolute top-full right-0 mt-6 mr-6 rounded-lg bg-white md:mt-6 md:mr-10 lg:mt-8 lg:mr-0">
        <p className="tracking-1-29 px-7 py-8 text-lg leading-25 font-bold uppercase md:px-8">
          Cart is empty
        </p>
      </aside> */}
      <aside className="absolute top-full right-6 left-6 mt-6 rounded-lg bg-white px-6 pb-8 md:right-0 md:left-auto md:mt-6 md:mr-6 md:mr-10 md:min-w-[377px] lg:mt-8 lg:mr-0">
        <div className="flex justify-between py-8">
          <p className="tracking-1-29 text-lg leading-25 font-bold uppercase">
            Cart (3)
          </p>
          <button className="text-md text-black-50 hover:text-orange cursor-pointer leading-25 font-medium underline">
            Remove all
          </button>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src={MarkII}
                alt="XX99 MK II Headphones"
                className="w-16 rounded-lg"
              />
              <div>
                <p className="text-md leading-25 font-bold">XX99 MK II</p>
                <p className="text-black-50 text-sm leading-25 font-bold">
                  $ 2,999
                </p>
              </div>
            </div>
            <div className="bg-grey-light tracking-1 flex h-8 w-fit items-center text-xs leading-18 font-bold">
              <button className="text-black-25 hover:text-orange h-8 w-8 cursor-pointer">
                -
              </button>
              <p className="w-8 text-center">1</p>
              <button className="text-black-25 hover:text-orange h-8 w-8 cursor-pointer">
                +
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src={XX59}
                alt="XX59 Headphones"
                className="w-16 rounded-lg"
              />
              <div>
                <p className="text-md leading-25 font-bold">XX59</p>
                <p className="text-black-50 text-sm leading-25 font-bold">
                  $ 899
                </p>
              </div>
            </div>
            <div className="bg-grey-light tracking-1 flex h-8 w-fit items-center text-xs leading-18 font-bold">
              <button className="text-black-25 hover:text-orange h-8 w-8 cursor-pointer">
                -
              </button>
              <p className="w-8 text-center">1</p>
              <button className="text-black-25 hover:text-orange h-8 w-8 cursor-pointer">
                +
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src={YX1}
                alt="YX1 Earphones"
                className="w-16 rounded-lg"
              />
              <div>
                <p className="text-md leading-25 font-bold">YX1</p>
                <p className="text-black-50 text-sm leading-25 font-bold">
                  $ 599
                </p>
              </div>
            </div>
            <div className="bg-grey-light tracking-1 flex h-8 w-fit items-center text-xs leading-18 font-bold">
              <button className="text-black-25 hover:text-orange h-8 w-8 cursor-pointer">
                -
              </button>
              <p className="w-8 text-center">1</p>
              <button className="text-black-25 hover:text-orange h-8 w-8 cursor-pointer">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 mb-6 flex justify-between">
          <p className="text-md text-black-50 leading-25 font-medium uppercase">
            Total
          </p>
          <p className="text-lg leading-25 font-bold">$ 5,396</p>
        </div>
        <button className="button-primary--orange w-full">Checkout</button>
      </aside>
    </>
  );
};

export default BasketPopUp;
