import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export settings
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
