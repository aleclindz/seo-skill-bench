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
      // Old generic /blog/post-N slugs replaced with descriptive ones.
      // post-3, post-7, and post-12 covered the same bulk-delete topic and
      // are merged into a single canonical guide.
      { source: '/blog/post-1', destination: '/blog/inbox-zero-method', permanent: true },
      { source: '/blog/post-2', destination: '/blog/gmail-filters-guide', permanent: true },
      { source: '/blog/post-3', destination: '/blog/bulk-delete-emails', permanent: true },
      { source: '/blog/post-4', destination: '/blog/unsubscribe-from-newsletters', permanent: true },
      { source: '/blog/post-5', destination: '/blog/gmail-storage-full', permanent: true },
      { source: '/blog/post-6', destination: '/blog/best-email-cleanup-apps', permanent: true },
      { source: '/blog/post-7', destination: '/blog/bulk-delete-emails', permanent: true },
      { source: '/blog/post-8', destination: '/blog/archive-vs-delete-email', permanent: true },
      { source: '/blog/post-9', destination: '/blog/email-overload', permanent: true },
      { source: '/blog/post-10', destination: '/blog/clean-up-outlook-inbox', permanent: true },
      { source: '/blog/post-11', destination: '/blog/automatic-email-sorting', permanent: true },
      { source: '/blog/post-12', destination: '/blog/bulk-delete-emails', permanent: true },
    ];
  },
};

module.exports = nextConfig;
