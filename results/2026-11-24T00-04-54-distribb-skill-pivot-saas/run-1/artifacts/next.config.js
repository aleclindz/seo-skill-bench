/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // The 12 InboxZap-era posts (post-1..post-12) are about email cleanup, not
    // meetings, and no longer match the product. They still get GSC impressions,
    // so redirect instead of 404-ing the crawl/click.
    const legacyPostRedirects = Array.from({ length: 12 }, (_, i) => ({
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
