/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    const retiredPosts = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12].map((n) => ({
      // Legacy InboxZap post, off-topic since the pivot to Lumina. Send to the blog hub.
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
      {
        // Legacy "Email Overload" post has a direct topical successor.
        source: '/blog/post-9',
        destination: '/blog/meeting-overload-fix',
        permanent: true,
      },
      ...retiredPosts,
    ];
  },
};

module.exports = nextConfig;
