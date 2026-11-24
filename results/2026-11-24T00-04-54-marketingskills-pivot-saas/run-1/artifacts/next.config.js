/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    const retiredInboxZapPosts = Array.from({ length: 12 }, (_, i) => i + 1).map((n) => ({
      // These posts covered inbox-cleanup topics from the InboxZap era and have
      // no Lumina equivalent; send them to the current blog index rather than 404.
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
      ...retiredInboxZapPosts,
    ];
  },
};

module.exports = nextConfig;
