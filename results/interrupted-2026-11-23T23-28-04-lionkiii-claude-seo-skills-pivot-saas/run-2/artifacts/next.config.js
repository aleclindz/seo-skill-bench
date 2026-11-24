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
        // Legacy InboxZap-era blog posts (pre-pivot) have no 1:1 replacement;
        // send them to the blog index instead of 404ing already-indexed URLs.
        source: '/blog/post-:id',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
