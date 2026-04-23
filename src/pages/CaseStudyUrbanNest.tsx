import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import ImageZoom from '../components/ImageZoom';

const images = [
  '/images/urbannest/slides/slide-1.png',
  '/images/urbannest/slides/slide-2.png',
  '/images/urbannest/slides/slide-3.png',
  '/images/urbannest/slides/slide-4.png',
  '/images/urbannest/slides/slide-5.png',
];

const finalDesigns = [
  { src: '/images/urbannest/final/final-1.png', label: 'Welcome Screen' },
  { src: '/images/urbannest/final/final-2.png', label: 'Onboarding — Budget' },
  { src: '/images/urbannest/final/final-3.png', label: 'Onboarding — Workplace' },
  { src: '/images/urbannest/final/final-4.png', label: 'Onboarding — Priorities' },
  { src: '/images/urbannest/final/final-5.png', label: 'Home — Top 10 Picks' },
  { src: '/images/urbannest/final/final-6.png', label: 'Search Results' },
  { src: '/images/urbannest/final/final-7.png', label: 'Property Detail' },
  { src: '/images/urbannest/final/final-8.png', label: 'Advanced Filters' },
];

const tags = ['Product Design', 'PropTech', 'Mobile-First', 'AI-Powered', 'Commute Data', 'B2C'];

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
        <img key={i} src={src} alt={`UrbanNest mockup ${i + 1}`}
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
          <button key={i} onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-white w-4' : 'bg-white/30 w-1.5'}`} />
        ))}
      </div>
    </div>
  );
}

