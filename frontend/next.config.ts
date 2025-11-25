import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fe1111.projects.academy.onlyjs.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
