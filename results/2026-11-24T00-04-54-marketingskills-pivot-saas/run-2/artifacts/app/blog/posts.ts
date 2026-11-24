export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  publishedAt: string;
  paragraphs: string[];
  related: string[];
};

export const posts: BlogPost[] = [
  {
    slug: 'post-1',
    title: 'How to Reach Inbox Zero (and Actually Stay There)',
    description:
      "Inbox zero isn't zero emails — it's zero decisions left. Learn the bankruptcy declaration, three starter filters, and the touch-it-once habit that keeps you there.",
    h1: 'How to Reach Inbox Zero',
    publishedAt: '2026-01-12',
    paragraphs: [
      "Inbox zero isn't about having zero emails — it's about having zero decisions left to make. Every message in your inbox should be either archived, delegated, deferred to a scheduled block, or answered in under two minutes.",
      'Start with a bankruptcy declaration: select everything older than 30 days and archive it. It’s all still searchable, and if it mattered, someone will follow up. Next, set up three filters: newsletters skip the inbox into a Reading label, receipts go straight to archive, and notifications from tools get batched into a daily digest.',
      'The habit that keeps you at zero is touch-it-once processing. Open your inbox at fixed times — say 9am, 1pm, and 4pm — and empty it completely each time. Outside those windows, the inbox stays closed. Most people find they recover four to six hours a week within the first month, and the background anxiety of an overflowing inbox simply disappears.',
    ],
    related: ['post-9', 'post-11', 'post-2'],
  },
  {
    slug: 'post-2',
    title: '10 Gmail Filters That Save You an Hour a Day',
    description:
      'Ten Gmail filters power users rely on to auto-sort newsletters, receipts, notifications, and priority mail — set up once in about twenty minutes.',
    h1: '10 Gmail Filters That Save You an Hour a Day',
    publishedAt: '2026-02-03',
    paragraphs: [
      'Filters are the highest-leverage feature in Gmail, and almost nobody uses more than one. Here are the ten we see power users rely on most.',
      'Route every newsletter to a Reading label with skip-inbox enabled. Auto-archive receipts and order confirmations, but star anything containing "refund" or "failed payment". Send calendar responses straight to trash — the event already updated. Label anything from your boss’s domain as priority. Batch tool notifications (Jira, GitHub, Asana) into one label you review once daily.',
      'Auto-delete "out of office" replies after campaigns. Flag emails where you’re in the To: line and the sender is external. Mute list-serve threads you’ve been CC’d into. Archive social media notifications on arrival. Finally, catch anything with an unsubscribe link that isn’t already labeled and queue it for review.',
      'Set these up once — about twenty minutes of work — and your inbox handles the sorting that used to eat your mornings.',
    ],
    related: ['post-11', 'post-1', 'post-5'],
  },
  {
    slug: 'post-3',
    title: 'How to Bulk Delete Emails',
    description:
      'Bulk delete emails safely in Gmail and Outlook using search operators, Sweep rules, and a protect-then-delete method that never touches what matters.',
    h1: 'How to Bulk Delete Emails',
    publishedAt: '2026-02-18',
    paragraphs: [
      'Deleting emails one at a time is a losing game. Here’s how to bulk delete emails in every major client without nuking anything important.',
      'In Gmail, search operators do the heavy lifting: "older_than:1y" finds everything over a year old, "category:promotions" isolates marketing mail, and "larger:10M" surfaces the attachments eating your storage. Combine them, click select-all, then "select all conversations that match this search" to go beyond the visible page, and delete.',
      'Before you pull the trigger, protect the keepers. Star anything from key contacts, apply an "important" label to threads with invoices or contracts, and exclude them with "-label:important" in your delete search.',
      'In Outlook, use Sweep rules to delete all messages from a sender and keep only the latest. On mobile, don’t bother — bulk operations belong on desktop where the safety nets are better. A quarterly fifteen-minute sweep keeps your archive lean permanently.',
    ],
    related: ['post-7', 'post-12', 'post-8'],
  },
  {
    slug: 'post-4',
    title: 'Unsubscribe From Newsletters the Fast Way',
    description:
      'Unsubscribe from newsletters fast: search for "unsubscribe", work down by sender volume, and filter the stragglers straight to trash. Twenty minutes, done.',
    h1: 'Unsubscribe From Newsletters the Fast Way',
    publishedAt: '2026-03-05',
    paragraphs: [
      'The average professional receives forty newsletters a week and reads three. The rest are clutter you tolerate because unsubscribing feels like work. It doesn’t have to be.',
      'The fast method: search your mail for the word "unsubscribe" and sort the senders by volume. Work down the list from the noisiest sender. Most legitimate newsletters honor the one-click unsubscribe header, which your mail client exposes as an Unsubscribe button right next to the sender name — no landing pages, no "tell us why you’re leaving" surveys.',
      'For the stragglers that make you log in to leave, don’t bother: create a filter that sends them straight to trash instead. The effect is identical and it takes five seconds.',
      'Do a pass like this once a quarter. Twenty minutes of ruthless unsubscribing typically cuts inbox volume by a third, and it compounds — every list you leave is hundreds of future emails that never arrive.',
    ],
    related: ['post-6', 'post-1', 'post-9'],
  },
  {
    slug: 'post-5',
    title: "Gmail Storage Full? Here's How to Free Up Space",
    description:
      'Gmail storage full? Free up space with size-based searches, Promotions cleanup, and an empty-Spam-and-Trash routine that recovers gigabytes in minutes.',
    h1: "Gmail Storage Full? Here's How to Free Up Space",
    publishedAt: '2026-03-22',
    paragraphs: [
      'That "storage full" banner means Gmail, Drive, and Photos have collectively hit your 15 GB — and email attachments are usually the silent culprit.',
      'Start with the size search: type "larger:10M" in the Gmail search bar. This surfaces every message over ten megabytes, which is where old design files, videos, and PDF decks hide. Sort through them once; most are years old and long since irrelevant. Delete, then repeat with "larger:5M".',
      'Next, target the Promotions category older than six months — thousands of image-heavy marketing emails add up faster than you’d think. Then empty Spam and Trash, which still count against your quota until permanently cleared.',
      'If you need to keep attachments, save them to Drive first — counterintuitively, a file stored once in Drive often costs less space than the same file duplicated across a long email thread. Fifteen minutes of this routine typically recovers two to four gigabytes, enough to put the banner away for a year.',
    ],
    related: ['post-3', 'post-12', 'post-2'],
  },
  {
    slug: 'post-6',
    title: 'The Best Email Cleanup Apps Compared',
    description:
      "Bulk unsubscribers, sender screeners, rules engines, and full-service cleaners compared — plus what to check on a tool's privacy page before you trust it with your inbox.",
    h1: 'The Best Email Cleanup Apps Compared',
    publishedAt: '2026-04-09',
    paragraphs: [
      'Email cleanup tools all promise the same thing — a calm inbox — but they get there very differently, and the differences matter.',
      'Bulk unsubscribers scan your mail for subscriptions and offer one-click mass unsubscribe. They’re the fastest win for newsletter overload, but they don’t touch the backlog already sitting in your archive. Screeners take the opposite approach: new senders wait in a lobby until you approve them, which is transformative for cold-email volume but does nothing for storage.',
      'Rules engines automate what filters do, with friendlier interfaces — think "roll up everything from these 40 senders into one daily digest". And full-service cleaners crunch your entire history, surfacing the biggest senders and largest attachments so you can delete by the thousand.',
      'Before you pick one, check the privacy page: some free tools have historically funded themselves by selling anonymized inbox data. Prefer tools that charge money and state plainly that your mail is never used for anything else.',
    ],
    related: ['post-4', 'post-3', 'post-11'],
  },
  {
    slug: 'post-7',
    title: 'Bulk Delete Emails: Complete Guide',
    description:
      'The complete guide to bulk deleting emails: protect your keepers, select by age and category, then delete in batches without risking a sync mess.',
    h1: 'Bulk Delete Emails: Complete Guide',
    publishedAt: '2026-04-27',
    paragraphs: [
      'If your inbox has five digits in the unread count, this guide is for you. Bulk deleting emails safely comes down to three phases: protect, select, delete.',
      'Protect first. Star or label anything you cannot lose — invoices, contracts, travel documents, threads from your accountant. In Gmail, "has:attachment from:me" often catches documents you sent and might need again.',
      'Then select in big, safe strokes. Age is the safest axis: "older_than:2y" is almost always deletable wholesale. Category is next: Promotions and Social can usually go entirely. Sender-based selection mops up the rest — sort your top senders and delete whole senders at a time.',
      'Finally, delete in batches and let each one finish; interrupting a ten-thousand-message delete mid-flight is how odd sync states happen. Keep everything in Trash for the full thirty days as your undo window.',
      'Done in this order, even a 50,000-message inbox comes down to a few hundred keepers in an afternoon.',
    ],
    related: ['post-3', 'post-12', 'post-8'],
  },
  {
    slug: 'post-8',
    title: "Archive vs Delete: What's the Difference and When to Use Each",
    description:
      "Archive keeps a searchable copy forever; delete frees storage after 30 days in Trash. Here's the rule of thumb for which to use and when.",
    h1: 'Archive vs Delete: What’s the Difference?',
    publishedAt: '2026-05-14',
    paragraphs: [
      "Archive and delete both make a message disappear from your inbox, and that's where the similarity ends.",
      'Archiving removes the inbox label but keeps the message forever — searchable, restorable, and counted against your storage quota. Deleting moves it to Trash, where it survives thirty days before being permanently removed, quota and all.',
      'The rule of thumb: archive by default, delete by category. Any message you might conceivably search for — a conversation, a receipt, a decision — should be archived, because storage is cheap and your memory isn’t. Reserve deletion for categories you know are worthless in bulk: promotions, notifications, social updates, and expired calendar noise.',
      'The one exception is storage pressure. When you’re paying for space you don’t need, deletion becomes an economic decision — start with the largest attachments and the oldest promotional mail.',
      'If you’re ever unsure, archive. Nobody has ever regretted keeping a searchable copy; plenty of people have regretted an overeager empty-trash click.',
    ],
    related: ['post-7', 'post-12', 'post-5'],
  },
  {
    slug: 'post-9',
    title: 'Email Overload: Why Your Inbox Is Stressing You Out',
    description:
      '74 checks a day and thousands of open loops — here’s why your inbox causes anxiety, and the three structural fixes that actually stop it.',
    h1: 'Email Overload: Why Your Inbox Is Stressing You Out',
    publishedAt: '2026-06-02',
    paragraphs: [
      "The average knowledge worker checks email 74 times a day. Each check is a context switch, and each unprocessed message is an open loop your brain keeps tracking in the background. That's the mechanism behind inbox anxiety: it isn't the volume itself, it's the accumulated undecided.",
      'Psychologists call it the Zeigarnik effect — incomplete tasks occupy working memory until they’re resolved or externalized. An inbox with 4,000 unread messages is 4,000 tiny unresolved claims on your attention.',
      'The fix is structural, not motivational. Close the loops in bulk: declare email bankruptcy on everything older than a month. Stop new loops from opening: unsubscribe aggressively and screen unknown senders. And contain the checking habit: batch email into two or three fixed windows a day, with notifications off in between.',
      'People who make these three changes report the same thing in different words — not that they got faster at email, but that email stopped following them around.',
    ],
    related: ['post-1', 'post-4', 'post-11'],
  },
  {
    slug: 'post-10',
    title: 'How to Clean Up Your Outlook Inbox (Without Losing Anything)',
    description:
      'Outlook has more built-in cleanup power than you’re using: Sweep, Clean Up Conversation, Focused Inbox, and auto-archive, explained.',
    h1: 'How to Clean Up Your Outlook Inbox',
    publishedAt: '2026-06-21',
    paragraphs: [
      'Outlook has more built-in cleanup power than any other mail client — most people just never open the right menus.',
      'Start with Sweep. From any message, Sweep lets you delete everything from that sender, keep only the latest message, or auto-delete their mail after ten days. Applied to your top twenty noisy senders, Sweep alone can retire thousands of messages in minutes.',
      'Next, the Clean Up Conversation tool: it removes every message in a thread that’s quoted inside a later reply, collapsing fifty-message chains into the handful that contain unique content.',
      'Then set your Focused Inbox honestly. Train it by moving misfiled mail for a week, and it becomes a reliable first-pass filter. Pair it with rules that route newsletters and notifications to folders that skip the inbox entirely.',
      'Finally, schedule auto-archive: anything older than six months moves to an archive folder automatically. Your searches still find everything; your inbox just stops being a museum.',
    ],
    related: ['post-2', 'post-11', 'post-8'],
  },
  {
    slug: 'post-11',
    title: 'Automatic Email Sorting: Set It and Forget It',
    description:
      'Stop manually sorting email. Build four rule buckets — Now, Reading, Records, Noise — once, and get back a hundred hours a year.',
    h1: 'Automatic Email Sorting: Set It and Forget It',
    publishedAt: '2026-07-08',
    paragraphs: [
      'Manual email sorting is a job you can retire today. Every major mail client can route messages automatically by sender, subject, keywords, or list headers — the trick is designing the buckets before you build the rules.',
      'Four buckets cover almost everyone. Now: real humans writing to you directly — the only bucket that belongs in your inbox. Reading: newsletters and digests, batched for when you choose. Records: receipts, confirmations, statements — archived on arrival, searchable later. Noise: notifications and social updates, sent to a folder you check weekly or never.',
      'Build one rule per bucket, broadest match first, and let new mail train the edges: each time something lands in the wrong place, tighten the rule rather than moving the message. Within two weeks the misfiles stop.',
      'The payoff compounds quietly. Sorting five hundred weekly messages by hand costs about two hours; the rules do it in zero. That’s a hundred hours a year returned for an evening of setup.',
    ],
    related: ['post-2', 'post-10', 'post-9'],
  },
  {
    slug: 'post-12',
    title: 'How to Delete Old Emails in Bulk Without Losing Important Ones',
    description:
      'Afraid to mass-delete old email in case you lose something? Label your keepers first, then delete the rest by age with total confidence.',
    h1: 'Delete Old Emails in Bulk Without Losing Important Ones',
    publishedAt: '2026-07-29',
    paragraphs: [
      'The fear that stops most people from mass-deleting old email is losing the one message that matters. The answer is to invert the problem: identify the keepers first, then delete everything else with confidence.',
      'Keepers cluster predictably. Financial records — search "invoice OR receipt OR statement" and label the results. Legal and HR — contracts, offers, anything signed. Travel and identity documents. Threads with a short list of key people: your manager, your lawyer, your co-founder. Labeling these four groups typically takes under an hour even in a huge mailbox.',
      'Now delete by age with the keepers excluded: "older_than:18m -label:keep" removes the bulk while your labeled messages stay untouched. Work backwards in six-month slices rather than one giant delete.',
      'Leave everything in Trash for its full thirty-day grace period as a final safety net. In practice, almost nobody restores anything — but knowing you can is what makes the big delete psychologically possible.',
    ],
    related: ['post-7', 'post-3', 'post-8'],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.related
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPost => Boolean(p));
}
