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
        // Old InboxZap-era posts (email/Gmail cleanup) are off-topic for the
        // Lumina meeting-assistant product and were getting impressions with
        // no conversions. Consolidate into the new blog instead of 404ing.
        source: '/blog/post-:id([1-9]|1[0-2])',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
