import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import ImageZoom from '../components/ImageZoom';
import SEO from '../components/SEO';

const IMG = '/images/hobpay';

const finalScreens = [
  {
    src: `${IMG}/case-study/key-screen-2.webp`,
    caption: 'Web app: dashboard, and Rintegra investments',
    alt: 'Hobpay web app. Left: dashboard with three wallet balances, Quick Actions, recent transactions and service cards. Right: Rintegra investment summary with a list of notes, each with a Sell button.',
  },
  {
    src: `${IMG}/case-study/key-screen-3.webp`,
    caption: 'Web app: log-in, and Careplan credit',
    alt: 'Hobpay web app. Left: log-in with a Personal or Business account choice, email and password fields and a Login button. Right: Careplan credit balances with Withdraw buttons and a transaction log with Repay buttons.',
  },
  {
    src: `${IMG}/case-study/key-screen-1.webp`,
    caption: 'Phone layouts: landing page, Rintegra, home, log-in, Careplan',
    alt: 'Five Hobpay phone screens side by side: landing page, Rintegra investments, home with wallet card and Quick Actions, log-in, and Careplan balances.',
  },
];

const components = [
  { src: 'wallet-cards', label: 'Wallet balance cards', alt: 'Three wallet cards: Hobpay Wallet, Logifoods Wallet and Careplan Wallet, each with an icon, balance and overflow menu.', wide: true },
  { src: 'service-cards', label: 'Service cards', alt: 'Four service cards for Rintegra, Healthi, Logifoods and Bills, each with an icon, name, one-line description and an arrow button.', wide: true },
  { src: 'quick-actions', label: 'Quick Actions', alt: 'Four Quick Action buttons: Payspot search, Quick Transfer, Careplan cash and Buy Rintegra note, each with a red circular icon.' },
  { src: 'transactions', label: 'Recent transactions', alt: 'Recent transaction rows with reference, time, and amount pills in red for debits and green for credits.' },
  { src: 'summary-cards', label: 'Investment summary', alt: 'Red summary cards showing Rintegra investment value with a +12% badge, Carenote return and total value.' },
  { src: 'note-row', label: 'Investment note with action', alt: 'A Rintegra note row with reference, plan name, activation date and a red Sell button.', wide: true },
  { src: 'account-type', label: 'Account type choice, selected and default', alt: 'Two account type tiles: Personal, selected in solid red, and Business, unselected with a red outline.' },
  { src: 'form-fields', label: 'Form fields and primary button', alt: 'Email and password fields with labels and placeholders, a full-width red Login button, a Remember me checkbox and a Forgot Password link.' },
  { src: 'nav-items', label: 'Side navigation, active and default', alt: 'Web side navigation with Dashboard in the active red state and Wallets, Buy Vouchers, Analytics, Payment methods and More in the default grey state.' },
];

const renders = [
  { src: 'slide-1', alt: 'Device render: two phones showing the Hobpay home screen and Rintegra investments.' },
  { src: 'slide-5', alt: 'Device render: laptop showing the Hobpay web dashboard.' },
  { src: 'slide-6', alt: 'Device render: phone showing the redesigned Hobpay home screen.' },
  { src: 'slide-4', alt: 'Device render: laptop showing Careplan balances in the Hobpay web app.' },
  { src: 'slide-3', alt: 'Device render: two phones showing Careplan balances and the Hobpay home screen.' },
  { src: 'slide-2', alt: 'Device render: phone showing the Hobpay log-in screen.' },
];

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

