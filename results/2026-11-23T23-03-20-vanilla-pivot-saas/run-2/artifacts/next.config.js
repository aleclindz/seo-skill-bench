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
        // Legacy InboxZap-era blog posts (email cleanup topics) are unrelated
        // to Lumina's meeting-assistant product. Retire them to the blog hub
        // instead of leaving them orphaned and unindexed.
        source: '/blog/post-:id(\\d{1,2})',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
