import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    //unoptimized: true,
  },
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/audiophile" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/audiophile/" : "",
};

export default nextConfig;
