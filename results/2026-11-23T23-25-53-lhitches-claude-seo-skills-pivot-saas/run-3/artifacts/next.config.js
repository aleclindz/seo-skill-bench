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
        // These posts were written for the old product (InboxZap, an email
        // cleanup tool) before the pivot to Lumina. Their topics have nothing
        // to do with meetings, so redirect the stale indexed URLs to the
        // current blog instead of serving content unrelated to the query.
        source: '/blog/post-:id(\\d+)',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
