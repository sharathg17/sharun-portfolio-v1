import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/sharun-portfolio-v1' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
