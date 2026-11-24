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
      // Legacy InboxZap blog posts (email-cleanup content) have no Lumina
      // equivalent — send them to the rebrand explainer instead of 404ing
      // or leaving off-topic content indexed.
      ...Array.from({ length: 12 }, (_, i) => ({
        source: `/blog/post-${i + 1}`,
        destination: '/blog/inboxzap-is-now-lumina',
        permanent: true,
      })),
    ];
  },
};

module.exports = nextConfig;
