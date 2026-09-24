import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // required for static export
  },
  // Note: move sitemaps to public folder or app/sitemap.ts
};

export default nextConfig;