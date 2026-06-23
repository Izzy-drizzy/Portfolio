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
  '/images/hobpay/slide-1.png',
  '/images/hobpay/slide-2.png',
  '/images/hobpay/slide-3.png',
  '/images/hobpay/slide-4.png',
  '/images/hobpay/slide-5.png',
  '/images/hobpay/slide-6.png',
];

const keyScreens = [
  '/images/hobpay/case-study/key-screen-1.png',
  '/images/hobpay/case-study/key-screen-2.png',
  '/images/hobpay/case-study/key-screen-3.png',
];

const tags = ['Product Design', 'Fintech', 'Cross Platform', 'Regulatory Compliance', 'Investment'];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const sectionAnim = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

function SectionLabel({ children }: { children: string }) {
  return <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-3">{children}</p>;
}

function ImageSlot({ label, aspect = 'aspect-video' }: { label: string; aspect?: string }) {
  return (
    <div className={`w-full ${aspect} rounded-xl border-2 border-dashed border-[var(--border-md)] bg-[var(--surface)] flex flex-col items-center justify-center gap-3 text-center p-6`}>
      <div className="w-10 h-10 rounded-full border border-[var(--border-md)] flex items-center justify-center text-[var(--text-600)]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
      </div>
      <p className="text-xs text-[var(--text-600)] max-w-xs">{label}</p>
    </div>
  );
}

