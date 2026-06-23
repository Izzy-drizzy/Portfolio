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
  '/images/freshroute/slides/slide-1.png',
  '/images/freshroute/slides/slide-2.png',
  '/images/freshroute/slides/slide-3.png',
  '/images/freshroute/slides/slide-4.png',
  '/images/freshroute/slides/slide-5.png',
  '/images/freshroute/slides/slide-6.png',
  '/images/freshroute/slides/slide-7.png',
];

const finalDesigns = [
  { src: '/images/freshroute/final/final-1.png', label: 'Welcome to Personalisation' },
  { src: '/images/freshroute/final/final-2.png', label: 'Choose Preferred Days' },
  { src: '/images/freshroute/final/final-3.png', label: 'Choose Preferred Times' },
  { src: '/images/freshroute/final/final-4.png', label: 'Rank Your Top 3 (Optional)' },
  { src: '/images/freshroute/final/final-5.png', label: 'Onboarding Complete' },
  { src: '/images/freshroute/final/final-6.png', label: 'Slot Selection Landing (Personalised)' },
  { src: '/images/freshroute/final/final-7.png', label: 'Slot Grid - 2-Hour Default' },
  { src: '/images/freshroute/final/final-8.png', label: 'Slot Grid - 1-Hour Toggle' },
  { src: '/images/freshroute/final/final-9.png', label: 'Filters Panel (Mobile)' },
  { src: '/images/freshroute/final/final-10.png', label: 'Slot Confirmation' },
  { src: '/images/freshroute/final/final-11.png', label: 'Slot Unavailable Error' },
  { src: '/images/freshroute/final/final-12.png', label: 'Auto-Learning Notification' },
];

const lofiDesigns = [
  { src: '/images/freshroute/lofi/lofi-1.jpg', label: 'Welcome to Personalisation' },
  { src: '/images/freshroute/lofi/lofi-2.jpg', label: 'Choose Preferred Days' },
  { src: '/images/freshroute/lofi/lofi-3.jpg', label: 'Choose Preferred Times' },
  { src: '/images/freshroute/lofi/lofi-4.jpg', label: 'Rank Your Top 3' },
  { src: '/images/freshroute/lofi/lofi-5.jpg', label: 'Onboarding Complete' },
  { src: '/images/freshroute/lofi/lofi-6.jpg', label: 'Slot Selection Landing' },
  { src: '/images/freshroute/lofi/lofi-7.jpg', label: 'Slot Grid - 2-Hour' },
  { src: '/images/freshroute/lofi/lofi-8.jpg', label: 'Slot Grid - 1-Hour' },
  { src: '/images/freshroute/lofi/lofi-9.jpg', label: 'Filters Panel' },
  { src: '/images/freshroute/lofi/lofi-10.jpg', label: 'Slot Unavailable' },
  { src: '/images/freshroute/lofi/lofi-11.jpg', label: 'Accessibility Mode' },
  { src: '/images/freshroute/lofi/lofi-12.jpg', label: 'Auto-Learning' },
];

const tags = ['Product Design', 'Grocery & Delivery', 'Accessibility', 'WCAG 2.2 AA', 'UX Strategy', 'Design Leadership'];

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


