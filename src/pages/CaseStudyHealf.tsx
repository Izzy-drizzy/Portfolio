import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import ImageZoom from '../components/ImageZoom';
import ImageCarousel from '../components/ImageCarousel';
import SEO from '../components/SEO';

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

export default function CaseStudyHealf() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SEO title="Healf Onboarding Case Study" description="Unsolicited redesign of Healf's mobile app onboarding. Introduced the full ecosystem before account creation using the Four Pillars framework." path="/work/healf" />
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
            <motion.h1 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.15]">
              Making Healf's onboarding as intentional as the ecosystem behind it
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-sm text-[var(--text-400)] leading-relaxed max-w-md">
              Healf's mobile app onboarding wasn't doing justice to the full ecosystem behind it. This was an unsolicited audit — I redesigned the first-run experience to be more intentional, ensuring it communicated the breadth and value of everything Healf offers from the very first interaction.
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
            <ImageCarousel images={images} alt="Healf mockup" />
          </motion.div>
        </section>

        {/* ── Summary stats ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            {[
              { stat: '4 screens', label: 'Redesigned first-run flow — from zero to full ecosystem introduction' },
              { stat: '0 → 1', label: 'Dedicated Healf Zone introduction screen added to onboarding' },
              { stat: '4 pillars', label: 'Personalisation captured upfront using Healf\'s own EAT, MOVE, MIND, SLEEP framework' },
              { stat: 'Last', label: 'Where account creation now sits — after value is shown, not before' },
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
                Healf's wellness platform covers supplements, personalised insights, and Healf Zone blood testing. When I downloaded the app,
                the home page was visually strong — but there was no guided first-run experience to frame what I was looking at. Users arrived
                at a well-designed product without any intentional introduction to the ecosystem behind it.
              </p>
              <div className="space-y-6">
                {[
                  {
                    num: '01',
                    title: 'Unguided First Impression',
                    body: 'Users were dropped straight into the home page — products on display, visuals well put together — but with no guided introduction to frame what they were looking at. The breadth of Healf\'s ecosystem (Supplements, Insights, Healf Zone) was all there, just with no intentional first-run experience to connect it for the user.',
                  },
                  {
                    num: '02',
                    title: 'Healf Zone Buried',
                    body: 'Healf Zone — at-home blood testing with personalised supplement recommendations — is their main differentiator and likely their highest-margin product. It\'s not mentioned during onboarding. Users have to find it on their own, which almost nobody does with a £289/year product that needs context to make sense.',
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
                  { val: '0 screens', label: 'Dedicated to introducing Healf\'s ecosystem before the user reaches the home page' },
                  { val: 'Post-signup', label: 'When Healf Zone first becomes visible — with no framing or explanation at first launch' },
                ].map((m, i) => (
                  <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
                    <p className="text-2xl font-medium text-white mb-2">{m.val}</p>
                    <p className="text-xs text-[var(--text-500)] leading-relaxed">{m.label}</p>
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
                I'd been following Healf for a while before this — genuinely. I use their supplements personally and have a lot of
                respect for what they're building. So when I noticed the gap between how strong the product is and how the app's
                first-run experience represented it, I couldn't not do something about it. This wasn't a cold audit of a random app;
                it was an attempt to solve a real problem in a product I actually care about.
              </p>
              <p className="text-sm text-[var(--text-400)] leading-relaxed">
                Scope was intentionally limited to the onboarding flow (4 screens). A focused, well-reasoned proposal is more valuable
                than a surface-level full-app redesign.
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
                      'Users land directly on the home page — no guided first-run introduction',
                      'Ecosystem context left to the user to piece together through exploration',
                      'Healf Zone present in the app but not surfaced or explained during first launch',
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
                  Healf has a strong product that competitors can't match, including a £289/year blood testing service most wellness apps
                  don't offer. The product was all there on first launch — but without an intentional first-run experience, users had
                  no guidance to help them understand the full picture of what they'd just signed up for.
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
                    'Healf Zone\'s premium positioning (£289/year) requires trust-building that minimal onboarding cannot provide',
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
                  body: 'Dedicate a full screen to Healf Zone. At-home blood testing is complex and costs £289/year. It needs explanation before users will consider it. A dedicated screen also signals that this is important — the same logic all premium-feature apps use.',
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
                  answer: 'At-home blood testing isn\'t intuitive and costs £289/year. It requires trust-building that a brief mention in an overview card cannot achieve. Competitors with premium features always dedicate space to them — screen real estate signals value.',
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
              <h2 className="text-2xl font-medium mb-2">What This Redesign Is Built to Move</h2>
              <p className="text-sm text-[var(--text-500)] leading-relaxed max-w-xl mb-8">
                Without access to Healf's internal data, specific numbers aren't something I can honestly claim. Instead — here's the
                reasoning behind each design decision and what it's intended to improve.
              </p>
            </motion.div>

            {/* Design intentions */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                {
                  num: '01',
                  title: 'Signup completion',
                  body: 'Moving account creation to the end — after value is shown and goals are captured — removes the ask-before-give drop-off point. Users arrive at signup with a reason to complete it: their personalisation needs to be saved.',
                },
                {
                  num: '02',
                  title: 'Healf Zone awareness',
                  body: 'A dedicated onboarding screen guarantees every new user sees what Healf Zone is and why it matters. Currently it surfaces only through exploration — which most users won\'t do without prior context for a £289/year product.',
                },
                {
                  num: '03',
                  title: 'Day-7 retention',
                  body: 'Personalisation captured at onboarding means the home screen feels relevant from session one. Users who arrive with their goals already set have more reason to return than those starting cold.',
                },
                {
                  num: '04',
                  title: 'Feature engagement',
                  body: 'Users introduced to a feature during onboarding engage with it more than those who discover it later — the introduction creates intent. Without it, Healf Zone and Insights remain features users stumble across rather than seek out.',
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">{item.num}</p>
                  <p className="text-base font-medium text-[var(--text)] mb-2">{item.title}</p>
                  <p className="text-sm text-[var(--text-400)] leading-relaxed">{item.body}</p>
                </div>
              ))}
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