export default function CaseStudyHobpay() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SEO title="Hobpay Case Study" description="Cross-platform fintech redesign serving 10K+ users. Web-first strategy, restructured navigation, and progressive disclosure lifted satisfaction from 3.2 to 4.2/5." path="/work/Hobpay" />
      <Navigation onOpenContact={() => setContactOpen(true)} />

      <main>

        {/* ── Hero ── */}
        <section className="min-h-screen pt-28 pb-12 px-7 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center overflow-hidden">
          <motion.div
            className="lg:col-span-5 flex flex-col gap-8"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 text-xs text-[var(--text-500)]">
              <Link to="/work" className="hover:text-[var(--text-300)] transition-colors">Case Studies</Link>
              <span>/</span>
              <span className="text-[var(--text-300)]">Hobpay</span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.15]">
              Cross-platform fintech redesign recovering 28% of blocked users
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-sm text-[var(--text-400)] leading-relaxed max-w-md">
              Hobpay ran on Android only, with no iOS and no web. 28% of potential users simply couldn't get in. What started as a platform access fix turned into a full UX overhaul. Satisfaction went from 3.2 to 4.2. Bill payment completion went from 45% to 85%.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex items-center gap-3 text-xs text-[var(--text-500)]">
              <span>2023</span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span>Delivered by Bukunmi Isijola</span>
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

          <motion.div
            className="lg:col-span-7 h-[55vh] lg:h-[80vh]"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ImageCarousel images={images} alt="Hobpay mockup" />
          </motion.div>
        </section>

        {/* ── Summary stats ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {[
              { stat: '+30%', label: 'Satisfaction increase' },
              { stat: '28%', label: 'iOS users recovered' },
              { stat: '10K+', label: 'Active users served' },
              { stat: '85%', label: 'Bill payment completion' },
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
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp} className="lg:col-span-4">
              <SectionLabel>Problem Framing</SectionLabel>
              <h2 className="text-2xl font-medium">The Challenge</h2>
            </motion.div>
            <motion.div variants={fadeUp} className="lg:col-span-7 lg:col-start-6 space-y-10">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-[var(--text-300)] uppercase tracking-wide">Business Crisis</h3>
                <ul className="space-y-2">
                  {[
                    '38% of early adopters reduced activity to basic cash withdrawals only',
                    '28% of potential users completely blocked due to iOS unavailability',
                    'Company missing investor transaction milestones tied to monthly volume',
                    'Android-only reach severely limiting market growth',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-[var(--text-400)] leading-relaxed">
                      <span className="text-[#F45D01] mt-1 shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-[var(--text-300)] uppercase tracking-wide">UX Issues</h3>
                <ul className="space-y-2">
                  {[
                    'No visual hierarchy. Everything competed for attention at once',
                    'Too many options shown at once with no way to prioritise',
                    'Inconsistent design language across screens',
                    'Poor accessibility on older Android devices',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-[var(--text-400)] leading-relaxed">
                      <span className="text-[#F45D01] mt-1 shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: '3.2/5', label: 'Initial satisfaction score', src: 'Pre-design survey' },
                  { val: '43%', label: 'Users only using bill payments', src: 'App analytics' },
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

        {/* ── Role & Team ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp} className="lg:col-span-4">
              <SectionLabel>Role & Team</SectionLabel>
              <h2 className="text-2xl font-medium">My Contribution</h2>
            </motion.div>
            <motion.div variants={fadeUp} className="lg:col-span-7 lg:col-start-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {[
                  { label: 'Role', value: 'Lead UX Designer, Front-end Developer, User Researcher' },
                  { label: 'Platform', value: 'Web Application (10K+ users)' },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
                    <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-2">{item.label}</p>
                    <p className="text-sm text-[var(--text-300)]">{item.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[var(--text-400)] leading-relaxed">
                Solo designer working directly with the product manager and engineering team. My dual design-development perspective allowed me to design within technical constraints. Understanding API limitations and mobile network realities in Nigeria informed decisions early, avoiding typical designer-developer back-and-forth.
              </p>
              <p className="text-sm text-[var(--text-500)] leading-relaxed mt-3">
                I used Claude as a thinking partner through the research phase, working through how to structure findings from the multi-platform audit and stress-testing the IA before committing to a direction in Figma.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Research & Approach ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Approach</SectionLabel>
              <h2 className="text-2xl font-medium mb-10">Research & Strategy</h2>
            </motion.div>
            {/* Competitor comparison */}
            <motion.div variants={fadeUp} className="mb-10 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    name: 'Cowrywise',
                    strengths: [
                      'Clean, minimal UI with strong investment-first hierarchy',
                      'Clear savings plans with transparent interest rates',
                      'High-trust security messaging throughout',
                    ],
                    weaknesses: [
                      'Limited customisation: savings plans feel rigid for diverse user goals',
                      'Slow load times on 2G/3G networks hurt retention',
                      'Investment options not accessible to low-income first-time users',
                    ],
                  },
                  {
                    name: 'Kuda',
                    strengths: [
                      'Frictionless onboarding with mobile-first approach',
                      'Banking features (cards, spending) clearly surfaced',
                      'Familiar mobile banking UX patterns users recognise',
                    ],
                    weaknesses: [
                      'UX feels feature-heavy, and new users are overwhelmed quickly',
                      'Limited investment and savings functionality vs competitors',
                      'Technical glitches reported frequently in user reviews',
                    ],
                  },
                  {
                    name: 'Piggyvest',
                    strengths: [
                      'Multiple savings goals with visual progress indicators',
                      'Flexible investment options with clear ROI displayed upfront',
                      'Gamified savings boosting engagement and retention',
                    ],
                    weaknesses: [
                      'Withdrawal restrictions frustrate users needing liquidity',
                      'No cross-platform web experience, so mobile-only limits reach',
                      'Customer support slow to resolve transaction issues',
                    ],
                  },
                ].map((c) => (
                  <div key={c.name} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden">
                    <div className="px-5 py-3 border-b border-[var(--border)]">
                      <span className="text-sm font-semibold">{c.name}</span>
                    </div>
                    <div className="p-5 space-y-5">
                      <div>
                        <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-3">Strengths</p>
                        <ul className="space-y-2">
                          {c.strengths.map((s, i) => (
                            <li key={i} className="flex gap-2 text-xs text-[var(--text-400)] leading-relaxed">
                              <span className="text-[var(--border-md)] mt-0.5 shrink-0">+</span>{s}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="border-t border-[var(--border)] pt-5">
                        <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-3">Weaknesses</p>
                        <ul className="space-y-2">
                          {c.weaknesses.map((w, i) => (
                            <li key={i} className="flex gap-2 text-xs text-[var(--text-400)] leading-relaxed">
                              <span className="text-[var(--border-md)] mt-0.5 shrink-0">—</span>{w}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Opportunities & Threats */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--border)]">
                  <div className="p-6">
                    <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-4">Market Opportunities</p>
                    <ul className="space-y-2">
                      {[
                        'Personalised experiences based on transaction behaviour and spending patterns',
                        'Partnerships with financial services to expand product breadth (insurance, credit)',
                        'Rewards and loyalty programmes to increase frequency of engagement',
                        'Progressive web app strategy to reach iOS users without App Store dependency',
                      ].map((o, i) => (
                        <li key={i} className="flex gap-2 text-xs text-[var(--text-400)] leading-relaxed">
                          <span className="text-[#F45D01] mt-0.5 shrink-0">+</span>{o}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-[var(--text-500)] uppercase tracking-widest mb-4">Competitive Threats</p>
                    <ul className="space-y-2">
                      {[
                        'Increasing competition from well-funded fintechs with larger design teams',
                        'User retention challenging as switching costs are low in Nigerian fintech',
                        'Technical debt and infrastructure issues slowing feature velocity',
                        'Data privacy concerns eroding trust if security communication is unclear',
                      ].map((t, i) => (
                        <li key={i} className="flex gap-2 text-xs text-[var(--text-400)] leading-relaxed">
                          <span className="text-[var(--border-md)] mt-0.5 shrink-0">—</span>{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Key insight callout */}
              <div className="rounded-xl border border-[#F45D01]/20 bg-[#F45D01]/5 p-5">
                <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">Key Insight</p>
                <p className="text-sm text-[var(--text-300)] leading-relaxed">
                  Successful Nigerian fintech apps consistently prioritise quick actions for frequent tasks and use clear visual hierarchy to reduce cognitive load, especially critical for users on 2G/3G networks. Hobpay's redesign needed to adopt these patterns while solving the platform access problem none of these competitors had faced.
                </p>
              </div>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 space-y-4">
                <h3 className="text-base font-semibold">Research Methods</h3>
                <ul className="space-y-3">
                  {[
                    { method: 'User surveys', detail: '58 participants across demographics' },
                    { method: 'Usability testing', detail: '5 users testing bill payments, investments, and loans' },
                    { method: 'Heuristic analysis', detail: "Nielsen's 10 heuristics applied to the existing app" },
                    { method: 'Competitor analysis', detail: 'Kuda, Piggyvest, Cowrywise for Nigerian fintech UX patterns' },
                  ].map((r, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed">
                      <span className="text-[#F45D01] font-mono text-xs mt-0.5 shrink-0">0{i + 1}</span>
                      <span><span className="text-[var(--text-300)]">{r.method}</span><span className="text-[var(--text-500)]">: {r.detail}</span></span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 space-y-4">
                <h3 className="text-base font-semibold">Key Findings</h3>
                <ul className="space-y-3">
                  {[
                    'Bill payments were 43% of all usage, yet the nav treated them the same as every other service',
                    'Careplan loans were popular with frequent users but almost impossible to find',
                    'Users described the interface as overwhelming: too many options, no clear path',
                    'Competing apps on slower networks all had one thing in common: quick actions front and centre',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-[var(--text-400)] leading-relaxed">
                      <span className="text-[#F45D01] mt-1 shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  num: '01',
                  title: 'Progressive Disclosure',
                  body: 'Show what users need, when they need it. New users get a simpler view; advanced features are there when someone goes looking.',
                },
                {
                  num: '02',
                  title: 'Task-Oriented Architecture',
                  body: "Group things by what users are trying to do, not by internal product names. Nobody searched for 'Rintegra.' They searched for 'invest.'",
                },
                {
                  num: '03',
                  title: 'Trust-Building Design',
                  body: 'Financial apps need to earn trust with every screen. Security details are visible, not buried in fine print. Consistent patterns mean users know what they\'re about to do before they tap.',
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
              <p className="text-sm text-[var(--text-400)] mt-3 max-w-2xl">Research synthesis, wireframes, and persona work done before a single hi-fi screen was made.</p>
            </motion.div>

            {/* Research Insights */}
            <motion.div variants={fadeUp} className="mb-4">
              <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-4">Research Insights</p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-12">
              {[
                { src: '/images/hobpay/process/research/research-1.png', label: 'Synthesis board' },
                { src: '/images/hobpay/process/research/research-2.png', label: 'Key findings' },
                { src: '/images/hobpay/process/research/research-3.png', label: 'Insight mapping' },
              ].map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
                  <ImageZoom src={img.src} alt={img.label} className="w-full object-cover" />
                  <p className="text-xs text-[var(--text-600)] px-4 py-2">{img.label}</p>
                </div>
              ))}
            </motion.div>

            {/* User Personas & Journey Maps */}
            <motion.div variants={fadeUp} className="mb-4">
              <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-4">User Personas & Journey Maps</p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
              {[
                { src: '/images/hobpay/process/personas/persona-1.png', label: 'User persona - primary' },
                { src: '/images/hobpay/process/personas/persona-2.png', label: 'User persona - secondary' },
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
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3">
              {[
                '/images/hobpay/process/lofi/lofi-1.png',
                '/images/hobpay/process/lofi/lofi-2.png',
                '/images/hobpay/process/lofi/lofi-3.png',
                '/images/hobpay/process/lofi/lofi-4.png',
              ].map((src, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
                  <ImageZoom src={src} alt={`Wireframe ${i + 1}`} className="w-full object-cover" />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── Challenges ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Challenges</SectionLabel>
              <h2 className="text-2xl font-medium mb-10">Unexpected Obstacles</h2>
            </motion.div>
            <div className="space-y-6">
              {[
                {
                  num: '01',
                  title: 'Balancing Feature Accessibility with Simplification',
                  problem: 'Hobpay had investments (Rintegra), bill payments, insurance, and loans (Careplan). Hiding too much killed discovery. Showing everything caused the original overload.',
                  solution: 'Built a "Quick Actions" strip for frequent tasks and a "Services" section that kept the internal product names but paired each with clear descriptions, so users understood what they were looking at without needing to already know. Details expand when someone actually needs them.',
                },
                {
                  num: '02',
                  title: 'Technical Constraints of Nigerian Mobile Networks',
                  problem: 'Most users were on 2G/3G with older Android devices. A slow or heavy interface meant abandonment.',
                  solution: 'Kept components lightweight, added fallback states for slow connections, and loaded essential data first. The rest came in after.',
                },
                {
                  num: '03',
                  title: 'Cross-Platform Strategy Under Time Pressure',
                  problem: 'Building native iOS and Android apps would take 12+ months. The business needed iOS users now to hit investor milestones.',
                  solution: 'Proposed a web-first build: it removed the iOS barrier immediately and gave us a real testing ground for design patterns before committing to native apps.',
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Solution</SectionLabel>
              <h2 className="text-2xl font-medium mb-4">Information Architecture Redesign</h2>
              <p className="text-sm text-[var(--text-400)] leading-relaxed max-w-2xl mb-6">
                Shifted from a service-based structure (Rintegra, Careplan, Bills, Wallet) to a user-goal-based structure: Dashboard → Quick Actions → Services → Wallet.
              </p>
            </motion.div>
            {/* IA Diagram - image */}
            <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-white overflow-hidden mb-6">
              <img
                src="/images/hobpay/case-study/new-ia.png"
                alt="Hobpay information architecture diagram"
                loading="lazy"
                className="w-full h-auto object-contain"
              />
            </motion.div>

            {/* Before / After dashboard images */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl overflow-hidden border border-[var(--border)] space-y-2">
                <div className="px-4 pt-4 flex items-center gap-2">
                  <span className="text-xs text-[var(--text-600)] uppercase tracking-widest">Before</span>
                </div>
                <img src="/images/hobpay/case-study/old-dashboard.png" alt="Old Hobpay dashboard" loading="lazy" className="w-full h-auto object-contain" />
              </div>
              <div className="rounded-xl overflow-hidden border border-[#F45D01]/20 space-y-2">
                <div className="px-4 pt-4 flex items-center gap-2">
                  <span className="text-xs text-[#F45D01] uppercase tracking-widest">After</span>
                </div>
                <img src="/images/hobpay/case-study/new-dashboard.png" alt="Redesigned Hobpay dashboard" loading="lazy" className="w-full h-auto object-contain" />
              </div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  title: 'Dashboard Redesign',
                  before: 'Users reported "too many options," "confusing layout," "couldn\'t find what I needed"',
                  after: 'Card-based layout with clear visual hierarchy. Portfolio balance prominent, Quick Actions for frequent tasks (43% primary use), service cards organised by user goals',
                },
                {
                  title: 'Investment Section (Rintegra)',
                  before: '"Unclear what Rintegra is," "investment options too complex." 0/5 users found it clearly in testing',
                  after: 'Renamed "Invest Your Money" for clarity. Simplified flow with ROI information upfront. Progressive disclosure from basic info to details to commitment. 2/5 users found it clear in re-test',
                },
                {
                  title: 'Bill Payment Flow',
                  before: 'Users navigated through multiple menus for their most frequent task. 1/5 users completed successfully in testing',
                  after: 'Prominent placement on dashboard. One-tap access to electricity, cable TV, data. Reduced steps from 5 to 3. Saved billers for repeat payments. 3/5 completion in re-test',
                },
                {
                  title: 'Login & Security',
                  before: 'Opaque security communication creating hesitation at sensitive points',
                  after: 'Security measures made visible, biometric login added, "forgot password" reduced to fewer steps, trust signals present without crowding the screen',
                },
              ].map((s, i) => (
                <motion.div key={i} variants={fadeUp} custom={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 space-y-4">
                  <h3 className="text-base font-semibold">{s.title}</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-1.5">Before</p>
                      <p className="text-sm text-[var(--text-500)] leading-relaxed">{s.before}</p>
                    </div>
                    <div className="border-t border-[var(--border)] pt-3">
                      <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-1.5">After</p>
                      <p className="text-sm text-[var(--text-300)] leading-relaxed">{s.after}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Image Gallery ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Screens</SectionLabel>
              <h2 className="text-2xl font-medium mb-10">Final Designs</h2>
            </motion.div>
            <div className="grid grid-cols-1 gap-4">
              {keyScreens.map((src, i) => (
                <motion.div key={i} variants={fadeUp} custom={i} className="rounded-xl overflow-hidden bg-[var(--surface)] border border-[var(--border)]">
                  <ImageZoom src={src} alt={`Hobpay screen ${i + 1}`} className="w-full h-auto object-contain" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Results ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Results & Impact</SectionLabel>
              <h2 className="text-2xl font-medium mb-6">What the redesign moved</h2>
            </motion.div>
            {/* Metrics chart - native */}
            <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 mb-8 space-y-5">
              <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-2">Before → After</p>
              {[
                { label: 'User Satisfaction', before: 64, after: 84, beforeVal: '3.2/5', afterVal: '4.2/5', delta: '+30%' },
                { label: 'Bill Payment Completion', before: 45, after: 85, beforeVal: '45%', afterVal: '85%', delta: '+31%' },
                { label: 'Feature Discovery', before: 40, after: 70, beforeVal: '40%', afterVal: '70%', delta: '+75%' },
                { label: 'Cross-platform Access', before: 72, after: 100, beforeVal: '72%', afterVal: '100%', delta: '+39%' },
              ].map((m) => (
                <div key={m.label} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[var(--text-400)]">{m.label}</span>
                    <span className="text-[#F45D01] font-mono font-semibold">{m.delta}</span>
                  </div>
                  <div className="relative h-7 rounded-md bg-[var(--bg)] overflow-hidden">
                    {/* Before bar */}
                    <div
                      className="absolute inset-y-0 left-0 bg-gray-700/60 rounded-md flex items-center pl-2"
                      style={{ width: `${m.before}%` }}
                    >
                      <span className="text-[10px] text-[var(--text-400)]">{m.beforeVal}</span>
                    </div>
                  </div>
                  <div className="relative h-7 rounded-md bg-[var(--bg)] overflow-hidden">
                    {/* After bar */}
                    <div
                      className="absolute inset-y-0 left-0 bg-[#F45D01]/70 rounded-md flex items-center pl-2 transition-all duration-700"
                      style={{ width: `${m.after}%` }}
                    >
                      <span className="text-[10px] text-white font-medium">{m.afterVal}</span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-6 pt-2">
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-gray-700/60 inline-block" /><span className="text-xs text-[var(--text-500)]">Before</span></div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-[#F45D01]/70 inline-block" /><span className="text-xs text-[var(--text-500)]">After</span></div>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { stat: '3.2→4.2', label: 'Satisfaction score out of 5', sub: '+30% increase' },
                { stat: '+75%', label: 'Feature discovery improvement', sub: '40% → 70%' },
                { stat: '-52%', label: 'Time on homepage', sub: '3.1min → 1.1min' },
                { stat: '+31%', label: 'Bill payment completion', sub: '45% → 85%' },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} custom={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <p className="text-3xl font-medium text-[#F45D01] mb-1">{item.stat}</p>
                  <p className="text-xs text-[var(--text-400)] mb-1">{item.label}</p>
                  <p className="text-xs text-[var(--text-600)]">{item.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Long-term impact */}
            <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4">
                <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-3">Long-term Value</p>
                <h3 className="text-xl font-semibold">What It Led To</h3>
              </div>
              <div className="lg:col-span-7 lg:col-start-6 space-y-3">
                {[
                  'The web platform became the base for all mobile app updates, with components and patterns reused directly',
                  'The company hit investor transaction milestones it had been missing',
                  'Mobile development moved faster because the hard decisions were already settled',
                  'The design system built for this project is still in use',
                  'A web-first build solved the iOS problem in weeks, not the 12 months a native app would have taken',
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
          <motion.div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionAnim}
          >
            <div>
              <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-2">Next Case Study</p>
              <h2 className="text-2xl font-medium">Moolapay</h2>
              <p className="text-sm text-[var(--text-400)] mt-1">Financial inclusion for underserved communities</p>
            </div>
            <Link
              to="/work/Moolapay"
              className="flex items-center gap-2 bg-[var(--btn-bg)] text-[var(--btn-text)] px-6 py-3 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors shrink-0"
            >
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
