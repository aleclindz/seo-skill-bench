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
        // post-7 duplicated post-3's "bulk delete emails" topic and was splitting
        // rankings between the two pages. Consolidated into post-3.
        source: '/blog/post-7',
        destination: '/blog/post-3',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
