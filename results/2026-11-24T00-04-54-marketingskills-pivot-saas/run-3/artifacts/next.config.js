/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        // Legacy InboxZap-era post slugs (pre-pivot); send crawlers and any
        // remaining backlinks to the current blog instead of a dead page.
        source: '/blog/post-:id',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
