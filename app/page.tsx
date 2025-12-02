import Category from "../components/Category";
import About from "../components/About";
import Image from "next/image";
import imageEarphonesYX1 from "../public/images/home/mobile/image-earphones-yx1.jpg";
import imageEarphonesYX1Tablet from "../public/images/home/tablet/image-earphones-yx1.jpg";
import imageEarphonesYX1Desktop from "../public/images/home/desktop/image-earphones-yx1.jpg";
import imageSpeakerZX9 from "../public/images/home/mobile/image-speaker-zx9.png";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="mb-10 bg-[url('../public/images/home/mobile/image-header.jpg')] bg-cover bg-center">
        <div className="flex flex-col items-center pt-[108px] pb-[112px] text-center">
          <p className="text-white-50 pb-4 overline">New Product</p>
          <h1 className="pb-6 text-white">XX99 Mark II Headphones</h1>
          <p className="text-white-75 pb-7">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <a href="" className="button-primary">
            See Product
          </a>
        </div>
      </section>
      <Category />
      <section className="px-6 pb-[120px] md:px-10 md:pb-24">
        <div className="bg-orange mb-[24px] rounded-lg bg-[url('../public/images/home/desktop/pattern-circles.svg')] bg-cover bg-[center_-119px]">
          <Image
            className="px-[77px] pt-[55px] pb-8"
            src={imageSpeakerZX9}
            alt="ZX9 Speaker"
          />
          <div className="flex flex-col items-center px-[23px] pb-[55px] text-center">
            <p className="tracking-1-29 md:tracking-2 pb-6 text-[2.25rem] leading-40 font-bold text-white md:text-5xl md:leading-58">
              ZX9 SPEAKER
            </p>
            <p className="text-white-75 text-md pb-6 leading-25 font-medium">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link className="button-primary--black" href="#">
              See Product
            </Link>
          </div>
        </div>
        <div className="mb-6 rounded-lg bg-[url('../public/images/home/mobile/image-speaker-zx7.jpg')] bg-cover bg-center">
          <div className="px-6 py-[101px]">
            <p className="tracking-2 pb-8 text-2xl leading-38 font-bold">
              ZX7 SPEAKER
            </p>
            <Link className="button-outline" href="#">
              See Product
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:gap-[11px]">
          <Image
            className="rounded-lg md:h-auto md:w-1/2"
            src={imageEarphonesYX1}
            alt="YX1 Earphones"
          />
          <div className="bg-grey-light rounded-lg px-6 py-[41px] md:w-1/2 md:px-[41px] md:py-[101px]">
            <p className="tracking-2 pb-8 text-2xl leading-38 font-bold">
              YX1 EARPHONES
            </p>
            <Link className="button-outline" href="#">
              See Product
            </Link>
          </div>
        </div>
      </section>
      <About />
      {/* <h1>test</h1>
      <h2>test</h2>
      <h3>test</h3>
      <h4>test</h4>
      <h5>test</h5>
      <h6>test</h6>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa earum
        odio quibusdam harum nemo necessitatibus, doloremque non? Quos explicabo
        ab consequuntur. Quas laborum accusantium consectetur repudiandae
        architecto enim a cupiditate.
      </p>{" "}
      <p className="overline">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa earum
        odio quibusdam harum nemo necessitatibus, doloremque non? Quos explicabo
        ab consequuntur. Quas laborum accusantium consectetur repudiandae
        architecto enim a cupiditate.
      </p>{" "}
      <p className="subtitle">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa earum
        odio quibusdam harum nemo necessitatibus, doloremque non? Quos explicabo
        ab consequuntur. Quas laborum accusantium consectetur repudiandae
        architecto enim a cupiditate.
      </p>
      <a href="" className="button-primary">
        See Product
      </a>
      <a href="" className="button-outline">
        See Product
      </a>
      <a href="" className="button-text">
        Shop
      </a>
      <button className="button-primary">See Product</button>
      <button className="button-outline">See Product</button>
      <button className="button-text">Shop</button> */}
    </>
  );
}
