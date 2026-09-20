import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/sitemap-:name.xml",
        destination: "/api/sitemaps/sitemap-:name.xml",
      },
    ];
  },
};

export default nextConfig;
