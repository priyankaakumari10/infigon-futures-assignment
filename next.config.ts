import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    domains: ["fakestoreapi.com"],
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/products",
        permanent: false,
      },
    ]
  },
}

export default nextConfig
