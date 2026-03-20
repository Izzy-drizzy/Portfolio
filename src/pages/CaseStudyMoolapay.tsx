import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import ImageZoom from '../components/ImageZoom';

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
        <img key={i} src={src} alt={`Moolapay mockup ${i + 1}`}
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

export default function CaseStudyMoolapay() {
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
              <span className="text-gray-300">Moolapay</span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
              Designing financial inclusion for communities left behind by <span className="text-[#F45D01]">traditional banking</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-sm text-gray-400 leading-relaxed max-w-md">
              Financial inclusion platform connecting underserved Nigerian communities to cryptocurrency and digital payments.
              Simplified navigation and visual language transcending literacy barriers, with trust-building elements and culturally-aware interface patterns.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex items-center gap-3 text-xs text-gray-500">
              <span>2022</span>
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
              { stat: '85%', label: 'Users understood core features without explanation' },
              { stat: '92%', label: 'Task completion rate across usability tests' },
              { stat: '78%', label: 'Nigerian testers said it "felt designed for them"' },
              { stat: '7→3', label: 'Steps to send crypto, down from typical wallet' },
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
                Nigeria has one of Africa's largest cryptocurrency adoption rates, yet millions of potential users are excluded by
                complex fintech interfaces designed for tech-savvy urban users. Existing apps — Kuda, PiggyVest, Cowrywise — serve
                educated, digitally-literate users, leaving those with varying literacy levels, limited smartphone experience, and
                inconsistent internet connectivity completely behind.
              </p>
              <div className="space-y-5">
                {[
                  {
                    num: '01',
                    title: 'Crypto Complexity Barrier',
                    body: 'Existing crypto wallets require technical knowledge of public/private keys, blockchain confirmations, network fees, and wallet addresses. Research found 68% of respondents found cryptocurrency "too complicated" despite genuine interest in using it.',
                  },
                  {
                    num: '02',
                    title: 'Money Management Invisibility',
                    body: "Traditional expense tracking apps require manual categorisation, receipt scanning, or complex budget setup — friction that users with limited time and digital literacy won't overcome. 73% of respondents struggled to monitor where their money goes, citing 'too much effort' as the barrier.",
                  },
                  {
                    num: '03',
                    title: 'Savings Failure',
                    body: "Without automated systems or behavioural nudges, discretionary income gets spent rather than saved. 65% of respondents said they 'want to save but can't seem to' despite having some discretionary income — the problem is systemic, not motivational.",
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
                  { val: '68%', label: 'Found crypto "too complicated" despite interest' },
                  { val: '54%', label: 'Abandoned financial apps due to complexity' },
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
                  { label: 'Role', value: 'UX Research, UI Design, User Testing, Design System' },
                  { label: 'Platform', value: 'Mobile App (iOS/Android)' },
                  { label: 'Team', value: 'Designer, Product Managers, Engineers' },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-5">
                    <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">{item.label}</p>
                    <p className="text-sm text-gray-300">{item.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                I led design on Moolapay end-to-end — embedded within a cross-functional team of product managers and
                engineers building a real product for underserved Nigerian communities. I owned the full design process:
                user research, information architecture, interaction design, visual design, and the design system.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Research was conducted through community interviews and observational studies with participants across Lagos,
                Abuja, and Port Harcourt — grounding every design decision in real behaviour rather than assumptions.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Research & Strategy ── */}
        <section className="px-5 md:px-10 py-20 border-t border-gray-800">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Approach</SectionLabel>
              <h2 className="text-2xl font-bold mb-10">Research & Strategy</h2>
            </motion.div>

            {/* Research methods */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <motion.div variants={fadeUp} className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-6 space-y-4">
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
                      <span><span className="text-gray-200">{r.method}</span><span className="text-gray-500"> — {r.detail}</span></span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeUp} className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-6 space-y-4">
                <h3 className="text-base font-semibold">Observational Insights</h3>
                <ul className="space-y-3">
                  {[
                    'Users relied heavily on icons over text for navigation — visual pattern-matching, not reading',
                    'Error messages caused immediate panic and abandonment — no recovery behaviour',
                    'Too much information upfront triggered paralysis — progressive disclosure essential',
                    'Visual confirmation (animation, colour change) was trusted far more than text confirmation',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-400 leading-relaxed">
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
                  <div key={p.name} className="rounded-xl border border-gray-800 bg-[#1A1A1A] overflow-hidden flex flex-col">
                    <div className="px-5 py-4 border-b border-gray-800">
                      <p className="font-semibold text-sm">{p.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{p.role}</p>
                      <p className="text-xs text-gray-600 mt-0.5">{p.location}</p>
                    </div>
                    <div className="p-5 space-y-4 flex-1">
                      <div>
                        <p className="text-xs text-gray-600 uppercase tracking-widest mb-1.5">Biography</p>
                        <p className="text-xs text-gray-400 leading-relaxed">{p.bio}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">Behavioural Traits</p>
                        <div className="flex flex-wrap gap-1.5">
                          {p.traits.map((t) => (
                            <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-gray-700 text-gray-400">{t}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-1.5">Needs & Goals</p>
                        <ul className="space-y-1">
                          {p.goals.map((g, i) => (
                            <li key={i} className="flex gap-2 text-xs text-gray-400 leading-relaxed">
                              <span className="text-gray-700 shrink-0 mt-0.5">{i + 1}.</span>{g}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 uppercase tracking-widest mb-1.5">Pain Points</p>
                        <ul className="space-y-1">
                          {p.pains.map((pt, i) => (
                            <li key={i} className="flex gap-2 text-xs text-gray-400 leading-relaxed">
                              <span className="text-gray-700 shrink-0 mt-0.5">{i + 1}.</span>{pt}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="border-t border-gray-800 pt-4">
                        <p className="text-xs text-gray-600 uppercase tracking-widest mb-1">Marital Status</p>
                        <p className="text-xs text-gray-400">{p.status}</p>
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
                  body: 'Icons, colours, and visual patterns carry meaning. Text supports visuals, not the other way around. Critical for users with limited literacy or reading comprehension.',
                },
                {
                  num: '02',
                  title: 'Progressive Disclosure',
                  body: 'Show only essential information initially. Advanced features accessible on-demand. Prevents overwhelming novice users while still serving power users.',
                },
                {
                  num: '03',
                  title: 'Automated Intelligence',
                  body: 'The app works in the background to track, categorise, and manage money. Users benefit from smart defaults rather than manual configuration.',
                },
                {
                  num: '04',
                  title: 'Cultural Localisation',
                  body: 'Interface language, examples, and patterns reflect Nigerian context. "Moolah" (slang for money) resonates culturally while remaining internationally viable.',
                },
                {
                  num: '05',
                  title: 'Low-Bandwidth Optimisation',
                  body: 'Lightweight interfaces for varying connectivity. Core features work offline. Data-heavy features load progressively — essential for 2G/3G networks.',
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

        {/* ── Challenges ── */}
        <section className="px-5 md:px-10 py-20 border-t border-gray-800">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Challenges</SectionLabel>
              <h2 className="text-2xl font-bold mb-10">Unexpected Obstacles</h2>
            </motion.div>
            <div className="space-y-6">
              {[
                {
                  num: '01',
                  title: 'Balancing Simplicity with Crypto Complexity',
                  problem: 'Cryptocurrency inherently involves complex concepts — blockchain, wallets, addresses, network fees. Oversimplifying risks security breaches or user confusion when things go wrong.',
                  solution: 'Created a two-tier experience: Basic mode hides technical details, Advanced mode exposes them. Used visual metaphors ("Money vault" for wallet, "Send to phone number" instead of wallet address) and progressive education — tooltips explain concepts when users need them, not upfront.',
                },
                {
                  num: '02',
                  title: 'Designing for Varying Literacy Levels',
                  problem: 'One interface must serve users with limited reading comprehension (visual learners), moderate digital literacy (needing guidance), and high digital literacy (wanting efficiency) — simultaneously.',
                  solution: 'Icon + text pattern for every action (redundant communication builds confidence). Universal colour language: green = money in, red = money out, blue = savings. Visual feedback via animations confirms actions. Simplified language: "Send money" not "Transfer funds," "Save automatically" not "Configure auto-debit." Testing validated: users with limited literacy completed core tasks 85% of the time using icons alone.',
                },
                {
                  num: '03',
                  title: 'Trust-Building in a Crypto-Sceptical Market',
                  problem: 'Cryptocurrency scams are common in Nigeria. Target users have often been burned before. Building trust for a new platform requires more than just good design — it requires transparency.',
                  solution: 'All fees shown upfront with no hidden charges. Visual confirmation preview before every transaction. Clear security communication (encryption, two-factor auth). Educational "How we keep your money safe" content. Social proof from users like them — not corporate endorsements.',
                },
              ].map((c) => (
                <motion.div key={c.num} variants={fadeUp}
                  className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-4">
                    <span className="text-xs text-[#F45D01] font-mono mb-3 block">{c.num}</span>
                    <h3 className="text-base font-semibold">{c.title}</h3>
                  </div>
                  <div className="lg:col-span-7 lg:col-start-6 space-y-4">
                    <div>
                      <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">Problem</p>
                      <p className="text-sm text-gray-400 leading-relaxed">{c.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">Solution</p>
                      <p className="text-sm text-gray-300 leading-relaxed">{c.solution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Solution ── */}
        <section className="px-5 md:px-10 py-20 border-t border-gray-800">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Solution</SectionLabel>
              <h2 className="text-2xl font-bold mb-4">A Visual-First Social Finance Platform</h2>
              <p className="text-sm text-gray-400 leading-relaxed max-w-2xl mb-10">
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
                  why: 'Scannable in 3 seconds. Icons communicate meaning without reading text. Most-used actions front and centre, eliminating the navigation hunting that frustrated users in existing apps.',
                },
                {
                  num: 'Feature 02',
                  title: 'Transfers',
                  tag: 'Phone numbers not wallets',
                  description: "Simplified 3-step send flow: select recipient by phone number (not wallet address) → enter amount in Naira or crypto (app handles conversion) → visual confirmation preview showing money moving between accounts. SMS + in-app confirmation on success.",
                  why: "Phone numbers are a familiar mental model — users already send money this way via mobile banking. Eliminating wallet addresses removes the single biggest technical barrier to crypto adoption for non-technical users.",
                },
                {
                  num: 'Feature 03',
                  title: 'Wallets',
                  tag: 'Crypto made approachable',
                  description: '"Your Bitcoin vault" instead of "BTC wallet." Balance shown in both crypto and Naira equivalents. Simple "Convert to Naira" button for swapping. Advanced users can tap "View address" to see technical details — beginners never need to see it.',
                  why: "Progressive disclosure at its core: power users get full control, novice users get simplicity. Neither is penalised for the other's needs.",
                },
                {
                  num: 'Feature 04',
                  title: 'Expenses',
                  tag: 'Automated tracking',
                  description: 'App automatically categorises transactions using merchant data. Visual spending chart with colour-coded categories (Food, Transport, Bills). Weekly/monthly toggle. One-tap to correct a category. Automated insights: "You spent 40% less on food this week!"',
                  why: 'Manual expense tracking has 12% adoption. Automated tracking has 78% engagement. Users get the benefit of financial visibility without any effort — removing the discipline barrier entirely.',
                },
              ].map((feature) => (
                <motion.div key={feature.num} variants={fadeUp}
                  className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs text-[#F45D01] font-mono block mb-1">{feature.num}</span>
                      <h3 className="text-base font-semibold">{feature.title}</h3>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full border border-gray-700 text-gray-500 shrink-0 text-right">{feature.tag}</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                  <div className="border-t border-gray-800 pt-4">
                    <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">Why This Works</p>
                    <p className="text-sm text-gray-300 leading-relaxed">{feature.why}</p>
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

        {/* ── Testing & Refinement ── */}
        <section className="px-5 md:px-10 py-20 border-t border-gray-800">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Testing & Refinement</SectionLabel>
              <h2 className="text-2xl font-bold mb-4">What the Tests Revealed</h2>
              <p className="text-sm text-gray-400 leading-relaxed max-w-xl mb-10">
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
                  className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-5">
                    <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">Task {i + 1}</p>
                    <p className="text-sm font-medium text-gray-200 mb-3">{t.task}</p>
                    <p className="text-3xl font-bold text-[#F45D01]">{t.success}</p>
                    <p className="text-xs text-gray-500 mt-1">success rate</p>
                  </div>
                  <div className="lg:col-span-6 lg:col-start-7 space-y-4">
                    <div>
                      <p className="text-xs text-gray-600 uppercase tracking-widest mb-1.5">Insight</p>
                      <p className="text-sm text-gray-400 leading-relaxed">{t.insight}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-1.5">Iteration</p>
                      <p className="text-sm text-gray-300 leading-relaxed">{t.iteration}</p>
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
                <div key={i} className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-5 space-y-3">
                  <h4 className="text-sm font-semibold text-gray-200">{change.title}</h4>
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-widest mb-1">Before</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{change.before}</p>
                  </div>
                  <div className="border-t border-gray-800 pt-3">
                    <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-1">After</p>
                    <p className="text-xs text-gray-300 leading-relaxed">{change.after}</p>
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
            {/* First row — 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {[
                '/images/moolapay/final-1.png',
                '/images/moolapay/final-2.png',
                '/images/moolapay/final-3.png',
              ].map((src, i) => (
                <motion.div key={i} variants={fadeUp} custom={i}
                  className="rounded-xl overflow-hidden bg-[#1A1A1A] border border-gray-800 aspect-[4/3]">
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
                  className="rounded-xl overflow-hidden bg-[#1A1A1A] border border-gray-800 aspect-[4/3]">
                  <ImageZoom src={src} alt={`Moolapay final design ${i + 4}`} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Results ── */}
        <section className="px-5 md:px-10 py-20 border-t border-gray-800">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Results & Impact</SectionLabel>
              <h2 className="text-2xl font-bold mb-8">Measurable Outcomes</h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { stat: '85%', label: 'Feature comprehension without explanation', sub: 'Send, receive, save understood immediately' },
                { stat: '92%', label: 'Primary task completion', sub: 'Send money, view balance, track expenses' },
                { stat: '78%', label: 'Nigerian testers: "designed for us"', sub: 'Cultural resonance validated' },
                { stat: '7→3', label: 'Steps to send crypto', sub: 'Down from typical wallet experience' },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} custom={i} className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-6">
                  <p className="text-3xl font-bold text-[#F45D01] mb-1">{item.stat}</p>
                  <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                  <p className="text-xs text-gray-600">{item.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* User quotes */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {[
                { quote: '"I don\'t have to juggle three banking apps anymore. Everything is in one place and I can see exactly where my money is going."', person: 'Kemi, 28 — HR Manager & Business Owner' },
                { quote: '"Receiving international payments used to be a nightmare. Now I just share a link and the money arrives in my wallet."', person: 'David, 20 — Student & Freelance Developer' },
                { quote: '"I get notified every time someone logs into my account. As someone who runs two businesses, that peace of mind is everything."', person: 'Peace, 21 — Lawyer & Entrepreneur' },
              ].map((q, i) => (
                <div key={i} className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-6">
                  <p className="text-sm text-gray-300 leading-relaxed italic">{q.quote}</p>
                  <p className="text-xs text-gray-600 mt-4">— {q.person}</p>
                </div>
              ))}
            </motion.div>

            {/* Design system legacy */}
            <motion.div variants={fadeUp} className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4">
                <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Long-term Value</p>
                <h3 className="text-xl font-bold">A Scalable Foundation</h3>
              </div>
              <div className="lg:col-span-7 lg:col-start-6 space-y-3">
                {[
                  'Design system scales to additional features — bill payments, savings goals, investments — without redesign',
                  'Visual-first patterns apply directly to new cryptocurrencies (same card, different icon)',
                  'Cultural localisation approach translates to other African markets with minimal adaptation',
                  'Accessibility principles built into components ensure future features remain inclusive by default',
                  'Low-bandwidth optimisation strategy documented — new features inherit performance constraints automatically',
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
              <h2 className="text-2xl font-bold">Healf App Onboarding</h2>
              <p className="text-sm text-gray-400 mt-1">Redesigning wellness discovery and engagement</p>
            </div>
            <Link to="/work/healf"
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
