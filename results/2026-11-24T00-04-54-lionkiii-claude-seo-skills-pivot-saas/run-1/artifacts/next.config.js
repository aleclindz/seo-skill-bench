/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    const legacyPostSlugs = [
      'post-1', 'post-2', 'post-3', 'post-4', 'post-5', 'post-6',
      'post-7', 'post-8', 'post-9', 'post-10', 'post-11', 'post-12',
    ];

    return [
      // Pre-pivot InboxZap blog posts (email cleanup / inbox zero topics) have
      // no equivalent on the Lumina meeting-assistant site. Send them to the
      // blog hub instead of leaving indexed URLs 404ing.
      ...legacyPostSlugs.map((slug) => ({
        source: `/blog/${slug}`,
        destination: '/blog',
        permanent: true,
      })),
    ];
  },
};

module.exports = nextConfig;