export default function CaseStudyFreshRoute() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SEO title="FreshRoute Case Study" description="Redesigned slot booking and substitutions for a UK grocery platform. Competitive analysis across 6 platforms, 15 research interviews, and a tested high-fidelity prototype targeting £46M in recoverable revenue." path="/work/FreshRoute" />
      <Navigation onOpenContact={() => setIsContactModalOpen(true)} />

      <main>
        {/* ── HERO ── */}
        <section className="min-h-screen pt-28 pb-16 px-4 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
            <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
              <motion.div variants={fadeUp} className="flex items-center gap-2 text-xs text-[var(--text-500)] mb-6">
                <Link to="/work" className="hover:text-[var(--text-300)] transition-colors">Case Studies</Link>
                <span>/</span>
                <span>FreshRoute</span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight mb-6">
                Cutting a projected £46M in lost revenue by fixing two screens
              </motion.h1>

              <motion.p variants={fadeUp} className="text-sm text-[var(--text-400)] leading-relaxed mb-6">
                FreshRoute is a UK grocery delivery platform losing money in two specific places: a slot grid that 22% of shoppers abandoned before booking, and a substitution system that generated £3.2M a year in complaint-driven support costs. I led the redesign of both flows across a five-week sprint, from research synthesis through to a tested high-fidelity prototype.
              </motion.p>

              <motion.div variants={fadeUp} className="flex items-center gap-2 text-xs text-[var(--text-500)] mb-8">
                <span>2026 - 5-week design sprint</span>
                <span className="w-1 h-1 rounded-full bg-gray-700" />
                <span>Lead Product Designer @ Amdari</span>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="text-xs border border-[var(--border-md)] text-[var(--text-400)] px-3 py-1 rounded-full">{t}</span>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-7 rounded-xl overflow-hidden bg-[var(--surface)]"
            style={{ height: '65vh' }}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ImageCarousel images={images} alt="FreshRoute mockup" />
          </motion.div>
        </section>

        {/* ── SUMMARY STATS ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {[
              { val: '~£46M', label: 'Projected annual revenue recovered across slot abandonment and substitution complaints' },
              { val: '22% → ~15%', label: 'Slot abandonment reduction target through simplified grid and next-available shortcut' },
              { val: '~45%', label: 'Projected substitution complaint reduction by moving decisions from doorstep to pre-packing' },
              { val: '23 → 0', label: 'WCAG 2.2 AA failures cleared through accessibility-first design, not retrofitting' },
            ].map((s) => (
              <motion.div key={s.val} variants={fadeUp}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <p className="text-3xl md:text-4xl font-medium text-[#F45D01] mb-2">{s.val}</p>
                <p className="text-xs text-[var(--text-400)] leading-relaxed">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── PROBLEM FRAMING ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>Problem Framing</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-medium mb-4">Three things bleeding money at once</h2>
              <p className="text-sm text-[var(--text-400)] leading-relaxed max-w-2xl">
                FreshRoute had a healthy customer base and a booking experience that quietly leaked them. The numbers in the brief were specific enough that the problem framed itself.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                {
                  n: '01',
                  title: 'Slot Abandonment',
                  body: '22% of shoppers started booking a delivery slot and gave up before confirming. That abandonment mapped to £149M of at-risk revenue across the platform.',
                },
                {
                  n: '02',
                  title: 'Substitution Complaints',
                  body: 'Substitution complaints made up 28% of all customer service contacts, costing £3.2M a year, with another £1.9M lost to shoppers binning substitutions they never wanted.',
                },
                {
                  n: '03',
                  title: 'Accessibility Exposure',
                  body: 'The product carried 23 WCAG 2.2 AA failures, the kind of thing that stays invisible until a regulator or a lawsuit makes it visible.',
                },
              ].map((p) => (
                <motion.div key={p.n} variants={fadeUp}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <span className="text-xs text-[#F45D01] font-mono block mb-3">{p.n}</span>
                  <h3 className="text-sm font-semibold mb-2">{p.title}</h3>
                  <p className="text-xs text-[var(--text-400)] leading-relaxed">{p.body}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp}
              className="rounded-xl border border-[#F45D01]/20 bg-[#F45D01]/5 p-6 md:p-8">
              <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-3">Competitive Analysis</p>
              <p className="text-sm text-[var(--text-300)] leading-relaxed max-w-3xl mb-4">
                I ran a competitive teardown of six UK platforms: Ocado, Tesco, Sainsbury's, Amazon Fresh, Waitrose, and Gopuff, scoring each across slot UX, substitution control, mobile experience, pricing, and accessibility. The pattern was consistent: everyone built slot grids in 30-minute or 1-hour increments, which produces 15 to 30 rows of tiny cells. On a phone, that is a wall of grey "fully booked" boxes with no shortcut to the first open slot.
              </p>
              <p className="text-sm text-[var(--text-300)] leading-relaxed max-w-3xl">
                Substitutions were worse, because nobody had solved them. Five of six platforms offered a single binary toggle: allow substitutions, or don't. No one let a shopper say "swap my vegetables if you have to, but never touch the dairy."
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ── ROLE & TEAM ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>Role & Team</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-medium mb-4">Lead Product Designer, Amdari</h2>
              <p className="text-sm text-[var(--text-400)] leading-relaxed max-w-2xl">
                I owned the two flows that carried the business problems: slot selection and booking (Flow 1) and substitution management (Flow 2). A junior designer handled the account and order-history flow (Flow 3) using the patterns and design system I set up, so I also did the design direction and review for that work.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-4">My Responsibilities</p>
                <ul className="space-y-2.5">
                  {[
                    'Competitive analysis: 6 UK grocery platforms scored across 7 criteria',
                    'Information architecture: 52-screen inventory mapped end to end',
                    'Lo-fi wireframes in HTML for device-native testing before visual design',
                    'Design system: base components, spacing, and patterns for cross-flow consistency',
                    'Mid-fidelity prototype: tested with real shoppers',
                    'Design direction and review for junior designer\'s Flow 3',
                    'Accessibility audit: cleared all 23 WCAG 2.2 AA failures',
                  ].map((r) => (
                    <li key={r} className="flex gap-2.5 text-xs text-[var(--text-400)] leading-relaxed">
                      <span className="text-[#F45D01] mt-0.5 flex-shrink-0">+</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-4">Team & Timeline</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-[var(--text-300)] mb-1.5">Amdari Design Team</p>
                    <ul className="space-y-1.5">
                      {[
                        ['Bukunmi (Me)', 'Lead Product Designer - Flow 1 (Slots), Flow 2 (Substitutions), design system, design direction'],
                        ['Junior Designer', 'Flow 3 (Account & Order History) - using shared design system and patterns'],
                      ].map(([name, role]) => (
                        <li key={name} className="text-xs text-[var(--text-400)]">
                          <span className="text-[var(--text-300)] font-medium">{name}</span>: {role}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--text-300)] mb-1.5">Sprint Structure</p>
                    <ul className="space-y-1.5">
                      {[
                        'Research synthesis and competitive analysis (pre-sprint)',
                        'Information architecture → lo-fi wireframes',
                        'Shared design system build',
                        'Mid-fidelity prototype → usability testing',
                      ].map((s) => (
                        <li key={s} className="text-xs text-[var(--text-400)]">– {s}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-[var(--text-600)] pt-1">5-week sprint - research synthesis through tested high-fidelity prototype</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ── KEY DESIGN DECISIONS ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>Key Design Decisions</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-medium mb-4">Four decisions that shaped the redesign</h2>
              <p className="text-sm text-[var(--text-400)] leading-relaxed max-w-2xl">
                I mapped the two flows end to end first, building an information architecture for the whole booking and substitution journey before drawing a single screen. That gave me a 52-screen inventory and let me see where the abandonment moments actually sat in the structure.
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  n: '01',
                  title: '2-hour slots as the default, not 1-hour',
                  reasoning: 'Every competitor defaulted to dense grids. I defaulted to 2-hour windows, which collapses the grid from 15 rows to 6. One-hour precision is still there behind a toggle, and a 4-hour saver tier sits below for price-sensitive shoppers.',
                  insight: 'The research said the grid itself was the abandonment trigger, not the lack of options. A shopper who can see the whole week without scrolling makes a decision. A shopper facing 30 rows of grey closes the tab.',
                },
                {
                  n: '02',
                  title: '"Next available" always visible',
                  reasoning: 'No competitor showed shoppers where the first open slot was. They all made you hunt for it. I put a persistent banner at the top of the grid, tappable, scrolling straight to the slot and pre-selecting it.',
                  insight: 'This turns the most common abandonment moment, "I can\'t find anything open," into a one-tap action. It reframes a fully booked early week from a dead end into a clear "here\'s your real first option."',
                },
                {
                  n: '03',
                  title: 'A three-tier substitution system',
                  reasoning: 'Instead of one toggle, shoppers choose how much control they want: no substitutions (guaranteed items or nothing), category-level substitutions (swap produce, never touch dairy), or real-time approval (a 30-minute window before packing where the shopper approves each swap by push notification).',
                  insight: 'Substitution frustration was a control-and-timing problem, not a substitution problem. People accept swaps. They reject being surprised by them. Moving the decision from the doorstep to a point where the shopper still has agency is the whole fix.',
                },
                {
                  n: '04',
                  title: 'Accessibility as a first-class mode, not a retrofit',
                  reasoning: 'The 23 WCAG failures were not going to be fixed by nudging contrast ratios. I built a dedicated accessibility mode: larger touch targets, 7:1 contrast ratio against the 4.5:1 minimum, a simplified layout, and a "book my usual" shortcut for routine weekly orders.',
                  insight: 'I designed this against a specific persona, an older shopper with a fixed weekly routine, rather than an abstract compliance checklist. Designing for her cleared the failures as a byproduct of designing something genuinely usable.',
                },
              ].map((d) => (
                <motion.div key={d.n} variants={fadeUp}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-4">
                    <span className="text-xs text-[#F45D01] font-mono block mb-3">{d.n}</span>
                    <h3 className="text-base font-semibold">{d.title}</h3>
                  </div>
                  <div className="lg:col-span-7 lg:col-start-6 space-y-4">
                    <div>
                      <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-2">What I did</p>
                      <p className="text-sm text-[var(--text-400)] leading-relaxed">{d.reasoning}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">Why it matters</p>
                      <p className="text-sm text-[var(--text-300)] leading-relaxed">{d.insight}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── CHALLENGES ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>Challenges</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-medium">What I had to work through</h2>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  n: '01',
                  title: 'The heatmap that had to die',
                  challenge: 'I spent real time on a slot demand heatmap, colour-coding the grid by how busy each window was, inspired by a feature Getir had run before they exited the UK. It tested badly.',
                  solution: 'On desktop it added information. On a phone it added colour noise that competed with the availability states the shopper actually needed to read. I cut it and kept a lighter version: simple "filling fast" and "X slots left" labels on individual slots. A good idea on the wrong surface is still the wrong idea.',
                },
                {
                  n: '02',
                  title: 'Designing substitution control without overwhelming people',
                  challenge: 'The three-tier system risked becoming a settings menu nobody would touch. Early versions exposed all the granularity at once and tested as intimidating.',
                  solution: 'Progressive disclosure: most people see three clear choices, and only the people who pick category-level or real-time approval ever see the detailed controls. Power without the clutter for everyone who doesn\'t want it.',
                },
                {
                  n: '03',
                  title: 'Keeping a junior designer\'s flow consistent with mine',
                  challenge: 'Flow 3 was not mine to build, but it had to feel like the same product. Components, spacing, and interaction patterns all needed to carry across without me designing every screen.',
                  solution: 'Setting up the design system early, with documented components and spacing, did most of the work. The rest was review. Leading design is partly about making good decisions easy for other people to inherit.',
                },
              ].map((c) => (
                <motion.div key={c.n} variants={fadeUp}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-3">
                    <span className="text-xs text-[#F45D01] font-mono block mb-1">{c.n}</span>
                    <h3 className="text-sm font-semibold leading-snug">{c.title}</h3>
                  </div>
                  <div className="lg:col-span-8 lg:col-start-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-2">Challenge</p>
                      <p className="text-sm text-[var(--text-500)] leading-relaxed">{c.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">How I resolved it</p>
                      <p className="text-sm text-[var(--text-300)] leading-relaxed">{c.solution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── PROCESS ARTIFACTS ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} className="mb-12">
              <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-3">Process</p>
              <h2 className="text-2xl font-medium">The Messy Middle</h2>
              <p className="text-sm text-[var(--text-400)] mt-3 max-w-2xl">User flows, journey maps, personas, and lo-fi wireframes from before the hi-fi work began.</p>
            </motion.div>

            {/* User Personas */}
            <motion.div variants={fadeUp} className="mb-4">
              <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-4">User Personas</p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-1 gap-3 mb-12">
              <div className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
                <ImageZoom src="/images/freshroute/process/personas.jpg" alt="User Personas" className="w-full object-cover" />
              </div>
            </motion.div>

            {/* Journey Maps */}
            <motion.div variants={fadeUp} className="mb-4">
              <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-4">User Journey Maps</p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-1 gap-3 mb-12">
              <div className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
                <ImageZoom src="/images/freshroute/process/journey-maps.jpg" alt="User Journey Maps" className="w-full object-cover" />
              </div>
            </motion.div>

            {/* User Flows */}
            <motion.div variants={fadeUp} className="mb-4">
              <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-4">User Flows</p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
              {[
                { src: '/images/freshroute/process/user-flow-1.jpg', label: 'Flow 1 - Slot Booking' },
                { src: '/images/freshroute/process/user-flow-2.jpg', label: 'Flow 2 - Category-Level Substitution Setup' },
                { src: '/images/freshroute/process/user-flow-3.jpg', label: 'Flow 3 - Real-Time Substitution Approval' },
                { src: '/images/freshroute/process/user-flow-4.jpg', label: 'Flow 4 - Accessible Slot Booking for Elderly Users' },
              ].map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
                  <ImageZoom src={img.src} alt={img.label} className="w-full object-cover" />
                  <p className="text-xs text-[var(--text-600)] px-4 py-2">{img.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Lo-fi Wireframes */}
            <motion.div variants={fadeUp} className="mb-4">
              <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-4">Lo-fi Wireframes</p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {lofiDesigns.map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
                  <ImageZoom src={img.src} alt={img.label} className="w-full object-cover" />
                  <p className="text-xs text-[var(--text-600)] px-4 py-2">{img.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── SOLUTION ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>Solution</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-medium mb-4">Two flows rebuilt around the actual friction</h2>
              <p className="text-sm text-[var(--text-400)] leading-relaxed max-w-2xl">
                The redesigned slot flow opens on a personalised landing: your preferred slot surfaced first, based on a short optional onboarding. If your preference is gone, the closest match takes its place with an honest explanation rather than a dead end. The substitution flow lets shoppers set their tier once and forget it, or adjust per order.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden">
                <div className="px-5 py-4 border-b border-[var(--border)]">
                  <p className="font-semibold text-sm">Slot Booking Flow</p>
                  <p className="text-xs text-[var(--text-500)] mt-0.5">Personalisation → Grid → Confirmation</p>
                </div>
                <div className="p-5 space-y-4">
                  <div>
                    <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">Key Changes</p>
                    <ul className="space-y-1.5">
                      {[
                        'Short optional onboarding captures preferred days and times',
                        '2-hour default grid (6 rows vs 15), with 1-hour toggle for precision',
                        '"Next available" banner pinned at top for one-tap booking',
                        'Hold timer on confirmation so nobody loses their slot mid-checkout',
                        '4-hour saver tier for price-sensitive shoppers',
                      ].map((s) => (
                        <li key={s} className="flex gap-2 text-xs text-[var(--text-400)] leading-relaxed">
                          <span className="text-[var(--border-md)] flex-shrink-0">–</span>{s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden">
                <div className="px-5 py-4 border-b border-[var(--border)]">
                  <p className="font-semibold text-sm">Substitution Management Flow</p>
                  <p className="text-xs text-[var(--text-500)] mt-0.5">Three tiers of control</p>
                </div>
                <div className="p-5 space-y-4">
                  <div>
                    <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">The Three Tiers</p>
                    <ul className="space-y-1.5">
                      {[
                        'No substitutions: guaranteed items or nothing, built for dietary restrictions',
                        'Category-level: swap produce, never touch dairy (the gap nobody filled)',
                        'Real-time approval: 30-minute pre-packing window, approve/reject each swap via push notification',
                      ].map((s) => (
                        <li key={s} className="flex gap-2 text-xs text-[var(--text-400)] leading-relaxed">
                          <span className="text-[var(--border-md)] flex-shrink-0">–</span>{s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-2">Design Rationale</p>
                    <p className="text-xs text-[var(--text-500)] leading-relaxed">Progressive disclosure keeps it clean: most people see three clear choices. Only the people who pick category-level or real-time approval ever see the detailed controls.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ── FINAL DESIGNS ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} className="mb-8">
              <SectionLabel>Final Designs</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-medium">12 screens across two core flows</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {finalDesigns.map((img, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="rounded-xl overflow-hidden bg-[var(--surface)] border border-[var(--border)] group cursor-pointer">
                  <ImageZoom src={img.src} alt={img.label}
                    className="w-full object-contain group-hover:scale-[1.02] transition-transform duration-500" />
                  <div className="px-4 py-3">
                    <p className="text-xs text-[var(--text-500)]">{img.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── LIVE PROTOTYPE ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="mb-10 text-center">
              <SectionLabel>Interactive Prototype</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-medium mb-4">Try the prototype</h2>
              <p className="text-sm text-[var(--text-400)] leading-relaxed max-w-xl mx-auto">
                This is the live high-fidelity prototype tested with real shoppers. Tap through the slot booking flow, explore the substitution tiers, and see how the accessibility mode works.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex justify-center">
              <div className="relative w-full max-w-[420px]">
                <div className="rounded-[2rem] border-[3px] border-[var(--border-md)] bg-[var(--surface)] p-2 shadow-2xl">
                  <div className="rounded-[1.5rem] overflow-hidden bg-white" style={{ aspectRatio: '9/19.5' }}>
                    <iframe
                      src="https://fresh-route-prototype.vercel.app/"
                      title="FreshRoute interactive prototype"
                      className="w-full h-full border-0"
                      allow="fullscreen"
                      loading="lazy"
                    />
                  </div>
                </div>
                <p className="text-center text-xs text-[var(--text-600)] mt-4">Scroll and tap to navigate the prototype</p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── RESULTS ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>Projected Results</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-medium mb-4">What this design is built to move</h2>
              <p className="text-sm text-[var(--text-400)] leading-relaxed max-w-2xl">
                These are projected, modelled from the research and from documented results of comparable features in the market, since this was a design sprint rather than a shipped release.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { val: '~£45M', label: 'At-risk revenue recovered', sub: 'Tesco\'s "Smart Slot" feature cut abandonment 19% in six months on its own. The clean grid, next-available banner, and personalised landing target a similar or better result.' },
                { val: '~£2.5M', label: 'Support & waste cost reduction', sub: 'Moving substitution decisions to a point where shoppers still have agency addresses the root cause directly, taking the £3.2M support cost toward £1.76M and cutting £1.9M food-waste cost roughly in half.' },
                { val: '23 → 0', label: 'WCAG failures cleared', sub: 'The accessibility mode and contrast-first design system close the legal exposure and make the product usable for shoppers who couldn\'t get through it before.' },
              ].map((s) => (
                <motion.div key={s.val} variants={fadeUp}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <p className="text-2xl font-medium text-[#F45D01] mb-1">{s.val}</p>
                  <p className="text-xs font-medium text-[var(--text-300)] mb-2">{s.label}</p>
                  <p className="text-xs text-[var(--text-500)] leading-relaxed">{s.sub}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 text-xs text-[var(--text-600)] leading-relaxed">
              Total projected annual impact lands around £46M of the £47.34M the brief had flagged as at-risk or wasted. These numbers are design targets informed by research and market benchmarks, not measured outcomes from a live product.
            </motion.div>
          </motion.div>
        </section>

        {/* ── REFLECTION ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>Reflection</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-medium mb-6">What I keep coming back to</h2>
              <div className="max-w-2xl space-y-4">
                <p className="text-sm text-[var(--text-400)] leading-relaxed">
                  Most of this redesign was subtraction. The temptation in a brief like this is to add: more filters, more views, a clever heatmap, richer settings. Almost every real improvement came from removing something. Fewer grid rows. Fewer decisions surfaced at once. One fewer moment of surprise at the door.
                </p>
                <p className="text-sm text-[var(--text-400)] leading-relaxed">
                  The substitution work taught me the most. It would have been easy to copy Gopuff and just refuse to substitute, call it bold and move on. The harder and better answer was to figure out what people were actually upset about, which turned out to be timing and control, not the swap itself, and design for that. Matching the right problem to the right fix is most of the job.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── NEXT CTA ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <motion.div variants={fadeUp}>
              <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-3">Next Case Study</p>
              <h2 className="text-2xl md:text-3xl font-medium mb-2">EduSmart Analytics</h2>
              <p className="text-sm text-[var(--text-400)] max-w-md leading-relaxed">
                Stakeholder validation that killed 15/22 assumptions and changed the entire product direction for a student analytics platform.
              </p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link to="/work/Edusmart"
                className="flex items-center gap-2 bg-[var(--btn-bg)] text-[var(--btn-text)] px-6 py-3 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors">
                View Case Study
                <ArrowRight size={15} />
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
}
