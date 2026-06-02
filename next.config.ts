import type { NextConfig } from "next";

// Static export so the site can be hosted on GitHub Pages.
// Targeting a user site (MissyM.github.io) means it serves from the domain root,
// so no basePath is needed. If you ever deploy to a *project* repo instead
// (e.g. github.com/MissyM/portfolio -> missym.github.io/portfolio), set:
//   basePath: "/portfolio", assetPrefix: "/portfolio/"
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
