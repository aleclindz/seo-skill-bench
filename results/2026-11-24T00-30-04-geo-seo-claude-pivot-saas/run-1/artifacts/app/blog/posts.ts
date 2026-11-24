export type Post = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  datePublished: string;
  dateModified: string;
  paragraphs: string[];
};

export const posts: Post[] = [
  {
    slug: 'inbox-zero-method',
    title: 'How to Reach Inbox Zero (And Actually Stay There)',
    description:
      'A practical, step-by-step method for reaching inbox zero and staying there — three habits that hold up long after the initial cleanup.',
    excerpt:
      'Inbox zero isn’t about having zero emails — it’s about having zero decisions left to make.',
    datePublished: '2025-02-10',
    dateModified: '2026-11-24',
    paragraphs: [
      'Inbox zero isn’t about having zero emails — it’s about having zero decisions left to make. Every message in your inbox should be either archived, delegated, deferred to a scheduled block, or answered in under two minutes.',
      'Start with a bankruptcy declaration: select everything older than 30 days and archive it. It’s all still searchable, and if it mattered, someone will follow up. Next, set up three filters: newsletters skip the inbox into a Reading label, receipts go straight to archive, and notifications from tools get batched into a daily digest.',
      'The habit that keeps you at zero is touch-it-once processing. Open your inbox at fixed times — say 9am, 1pm, and 4pm — and empty it completely each time. Outside those windows, the inbox stays closed. Most people find they recover four to six hours a week within the first month, and the background anxiety of an overflowing inbox simply disappears.',
      'If your starting backlog is in the thousands, filters alone won’t clear it. A one-time bulk cleanup with InboxZap gets you to a clean starting line in minutes, so the habits above have something manageable to maintain.',
    ],
  },
  {
    slug: 'gmail-filters-guide',
    title: '10 Gmail Filters That Save You an Hour a Day',
    description:
      'The ten Gmail filters power users rely on to stop sorting mail by hand — set up once in about twenty minutes.',
    excerpt:
      'Filters are the highest-leverage feature in Gmail, and almost nobody uses more than one.',
    datePublished: '2025-03-04',
    dateModified: '2026-11-24',
    paragraphs: [
      'Filters are the highest-leverage feature in Gmail, and almost nobody uses more than one. Here are the ten we see power users rely on most.',
      'Route every newsletter to a Reading label with skip-inbox enabled. Auto-archive receipts and order confirmations, but star anything containing "refund" or "failed payment". Send calendar responses straight to trash — the event already updated. Label anything from your boss’s domain as priority. Batch tool notifications (Jira, GitHub, Asana) into one label you review once daily.',
      'Auto-delete "out of office" replies after campaigns. Flag emails where you’re in the To: line and the sender is external. Mute list-serve threads you’ve been CC’d into. Archive social media notifications on arrival. Finally, catch anything with an unsubscribe link that isn’t already labeled and queue it for review.',
      'Set these up once — about twenty minutes of work — and your inbox handles the sorting that used to eat your mornings. InboxZap can build this rule set for you automatically if you’d rather skip the setup entirely.',
    ],
  },
  {
    slug: 'bulk-delete-emails',
    title: 'How to Bulk Delete Emails (Without Losing Anything Important)',
    description:
      'The complete, safe method for bulk deleting thousands of emails in Gmail or Outlook: protect the keepers first, then delete by age, category, and sender.',
    excerpt:
      'Deleting emails one at a time is a losing game. Here’s how to bulk delete thousands of emails safely, in every major client.',
    datePublished: '2025-01-22',
    dateModified: '2026-11-24',
    paragraphs: [
      'Deleting emails one at a time is a losing game, and if your unread count has five digits, hand-picking messages will never catch up. Bulk deleting emails safely comes down to three phases: protect, select, delete.',
      'Protect first. Star or label anything you cannot lose — invoices, contracts, travel documents, threads from your accountant or lawyer. In Gmail, "has:attachment from:me" often catches documents you sent and might need again. Financial records are the easiest to round up: search "invoice OR receipt OR statement" and label the results before you touch anything else.',
      'Then select in big, safe strokes. Age is the safest axis — Gmail’s "older_than:1y" or "older_than:2y" operator is almost always deletable wholesale. Category is next: "category:promotions" and Social can usually go entirely. "larger:10M" surfaces the attachments eating your storage. Sender-based selection mops up the rest — sort your top senders and delete whole senders at a time, excluding anything you’ve already labeled with "-label:keep".',
      'In Outlook, Sweep rules do the same job: delete all messages from a sender, keep only the latest, or auto-delete mail after a set number of days. On mobile, don’t bother — bulk operations belong on desktop where the safety nets are better.',
      'Finally, delete in batches and let each one finish; interrupting a ten-thousand-message delete mid-flight is how odd sync states happen. Keep everything in Trash for the full thirty-day grace period as your undo window. Done in this order, even a 50,000-message inbox comes down to a few hundred keepers in an afternoon — or a few minutes if you let InboxZap run the protect-select-delete sequence for you.',
    ],
  },
  {
    slug: 'unsubscribe-from-newsletters',
    title: 'Unsubscribe From Newsletters the Fast Way',
    description:
      'The average professional gets forty newsletters a week and reads three. Here’s how to mass unsubscribe in one sitting.',
    excerpt:
      'Unsubscribing feels like work, so most people never do it. It doesn’t have to be.',
    datePublished: '2025-04-18',
    dateModified: '2026-11-24',
    paragraphs: [
      'The average professional receives forty newsletters a week and reads three. The rest are clutter you tolerate because unsubscribing feels like work. It doesn’t have to be.',
      'The fast method: search your mail for the word "unsubscribe" and sort the senders by volume. Work down the list from the noisiest sender. Most legitimate newsletters honor the one-click unsubscribe header, which your mail client exposes as an Unsubscribe button right next to the sender name — no landing pages, no "tell us why you’re leaving" surveys.',
      'For the stragglers that make you log in to leave, don’t bother: create a filter that sends them straight to trash instead. The effect is identical and it takes five seconds.',
      'Do a pass like this once a quarter, or let InboxZap run a mass unsubscribe sweep automatically. Twenty minutes of ruthless unsubscribing typically cuts inbox volume by a third, and it compounds — every list you leave is hundreds of future emails that never arrive.',
    ],
  },
  {
    slug: 'gmail-storage-full',
    title: 'Gmail Storage Full? Here’s How to Free Up Space',
    description:
      'Stuck at your 15GB Gmail limit? Here’s exactly where the space is going and how to clear it in about fifteen minutes.',
    excerpt:
      'That "storage full" banner means Gmail, Drive, and Photos have collectively hit your 15GB — and email attachments are usually the silent culprit.',
    datePublished: '2025-05-02',
    dateModified: '2026-11-24',
    paragraphs: [
      'That "storage full" banner means Gmail, Drive, and Photos have collectively hit your 15 GB — and email attachments are usually the silent culprit.',
      'Start with the size search: type "larger:10M" in the Gmail search bar. This surfaces every message over ten megabytes, which is where old design files, videos, and PDF decks hide. Sort through them once; most are years old and long since irrelevant. Delete, then repeat with "larger:5M".',
      'Next, target the Promotions category older than six months — thousands of image-heavy marketing emails add up faster than you’d think. Then empty Spam and Trash, which still count against your quota until permanently cleared.',
      'If you need to keep attachments, save them to Drive first — counterintuitively, a file stored once in Drive often costs less space than the same file duplicated across a long email thread. Fifteen minutes of this routine typically recovers two to four gigabytes, enough to put the banner away for a year. InboxZap can scan for your largest attachments and oldest promotional mail in one pass if you’d rather not hunt through search operators.',
    ],
  },
  {
    slug: 'best-email-cleanup-apps',
    title: 'The Best Email Cleanup Apps Compared',
    description:
      'Bulk unsubscribers, inbox screeners, rules engines, and full-service cleaners all promise a calm inbox — here’s how they actually differ.',
    excerpt:
      'Email cleanup tools all promise the same thing — a calm inbox — but they get there very differently, and the differences matter.',
    datePublished: '2025-06-09',
    dateModified: '2026-11-24',
    paragraphs: [
      'Email cleanup tools all promise the same thing — a calm inbox — but they get there very differently, and the differences matter.',
      'Bulk unsubscribers scan your mail for subscriptions and offer one-click mass unsubscribe. They’re the fastest win for newsletter overload, but they don’t touch the backlog already sitting in your archive. Screeners take the opposite approach: new senders wait in a lobby until you approve them, which is transformative for cold-email volume but does nothing for storage.',
      'Rules engines automate what filters do, with friendlier interfaces — think "roll up everything from these 40 senders into one daily digest". And full-service cleaners crunch your entire history, surfacing the biggest senders and largest attachments so you can delete by the thousand.',
      'Before you pick one, check the privacy page: some free tools have historically funded themselves by selling anonymized inbox data. Prefer tools that charge money and state plainly that your mail is never used for anything else. InboxZap combines bulk unsubscribe, bulk delete, and automatic sorting in one free-to-start tool, with a published policy that your mail is never sold or used to train anything.',
    ],
  },
  {
    slug: 'archive-vs-delete-email',
    title: 'Archive vs Delete: What’s the Difference and When to Use Each',
    description:
      'Archive and delete both clear your inbox, but they behave very differently. Here’s the rule of thumb for which one to use.',
    excerpt:
      'Archive and delete both make a message disappear from your inbox, and that’s where the similarity ends.',
    datePublished: '2025-07-01',
    dateModified: '2026-11-24',
    paragraphs: [
      'Archive and delete both make a message disappear from your inbox, and that’s where the similarity ends.',
      'Archiving removes the inbox label but keeps the message forever — searchable, restorable, and counted against your storage quota. Deleting moves it to Trash, where it survives thirty days before being permanently removed, quota and all.',
      'The rule of thumb: archive by default, delete by category. Any message you might conceivably search for — a conversation, a receipt, a decision — should be archived, because storage is cheap and your memory isn’t. Reserve deletion for categories you know are worthless in bulk: promotions, notifications, social updates, and expired calendar noise.',
      'The one exception is storage pressure. When you’re paying for space you don’t need, deletion becomes an economic decision — start with the largest attachments and the oldest promotional mail. If you’re ever unsure, archive. Nobody has ever regretted keeping a searchable copy; plenty of people have regretted an overeager empty-trash click.',
    ],
  },
  {
    slug: 'email-overload',
    title: 'Email Overload: Why Your Inbox Is Stressing You Out',
    description:
      'It isn’t the volume of email that causes anxiety — it’s the accumulated undecided. Here’s the psychology, and the three structural fixes that work.',
    excerpt:
      'The average knowledge worker checks email 74 times a day. Each check is a context switch.',
    datePublished: '2025-08-14',
    dateModified: '2026-11-24',
    paragraphs: [
      'The average knowledge worker checks email 74 times a day. Each check is a context switch, and each unprocessed message is an open loop your brain keeps tracking in the background. That’s the mechanism behind inbox anxiety: it isn’t the volume itself, it’s the accumulated undecided.',
      'Psychologists call it the Zeigarnik effect — incomplete tasks occupy working memory until they’re resolved or externalized. An inbox with 4,000 unread messages is 4,000 tiny unresolved claims on your attention.',
      'The fix is structural, not motivational. Close the loops in bulk: declare email bankruptcy on everything older than a month. Stop new loops from opening: unsubscribe aggressively and screen unknown senders. And contain the checking habit: batch email into two or three fixed windows a day, with notifications off in between.',
      'People who make these three changes report the same thing in different words — not that they got faster at email, but that email stopped following them around. InboxZap handles the bulk cleanup step in minutes, so the habit changes have a clean inbox to start from.',
    ],
  },
  {
    slug: 'clean-up-outlook-inbox',
    title: 'How to Clean Up Your Outlook Inbox (Without Losing Anything)',
    description:
      'Outlook has more built-in cleanup power than any other mail client. Here’s how to use Sweep, Clean Up Conversation, and Focused Inbox together.',
    excerpt:
      'Outlook has more built-in cleanup power than any other mail client — most people just never open the right menus.',
    datePublished: '2025-09-05',
    dateModified: '2026-11-24',
    paragraphs: [
      'Outlook has more built-in cleanup power than any other mail client — most people just never open the right menus.',
      'Start with Sweep. From any message, Sweep lets you delete everything from that sender, keep only the latest message, or auto-delete their mail after ten days. Applied to your top twenty noisy senders, Sweep alone can retire thousands of messages in minutes.',
      'Next, the Clean Up Conversation tool: it removes every message in a thread that’s quoted inside a later reply, collapsing fifty-message chains into the handful that contain unique content.',
      'Then set your Focused Inbox honestly. Train it by moving misfiled mail for a week, and it becomes a reliable first-pass filter. Pair it with rules that route newsletters and notifications to folders that skip the inbox entirely.',
      'Finally, schedule auto-archive: anything older than six months moves to an archive folder automatically. Your searches still find everything; your inbox just stops being a museum. InboxZap works alongside Outlook’s native tools if you’d rather run the whole cleanup from one place.',
    ],
  },
  {
    slug: 'automatic-email-sorting',
    title: 'Automatic Email Sorting: Set It and Forget It',
    description:
      'Every major mail client can route messages automatically. The trick is designing four simple buckets before you build the rules.',
    excerpt:
      'Manual email sorting is a job you can retire today — the trick is designing the buckets before you build the rules.',
    datePublished: '2025-10-11',
    dateModified: '2026-11-24',
    paragraphs: [
      'Manual email sorting is a job you can retire today. Every major mail client can route messages automatically by sender, subject, keywords, or list headers — the trick is designing the buckets before you build the rules.',
      'Four buckets cover almost everyone. Now: real humans writing to you directly — the only bucket that belongs in your inbox. Reading: newsletters and digests, batched for when you choose. Records: receipts, confirmations, statements — archived on arrival, searchable later. Noise: notifications and social updates, sent to a folder you check weekly or never.',
      'Build one rule per bucket, broadest match first, and let new mail train the edges: each time something lands in the wrong place, tighten the rule rather than moving the message. Within two weeks the misfiles stop.',
      'The payoff compounds quietly. Sorting five hundred weekly messages by hand costs about two hours; the rules do it in zero. That’s a hundred hours a year returned for an evening of setup — or a few minutes if InboxZap builds the rule set for you from how you already treat your mail.',
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
