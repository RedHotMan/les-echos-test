import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://placehold.co/**")],
    domains: ["placehold.co"],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
