/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "nghesachnoi.com",
      "cloudflare-ipfs.com",
      "192.168.1.8",
      "192.168.56.1",
    ],
  },
};

module.exports = nextConfig;
