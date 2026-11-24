/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // The pre-pivot blog (InboxZap: inbox-zero, bulk-delete, newsletter cleanup) was
    // retired when the product became Lumina. GSC still shows crawl/backlink traffic
    // to these 12 slugs — send it to the live blog instead of a hard 404.
    const retiredPosts = Array.from({ length: 12 }, (_, i) => `/blog/post-${i + 1}`);
    return [
      ...retiredPosts.map((source) => ({
        source,
        destination: '/blog',
        permanent: true,
      })),
    ];
  },
};

module.exports = nextConfig;
