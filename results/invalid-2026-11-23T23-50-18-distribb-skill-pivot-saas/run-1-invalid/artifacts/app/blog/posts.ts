export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  related: string[];
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: 'post-1',
    title: 'How to Reach Inbox Zero (and Actually Stay There)',
    description:
      'The inbox zero method that sticks: a bankruptcy pass on old mail, three filters, and a fixed-window habit. No app required, though InboxZap does the first part for you.',
    excerpt:
      'Inbox zero isn’t about having zero emails — it’s about having zero decisions left to make.',
    publishedAt: '2025-01-14',
    updatedAt: '2026-11-18',
    related: ['post-3', 'post-9', 'post-4'],
    body: [
      { type: 'h2', text: 'What inbox zero actually means' },
      {
        type: 'p',
        text: 'Inbox zero isn’t about having zero emails — it’s about having zero decisions left to make. Every message in your inbox should be either archived, delegated, deferred to a scheduled block, or answered in under two minutes. If a message is still sitting there, it’s because you haven’t decided what to do with it yet, not because the number is high.',
      },
      { type: 'h2', text: 'The three-step system' },
      {
        type: 'p',
        text: 'Start with a bankruptcy declaration: select everything older than 30 days and archive it. It’s all still searchable, and if it mattered, someone will follow up. Next, set up three filters: newsletters skip the inbox into a Reading label, receipts go straight to archive, and notifications from tools get batched into a daily digest.',
      },
      {
        type: 'p',
        text: 'The bankruptcy pass is the part most people put off for months, because clicking through thousands of old emails by hand feels like a chore with no clear stopping point. InboxZap does that pass for you in one run — it scans your whole mailbox, groups the backlog by sender and age, and lets you bulk-archive or delete it in a few clicks instead of a few hours.',
      },
      { type: 'h2', text: 'The habit that keeps you at zero' },
      {
        type: 'p',
        text: 'Open your inbox at fixed times — say 9am, 1pm, and 4pm — and empty it completely each time. Outside those windows, the inbox stays closed. Most people find they recover four to six hours a week within the first month, and the background anxiety of an overflowing inbox simply disappears.',
      },
      {
        type: 'p',
        text: 'If you’d rather skip straight to a clean starting point, see how InboxZap handles the bulk cleanup, or jump to how to bulk delete emails safely if you want to do the backlog pass yourself first.',
      },
    ],
  },
  {
    slug: 'post-2',
    title: '10 Gmail Filters That Save You an Hour a Day',
    description:
      'The ten Gmail filters power users actually rely on, and how to set them up in about twenty minutes.',
    excerpt:
      'Filters are the highest-leverage feature in Gmail, and almost nobody uses more than one.',
    publishedAt: '2025-02-03',
    updatedAt: '2026-11-18',
    related: ['post-11', 'post-10', 'post-1'],
    body: [
      { type: 'h2', text: 'Why filters are Gmail’s highest-leverage feature' },
      {
        type: 'p',
        text: 'Filters are the highest-leverage feature in Gmail, and almost nobody uses more than one. A handful of well-designed rules can do the sorting that currently eats your mornings, automatically, forever, for free.',
      },
      { type: 'h2', text: 'Ten filters worth setting up today' },
      {
        type: 'ul',
        items: [
          'Route every newsletter to a Reading label with skip-inbox enabled.',
          'Auto-archive receipts and order confirmations, but star anything containing “refund” or “failed payment”.',
          'Send calendar responses straight to trash — the event already updated.',
          'Label anything from your boss’s domain as priority.',
          'Batch tool notifications (Jira, GitHub, Asana) into one label you review once daily.',
          'Auto-delete “out of office” replies after campaigns.',
          'Flag emails where you’re in the To: line and the sender is external.',
          'Mute list-serve threads you’ve been CC’d into.',
          'Archive social media notifications on arrival.',
          'Catch anything with an unsubscribe link that isn’t already labeled and queue it for review.',
        ],
      },
      { type: 'h2', text: 'Set them once, forget them forever' },
      {
        type: 'p',
        text: 'Set these up once — about twenty minutes of work — and your inbox handles the sorting that used to eat your mornings. If you’d rather not build each rule by hand, InboxZap ships ready-made sorting presets for exactly this list, and the same rules engine works for Outlook rules, not just Gmail filters.',
      },
      {
        type: 'p',
        text: 'Already drowning in the backlog these filters would have sorted? Clear it first with a bulk delete pass, then let the filters keep it that way.',
      },
    ],
  },
  {
    slug: 'post-3',
    title: 'How to Bulk Delete Emails (Gmail, Outlook, and Anything Else)',
    description:
      'A safe, repeatable system for bulk deleting emails — protect the keepers, select in big strokes with search operators or Sweep, then delete in batches.',
    excerpt:
      'Deleting emails one at a time is a losing game. Here’s how to bulk delete thousands without nuking anything important.',
    publishedAt: '2025-01-28',
    updatedAt: '2026-11-18',
    related: ['post-12', 'post-5', 'post-10'],
    body: [
      {
        type: 'p',
        text: 'Deleting emails one at a time is a losing game. If your inbox has five or six digits in the unread count, this guide is for you. Bulk deleting emails safely comes down to three phases: protect, select, delete — in every major client.',
      },
      { type: 'h2', text: 'Protect what matters first' },
      {
        type: 'p',
        text: 'Before you pull the trigger, protect the keepers. Star or label anything you cannot lose — invoices, contracts, travel documents, threads from your accountant. In Gmail, “has:attachment from:me” often catches documents you sent and might need again.',
      },
      { type: 'h2', text: 'Select in big, safe strokes' },
      {
        type: 'p',
        text: 'Age is the safest axis: in Gmail, “older_than:1y” or “older_than:2y” is almost always deletable wholesale. Category is next — “category:promotions” and Social can usually go entirely. “larger:10M” surfaces the attachments eating your storage. Combine operators, click select-all, then “select all conversations that match this search” to go beyond the visible page, and exclude your protected mail with “-label:important”.',
      },
      {
        type: 'p',
        text: 'In Outlook, use Sweep rules to delete all messages from a sender and keep only the latest — see our full guide to cleaning up Outlook for the rest of its built-in tools. On mobile, don’t bother; bulk operations belong on desktop where the safety nets are better.',
      },
      { type: 'h2', text: 'Delete in batches' },
      {
        type: 'p',
        text: 'Delete in batches and let each one finish — interrupting a ten-thousand-message delete mid-flight is how odd sync states happen. Keep everything in Trash for the full thirty days as your undo window. Done in this order, even a 50,000-message inbox comes down to a few hundred keepers in an afternoon, and a quarterly fifteen-minute sweep keeps it that way.',
      },
      {
        type: 'p',
        text: 'InboxZap runs this exact protect-select-delete workflow for you: it finds the old, large, and promotional mail automatically, shows you what it would remove before anything happens, and deletes by the thousand in one pass. If you’re specifically worried about losing something important, read how to delete old emails without losing the ones that matter.',
      },
    ],
  },
  {
    slug: 'post-4',
    title: 'Unsubscribe From Newsletters the Fast Way',
    description:
      'The fast way to mass-unsubscribe from newsletters: find the noisiest senders, use the one-click unsubscribe header, and filter the stragglers straight to trash.',
    excerpt:
      'The average professional receives forty newsletters a week and reads three. Unsubscribing doesn’t have to be work.',
    publishedAt: '2025-02-17',
    updatedAt: '2026-11-18',
    related: ['post-9', 'post-6', 'post-3'],
    body: [
      {
        type: 'p',
        text: 'The average professional receives forty newsletters a week and reads three. The rest are clutter you tolerate because unsubscribing feels like work. It doesn’t have to be.',
      },
      { type: 'h2', text: 'The fast method' },
      {
        type: 'p',
        text: 'Search your mail for the word “unsubscribe” and sort the senders by volume. Work down the list from the noisiest sender. Most legitimate newsletters honor the one-click unsubscribe header, which your mail client exposes as an Unsubscribe button right next to the sender name — no landing pages, no “tell us why you’re leaving” surveys.',
      },
      { type: 'h2', text: 'For the stubborn stragglers' },
      {
        type: 'p',
        text: 'For the stragglers that make you log in to leave, don’t bother: create a filter that sends them straight to trash instead. The effect is identical and it takes five seconds.',
      },
      {
        type: 'p',
        text: 'Do a pass like this once a quarter. Twenty minutes of ruthless unsubscribing typically cuts inbox volume by a third, and it compounds — every list you leave is hundreds of future emails that never arrive.',
      },
      {
        type: 'p',
        text: 'InboxZap automates the whole list: it scans your mailbox for every sender you’ve ever subscribed to, ranks them by how much mail they send, and lets you mass-unsubscribe in one pass instead of sender by sender. Pair it with a one-time bulk delete of everything already in your archive, and your inbox volume drops for good.',
      },
    ],
  },
  {
    slug: 'post-5',
    title: 'Gmail Storage Full? Here’s How to Free Up Space',
    description:
      'Fix the "storage full" banner in Gmail: find the attachments eating your quota with size search, clear Promotions/Spam/Trash, and offload instead of deleting.',
    excerpt:
      'That "storage full" banner means Gmail, Drive, and Photos have collectively hit your quota — and attachments are usually the silent culprit.',
    publishedAt: '2025-03-05',
    updatedAt: '2026-11-18',
    related: ['post-3', 'post-12', 'post-8'],
    body: [
      {
        type: 'p',
        text: 'That “storage full” banner means Gmail, Drive, and Photos have collectively hit your 15 GB — and email attachments are usually the silent culprit.',
      },
      { type: 'h2', text: 'Find out what’s actually eating your quota' },
      {
        type: 'p',
        text: 'Start with the size search: type “larger:10M” in the Gmail search bar. This surfaces every message over ten megabytes, which is where old design files, videos, and PDF decks hide. Sort through them once; most are years old and long since irrelevant. Delete, then repeat with “larger:5M”.',
      },
      { type: 'h2', text: 'Promotions, Spam, and Trash still count' },
      {
        type: 'p',
        text: 'Next, target the Promotions category older than six months — thousands of image-heavy marketing emails add up faster than you’d think. Then empty Spam and Trash, which still count against your quota until permanently cleared.',
      },
      { type: 'h2', text: 'Offload instead of delete' },
      {
        type: 'p',
        text: 'If you need to keep attachments, save them to Drive first — counterintuitively, a file stored once in Drive often costs less space than the same file duplicated across a long email thread. Fifteen minutes of this routine typically recovers two to four gigabytes, enough to put the banner away for a year.',
      },
      {
        type: 'p',
        text: 'InboxZap’s storage rescue scan ranks every sender and attachment by size automatically, so you can clear the biggest space-hogs first instead of guessing at search operators. It’s the same idea as a general bulk delete, just sorted by megabytes instead of age.',
      },
    ],
  },
  {
    slug: 'post-6',
    title: 'The Best Email Cleanup Apps Compared (2026 Edition)',
    description:
      'Bulk unsubscribers, sender screeners, rules engines, and full-service cleaners — how the major categories of email cleanup app differ, and what to check before you pick one.',
    excerpt:
      'Email cleanup tools all promise the same thing — a calm inbox — but they get there very differently, and the differences matter.',
    publishedAt: '2025-04-02',
    updatedAt: '2026-11-18',
    related: ['post-4', 'post-3', 'post-9'],
    body: [
      {
        type: 'p',
        text: 'Email cleanup tools all promise the same thing — a calm inbox — but they get there very differently, and the differences matter.',
      },
      { type: 'h2', text: 'The four categories' },
      {
        type: 'p',
        text: 'Bulk unsubscribers scan your mail for subscriptions and offer one-click mass unsubscribe. They’re the fastest win for newsletter overload, but they don’t touch the backlog already sitting in your archive. Screeners take the opposite approach: new senders wait in a lobby until you approve them, which is transformative for cold-email volume but does nothing for storage.',
      },
      {
        type: 'p',
        text: 'Rules engines automate what filters do, with friendlier interfaces — think “roll up everything from these 40 senders into one daily digest”. And full-service cleaners crunch your entire history, surfacing the biggest senders and largest attachments so you can delete by the thousand.',
      },
      { type: 'h2', text: 'What to check before you pick one' },
      {
        type: 'p',
        text: 'Check the privacy page: some free tools have historically funded themselves by selling anonymized inbox data. Prefer tools that charge money and state plainly that your mail is never used for anything else.',
      },
      {
        type: 'p',
        text: 'InboxZap is a full-service cleaner — it bulk-deletes your backlog, mass-unsubscribes you from newsletters, and rescues storage, all from one scan, and it’s built on a paid model specifically so your inbox data is never the product. See the full feature breakdown or compare plans on the pricing page.',
      },
    ],
  },
  {
    slug: 'post-8',
    title: 'Archive vs Delete: What’s the Difference and When to Use Each',
    description:
      'Archive keeps messages forever and searchable; delete frees storage after a 30-day grace period. Here’s the rule of thumb for which to use.',
    excerpt:
      'Archive and delete both make a message disappear from your inbox, and that’s where the similarity ends.',
    publishedAt: '2025-03-19',
    updatedAt: '2026-11-18',
    related: ['post-5', 'post-3', 'post-12'],
    body: [
      {
        type: 'p',
        text: 'Archive and delete both make a message disappear from your inbox, and that’s where the similarity ends.',
      },
      { type: 'h2', text: 'What each action actually does' },
      {
        type: 'p',
        text: 'Archiving removes the inbox label but keeps the message forever — searchable, restorable, and counted against your storage quota. Deleting moves it to Trash, where it survives thirty days before being permanently removed, quota and all.',
      },
      { type: 'h2', text: 'The rule of thumb' },
      {
        type: 'p',
        text: 'Archive by default, delete by category. Any message you might conceivably search for — a conversation, a receipt, a decision — should be archived, because storage is cheap and your memory isn’t. Reserve deletion for categories you know are worthless in bulk: promotions, notifications, social updates, and expired calendar noise.',
      },
      { type: 'h2', text: 'The one exception: storage pressure' },
      {
        type: 'p',
        text: 'When you’re paying for space you don’t need, deletion becomes an economic decision — start with the largest attachments and the oldest promotional mail, as covered in our Gmail storage guide. If you’re ever unsure, archive. Nobody has ever regretted keeping a searchable copy; plenty of people have regretted an overeager empty-trash click.',
      },
      {
        type: 'p',
        text: 'InboxZap applies this rule of thumb automatically during a cleanup: category mail gets flagged for deletion, everything else defaults to archive, and you approve the split before anything is final.',
      },
    ],
  },
  {
    slug: 'post-9',
    title: 'Email Overload: Why Your Inbox Is Stressing You Out',
    description:
      'The psychology behind inbox anxiety — the Zeigarnik effect — and the three structural changes that actually fix email overload.',
    excerpt:
      'The average knowledge worker checks email 74 times a day. It isn’t the volume itself causing the stress — it’s the accumulated undecided.',
    publishedAt: '2025-02-24',
    updatedAt: '2026-11-18',
    related: ['post-1', 'post-4', 'post-3'],
    body: [
      {
        type: 'p',
        text: 'The average knowledge worker checks email 74 times a day. Each check is a context switch, and each unprocessed message is an open loop your brain keeps tracking in the background. That’s the mechanism behind inbox anxiety: it isn’t the volume itself, it’s the accumulated undecided.',
      },
      { type: 'h2', text: 'The real mechanism behind inbox anxiety' },
      {
        type: 'p',
        text: 'Psychologists call it the Zeigarnik effect — incomplete tasks occupy working memory until they’re resolved or externalized. An inbox with 4,000 unread messages is 4,000 tiny unresolved claims on your attention.',
      },
      { type: 'h2', text: 'The fix is structural, not motivational' },
      {
        type: 'ul',
        items: [
          'Close the loops in bulk: declare email bankruptcy on everything older than a month.',
          'Stop new loops from opening: unsubscribe aggressively and screen unknown senders.',
          'Contain the checking habit: batch email into two or three fixed windows a day, with notifications off in between.',
        ],
      },
      {
        type: 'p',
        text: 'People who make these three changes report the same thing in different words — not that they got faster at email, but that email stopped following them around.',
      },
      {
        type: 'p',
        text: 'The first change — closing thousands of old loops at once — is the one InboxZap exists for: a single bulk cleanup pass does in minutes what would otherwise take an entire weekend. From there, our guide to reaching inbox zero covers the habit that keeps it that way.',
      },
    ],
  },
  {
    slug: 'post-10',
    title: 'How to Clean Up Your Outlook Inbox (Without Losing Anything)',
    description:
      'Outlook’s built-in cleanup tools: Sweep, Clean Up Conversation, Focused Inbox, and auto-archive — and how to use all four together.',
    excerpt:
      'Outlook has more built-in cleanup power than any other mail client — most people just never open the right menus.',
    publishedAt: '2025-04-21',
    updatedAt: '2026-11-18',
    related: ['post-2', 'post-11', 'post-3'],
    body: [
      {
        type: 'p',
        text: 'Outlook has more built-in cleanup power than any other mail client — most people just never open the right menus.',
      },
      { type: 'h2', text: 'Start with Sweep' },
      {
        type: 'p',
        text: 'From any message, Sweep lets you delete everything from that sender, keep only the latest message, or auto-delete their mail after ten days. Applied to your top twenty noisy senders, Sweep alone can retire thousands of messages in minutes.',
      },
      { type: 'h2', text: 'Clean Up Conversation' },
      {
        type: 'p',
        text: 'This tool removes every message in a thread that’s quoted inside a later reply, collapsing fifty-message chains into the handful that contain unique content.',
      },
      { type: 'h2', text: 'Focused Inbox and rules' },
      {
        type: 'p',
        text: 'Set your Focused Inbox honestly: train it by moving misfiled mail for a week, and it becomes a reliable first-pass filter. Pair it with rules that route newsletters and notifications to folders that skip the inbox entirely — the same bucket system we use in our automatic sorting guide works in Outlook too.',
      },
      { type: 'h2', text: 'Auto-archive' },
      {
        type: 'p',
        text: 'Schedule auto-archive so anything older than six months moves to an archive folder automatically. Your searches still find everything; your inbox just stops being a museum.',
      },
      {
        type: 'p',
        text: 'InboxZap connects to Outlook the same way it connects to Gmail, so if Sweep and Clean Up Conversation only get you partway through a multi-year backlog, a single bulk cleanup pass can finish the job.',
      },
    ],
  },
  {
    slug: 'post-11',
    title: 'Automatic Email Sorting: Set It and Forget It',
    description:
      'A four-bucket system for automatic email sorting — Now, Reading, Records, Noise — that works with rules in Gmail or Outlook.',
    excerpt:
      'Manual email sorting is a job you can retire today. The trick is designing the buckets before you build the rules.',
    publishedAt: '2025-05-06',
    updatedAt: '2026-11-18',
    related: ['post-2', 'post-10', 'post-1'],
    body: [
      {
        type: 'p',
        text: 'Manual email sorting is a job you can retire today. Every major mail client can route messages automatically by sender, subject, keywords, or list headers — the trick is designing the buckets before you build the rules.',
      },
      { type: 'h2', text: 'Four buckets cover almost everyone' },
      {
        type: 'ul',
        items: [
          'Now: real humans writing to you directly — the only bucket that belongs in your inbox.',
          'Reading: newsletters and digests, batched for when you choose.',
          'Records: receipts, confirmations, statements — archived on arrival, searchable later.',
          'Noise: notifications and social updates, sent to a folder you check weekly or never.',
        ],
      },
      { type: 'h2', text: 'Build rules that improve themselves' },
      {
        type: 'p',
        text: 'Build one rule per bucket, broadest match first, and let new mail train the edges: each time something lands in the wrong place, tighten the rule rather than moving the message. Within two weeks the misfiles stop. This works identically whether you’re writing Gmail filters or Outlook rules.',
      },
      { type: 'h2', text: 'The payoff compounds' },
      {
        type: 'p',
        text: 'Sorting five hundred weekly messages by hand costs about two hours; the rules do it in zero. That’s a hundred hours a year returned for an evening of setup.',
      },
      {
        type: 'p',
        text: 'InboxZap ships the four-bucket system above as a ready-made rule set across Gmail and Outlook, so you get the sorting without writing the rules by hand.',
      },
    ],
  },
  {
    slug: 'post-12',
    title: 'How to Delete Old Emails in Bulk Without Losing Important Ones',
    description:
      'Invert the problem: label the keepers first — financial, legal, travel, key contacts — then delete everything else by age with confidence.',
    excerpt:
      'The fear that stops most people from mass-deleting old email is losing the one message that matters.',
    publishedAt: '2025-05-20',
    updatedAt: '2026-11-18',
    related: ['post-3', 'post-8', 'post-5'],
    body: [
      {
        type: 'p',
        text: 'The fear that stops most people from mass-deleting old email is losing the one message that matters. The answer is to invert the problem: identify the keepers first, then delete everything else with confidence.',
      },
      { type: 'h2', text: 'Identify the keepers first' },
      {
        type: 'p',
        text: 'Keepers cluster predictably. Financial records — search “invoice OR receipt OR statement” and label the results. Legal and HR — contracts, offers, anything signed. Travel and identity documents. Threads with a short list of key people: your manager, your lawyer, your co-founder. Labeling these four groups typically takes under an hour even in a huge mailbox.',
      },
      { type: 'h2', text: 'Delete by age with the keepers excluded' },
      {
        type: 'p',
        text: 'Now delete by age with the keepers excluded: “older_than:18m -label:keep” removes the bulk while your labeled messages stay untouched. Work backwards in six-month slices rather than one giant delete — the same big-strokes approach covered in our bulk delete guide.',
      },
      { type: 'h2', text: 'Keep the safety net' },
      {
        type: 'p',
        text: 'Leave everything in Trash for its full thirty-day grace period as a final safety net. In practice, almost nobody restores anything — but knowing you can is what makes the big delete psychologically possible.',
      },
      {
        type: 'p',
        text: 'InboxZap automates the keeper pass too: it flags likely financial, legal, and travel mail before suggesting anything for bulk deletion, so you review a short list instead of building labels by hand.',
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: Post): Post[] {
  return post.related
    .map((slug) => getPost(slug))
    .filter((p): p is Post => Boolean(p));
}
