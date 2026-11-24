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
        // Thin, low-traffic post consolidated into the archive-vs-delete guide
        // instead of left as duplicate/overlapping content.
        source: '/blog/post-3',
        destination: '/blog/post-8',
        permanent: true,
      },
      {
        // Thin, low-traffic post consolidated into the email-overload guide
        // instead of left as duplicate/overlapping content.
        source: '/blog/post-7',
        destination: '/blog/post-11',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
