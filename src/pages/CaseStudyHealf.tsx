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

const tags = ['Product Design', 'UX Audit', 'Mobile Design', 'Onboarding', 'Health & Wellness'];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

function SectionLabel({ children }: { children: string }) {
  return <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">{children}</p>;
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
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#141414] to-transparent pointer-events-none" />
      <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button onClick={prev} className="w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center hover:bg-black/80 transition-colors"><ArrowLeft size={14} /></button>
        <span className="text-xs text-gray-400">{current + 1} / {images.length}</span>
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
    <div className="min-h-screen bg-[#141414] text-[#E4E3E0]">
      <Navigation onOpenContact={() => setContactOpen(true)} />
      <main>

        {/* ── Hero ── */}
        <section className="min-h-screen pt-28 pb-12 px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center overflow-hidden">
          <motion.div className="lg:col-span-5 flex flex-col gap-8" initial="hidden" animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 text-xs text-gray-500">
              <Link to="/work" className="hover:text-gray-300 transition-colors">Case Studies</Link>
              <span>/</span>
              <span className="text-gray-300">Healf App Onboarding</span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.15]">
              Redesigning onboarding to connect users to the right wellness content faster
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-sm text-gray-400 leading-relaxed max-w-md">
              UX audit and onboarding redesign for Healf's wellness platform. Simplified navigation, improved content hierarchy,
              and enhanced service discovery to create a personalised first-run experience that drives engagement.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex items-center gap-3 text-xs text-gray-500">
              <span>2025</span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span>Delivered by Bukunmi Isijola</span>
            </motion.div>
            <motion.div variants={fadeUp} custom={4} className="flex flex-col gap-3">
              <p className="text-xs text-gray-600 uppercase tracking-widest">Project Tags</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1.5 rounded-full border border-gray-700 text-gray-300 bg-[#1A1A1A]">{tag}</span>
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
        <section className="px-5 md:px-10 py-16 border-t border-gray-800">
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            {[
              { stat: '+40%', label: 'Projected signup conversion' },
              { stat: '80%+', label: 'Healf Zone awareness at launch' },
              { stat: '35%', label: 'Higher engagement (projected)' },
              { stat: '25%', label: 'Retention lift (projected)' },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} custom={i} className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-6">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#F45D01] mb-2">{item.stat}</p>
                <p className="text-xs text-gray-400">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── Problem Framing ── */}
        <section className="px-5 md:px-10 py-20 border-t border-gray-800">
          <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="lg:col-span-4">
              <SectionLabel>Problem Framing</SectionLabel>
              <h2 className="text-2xl font-bold">The Challenge</h2>
            </motion.div>
            <motion.div variants={fadeUp} className="lg:col-span-7 lg:col-start-6 space-y-10">
              <p className="text-sm text-gray-400 leading-relaxed">
                Healf's wellness platform offers a powerful ecosystem — supplements, personalised insights, and Healf Zone blood
                testing — but their minimal onboarding left new users confused about what made them different. When I downloaded the
                app to explore the product, I identified three critical gaps that were likely costing them conversions and feature adoption.
              </p>
              <div className="space-y-6">
                {[
                  {
                    num: '01',
                    title: 'Minimal Value Communication',
                    body: 'Users land in the app with zero context about what makes Healf unique. There\'s no explanation of their three-part ecosystem: Supplements (premium, science-backed products), Insights (personalised health content), and Guidance (Healf Zone blood testing). Users arriving from ads may not understand what they signed up for.',
                  },
                  {
                    num: '02',
                    title: 'Healf Zone Buried',
                    body: 'Healf Zone — at-home blood testing with personalised supplement recommendations — is their key differentiator and likely highest-margin offering. Yet it\'s not mentioned during onboarding. Users must discover it through exploration, significantly reducing adoption rates for a feature that requires trust and understanding to convert.',
                  },
                  {
                    num: '03',
                    title: 'No Personalisation Capture',
                    body: 'No user preferences, goals, or wellness priorities are captured during onboarding. The app experience is identical for all users — whether they care about sleep, fitness, nutrition, or mental health. This leads to irrelevant product recommendations and a wasted opportunity when users are most engaged: their first session.',
                  },
                ].map((issue) => (
                  <div key={issue.num} className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-[#F45D01] font-mono">{issue.num}</span>
                      <h3 className="text-sm font-semibold text-gray-200">{issue.title}</h3>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">{issue.body}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: '40–50%', label: 'Estimated signup completion (minimal flow)' },
                  { val: '~10%', label: 'Users discovering Healf Zone via exploration' },
                ].map((m, i) => (
                  <div key={i} className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-5">
                    <p className="text-3xl font-bold text-white mb-1">{m.val}</p>
                    <p className="text-xs text-gray-500">{m.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Role & Team ── */}
        <section className="px-5 md:px-10 py-20 border-t border-gray-800">
          <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="lg:col-span-4">
              <SectionLabel>Role & Team</SectionLabel>
              <h2 className="text-2xl font-bold">My Contribution</h2>
            </motion.div>
            <motion.div variants={fadeUp} className="lg:col-span-7 lg:col-start-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {[
                  { label: 'Role', value: 'UX/UI Designer (Self-initiated)' },
                  { label: 'Platform', value: 'Mobile App (iOS/Android)' },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-5">
                    <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">{item.label}</p>
                    <p className="text-sm text-gray-300">{item.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                This was an unsolicited UX audit and redesign proposal — I wasn't hired by Healf. I saw a product with strong potential
                undermined by weak onboarding and recognised patterns that limit growth. This project demonstrates strategic product
                thinking beyond aesthetics: identifying business problems through a UX lens and proposing solutions that balance user
                needs with commercial goals.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Scope was intentionally limited to the onboarding flow (4 screens). A focused, well-reasoned proposal is more valuable
                than a surface-level full-app redesign.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Research & Approach ── */}
        <section className="px-5 md:px-10 py-20 border-t border-gray-800">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Approach</SectionLabel>
              <h2 className="text-2xl font-bold mb-10">Research & Strategy</h2>
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
                  <div key={c.name} className="rounded-xl border border-gray-800 bg-[#1A1A1A] overflow-hidden">
                    <div className="px-5 py-3 border-b border-gray-800">
                      <p className="text-sm font-semibold">{c.name}</p>
                      <p className="text-xs text-gray-600 mt-0.5">{c.category}</p>
                    </div>
                    <div className="p-5">
                      <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-3">Patterns</p>
                      <ul className="space-y-2">
                        {c.strengths.map((s, i) => (
                          <li key={i} className="flex gap-2 text-xs text-gray-400 leading-relaxed">
                            <span className="text-gray-700 mt-0.5 shrink-0">+</span>{s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key patterns summary */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-6">
                  <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-4">Industry Patterns</p>
                  <ul className="space-y-2">
                    {[
                      '90% use progressive disclosure — value first, signup last',
                      '75% capture personalisation data (goals, preferences) during onboarding',
                      '100% of blood testing apps dedicate a screen to explaining testing value',
                      'Average 3–4 screens before account creation',
                    ].map((o, i) => (
                      <li key={i} className="flex gap-2 text-xs text-gray-400 leading-relaxed">
                        <span className="text-[#F45D01] mt-0.5 shrink-0">+</span>{o}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-6">
                  <p className="text-xs text-gray-600 uppercase tracking-widest mb-4">Healf's Approach</p>
                  <ul className="space-y-2">
                    {[
                      'Minimal onboarding — likely just logo and "Get Started"',
                      'Immediate account creation before any value is shown',
                      'Healf Zone not mentioned — must be discovered through exploration',
                      'No personalisation or goal capture at any point',
                    ].map((t, i) => (
                      <li key={i} className="flex gap-2 text-xs text-gray-400 leading-relaxed">
                        <span className="text-gray-700 mt-0.5 shrink-0">—</span>{t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Key insight callout */}
              <div className="rounded-xl border border-[#F45D01]/20 bg-[#F45D01]/5 p-5">
                <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">Key Insight</p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Healf has a superior product with three distinct value pillars — including a premium £150+ blood testing service that
                  competitors can't match. Yet they're communicating none of it at the most critical moment: first launch. Every
                  competing wellness app shows more value upfront than Healf does.
                </p>
              </div>
            </motion.div>

            {/* Research methods & findings */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <motion.div variants={fadeUp} className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-6 space-y-4">
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
                      <span><span className="text-gray-200">{r.method}</span><span className="text-gray-500"> — {r.detail}</span></span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeUp} className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-6 space-y-4">
                <h3 className="text-base font-semibold">Key Findings</h3>
                <ul className="space-y-3">
                  {[
                    'Progressive onboarding increases signup completion by 20–40% vs minimal flows',
                    'Wellness apps with personalised onboarding see 35% higher engagement and 25% higher retention',
                    'Healf Zone\'s premium positioning (£150+) requires trust-building that minimal onboarding cannot provide',
                    'Users who understand key features during onboarding use them 3× more than those who discover them later',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-400 leading-relaxed">
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
                  body: 'Show users what they\'re getting before asking for account creation. Follow the proven pattern: educate → excite → capture data → commit. Users more likely to sign up after seeing value (40% higher conversion).',
                },
                {
                  num: '02',
                  title: 'Strategic Feature Positioning',
                  body: 'Dedicate a full screen to Healf Zone — the key differentiator. At-home blood testing is complex and premium, requiring explanation and trust-building. Screen real estate signals importance to the user.',
                },
                {
                  num: '03',
                  title: 'Immediate Personalisation',
                  body: "Capture wellness goals using Healf's existing Four Pillars framework (EAT, MOVE, MIND, SLEEP). Enables personalised recommendations, relevant content surfacing, and a tailored experience from session one.",
                },
              ].map((p) => (
                <div key={p.num} className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-6">
                  <span className="text-xs text-[#F45D01] font-mono mb-4 block">{p.num}</span>
                  <h3 className="text-base font-semibold mb-3">{p.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── Solution ── */}
        <section className="px-5 md:px-10 py-20 border-t border-gray-800">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Solution</SectionLabel>
              <h2 className="text-2xl font-bold mb-4">Progressive 4-Screen Onboarding</h2>
              <p className="text-sm text-gray-400 leading-relaxed max-w-2xl mb-10">
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
                  why: 'Sets expectations immediately and positions Healf as a comprehensive wellness platform — not just a supplement seller.',
                  tag: 'Value first',
                },
                {
                  num: 'Screen 02',
                  title: 'Healf Zone Deep Dive',
                  description: 'A dedicated screen explaining at-home blood testing: 40+ biomarkers analysed, expert interpretation, and personalised supplement recommendations. Includes an optional "Learn more" link for deeper exploration.',
                  why: 'Dedicating a full screen signals importance. Users who understand Healf Zone during onboarding are 3× more likely to purchase it later.',
                  tag: 'Feature education',
                },
                {
                  num: 'Screen 03',
                  title: 'Four Pillars Personalisation',
                  description: 'Multi-select goal capture using Healf\'s existing framework — EAT, MOVE, MIND, SLEEP. Visual selection (icon + label) is low friction. Continue button activates only when at least one pillar is selected.',
                  why: "Multi-select captures nuanced goals most users care about 2–3 pillars. Enables personalised product recommendations and content filtering immediately.",
                  tag: 'Personalisation',
                },
                {
                  num: 'Screen 04',
                  title: 'Account Creation',
                  description: 'Standard signup form with email, password, and optional name. Social login options (Google, Apple) reduce friction. Subheadline reminds users why they\'re signing up: "Get personalised recommendations based on your goals."',
                  why: 'Account creation after value is demonstrated follows industry best practice. Users who completed personalisation are more invested in the outcome.',
                  tag: 'Commitment last',
                },
              ].map((screen) => (
                <motion.div key={screen.num} variants={fadeUp}
                  className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs text-[#F45D01] font-mono block mb-1">{screen.num}</span>
                      <h3 className="text-base font-semibold">{screen.title}</h3>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full border border-gray-700 text-gray-500 shrink-0">{screen.tag}</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{screen.description}</p>
                  <div className="border-t border-gray-800 pt-4">
                    <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">Why This Works</p>
                    <p className="text-sm text-gray-300 leading-relaxed">{screen.why}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Design decisions */}
            <motion.div variants={fadeUp} className="space-y-4">
              {[
                {
                  question: 'Why multi-select for Four Pillars, not single-select?',
                  answer: 'Wellness is holistic — most users care about multiple areas (sleep + fitness, nutrition + mental health). Single-select forces an artificial choice. Multi-select data is richer for personalisation and aligns with how users actually think about their health.',
                },
                {
                  question: 'Why a dedicated Healf Zone screen?',
                  answer: 'At-home blood testing isn\'t intuitive and costs £150+. It requires trust-building that a brief mention in an overview card cannot achieve. Competitors with premium features always dedicate space to them — screen real estate signals value.',
                },
                {
                  question: 'Why move account creation to the end?',
                  answer: 'Asking for commitment before showing value is the primary reason users abandon wellness app onboarding. Headspace, Calm, and Ritual all show value first. Moving the ask to after personalisation also gives users a reason for it: saving their goals.',
                },
              ].map((d, i) => (
                <div key={i} className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-4">
                    <p className="text-sm font-semibold text-gray-200">{d.question}</p>
                  </div>
                  <div className="lg:col-span-7 lg:col-start-6">
                    <p className="text-sm text-gray-400 leading-relaxed">{d.answer}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── Image Gallery ── */}
        <section className="px-5 md:px-10 py-20 border-t border-gray-800">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Screens</SectionLabel>
              <h2 className="text-2xl font-bold mb-10">Final Designs</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {images.slice(0, 2).map((src, i) => (
                <motion.div key={i} variants={fadeUp} custom={i}
                  className="rounded-xl overflow-hidden bg-[#1A1A1A] border border-gray-800 aspect-[4/3]">
                  <ImageZoom src={src} alt={`Healf onboarding screen ${i + 1}`} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {images.slice(2).map((src, i) => (
                <motion.div key={i + 2} variants={fadeUp} custom={i + 2}
                  className="rounded-xl overflow-hidden bg-[#1A1A1A] border border-gray-800 aspect-[4/3]">
                  <ImageZoom src={src} alt={`Healf onboarding screen ${i + 3}`} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Expected Impact ── */}
        <section className="px-5 md:px-10 py-20 border-t border-gray-800">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Expected Impact</SectionLabel>
              <h2 className="text-2xl font-bold mb-2">Projected Outcomes</h2>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xl mb-8">
                Since this is an unsolicited redesign, outcomes are projected based on industry benchmarks from Appcues research and
                wellness app onboarding studies.
              </p>
            </motion.div>

            {/* Projected metrics chart */}
            <motion.div variants={fadeUp} className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-6 mb-8 space-y-5">
              <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">Current Estimate → Projected</p>
              {[
                { label: 'Signup Completion', before: 47, after: 70, beforeVal: '~45%', afterVal: '60–70%', delta: '+20–40%' },
                { label: 'Healf Zone Awareness', before: 12, after: 85, beforeVal: '~10–15%', afterVal: '80%+', delta: '~7× lift' },
                { label: 'Day-7 Retention', before: 55, after: 75, beforeVal: 'Baseline', afterVal: '+25%', delta: '+25%' },
                { label: 'Product Engagement', before: 50, after: 75, beforeVal: 'Baseline', afterVal: '+35%', delta: '+35%' },
              ].map((m) => (
                <div key={m.label} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">{m.label}</span>
                    <span className="text-[#F45D01] font-mono font-semibold">{m.delta}</span>
                  </div>
                  <div className="relative h-7 rounded-md bg-[#141414] overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-gray-700/60 rounded-md flex items-center pl-2"
                      style={{ width: `${m.before}%` }}>
                      <span className="text-[10px] text-gray-400">{m.beforeVal}</span>
                    </div>
                  </div>
                  <div className="relative h-7 rounded-md bg-[#141414] overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-[#F45D01]/70 rounded-md flex items-center pl-2 transition-all duration-700"
                      style={{ width: `${m.after}%` }}>
                      <span className="text-[10px] text-white font-medium">{m.afterVal}</span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-6 pt-2">
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-gray-700/60 inline-block" /><span className="text-xs text-gray-500">Current estimate</span></div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-[#F45D01]/70 inline-block" /><span className="text-xs text-gray-500">Projected</span></div>
              </div>
            </motion.div>

            {/* Validation plan */}
            <motion.div variants={fadeUp} className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4">
                <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">If Implemented</p>
                <h3 className="text-xl font-bold">How I'd Validate This</h3>
              </div>
              <div className="lg:col-span-7 lg:col-start-6 space-y-3">
                {[
                  'A/B test current vs new onboarding across 10% of new users — measure signup completion and Four Pillars selection rate',
                  'Post-onboarding survey: "Do you understand what Healf offers?" — success if 90%+ can articulate all three pillars',
                  'Track Healf Zone click-through from the dedicated onboarding screen — target 25%+ exploring further',
                  'Monitor 7-day and 30-day retention for cohorts that completed personalisation vs skipped',
                  'Measure time to first purchase — expect reduction as users arrive with clearer intent',
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                    <span className="text-[#F45D01] mt-1 shrink-0">—</span>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Next project CTA ── */}
        <section className="px-5 md:px-10 py-20 border-t border-gray-800">
          <motion.div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div>
              <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">Next Case Study</p>
              <h2 className="text-2xl font-bold">Lead Trader</h2>
              <p className="text-sm text-gray-400 mt-1">Redesigning stock trading for novice and expert users</p>
            </div>
            <Link to="/work/LeadTrader"
              className="flex items-center gap-2 bg-[#E4E3E0] text-[#141414] px-6 py-3 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors shrink-0">
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
