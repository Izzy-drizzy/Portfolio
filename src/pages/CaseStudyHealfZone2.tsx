import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import ImageZoom from '../components/ImageZoom';
import SEO from '../components/SEO';

const slides = [
  '/images/healf-zone2/slides/slide-1.png',
  '/images/healf-zone2/slides/slide-2.png',
  '/images/healf-zone2/slides/slide-3.png',
  '/images/healf-zone2/slides/slide-4.png',
  '/images/healf-zone2/slides/slide-5.png',
  '/images/healf-zone2/slides/slide-6.png',
];

const tags = ['Product Design', 'Health Tech', 'Mobile Design', 'Wellbeing Intelligence', 'UX Strategy'];

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

function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 3500);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const prev = () => { setCurrent((c) => (c - 1 + slides.length) % slides.length); resetTimer(); };
  const next = () => { setCurrent((c) => (c + 1) % slides.length); resetTimer(); };
  const goTo = (i: number) => { setCurrent(i); resetTimer(); };

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden group">
      {slides.map((src, i) => (
        <img key={i} src={src} alt={`Healf Zone 2.0 mockup ${i + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }} />
      ))}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--bg)] to-transparent pointer-events-none" />
      <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button onClick={prev} className="w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center hover:bg-black/80 transition-colors"><ArrowLeft size={14} /></button>
        <span className="text-xs text-[var(--text-400)]">{current + 1} / {slides.length}</span>
        <button onClick={next} className="w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center hover:bg-black/80 transition-colors"><ArrowRight size={14} /></button>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-white w-4' : 'bg-white/30 w-1.5'}`} />
        ))}
      </div>
    </div>
  );
}

