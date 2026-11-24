import type { Post } from './types';

export const post: Post = {
  slug: 'ai-meeting-assistant',
  title: 'AI Meeting Assistant: What It Does and How to Choose One',
  description:
    'An AI meeting assistant records, transcribes, and summarizes your calls into action items automatically. Here is what they do, how they compare, and how to pick one for your team.',
  date: '2026-11-24',
  tags: ['ai meeting assistant', 'meeting transcription', 'meeting notes'],
  excerpt:
    'An AI meeting assistant records, transcribes, and summarizes your calls into action items automatically. What they do, how they compare, and how to pick one.',
  role: 'PILLAR',
  cluster: 'ai-meeting-assistant',
  body: [
    {
      type: 'paragraph',
      text:
        'An AI meeting assistant joins your video calls, records and transcribes them, and turns the conversation into a written summary with decisions and action items. It replaces the person who used to take notes by hand, and it works across Zoom, Google Meet, and Microsoft Teams without anyone remembering to hit record.',
    },
    { type: 'heading', level: 2, text: 'What is an AI meeting assistant?' },
    {
      type: 'paragraph',
      text:
        'An AI meeting assistant is software that attends a video call on your behalf, produces a speaker-labeled transcript, and generates a summary of what happened. Most tools connect to your calendar, join every meeting automatically, and deliver the recap to your inbox or a shared workspace before the next meeting starts.',
    },
    {
      type: 'paragraph',
      text:
        'The category grew out of two older tools: call recording software and manual meeting-minutes templates. Recording solved "what was said." AI summarization solved "what it meant" — who owns which follow-up, what got decided, and what is still open.',
    },
    { type: 'heading', level: 2, text: 'AI meeting assistants vs. related tools' },
    {
      type: 'paragraph',
      text:
        'Three categories get confused with each other. The table below separates them by what they actually produce.',
    },
    {
      type: 'list',
      items: [
        'Plain call recorder (Zoom cloud recording, Teams recording) — produces a video/audio file only, no transcript or summary',
        'Transcription tool (live captions, Otter-style transcript apps) — produces a searchable transcript, but you still write the summary yourself',
        'AI meeting assistant (Lumina and similar tools) — produces the transcript AND a structured summary with decisions, owners, and due dates, usually routed to Slack or a project tool',
        'General chatbot + pasted transcript (ChatGPT, Claude) — can summarize a transcript you paste in, but someone still has to export the transcript and write a prompt every time',
      ],
    },
    { type: 'heading', level: 2, text: 'Why this matters for teams' },
    {
      type: 'paragraph',
      text:
        'Meetings fail in a specific, repeatable way: a decision gets made out loud, nobody writes it down precisely, and two weeks later two people remember it differently. An AI meeting assistant removes the step where that drift happens, because the record comes from the transcript, not from whoever was taking notes that day.',
    },
    {
      type: 'paragraph',
      text:
        'The second failure mode is action items that evaporate. A task assigned verbally in a call has no home — it is not in anyone\'s task list until someone manually adds it after the fact, and often nobody does. Routing action items straight to Slack or Notion the moment the meeting ends closes that gap.',
    },
    {
      type: 'paragraph',
      text:
        'A concrete version of this: a weekly product sync where engineering agrees to cut scope on a feature so it ships Friday. If that decision lives only in someone\'s memory, by Thursday two people are building the original scope and one is building the cut version. A transcript-backed summary posted to the team channel right after the call removes the ambiguity — the decision is quoted, not paraphrased from memory.',
    },
    { type: 'heading', level: 2, text: 'How to choose an AI meeting assistant' },
    {
      type: 'list',
      items: [
        'Platform coverage — confirm it joins the video tools your team actually uses (Zoom, Google Meet, Microsoft Teams), not just the market leader',
        'Where the output goes — a transcript nobody reads is wasted; check whether summaries and action items land in Slack, Notion, or your CRM, not just an email digest',
        'Speaker labels — a transcript without speaker names is far less useful for figuring out who said what or who owns a follow-up',
        'Language coverage — if your team runs calls in more than one language, confirm transcription quality beyond English',
        'Free tier limits — most tools cap free usage by minutes, seats, or history length; check what you actually need before comparing sticker price',
        'Price per seat vs. credits — some tools charge a flat per-seat fee, others meter advanced AI features by credits that can run out mid-month',
      ],
    },
    { type: 'heading', level: 2, text: 'Meeting notes vs. meeting minutes vs. meeting summaries' },
    {
      type: 'paragraph',
      text:
        'These three terms get used interchangeably, but an AI meeting assistant produces a specific one of them by default. Meeting notes are informal, written during the call. Meeting minutes are a formal record, often required for governance or compliance, with a consistent structure (attendees, agenda items, motions, decisions). A meeting summary is the AI-native middle ground: structured enough to scan, not so formal it needs sign-off.',
    },
    {
      type: 'paragraph',
      text:
        'If your team needs formal minutes rather than a summary, check that the tool supports a minutes-style template, not just a free-form recap — not every AI meeting assistant does.',
    },
    { type: 'heading', level: 2, text: 'Routing action items to Slack and Notion' },
    {
      type: 'paragraph',
      text:
        'The highest-leverage feature in this category is not transcription accuracy — most tools are close enough. It is what happens to a decision five minutes after the call ends. Lumina pushes action items to Slack and syncs recaps to Notion and Confluence automatically, with an owner already attached, so the task exists somewhere people already work instead of sitting in a recap email nobody reopens.',
    },
    { type: 'heading', level: 2, text: 'AI meeting assistants for different teams' },
    {
      type: 'paragraph',
      text:
        'The core product is the same across teams — record, transcribe, summarize, route — but which part matters most shifts by function.',
    },
    {
      type: 'list',
      items: [
        'Sales — call recaps with next steps matter more than full transcripts; routing a recap to the CRM against the right deal saves a rep from writing it up manually after every call',
        'Product and engineering — standups and planning calls benefit most from decision tracking, since scope and ownership changes are exactly what gets lost between meetings',
        'Customer success — a searchable transcript history across every account call makes it possible to answer "what did we promise this customer" without digging through old emails',
        'Recruiting — structured summaries of interview calls, shared with the hiring panel, standardize what gets evaluated instead of relying on each interviewer\'s handwritten notes',
      ],
    },
    { type: 'heading', level: 2, text: 'What to expect in the first week' },
    {
      type: 'list',
      items: [
        'Connect your calendar so the assistant knows which calls to join',
        'Confirm which meeting types get recorded by default, and turn it off for 1:1s or sensitive conversations if needed',
        'Point the Slack and Notion integrations at the right channel and workspace before your first real meeting, not after',
        'Review the first two or three summaries closely — this is where you catch tone or formatting preferences worth adjusting',
        'Share the recap format with your team once, so nobody is surprised to see a bot-generated summary land in the channel',
      ],
    },
    { type: 'heading', level: 2, text: 'Common mistakes when adopting an AI meeting assistant' },
    {
      type: 'list',
      items: [
        'Turning it on for every meeting, including 1:1s and sensitive conversations, without a clear recording policy — tell your team which meetings get recorded and which don\'t',
        'Treating the AI summary as final without a quick human skim — action items and owners are usually right, but a 30-second check catches the occasional misattributed task',
        'Picking a tool before checking it supports every video platform your team actually uses, not just the one the sales page leads with',
        'Ignoring where the summary lands — a great summary stuck in an inbox gets the same fate as the notes it replaced',
        'Not setting a transcript retention policy — unlimited history is useful until it becomes a compliance question',
      ],
    },
    { type: 'heading', level: 2, text: 'FAQs' },
    { type: 'heading', level: 3, text: 'Does an AI meeting assistant work with Zoom, Google Meet, and Microsoft Teams?' },
    {
      type: 'paragraph',
      text:
        'Most do, but coverage varies by tool. Lumina joins Zoom, Google Meet, and Microsoft Teams calls automatically once you connect your calendar.',
    },
    { type: 'heading', level: 3, text: 'Can an AI meeting assistant send action items to Slack?' },
    {
      type: 'paragraph',
      text:
        'Yes, in the tools built for team workflows rather than personal note-taking. Lumina routes decisions and action items to Slack and Notion with owners already assigned.',
    },
    { type: 'heading', level: 3, text: 'Is there a free AI meeting assistant?' },
    {
      type: 'paragraph',
      text:
        'Several tools, including Lumina, offer a free tier for small teams. Lumina\'s free plan covers teams up to 5 people with unlimited transcription.',
    },
    { type: 'heading', level: 3, text: 'How accurate is AI meeting transcription?' },
    {
      type: 'paragraph',
      text:
        'Accuracy depends on audio quality, accents, and overlapping speech, and varies by vendor. Speaker-labeled transcripts help you catch and correct misattributed lines quickly, which matters more than raw word-error rate for most teams.',
    },
    { type: 'heading', level: 3, text: 'What is the difference between meeting minutes and an AI meeting summary?' },
    {
      type: 'paragraph',
      text:
        'Meeting minutes follow a formal structure for governance or compliance records. An AI meeting summary is a lighter, scannable recap of decisions and action items — most teams outside of formal governance contexts only need the summary.',
    },
    { type: 'heading', level: 2, text: 'Next step' },
    {
      type: 'paragraph',
      text:
        'If your team is evaluating tools, start with the two questions that actually predict adoption: does it cover every platform you meet on, and does it put action items where your team already works. See Lumina\'s full feature list, or start a free team of up to 5.',
    },
  ],
};
