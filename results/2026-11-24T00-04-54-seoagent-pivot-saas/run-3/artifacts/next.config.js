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
      // Legacy InboxZap blog posts (pre-pivot) — GSC still shows impressions for
      // these, but the content is off-strategy for Lumina. Redirect to pass the
      // accumulated authority forward instead of letting them 404.
      // See .seoagent/strategy/migration-plan.md for the per-URL disposition.
      ...Array.from({ length: 12 }, (_, i) => ({
        source: `/blog/post-${i + 1}`,
        destination: '/',
        permanent: true,
      })),
    ];
  },
};

module.exports = nextConfig;
