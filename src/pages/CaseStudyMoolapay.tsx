import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import ImageZoom from '../components/ImageZoom';
import SEO from '../components/SEO';

const images = [
  '/images/moolapay/slide-1.png',
  '/images/moolapay/slide-2.png',
  '/images/moolapay/slide-3.png',
  '/images/moolapay/slide-4.png',
];

const tags = ['Product Design', 'Cryptocurrency', 'Financial Inclusion', 'Low Digital Literacy', 'Inclusive UX'];

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
        <img key={i} src={src} alt={`Moolapay mockup ${i + 1}`}
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

export default function CaseStudyMoolapay() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SEO title="Moolapay Case Study" description="Mobile cryptocurrency payments app designed for underserved Nigerian users. Visual-first interaction design supporting 4 literacy levels with zero jargon." path="/work/Moolapay" />
      <Navigation onOpenContact={() => setContactOpen(true)} />
      <main>

        {/* ── Hero ── */}
        <section className="min-h-screen pt-28 pb-12 px-7 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center overflow-hidden">
          <motion.div className="lg:col-span-5 flex flex-col gap-8" initial="hidden" animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 text-xs text-[var(--text-500)]">
              <Link to="/work" className="hover:text-[var(--text-300)] transition-colors">Case Studies</Link>
              <span>/</span>
              <span className="text-[var(--text-300)]">Moolapay</span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.15]">
              Designing financial inclusion for communities left behind by traditional banking
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-sm text-[var(--text-400)] leading-relaxed max-w-md">
              A payments app built for Nigerian users that existing fintech apps weren't designed for — varying literacy levels, unreliable connectivity, and genuine distrust of crypto after years of scams.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex items-center gap-3 text-xs text-[var(--text-500)]">
              <span>2022</span>
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
              { stat: '7→3', label: 'Steps to send crypto, reduced from the typical wallet experience' },
              { stat: '3', label: 'Core jobs addressed — send/receive, save, track spending' },
              { stat: '4', label: 'Literacy levels designed for, from icon-only to power users' },
              { stat: '0', label: 'Jargon in the interface — blockchain, keys, confirmations replaced throughout' },
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
                Nigeria has one of Africa's largest cryptocurrency adoption rates, yet millions of potential users are shut out by
                fintech interfaces built for urban, digitally-literate people. Apps like Kuda, PiggyVest, and Cowrywise work well
                for that audience. They don't work for users with limited smartphone experience, inconsistent internet, or
                lower reading levels.
              </p>
              <div className="space-y-5">
                {[
                  {
                    num: '01',
                    title: 'Crypto Complexity Barrier',
                    body: 'Existing crypto wallets assume users know about public/private keys, blockchain confirmations, network fees, and wallet addresses. Most users in this demographic found crypto "too complicated" — not because they weren\'t interested, but because the interfaces weren\'t built for them.',
                  },
                  {
                    num: '02',
                    title: 'Money Management Invisibility',
                    body: "Traditional expense tracking apps need manual categorisation, receipt scanning, or elaborate budget setup. Most users just stop. Users consistently cited 'too much effort' as the reason spending was invisible to them.",
                  },
                  {
                    num: '03',
                    title: 'Savings Failure',
                    body: "When there's no system working in the background, money gets spent. Users wanted to save but couldn't follow through — not because they lacked motivation, but because nothing made it easy to start.",
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
                  { val: 'Complexity', label: 'The primary barrier — not lack of interest in crypto or finance' },
                  { val: 'Abandonment', label: 'The consistent pattern across existing financial apps in this market' },
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
                  { label: 'Role', value: 'UX Research, UI Design, User Testing, Design System' },
                  { label: 'Platform', value: 'Mobile App (iOS/Android)' },
                  { label: 'Team', value: 'Founder, Product Managers, Engineers' },
                  { label: 'Engagement', value: 'Contract — concluded after deliverables' },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
                    <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-2">{item.label}</p>
                    <p className="text-sm text-[var(--text-300)]">{item.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[var(--text-400)] leading-relaxed mb-4">
                I was brought in as a contract designer working directly with the Moolapay founder, product managers, and engineering team. I owned the full design process: user research, information architecture, interaction design, visual design, and the design system. The engagement ended after design deliverables were handed off to the development team.
              </p>
              <p className="text-sm text-[var(--text-500)] leading-relaxed mt-3">
                I used Claude to help synthesise community interview notes and brainstorm culturally-aware design patterns — particularly for trust signals and how to frame financial concepts for users with varying literacy levels.
              </p>
              <p className="text-sm text-[var(--text-400)] leading-relaxed">
                Research was conducted through community interviews and observational studies with participants across Lagos,
                Abuja, and Port Harcourt — grounding every design decision in real behaviour rather than assumptions.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Research & Strategy ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Approach</SectionLabel>
              <h2 className="text-2xl font-medium mb-10">Research & Strategy</h2>
            </motion.div>

            {/* Research methods */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 space-y-4">
                <h3 className="text-base font-semibold">Research Methods</h3>
                <ul className="space-y-3">
                  {[
                    { method: 'User interviews', detail: '21 participants — informal sector workers, small business owners, students' },
                    { method: 'Questionnaires', detail: '150+ respondents quantifying pain points across demographics' },
                    { method: 'Observational studies', detail: '8 participants shadowed attempting real fintech tasks' },
                    { method: 'Competitive analysis', detail: 'Kuda, PiggyVest, Cowrywise, Flutterwave — patterns and failure modes' },
                  ].map((r, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed">
                      <span className="text-[#F45D01] font-mono text-xs mt-0.5 shrink-0">0{i + 1}</span>
                      <span><span className="text-[var(--text-300)]">{r.method}</span><span className="text-[var(--text-500)]"> — {r.detail}</span></span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 space-y-4">
                <h3 className="text-base font-semibold">Observational Insights</h3>
                <ul className="space-y-3">
                  {[
                    'Users relied heavily on icons over text for navigation — visual pattern-matching, not reading',
                    'Error messages caused immediate panic and abandonment — no recovery behaviour',
                    'Too much information upfront triggered paralysis — progressive disclosure essential',
                    'Visual confirmation (animation, colour change) was trusted far more than text confirmation',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-[var(--text-400)] leading-relaxed">
                      <span className="text-[#F45D01] mt-1 shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* User personas */}
            <motion.div variants={fadeUp} className="mb-12">
              <h3 className="text-base font-semibold mb-6">User Personas</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    name: 'Peace, 21',
                    role: 'Corp Member, Lawyer',
                    location: 'F.C.T State, Nigeria',
                    bio: 'First-class Law graduate working with a law firm in Abuja. Also an entrepreneur with two businesses — prefers an e-wallet to track expenses, sales and income.',
                    traits: ['Smart money woman', 'Ambivert', 'Intelligent', 'Money conscious'],
                    goals: [
                      'Transfer money without being charged',
                      'Track spending and manage budget as an entrepreneur',
                      'Login notifications for security when her phone is out of sight',
                    ],
                    pains: [
                      'Needs internet for every transaction — wants USSD fallback for connectivity issues',
                      'Having to restart transactions when OTP arrives late',
                    ],
                    status: 'Courting',
                  },
                  {
                    name: 'Kemi, 28',
                    role: 'HR Manager, Online Business Owner',
                    location: 'Lagos, Nigeria',
                    bio: 'HR professional who also runs an online business. Has two kids and a very busy schedule — needs financial tools that work without friction.',
                    traits: ['Money conscious', 'Hardworking', 'Social', 'Techy'],
                    goals: [
                      'Link credit cards to a single wallet for easy access',
                      'Multiple security layers to keep funds safe',
                      'Readily available customer support',
                    ],
                    pains: [
                      'Managing multiple bank accounts for her business is cumbersome and wastes time',
                      'Mobile banking apps are confusing and customer support isn\'t always available',
                    ],
                    status: 'Married, Has kids',
                  },
                  {
                    name: 'David, 20',
                    role: 'Student, Freelance Developer',
                    location: 'Osun State, Nigeria',
                    bio: 'Computer science student in final year, working as a freelance developer remotely. Prefers an e-wallet over carrying cash.',
                    traits: ['Techy', 'Introverted', 'Intelligent', 'Money conscious'],
                    goals: [
                      'Send and receive payments in any currency seamlessly',
                      'All-in-one wallet connected to bank accounts to reduce app-switching',
                      'Track spending and manage budget',
                    ],
                    pains: [
                      'Difficulty receiving payments in currencies other than Naira',
                      'Having to switch between multiple banking apps to complete transactions',
                    ],
                    status: 'Single',
                  },
                ].map((p) => (
                  <div key={p.name} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden flex flex-col">
                    <div className="px-5 py-4 border-b border-[var(--border)]">
                      <p className="font-semibold text-sm">{p.name}</p>
                      <p className="text-xs text-[var(--text-500)] mt-0.5">{p.role}</p>
                      <p className="text-xs text-[var(--text-600)] mt-0.5">{p.location}</p>
                    </div>
                    <div className="p-5 space-y-4 flex-1">
                      <div>
                        <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-1.5">Biography</p>
                        <p className="text-xs text-[var(--text-400)] leading-relaxed">{p.bio}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-2">Behavioural Traits</p>
                        <div className="flex flex-wrap gap-1.5">
                          {p.traits.map((t) => (
                            <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-[var(--border-md)] text-[var(--text-400)]">{t}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-1.5">Needs & Goals</p>
                        <ul className="space-y-1">
                          {p.goals.map((g, i) => (
                            <li key={i} className="flex gap-2 text-xs text-[var(--text-400)] leading-relaxed">
                              <span className="text-[var(--border-md)] shrink-0 mt-0.5">{i + 1}.</span>{g}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-1.5">Pain Points</p>
                        <ul className="space-y-1">
                          {p.pains.map((pt, i) => (
                            <li key={i} className="flex gap-2 text-xs text-[var(--text-400)] leading-relaxed">
                              <span className="text-[var(--border-md)] shrink-0 mt-0.5">{i + 1}.</span>{pt}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="border-t border-[var(--border)] pt-4">
                        <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-1">Marital Status</p>
                        <p className="text-xs text-[var(--text-400)]">{p.status}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Design principles */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  num: '01',
                  title: 'Visual-First Communication',
                  body: 'Icons, colours, and visual patterns carry meaning. Text supports visuals, not the other way around. This matters most for users who navigate by pattern, not by reading.',
                },
                {
                  num: '02',
                  title: 'Progressive Disclosure',
                  body: 'Show only what users need at each step. Advanced options are there if someone looks for them. Novice users don\'t have to ignore features they don\'t understand yet.',
                },
                {
                  num: '03',
                  title: 'Automated Intelligence',
                  body: 'The app tracks and categorises spending in the background. Users get the benefit without having to set anything up.',
                },
                {
                  num: '04',
                  title: 'Cultural Localisation',
                  body: 'Language, examples, and patterns reflect Nigerian context. "Moolah" is Nigerian slang for money. The interface feels local, not translated.',
                },
                {
                  num: '05',
                  title: 'Low-Bandwidth Optimisation',
                  body: 'Core features work on 2G/3G. Data-heavy content loads progressively. The app doesn\'t require a good connection to be useful.',
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
              <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-3">Process</p>
              <h2 className="text-2xl font-medium">The Messy Middle</h2>
              <p className="text-sm text-[var(--text-400)] mt-3 max-w-2xl">User flows, journey maps, and wireframe sketches from before the hi-fi screens were made.</p>
            </motion.div>

            {/* User Flow & IA — full width */}
            <motion.div variants={fadeUp} className="mb-3">
              <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-4">User Flow & Information Architecture</p>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] mb-12">
              <ImageZoom src="/images/moolapay/process/user-flow-ia.png" alt="User flow and IA diagram" className="w-full object-cover" />
              <p className="text-xs text-[var(--text-600)] px-4 py-2">User flow & IA — full app structure</p>
            </motion.div>

            {/* Journey Maps — 2 col */}
            <motion.div variants={fadeUp} className="mb-3">
              <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-4">User Journey Maps</p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
              {[
                { src: '/images/moolapay/process/journey-fund-transfer.png', label: 'Journey map — Fund Transfer' },
                { src: '/images/moolapay/process/journey-scan-to-pay.png', label: 'Journey map — Scan to Pay' },
              ].map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
                  <ImageZoom src={img.src} alt={img.label} className="w-full object-cover" />
                  <p className="text-xs text-[var(--text-600)] px-4 py-2">{img.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Wireframes — full width */}
            <motion.div variants={fadeUp} className="mb-3">
              <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-4">Wireframes & IA Sketches</p>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
              <ImageZoom src="/images/moolapay/process/wireframes.png" alt="Messy wireframes and IA sketches" className="w-full object-cover" />
              <p className="text-xs text-[var(--text-600)] px-4 py-2">Lo-fi wireframes & IA sketches</p>
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
                  title: 'Balancing Simplicity with Crypto Complexity',
                  problem: 'Cryptocurrency involves real complexity: blockchain, wallets, addresses, network fees. Hiding too much creates security problems. Showing too much drives people away.',
                  solution: 'Built a two-tier experience: Basic mode hides the technical details, Advanced mode exposes them. Visual language ("Money vault" for wallet, "Send to phone number" instead of wallet address) replaces jargon. Tooltips explain concepts when users run into them, not before.',
                },
                {
                  num: '02',
                  title: 'Designing for Varying Literacy Levels',
                  problem: 'The same interface needs to work for someone navigating by icons alone, someone who needs light guidance, and someone who just wants to get in and out fast.',
                  solution: 'Icon + text pattern for every action (redundant communication builds confidence). Universal colour language: green = money in, red = money out, blue = savings. Visual feedback via animations confirms actions. Simplified language: "Send money" not "Transfer funds," "Save automatically" not "Configure auto-debit."',
                },
                {
                  num: '03',
                  title: 'Trust-Building in a Crypto-Sceptical Market',
                  problem: 'Crypto scams are common in Nigeria. Many of the users this was built for had already been burned. A polished UI doesn\'t fix that on its own.',
                  solution: 'Every fee is shown before the transaction goes through. A visual preview shows exactly where money is going. Security information isn\'t buried in settings — it\'s shown where users actually need to see it.',
                },
              ].map((c) => (
                <motion.div key={c.num} variants={fadeUp}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
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
              <h2 className="text-2xl font-medium mb-4">A Visual-First Social Finance Platform</h2>
              <p className="text-sm text-[var(--text-400)] leading-relaxed max-w-2xl mb-10">
                Splash → minimal onboarding (3 screens) → main dashboard. Navigation organised around what users actually do —
                not technical service names. Five focused tabs: Home, Transfers, Wallets, Expenses, Profile.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  num: 'Feature 01',
                  title: 'Dashboard',
                  tag: 'Visual-first',
                  description: 'Large, prominent balance overview with visual breakdown (Cash vs Crypto vs Savings). Four Quick Action icons front and centre: Send Money, Receive Cash, Buy Airtime, Save Now. Visual transaction timeline with colour-coded icons — green up arrow (money in), red down arrow (money out).',
                  why: 'Readable in 3 seconds. Icons carry meaning without text. The most-used actions are front and centre, so users aren\'t hunting through menus.',
                },
                {
                  num: 'Feature 02',
                  title: 'Transfers',
                  tag: 'Phone numbers not wallets',
                  description: "Simplified 3-step send flow: select recipient by phone number (not wallet address) → enter amount in Naira or crypto (app handles conversion) → visual confirmation preview showing money moving between accounts. SMS + in-app confirmation on success.",
                  why: "Nigerians already send money using phone numbers through mobile banking. Removing wallet addresses removes the single biggest technical barrier — the app handles the lookup, users never see it.",
                },
                {
                  num: 'Feature 03',
                  title: 'Wallets',
                  tag: 'Crypto made approachable',
                  description: '"Your Bitcoin vault" instead of "BTC wallet." Balance shown in both crypto and Naira equivalents. Simple "Convert to Naira" button for swapping. Advanced users can tap "View address" to see technical details — beginners never need to see it.',
                  why: "Power users get full control. Novice users get simplicity. Neither group is penalised for the other's needs.",
                },
                {
                  num: 'Feature 04',
                  title: 'Expenses',
                  tag: 'Automated tracking',
                  description: 'App automatically categorises transactions using merchant data. Visual spending chart with colour-coded categories (Food, Transport, Bills). Weekly/monthly toggle. One-tap to correct a category. Automated insights: "You spent 40% less on food this week!"',
                  why: 'Manual expense tracking fails because it requires a habit change most users won\'t make. Automating it entirely removes the barrier — the benefit is there without asking anything of the user.',
                },
              ].map((feature) => (
                <motion.div key={feature.num} variants={fadeUp}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs text-[#F45D01] font-mono block mb-1">{feature.num}</span>
                      <h3 className="text-base font-semibold">{feature.title}</h3>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full border border-[var(--border-md)] text-[var(--text-500)] shrink-0 text-right">{feature.tag}</span>
                  </div>
                  <p className="text-sm text-[var(--text-400)] leading-relaxed">{feature.description}</p>
                  <div className="border-t border-[var(--border)] pt-4">
                    <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">Why This Works</p>
                    <p className="text-sm text-[var(--text-300)] leading-relaxed">{feature.why}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Key flow decisions */}
            <motion.div variants={fadeUp} className="space-y-4">
              <h3 className="text-base font-semibold mb-2">Key Design Decisions</h3>
              {[
                {
                  question: 'Why phone numbers instead of wallet addresses?',
                  answer: '"Enter wallet address: 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D" creates immediate anxiety and drop-off. Phone numbers are how Nigerians already think about sending money. The app handles wallet lookup invisibly — users never need to know it exists.',
                },
                {
                  question: 'Why minimal onboarding (3 screens) rather than a full tutorial?',
                  answer: 'Users with limited digital literacy abandon long onboarding. Get to value fast and educate contextually as they use features. Tooltips explain concepts when users encounter them naturally, not upfront when they have no context for why it matters.',
                },
                {
                  question: 'Why visual timeline over text-based transaction list?',
                  answer: 'Icons + colours + amounts communicate at a glance. Users with limited reading comprehension understand visual patterns faster than text descriptions. A red downward arrow next to "₦5,000" communicates everything needed without reading a single word.',
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

        {/* ── Testing & Refinement ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Testing & Refinement</SectionLabel>
              <h2 className="text-2xl font-medium mb-4">What the Tests Revealed</h2>
              <p className="text-sm text-[var(--text-400)] leading-relaxed max-w-xl mb-10">
                Tested with 12 participants across varying digital literacy levels. Three task scenarios, each revealing something the design had missed.
              </p>
            </motion.div>

            <div className="space-y-4 mb-12">
              {[
                {
                  task: 'Send ₦5,000 to a contact by phone number',
                  success: '83%',
                  insight: '2 failures occurred because users didn\'t know how to add a recipient to contacts first',
                  iteration: 'Added "Send to new number" option directly in the flow — eliminating the prerequisite step',
                },
                {
                  task: 'View Bitcoin balance and convert to Naira',
                  success: '75%',
                  insight: '3 users confused by "Swap" terminology — expected "Convert" or "Change to Naira"',
                  iteration: 'Changed button text to "Convert to Naira" with "Swap" as secondary label for power users',
                },
                {
                  task: 'See where money was spent this month',
                  success: '92%',
                  insight: 'Users loved visual categories; immediately requested budget limit-setting as a follow-up feature',
                  iteration: 'Budget setting added to roadmap as a future feature based on direct user demand',
                },
              ].map((t, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-5">
                    <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-2">Task {i + 1}</p>
                    <p className="text-sm font-medium text-[var(--text-300)] mb-3">{t.task}</p>
                  </div>
                  <div className="lg:col-span-6 lg:col-start-7 space-y-4">
                    <div>
                      <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-1.5">Insight</p>
                      <p className="text-sm text-[var(--text-400)] leading-relaxed">{t.insight}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-1.5">Iteration</p>
                      <p className="text-sm text-[var(--text-300)] leading-relaxed">{t.iteration}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Iteration changes */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Simplified transaction language',
                  before: '"Debit ₦5,000 from your Naira wallet to 0813..."',
                  after: '"Send ₦5,000 to Kemi" with visual preview',
                },
                {
                  title: 'Increased touch target sizes',
                  before: '40px buttons — barely met minimum guidelines',
                  after: '48px minimum, 56px for primary actions — comfortable for less-experienced smartphone users',
                },
                {
                  title: 'Improved colour contrast',
                  before: 'Secondary text at 3.8:1 contrast ratio — unreadable in Nigerian sunlight',
                  after: 'Secondary text at 4.7:1 — WCAG AA compliant, readable outdoors',
                },
                {
                  title: 'Streamlined crypto flow',
                  before: 'Select crypto → enter wallet address → confirm (7 steps total)',
                  after: 'Enter phone number → amount → confirm (3 steps — app handles wallet lookup invisibly)',
                },
              ].map((change, i) => (
                <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 space-y-3">
                  <h4 className="text-sm font-semibold text-[var(--text-300)]">{change.title}</h4>
                  <div>
                    <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-1">Before</p>
                    <p className="text-xs text-[var(--text-500)] leading-relaxed">{change.before}</p>
                  </div>
                  <div className="border-t border-[var(--border)] pt-3">
                    <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-1">After</p>
                    <p className="text-xs text-[var(--text-300)] leading-relaxed">{change.after}</p>
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
            {/* First row — 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {[
                '/images/moolapay/final-1.png',
                '/images/moolapay/final-2.png',
                '/images/moolapay/final-3.png',
              ].map((src, i) => (
                <motion.div key={i} variants={fadeUp} custom={i}
                  className="rounded-xl overflow-hidden bg-[var(--surface)] border border-[var(--border)] aspect-[4/3]">
                  <ImageZoom src={src} alt={`Moolapay final design ${i + 1}`} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
            {/* Second row — 4 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                '/images/moolapay/final-4.png',
                '/images/moolapay/final-5.png',
                '/images/moolapay/final-6.png',
                '/images/moolapay/final-7.png',
              ].map((src, i) => (
                <motion.div key={i + 3} variants={fadeUp} custom={i + 3}
                  className="rounded-xl overflow-hidden bg-[var(--surface)] border border-[var(--border)] aspect-[4/3]">
                  <ImageZoom src={src} alt={`Moolapay final design ${i + 4}`} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Results ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Results & Impact</SectionLabel>
              <h2 className="text-2xl font-medium mb-8">Measurable Outcomes</h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { stat: '7→3', label: 'Steps to send crypto', sub: 'Down from the typical wallet experience' },
                { stat: '3', label: 'Core jobs designed for', sub: 'Send/receive, save, track spending' },
                { stat: '4', label: 'Literacy levels supported', sub: 'From icon-only to power users' },
                { stat: '0', label: 'Jargon in the interface', sub: 'Blockchain, keys, confirmations replaced throughout' },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} custom={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <p className="text-3xl font-medium text-[#F45D01] mb-1">{item.stat}</p>
                  <p className="text-xs text-[var(--text-400)] mb-1">{item.label}</p>
                  <p className="text-xs text-[var(--text-600)]">{item.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Design system legacy */}
            <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4">
                <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-3">Long-term Value</p>
                <h3 className="text-xl font-semibold">Built to Extend</h3>
              </div>
              <div className="lg:col-span-7 lg:col-start-6 space-y-3">
                {[
                  'The design system supports new features — bill payments, savings goals, investments — without needing a redesign',
                  'Visual-first patterns work for any new cryptocurrency (same card structure, different icon)',
                  'The localisation approach can be adapted for other African markets without starting from scratch',
                  'Accessibility is built into the component layer, so new features inherit it by default',
                  'Performance constraints are documented and shared — new features don\'t accidentally break the low-bandwidth experience',
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
              <h2 className="text-2xl font-medium">Healf App Onboarding</h2>
              <p className="text-sm text-[var(--text-400)] mt-1">Redesigning wellness discovery and engagement</p>
            </div>
            <Link to="/work/healf"
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