export default function CaseStudyUrbanNest() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navigation onOpenContact={() => setIsContactModalOpen(true)} />

      <main>
        {/* ── HERO ── */}
        <section className="min-h-screen pt-28 pb-16 px-4 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left — text */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
            <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>

              <motion.div variants={fadeUp} className="flex items-center gap-2 text-xs text-[var(--text-500)] mb-6">
                <Link to="/work" className="hover:text-[var(--text-300)] transition-colors">Case Studies</Link>
                <span>/</span>
                <span>UrbanNest</span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight mb-6">
                Redesigning the property search experience
              </motion.h1>

              <motion.p variants={fadeUp} className="text-sm text-[var(--text-400)] leading-relaxed mb-6">
                Mobile-first property search platform built to fix the most broken part of renting in the UK: commute checks happening outside the app, property comparisons spread across spreadsheets and screenshots, and filters that fall apart on a phone. Working with PMs and BAs at Amdari, the Sprint 1 MVP focused on three features that pull the whole workflow into one place.
              </motion.p>

              <motion.div variants={fadeUp} className="flex items-center gap-2 text-xs text-[var(--text-500)] mb-8">
                <span>2026 — 4-week sprint</span>
                <span className="w-1 h-1 rounded-full bg-gray-700" />
                <span>Product Design Consultant @ Amdari</span>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="text-xs border border-[var(--border-md)] text-[var(--text-400)] px-3 py-1 rounded-full">{t}</span>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right — carousel */}
          <motion.div
            className="lg:col-span-7 rounded-xl overflow-hidden bg-[var(--surface)]"
            style={{ height: '65vh' }}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ImageCarousel />
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
              { val: '8', label: 'Screens designed for Sprint 1 MVP' },
              { val: '3', label: 'Core features designed — onboarding, commute, filters' },
              { val: '30+', label: 'Filter options organised into 9 sections with 3 UI patterns' },
              { val: '3', label: 'User personas driving every design decision' },
            ].map((s) => (
              <motion.div key={s.val + s.label} variants={fadeUp}
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
              <h2 className="text-2xl md:text-3xl font-medium mb-4">The rental search is broken across too many tools</h2>
              <p className="text-sm text-[var(--text-400)] leading-relaxed max-w-2xl">
                Finding a rental in the UK means switching between property portals, Google Maps, spreadsheets, and messaging apps just to answer basic questions: Does this make sense for my budget? How long is the commute? How does it stack up against the other three I looked at yesterday? Mobile users (72% of traffic from market data) get hit hardest because most platforms weren't built for that screen size.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                {
                  n: '01',
                  title: 'Commute is the top priority — but lives outside the app',
                  body: 'Commute time came up as the top deciding factor in research, but renters have to leave the platform and check Google Maps for every property they look at. That back-and-forth adds up across dozens of listings.',
                },
                {
                  n: '02',
                  title: 'Comparison requires manual effort',
                  body: 'No built-in way to compare shortlisted properties side-by-side. Renters end up in spreadsheets and screenshots, trying to keep track of 50+ properties across days of searching.',
                },
                {
                  n: '03',
                  title: 'Mobile users get desktop-first layouts',
                  body: 'Most property platforms were designed desktop-first and scaled down. On a 375px screen, dense filter panels, tiny map pins, and text-heavy cards make one-thumb browsing nearly impossible.',
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

            {/* Research foundation callout */}
            <motion.div variants={fadeUp}
              className="rounded-xl border border-[#F45D01]/20 bg-[#F45D01]/5 p-6 md:p-8">
              <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-3">Research Foundation</p>
              <p className="text-sm text-[var(--text-300)] leading-relaxed max-w-3xl">
                Problem framing was shaped by three inputs: persona interviews, journey mapping that surfaced 7 pain points across a typical search timeline, and a competitive analysis of 6 property platforms across 12 criteria. I worked through the findings with the PM and BA to prioritise which problems Sprint 1 should address. PRD data confirmed 72% mobile traffic and 50-60 properties viewed per search on average.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ── RESEARCH & APPROACH ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>Research & Approach</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-medium mb-4">Three personas, three principles</h2>
              <p className="text-sm text-[var(--text-400)] leading-relaxed max-w-2xl">
                Research shaped the strategy around three personas with different search behaviours: a young professional prioritising commute, a budget-conscious renter filtering by price, and a family-oriented user focused on neighbourhood safety and schools. Working with the PM, I pulled three design principles from those personas that guided the rest of the sprint.
              </p>
            </motion.div>

            {/* Design Principles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {[
                {
                  n: '01',
                  title: 'Price First',
                  body: 'Budget is the hardest constraint. Every property card leads with price, onboarding captures budget range upfront, and filters default to price-relevant sorting.',
                },
                {
                  n: '02',
                  title: 'Commute Everywhere',
                  body: 'If commute is the top deciding factor, checking it shouldn\'t require leaving the app. Commute time sits on every property card and expands to a 4-mode breakdown (walk, bus, train, cycle) on the detail page.',
                },
                {
                  n: '03',
                  title: 'Stay in App',
                  body: 'Every time someone leaves to check Google Maps or compare properties in a spreadsheet, the platform loses them. The design keeps search, comparison, commute data, and booking in one flow.',
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

            {/* Competitive Analysis summary */}
            <motion.div variants={fadeUp}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
              <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-4">Competitive Analysis</p>
              <p className="text-sm text-[var(--text-400)] leading-relaxed max-w-3xl mb-4">
                I looked at 6 property platforms across 12 criteria. The gaps that stood out:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { gap: 'Commute integration', finding: 'No major platform shows commute time on the property card itself. All require external map checks.' },
                  { gap: 'Mobile-first design', finding: 'Most platforms are responsive adaptations of desktop layouts, not built for mobile browsing patterns.' },
                  { gap: 'Smart personalisation', finding: 'Onboarding is typically account creation, not preference capture. No platform uses first-run data to curate initial results.' },
                ].map((item) => (
                  <div key={item.gap}>
                    <p className="text-sm font-medium text-[var(--text-300)] mb-2">{item.gap}</p>
                    <p className="text-xs text-[var(--text-400)] leading-relaxed">{item.finding}</p>
                  </div>
                ))}
              </div>
            </motion.div>
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
                  title: '30+ filter options without overwhelming the screen',
                  challenge: 'Property search needs granular filtering (price, bedrooms, pet policy, furnished status, commute radius, neighbourhood score, etc.), but advanced filter screens are where most mobile users abandon.',
                  solution: 'Grouped 30+ options into 9 sections using 3 UI patterns: chips for multi-select (property type, amenities), toggles for binary choices (furnished, pets), and tags for lifestyle preferences (vibe, neighbourhood). A live filter counter shows matching results as they change, and a one-tap "Clear all" resets without scrolling back up. The BA helped define which filters were must-haves for Sprint 1 vs. later.',
                },
                {
                  n: '02',
                  title: 'Onboarding that personalises without creating friction',
                  challenge: 'Users want relevant results from the first screen, but lengthy onboarding flows have high drop-off. The temptation is to ask everything upfront — budget, location, commute, lifestyle, move-in date — which turns onboarding into a form.',
                  solution: 'Cut it to 3 questions, all skippable: Budget range, Workplace location (for commute), and Priorities (price, commute, or neighbourhood). Progress indicators show 1/3, 2/3, 3/3. Answers feed the "Top 10 Picks" on the home screen right away. Users who skip still get a working experience with trending listings instead.',
                },
                {
                  n: '03',
                  title: 'Embedding commute data without slowing down browsing',
                  challenge: 'Showing commute time on every property card means making an API call for each listing against the user\'s workplace. If it slows the scroll, the feature hurts more than it helps.',
                  solution: 'Designed the card to show a single line ("25 min to Shoreditch Station" via train) using the fastest mode. The full 4-mode comparison (walk, bus, train, cycle) lives on the property detail page where users are already committed to reading. This keeps the cards lightweight while giving the detail page depth.',
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
                      <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">How I solved it</p>
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
              <h2 className="text-2xl font-medium">Mid-Fidelity Wireframes</h2>
              <p className="text-sm text-[var(--text-400)] mt-3 max-w-2xl">Layout explorations and interaction patterns before moving to high-fidelity. I walked through these with the PM and BA to validate the information hierarchy and flow structure before committing to visual design.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { src: '/images/urbannest/process/midfi/midfi-1.png', label: 'Welcome Screen' },
                { src: '/images/urbannest/process/midfi/midfi-2.png', label: 'Onboarding — Budget' },
                { src: '/images/urbannest/process/midfi/midfi-3.png', label: 'Onboarding — Workplace' },
                { src: '/images/urbannest/process/midfi/midfi-4.png', label: 'Onboarding — Priorities' },
                { src: '/images/urbannest/process/midfi/midfi-5.png', label: 'Home' },
                { src: '/images/urbannest/process/midfi/midfi-6.png', label: 'Search Results' },
                { src: '/images/urbannest/process/midfi/midfi-7.png', label: 'Property Detail' },
              ].map((img, i) => (
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
              <h2 className="text-2xl md:text-3xl font-medium mb-4">Sprint 1 MVP — 8 screens, 3 core features</h2>
              <p className="text-sm text-[var(--text-400)] leading-relaxed max-w-2xl">
                The full vision includes viewing bookings, agent messaging, and comparison tools, but the PM and I agreed Sprint 1 should only cover the three features that address the highest-pain problems: guided onboarding, commute-integrated search, and structured filtering. Everything else is scoped for later.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                {
                  feature: 'Guided Onboarding',
                  screens: '3 screens',
                  details: [
                    'Budget range with slider (min/max)',
                    'Workplace location for commute calculation',
                    'Priority picker — price, commute, or neighbourhood',
                    'All steps skippable with progress indicator',
                    'Answers feed "Top 10 Picks" on home screen',
                  ],
                  rationale: 'Captures just enough to personalise results without feeling like a registration form. Users who skip still get a working product.',
                },
                {
                  feature: 'Smart Search & Commute',
                  screens: '3 screens',
                  details: [
                    'Persistent filter bar on search results',
                    'Commute time on every property card (fastest mode)',
                    '4-mode commute breakdown on property detail (walk, bus, train, cycle)',
                    'Neighbourhood score and vibe tags',
                    'Bottom navigation for one-thumb reach',
                  ],
                  rationale: 'The commute calculator was originally scoped for Sprint 4. Research showed 2 of 3 personas cited it as their top priority, so I made the case to the PM to pull it into Sprint 1.',
                },
                {
                  feature: 'Advanced Filters',
                  screens: '1 screen',
                  details: [
                    '30+ options in 9 organised sections',
                    '3 consistent UI patterns (chips, toggles, tags)',
                    'Live results counter updates as filters change',
                    'One-tap "Clear all" resets everything',
                    'Compact layout for mobile scrolling',
                  ],
                  rationale: 'Complexity is manageable when it\'s organised. Nine sections with three consistent interaction patterns let users find the right control without learning a new UI for each filter type.',
                },
              ].map((f) => (
                <motion.div key={f.feature} variants={fadeUp}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden">
                  <div className="px-5 py-4 border-b border-[var(--border)]">
                    <p className="font-semibold text-sm">{f.feature}</p>
                    <p className="text-xs text-[var(--text-500)] mt-0.5">{f.screens}</p>
                  </div>
                  <div className="p-5 space-y-4">
                    <div>
                      <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">What was designed</p>
                      <ul className="space-y-1.5">
                        {f.details.map((d) => (
                          <li key={d} className="flex gap-2 text-xs text-[var(--text-400)] leading-relaxed">
                            <span className="text-[var(--border-md)] flex-shrink-0">-</span>{d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-2">Design Rationale</p>
                      <p className="text-xs text-[var(--text-500)] leading-relaxed">{f.rationale}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── FINAL DESIGNS ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} className="mb-8">
              <SectionLabel>Final Designs</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-medium">8 screens across the full Sprint 1 flow</h2>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {finalDesigns.map((img, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="rounded-xl overflow-hidden bg-[var(--surface)] border border-[var(--border)] group cursor-pointer">
                  <ImageZoom src={img.src} alt={img.label}
                    className="w-full aspect-[9/16] object-cover group-hover:scale-[1.02] transition-transform duration-500" />
                  <div className="px-4 py-3">
                    <p className="text-xs text-[var(--text-500)]">{img.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── RESULTS ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>What This Design Is Built to Move</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-medium">Design impact targets from the PRD</h2>
              <p className="text-sm text-[var(--text-400)] leading-relaxed max-w-2xl">
                These are the outcomes the Sprint 1 design is working toward, drawn from the PRD and research. They're design targets, not measured results. The product hasn't shipped yet.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                {
                  target: 'Eliminate external map checks',
                  how: 'Commute time appears on every property card and expands to a 4-mode breakdown on detail pages. The user never leaves the app to check how far something is from work.',
                },
                {
                  target: 'Cut the number of tools from 12 to 1',
                  how: 'Search, filter, compare, and commute check all live in one platform. Booking and messaging are scoped for later sprints. The goal is to stop renters from needing spreadsheets and screenshots to keep track.',
                },
                {
                  target: 'Reduce search friction on mobile',
                  how: 'Bottom navigation, large touch targets, compact property cards, and a filter system built for thumb-scrolling. Designed for 375px screens first, not adapted from desktop.',
                },
                {
                  target: 'Personalise results from the first session',
                  how: '3-question onboarding captures budget, workplace, and priorities. Results are curated as "Top 10 Picks" from the home screen, so users see relevant properties before they search.',
                },
              ].map((item) => (
                <motion.div key={item.target} variants={fadeUp}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <h3 className="text-sm font-semibold mb-3">{item.target}</h3>
                  <p className="text-xs text-[var(--text-400)] leading-relaxed">{item.how}</p>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </section>

        {/* ── KEY LEARNINGS ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>Reflections</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-medium">What I took from this project</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  n: '01',
                  title: 'Research changes sprint priority',
                  body: 'The commute calculator was scheduled for Sprint 4. Research showed 2 of 3 personas cited it as their top concern. I flagged this to the PM and we moved it to Sprint 1. That one change removed the biggest pain point from day one.',
                },
                {
                  n: '02',
                  title: 'Mobile-first is a design constraint, not a viewport',
                  body: 'Starting at 375px meant every decision went through a "does this work with one thumb?" check. Bottom navigation, persistent filter bars, compact cards — all of that came from the constraint itself, not from scaling down a desktop layout.',
                },
                {
                  n: '03',
                  title: 'Complexity is fine if it\'s organised',
                  body: 'The advanced filters screen has 30+ options but doesn\'t feel heavy. That\'s down to structure: 9 sections, 3 UI patterns, and a live counter showing how results change. Fewer surprises matters more than fewer options.',
                },
                {
                  n: '04',
                  title: 'Show the answer, not the feature',
                  body: 'Rather than labelling "commute data available," I put "25 min to Shoreditch Station" directly on every card. If that\'s the information that decides whether someone keeps scrolling, it shouldn\'t be behind a tap.',
                },
              ].map((l) => (
                <motion.div key={l.n} variants={fadeUp}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <span className="text-xs text-[#F45D01] font-mono block mb-3">{l.n}</span>
                  <h3 className="text-sm font-semibold mb-2">{l.title}</h3>
                  <p className="text-xs text-[var(--text-400)] leading-relaxed">{l.body}</p>
                </motion.div>
              ))}
            </div>
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
                AI-powered student analytics platform where stakeholder validation changed the entire product direction.
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
