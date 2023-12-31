/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "/snavaboo/",
  basePath: "/snavaboo",
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
