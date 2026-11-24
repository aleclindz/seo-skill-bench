/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    const legacyPostRedirects = Array.from({ length: 12 }, (_, i) => ({
      // Old InboxZap-era posts (inbox zero, Gmail cleanup) are off-topic for
      // Lumina. Redirect the already-indexed URLs to the new blog instead of
      // letting them 404.
      source: `/blog/post-${i + 1}`,
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
      ...legacyPostRedirects,
    ];
  },
};

module.exports = nextConfig;
