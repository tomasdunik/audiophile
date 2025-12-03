import Image from "next/image";
import productXX99MarkTwoHeadphones from "../public/images/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";
import productXX99MarkTwoHeadphonesTablet from "../public/images/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import productXX99MarkTwoHeadphonesDesktop from "../public/images/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";

const ProductCard = () => {
  return (
    <div className="mb-[120px] flex flex-col items-center gap-[52px] px-6 md:px-10 lg:mx-auto lg:mb-[160px] lg:max-w-[1190px] lg:flex-row lg:gap-[125px]">
      <picture className="">
        <source
          media="(min-width: 1110px)"
          srcSet={productXX99MarkTwoHeadphonesDesktop.src}
        />
        <source
          media="(min-width: 768px)"
          srcSet={productXX99MarkTwoHeadphonesTablet.src}
        />
        <Image
          className="rounded-lg"
          src={productXX99MarkTwoHeadphones}
          alt="XX99 Mark II Headphones"
          sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
        />
      </picture>
      <div className="flex flex-col items-center gap-6 md:max-w-[572px] md:gap-0 lg:mt-[109px] lg:mb-[109px] lg:max-w-[445px] lg:items-start">
        <p className="text-orange tracking-10 text-center text-sm leading-19 uppercase md:mb-4">
          NEW PRODUCT
        </p>
        <p className="tracking-1 md:tracking-1-43 text-center text-2xl leading-38 font-bold uppercase md:mb-8 md:text-4xl md:leading-44 lg:text-left">
          XX99 Mark II Headphones
        </p>
        <p className="text-black-50 text-md text-center leading-25 font-medium md:mb-6 lg:mb-10 lg:text-left">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <a href="" className="button-primary--orange">
          See Product
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
