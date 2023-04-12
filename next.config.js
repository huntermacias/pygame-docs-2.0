/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    esmExternals: true,
  },
  images: {
    domains: ["uploads-ssl.webflow.com", "cdn-icons-png.flaticon.com", "pydocs.huntermacias.io"]
  }
}

module.exports = nextConfig
