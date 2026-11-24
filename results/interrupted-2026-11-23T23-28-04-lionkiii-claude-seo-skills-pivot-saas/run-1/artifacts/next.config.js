/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        // Legacy InboxZap posts have no equivalent content under the Lumina
        // pivot; send them to the new blog hub instead of 404ing.
        source: '/blog/post-:id(\\d+)',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
