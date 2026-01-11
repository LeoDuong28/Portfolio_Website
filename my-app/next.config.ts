import type { NextConfig } from "next";

const repo = process.env.GITHUB_REPOSITORY?.split("/")?.[1] ?? "";
const basePath =
  process.env.NODE_ENV === "production" && repo ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
