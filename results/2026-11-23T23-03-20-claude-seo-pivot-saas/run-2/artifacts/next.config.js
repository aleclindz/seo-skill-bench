/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    const renamedPosts = {
      'post-1': 'meeting-minutes-that-get-read',
      'post-2': 'meeting-templates-save-time',
      'post-3': 'transcribe-zoom-meetings-automatically',
      'post-4': 'async-standups-guide-remote-teams',
      'post-5': 'meeting-fatigue-causes-fixes',
      'post-6': 'best-ai-meeting-notetakers-compared',
      'post-7': 'turn-meeting-notes-into-action-items',
      'post-8': 'recorded-vs-live-notes',
      'post-9': 'meeting-overload-calendar-stress',
      'post-10': 'better-microsoft-teams-meetings',
      'post-11': 'automatic-meeting-recaps',
      'post-12': 'find-old-meeting-decisions-searchable-transcripts',
    };

    return [
      {
        // FAQ page was folded into the homepage during the redesign.
        source: '/faq',
        destination: '/#faq',
        permanent: true,
      },
      // Old blog slugs predate the InboxZap-to-Lumina rebrand. Redirecting
      // (instead of 404ing) keeps whatever indexing/link equity they have.
      ...Object.entries(renamedPosts).map(([oldSlug, newSlug]) => ({
        source: `/blog/${oldSlug}`,
        destination: `/blog/${newSlug}`,
        permanent: true,
      })),
    ];
  },
};

module.exports = nextConfig;
