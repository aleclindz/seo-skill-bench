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
        // Legacy InboxZap blog posts (pre-pivot) have no on-topic Lumina
        // replacement; send their equity to the blog hub. See
        // .seoagent/strategy/migration-plan.md.
        source: '/blog/post-:id',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
