import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';

const tags = ['Product Design', 'Health Tech', 'Mobile Design', 'Wellbeing Intelligence', 'UX Strategy', 'Unsolicited'];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

function SectionLabel({ children }: { children: string }) {
  return <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-3">{children}</p>;
}

function ImagePlaceholder({ label, aspect = 'aspect-video' }: { label: string; aspect?: string }) {
  return (
    <div className={`w-full ${aspect} rounded-xl bg-[var(--surface-2)] border border-dashed border-[var(--border)] flex items-center justify-center`}>
      <p className="text-xs text-[var(--text-500)] text-center px-4">{label}</p>
    </div>
  );
}

const designPrinciples = [
  {
    code: 'P1',
    title: 'Earn trust through small wins, not big promises',
    body: 'Show what\'s working before showing what needs work. Celebrate progress, not just problems.',
  },
  {
    code: 'P2',
    title: 'Clarity over comprehensiveness',
    body: 'One key finding at a time. Full data is available but secondary — don\'t lead with the lab report.',
  },
  {
    code: 'P3',
    title: 'Companion voice, not clinical authority',
    body: '"Your Vitamin D is running low" — warm and contextual, not "25(OH)D: 42 nmol/L [OUT OF RANGE]".',
  },
  {
    code: 'P4',
    title: 'Reduce anxiety, increase agency',
    body: 'Context always provided. Clear next steps, not overwhelming lists. The user should feel capable, not diagnosed.',
  },
  {
    code: 'P5',
    title: 'Learn from behaviour, not logging',
    body: 'Infer consistency from purchase patterns. Optional check-ins, never mandatory tracking.',
  },
  {
    code: 'P6',
    title: 'Make feedback loops visible',
    body: 'Before/after comparison at retest. Validate that interventions worked — close the loop every cycle.',
  },
];

const challenges = [
  {
    number: '01',
    title: 'The 363-day gap',
    subtitle: 'Maintaining presence between twice-yearly tests',
    problem: 'Blood tests happen twice a year — 363 days between meaningful data points. Most health apps rely on daily data (steps, meals, glucose). Without new data, what do you show users? How do you stay present without becoming noise?',
    rejected: 'Daily progress tracking. Research consistently shows this creates tracking fatigue and app abandonment within 3–4 weeks.',
    solution: 'Weekly check-ins that ask about felt experience ("Have you noticed more energy?"), show progress toward retest ("4 weeks until we validate"), and are always skippable — no guilt for non-engagement. Connection maintained without burden.',
  },
  {
    number: '02',
    title: 'Commerce without the sales-funnel feel',
    subtitle: 'Revenue integration that builds trust instead of eroding it',
    problem: '42% of users in the research were skeptical of product recommendations, perceiving apps as glorified sales funnels. Healf\'s revenue depends on product sales. The tension is real.',
    rejected: 'Direct product push in insight cards: "Your Vitamin D is low. Buy Bare Biology Vitamin D3 →". Tested poorly — prescriptive, removed user agency, single option.',
    solution: 'Three-layer architecture: Insight (intelligence) → Protocol (bridge with CTA) → Shop (5–10 curated options, economy to premium). Intelligence and transaction are separated. Users choose based on values and budget. Commerce feels inevitable, not opportunistic.',
  },
  {
    number: '03',
    title: 'Adaptive protocols by severity',
    subtitle: 'Not all deviations are equal',
    problem: 'Vitamin D 10% below optimal is not the same as cortisol 80% elevated. A one-size protocol either overkills mild cases, undersupports severe ones, or misses the opportunity for lifestyle-first intervention.',
    rejected: 'Uniform supplement-first recommendations regardless of severity — which also undermines credibility ("supplement for everything").',
    solution: 'Three tiers: Mild (lifestyle-first, supplements optional) → Moderate (lifestyle + supplements in parallel from day one) → Severe (GP referral primary, protocol alongside). Protocols organised by Healf\'s Four Pillars — EAT, MOVE, MIND, SLEEP — for brand consistency.',
  },
  {
    number: '04',
    title: 'Daily reminders vs. tracking fatigue',
    subtitle: 'Supporting habit formation without creating burden',
    problem: 'Habit science says consistency requires reinforcement. Research says daily notifications lead to abandonment. The two findings are in direct conflict.',
    rejected: 'Weekly check-ins only from day one. Too sparse for the critical habit-formation window.',
    solution: 'Adaptive notification strategy: 48h post-protocol check-in to surface blockers, then opt-in daily reminders for weeks 1–2 only, tapering to every 2–3 days by week 4, then weekly from week 5 onward. If the user ignores 3+ notifications, the system asks "Are these helpful?" and auto-reduces frequency.',
  },
];

