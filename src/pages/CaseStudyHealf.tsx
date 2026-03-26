import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import ImageZoom from '../components/ImageZoom';

const images = [
  '/images/healf/slide-1.png',
  '/images/healf/slide-2.png',
  '/images/healf/slide-3.png',
  '/images/healf/slide-4.png',
  '/images/healf/slide-5.png',
];

const finalDesigns = [
  '/images/healf/final/final-1.jpg',
  '/images/healf/final/final-2.jpg',
  '/images/healf/final/final-3.jpg',
  '/images/healf/final/final-4.jpg',
];

const tags = ['Product Design', 'UX Audit', 'Mobile Design', 'Onboarding', 'Health & Wellness'];

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

function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 3500);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const prev = () => { setCurrent((c) => (c - 1 + images.length) % images.length); resetTimer(); };
  const next = () => { setCurrent((c) => (c + 1) % images.length); resetTimer(); };
  const goTo = (i: number) => { setCurrent(i); resetTimer(); };

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden group">
      {images.map((src, i) => (
        <img key={i} src={src} alt={`Healf mockup ${i + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }} />
      ))}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--bg)] to-transparent pointer-events-none" />
      <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button onClick={prev} className="w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center hover:bg-black/80 transition-colors"><ArrowLeft size={14} /></button>
        <span className="text-xs text-[var(--text-400)]">{current + 1} / {images.length}</span>
        <button onClick={next} className="w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center hover:bg-black/80 transition-colors"><ArrowRight size={14} /></button>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-white w-4' : 'bg-white/30 w-1.5'}`} />
        ))}
      </div>
    </div>
  );
}

