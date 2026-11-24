/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    const legacyInboxZapSlugs = Array.from({ length: 12 }, (_, i) => `post-${i + 1}`);
    return [
      {
        // FAQ page was folded into the homepage during the redesign.
        source: '/faq',
        destination: '/#faq',
        permanent: true,
      },
      // These posts are from the InboxZap (email-cleanup) product and are off-topic
      // for Lumina. Merge their link equity into the rebrand post instead of leaving
      // them live as orphaned, off-product content.
      ...legacyInboxZapSlugs.map((slug) => ({
        source: `/blog/${slug}`,
        destination: '/blog/inboxzap-is-now-lumina',
        permanent: true,
      })),
    ];
  },
};

module.exports = nextConfig;
