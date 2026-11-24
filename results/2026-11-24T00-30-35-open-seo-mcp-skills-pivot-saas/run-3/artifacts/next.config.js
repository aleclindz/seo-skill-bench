/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Legacy InboxZap blog posts: the product they covered no longer exists.
      // Redirect to the closest relevant destination instead of 404ing
      // already-indexed URLs or leaving stale off-topic content live.
      { source: '/blog/post-1', destination: '/blog', permanent: true },
      { source: '/blog/post-2', destination: '/blog', permanent: true },
      { source: '/blog/post-3', destination: '/blog', permanent: true },
      { source: '/blog/post-4', destination: '/blog', permanent: true },
      { source: '/blog/post-5', destination: '/blog', permanent: true },
      { source: '/blog/post-6', destination: '/blog', permanent: true },
      {
        source: '/blog/post-9',
        destination: '/blog/meeting-overload-email-problem',
        permanent: true,
      },
      { source: '/blog/post-7', destination: '/blog', permanent: true },
      { source: '/blog/post-8', destination: '/blog', permanent: true },
      { source: '/blog/post-10', destination: '/blog', permanent: true },
      { source: '/blog/post-11', destination: '/blog', permanent: true },
      { source: '/blog/post-12', destination: '/blog', permanent: true },
    ];
  },
};

module.exports = nextConfig;