const keyMoments = [
  {
    number: '01',
    title: 'First Open — Post Blood Test',
    arc: 'Anxiety → Validation → Understanding → Hope → Action (30 seconds)',
    decisions: [
      'Good news first — trust builder before showing what needs attention',
      'One key finding highlighted, not the full lab report',
      'Warm contextual language: "Your Vitamin D is running low"',
      'Context normalises the finding: "This is very common in the UK Oct–Mar"',
      'Timeline sets expectations: "Levels typically respond within 2–3 months"',
    ],
  },
  {
    number: '02',
    title: 'Weekly Check-In — Between Tests',
    arc: 'Isolation → Recognition → Validation → Momentum (20 seconds)',
    decisions: [
      'Context set before the question: "Week 8 — most people start noticing improvement here"',
      'Simple 3-option question — minimal friction',
      'Skip always available with no guilt language',
      'Progress shown from purchase history — no manual input needed',
      'Connects felt experience to upcoming objective validation',
    ],
  },
  {
    number: '03',
    title: 'Protocol Overview — Four Pillars',
    arc: 'Overwhelm → Clarity → Ownership',
    decisions: [
      'EAT, MOVE, MIND, SLEEP structure mirrors Healf\'s brand framework',
      'Lifestyle recommendations first — not supplement-led',
      'Commerce links per pillar — contextual, not intrusive',
      'Timeline shows progress window: 2 weeks → 12 weeks',
      'Progressive adoption: user can start with one pillar',
    ],
  },
  {
    number: '04',
    title: 'Shop Experience — Product Recommendations',
    arc: 'Skepticism → Context → Choice → Confidence',
    decisions: [
      'Reason shown above products — "Recommended for your sub-optimal Vitamin D"',
      '"Impact" label connects product to specific biomarker',
      'Carousel of 4–5 options — choice, not prescription',
      'Healf Curation Process trust signal visible throughout',
      'Clean product focus — no cross-sells cluttering the view',
    ],
  },
  {
    number: '05',
    title: 'Progress Update — Retest Validation',
    arc: 'Anticipation → Validation → Pride → Curiosity (next cycle)',
    decisions: [
      'Celebratory headline leads: "The protocol worked"',
      'Visual before/after comparison — March vs September',
      'Percentage improvement shown: +62%',
      'Connects back to felt experience check-ins from earlier in the cycle',
      'Teases new finding — smooth transition into the next protocol cycle',
    ],
  },
];

