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
  '/images/leadtrader/slide-1.png',
  '/images/leadtrader/slide-2.png',
  '/images/leadtrader/slide-3.png',
];

const tags = ['Product Design', 'Stock Trading', 'Mobile Design', 'Reduced Cognitive Load', 'High Stress UX'];

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

export default function CaseStudyLeadTrader() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SEO title="LeadTrader Case Study" description="UX audit and redesign prototype for a stock trading app. Identified visual hierarchy issues and redesigned core flows with progressive disclosure." path="/work/LeadTrader" />
      <Navigation onOpenContact={() => setContactOpen(true)} />
      <main>

        {/* ── Hero ── */}
        <section className="min-h-screen pt-28 pb-12 px-7 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center overflow-hidden">
          <motion.div className="lg:col-span-5 flex flex-col gap-8" initial="hidden" animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 text-xs text-[var(--text-500)]">
              <Link to="/work" className="hover:text-[var(--text-300)] transition-colors">Case Studies</Link>
              <span>/</span>
              <span className="text-[var(--text-300)]">Lead Trader</span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.15]">
              Redesigning a stock trading platform for both novice and expert traders
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-sm text-[var(--text-400)] leading-relaxed max-w-md">
              The parent company was deciding whether to invest in a full product overhaul. We had 3 weeks to prove the current app had problems worth fixing. Ran a UX audit, rebuilt the core screens, and delivered a prototype that made the case.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex items-center gap-3 text-xs text-[var(--text-500)]">
              <span>2025</span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span>Delivered by Artbox Studio</span>
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
            <ImageCarousel images={images} alt="Lead Trader mockup" />
          </motion.div>
        </section>

        {/* ── Summary stats ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            {[
              { stat: '9+→6', label: 'Competing CTAs reorganised into clear hierarchy' },
              { stat: '<3s', label: 'Portfolio health scannable with trend indicator' },
              { stat: '100%', label: 'Of successful trading apps feature data visualisation — Lead Trader had zero' },
              { stat: '3wks', label: 'From audit to polished demo greenlit for full development' },
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
            <motion.div variants={fadeUp} className="lg:col-span-7 lg:col-start-6 space-y-8">
              <p className="text-sm text-[var(--text-400)] leading-relaxed">
                Lead Trader's parent company was deciding whether a full redesign was worth the investment, or whether incremental
                changes would do. They needed evidence, not opinion. A UX audit of the existing app turned up five distinct problems
                that made the case.
              </p>
              <div className="space-y-4">
                {[
                  {
                    num: '01',
                    title: 'Visual Hierarchy Chaos',
                    body: '9+ action buttons on the home screen, all equal priority, all fighting for attention. Red header clashing with grey content. Icon-only quick actions with no labels. Portfolio balance shown with no trends, no performance data, no context.',
                  },
                  {
                    num: '02',
                    title: 'Missing Data Visualisation',
                    body: 'A trading app with zero charts, trend indicators, or visual performance data. Users had to calculate portfolio performance mentally. No gain/loss visualisation, no stock price trends, no market status indicators. Competitive analysis showed 100% of successful trading apps feature prominent data visualisation on the home screen.',
                  },
                  {
                    num: '03',
                    title: 'Poor Empty States',
                    body: 'Portfolio screens with £0.00 balances were mostly blank. No explanation of what a portfolio is, no prompt to fund or learn more. Empty states are the best teaching moments an app has. These just showed nothing.',
                  },
                  {
                    num: '04',
                    title: 'Transaction Complexity',
                    body: 'The fund booking screen showed 6 pricing fields simultaneously — NAV, Bid Price, Offer Price, Current Bid, Yield — all with equal visual weight and no explanations. Financial jargon with no progressive disclosure served expert users only, alienating the novice segment entirely.',
                  },
                  {
                    num: '05',
                    title: 'Inconsistent Branding',
                    body: 'Different screens showed different branding — First Milli in one place, Silent Mode provider logos in another. The app felt like several unrelated products stitched together.',
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
                  { label: 'Role', value: 'Solo UX/UI Designer — UX Audit, UI Redesign, Interaction Design' },
                  { label: 'Platform', value: 'Mobile App (iOS/Android)' },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
                    <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-2">{item.label}</p>
                    <p className="text-sm text-[var(--text-300)]">{item.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[var(--text-400)] leading-relaxed mb-4">
                The parent company needed to see transformation, not imagine it. So instead of wireframes, I delivered complete,
                polished screens — a strategic decision to make the business case as clear as possible. The 3-week constraint forced
                focus on the highest-impact screens with the most dramatic before/after potential.
              </p>
              <p className="text-sm text-[var(--text-400)] leading-relaxed">
                Delivered to the parent company with an honest caveat: these designs are hypotheses grounded in industry best
                practices and require user validation before full rollout. Transparency about limitations strengthens the
                recommendation rather than undermining it.
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

            {/* Research methods */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 space-y-4">
                <h3 className="text-base font-semibold">Research Methods</h3>
                <ul className="space-y-3">
                  {[
                    { method: 'Heuristic evaluation', detail: "Nielsen's 10 heuristics applied to the existing app — 5 violations found" },
                    { method: 'Competitive analysis', detail: 'Robinhood, eToro, Trading 212, Revolut — industry patterns and gaps' },
                    { method: 'User flow analysis', detail: '3 critical journeys mapped: portfolio check, execute trade, find stock' },
                    { method: 'Technical feasibility', detail: 'Development-aware design — confirmed no backend changes required' },
                  ].map((r, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed">
                      <span className="text-[#F45D01] font-mono text-xs mt-0.5 shrink-0">0{i + 1}</span>
                      <span><span className="text-[var(--text-300)]">{r.method}</span><span className="text-[var(--text-500)]"> — {r.detail}</span></span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 space-y-4">
                <h3 className="text-base font-semibold">Competitive Patterns</h3>
                <ul className="space-y-3">
                  {[
                    '100% of successful trading apps feature prominent data visualisation (charts, trends, badges) — Lead Trader had none',
                    '90% use progressive disclosure — simple default view, advanced data on-demand',
                    '80% employ colour coding — green for gains, red for losses, instantly readable',
                    '70% offer contextual education — tooltips and guides without interrupting the flow',
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
                  title: 'Information Hierarchy',
                  body: 'The most important data — portfolio performance, market trends, quick actions — gets prominence. Secondary information is available but doesn\'t compete for attention on the main screen.',
                },
                {
                  num: '02',
                  title: 'Visual Clarity',
                  body: 'People make financial decisions under stress. Colour coding, trend indicators, and performance badges communicate at a glance. No mental calculation needed.',
                },
                {
                  num: '03',
                  title: 'Progressive Disclosure',
                  body: 'Novices get a clean default view. Experts get detailed data a tap away. Neither group is made worse off by what the other needs.',
                },
                {
                  num: '04',
                  title: 'Data Visualisation',
                  body: 'Charts and trend indicators turn raw numbers into something users can scan. Visual patterns are processed faster than text. In a trading app, that speed matters.',
                },
                {
                  num: '05',
                  title: 'Consistent Branding',
                  body: 'Same colours, typography, and interaction patterns across every screen. Financial platforms live or die on trust, and inconsistency undermines it.',
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
                  title: 'Balancing Novice and Expert Needs',
                  problem: 'Trading apps serve two very different users: novices who need guidance and a simple interface, and experts who need detailed data and speed. Building two separate apps doubles the cost and splits the user base.',
                  solution: 'A simplified default view for novices — the portfolio shows +6.7%, which anyone can read. Experts tap through to cost basis, realised vs unrealised gains. Neither user is made worse off by what the other needs.',
                },
                {
                  num: '02',
                  title: 'Three-Week Timeline Constraint',
                  problem: 'A full redesign could take 3–6 months of research, design, testing, and iteration. This project had 3 weeks to demonstrate enough transformation potential to justify that investment.',
                  solution: 'Focused on the 5 screens with the most dramatic before/after: Home, Portfolio, Transaction, Stocklist, Profile. Delivered polished, complete screens rather than wireframes, because the parent company needed to see the difference, not imagine it.',
                },
                {
                  num: '03',
                  title: 'Designing Without User Access',
                  problem: 'Hired for a demo, not ongoing work. No user research, no analytics, no support tickets to review, no testing participants. Every design decision had to be made without direct user input.',
                  solution: 'Used proxy data: competitive analysis for user preferences, heuristic evaluation as a stand-in for usability testing, and trading app industry research. I also used Claude to rapidly synthesise patterns across 4 competitors and surface common friction points — compressing what would have been a full research phase into a structured brief I could design against. The limitation was stated clearly in the deliverable.',
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
              <h2 className="text-2xl font-medium mb-4">Five Screen Transformations</h2>
              <p className="text-sm text-[var(--text-400)] leading-relaxed max-w-2xl mb-10">
                Each screen addressed a specific audit finding. The new information architecture shifted from flat, equal-weight navigation
                to a clear hierarchy: Home as the central hub, Portfolio for performance insights, Funds for transactions, Stocklist as
                the market browser, Profile for settings.
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  num: 'Screen 01',
                  title: 'Home Screen',
                  tag: 'Hierarchy restored',
                  before: '9+ competing action buttons with no priority. Portfolio balance with zero context. Icon-only quick actions. Red header clashing with grey content. "Activity" section showing a button grid instead of transaction history.',
                  after: 'Personalised greeting header. Portfolio card with prominent +£34,773.02 (6.7%) trend indicator. Clearly labelled quick actions (icon + text). Asset breakdown (Mutual Funds vs Equity). Product cards with live percentage data. Trending stocks section surfacing real-time market movers.',
                  beforeImg: '/images/leadtrader/screens/home-before.png',
                  afterImg: '/images/leadtrader/screens/home-after.png',
                },
                {
                  num: 'Screen 02',
                  title: 'Portfolio View',
                  tag: 'Performance visible',
                  before: 'List of portfolios with just name and value. 70%+ wasted white space. No performance indicators — gaining or losing? No visual differentiation between winners and losers. Empty screens for £0.00 balances.',
                  after: 'Card-based layout with clear visual hierarchy. Performance badges — green ↑7.2% for gains, red ↓7.2% for losses. Profit/loss displayed alongside portfolio value. Colour-coded cards (green winners, red losers). Empty state shows £0.00 with explanation and CTA — not a blank screen.',
                  beforeImg: '/images/leadtrader/screens/portfolio-before.png',
                  afterImg: '/images/leadtrader/screens/portfolio-after.png',
                },
                {
                  num: 'Screen 03',
                  title: 'Transaction Flow',
                  tag: 'Jargon removed',
                  before: '6 pricing fields shown simultaneously with equal visual weight — NAV, Bid Price, Offer Price, Current Bid, Yield. No explanation of what each field means. No guidance on which price matters for the user\'s transaction. Financial jargon with no progressive disclosure.',
                  after: 'Cleaner form with placeholder text guiding input. NAV prominent at top (the price that matters). Secondary pricing (Bid/Offer) in organised table below for those who need it. Contextual info icon (ⓘ) explains terms on demand — education available, never forced.',
                  beforeImg: '/images/leadtrader/screens/transaction-before.png',
                  afterImg: '/images/leadtrader/screens/transaction-after.png',
                },
                {
                  num: 'Screen 04',
                  title: 'Stocklist',
                  tag: 'Brand unified',
                  before: 'Search bar detached from header. Simple list — company name and price only. No trend indicators (price going up or down?). No daily percentage change. All items look identical. No quick actions from the list.',
                  after: 'Integrated header unifying search, bookmarks, and favourites. Consistent card design matching the home screen aesthetic. Company logos for quick visual identification. Unified colour scheme throughout. Optimised touch targets. Future iterations to add trend arrows and Buy/Sell quick actions.',
                  beforeImg: '/images/leadtrader/screens/stocklist-before.png',
                  afterImg: '/images/leadtrader/screens/stocklist-after.png',
                },
                {
                  num: 'Screen 05',
                  title: 'Profile & Settings',
                  tag: 'Organised hierarchy',
                  before: 'Settings scattered without clear grouping. No visual differentiation between primary and secondary actions. Inconsistent iconography. Logout easy to miss or accidentally tap.',
                  after: 'User identity card (name, ID, photo) at top. Primary trading actions grouped in a unified card. Secondary actions listed below in consistent format. Prominent logout in distinct red styling — important, hard to miss, hard to misfire. Every action has icon + label.',
                  beforeImg: null,
                  afterImg: '/images/leadtrader/screens/profile.png',
                },
              ].map((screen) => (
                <motion.div key={screen.num} variants={fadeUp}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8 space-y-6">
                  {/* Top row — label + before/after text */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-3">
                      <span className="text-xs text-[#F45D01] font-mono block mb-1">{screen.num}</span>
                      <h3 className="text-base font-semibold mb-2">{screen.title}</h3>
                      <span className="text-xs px-2.5 py-1 rounded-full border border-[var(--border-md)] text-[var(--text-500)]">{screen.tag}</span>
                    </div>
                    <div className="lg:col-span-8 lg:col-start-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-2">Before</p>
                        <p className="text-sm text-[var(--text-500)] leading-relaxed">{screen.before}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">After</p>
                        <p className="text-sm text-[var(--text-300)] leading-relaxed">{screen.after}</p>
                      </div>
                    </div>
                  </div>
                  {/* Bottom row — screen images */}
                  {screen.beforeImg ? (
                    <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[var(--border)]/60">
                      <div>
                        <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-2">Before</p>
                        <div className="rounded-lg overflow-hidden border border-[var(--border)] bg-[var(--bg)] max-h-[420px]">
                          <ImageZoom src={screen.beforeImg} alt={`${screen.title} before`} className="w-full h-full object-contain max-h-[420px]" />
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">After</p>
                        <div className="rounded-lg overflow-hidden border border-[var(--border)] bg-[var(--bg)] max-h-[420px]">
                          <ImageZoom src={screen.afterImg!} alt={`${screen.title} after`} className="w-full h-full object-contain max-h-[420px]" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="pt-2 border-t border-[var(--border)]/60">
                      <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">After</p>
                      <div className="rounded-lg overflow-hidden border border-[var(--border)] bg-[var(--bg)] max-w-xs max-h-[420px]">
                        <ImageZoom src={screen.afterImg!} alt={`${screen.title} after`} className="w-full h-full object-contain max-h-[420px]" />
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {images.map((src, i) => (
                <motion.div key={i} variants={fadeUp} custom={i}
                  className="rounded-xl overflow-hidden bg-[var(--surface)] border border-[var(--border)] aspect-[4/3]">
                  <ImageZoom src={src} alt={`Lead Trader screen ${i + 1}`} className="w-full h-full object-cover" />
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
              <h2 className="text-2xl font-medium mb-8">Demo Outcomes</h2>
            </motion.div>

            {/* Impact grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 space-y-4">
                <h3 className="text-base font-semibold">For the Parent Company</h3>
                <ul className="space-y-3">
                  {[
                    { label: 'Clear evidence', detail: 'Transformation potential visible — before/after speaks without words' },
                    { label: 'Reduced risk', detail: 'Validated design approach before committing full resources to development' },
                    { label: 'Technical feasibility', detail: 'Development-aware design confirmed — no backend changes required' },
                    { label: 'Implementation roadmap', detail: 'Phased rollout: core screens → features → optimisation' },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed">
                      <span className="text-[#F45D01] mt-0.5 shrink-0">—</span>
                      <span><span className="text-[var(--text-300)]">{item.label}: </span><span className="text-[var(--text-400)]">{item.detail}</span></span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 space-y-4">
                <h3 className="text-base font-semibold">UX Improvements</h3>
                <ul className="space-y-3">
                  {[
                    { label: 'Cognitive load', detail: 'Competing CTAs reduced from 9+ to organised 6 — 40% fewer decisions upfront' },
                    { label: 'Portfolio clarity', detail: 'Performance scannable in under 3 seconds via trend indicator and badge system' },
                    { label: 'Data visualisation', detail: 'Introduced charts and real-time indicators absent from the original entirely' },
                    { label: 'Brand consistency', detail: 'Unified visual language across all screens — feels like one trusted platform' },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed">
                      <span className="text-[#F45D01] mt-0.5 shrink-0">—</span>
                      <span><span className="text-[var(--text-300)]">{item.label}: </span><span className="text-[var(--text-400)]">{item.detail}</span></span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Strategic value */}
            <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4">
                <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-3">Long-term Value</p>
                <h3 className="text-xl font-semibold">The Demo as a Decision-Making Tool</h3>
              </div>
              <div className="lg:col-span-7 lg:col-start-6 space-y-3">
                {[
                  'Polished screens removed ambiguity from the investment decision — stakeholders could see the before/after rather than imagine it',
                  'The design system means new features can be built with consistent quality from the start',
                  'Visual design now sits at the level of Robinhood and Trading 212 — competitors where design communicates trustworthiness',
                  'The architecture scales — expert features can be added later without disrupting the novice experience',
                  'Documenting the limitations honestly (no user testing completed) built more trust with the client than claiming otherwise',
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
              <h2 className="text-2xl font-medium">Hobpay</h2>
              <p className="text-sm text-[var(--text-400)] mt-1">Cross-platform fintech redesign recovering 28% of blocked users</p>
            </div>
            <Link to="/work/Hobpay"
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
