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
      // The InboxZap -> Lumina pivot orphaned these 12 posts: still indexed
      // and pulling impressions (see gsc/Pages.csv) but off-topic for the
      // current product. Redirect instead of 404 to keep whatever link
      // equity they have, rather than losing it or leaving them live and
      // unlinked under the new brand.
      ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => ({
        source: `/blog/post-${n}`,
        destination: '/blog',
        permanent: true,
      })),
    ];
  },
};

module.exports = nextConfig;
