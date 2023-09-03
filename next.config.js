/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "nghesachnoi.com",
      "cloudflare-ipfs.com",
      "192.168.1.8w",
      "192.168.56.1",
      "172.19.201.147",
      "172.20.192.1",
      "c.wallhere.com",
      "previews.123rf.com",
      "fintech.smartosc.com",
    ],
  },
};

module.exports = nextConfig;
