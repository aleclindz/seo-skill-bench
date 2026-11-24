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
        // Legacy InboxZap blog posts (email cleanup content) have no Lumina
        // equivalent — consolidate their residual authority into the blog
        // hub instead of a 404 or an unrelated redirect to the homepage.
        // See .seoagent/strategy/migration-plan.md.
        source: '/blog/post-:id',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
