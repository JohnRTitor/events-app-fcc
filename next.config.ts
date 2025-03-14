import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Next.js by default blocks images from external sources
    // whitelist here
    domains: ["images.unsplash.com"],
  },
  reactStrictMode: true,
};

export default nextConfig;
