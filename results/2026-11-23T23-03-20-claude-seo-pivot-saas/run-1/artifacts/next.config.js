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
      // Legacy InboxZap posts replaced by an on-topic Lumina equivalent.
      {
        source: '/blog/post-6',
        destination: '/blog/best-ai-meeting-assistants-compared',
        permanent: true,
      },
      {
        source: '/blog/post-9',
        destination: '/blog/meeting-overload',
        permanent: true,
      },
      {
        source: '/blog/post-11',
        destination: '/blog/automatic-meeting-summaries',
        permanent: true,
      },
      {
        source: '/blog/post-8',
        destination: '/blog/record-or-skip',
        permanent: true,
      },
      // Legacy InboxZap posts with no Lumina equivalent — retired to the blog index.
      {
        source: '/blog/post-1',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/post-2',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/post-3',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/post-4',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/post-5',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/post-7',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/post-10',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/post-12',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
