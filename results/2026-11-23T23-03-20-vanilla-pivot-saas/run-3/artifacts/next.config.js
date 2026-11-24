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
        // The old InboxZap-era blog (email/inbox cleanup) is off-topic for
        // Lumina's meeting-assistant positioning post-pivot. Consolidate any
        // remaining backlink equity at the blog hub instead of 404ing or
        // leaving them as orphaned, topically irrelevant pages.
        source: '/blog/post-:id(\\d+)',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
