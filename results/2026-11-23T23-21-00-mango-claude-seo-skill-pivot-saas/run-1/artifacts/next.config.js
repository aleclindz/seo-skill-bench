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
        // Legacy InboxZap blog posts no longer exist post-pivot; send any
        // indexed/inbound links to the current blog instead of 404ing.
        source: '/blog/post-:id',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
