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
        // Legacy InboxZap blog posts (pre-pivot) have no equivalent content on
        // Lumina. Redirect rather than 404 so indexed/linked URLs still resolve.
        source: '/blog/post-:id(\\d+)',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
