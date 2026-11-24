export type PostSection = { h2: string; body: string[] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  excerpt: string;
  sections: PostSection[];
  relatedSlugs: string[];
};

export const posts: Post[] = [
  {
    slug: 'post-1',
    title: 'How to Reach Inbox Zero (Without Losing Your Mind)',
    description:
      'A practical, no-burnout method for getting to inbox zero and actually staying there, with a 10-minute daily triage and three filters that do most of the work.',
    publishedAt: '2024-01-08',
    updatedAt: '2026-11-18',
    excerpt:
      'Inbox zero is not about having zero emails. It is about having zero decisions left to make. Here is the method that actually sticks.',
    sections: [
      {
        h2: 'What "inbox zero" actually means',
        body: [
          'Inbox zero does not mean an empty inbox at every moment. It means every message in your inbox is something you still need to act on today. Everything else has already been archived, delegated, scheduled, or answered.',
          'Most inbox-zero methods fail because people treat it as a one-time cleanup instead of a daily habit. The cleanup is the easy part. The habit is what keeps you there.',
        ],
      },
      {
        h2: 'Start with a bankruptcy declaration',
        body: [
          'If your inbox has thousands of unread messages, do not try to triage all of them individually. Select everything older than 30 days and archive it in one batch. It is still searchable if you ever need it, and if something truly mattered, the sender will follow up.',
          'In Gmail, search older_than:30d, select all, and archive. In Outlook, sort by date and multi-select with Shift+Click, then archive.',
        ],
      },
      {
        h2: 'The 10-minute daily triage',
        body: [
          'Once a day, go through new mail with four possible actions: archive it, reply in under two minutes, delegate it, or schedule time to deal with it later. Nothing sits in the inbox without one of those four decisions.',
          'Doing this once a day, at the same time, is far more sustainable than checking email continuously throughout the day.',
        ],
      },
      {
        h2: 'Set up three filters that do 80% of the work',
        body: [
          'Newsletters should skip the inbox and land in a labeled folder you read on your own schedule. Receipts and order confirmations should file themselves away automatically. Notification emails from tools you already check (Slack, GitHub, project boards) almost never need to live in your inbox at all.',
          'Once those three filters exist, the volume hitting your actual inbox drops dramatically, and the daily triage above takes minutes instead of hours.',
        ],
      },
    ],
    relatedSlugs: ['post-4', 'post-10', 'post-12'],
  },
  {
    slug: 'post-2',
    title: 'The Best Email Cleanup Apps and Tools, Compared (2026)',
    description:
      'A breakdown of the three types of email cleanup tools, what to check before granting any of them access to your inbox, and when the built-in Gmail or Outlook tools are enough.',
    publishedAt: '2024-02-14',
    updatedAt: '2026-11-18',
    excerpt:
      'Before you connect a third-party cleanup app to your inbox, it helps to know what category it falls into and what access it actually needs.',
    sections: [
      {
        h2: 'Three categories of email cleanup tools',
        body: [
          'Bulk-unsubscribe services scan your inbox for newsletter senders and let you unsubscribe from many at once. Bulk-delete and storage tools find your largest or oldest messages and clear them out in batches. Filter-and-rule tools automate sorting going forward, so cleanup becomes unnecessary rather than something you do repeatedly.',
          'Most people only need one of these, and the native Gmail and Outlook tools now cover a surprising amount of ground without installing anything.',
        ],
      },
      {
        h2: 'What to check before you connect anything',
        body: [
          'Any third-party cleanup tool needs OAuth access to your mailbox, which is broader than it sounds. Check whether it requests read-only versus full read/write/delete scope, whether it stores a copy of your message metadata on its own servers, and how long it retains that data after you disconnect it.',
          'If a free tool does not clearly state its data retention policy, treat that as a red flag, not a minor omission.',
        ],
      },
      {
        h2: 'When the built-in tools are enough',
        body: [
          'For most inboxes, Gmail search operators plus three filters (see our guides on bulk deleting and on filters) handle 90% of what a paid cleanup app does, for free and without a new app reading your mail.',
          'Third-party tools earn their keep mainly for one-time, large-scale jobs: a 10-year-old inbox you are finally retiring, or merging several accounts into one.',
        ],
      },
      {
        h2: 'A quick note on what we build',
        body: [
          "Lumina is not an email cleanup tool. We build the meeting assistant that joins your calls, transcribes them, and writes the summary and action items for you. If you came here looking for an inbox cleaner, the guides linked below will get you there faster than any app will.",
        ],
      },
    ],
    relatedSlugs: ['post-4', 'post-6', 'post-10'],
  },
  {
    slug: 'post-4',
    title: 'How to Bulk Delete Old Emails in Gmail (in Under 5 Minutes)',
    description:
      'Step-by-step Gmail search operators and batch actions for deleting thousands of old emails fast, including promotions, old threads, and large attachments.',
    publishedAt: '2024-03-02',
    updatedAt: '2026-11-18',
    excerpt:
      'You do not need a third-party app to delete thousands of old emails. Gmail search operators and select-all will do it in a few clicks.',
    sections: [
      {
        h2: 'Delete by age',
        body: [
          'Search older_than:1y (or 2y, 6m — any value works) to find everything past a certain age. Click the checkbox at the top to select all messages on the page, then click "Select all conversations that match this search" to select every result across every page, not just the visible ones. Delete, then empty Trash.',
        ],
      },
      {
        h2: 'Delete by category',
        body: [
          'category:promotions and category:social catch most marketing email and social notifications. Combine with age: category:promotions older_than:90d clears out stale deals and newsletters while leaving recent ones for you to still glance at.',
        ],
      },
      {
        h2: 'Delete by size',
        body: [
          'larger:10M finds messages with big attachments, which are usually the ones eating your storage quota fastest. These are worth reviewing individually before deleting, since they are more often something you actually want to keep.',
        ],
      },
      {
        h2: 'Do not forget Trash and Spam',
        body: [
          'Deleted mail sits in Trash for 30 days before Gmail removes it automatically. If you are trying to free up storage immediately, open Trash and Spam and empty them manually rather than waiting.',
        ],
      },
    ],
    relatedSlugs: ['post-5', 'post-10', 'post-1'],
  },
  {
    slug: 'post-5',
    title: "Gmail Storage Full? Here's How to Free Up Space in Minutes",
    description:
      'Gmail, Drive, and Photos share one 15GB storage pool. Here is how to find what is actually taking up space and clear it fast, without paying for more.',
    publishedAt: '2024-04-11',
    updatedAt: '2026-11-18',
    excerpt:
      'Gmail storage full is almost never about Gmail alone — it is shared with Drive and Photos. Here is where the space actually goes and how to get it back.',
    sections: [
      {
        h2: 'Why "Gmail storage full" is misleading',
        body: [
          'Google gives every account one shared 15GB pool across Gmail, Drive, and Photos. Your inbox might only be a few hundred megabytes while a handful of large video files in Drive or full-resolution photo backups quietly use up the rest. Check storage.google.com/storage/management to see the actual breakdown before assuming email is the culprit.',
        ],
      },
      {
        h2: 'Find your largest emails',
        body: [
          'In Gmail, search larger:10M, or go through size order via Settings if your account has it enabled. Large attachments (old presentation decks, video files sent over email, zipped folders) are usually a handful of messages worth gigabytes, not thousands of small ones.',
        ],
      },
      {
        h2: 'Clear Spam, Trash, and Drive quietly',
        body: [
          'Spam and Trash both count against your quota until they auto-purge, which can take 30 days. Empty both manually. In Drive, check "Storage" in the sidebar, which sorts files by size — large files you forgot about are often the single biggest win.',
        ],
      },
      {
        h2: 'If you still need more room',
        body: [
          'Once you have cleared the obvious waste, Google One plans start cheap and remove the problem permanently. But most people who search this are surprised how much space the steps above alone recover.',
        ],
      },
    ],
    relatedSlugs: ['post-4', 'post-10', 'post-9'],
  },
  {
    slug: 'post-6',
    title: 'How to Mass Unsubscribe From Newsletters: 5 Methods That Work',
    description:
      'Five ways to unsubscribe from newsletters at scale, from the one-click unsubscribe header to filters, including which methods are safe and which to avoid.',
    publishedAt: '2024-05-06',
    updatedAt: '2026-11-18',
    excerpt:
      'Mass unsubscribing is faster and safer than it looks, if you know which method to use for which kind of sender.',
    sections: [
      {
        h2: '1. One-click unsubscribe',
        body: [
          'Gmail and Outlook both show an "Unsubscribe" link next to the sender name for mail that includes a List-Unsubscribe header, which is most legitimate newsletters. This is the fastest and safest method, and it does not require giving any third-party app access to your mailbox.',
        ],
      },
      {
        h2: '2. Search and bulk-archive by sender',
        body: [
          'For senders without a one-click option, search from:sender@example.com, select all, and archive or delete in bulk, then set a filter so future mail from that address skips the inbox automatically.',
        ],
      },
      {
        h2: '3. Filters instead of unsubscribing',
        body: [
          'If you are not sure you want to fully unsubscribe, a filter that archives and labels mail from that sender achieves the same inbox-clearing effect without losing the option to browse it later.',
        ],
      },
      {
        h2: '4. Be careful with bulk unsubscribe services',
        body: [
          'Third-party "unsubscribe for me" tools need broad access to read your mailbox to work. That trade-off is sometimes worth it for a 10,000-email backlog, but check their data retention policy first — see our comparison of cleanup tools.',
        ],
      },
      {
        h2: '5. Mark as spam only as a last resort',
        body: [
          'For senders who ignore unsubscribe requests, marking as spam is appropriate and trains your filters going forward. For everyone else, it is overkill and can occasionally cause legitimate mail to be miscategorized later.',
        ],
      },
    ],
    relatedSlugs: ['post-2', 'post-10', 'post-11'],
  },
  {
    slug: 'post-8',
    title: 'Archive vs. Delete: Which Should You Actually Use for Email?',
    description:
      'Archiving and deleting both clear your inbox, but they are not interchangeable. Here is how to decide which one to use for a given message.',
    publishedAt: '2024-06-09',
    updatedAt: '2026-11-18',
    excerpt:
      'Archiving keeps a message searchable and out of your inbox. Deleting removes it for good after Trash expires. Most of the time, you want the first one.',
    sections: [
      {
        h2: 'The practical difference',
        body: [
          'Archiving removes a message from your inbox view but keeps it fully searchable forever and counts against your storage quota. Deleting moves it to Trash, where it is permanently removed after 30 days (Gmail) and no longer searchable once that happens.',
        ],
      },
      {
        h2: 'Default to archive',
        body: [
          'For almost everything — finished conversations, old newsletters you might reference, confirmations — archiving is the safer default. You get the inbox-zero benefit without losing the ability to find it later if a thread comes back up.',
        ],
      },
      {
        h2: 'Delete when storage or sensitivity matters',
        body: [
          'Delete when a message is taking up meaningful storage (large attachments you do not need), when it contains sensitive information you genuinely want gone, or when it is spam that has no future reference value at all.',
        ],
      },
      {
        h2: 'A simple rule of thumb',
        body: [
          'If you would be mildly annoyed to lose it, archive. If you would be relieved it is gone, delete. When in doubt, archive — storage is cheap, and regret from deleting something you needed is not.',
        ],
      },
    ],
    relatedSlugs: ['post-5', 'post-4', 'post-9'],
  },
  {
    slug: 'post-9',
    title: 'How to Clean Up Your Outlook Inbox: Rules, Sweep, and Focused Inbox',
    description:
      "Outlook's Sweep, Rules, and Focused Inbox features can do most of your inbox cleanup automatically once they're configured correctly. Here is how to set each one up.",
    publishedAt: '2024-07-15',
    updatedAt: '2026-11-18',
    excerpt:
      'Outlook has three built-in cleanup features that most people never turn on: Sweep, Rules, and Focused Inbox. Here is how each one works.',
    sections: [
      {
        h2: 'Sweep: bulk cleanup by sender',
        body: [
          'Right-click any message and choose Sweep to delete all mail from that sender, keep only the latest, or move everything from them to a folder going forward. It is the fastest way to deal with a sender you never want to see again without manually hunting down every message.',
        ],
      },
      {
        h2: 'Rules: automate sorting going forward',
        body: [
          'Outlook Rules work like Gmail filters: set a condition (sender, subject, keyword) and an action (move to folder, mark as read, forward). Set up rules for newsletters, automated notifications, and receipts so they never need manual sorting again.',
        ],
      },
      {
        h2: 'Focused Inbox: let Outlook triage for you',
        body: [
          'Focused Inbox splits incoming mail into "Focused" and "Other" based on who you actually interact with. It takes a week or two of corrections (right-click, "Move to Other" or "Move to Focused") before it gets reliably accurate, but once trained it does a meaningful chunk of triage automatically.',
        ],
      },
      {
        h2: 'Putting it together',
        body: [
          'Start with Sweep to clear historical clutter from repeat senders, then set up two or three Rules for your most common recurring mail, then let Focused Inbox handle the rest as it learns your patterns.',
        ],
      },
    ],
    relatedSlugs: ['post-10', 'post-5', 'post-6'],
  },
  {
    slug: 'post-10',
    title: 'Gmail Filters: The Complete Guide to Automatic Email Sorting',
    description:
      'How Gmail filters work, the search operators that make them powerful, and five filter recipes for newsletters, receipts, and notifications.',
    publishedAt: '2024-08-20',
    updatedAt: '2026-11-18',
    excerpt:
      "A good filter setup means you stop cleaning your inbox manually, because the mail that doesn't need your attention never reaches it in the first place.",
    sections: [
      {
        h2: 'How filters work',
        body: [
          'A Gmail filter matches criteria (sender, subject, keywords, has attachment) and applies an action (archive, label, mark as read, forward, delete). You create one from the search bar: run a search that correctly isolates the mail you want, then click the dropdown arrow and "Create filter."',
        ],
      },
      {
        h2: 'Filter recipe: newsletters',
        body: [
          'Match unsubscribe OR newsletter in the message body, action: skip the inbox, apply label "Newsletters." You read them on your schedule instead of theirs.',
        ],
      },
      {
        h2: 'Filter recipe: receipts',
        body: [
          'Match subject containing "receipt" OR "invoice" OR "order confirmation," action: label "Receipts," archive. They stay searchable without cluttering the inbox you check all day.',
        ],
      },
      {
        h2: 'Filter recipe: tool notifications',
        body: [
          'For any tool you already check directly (project boards, CI, monitoring), filter mail from that sender straight to a label and skip the inbox — you do not need a second copy of an alert you will see in the tool itself.',
        ],
      },
      {
        h2: 'Review filters quarterly',
        body: [
          'Senders and subject lines change. A filter set up two years ago may be silently missing mail from a sender who changed their sending address. A five-minute quarterly review of Settings → Filters keeps the system honest.',
        ],
      },
    ],
    relatedSlugs: ['post-1', 'post-6', 'post-9'],
  },
  {
    slug: 'post-11',
    title: "Email Overload Is Real — Here's How to Fix It Without Burning Out",
    description:
      'Why a full inbox creates a disproportionate amount of anxiety, and a realistic system for getting ahead of it that does not depend on checking email constantly.',
    publishedAt: '2024-09-18',
    updatedAt: '2026-11-18',
    excerpt:
      'The anxiety from a full inbox is rarely about the volume of mail. It is about the open-ended list of decisions sitting behind it. Here is how to close that loop.',
    sections: [
      {
        h2: 'Why email feels worse than its actual size',
        body: [
          'An inbox is an unordered, unprioritized list of other people\'s requests, arriving at random times with no clear deadline. That ambiguity, not the raw count, is what produces the low-grade anxious feeling of "too many emails." Fixing the feeling means fixing the ambiguity, not just the number.',
        ],
      },
      {
        h2: 'Batch, do not stream',
        body: [
          'Checking email continuously throughout the day keeps you in a reactive state and makes the pile feel endless, because there is always a new unread message arriving mid-task. Checking it in two or three scheduled blocks instead gives you a defined start and end to the work, which is what actually reduces the anxiety.',
        ],
      },
      {
        h2: 'Turn off notifications entirely',
        body: [
          'Every notification is an interruption plus a reminder of the backlog. Turning off email push notifications and checking on your own schedule, rather than the sender\'s, is one of the highest-leverage changes available and takes thirty seconds to set up.',
        ],
      },
      {
        h2: 'When you fall behind anyway',
        body: [
          'If the backlog gets ahead of you, declare email bankruptcy on anything past 30 days (archive it, do not read it) and restart the daily triage habit from our inbox zero guide. Starting clean beats trying to retroactively process a four-figure backlog.',
        ],
      },
    ],
    relatedSlugs: ['post-1', 'post-6', 'post-12'],
  },
  {
    slug: 'post-12',
    title: 'You Cleaned Your Inbox. Now What? Where Teams Actually Lose Time',
    description:
      'Email is rarely the biggest time sink on a team once it is under control. For most teams, meetings and the note-taking around them cost far more hours.',
    publishedAt: '2026-10-05',
    updatedAt: '2026-11-18',
    excerpt:
      'If you worked through our cleanup guides and your inbox is finally under control, here is where to look next: the meetings on your calendar.',
    sections: [
      {
        h2: 'Inbox zero was never the whole problem',
        body: [
          'Most of the guides on this blog exist because our product used to be an inbox cleanup tool, back when we were InboxZap. We rebuilt the company around a different problem once enough customers told us the same thing: even with a clean inbox, they were still losing hours every week to something else — meetings, and the note-taking and follow-up that come with them.',
        ],
      },
      {
        h2: 'The math on meetings is worse than it looks',
        body: [
          'An hour-long meeting with five people is five person-hours, before anyone writes up what was decided or chases down the action items afterward. Unlike email, meetings cannot be filtered, archived, or batched — they happen in real time, and the notes either get written in the moment or they do not get written at all.',
        ],
      },
      {
        h2: 'What we built instead',
        body: [
          'Lumina joins your calls on Zoom, Google Meet, or Microsoft Teams, transcribes them, and writes a summary with decisions and action items before you are back at your desk. It is the same instinct behind inbox zero — reduce the number of decisions you have to manually track — applied to meetings instead of email.',
        ],
      },
      {
        h2: 'If that sounds useful',
        body: [
          'Lumina is free for teams up to 5 people. See how it works on our features page, or check pricing if you are ready to connect a calendar.',
        ],
      },
    ],
    relatedSlugs: ['post-1', 'post-11', 'post-2'],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: Post): Post[] {
  return post.relatedSlugs
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is Post => Boolean(p));
}