export default function CaseStudyHobpay() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SEO title="Hobpay Case Study" description="Shipped consumer fintech product, in-house team, April 2022 to May 2023. Lead product designer for Hobpay, serving 10,000+ users: web-first build, design system, and satisfaction from 3.2 to 4.2 out of 5." path="/work/Hobpay" />
      <Navigation onOpenContact={() => setContactOpen(true)} />

      <main>

        {/* ── Hero ── */}
        <section className="pt-28 pb-16 px-4 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-x-0 lg:gap-y-7">
          <motion.div
            className="lg:col-span-5 lg:row-start-1 lg:self-end flex flex-col gap-7"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 text-xs text-[var(--text-500)]">
              <Link to="/work" className="hover:text-[var(--text-300)] transition-colors">Case Studies</Link>
              <span>/</span>
              <span className="text-[var(--text-300)]">Hobpay</span>
            </motion.div>
            <motion.div variants={fadeUp} custom={1} className="flex flex-wrap items-center gap-3 text-xs">
              <span className="px-3 py-1.5 rounded-full border border-[#F45D01]/30 bg-[#F45D01]/5 text-[#F45D01]">Shipped product, in-house team</span>
              <span className="text-[var(--text-400)]">April 2022 to May 2023</span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={2} className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.15]">
              Cross-platform fintech redesign opening the product to the 28% of users who couldn't get in
            </motion.h1>
            <motion.p variants={fadeUp} custom={3} className="text-sm text-[var(--text-400)] leading-relaxed max-w-md">
              Hobpay ran on Android only, and the iOS build was delayed, so 28% of potential users couldn't get in. I argued for a web-first build, designed it and wrote its front end, and rebuilt the core flows around the tasks people came to do. Satisfaction went from 3.2 to 4.2 out of 5. Bill payment completion went from 45% to 85%.
            </motion.p>
          </motion.div>

          <motion.div
            className="lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:row-span-2 lg:self-center lg:pl-10"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="grid grid-cols-2 gap-3 md:gap-5 lg:flex lg:justify-center">
              {[
                { src: `${IMG}/final/home-before.webp`, label: 'Before', note: 'Existing app', alt: 'Hobpay home screen before the redesign: a blue balance card above a grid of ten service tiles and four coloured promotional cards, with a five-item bottom bar.' },
                { src: `${IMG}/final/home-after.webp`, label: 'After', note: 'Redesign', alt: 'Hobpay home screen after the redesign: search, a wallet balance card, four Quick Actions for frequent tasks, and service cards with plain descriptions.' },
              ].map((s) => (
                <figure key={s.label} className="flex flex-col gap-3 w-fit max-w-full mx-auto">
                  <figcaption className="flex items-baseline gap-2 text-xs">
                    <span className={`uppercase tracking-widest ${s.label === 'After' ? 'text-[#F45D01]' : 'text-[var(--text-600)]'}`}>{s.label}</span>
                    <span className="text-[var(--text-500)]">{s.note}</span>
                  </figcaption>
                  <div className={`rounded-xl overflow-hidden border ${s.label === 'After' ? 'border-[#F45D01]/30' : 'border-[var(--border)]'} bg-[var(--surface)]`}>
                    <ImageZoom src={s.src} alt={s.alt} className="w-full h-auto lg:h-[64vh] lg:max-h-[720px] lg:w-auto object-contain block" />
                  </div>
                </figure>
              ))}
            </div>
            <p className="text-xs text-[var(--text-500)] mt-4">The home screen before and after the redesign. Select either screen to enlarge it.</p>
          </motion.div>

          <motion.dl
            className="lg:col-span-5 lg:row-start-2 lg:self-start grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 border-t border-[var(--border)] pt-6 max-w-md"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {[
              { label: 'Role', value: 'Lead Product Designer, Cedarstrip Investment (Hobpay), Lagos' },
              { label: 'Team', value: 'Three engineers, a product manager and the founder. I mentored a junior designer who joined partway through' },
              { label: 'I owned', value: 'End-to-end design, the design system, user research, and the web app front end' },
              { label: 'Product', value: 'Consumer fintech platform serving 10,000+ users' },
            ].map((item) => (
              <div key={item.label}>
                <dt className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-1.5">{item.label}</dt>
                <dd className="text-sm text-[var(--text-300)] leading-relaxed">{item.value}</dd>
              </div>
            ))}
          </motion.dl>
        </section>

        {/* ── Summary stats ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {[
              { stat: '4.2/5', label: 'Satisfaction, up from 3.2' },
              { stat: '85%', label: 'Bill payment completion, up from 45%' },
              { stat: '28%', label: "Potential users who couldn't get in before the web build" },
              { stat: '10K+', label: 'Users served' },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} custom={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#F45D01] mb-2">{item.stat}</p>
                <p className="text-xs text-[var(--text-400)]">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── Final screens ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>Screens</SectionLabel>
              <h2 className="text-2xl font-medium">Final designs</h2>
              <p className="text-sm text-[var(--text-400)] mt-3 max-w-2xl leading-relaxed">
                The web app I designed and wrote the front end for, then the same screens laid out for phone. Select any image to enlarge it.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 gap-6">
              {finalScreens.map((s, i) => (
                <motion.figure key={s.src} variants={fadeUp} custom={i} className="rounded-xl overflow-hidden bg-[var(--surface)] border border-[var(--border)]">
                  <ImageZoom src={s.src} alt={s.alt} className="w-full h-auto object-contain block" />
                  <figcaption className="text-xs text-[var(--text-500)] px-4 py-3 border-t border-[var(--border)]">{s.caption}</figcaption>
                </motion.figure>
              ))}
            </div>
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
              <h2 className="text-2xl font-medium">Working with the team</h2>
            </motion.div>
            <motion.div variants={fadeUp} className="lg:col-span-7 lg:col-start-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'Role', value: 'Lead Product Designer' },
                  { label: 'Dates', value: 'April 2022 to May 2023' },
                  { label: 'Team', value: 'Small bootstrapped startup: three engineers, a product manager, the founder, and later a junior designer' },
                  { label: 'Platforms', value: 'Android app, then a web app that opened the product on every platform' },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
                    <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-2">{item.label}</p>
                    <p className="text-sm text-[var(--text-300)] leading-relaxed">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <p className="text-sm text-[var(--text-400)] leading-relaxed">
                  I owned end-to-end design for the product and worked directly with the product manager, the three engineers and the founder. I ran the user research, wrote the design system, and led the web-first build.
                </p>
                <p className="text-sm text-[var(--text-400)] leading-relaxed">
                  I also wrote front-end code for the web app, mainly JavaScript and Tailwind CSS. Working in the code meant API limits and Nigerian mobile network conditions shaped the designs from the start.
                </p>
                <p className="text-sm text-[var(--text-400)] leading-relaxed">
                  A junior designer joined partway through the build. I mentored them, setting their direction and reviewing their work.
                </p>
              </div>
            </motion.div>
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
                <h3 className="text-sm font-semibold text-[var(--text-300)] uppercase tracking-wide">Business Problem</h3>
                <ul className="space-y-2">
                  {[
                    '38% of early adopters reduced activity to basic cash withdrawals only',
                    "28% of potential users couldn't get in, because the app ran on Android only and the iOS build was delayed",
                    'The company was missing investor transaction milestones tied to monthly volume',
                    'Android-only reach was limiting growth',
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
                  { val: '3.2/5', label: 'Initial satisfaction score', src: '58-person pre-design survey' },
                  { val: '43%', label: 'Users only using bill payments', src: 'App analytics' },
                ].map((m, i) => (
                  <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
                    <p className="text-3xl font-medium text-[var(--text)] mb-1">{m.val}</p>
                    <p className="text-xs text-[var(--text-500)]">{m.label}</p>
                    <p className="text-xs text-[var(--text-500)] mt-1">Source: {m.src}</p>
                  </div>
                ))}
              </div>
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
                              <span className="text-[var(--text-600)] mt-0.5 shrink-0">+</span>{s}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="border-t border-[var(--border)] pt-5">
                        <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-3">Weaknesses</p>
                        <ul className="space-y-2">
                          {c.weaknesses.map((w, i) => (
                            <li key={i} className="flex gap-2 text-xs text-[var(--text-400)] leading-relaxed">
                              <span className="text-[var(--text-600)] mt-0.5 shrink-0">—</span>{w}
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
                          <span className="text-[var(--text-600)] mt-0.5 shrink-0">—</span>{t}
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
                    { method: 'User survey', detail: '58 participants: 25 students at Redeemer\'s University and 33 residents of Ajao Estate, Lagos' },
                    { method: 'Usability testing', detail: '5 users paying a utility bill, investing through Rintegra and enrolling in health insurance' },
                    { method: 'Later usability round', detail: "about 200 of Hobpay's users" },
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
                  body: "Group things by what users are trying to do. Nobody searched for 'Rintegra.' They searched for 'invest.'",
                },
                {
                  num: '03',
                  title: 'Trust-Building Design',
                  body: "Financial apps need to earn trust with every screen. Security details sit where the decision is made, and consistent patterns mean users know what they're about to do before they tap.",
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
                { src: `${IMG}/process/research/research-1.webp`, label: 'Heuristic analysis of the existing app', alt: 'Heuristic analysis board: screens from the existing Hobpay app with five takeaways on visual consistency, efficiency of use, error prevention, typography and aesthetics.' },
                { src: `${IMG}/process/research/research-2.webp`, label: 'User survey, 58 participants', alt: 'User survey results from 58 participants: platforms used for financial transactions, most used features, and a Hobpay experience rating averaging 3.2, with key takeaways.' },
                { src: `${IMG}/process/research/research-3.webp`, label: 'Usability testing, 5 users', alt: 'Usability testing summary for five users across three scenarios, paying a utility bill, investing and enrolling in health insurance, with key insights and general pain points.' },
              ].map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
                  <ImageZoom src={img.src} alt={img.alt} className="w-full object-cover" />
                  <p className="text-xs text-[var(--text-500)] px-4 py-2">{img.label}</p>
                </div>
              ))}
            </motion.div>

            {/* User Personas */}
            <motion.div variants={fadeUp} className="mb-4">
              <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-4">User Personas</p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
              {[
                { src: `${IMG}/process/personas/persona-1.webp`, label: 'Primary persona', alt: 'Persona: Aisha Olawale, 32, marketing manager, who wants bills, airtime, investing and health insurance in one place, with goals, frustrations and priorities.' },
                { src: `${IMG}/process/personas/persona-2.webp`, label: 'Secondary persona', alt: 'Persona: James Nnamdi, 45, small business owner, who wants to pay bills and invest without leaving his store, with goals, frustrations and priorities.' },
              ].map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
                  <ImageZoom src={img.src} alt={img.alt} className="w-full object-cover" />
                  <p className="text-xs text-[var(--text-500)] px-4 py-2">{img.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Lo-fi Wireframes */}
            <motion.div variants={fadeUp} className="mb-4">
              <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-4">Lo-fi Wireframes</p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { src: `${IMG}/process/lofi/lofi-4.webp`, alt: 'Two notebook pages of hand-drawn wireframes for the landing page, web dashboard and phone layouts.' },
                { src: `${IMG}/process/lofi/lofi-1.webp`, alt: 'Digital wireframe of the landing page at desktop and phone widths.' },
                { src: `${IMG}/process/lofi/lofi-2.webp`, alt: 'Digital wireframe of the dashboard at desktop and phone widths: side navigation, balance, quick actions, services grid and a transactions panel.' },
                { src: `${IMG}/process/lofi/lofi-3.webp`, alt: 'Digital wireframe of a service page at desktop and phone widths, with stacked balance cards beside a main content area.' },
              ].map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
                  <ImageZoom src={img.src} alt={img.alt} className="w-full object-cover" />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── Decisions & trade-offs ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Challenges</SectionLabel>
              <h2 className="text-2xl font-medium mb-10">Decisions and trade-offs</h2>
            </motion.div>
            <div className="space-y-6">
              {[
                {
                  num: '01',
                  title: 'Cross-Platform Strategy Under Time Pressure',
                  who: 'The founder, the product manager, the three engineers and me',
                  problem: 'The app ran on Android only and the iOS build was delayed, so 28% of potential users couldn\'t get in. Building native iOS and Android apps would take 12+ months, and the business needed those users sooner to reach its investor milestones.',
                  solution: 'I argued for a web-first build, designed it and wrote its front-end code, mainly in JavaScript and Tailwind CSS. A web-first build solved the iOS problem in weeks, not the 12 months a native app would have taken. It launched, opened the product to the users who couldn\'t get in, and became the base for later mobile app updates.',
                },
                {
                  num: '02',
                  title: 'Balancing Feature Accessibility with Simplification',
                  problem: 'Hobpay had investments (Rintegra), bill payments, insurance, and loans (Careplan). Hiding too much killed discovery. Showing everything caused the original overload.',
                  solution: 'Built a "Quick Actions" strip for frequent tasks and a "Services" section that kept the internal product names but paired each with clear descriptions, so users understood what they were looking at without needing to already know. Details expand when someone actually needs them.',
                },
                {
                  num: '03',
                  title: 'Technical Constraints of Nigerian Mobile Networks',
                  problem: 'Most users were on 2G/3G with older Android devices. A slow or heavy interface meant abandonment.',
                  solution: 'Kept components lightweight, added fallback states for slow connections, and loaded essential data first. The rest came in after.',
                },
              ].map((c) => (
                <motion.div key={c.num} variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-4">
                    <span className="text-xs text-[#F45D01] font-mono mb-3 block">{c.num}</span>
                    <h3 className="text-base font-semibold">{c.title}</h3>
                  </div>
                  <div className="lg:col-span-7 lg:col-start-6 space-y-4">
                    {c.who && (
                      <div>
                        <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-2">Who was involved</p>
                        <p className="text-sm text-[var(--text-400)] leading-relaxed">{c.who}</p>
                      </div>
                    )}
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
            <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-white overflow-hidden mb-8">
              <ImageZoom
                src={`${IMG}/case-study/new-ia.webp`}
                alt="Information architecture: landing page to log-in or sign-up, then navigation bar, user dashboard, Quick Actions, services shortcuts and recent transactions, each with its sub-pages."
                className="w-full h-auto object-contain"
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Dashboard Redesign',
                  before: 'Users reported "too many options," "confusing layout," "couldn\'t find what I needed"',
                  after: 'Card-based layout with clear visual hierarchy. Portfolio balance prominent, Quick Actions for frequent tasks (43% primary use), service cards organised by user goals',
                },
                {
                  title: 'Investment Section (Rintegra)',
                  before: '"Unclear what Rintegra is," "investment options too complex." 0 of 5 users found it clearly in the 5-user usability test',
                  after: 'Kept the Rintegra name and paired it with a plain description. Simplified flow with ROI information upfront. Progressive disclosure from basic info to details to commitment. 2 of 5 found it clear in the re-test',
                },
                {
                  title: 'Bill Payment Flow',
                  before: 'Users navigated through multiple menus for their most frequent task. 1 of 5 completed it in the 5-user usability test',
                  after: 'Prominent placement on dashboard. One-tap access to electricity, cable TV, data. Reduced steps from 5 to 3. Saved billers for repeat payments. 3 of 5 completed it in the re-test',
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

        {/* ── Design System ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          >
            <motion.div variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-10">
              <div className="lg:col-span-4">
                <SectionLabel>Design System</SectionLabel>
                <h2 className="text-2xl font-medium">The system behind the screens</h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6 space-y-3">
                <p className="text-sm text-[var(--text-400)] leading-relaxed">
                  I wrote Hobpay's design system. It was used across the whole product and evolved over time, and the junior designer I mentored worked within it.
                </p>
                <p className="text-sm text-[var(--text-400)] leading-relaxed">
                  The web build became the base for later mobile app updates, with its components and patterns reused directly. The same wallet card, Quick Actions and service cards appear in the web and phone layouts above.
                </p>
                <p className="text-xs text-[var(--text-500)] leading-relaxed">
                  The components below are cropped from the final web screens on this page. They are not exports from the Figma library.
                </p>
              </div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {components.map((c, i) => (
                <motion.figure
                  key={c.src}
                  variants={fadeUp}
                  custom={i % 4}
                  className={`rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] flex flex-col ${c.wide ? 'md:col-span-2' : ''}`}
                >
                  <div className="flex-1 bg-white flex items-center justify-center p-4 md:p-6">
                    <img src={`${IMG}/components/${c.src}.webp`} alt={c.alt} loading="lazy" className="max-w-full h-auto" />
                  </div>
                  <figcaption className="text-xs text-[var(--text-500)] px-4 py-3 border-t border-[var(--border)]">{c.label}</figcaption>
                </motion.figure>
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
              <h2 className="text-2xl font-medium mb-10">What the redesign moved</h2>
            </motion.div>

            {/* How this was measured */}
            <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8 mb-8">
              <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-6">How this was measured</p>
              <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {[
                  { num: '01', title: 'Pre-design survey', size: '58 people', body: 'Run before any design work, to learn which features people used and how they rated the app. This gave the 3.2 out of 5 satisfaction baseline.' },
                  { num: '02', title: 'Usability tests', size: '5 users', body: 'Three tasks in the existing app: paying a utility bill, investing through Rintegra and enrolling in health insurance. Used to find where people got stuck, then repeated on the redesign.' },
                  { num: '03', title: 'Later usability round', size: "About 200 of Hobpay's users", body: 'A larger round of usability tests with people drawn from Hobpay\'s own user base.' },
                ].map((r) => (
                  <li key={r.num} className="space-y-2">
                    <span className="text-xs text-[#F45D01] font-mono block">{r.num}</span>
                    <h3 className="text-base font-semibold">{r.title}</h3>
                    <p className="text-xs text-[var(--text-300)]">{r.size}</p>
                    <p className="text-sm text-[var(--text-400)] leading-relaxed">{r.body}</p>
                  </li>
                ))}
              </ol>
              <p className="text-xs text-[var(--text-500)] leading-relaxed mt-6 pt-6 border-t border-[var(--border)]">
                The before and after figures below come from these rounds. Some were also backed by live data once the web app launched.
              </p>
            </motion.div>

            {/* Results table */}
            <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden mb-8">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Hobpay results before and after the redesign</caption>
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th scope="col" className="px-4 md:px-6 py-3 text-xs font-normal text-[var(--text-600)] uppercase tracking-widest">Measure</th>
                    <th scope="col" className="px-2 md:px-6 py-3 text-xs font-normal text-[var(--text-600)] uppercase tracking-widest">Before</th>
                    <th scope="col" className="px-2 md:px-6 py-3 text-xs font-normal text-[var(--text-600)] uppercase tracking-widest">After</th>
                    <th scope="col" className="px-4 md:px-6 py-3 text-xs font-normal text-[var(--text-600)] uppercase tracking-widest text-right">Change</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'Satisfaction, out of 5', before: '3.2', after: '4.2', delta: '+1.0 point' },
                    { label: 'Bill payment completion', before: '45%', after: '85%', delta: '+40 points' },
                    { label: 'Feature discovery', before: '40%', after: '70%', delta: '+30 points' },
                    { label: 'Homepage time-on-task', before: '3.1 min', after: '1.1 min', delta: '−2.0 min' },
                  ].map((m) => (
                    <tr key={m.label} className="border-b border-[var(--border)] last:border-b-0">
                      <th scope="row" className="px-4 md:px-6 py-4 font-normal text-[var(--text-300)]">{m.label}</th>
                      <td className="px-2 md:px-6 py-4 text-[var(--text-500)] whitespace-nowrap">{m.before}</td>
                      <td className="px-2 md:px-6 py-4 text-[var(--text)] whitespace-nowrap">{m.after}</td>
                      <td className="px-4 md:px-6 py-4 text-[#F45D01] font-mono text-xs md:text-sm text-right whitespace-nowrap">{m.delta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-[var(--text-500)] leading-relaxed px-4 md:px-6 py-4 border-t border-[var(--border)]">
                Platform reach: the web build made the product reachable on every platform, including iOS, for the 28% of potential users who couldn't get in before.
              </p>
            </motion.div>

            {/* 5-user tests, separate round */}
            <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden mb-12">
              <div className="px-4 md:px-6 pt-5 pb-3">
                <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-2">Round 02 in detail: 5-user usability tests</p>
                <p className="text-xs text-[var(--text-500)] leading-relaxed max-w-2xl">
                  Counts out of five people, from the small usability tests on the existing app and the re-test on the redesign. They are a separate measure from the completion rate above.
                </p>
              </div>
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Five-user usability test results, existing app and redesign</caption>
                <thead>
                  <tr className="border-y border-[var(--border)]">
                    <th scope="col" className="px-4 md:px-6 py-3 text-xs font-normal text-[var(--text-600)] uppercase tracking-widest">Task</th>
                    <th scope="col" className="px-2 md:px-6 py-3 text-xs font-normal text-[var(--text-600)] uppercase tracking-widest">Existing app</th>
                    <th scope="col" className="px-4 md:px-6 py-3 text-xs font-normal text-[var(--text-600)] uppercase tracking-widest">Redesign</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'Completed a bill payment', before: '1 of 5', after: '3 of 5' },
                    { label: 'Found the investment section (Rintegra) clearly', before: '0 of 5', after: '2 of 5' },
                  ].map((m) => (
                    <tr key={m.label} className="border-b border-[var(--border)] last:border-b-0">
                      <th scope="row" className="px-4 md:px-6 py-4 font-normal text-[var(--text-300)]">{m.label}</th>
                      <td className="px-2 md:px-6 py-4 text-[var(--text-500)] whitespace-nowrap">{m.before}</td>
                      <td className="px-4 md:px-6 py-4 text-[var(--text)] whitespace-nowrap">{m.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* Long-term impact */}
            <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4">
                <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-3">Long-term Value</p>
                <h3 className="text-xl font-semibold">What It Led To</h3>
              </div>
              <div className="lg:col-span-7 lg:col-start-6 space-y-3">
                {[
                  'A web-first build solved the iOS problem in weeks, not the 12 months a native app would have taken',
                  'The web platform became the base for later mobile app updates, with components and patterns reused directly',
                  'The design system was used across the whole product and evolved over time',
                  'Hobpay met its investor transaction milestones over the same period',
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

        {/* ── Device renders ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          >
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>In Context</SectionLabel>
              <h2 className="text-2xl font-medium">Device renders</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {renders.map((r, i) => (
                <motion.div key={r.src} variants={fadeUp} custom={i % 3} className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] aspect-[4/3]">
                  <ImageZoom src={`${IMG}/${r.src}.webp`} alt={r.alt} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
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