export default function CaseStudyHealfZone2() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navigation onOpenContact={() => setContactOpen(true)} />
      <main>

        {/* ── Hero ── */}
        <section className="min-h-screen pt-28 pb-12 px-7 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center overflow-hidden">
          <motion.div className="lg:col-span-5 flex flex-col gap-8" initial="hidden" animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 text-xs text-[var(--text-500)]">
              <Link to="/work" className="hover:text-[var(--text-300)] transition-colors">Case Studies</Link>
              <span>/</span>
              <span className="text-[var(--text-300)]">Healf Zone 2.0</span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.15]">
              Transforming Healf's £100M blood testing service into an intelligent health companion that guides users from insight to action
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-sm text-[var(--text-400)] leading-relaxed max-w-md">
              Most health apps give you data. Healf Zone 2.0 gives you answers. An unsolicited case study for the Founding Lead Product Designer role — 14 days of design sprint work.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="text-xs border border-[var(--border-md)] text-[var(--text-400)] px-3 py-1 rounded-full">{tag}</span>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-4 text-xs text-[var(--text-500)]">
              <span><span className="text-[var(--text-300)]">Context</span> — Unsolicited, self-directed</span>
              <span><span className="text-[var(--text-300)]">Duration</span> — 14-day sprint</span>
              <span><span className="text-[var(--text-300)]">Platform</span> — iOS / Android</span>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-7 lg:pl-12 h-[60vh] lg:h-[80vh]">
            <ImagePlaceholder label="Hero visual — process overview diagram: Research → Strategy → Architecture → Experience → Visual Design" aspect="w-full h-full" />
          </div>
        </section>

        {/* ── Summary stats ── */}
        <section className="px-7 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            {[
              { val: '363', unit: 'days', label: 'Between tests — the gap this system solves' },
              { val: '73%', unit: '', label: 'Users frustrated with data without direction' },
              { val: '5', unit: '', label: 'Key micro-experiences designed end-to-end' },
              { val: '£1B', unit: '', label: 'Revenue potential this positions Healf for' },
            ].map((s, i) => (
              <motion.div key={i} variants={fadeUp} custom={i}>
                <p className="text-3xl md:text-4xl font-semibold text-[#F45D01] mb-1">
                  {s.val}<span className="text-xl">{s.unit}</span>
                </p>
                <p className="text-xs text-[var(--text-400)] leading-snug">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── Problem Framing ── */}
        <section className="px-7 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} custom={0} className="mb-12">
              <SectionLabel>Problem Framing</SectionLabel>
              <h2 className="text-2xl font-medium">The strategic question</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
              <motion.div variants={fadeUp} custom={1} className="space-y-4">
                <h3 className="text-base font-semibold">Business context</h3>
                <p className="text-sm text-[var(--text-400)] leading-relaxed">
                  Healf is a UK-based wellness retailer (£100M revenue, 550K customers) curating premium health products across Four Pillars: EAT, MOVE, MIND, SLEEP. Their Healf Zone service combines at-home blood testing with practitioner consultations at £289/year for two tests analysing 40+ biomarkers.
                </p>
                <p className="text-sm text-[var(--text-400)] leading-relaxed">
                  The current model: Test → Results → Recommendations → 6-month gap. The vision: Test → Ongoing guidance → Validated interventions → Compounding trust. The question isn't how to build it. It's what it should be.
                </p>
                <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
                  <p className="text-sm italic text-[var(--text-300)] leading-relaxed">
                    "How do we evolve Healf Zone from a twice-yearly testing service into an ongoing intelligence platform — transforming Healf from a £100M retailer into a £1Bn health companion?"
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} custom={2} className="space-y-4">
                <h3 className="text-base font-semibold">The competitive white space</h3>
                <p className="text-sm text-[var(--text-400)] leading-relaxed mb-4">
                  After analysing 5 competitors across biomarker testing, intelligence, product ecosystems, ongoing support, and validation loops — no one has all five. Healf has a unique advantage: 4 years of product curation trust.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-[var(--text-400)] border-collapse">
                    <thead>
                      <tr className="border-b border-[var(--border)]">
                        <th className="text-left py-2 pr-4 text-[var(--text-300)]">Platform</th>
                        <th className="py-2 px-2 text-center">Testing</th>
                        <th className="py-2 px-2 text-center">Intelligence</th>
                        <th className="py-2 px-2 text-center">Products</th>
                        <th className="py-2 px-2 text-center">Validation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Levels', '✓', '✓ glucose', '—', '—'],
                        ['ZOE', '✓', '✓ food', '—', '—'],
                        ['InsideTracker', '✓', '✓ basic', '✓ affiliate', '—'],
                        ['Healf Zone (now)', '✓', 'Limited', '✓ curated', 'Limited'],
                        ['Healf Zone 2.0', '✓', '✓✓', '✓✓', '✓✓'],
                      ].map(([name, ...cells], i) => (
                        <tr key={i} className={`border-b border-[var(--border)] ${name.includes('2.0') ? 'text-[#F45D01] font-medium' : ''}`}>
                          <td className="py-2 pr-4">{name}</td>
                          {cells.map((c, j) => (
                            <td key={j} className="py-2 px-2 text-center">{c}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>

            {/* User research findings */}
            <motion.div variants={fadeUp} custom={3} className="mb-12">
              <h3 className="text-base font-semibold mb-6">What the data says</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { stat: '73%', label: 'Express frustration with "data without direction"', src: '47 Reddit posts — r/Biohackers, r/QuantifiedSelf, r/Supplements' },
                  { stat: '65%', label: 'Abandoned health apps due to tracking burden', src: '234 app reviews — MyFitnessPal, Noom, Levels, ZOE, Ritual' },
                  { stat: '58%', label: 'Report anxiety from test results without context', src: 'Behavioural science synthesis — 12 papers on health behaviour change' },
                  { stat: '42%', label: 'Skeptical of product recommendations', src: 'Recurring theme: "This app just wants to sell me supplements"' },
                ].map((f, i) => (
                  <div key={i} className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
                    <p className="text-2xl font-semibold text-[#F45D01] mb-2">{f.stat}</p>
                    <p className="text-sm text-[var(--text-300)] leading-snug mb-3">{f.label}</p>
                    <p className="text-xs text-[var(--text-500)] leading-snug">{f.src}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* User verbatims */}
            <motion.div variants={fadeUp} custom={4}>
              <h3 className="text-base font-semibold mb-4">Verbatims from research</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { quote: '"I got my results back and... now what? The numbers don\'t tell me what to actually DO."', src: 'Reddit — r/Biohackers' },
                  { quote: '"Week 1 (excited) → Week 2 (burden) → Week 3 (guilt) → Week 4 (quit)"', src: 'Pattern across MyFitnessPal, Noom, Fitbit reviews' },
                  { quote: '"Minor fluctuations catastrophized as evidence of decline when context is missing"', src: 'Behavioural science research synthesis' },
                ].map((v, i) => (
                  <div key={i} className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
                    <p className="text-sm italic text-[var(--text-300)] leading-relaxed mb-3">{v.quote}</p>
                    <p className="text-xs text-[var(--text-500)]">— {v.src}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Role & Approach ── */}
        <section className="px-7 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} custom={0} className="mb-12">
              <SectionLabel>Role & Approach</SectionLabel>
              <h2 className="text-2xl font-medium">Solo product designer — self-directed sprint</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
              <motion.div variants={fadeUp} custom={1}>
                <h3 className="text-base font-semibold mb-4">What I owned</h3>
                <div className="space-y-3">
                  {[
                    ['Research synthesis', 'User pain points, competitive analysis, behavioural patterns from public data'],
                    ['Strategic framework', 'Design principles, product vision, information architecture'],
                    ['Experience design', 'Key moments, user flows, interaction patterns'],
                    ['Visual design', 'Design system analysis, high-fidelity screens maintaining Healf\'s brand'],
                  ].map(([title, desc], i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-[#F45D01] text-sm mt-0.5 flex-shrink-0">→</span>
                      <div>
                        <p className="text-sm font-medium">{title}</p>
                        <p className="text-xs text-[var(--text-400)]">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-[var(--surface)] border border-[var(--border)] rounded-xl p-4">
                  <p className="text-xs text-[var(--text-400)] leading-relaxed">
                    <span className="text-[var(--text-300)] font-medium">Framing note:</span> This is an unsolicited case study created to demonstrate end-to-end product thinking for Healf's Founding Lead Product Designer role. All research draws on publicly available data — Reddit posts, app reviews, and published behavioural science.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} custom={2}>
                <h3 className="text-base font-semibold mb-4">Sprint structure — 14 days</h3>
                <div className="space-y-2">
                  {[
                    ['Days 1–2', 'User pain point analysis + competitive landscape'],
                    ['Day 2', 'Strategic context — Healf brand, Four Pillars, positioning'],
                    ['Day 3', '6 design principles derived from research'],
                    ['Days 4–5', 'Information architecture + commerce integration strategy'],
                    ['Days 5–6', '5 key moments + 3 complete user flows + wireframes'],
                    ['Day 7', 'Design system analysis + high-fidelity screens'],
                  ].map(([phase, desc], i) => (
                    <div key={i} className="flex gap-3 text-sm">
                      <span className="text-[#F45D01] font-medium flex-shrink-0 w-20">{phase}</span>
                      <span className="text-[var(--text-400)]">{desc}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[var(--text-500)] mt-4">
                  Guiding constraint throughout: <span className="text-[var(--text-300)]">"How do we add intelligence without adding complexity?"</span>
                </p>
              </motion.div>
            </div>

            {/* Design Principles */}
            <motion.div variants={fadeUp} custom={3}>
              <h3 className="text-base font-semibold mb-6">6 design principles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {designPrinciples.map((p, i) => (
                  <motion.div key={i} variants={fadeUp} custom={i + 4}
                    className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
                    <p className="text-xs text-[#F45D01] font-semibold mb-2">{p.code}</p>
                    <p className="text-sm font-medium mb-2">{p.title}</p>
                    <p className="text-xs text-[var(--text-400)] leading-relaxed">{p.body}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Challenges ── */}
        <section className="px-7 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} custom={0} className="mb-12">
              <SectionLabel>Design Challenges</SectionLabel>
              <h2 className="text-2xl font-medium">The messy middle</h2>
            </motion.div>

            <div className="flex flex-col gap-10">
              {challenges.map((c, i) => (
                <motion.div key={i} variants={fadeUp} custom={i + 1}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-10 border-b border-[var(--border)] last:border-0 last:pb-0">
                  <div className="lg:col-span-1">
                    <p className="text-xs text-[#F45D01] font-semibold">{c.number}</p>
                  </div>
                  <div className="lg:col-span-11 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-base font-semibold mb-1">{c.title}</h3>
                      <p className="text-xs text-[var(--text-500)] mb-4">{c.subtitle}</p>
                      <p className="text-sm text-[var(--text-400)] leading-relaxed">{c.problem}</p>
                    </div>
                    <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-4">
                      <p className="text-xs text-[var(--text-500)] uppercase tracking-wide mb-2">Rejected approach</p>
                      <p className="text-sm text-[var(--text-400)] leading-relaxed">{c.rejected}</p>
                    </div>
                    <div className="bg-[var(--surface)] border border-[#F45D01]/20 rounded-xl p-4">
                      <p className="text-xs text-[#F45D01] uppercase tracking-wide mb-2">Final solution</p>
                      <p className="text-sm text-[var(--text-400)] leading-relaxed">{c.solution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Solution: Core System ── */}
        <section className="px-7 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} custom={0} className="mb-12">
              <SectionLabel>Solution</SectionLabel>
              <h2 className="text-2xl font-medium">Wellbeing Intelligence — the core system</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
              <motion.div variants={fadeUp} custom={1}>
                <p className="text-sm text-[var(--text-400)] leading-relaxed mb-6">
                  Wellbeing Intelligence adds an intelligence layer between biomarker data and user action. It interprets results in warm language, recommends adaptive protocols, maintains presence through optional check-ins, integrates commerce naturally, and validates interventions through retest comparison.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <p className="text-sm font-medium mb-2">What it does</p>
                    {['Interprets results in warm, contextual language', 'Recommends adaptive protocols by severity and Four Pillars', 'Maintains presence between tests through optional check-ins', 'Integrates commerce naturally through 3-layer approach', 'Validates interventions through retest comparison'].map((item, i) => (
                      <div key={i} className="flex gap-2 items-start mb-1">
                        <span className="text-[#F45D01] text-xs mt-0.5 flex-shrink-0">→</span>
                        <p className="text-sm text-[var(--text-400)]">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2">
                    <p className="text-sm font-medium mb-2">What it doesn't do</p>
                    {['Require daily tracking', 'Push products aggressively', 'Create guilt for non-engagement', 'Replace medical professionals'].map((item, i) => (
                      <div key={i} className="flex gap-2 items-start mb-1">
                        <span className="text-[var(--text-500)] text-xs mt-0.5 flex-shrink-0">✕</span>
                        <p className="text-sm text-[var(--text-400)]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} custom={2}>
                <p className="text-sm font-medium mb-4">Dynamic entry point strategy — home screen adapts to user state</p>
                <div className="space-y-3">
                  {[
                    { state: 'Fresh test (0–14 days)', entry: '"Your Latest Test Results"', purpose: 'Interpreted, actionable insights' },
                    { state: 'Between tests (15+ days)', entry: '"Your Wellbeing Insights"', purpose: 'Progress updates, check-ins' },
                    { state: 'New user', entry: '"Get Started"', purpose: 'Onboarding' },
                    { state: 'Retest moment', entry: '"Your Progress Update"', purpose: 'Before/after comparison' },
                  ].map((row, i) => (
                    <div key={i} className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-3 grid grid-cols-3 gap-3 text-xs">
                      <p className="text-[var(--text-300)] font-medium">{row.state}</p>
                      <p className="text-[#F45D01]">{row.entry}</p>
                      <p className="text-[var(--text-400)]">{row.purpose}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[var(--text-500)] mt-3">Navigation: Home (dynamic) · Shop (biomarker-driven feed) · My Protocol · Account</p>
              </motion.div>
            </div>

            {/* 5 Key Moments */}
            <motion.div variants={fadeUp} custom={3} className="mb-4">
              <SectionLabel>Experience Design</SectionLabel>
              <h2 className="text-2xl font-medium mb-8">The 5 key moments</h2>
              <div className="flex flex-col gap-8">
                {keyMoments.map((m, i) => (
                  <motion.div key={i} variants={fadeUp} custom={i + 4}
                    className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-8 border-b border-[var(--border)] last:border-0 last:pb-0">
                    <div className="md:col-span-1">
                      <p className="text-xs text-[#F45D01] font-semibold">{m.number}</p>
                    </div>
                    <div className="md:col-span-5">
                      <h3 className="text-base font-semibold mb-1">{m.title}</h3>
                      <p className="text-xs text-[var(--text-500)] mb-4">Emotional arc: {m.arc}</p>
                      <div className="space-y-1">
                        {m.decisions.map((d, j) => (
                          <div key={j} className="flex gap-2 items-start">
                            <span className="text-[#F45D01] text-xs mt-0.5 flex-shrink-0">→</span>
                            <p className="text-sm text-[var(--text-400)]">{d}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <ImagePlaceholder label={`Screen ${m.number} — ${m.title}`} aspect="aspect-[9/16] max-h-80" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Results & Impact ── */}
        <section className="px-7 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} custom={0} className="mb-12">
              <SectionLabel>Results & Impact</SectionLabel>
              <h2 className="text-2xl font-medium">What was delivered</h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
              {[
                { val: '15', label: 'Strategic documents' },
                { val: '8', label: 'Wireframes' },
                { val: '8', label: 'High-fidelity screens' },
                { val: '3', label: 'Complete user flow diagrams' },
              ].map((s, i) => (
                <motion.div key={i} variants={fadeUp} custom={i + 1}
                  className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 text-center">
                  <p className="text-3xl font-semibold text-[#F45D01] mb-1">{s.val}</p>
                  <p className="text-xs text-[var(--text-400)]">{s.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} custom={5} className="mb-12">
              <h3 className="text-base font-semibold mb-6">Impact hypotheses</h3>
              <p className="text-xs text-[var(--text-500)] mb-6">As an unsolicited case study, these are projected impacts based on comparable product changes — not live metrics.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    metric: '6-month retention',
                    hypothesis: '~40% → 65%+',
                    driver: 'Weekly check-ins maintain presence without burden',
                    comparable: 'Calm app saw 45% retention lift with optional daily sessions',
                  },
                  {
                    metric: 'Supplement purchase rate',
                    hypothesis: '~15% → 35%+',
                    driver: 'Intelligence-driven product feed with clear biomarker need',
                    comparable: 'Levels saw 3x supplement conversion with personalised recommendations',
                  },
                  {
                    metric: 'Average order value',
                    hypothesis: '£18 → £45+',
                    driver: 'Multiple biomarker protocols = multiple product categories',
                    comparable: 'Amazon "frequently bought together" increases basket by 2.5x',
                  },
                  {
                    metric: 'NPS',
                    hypothesis: '+15–20 points',
                    driver: 'Validation of interventions creates "it actually worked" moments',
                    comparable: 'Peloton\'s closed feedback loop (effort → visible progress) drives 70+ NPS',
                  },
                ].map((h, i) => (
                  <div key={i} className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
                    <p className="text-sm font-semibold mb-1">{h.metric}</p>
                    <p className="text-xl font-semibold text-[#F45D01] mb-3">{h.hypothesis}</p>
                    <p className="text-xs text-[var(--text-400)] mb-2"><span className="text-[var(--text-300)]">Driver:</span> {h.driver}</p>
                    <p className="text-xs text-[var(--text-500)]"><span className="text-[var(--text-300)]">Comparable:</span> {h.comparable}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} custom={6}>
              <h3 className="text-base font-semibold mb-4">How this advances the £1Bn vision</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  {[
                    ['Business model shift', 'From: Test → Recommend → Hope. To: Test → Guide → Support → Validate → Iterate'],
                    ['Compounding trust', 'Each validated protocol → increased belief. Each retest showing improvement → "this actually works"'],
                    ['Defensible moat', 'No competitor combines testing + intelligence + products + support + validation. Healf\'s 4-year curation advantage becomes intelligence advantage'],
                    ['Revenue expansion', 'Membership retention → recurring revenue · Multi-biomarker protocols → increased AOV · Validated outcomes → word-of-mouth growth'],
                  ].map(([title, desc], i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-[#F45D01] text-sm mt-0.5 flex-shrink-0">→</span>
                      <div>
                        <p className="text-sm font-medium">{title}</p>
                        <p className="text-xs text-[var(--text-400)]">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
                  <p className="text-xs text-[var(--text-600)] uppercase tracking-wide mb-3">The £1Bn path</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[var(--text-400)]">Current (products)</span>
                      <span className="text-[var(--text-300)]">£100M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-400)]">+ Memberships</span>
                      <span className="text-[var(--text-300)]">+£200M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-400)]">+ Validated outcomes (insurance, B2B, data)</span>
                      <span className="text-[var(--text-300)]">+£700M</span>
                    </div>
                    <div className="flex justify-between border-t border-[var(--border)] pt-2 mt-2">
                      <span className="font-medium">Total opportunity</span>
                      <span className="text-[#F45D01] font-semibold">£1Bn+</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Reflection ── */}
        <section className="px-7 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} custom={0} className="mb-12">
              <SectionLabel>Reflection</SectionLabel>
              <h2 className="text-2xl font-medium">What I learned</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  number: '01',
                  title: 'Restraint is a design skill',
                  body: 'I initially wanted to design everything — daily tracking, social features, gamification, AI chat, family accounts. Research showed users are fatigued by complexity. The hardest design decision was what not to include. Intelligence works because it\'s passive. Some of the best design is invisible support, not visible features.',
                },
                {
                  number: '02',
                  title: 'Commerce integration requires delicacy',
                  body: 'Separation creates trust. Insight (intelligence) → Protocol (bridge) → Shop (commerce). Never: Insight → Buy Now. Users are smart. They know Healf sells products. But they want to feel like the platform first cares about their health, then offers solutions. Commerce works when it feels inevitable, not opportunistic.',
                },
                {
                  number: '03',
                  title: 'Dark mode was already decided',
                  body: 'I thought I was making a bold creative choice — until I discovered Healf\'s app already uses it. What this taught me: always analyse existing systems before designing. The better frame is always evolution, not revolution. Respect existing brand equity. Don\'t redesign for redesign\'s sake.',
                },
              ].map((r, i) => (
                <motion.div key={i} variants={fadeUp} custom={i + 1}
                  className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6">
                  <p className="text-xs text-[#F45D01] font-semibold mb-3">{r.number}</p>
                  <h3 className="text-base font-semibold mb-3">{r.title}</h3>
                  <p className="text-sm text-[var(--text-400)] leading-relaxed">{r.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

      </main>
      <Footer />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
