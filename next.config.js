/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['functionalworks-backend--prod.s3.amazonaws.com'],
  },
}

module.exports = nextConfig