export default function CaseStudyHealf() {
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
              <span className="text-[var(--text-300)]">Healf App Onboarding</span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-medium tracking-tight leading-[1.15]">
              Redesigning onboarding to connect users to the right wellness content faster
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-sm text-[var(--text-400)] leading-relaxed max-w-md">
              Healf had a content discovery problem buried inside an onboarding problem. Users couldn't find relevant products, so they left. This was an unsolicited audit — I mapped the friction, redesigned the first-run experience, and validated the direction through testing.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex items-center gap-3 text-xs text-[var(--text-500)]">
              <span>2025</span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span>Delivered by Bukunmi Isijola</span>
            </motion.div>
            <motion.div variants={fadeUp} custom={4} className="flex flex-col gap-3">
              <p className="text-xs text-[var(--text-600)] uppercase tracking-widest">Project Tags</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1.5 rounded-full border border-[var(--border-md)] text-[var(--text-300)] bg-[var(--surface)]">{tag}</span>
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
              { stat: '+40%', label: 'Projected signup conversion' },
              { stat: '80%+', label: 'Healf Zone awareness at launch' },
              { stat: '35%', label: 'Higher engagement (projected)' },
              { stat: '25%', label: 'Retention lift (projected)' },
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
              <h2 className="text-2xl font-medium">The Challenge</h2>
            </motion.div>
            <motion.div variants={fadeUp} className="lg:col-span-7 lg:col-start-6 space-y-10">
              <p className="text-sm text-[var(--text-400)] leading-relaxed">
                Healf's wellness platform covers supplements, personalised insights, and Healf Zone blood testing. But their minimal
                onboarding left new users with no idea what made them different. When I downloaded the app to explore it, I found three gaps
                that were likely costing them conversions and feature adoption.
              </p>
              <div className="space-y-6">
                {[
                  {
                    num: '01',
                    title: 'Minimal Value Communication',
                    body: 'Users open the app with no context about what Healf actually does. The three-part offering — Supplements, Insights, and Guidance via Healf Zone — isn\'t explained anywhere in the current flow. Someone arriving from an ad has no idea what they just signed up for.',
                  },
                  {
                    num: '02',
                    title: 'Healf Zone Buried',
                    body: 'Healf Zone — at-home blood testing with personalised supplement recommendations — is their main differentiator and likely their highest-margin product. It\'s not mentioned during onboarding. Users have to find it on their own, which almost nobody does with a £150+ product that needs context to make sense.',
                  },
                  {
                    num: '03',
                    title: 'No Personalisation Capture',
                    body: 'No goals or preferences are captured during onboarding. Every user gets the same experience regardless of whether they care about sleep, fitness, nutrition, or mental health. The result is generic product recommendations and a missed window — first sessions have the highest engagement of any session.',
                  },
                ].map((issue) => (
                  <div key={issue.num} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-[#F45D01] font-mono">{issue.num}</span>
                      <h3 className="text-sm font-semibold text-[var(--text-300)]">{issue.title}</h3>
                    </div>
                    <p className="text-sm text-[var(--text-400)] leading-relaxed">{issue.body}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: '40–50%', label: 'Estimated signup completion (minimal flow)' },
                  { val: '~10%', label: 'Users discovering Healf Zone via exploration' },
                ].map((m, i) => (
                  <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
                    <p className="text-3xl font-medium text-white mb-1">{m.val}</p>
                    <p className="text-xs text-[var(--text-500)]">{m.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Original State ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} className="mb-8">
              <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-3">Original State</p>
              <h2 className="text-2xl font-medium">The existing flow — annotated</h2>
              <p className="text-sm text-[var(--text-400)] mt-3 max-w-2xl">
                Screenshots of the original Healf onboarding in sequence, with friction points marked. These are the screens the redesign was responding to.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                { src: '/images/healf/before/before-1.png', label: 'Step 1' },
                { src: '/images/healf/before/before-2.png', label: 'Step 2' },
                { src: '/images/healf/before/before-3.png', label: 'Step 3' },
                { src: '/images/healf/before/before-4.png', label: 'Step 4' },
                { src: '/images/healf/before/before-5.png', label: 'Step 5' },
              ].map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
                  <ImageZoom src={img.src} alt={`Original Healf screen — ${img.label}`} className="w-full object-cover" />
                  <p className="text-xs text-[var(--text-600)] px-3 py-2">{img.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── Role & Team ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="lg:col-span-4">
              <SectionLabel>Role & Team</SectionLabel>
              <h2 className="text-2xl font-medium">My Contribution</h2>
            </motion.div>
            <motion.div variants={fadeUp} className="lg:col-span-7 lg:col-start-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {[
                  { label: 'Role', value: 'UX/UI Designer (Self-initiated)' },
                  { label: 'Platform', value: 'Mobile App (iOS/Android)' },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
                    <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-2">{item.label}</p>
                    <p className="text-sm text-[var(--text-300)]">{item.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[var(--text-400)] leading-relaxed mb-4">
                This was an unsolicited audit and redesign — I wasn't hired by Healf. I downloaded the app, found a product with real
                potential being undermined by its own onboarding, and worked out what I'd fix and why. The goal was to identify the
                business problem through a UX lens, not just to make screens look different.
              </p>
              <p className="text-sm text-[var(--text-400)] leading-relaxed">
                Scope was intentionally limited to the onboarding flow (4 screens). A focused, well-reasoned proposal is more valuable
                than a surface-level full-app redesign.
              </p>
              <p className="text-sm text-[var(--text-500)] leading-relaxed mt-3">
                I used Claude to structure the competitor analysis and pressure-test the onboarding flow logic — particularly the sequencing of personalisation questions and where to introduce the value proposition.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Research & Approach ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Approach</SectionLabel>
              <h2 className="text-2xl font-medium mb-10">Research & Strategy</h2>
            </motion.div>

            {/* Competitive analysis — native */}
            <motion.div variants={fadeUp} className="mb-10 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    name: 'Headspace / Calm',
                    category: 'Wellness category leaders',
                    strengths: [
                      '3–4 screen onboarding explaining value before signup',
                      'Progressive disclosure builds excitement before commitment',
                      'Personalisation goals captured on day one',
                    ],
                  },
                  {
                    name: 'Everlywell',
                    category: 'Blood testing competitor',
                    strengths: [
                      'Entire onboarding dedicated to explaining blood testing value',
                      'Trust-building content around lab accuracy and privacy',
                      'Feature education increases premium adoption rates',
                    ],
                  },
                  {
                    name: 'Ritual / Vitl / Form',
                    category: 'UK supplement brands',
                    strengths: [
                      'Supplement science shown upfront in onboarding',
                      'Differentiation clearly communicated before account creation',
                      'Goal-based personalisation sets expectations immediately',
                    ],
                  },
                ].map((c) => (
                  <div key={c.name} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden">
                    <div className="px-5 py-3 border-b border-[var(--border)]">
                      <p className="text-sm font-semibold">{c.name}</p>
                      <p className="text-xs text-[var(--text-600)] mt-0.5">{c.category}</p>
                    </div>
                    <div className="p-5">
                      <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-3">Patterns</p>
                      <ul className="space-y-2">
                        {c.strengths.map((s, i) => (
                          <li key={i} className="flex gap-2 text-xs text-[var(--text-400)] leading-relaxed">
                            <span className="text-[var(--border-md)] mt-0.5 shrink-0">+</span>{s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key patterns summary */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-4">Industry Patterns</p>
                  <ul className="space-y-2">
                    {[
                      '90% use progressive disclosure — value first, signup last',
                      '75% capture personalisation data (goals, preferences) during onboarding',
                      '100% of blood testing apps dedicate a screen to explaining testing value',
                      'Average 3–4 screens before account creation',
                    ].map((o, i) => (
                      <li key={i} className="flex gap-2 text-xs text-[var(--text-400)] leading-relaxed">
                        <span className="text-[#F45D01] mt-0.5 shrink-0">+</span>{o}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-4">Healf's Approach</p>
                  <ul className="space-y-2">
                    {[
                      'Minimal onboarding — likely just logo and "Get Started"',
                      'Immediate account creation before any value is shown',
                      'Healf Zone not mentioned — must be discovered through exploration',
                      'No personalisation or goal capture at any point',
                    ].map((t, i) => (
                      <li key={i} className="flex gap-2 text-xs text-[var(--text-400)] leading-relaxed">
                        <span className="text-[var(--border-md)] mt-0.5 shrink-0">—</span>{t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Key insight callout */}
              <div className="rounded-xl border border-[#F45D01]/20 bg-[#F45D01]/5 p-5">
                <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">Key Insight</p>
                <p className="text-sm text-[var(--text-300)] leading-relaxed">
                  Healf has a strong product that competitors can't match, including a £150+ blood testing service most wellness apps
                  don't offer. None of it is communicated at first launch. Every competing wellness app shows more value upfront than
                  Healf currently does.
                </p>
              </div>
            </motion.div>

            {/* Research methods & findings */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 space-y-4">
                <h3 className="text-base font-semibold">Research Methods</h3>
                <ul className="space-y-3">
                  {[
                    { method: 'Heuristic evaluation', detail: "Nielsen's 10 usability heuristics applied to current onboarding" },
                    { method: 'Competitive analysis', detail: 'Headspace, Calm, Ritual, Everlywell, Vitl, Form, Heights' },
                    { method: 'Conversion research', detail: 'Appcues onboarding best practices, 2023' },
                    { method: 'User psychology', detail: 'Progressive disclosure and commitment-before-value studies' },
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
                    'Progressive onboarding increases signup completion by 20–40% vs minimal flows',
                    'Wellness apps with personalised onboarding see 35% higher engagement and 25% higher retention',
                    'Healf Zone\'s premium positioning (£150+) requires trust-building that minimal onboarding cannot provide',
                    'Users who understand key features during onboarding use them 3× more than those who discover them later',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-[var(--text-400)] leading-relaxed">
                      <span className="text-[#F45D01] mt-1 shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Design strategy */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  num: '01',
                  title: 'Value-First Approach',
                  body: 'Show users what they\'re getting before asking for account creation. Research consistently shows users are more likely to sign up after seeing value first — progressive onboarding averages 20–40% higher conversion than minimal flows.',
                },
                {
                  num: '02',
                  title: 'Strategic Feature Positioning',
                  body: 'Dedicate a full screen to Healf Zone. At-home blood testing is complex and costs £150+. It needs explanation before users will consider it. A dedicated screen also signals that this is important — the same logic all premium-feature apps use.',
                },
                {
                  num: '03',
                  title: 'Immediate Personalisation',
                  body: "Capture goals using Healf's existing Four Pillars framework (EAT, MOVE, MIND, SLEEP). The data immediately feeds into product recommendations and content filtering — so the experience feels relevant from the first session.",
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

        {/* ── Solution ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Solution</SectionLabel>
              <h2 className="text-2xl font-medium mb-4">Progressive 4-Screen Onboarding</h2>
              <p className="text-sm text-[var(--text-400)] leading-relaxed max-w-2xl mb-10">
                A strategic redesign that explains the ecosystem upfront, dedicates a full screen to Healf Zone's unique value,
                captures wellness goals through Four Pillars selection, and moves account creation to the end — after value is demonstrated.
                Every screen includes a subtle "Skip introduction" path for power users who want immediate access.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  num: 'Screen 01',
                  title: 'Welcome + Ecosystem Overview',
                  description: 'Introduces Healf\'s three-part ecosystem with visual cards: Supplements (premium, transparent ingredients), Insights (personalised health content), and Guidance (expert-backed blood testing via Healf Zone).',
                  why: 'Sets expectations from the start. Users know what they\'re working with before they create an account.',
                  tag: 'Value first',
                },
                {
                  num: 'Screen 02',
                  title: 'Healf Zone Deep Dive',
                  description: 'A dedicated screen explaining at-home blood testing: 40+ biomarkers analysed, expert interpretation, and personalised supplement recommendations. Includes an optional "Learn more" link for deeper exploration.',
                  why: 'A dedicated screen signals this matters. Users who understand Healf Zone during onboarding are 3× more likely to purchase it later.',
                  tag: 'Feature education',
                },
                {
                  num: 'Screen 03',
                  title: 'Four Pillars Personalisation',
                  description: 'Multi-select goal capture using Healf\'s existing framework — EAT, MOVE, MIND, SLEEP. Visual selection (icon + label) is low friction. Continue button activates only when at least one pillar is selected.',
                  why: "Most users care about 2–3 pillars, not just one. Multi-select captures that honestly. The data drives personalised recommendations from the moment they hit the home screen.",
                  tag: 'Personalisation',
                },
                {
                  num: 'Screen 04',
                  title: 'Account Creation',
                  description: 'Standard signup form with email, password, and optional name. Social login options (Google, Apple) reduce friction. Subheadline reminds users why they\'re signing up: "Get personalised recommendations based on your goals."',
                  why: 'Asking for commitment before showing value is the main reason users drop out. Moving signup to the end — after personalisation — also gives users a reason to create an account: saving their goals.',
                  tag: 'Commitment last',
                },
              ].map((screen) => (
                <motion.div key={screen.num} variants={fadeUp}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs text-[#F45D01] font-mono block mb-1">{screen.num}</span>
                      <h3 className="text-base font-semibold">{screen.title}</h3>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full border border-[var(--border-md)] text-[var(--text-500)] shrink-0">{screen.tag}</span>
                  </div>
                  <p className="text-sm text-[var(--text-400)] leading-relaxed">{screen.description}</p>
                  <div className="border-t border-[var(--border)] pt-4">
                    <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">Why This Works</p>
                    <p className="text-sm text-[var(--text-300)] leading-relaxed">{screen.why}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Design decisions */}
            <motion.div variants={fadeUp} className="space-y-4">
              {[
                {
                  question: 'Why multi-select for Four Pillars, not single-select?',
                  answer: 'Most people\'s wellness concerns don\'t fit into a single category. Someone might care about sleep and fitness equally. Single-select forces an artificial choice. Multi-select also gives richer data for personalisation.',
                },
                {
                  question: 'Why a dedicated Healf Zone screen?',
                  answer: 'At-home blood testing isn\'t intuitive and costs £150+. It requires trust-building that a brief mention in an overview card cannot achieve. Competitors with premium features always dedicate space to them — screen real estate signals value.',
                },
                {
                  question: 'Why move account creation to the end?',
                  answer: 'Asking for commitment before showing value is the main reason users abandon wellness onboarding. Headspace, Calm, and Ritual all show value first. After personalisation, users also have a clearer reason to create an account: their goals need to be saved.',
                },
              ].map((d, i) => (
                <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-4">
                    <p className="text-sm font-semibold text-[var(--text-300)]">{d.question}</p>
                  </div>
                  <div className="lg:col-span-7 lg:col-start-6">
                    <p className="text-sm text-[var(--text-400)] leading-relaxed">{d.answer}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── Image Gallery ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Screens</SectionLabel>
              <h2 className="text-2xl font-medium mb-10">Final Designs</h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {finalDesigns.map((src, i) => (
                <motion.div key={i} variants={fadeUp} custom={i}
                  className="rounded-xl overflow-hidden bg-[var(--surface)] border border-[var(--border)]">
                  <ImageZoom src={src} alt={`Healf final design ${i + 1}`} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Expected Impact ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Expected Impact</SectionLabel>
              <h2 className="text-2xl font-medium mb-2">Projected Outcomes</h2>
              <p className="text-sm text-[var(--text-500)] leading-relaxed max-w-xl mb-8">
                Since this is an unsolicited redesign, outcomes are projected based on industry benchmarks from Appcues research and
                wellness app onboarding studies.
              </p>
            </motion.div>

            {/* Projected metrics chart */}
            <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 mb-8 space-y-5">
              <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-2">Current Estimate → Projected</p>
              {[
                { label: 'Signup Completion', before: 47, after: 70, beforeVal: '~45%', afterVal: '60–70%', delta: '+20–40%' },
                { label: 'Healf Zone Awareness', before: 12, after: 85, beforeVal: '~10–15%', afterVal: '80%+', delta: '~7× lift' },
                { label: 'Day-7 Retention', before: 55, after: 75, beforeVal: 'Baseline', afterVal: '+25%', delta: '+25%' },
                { label: 'Product Engagement', before: 50, after: 75, beforeVal: 'Baseline', afterVal: '+35%', delta: '+35%' },
              ].map((m) => (
                <div key={m.label} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[var(--text-400)]">{m.label}</span>
                    <span className="text-[#F45D01] font-mono font-semibold">{m.delta}</span>
                  </div>
                  <div className="relative h-7 rounded-md bg-[var(--bg)] overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-gray-700/60 rounded-md flex items-center pl-2"
                      style={{ width: `${m.before}%` }}>
                      <span className="text-[10px] text-[var(--text-400)]">{m.beforeVal}</span>
                    </div>
                  </div>
                  <div className="relative h-7 rounded-md bg-[var(--bg)] overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-[#F45D01]/70 rounded-md flex items-center pl-2 transition-all duration-700"
                      style={{ width: `${m.after}%` }}>
                      <span className="text-[10px] text-white font-medium">{m.afterVal}</span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-6 pt-2">
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-gray-700/60 inline-block" /><span className="text-xs text-[var(--text-500)]">Current estimate</span></div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-[#F45D01]/70 inline-block" /><span className="text-xs text-[var(--text-500)]">Projected</span></div>
              </div>
            </motion.div>

            {/* Validation plan */}
            <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4">
                <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-3">If Implemented</p>
                <h3 className="text-xl font-semibold">How I'd Validate This</h3>
              </div>
              <div className="lg:col-span-7 lg:col-start-6 space-y-3">
                {[
                  'A/B test current vs new onboarding across 10% of new users — measure signup completion and Four Pillars selection rate',
                  'Post-onboarding survey: "Do you understand what Healf offers?" — success if 90%+ can articulate all three pillars',
                  'Track Healf Zone click-through from the dedicated onboarding screen — target 25%+ exploring further',
                  'Monitor 7-day and 30-day retention for cohorts that completed personalisation vs skipped',
                  'Measure time to first purchase — expect reduction as users arrive with clearer intent',
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 text-sm text-[var(--text-400)] leading-relaxed">
                    <span className="text-[#F45D01] mt-1 shrink-0">—</span>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Next project CTA ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div>
              <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-2">Next Case Study</p>
              <h2 className="text-2xl font-medium">Lead Trader</h2>
              <p className="text-sm text-[var(--text-400)] mt-1">Redesigning stock trading for novice and expert users</p>
            </div>
            <Link to="/work/LeadTrader"
              className="flex items-center gap-2 bg-[var(--btn-bg)] text-[var(--btn-text)] px-6 py-3 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors shrink-0">
              View Case Study <ArrowRight size={15} />
            </Link>
          </motion.div>
        </section>

      </main>
      <Footer />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
