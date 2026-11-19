import { useState } from 'react';
import { motion } from 'motion/react';
import Navigation from '../components/Navigation';
import WorkLabel from '../components/WorkLabel';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import ImageZoom from '../components/ImageZoom';
import HeroVideo from '../components/HeroVideo';
import SEO from '../components/SEO';

// Unlisted page: not linked from Work or the home page, not in the sitemap, and marked noindex.
const IMG = '/images/monzo-left-to-spend';
const tags = ['Product Design', 'Fintech', 'Mobile Design', 'Budgeting', 'Unsolicited Concept'];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

function SectionLabel({ children }: { children: string }) {
  return <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-3">{children}</p>;
}

export default function CaseStudyMonzoLeftToSpend() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SEO title="Left to spend, until payday: a Monzo concept" description="Unsolicited concept for Monzo's Left to spend figure: it follows your pay, shows what you have per day, and opens up the sum behind the number." path="/for/monzo" noindex />
      <Navigation onOpenContact={() => setContactOpen(true)} />
      <main>

        {/* ── Hero ── */}
        <section className="min-h-screen pt-28 pb-12 px-7 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center overflow-hidden">
          <motion.div className="lg:col-span-5 flex flex-col gap-8" initial="hidden" animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 text-xs text-[var(--text-500)]">
              <span>Concept</span>
              <span>/</span>
              <span className="text-[var(--text-300)]">Left to spend, until payday</span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.15]">
              Left to spend, until payday
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-sm text-[var(--text-400)] leading-relaxed max-w-md">
              A concept for Monzo's existing "Left to spend" figure. It reads your pay pattern from your incoming salary, shows how much you have per day until the next payday, and opens up the sum behind the number so you can correct it.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-500)]">
              <span>November 2026</span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span>Concept - unsolicited, not affiliated with Monzo</span>
            </motion.div>
            <motion.div variants={fadeUp} custom={4} className="flex flex-col gap-3">
              <SectionLabel>Project Tags</SectionLabel>
              <div className="flex flex-wrap gap-2">
                <WorkLabel kind="Unsolicited concept" />
                {tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1.5 rounded-full border border-[var(--border-md)] text-[var(--text-300)] bg-[var(--surface)]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="lg:col-span-7 lg:pl-10"
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}>
            <HeroVideo src={`${IMG}/video/left-to-spend.mp4`} label="Left to spend, until payday: concept video" />
            <ImageZoom src={`${IMG}/hero.webp`} alt="Home, the working and a bill notification from the Left to spend concept" className="w-full object-contain mt-6" />
          </motion.div>
        </section>

        {/* ── Summary stats ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            {[
              { stat: '4', label: 'Pay patterns supported: weekly, every 2 weeks, every 4 weeks, monthly' },
              { stat: '1 tap', label: 'From Home to the sum behind the number' },
              { stat: '3', label: 'Views: personal, joint and both, each with its own payday' },
              { stat: '10', label: 'Screens designed end-to-end, including running-short and estimate states' },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} custom={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#F45D01] mb-2">{item.stat}</p>
                <p className="text-xs text-[var(--text-400)]">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── Problem Framing ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="lg:col-span-4">
              <SectionLabel>Problem Framing</SectionLabel>
              <h2 className="text-2xl font-medium">The Strategic Question</h2>
            </motion.div>
            <motion.div variants={fadeUp} className="lg:col-span-7 lg:col-start-6 space-y-10">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-[var(--text-300)] uppercase tracking-wide">Where it started</h3>
                <p className="text-sm text-[var(--text-400)] leading-relaxed">
                  I bank with Monzo. Its Home screen already carries a "Left to spend" tile. People who are paid on a cycle other than monthly keep asking for it to follow their pay. The Trends screen behind the tile also asks customers to help shape its future, so this is my answer to that.
                </p>
                <div className="rounded-xl border border-[#F45D01]/20 bg-[#F45D01]/5 p-5">
                  <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">The Framing Question</p>
                  <p className="text-sm text-[var(--text-300)] leading-relaxed italic">
                    "Monzo already tells you what's left to spend. How does that number become one you can trust without setting anything up, whatever day and however often you're paid?"
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-[var(--text-300)] uppercase tracking-wide">Why now</h3>
                <ul className="space-y-2">
                  {[
                    'On 6 November 2025, Monzo\'s Current Account squad announced on the community forum that Summary would retire on 21 December 2025. The post says customers who set weekly or 4-weekly spend periods, or who exclude individual transactions, can\'t do that in Trends, and that upgrades to Trends are under way.',
                    'Left to spend still exists, in Trends and as a Spotlight on Home. Monzo\'s help centre describes it as an idea of how much is left in this period, taking into account payments due soon.',
                    'Trends can reset on one chosen day of the month, with a weekend rule when that day is payday. Weekly, fortnightly and 4-weekly periods aren\'t offered.',
                    'On 26 October 2026, a customer on Monzo\'s community forum who is paid every four weeks was still asking for it. This is one forum and a self-selected sample, so I read it as a signal and not as a measure.',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-[var(--text-400)] leading-relaxed">
                      <span className="text-[#F45D01] mt-1 shrink-0">—</span>{item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: '21 Dec 2025', label: 'Summary retired; weekly and 4-weekly periods named as a gap', src: 'Monzo Community, staff post' },
                  { val: '26 Oct 2026', label: 'A customer paid every four weeks is still asking for it', src: 'Monzo Community' },
                ].map((m, i) => (
                  <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
                    <p className="text-2xl md:text-3xl font-medium text-[var(--text)] mb-1">{m.val}</p>
                    <p className="text-xs text-[var(--text-500)]">{m.label}</p>
                    <p className="text-xs text-[var(--text-600)] mt-1">Source: {m.src}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Today ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} className="mb-12">
              <SectionLabel>Starting Point</SectionLabel>
              <h2 className="text-2xl font-medium">What the app does today</h2>
              <p className="text-sm text-[var(--text-400)] mt-3 max-w-2xl leading-relaxed">
                Before designing anything I rebuilt three of today's screens in code, from my own app, and checked them side by side against the real thing. The tile shows an amount and an end date. Tapping it opens Trends, where the figure sits under a monthly breakdown. The period is set inside target setup, where the reset date reads "1st always" until you change it.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
              <ImageZoom src={`${IMG}/today.webp`} alt="Monzo today: Home with the Left to spend tile, Trends, and target setup" className="w-full object-contain" />
            </motion.div>
            <motion.p variants={fadeUp} className="text-xs text-[var(--text-500)] mt-4 max-w-3xl leading-relaxed">
              My own rebuild of the current screens, with made-up names and amounts. These are not Monzo's files.
            </motion.p>
          </motion.div>
        </section>

        {/* ── Role ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="lg:col-span-4">
              <SectionLabel>Role</SectionLabel>
              <h2 className="text-2xl font-medium">My Contribution</h2>
            </motion.div>
            <motion.div variants={fadeUp} className="lg:col-span-7 lg:col-start-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'Role', value: 'Solo Product Designer' },
                  { label: 'Context', value: 'Unsolicited concept, not affiliated with Monzo' },
                  { label: 'Platform', value: 'Android / iOS' },
                  { label: 'Scope', value: 'One existing feature, extended end to end' },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
                    <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-2">{item.label}</p>
                    <p className="text-sm text-[var(--text-300)]">{item.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[var(--text-400)] leading-relaxed mb-3">
                I worked solo. Everything here comes from Monzo's public posts and help pages, its community forum, and my own use of the app. I did not run research with users.
              </p>
              <p className="text-sm text-[var(--text-500)] leading-relaxed">
                I designed the screens and built them in code, with Claude Code in my workflow. All names, payees, amounts and account numbers on screen are made up.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Approach ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Approach</SectionLabel>
              <h2 className="text-2xl font-medium mb-10">Research & Strategy</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 space-y-4">
                <h3 className="text-base font-semibold">What I Looked At</h3>
                <ul className="space-y-3">
                  {[
                    { method: 'Monzo\'s announcement', detail: 'The staff post retiring Summary, and the gaps it names' },
                    { method: 'Help pages', detail: 'Trends, Left to spend and custom reset dates' },
                    { method: 'Community forum', detail: 'About a dozen threads. Customers describe a figure that takes some effort to set up, no longer says how many days it has to last, and is hard to see separately for personal and joint money' },
                    { method: 'The app itself', detail: 'Home, Trends and target setup as they are today' },
                  ].map((r, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed">
                      <span className="text-[#F45D01] font-mono text-xs mt-0.5 shrink-0">0{i + 1}</span>
                      <span><span className="text-[var(--text-300)]">{r.method}</span><span className="text-[var(--text-500)]">: {r.detail}</span></span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[var(--text-500)] leading-relaxed">Customers also disagree with each other about what the figure counts. I found no Monzo page that says how Pots or Flex repayments are treated, so I treat that as undocumented.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 space-y-4">
                <h3 className="text-base font-semibold">Hypotheses to Test</h3>
                <p className="text-xs text-[var(--text-500)]">These are assumptions. None has been tested. I list them this way because of a project at Amdari, where assumption-testing workshops on a student analytics platform disproved 15 of 22 product assumptions.</p>
                <ul className="space-y-3">
                  {[
                    'People paid weekly, fortnightly or every four weeks will trust the figure more when its period follows their pay without them setting it up',
                    'A per-day amount and a count of days to payday help more than the total alone',
                    'Seeing the sum behind the number raises trust, even when the number is the same',
                    'People who share money with a partner want one figure for their own account and another for the joint one',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-[var(--text-400)] leading-relaxed">
                      <span className="text-[#F45D01] font-mono text-xs mt-0.5 shrink-0">H{i + 1}</span>{item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="rounded-xl border border-[#F45D01]/20 bg-[#F45D01]/5 p-5 mb-12">
              <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">Guiding Constraint</p>
              <p className="text-sm text-[var(--text-300)] leading-relaxed">
                <span className="italic">"Keep Monzo's name, patterns and tone."</span> This extends what is there. Every new screen is built from parts the app already has.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { num: '01', title: 'Your pay sets the period', body: 'The app reads the pay pattern from incoming salary and asks once to confirm.' },
                { num: '02', title: 'One number, and what it means per day', body: '"£212 left, about £26 a day, 8 days to payday." The daily figure gives a sense of pace that a total can\'t.' },
                { num: '03', title: 'Show the working', body: 'One tap opens the sum, with money in Pots listed as not counted.' },
                { num: '04', title: 'Fix it where you see it', body: 'Any line can be corrected in place, which also covers leaving out a single payment.' },
                { num: '05', title: 'Mine, ours, both', body: 'Each account has its own figure and its own payday, with a combined view.' },
                { num: '06', title: 'Say when it\'s a guess', body: 'Irregular income or a changing bill gets an honest estimate state, never a confident wrong number.' },
              ].map((p) => (
                <div key={p.num} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <span className="text-xs text-[#F45D01] font-mono mb-4 block">{p.num}</span>
                  <h3 className="text-base font-semibold mb-3">{p.title}</h3>
                  <p className="text-sm text-[var(--text-400)] leading-relaxed">{p.body}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── Process ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} className="mb-12">
              <SectionLabel>Process</SectionLabel>
              <h2 className="text-2xl font-medium">Mapping the Flow</h2>
              <p className="text-sm text-[var(--text-400)] mt-3 max-w-2xl leading-relaxed">Three situations: setting it up once, checking it day to day, and the moments when the app should speak first.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-xl overflow-hidden border border-[var(--border)]">
              <ImageZoom src={`${IMG}/flow.webp`} alt="Left to spend user flow" className="w-full object-contain" />
            </motion.div>
          </motion.div>
        </section>

        {/* ── Decisions ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Decisions</SectionLabel>
              <h2 className="text-2xl font-medium mb-10">Key Decisions and Trade-offs</h2>
            </motion.div>
            <div className="space-y-6">
              {[
                {
                  num: '01',
                  title: 'Keep the name',
                  problem: 'A customer on Monzo\'s community forum suggested "safe to spend". It is clear, but "safe" reads as a promise a bank can\'t make.',
                  solution: 'I kept "Left to spend". It is Monzo\'s own word, and using it makes plain that the concept extends what already exists.',
                },
                {
                  num: '02',
                  title: 'Read the pay pattern from income',
                  problem: 'Today the period is set inside target setup, where the reset date reads "1st always" until you change it to another day of the month. A day of the month can\'t describe pay that arrives every four weeks.',
                  solution: 'The app proposes the pattern from incoming salary and asks one yes-or-no question. Changing it is available but is not the first step.',
                },
                {
                  num: '03',
                  title: 'Lead with the per-day figure',
                  problem: 'Customers say the "left for the next N days" element went with Summary. Today the figure shows an amount and an end date, such as "Until 30 Nov". A total alone gives no sense of pace.',
                  solution: 'The tile shows the amount, the daily equivalent and the days to payday together, in a tile the same size as the ones beside it.',
                },
                {
                  num: '04',
                  title: 'Show the sum and let people correct it',
                  problem: 'Trends already has a breakdown: starting balance, money in and money out for the month. Customers still disagree about which upcoming payments the figure takes off, and Monzo has named excluding individual transactions as a gap.',
                  solution: 'One tap opens the sum for this pay period: balance, minus each bill still to come, minus repayments due. Each bill has the same checkbox Monzo already uses in target setup. Untick one and the number changes at once.',
                },
                {
                  num: '05',
                  title: 'Give personal and joint their own paydays',
                  problem: 'Customers describe one period applying to personal and joint money alike, even when partners are paid on different dates.',
                  solution: 'Each account gets its own pay pattern and figure, with a combined view behind one remembered switch.',
                },
              ].map((c) => (
                <motion.div key={c.num} variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-4">
                    <span className="text-xs text-[#F45D01] font-mono mb-3 block">{c.num}</span>
                    <h3 className="text-base font-semibold">{c.title}</h3>
                  </div>
                  <div className="lg:col-span-7 lg:col-start-6 space-y-4">
                    <div>
                      <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-2">Problem</p>
                      <p className="text-sm text-[var(--text-400)] leading-relaxed">{c.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">Decision</p>
                      <p className="text-sm text-[var(--text-300)] leading-relaxed">{c.solution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Solution ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Solution</SectionLabel>
              <h2 className="text-2xl font-medium mb-4">Left to spend, until payday</h2>
              <p className="text-sm text-[var(--text-400)] leading-relaxed max-w-2xl mb-10">
                A tile that counts to payday, one question to set it up, a working you can correct, and an answer for the moments when the number changes or can't be trusted.
              </p>
            </motion.div>

            <div className="space-y-6 mb-12">
              {[
                {
                  num: '01',
                  title: 'Home and Set-up',
                  arc: 'Glance → One question → Done',
                  decisions: [
                    'The tile sits in the existing top row and shows amount, per day and days to payday',
                    'First run asks one thing: "Looks like you\'re paid every 4 weeks, on a Friday. Is that right?"',
                    'The last two paydays are shown as the evidence for the guess',
                    'Change offers how often, which day, and a weekend rule, using the set-up screen pattern the app already has',
                  ],
                  screen: `${IMG}/group-1.webp`,
                },
                {
                  num: '02',
                  title: 'The Working',
                  arc: 'Doubt → Understanding → Control',
                  decisions: [
                    'Laid out like Trends is today: same header, same rows, same graph card',
                    'Balance, minus each bill still to come, minus repayments. Pots are listed as set aside and not counted',
                    'Untick a bill to leave it out. The number and the per-day figure change at once, and Undo is one tap',
                    'Personal, Joint and Both. The joint account runs to its own payday',
                  ],
                  screen: `${IMG}/group-2.webp`,
                },
                {
                  num: '03',
                  title: 'When Something Changes',
                  arc: 'Surprise → Explanation',
                  decisions: [
                    'A bill arrives higher than usual. The notification says what changed and what it means per day',
                    'The tile updates, and the bill is at the top of Activity',
                    'On payday the period starts again, with the next payday date in the notification',
                  ],
                  screen: `${IMG}/group-3.webp`,
                },
                {
                  num: '04',
                  title: 'When It Doesn\'t Go to Plan',
                  arc: 'Worry → Next step',
                  decisions: [
                    'Running short: the tile says so, names the bill that causes it, and offers things that exist in Monzo today (move money from a Pot, see the bill)',
                    'Estimate: with irregular pay, the figure is marked as an estimate and says why',
                    'Wrong pay pattern: the confirm question is the fix, and it can be reopened from the working',
                  ],
                  screen: `${IMG}/group-4.webp`,
                },
              ].map((m, i) => (
                <motion.div key={i} variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-4">
                    <span className="text-xs text-[#F45D01] font-mono mb-3 block">{m.num}</span>
                    <h3 className="text-base font-semibold mb-2">{m.title}</h3>
                    <p className="text-xs text-[var(--text-500)] italic mb-4">{m.arc}</p>
                    <ul className="space-y-2">
                      {m.decisions.map((d, j) => (
                        <li key={j} className="flex gap-2 text-sm text-[var(--text-400)] leading-relaxed">
                          <span className="text-[#F45D01] mt-1 shrink-0">—</span>{d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-7 lg:col-start-6">
                    <ImageZoom src={m.screen} alt={m.title} className="w-full object-contain" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Final Designs ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Screens</SectionLabel>
              <h2 className="text-2xl font-medium mb-10">Final Designs</h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { src: 's01', label: '01 Home - Left to Spend Tile' },
                { src: 's02', label: '02 First Run - Pay Pattern' },
                { src: 's03', label: '03 Change Pay Pattern' },
                { src: 's04', label: '04 The Working' },
                { src: 's05', label: '05 Leave a Bill Out' },
                { src: 's06', label: '06 Joint Account' },
                { src: 's07', label: '07 A Bill Lands Higher' },
                { src: 's08', label: '08 Running Short' },
                { src: 's09', label: '09 Estimate' },
                { src: 's10', label: '10 Payday' },
              ].map((img, i) => (
                <motion.div key={i} variants={fadeUp} custom={i} className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
                  <ImageZoom src={`${IMG}/screens/${img.src}.webp`} alt={img.label} className="w-full object-contain" />
                  <p className="text-xs text-[var(--text-600)] px-4 py-2">{img.label}</p>
                </motion.div>
              ))}
            </div>
            <motion.p variants={fadeUp} className="text-xs text-[var(--text-500)] mt-6 max-w-3xl leading-relaxed">
              All names, payees, amounts and account numbers shown in these screens are made up.
            </motion.p>
          </motion.div>
        </section>

        {/* ── What's next ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp}>
              <SectionLabel>What's Next</SectionLabel>
              <h2 className="text-2xl font-medium mb-10">What I'd Test First, and What I Don't Know</h2>
            </motion.div>
            <div className="space-y-6">
              {[
                {
                  num: '01',
                  title: 'Test trust in the number first',
                  body: 'Everything else depends on H3: that seeing the sum raises trust. I would put the working in front of people next to today\'s figure and ask which one they would act on.',
                },
                {
                  num: '02',
                  title: 'Then test it with people who are not paid monthly',
                  body: 'H1 needs people paid weekly, fortnightly and every four weeks. Does the one-question set-up get their pattern right, and does the per-day figure change what they do?',
                },
                {
                  num: '03',
                  title: 'What I don\'t know',
                  body: 'My evidence is Monzo\'s own posts and help pages, one community forum and my own account, not usage data. Monzo has said it is upgrading Trends, so some of this may already be in progress. How Pots and Flex are counted is not documented, so the working\'s treatment of them is an assumption. This is one designer\'s view from the outside.',
                },
              ].map((r) => (
                <motion.div key={r.num} variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-4">
                    <span className="text-xs text-[#F45D01] font-mono mb-3 block">{r.num}</span>
                    <h3 className="text-base font-semibold">{r.title}</h3>
                  </div>
                  <div className="lg:col-span-7 lg:col-start-6">
                    <p className="text-sm text-[var(--text-400)] leading-relaxed">{r.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Why me ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="lg:col-span-4">
              <SectionLabel>Background</SectionLabel>
              <h2 className="text-2xl font-medium">Why Me</h2>
            </motion.div>
            <motion.div variants={fadeUp} className="lg:col-span-7 lg:col-start-6 space-y-4">
              <p className="text-sm text-[var(--text-400)] leading-relaxed">
                I have worked on money flows before. At Hobpay, a consumer fintech platform serving 10,000+ users, I rebuilt the core transaction flows and restructured navigation around what users were trying to do. Satisfaction moved from 3.2 to 4.2 out of 5 and bill payment completion from 45% to 85%. Homepage time-on-task went from 3.1 minutes to 1.1 using progressive disclosure and a Quick Actions pattern.
              </p>
              <p className="text-sm text-[var(--text-400)] leading-relaxed">
                At Moolapay I cut a send flow from seven steps to three by replacing jargon with patterns people already knew, in an app that had to work across four literacy levels. For LeadTrader, a stock trading app, I used progressive disclosure so beginners and experienced traders could use the same product. I build working prototypes and use Claude Code in my design workflow.
              </p>
              <button onClick={() => setContactOpen(true)} className="text-sm px-5 py-2.5 rounded-full bg-[var(--btn-bg)] text-[var(--btn-text)] font-medium">
                Get in touch
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Sources ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
            <SectionLabel>Sources</SectionLabel>
            <ul className="space-y-2 max-w-3xl">
              {[
                { label: 'Monzo Community: Retiring the Summary feature (staff post, 6 November 2025)', href: 'https://community.monzo.com/t/retiring-the-summary-feature/186087' },
                { label: 'Monzo Help: Trends, Left to spend', href: 'https://monzo.com/help/budgeting-overdrafts-savings/trends-left-to-spend-web' },
                { label: 'Monzo Help: How to set custom dates', href: 'https://monzo.com/help/budgeting-overdrafts-savings/how-to-set-custom-dates-summary' },
                { label: 'Monzo Community: Trends replaced Summary, 4-weekly salary no longer supported', href: 'https://community.monzo.com/t/trends-replaced-summary-4-weekly-salary-no-longer-supported/183956' },
              ].map((s) => (
                <li key={s.href} className="text-xs text-[var(--text-500)] leading-relaxed">
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-300)] underline underline-offset-2 decoration-[var(--border-md)]">{s.label}</a>
                </li>
              ))}
            </ul>
            <p className="text-xs text-[var(--text-600)] mt-6 max-w-3xl leading-relaxed">
              Monzo is a trademark of Monzo Bank Limited. This is an independent concept by Bukunmi Isijola. It is not affiliated with or endorsed by Monzo. All names, payees, amounts and account numbers in the screens are made up.
            </p>
          </motion.div>
        </section>

      </main>
      <Footer />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
