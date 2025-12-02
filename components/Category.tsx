import Image from "next/image";
import Link from "next/link";
import thumbnailEarphones from "../public/images/shared/desktop/image-category-thumbnail-earphones.png";
import thumbnailHeadphones from "../public/images/shared/desktop/image-category-thumbnail-headphones.png";
import thumbnailSpeakers from "../public/images/shared/desktop/image-category-thumbnail-speakers.png";

const Category = () => {
  return (
    <section className="mb-[120px] px-6 md:px-10 lg:mx-auto lg:max-w-[1190px]">
      <ul className="flex flex-col gap-4 md:flex-row md:gap-[10px] lg:gap-[30px]">
        <li className="md:flex-1">
          <Link
            href="/headphones"
            className="bg-grey-light group relative mt-[60px] flex flex-col items-center rounded-lg text-center"
          >
            {" "}
            <Image
              src={thumbnailHeadphones}
              alt="Headphones"
              className="absolute top-0 left-1/2 w-[160px] -translate-x-1/2 -translate-y-[55px] transition-transform duration-200 ease-out group-hover:-translate-y-[60px] md:-translate-y-[58px] md:group-hover:-translate-y-[63px] lg:w-[203px] lg:-translate-y-[75px] lg:group-hover:-translate-y-[80px]"
            />
            <p className="text-md tracking-1-07 lg:tracking-1-29 mb-[17px] pt-[88px] leading-20 font-bold uppercase lg:mb-[15px] lg:pt-[116px] lg:text-lg lg:leading-25">
              Headphones
            </p>
            <p className="button-text group-hover:text-orange pb-[22px] lg:pb-[30px]">
              Shop
            </p>
          </Link>
        </li>
        <li className="md:flex-1">
          <Link
            href="/speakers"
            className="bg-grey-light group relative mt-[60px] flex flex-col items-center rounded-lg text-center"
          >
            {" "}
            <Image
              src={thumbnailSpeakers}
              alt="Speakers"
              className="absolute top-0 left-1/2 w-[165px] -translate-x-1/2 -translate-y-[55px] transition-transform duration-200 ease-out group-hover:-translate-y-[60px] md:-translate-y-[55px] md:group-hover:-translate-y-[60px] lg:w-[213px] lg:-translate-y-[70px] lg:group-hover:-translate-y-[75px]"
            />
            <p className="text-md tracking-1-07 lg:tracking-1-29 mb-[17px] pt-[88px] leading-20 font-bold uppercase lg:mb-[15px] lg:pt-[116px] lg:text-lg lg:leading-25">
              Speakers
            </p>
            <p className="button-text group-hover:text-orange pb-[22px] lg:pb-[30px]">
              Shop
            </p>
          </Link>
        </li>
        <li className="md:flex-1">
          <Link
            href="/earphones"
            className="bg-grey-light group relative mt-[60px] flex flex-col items-center rounded-lg text-center"
          >
            {" "}
            <Image
              src={thumbnailEarphones}
              alt="Earphones"
              className="absolute top-0 left-1/2 w-[183px] -translate-x-1/2 -translate-y-[52px] transition-transform duration-200 ease-out group-hover:-translate-y-[57px] md:-translate-y-[54px] md:group-hover:-translate-y-[59px] lg:w-[215px] lg:-translate-y-[60px] lg:group-hover:-translate-y-[65px]"
            />
            <p className="text-md tracking-1-07 lg:tracking-1-29 mb-[17px] pt-[88px] leading-20 font-bold uppercase lg:mb-[15px] lg:pt-[116px] lg:text-lg lg:leading-25">
              Earphones
            </p>
            <p className="button-text group-hover:text-orange pb-[22px] lg:pb-[30px]">
              Shop
            </p>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Category;