export default function CaseStudyHealfZone2() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SEO title="Healf Zone 2.0 Case Study" description="14-day design sprint interpreting Healf's wellbeing intelligence vision. 5 micro-experiences across the full test-to-retest lifecycle." path="/work/healf-zone-2" />
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
              Evolving Healf's blood testing service into an intelligent wellbeing companion
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-sm text-[var(--text-400)] leading-relaxed max-w-md">
              Most health apps give you data. Healf Zone 2.0 gives you answers. An unsolicited 14-day design sprint to demonstrate end-to-end product thinking for Healf's Founding Lead Product Designer role.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex items-center gap-3 text-xs text-[var(--text-500)]">
              <span>March 2026</span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span>Unsolicited — Bukunmi Isijola</span>
            </motion.div>
            <motion.div variants={fadeUp} custom={4} className="flex flex-col gap-3">
              <SectionLabel>Project Tags</SectionLabel>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1.5 rounded-full border border-[var(--border-md)] text-[var(--text-300)] bg-[var(--surface)]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="lg:col-span-7 h-[55vh] lg:h-[80vh]"
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}>
            <ImageCarousel />
          </motion.div>
        </section>

        {/* ── Summary stats ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            {[
              { stat: '6 months', label: 'Between tests — the engagement gap this system closes' },
              { stat: '73%', label: 'Of wellness app users frustrated with data without direction — research finding' },
              { stat: '5', label: 'Key micro-experiences designed end-to-end' },
              { stat: '£1Bn', label: 'Revenue pathway this intelligence platform is built towards' },
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
                <h3 className="text-sm font-semibold text-[var(--text-300)] uppercase tracking-wide">Business Context</h3>
                <p className="text-sm text-[var(--text-400)] leading-relaxed">
                  Healf is a UK-based wellness retailer (£100M revenue, 550K customers) curating premium health products across Four Pillars: EAT, MOVE, MIND, SLEEP. Their Healf Zone service combines at-home blood testing with practitioner consultations — £289/year for two tests analysing 40+ biomarkers.
                </p>
                <p className="text-sm text-[var(--text-400)] leading-relaxed">
                  The current model ends at: Test → Results → Recommendations → 6-month silence. The company's stated vision is to become a wellbeing intelligence platform — but the product hasn't caught up to that ambition yet.
                </p>
                <div className="rounded-xl border border-[#F45D01]/20 bg-[#F45D01]/5 p-5">
                  <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">The Framing Question</p>
                  <p className="text-sm text-[var(--text-300)] leading-relaxed italic">
                    "How do we evolve Healf Zone from a twice-yearly testing service into an ongoing intelligence platform — transforming Healf from a £100M retailer into a £1Bn health companion?"
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-[var(--text-300)] uppercase tracking-wide">What the Research Said</h3>
                <p className="text-sm text-[var(--text-400)] leading-relaxed">
                  Research synthesis across 47 Reddit posts (r/Biohackers, r/QuantifiedSelf, r/Supplements), 234 app reviews across five competitors, and 12 behavioural science papers on health behaviour change.
                </p>
                <ul className="space-y-2">
                  {[
                    '73% of users in my research expressed frustration with "data without direction" — numbers without context or next steps',
                    '65% abandon health apps within 3–4 weeks due to tracking burden and daily logging fatigue',
                    '58% report anxiety from test results when context is missing — minor fluctuations catastrophised',
                    '42% distrust product recommendations, perceiving apps as glorified sales funnels',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-[var(--text-400)] leading-relaxed">
                      <span className="text-[#F45D01] mt-1 shrink-0">—</span>{item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-[var(--text-300)] uppercase tracking-wide">Competitive White Space</h3>
                <p className="text-sm text-[var(--text-400)] leading-relaxed">
                  Five competitors analysed — Levels, ZOE, Noom, Ritual, InsideTracker. None combine comprehensive biomarker testing, ongoing intelligence, a curated product ecosystem, adherence support, and validation feedback loops. Healf has a four-year curation trust advantage no competitor can replicate quickly.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: '3–4 wks', label: 'Average health app lifespan before abandonment', src: 'App review synthesis' },
                  { val: '0 of 5', label: 'Competitors with all five intelligence capabilities', src: 'Competitive analysis' },
                ].map((m, i) => (
                  <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
                    <p className="text-3xl font-medium text-white mb-1">{m.val}</p>
                    <p className="text-xs text-[var(--text-500)]">{m.label}</p>
                    <p className="text-xs text-[var(--border-md)] mt-1">Source: {m.src}</p>
                  </div>
                ))}
              </div>
            </motion.div>
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
                  { label: 'Context', value: 'Unsolicited — Founding Lead PD application' },
                  { label: 'Platform', value: 'iOS / Android' },
                  { label: 'Sprint', value: '14-day self-directed sprint' },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
                    <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-2">{item.label}</p>
                    <p className="text-sm text-[var(--text-300)]">{item.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[var(--text-400)] leading-relaxed mb-3">
                I owned the full scope: research synthesis from publicly available data, strategic framework and design principles, information architecture, experience design across five key moments, and high-fidelity visual design maintaining Healf's existing brand system.
              </p>
              <p className="text-sm text-[var(--text-500)] leading-relaxed">
                I used Claude as a thinking partner throughout — working through how to structure the competitive analysis, stress-testing the three-layer commerce model, and pressure-testing the notification strategy against the behavioural science literature.
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
                <h3 className="text-base font-semibold">Research Methods</h3>
                <ul className="space-y-3">
                  {[
                    { method: 'Reddit qualitative synthesis', detail: '47 posts across r/Biohackers, r/QuantifiedSelf, r/Supplements' },
                    { method: 'App review analysis', detail: '234 reviews across MyFitnessPal, Noom, Levels, ZOE, Ritual' },
                    { method: 'Behavioural science review', detail: '12 papers on health behaviour change and tracking fatigue' },
                    { method: 'Competitive audit', detail: 'Five competitors mapped across five capability dimensions' },
                  ].map((r, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed">
                      <span className="text-[#F45D01] font-mono text-xs mt-0.5 shrink-0">0{i + 1}</span>
                      <span><span className="text-[var(--text-300)]">{r.method}</span><span className="text-[var(--text-500)]"> — {r.detail}</span></span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 space-y-4">
                <h3 className="text-base font-semibold">Key Findings</h3>
                <ul className="space-y-3">
                  {[
                    'Users want interpretation, not raw data — "Is 42 nmol/L good or bad?" repeats across every platform',
                    'Tracking burden kills retention — average abandonment at 3–4 weeks, triggered by daily logging friction',
                    'Context prevents anxiety — minor biomarker deviations catastrophised without normalisation language',
                    'Healf\'s curation trust is unique — 4 years of community-validated products no competitor can replicate',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-[var(--text-400)] leading-relaxed">
                      <span className="text-[#F45D01] mt-1 shrink-0">—</span>{item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="rounded-xl border border-[#F45D01]/20 bg-[#F45D01]/5 p-5 mb-12">
              <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">Guiding Constraint</p>
              <p className="text-sm text-[var(--text-300)] leading-relaxed">
                The sprint question held throughout: <span className="italic">"How do we add intelligence without adding complexity?"</span> No daily logging. No streak mechanics. Passive-first engagement. Commerce that feels helpful, not pushy.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  num: '01',
                  title: 'Earn trust through small wins',
                  body: 'Show what\'s working before showing what needs attention. Celebrate progress, not just problems. Good news first — always.',
                },
                {
                  num: '02',
                  title: 'Companion voice, not clinical authority',
                  body: '"Your Vitamin D is running low" — not "25(OH)D: 42 nmol/L [OUT OF RANGE]". Warm, contextual language reduces anxiety and increases action.',
                },
                {
                  num: '03',
                  title: 'Learn from behaviour, not logging',
                  body: 'Infer consistency from purchase patterns. Optional check-ins, never mandatory tracking. The system works passively so users don\'t have to.',
                },
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

        {/* ── Process Artifacts ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} className="mb-12">
              <SectionLabel>Process</SectionLabel>
              <h2 className="text-2xl font-medium">The Messy Middle</h2>
              <p className="text-sm text-[var(--text-400)] mt-3 max-w-2xl">Lo-fi wireframes mapped across the full user journey before committing to high-fidelity screens.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-4">
              <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-4">Lo-fi Wireframes</p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { src: '/images/healf-zone2/lofi/lofi-1.png', label: 'Entry Point — Post-Test Results' },
                { src: '/images/healf-zone2/lofi/lofi-2.png', label: 'Protocol Overview — Four Pillars' },
                { src: '/images/healf-zone2/lofi/lofi-3.png', label: 'Shop Tab — Vitamin D Products' },
                { src: '/images/healf-zone2/lofi/lofi-4.png', label: 'Protocol Check-In — 48 Hours Later' },
                { src: '/images/healf-zone2/lofi/lofi-5.png', label: 'Daily Reminder Opt-In' },
                { src: '/images/healf-zone2/lofi/lofi-6.png', label: 'Weekly Check-In Entry' },
                { src: '/images/healf-zone2/lofi/lofi-7.png', label: 'Response Validation' },
                { src: '/images/healf-zone2/lofi/lofi-8.png', label: 'Progress Update — Retest' },
              ].map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
                  <ImageZoom src={img.src} alt={img.label} className="w-full object-cover" />
                  <p className="text-xs text-[var(--text-600)] px-3 py-2 leading-snug">{img.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── Challenges ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Challenges</SectionLabel>
              <h2 className="text-2xl font-medium mb-10">Unexpected Obstacles</h2>
            </motion.div>
            <div className="space-y-6">
              {[
                {
                  num: '01',
                  title: 'The 6-Month Engagement Gap',
                  problem: 'Blood tests happen twice a year — 6 months between meaningful data points. Most health apps rely on daily inputs (steps, meals, glucose). Without new data, how do you stay present without becoming noise?',
                  solution: 'Weekly check-ins focused on felt experience, not logged data. "Have you noticed more energy?" Progress toward retest shown as a countdown. Always skippable — no guilt language. The system stays present without demanding attention.',
                },
                {
                  num: '02',
                  title: 'Commerce Without the Sales-Funnel Feel',
                  problem: 'Healf\'s revenue depends on product sales, but 42% of users in my research distrust health app recommendations — they see them as sales funnels, not guidance. Recommending a single product directly felt pushy and removed user choice.',
                  solution: 'Three-layer architecture: Insight (intelligence) → Protocol (bridge) → Shop (5–10 curated options). Intelligence and transaction are fully separated. Users choose based on values and budget — commerce feels inevitable, not opportunistic.',
                },
                {
                  num: '03',
                  title: 'Adaptive Protocols by Severity',
                  problem: 'Vitamin D 10% below optimal is not the same as cortisol 80% elevated. A one-size protocol either overkills mild cases or undersupports severe ones — and recommending supplements for everything destroys credibility.',
                  solution: 'Three tiers: Mild → lifestyle-first, supplements optional. Moderate → lifestyle and supplements in parallel. Severe → GP referral primary. All protocols organised by Healf\'s Four Pillars for brand consistency.',
                },
                {
                  num: '04',
                  title: 'Daily Reminders vs. Tracking Fatigue',
                  problem: 'Habit science says consistency needs reinforcement. Research says daily notifications lead to abandonment. The two findings directly conflict — weekly check-ins alone felt too sparse for the critical habit-formation window.',
                  solution: 'Adaptive cadence: opt-in daily reminders for weeks 1–2 only, tapering to every 2–3 days by week 4, then weekly from week 5 onward. If the user ignores 3+ notifications in a row, the system asks "Are these helpful?" and auto-reduces.',
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
                      <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">Solution</p>
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
              <h2 className="text-2xl font-medium mb-4">Wellbeing Intelligence</h2>
              <p className="text-sm text-[var(--text-400)] leading-relaxed max-w-2xl mb-10">
                An intelligence layer between biomarker data and user action. It interprets results in warm language, recommends adaptive protocols by severity, maintains presence through optional check-ins, integrates commerce naturally, and validates interventions at retest.
              </p>
            </motion.div>

            {/* Key Moments with screens */}
            <div className="space-y-6 mb-12">
              {[
                {
                  num: '01',
                  title: 'First Open — Post-Test Results',
                  arc: 'Anxiety → Validation → Understanding → Hope → Action',
                  decisions: [
                    'Good news leads — iron and B12 excellent — before surfacing the one finding that needs attention',
                    'Warm language contextualises: "Your Vitamin D is running low. This is very common in the UK Oct–Mar"',
                    'Timeline manages expectations: "Levels typically respond within 2–3 months"',
                    'Single clear CTA: View Recommended Protocol',
                  ],
                  screen: '/images/healf-zone2/key-screens/screen-1.png',
                },
                {
                  num: '02',
                  title: 'Weekly Check-In — Between Tests',
                  arc: 'Isolation → Recognition → Validation → Momentum',
                  decisions: [
                    'Context set before the question: "Week 8 — most people start noticing improvement here"',
                    'One simple question, three options — minimal friction, always skippable',
                    'Progress inferred from purchase history — no manual input needed',
                    'Connects felt experience to the upcoming retest validation',
                  ],
                  screen: '/images/healf-zone2/key-screens/screen-2.png',
                },
                {
                  num: '03',
                  title: 'Progress Update — Retest Validation',
                  arc: 'Anticipation → Validation → Pride → Curiosity (next cycle)',
                  decisions: [
                    'Celebratory headline: "The protocol worked" — before showing any numbers',
                    'Visual before/after: March 42 nmol/L → September 68 nmol/L (+62%)',
                    'Connects objective improvement back to the felt-experience check-ins from earlier in the cycle',
                    'Teases a new finding — smooth transition into the next protocol cycle',
                  ],
                  screen: '/images/healf-zone2/key-screens/screen-3.png',
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
                    <div className="rounded-xl overflow-hidden border border-[var(--border)]">
                      <ImageZoom src={m.screen} alt={m.title} className="w-full object-contain" />
                    </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { src: '/images/healf-zone2/key-screens/hifi-1.png', label: 'Entry Point — Post-Test Results' },
                { src: '/images/healf-zone2/key-screens/hifi-2.png', label: 'Protocol Overview — Four Pillars' },
                { src: '/images/healf-zone2/key-screens/hifi-3.png', label: 'Shop Tab — Vitamin D Products' },
                { src: '/images/healf-zone2/key-screens/hifi-4.png', label: 'Protocol Check-In — 48h Later' },
                { src: '/images/healf-zone2/key-screens/hifi-5.png', label: 'Daily Reminder Opt-In' },
                { src: '/images/healf-zone2/key-screens/hifi-6.png', label: 'Weekly Check-In Entry' },
                { src: '/images/healf-zone2/key-screens/hifi-7.png', label: 'Response Validation' },
                { src: '/images/healf-zone2/key-screens/hifi-8.png', label: 'Progress Update — Retest' },
              ].map((img, i) => (
                <motion.div key={i} variants={fadeUp} custom={i} className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
                  <ImageZoom src={img.src} alt={img.label} className="w-full object-contain" />
                  <p className="text-xs text-[var(--text-600)] px-4 py-2">{img.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Results ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="lg:col-span-4">
              <SectionLabel>Results</SectionLabel>
              <h2 className="text-2xl font-medium">What This System Enables</h2>
              <p className="text-xs text-[var(--text-500)] mt-3 leading-relaxed">Four capabilities this system is designed to unlock — mapped to Healf's trajectory from health retailer to wellbeing intelligence platform.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="lg:col-span-7 lg:col-start-6 space-y-4">
              {[
                {
                  number: '01',
                  title: 'Presence without burden',
                  body: 'The check-in system keeps Healf relevant across the 6 months between tests — optional, low-effort, skippable by design. Engagement is earned through relevance, not demanded through streaks or daily reminders.',
                },
                {
                  number: '02',
                  title: 'Commerce as a consequence of care',
                  body: 'Product recommendations emerge from protocol needs, not sales logic. When users understand what their biomarkers require, purchase intent follows naturally — this is how a health retailer transitions into a trusted advisor.',
                },
                {
                  number: '03',
                  title: 'A system that learns at retest',
                  body: 'Every retest validates the 6-month protocol — what improved, what stalled, what to adjust. Each cycle deepens the intelligence, moving Healf from periodic test provider to a platform that knows its users over time.',
                },
                {
                  number: '04',
                  title: 'The outcome that earns advocacy',
                  body: 'Validated improvement — measured in biomarkers at retest — is the "it actually worked" moment no health app can manufacture without this architecture. It\'s the proof point that converts seasonal customers into long-term members.',
                },
              ].map((h, i) => (
                <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">{h.number}</p>
                  <p className="text-base font-medium text-[var(--text)] mb-2">{h.title}</p>
                  <p className="text-sm text-[var(--text-400)] leading-relaxed">{h.body}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── Reflection ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Reflection</SectionLabel>
              <h2 className="text-2xl font-medium mb-10">What I Learned</h2>
            </motion.div>
            <div className="space-y-6">
              {[
                {
                  num: '01',
                  title: 'Restraint is a design skill',
                  body: 'I initially wanted to design everything — daily tracking, social features, gamification, AI chat, family accounts. Research showed users are fatigued by complexity. The hardest design decision was what not to include. Intelligence works because it\'s passive. The best design here is invisible support, not visible features.',
                },
                {
                  num: '02',
                  title: 'Commerce integration requires delicacy',
                  body: 'Separation creates trust. Insight → Protocol → Shop. Never Insight → Buy Now. Users know Healf sells products. They just want to feel like the platform cares about their health first, then offers solutions. Commerce works when it feels inevitable, not opportunistic.',
                },
                {
                  num: '03',
                  title: 'Assumptions without validation have a shelf life',
                  body: 'This entire system is built on research findings and product hypotheses — none of it validated with Healf\'s actual users or internal data. A Founding Lead PD doesn\'t just design the system; they build the infrastructure to validate whether it\'s the right system. The most important thing this work surfaced isn\'t a design decision — it\'s the questions I\'d need to answer in week one.',
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

      </main>
      <Footer />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
