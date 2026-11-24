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
        // Old InboxZap-era posts (email cleanup) are off-topic for Lumina's
        // meeting-assistant audience post-pivot; consolidate into the new blog.
        source: '/blog/post-:id(\\d+)',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
