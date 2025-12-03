import ProductCard from "../../components/ProductCard";
import Category from "../../components/Category";
import About from "../../components/About";
import data from "@/public/data.json";

type Product = {
  id: number;
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: "earphones" | "headphones" | "speakers";
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: Array<{ quantity: number; item: string }>;
  gallery: {
    first: { mobile: string; tablet: string; desktop: string };
    second: { mobile: string; tablet: string; desktop: string };
    third: { mobile: string; tablet: string; desktop: string };
  };
  others: Array<{
    slug: string;
    name: string;
    image: { mobile: string; tablet: string; desktop: string };
    category: "earphones" | "headphones" | "speakers";
  }>;
};

const page = () => {
  // data.json používa "./assets/..." -> u nás sú súbory v "/images/..."
  const img = (p: string) => p.replace("./assets", "/images");
  const products = (data as Product[]).filter(
    (p) => p.category === "earphones",
  );

  return (
    <div>
      <p className="tracking-2 md:tracking-1-43 mb-16 bg-[#121212] py-8 text-center text-2xl leading-38 font-bold text-white uppercase md:mb-[120px] md:pt-[105px] md:pb-[97px] md:text-4xl md:leading-44 lg:mb-[160px] lg:pt-[98px]">
        Earphones
      </p>
      {products
        .slice()
        .reverse()
        .map((p, idx) => (
          <ProductCard
            key={p.id}
            title={p.name}
            description={p.description}
            isNew={p.new}
            image={{
              mobile: img(p.categoryImage.mobile),
              tablet: img(p.categoryImage.tablet),
              desktop: img(p.categoryImage.desktop),
            }}
            href={`/${p.category}/${p.slug}`}
            reverse={idx % 2 === 1}
          />
        ))}
      <Category />
      <About />
    </div>
  );
};

export default page;
