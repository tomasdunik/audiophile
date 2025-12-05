import Link from "next/link";
import Image from "next/image";
import imageLikeXX99MarkI from "../public/images/shared/mobile/image-xx99-mark-one-headphones.jpg";
import imageLikeXX99MarkITablet from "../public/images/shared/tablet/image-xx99-mark-one-headphones.jpg";
import imageLikeXX99MarkIDesktop from "../public/images/shared/desktop/image-xx99-mark-one-headphones.jpg";

const ProductLike = () => {
  return (
    <div className="flex flex-col items-center md:gap-0">
      <picture>
        <source
          media="(min-width: 1110px)"
          srcSet={imageLikeXX99MarkIDesktop.src}
        />
        <source
          media="(min-width: 768px)"
          srcSet={imageLikeXX99MarkITablet.src}
        />
        <Image
          className="mb-8 rounded-lg md:mb-10"
          src={imageLikeXX99MarkI}
          alt="YX1 Earphones"
          sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
        />
      </picture>
      <p className="tracking-1-71 mb-8 text-xl leading-33 font-bold uppercase">
        XX99 Mark I
      </p>
      <Link href="/product/xx99-mark-one" className="button-primary--orange">
        See Product
      </Link>
    </div>
  );
};

export default ProductLike;
