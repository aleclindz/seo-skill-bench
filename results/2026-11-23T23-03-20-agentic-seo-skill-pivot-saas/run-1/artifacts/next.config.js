/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    const legacyInboxZapPosts = Array.from({ length: 12 }, (_, i) => ({
      // Pre-pivot InboxZap blog posts (inbox cleanup) have no equivalent under
      // the Lumina meeting-assistant content — consolidate into the blog index
      // instead of serving email-cleanup content next to an unrelated product.
      source: `/blog/post-${i + 1}`,
      destination: '/blog',
      permanent: true,
    }));

    return [
      {
        // FAQ page was folded into the homepage during the redesign.
        source: '/faq',
        destination: '/#faq',
        permanent: true,
      },
      ...legacyInboxZapPosts,
    ];
  },
};

module.exports = nextConfig;
