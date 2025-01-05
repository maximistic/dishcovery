import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',  
  trailingSlash: true,   
  reactStrictMode: true,
  images: {
    domains: ['img.spoonacular.com'], 
  },
};

export default nextConfig;