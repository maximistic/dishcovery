import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',  
  trailingSlash: true,   
  reactStrictMode: true,
};

export default nextConfig;