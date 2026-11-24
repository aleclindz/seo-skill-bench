/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        // FAQ page was folded into the homepage during the redesign.
        source: '/faq',
        destination: '/#faq',
        permanent: true,
      },
      {
        // post-3, post-7, and post-12 all targeted "bulk delete emails" intent and
        // were splitting ranking signal three ways. Consolidated into post-7.
        source: '/blog/post-3',
        destination: '/blog/post-7',
        permanent: true,
      },
      {
        source: '/blog/post-12',
        destination: '/blog/post-7',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
