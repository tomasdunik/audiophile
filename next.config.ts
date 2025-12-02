import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // vytvorí ./out pri build-e
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
};

export default nextConfig;
