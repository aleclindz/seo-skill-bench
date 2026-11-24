/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    const legacySlugs = Array.from({ length: 12 }, (_, i) => `post-${i + 1}`);
    return [
      {
        // FAQ page was folded into the homepage during the redesign.
        source: '/faq',
        destination: '/#faq',
        permanent: true,
      },
      ...legacySlugs.map((slug) => ({
        // Old InboxZap-era posts (email cleanup) have no equivalent under the
        // Lumina (meeting assistant) content, so send their link equity to the
        // closest on-topic replacement instead of 404ing.
        source: `/blog/${slug}`,
        destination: '/blog/meeting-overload',
        permanent: true,
      })),
    ];
  },
};

module.exports = nextConfig;
