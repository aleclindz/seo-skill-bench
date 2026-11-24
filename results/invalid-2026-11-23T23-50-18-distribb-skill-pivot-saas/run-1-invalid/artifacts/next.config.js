/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        // post-7 covered the same "bulk delete emails" topic as post-3 and was
        // cannibalizing its rankings; content is merged into post-3.
        source: '/blog/post-7',
        destination: '/blog/post-3',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
