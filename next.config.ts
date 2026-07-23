import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/focus-landing",
  assetPrefix: "/focus-landing/",
};

export default nextConfig;
