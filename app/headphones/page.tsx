import ProductCard from "../../components/ProductCard";
import Category from "../../components/Category";
import About from "../../components/About";

const page = () => {
  return (
    <div>
      <p className="tracking-2 md:tracking-1-43 mb-16 bg-[#121212] py-8 text-center text-2xl leading-38 font-bold text-white uppercase md:mb-[120px] md:pt-[105px] md:pb-[97px] md:text-4xl md:leading-44 lg:mb-[160px] lg:pt-[98px]">
        Headphones
      </p>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <Category />
      <About />
    </div>
  );
};

export default page;
