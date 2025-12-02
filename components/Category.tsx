import Image from "next/image";
import Link from "next/link";
import thumbnailEarphones from "../public/images/shared/desktop/image-category-thumbnail-earphones.png";
import thumbnailHeadphones from "../public/images/shared/desktop/image-category-thumbnail-headphones.png";
import thumbnailSpeakers from "../public/images/shared/desktop/image-category-thumbnail-speakers.png";

const Category = () => {
  return (
    <section className="px-6 md:px-10">
      <ul className="flex flex-col gap-4 gap-[10px] md:flex-row">
        <li className="bg-grey-light flex flex-col items-center rounded-lg text-center">
          <Image src={thumbnailHeadphones} alt="Headphones" className="" />
          <p className="text-md tracking-1-07 mb-[17px] leading-20 font-bold uppercase">
            Headphones
          </p>
          <Link href="/headphones" className="button-text pb-[22px]">
            Shop
          </Link>
        </li>
        <li className="bg-grey-light flex flex-col items-center rounded-lg text-center">
          <Image src={thumbnailSpeakers} alt="Speakers" />
          <p className="text-md tracking-1-07 mb-[17px] leading-20 font-bold uppercase">
            Speakers
          </p>
          <Link href="/headphones" className="button-text pb-[22px]">
            Shop
          </Link>
        </li>
        <li className="bg-grey-light flex flex-col items-center rounded-lg text-center">
          <Image src={thumbnailEarphones} alt="Earphones" />
          <p className="text-md tracking-1-07 mb-[17px] leading-20 font-bold uppercase">
            Earphones
          </p>
          <Link href="/headphones" className="button-text pb-[22px]">
            Shop
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Category;
