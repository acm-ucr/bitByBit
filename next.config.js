/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/user",
        destination: "/user/dashboard",
        permanent: true,
      },
      {
        source: "/",
        destination: "/user/dashboard",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
