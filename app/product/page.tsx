import Category from "../../components/Category";
import About from "../../components/About";
import ButtonGoBack from "../../components/ButtonGoBack";
import Link from "next/link";
import Image from "next/image";
import imageProductXX99MarkIIHeadphones from "../../public/images/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import imageProductXX99MarkIIHeadphonesTablet from "../../public/images/product-xx99-mark-two-headphones/tablet/image-product.jpg";
import imageProductXX99MarkIIHeadphonesDesktop from "../../public/images/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import imageProductXX99MarkIIHeadphonesGallery1 from "../../public/images/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg";
import imageProductXX99MarkIIHeadphonesGallery2 from "../../public/images/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg";
import imageProductXX99MarkIIHeadphonesGallery3 from "../../public/images/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg";
import imageProductXX99MarkIIHeadphonesGallery1Tablet from "../../public/images/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg";
import imageProductXX99MarkIIHeadphonesGallery2Tablet from "../../public/images/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg";
import imageProductXX99MarkIIHeadphonesGallery3Tablet from "../../public/images/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg";
import imageProductXX99MarkIIHeadphonesGallery1Desktop from "../../public/images/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import imageProductXX99MarkIIHeadphonesGallery2Desktop from "../../public/images/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import imageProductXX99MarkIIHeadphonesGallery3Desktop from "../../public/images/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";
import ProductLikeBox from "../../components/ProductLikeBox";

const page = () => {
  return (
    <>
      <ButtonGoBack />
      <div className="px-6 md:flex md:flex-col md:px-10 lg:mx-auto lg:max-w-[1190px]">
        <div className="mb-[88px] flex flex-col items-center md:mb-[120px] md:flex md:flex-row md:gap-[69px] lg:mb-40 lg:gap-[124px]">
          <picture>
            {" "}
            <source
              media="(min-width: 1110px)"
              srcSet={imageProductXX99MarkIIHeadphonesDesktop.src}
            />
            <source
              media="(min-width: 768px)"
              srcSet={imageProductXX99MarkIIHeadphonesTablet.src}
            />
            <Image
              className="mb-8 rounded-lg md:mb-0 md:min-w-[281px] lg:min-w-[540px]"
              src={imageProductXX99MarkIIHeadphones}
              alt="XX99 Mark II Headphones"
              sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
            />
          </picture>
          <div className="md:flex md:flex-col">
            <p className="tracking-10 text-orange md:text-xxs md:tracking-8-57 mb-6 text-sm leading-19 uppercase md:mb-[17px] md:leading-16 lg:mb-[17px]">
              NEW PRODUCT
            </p>
            <p className="tracking-1 md:tracking-1-43 lg:tracking-1-43 mb-6 text-2xl leading-38 font-bold uppercase md:mb-8 md:text-2xl md:leading-32 lg:text-4xl lg:leading-44">
              XX99 Mark II Headphones
            </p>
            <p className="text-md text-black-50 mb-6 leading-25 font-medium md:mb-8">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <p className="tracking-1-29 mb-[31px] text-lg leading-25 font-bold lg:mb-[47px]">
              $ 2,999
            </p>
            <button className="button-primary--orange">Add to Cart</button>
          </div>
        </div>
        <div className="mb-[88px] flex flex-col gap-[88px] md:mb-[120px] md:gap-[120px] lg:mb-[160px] lg:flex-row lg:gap-[125px]">
          <div>
            <p className="tracking-0-86 md:tracking-1-14 mb-6 text-xl leading-36 font-bold uppercase md:mb-8 md:text-3xl">
              Features
            </p>
            <p className="text-md text-black-50 leading-25 font-medium">
              Featuring a genuine leather head strap and premium earcups, these
              headphones deliver superior comfort for those who like to enjoy
              endless listening. It includes intuitive controls designed for any
              situation. Whether you’re taking a business call or just in your
              own personal space, the auto on/off and pause features ensure that
              you’ll never miss a beat.
              <br />
              <br />
              The advanced Active Noise Cancellation with built-in equalizer
              allow you to experience your audio world on your terms. It lets
              you enjoy your audio in peace, but quickly interact with your
              surroundings when you need to. Combined with Bluetooth 5. 0
              compliant connectivity and 17 hour battery life, the XX99 Mark II
              headphones gives you superior sound, cutting-edge technology, and
              a modern design aesthetic.
            </p>
          </div>
          <div className="md:flex md:gap-[11px] lg:flex-col lg:gap-0">
            <p className="tracking-0-86 md:tracking-1-14 mb-6 text-xl leading-36 font-bold uppercase md:mb-0 md:min-w-[339px] md:text-3xl lg:mb-8">
              In The Box
            </p>
            <table>
              <caption className="sr-only">In The Box</caption>
              <tbody>
                <tr>
                  <td>1x</td>
                  <td>Headphone Unit</td>
                </tr>
                <tr>
                  <td>2x</td>
                  <td>Replacement Earcups</td>
                </tr>
                <tr>
                  <td>1x</td>
                  <td>User Manual</td>
                </tr>
                <tr>
                  <td>1x</td>
                  <td>3.5mm 5m Audio Cable</td>
                </tr>
                <tr>
                  <td>1x</td>
                  <td>Travel Bag</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mb-[120px] flex flex-col gap-5 md:flex-row md:gap-[18px] lg:mb-[160px] lg:gap-[30px]">
          <div className="flex flex-col gap-5 md:flex-[0.415] lg:flex-[0.413] lg:gap-8">
            <picture>
              {" "}
              <source
                media="(min-width: 1110px)"
                srcSet={imageProductXX99MarkIIHeadphonesGallery1Desktop.src}
              />
              <source
                media="(min-width: 768px)"
                srcSet={imageProductXX99MarkIIHeadphonesGallery1Tablet.src}
              />
              <Image
                className="w-full rounded-lg"
                src={imageProductXX99MarkIIHeadphonesGallery1}
                alt="XX99 Mark II Headphones"
                sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
              />
            </picture>{" "}
            <picture>
              {" "}
              <source
                media="(min-width: 1110px)"
                srcSet={imageProductXX99MarkIIHeadphonesGallery2Desktop.src}
              />
              <source
                media="(min-width: 768px)"
                srcSet={imageProductXX99MarkIIHeadphonesGallery2Tablet.src}
              />
              <Image
                className="w-full rounded-lg"
                src={imageProductXX99MarkIIHeadphonesGallery2}
                alt="XX99 Mark II Headphones"
                sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
              />
            </picture>
          </div>
          <picture className="g:flex-[0.587] md:flex-[0.585]">
            {" "}
            <source
              media="(min-width: 1110px)"
              srcSet={imageProductXX99MarkIIHeadphonesGallery3Desktop.src}
            />
            <source
              media="(min-width: 768px)"
              srcSet={imageProductXX99MarkIIHeadphonesGallery3Tablet.src}
            />
            <Image
              className="h-full w-full rounded-lg object-cover"
              src={imageProductXX99MarkIIHeadphonesGallery3}
              alt="XX99 Mark II Headphones"
              sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
            />
          </picture>
        </div>
      </div>{" "}
      <ProductLikeBox />
      <Category />
      <About />
    </>
  );
};

export default page;
