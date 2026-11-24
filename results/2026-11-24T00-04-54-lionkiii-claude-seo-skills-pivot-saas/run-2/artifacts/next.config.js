/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    const legacyInboxZapPosts = Array.from({ length: 12 }, (_, i) => i + 1).map((n) => ({
      // Old InboxZap-era posts are off-topic for Lumina; consolidate into the blog
      // index instead of leaving them as orphaned, unindexed 404s.
      source: `/blog/post-${n}`,
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
