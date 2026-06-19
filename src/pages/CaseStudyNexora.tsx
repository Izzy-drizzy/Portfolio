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
  '/images/nexora/slides/slide-1.png',
  '/images/nexora/slides/slide-2.png',
  '/images/nexora/slides/slide-3.png',
];

const recruiterScreens = [
  { src: '/images/nexora/wireframes/r1-login.png', label: 'R1 — Login' },
  { src: '/images/nexora/wireframes/r2-dashboard.png', label: 'R2 — Recruiter Dashboard' },
  { src: '/images/nexora/wireframes/r3-job-listings.png', label: 'R3 — Job Listings' },
  { src: '/images/nexora/wireframes/r4-candidate-list.png', label: 'R4 — Candidate List (per role)' },
  { src: '/images/nexora/wireframes/r5-applicant-profile.png', label: 'R5 — Applicant Profile & Screening' },
  { src: '/images/nexora/wireframes/r6-schedule-interview.png', label: 'R6 — Schedule Interview' },
  { src: '/images/nexora/wireframes/r7-pipeline-board.png', label: 'R7 — Pipeline Board (Kanban)' },
  { src: '/images/nexora/wireframes/r8-offer-management.png', label: 'R8 — Offer Management' },
  { src: '/images/nexora/wireframes/r9-analytics.png', label: 'R9 — Analytics & KPI Dashboard' },
];

const candidateScreens = [
  { src: '/images/nexora/wireframes/c1-public-listings.png', label: 'C1 — Public Job Listings' },
  { src: '/images/nexora/wireframes/c2-application-form.png', label: 'C2 — Application Form' },
  { src: '/images/nexora/wireframes/c3-confirmation.png', label: 'C3 — Application Submitted' },
  { src: '/images/nexora/wireframes/c4-status-tracker.png', label: 'C4 — Application Status Tracker' },
  { src: '/images/nexora/wireframes/c5-book-interview.png', label: 'C5 — Book Interview Slot' },
];

const tags = ['Product Design', 'Enterprise Recruitment', 'Two-Sided Platform', 'AI Screening', 'Coded Prototype', 'Agile'];

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

export default function CaseStudyNexora() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SEO title="Nexora Case Study" description="Designed a two-sided recruitment platform for a 14,000-person enterprise — recruiter dashboard and candidate portal as one connected system, prototyped in code across 14 screens." path="/work/Nexora" />
      <Navigation onOpenContact={() => setIsContactModalOpen(true)} />

      <main>
        {/* ── HERO ── */}
        <section className="min-h-screen pt-28 pb-16 px-4 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
            <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
              <motion.div variants={fadeUp} className="flex items-center gap-2 text-xs text-[var(--text-500)] mb-6">
                <Link to="/work" className="hover:text-[var(--text-300)] transition-colors">Case Studies</Link>
                <span>/</span>
                <span>Nexora</span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight mb-6">
                Two users, one system, zero shared screens
              </motion.h1>

              <motion.p variants={fadeUp} className="text-sm text-[var(--text-400)] leading-relaxed mb-6">
                Nexora Solutions is a Toronto enterprise tech consultancy with 14,000+ staff across 22 countries. Hiring at that scale ran on spreadsheets and inbox archaeology. I designed a recruiter platform and candidate portal as one connected system — 14 screens, prototyped in code, scoped honestly to what a sprint can deliver.
              </motion.p>

              <motion.div variants={fadeUp} className="flex items-center gap-2 text-xs text-[var(--text-500)] mb-8">
                <span>2026 — PRD-anchored sprint</span>
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

          <motion.div
            className="lg:col-span-7 rounded-xl overflow-hidden bg-[var(--surface)]"
            style={{ height: '65vh' }}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ImageCarousel images={images} alt="Nexora mockup" />
          </motion.div>
        </section>

        {/* ── SUMMARY STATS ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {[
              { val: '50%', label: 'Target reduction in manual CV screening time through AI-assisted matching and recruiter decision flow' },
              { val: '30%', label: 'Target reduction in scheduling bottlenecks by closing the recruiter-candidate booking loop' },
              { val: '20%', label: 'Target lift in candidate satisfaction by eliminating post-application silence' },
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
              <h2 className="text-2xl md:text-3xl font-medium mb-4">Five pain points from the PRD</h2>
              <p className="text-sm text-[var(--text-400)] leading-relaxed max-w-2xl">
                The PRD did the diagnosis — a luxury you don't always get. At Nexora's scale, every small friction multiplied across 22 countries. A scheduling delay that costs a day in one office costs a week across a chain of them.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                {
                  n: '01',
                  title: 'Manual CV Screening',
                  body: 'Recruiters screening CVs by hand with no way to see a role\'s pipeline at a glance. Every hire started with hours of reading before a single decision.',
                },
                {
                  n: '02',
                  title: 'Scheduling Bottlenecks',
                  body: 'Interview scheduling meant back-and-forth email chains to line up a candidate and interviewer across time zones. Distributed teams multiplied every delay.',
                },
                {
                  n: '03',
                  title: 'Candidate Silence',
                  body: 'Candidates who hit submit heard nothing. That silence drove a poor experience and mid-process abandonment — nobody trusted the process to go anywhere.',
                },
              ].map((p) => (
                <motion.div key={p.n} variants={fadeUp}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <span className="text-xs text-[#F45D01] font-mono block mb-3">{p.n}</span>
                  <h3 className="text-base font-semibold mb-2">{p.title}</h3>
                  <p className="text-xs text-[var(--text-400)] leading-relaxed">{p.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── ROLE & TEAM ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>Role & Team</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-medium mb-4">Product Design Consultant, Amdari</h2>
              <p className="text-sm text-[var(--text-400)] leading-relaxed max-w-2xl">
                I owned the design end of the ideation and prototyping phase: information architecture, the full screen map for both user types, the lo-fi prototype, and the annotations that tied every screen back to a PRD pain point. Working alongside the client's PMs and BAs in an Agile setup.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-3">What I Did</p>
                <ul className="space-y-1.5">
                  {[
                    'Information architecture for the full 14-screen system',
                    'Screen mapping for two user types (recruiter + candidate)',
                    'Three wireframe iterations — lo-fi through to coded prototype',
                    'Annotations tying every screen to a PRD pain point',
                    'Built working HTML prototype using Claude Code',
                  ].map((s) => (
                    <li key={s} className="flex gap-2 text-xs text-[var(--text-400)] leading-relaxed">
                      <span className="text-[var(--border-md)] flex-shrink-0">–</span>{s}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-3">Scope Boundary</p>
                <p className="text-xs text-[var(--text-400)] leading-relaxed mb-3">
                  What I did not do matters as much as what I did. Out of scope for this phase:
                </p>
                <ul className="space-y-1.5">
                  {[
                    'Backend development and live database configuration',
                    'Real calendar integrations',
                    'User acceptance testing',
                    'Deployment',
                  ].map((s) => (
                    <li key={s} className="flex gap-2 text-xs text-[var(--text-400)] leading-relaxed">
                      <span className="text-[var(--border-md)] flex-shrink-0">–</span>{s}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[var(--text-500)] leading-relaxed mt-3 italic">
                  The prototype simulates the system. It does not run it.
                </p>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="mt-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-2">Sprint Timeline</p>
              <p className="text-xs text-[var(--text-600)] pt-1">PRD-anchored sprint — three wireframe iterations, from 5 screens to 14, rebuilt from scratch on the third pass</p>
            </motion.div>
          </motion.div>
        </section>

        {/* ── KEY DESIGN DECISIONS ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>Key Design Decisions</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-medium mb-4">Making two halves behave like one system</h2>
              <p className="text-sm text-[var(--text-400)] leading-relaxed max-w-2xl">
                The platform serves two people who never see the same screen: a recruiter inside nexora.internal, and a candidate on careers.nexora.com. The interesting design work was in making those two halves behave like one system.
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  n: '01',
                  title: 'The scheduling loop closes itself',
                  reasoning: 'The usual fix is to make the recruiter\'s side faster. I made the two sides talk to each other instead. When a recruiter sets up an interview (R6), the system pulls interviewer availability and generates real bookable slots. The candidate gets those exact slots on their booking screen (C5) and picks one. No email chain, no human relaying times across time zones.',
                  insight: 'Designing R6 and C5 as a pair rather than two separate features is what removes the bottleneck the PRD was actually complaining about.',
                },
                {
                  n: '02',
                  title: 'Moving a card sends the message',
                  reasoning: 'On the pipeline board (R7), moving a candidate\'s card from one stage to the next triggers an automated update to that candidate. The recruiter doesn\'t write anything or remember to send anything. The status tracker on the candidate side (C4) updates from the same event.',
                  insight: 'Silence gets fixed as a byproduct of normal recruiter behaviour — the only kind of fix that survives a busy week.',
                },
                {
                  n: '03',
                  title: 'AI screens, the recruiter decides',
                  reasoning: 'The applicant profile screen (R5) leads with an AI match score and a generated summary of the candidate against the role, then puts Advance and Reject as the primary actions for a human to take. The AI does the reading. The recruiter makes the call and can override the score whenever they disagree.',
                  insight: 'Augmentation with the judgment left where it belongs — the framing that makes the time saving real without asking anyone to trust a black box.',
                },
                {
                  n: '04',
                  title: 'Kill the silence at the moment of applying',
                  reasoning: 'The candidate application form (C2) is short and progressive rather than a wall of fields, and uploading a CV is what triggers the AI parsing on the recruiter side. The confirmation screen (C3) immediately sets expectations about what happens next.',
                  insight: 'The first fix for radio silence is to never let it start. Abandonment begins before submission, not after.',
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
                  title: 'Two users, one coherent product',
                  challenge: 'The hardest part was not either flow on its own. It was making an internal enterprise tool and a public-facing candidate portal feel like the same system when they have opposite priorities.',
                  solution: 'The recruiter side optimises for density and speed. The candidate side optimises for reassurance and clarity. Holding both in one design language took more revision than any single screen.',
                },
                {
                  n: '02',
                  title: 'Knowing when to stop iterating',
                  challenge: 'Three versions is the right number here, but it could easily have been six. Iteration without a stopping rule is just decoration.',
                  solution: 'The PRD scope was the stopping rule: when every in-scope deliverable had a screen and every screen answered a pain point, the prototype was finished — regardless of how much more I could have added.',
                },
                {
                  n: '03',
                  title: 'Designing against targets I cannot yet measure',
                  challenge: 'The 50/30/20 numbers are the client\'s, and the prototype is pre-testing. The temptation to present the work as if targets were already hit was real.',
                  solution: 'The discipline was to design clearly toward each target and resist dressing the work up as results. Every decision names the pain point it serves. None claims a result that hasn\'t happened.',
                },
              ].map((c) => (
                <motion.div key={c.n} variants={fadeUp}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-4">
                    <span className="text-xs text-[#F45D01] font-mono block mb-3">{c.n}</span>
                    <h3 className="text-base font-semibold">{c.title}</h3>
                  </div>
                  <div className="lg:col-span-7 lg:col-start-6 space-y-4">
                    <div>
                      <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-2">The challenge</p>
                      <p className="text-sm text-[var(--text-400)] leading-relaxed">{c.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">How I handled it</p>
                      <p className="text-sm text-[var(--text-300)] leading-relaxed">{c.solution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── SOLUTION ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>Solution</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-medium mb-4">Two flows that work as one mechanism</h2>
              <p className="text-sm text-[var(--text-400)] leading-relaxed max-w-2xl">
                The recruiter platform runs as one continuous flow from dashboard to analytics. The candidate portal mirrors it from the other side. Every candidate-facing update is driven by a recruiter action on the other side of the loop.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden">
                <div className="px-5 py-4 border-b border-[var(--border)]">
                  <p className="font-semibold text-sm">Recruiter Platform — 9 screens</p>
                  <p className="text-xs text-[var(--text-500)] mt-0.5">nexora.internal</p>
                </div>
                <div className="p-5 space-y-4">
                  <div>
                    <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">The Flow</p>
                    <ul className="space-y-1.5">
                      {[
                        'Dashboard surfacing pipeline status and urgent actions',
                        'Job listings into candidate list ranked by AI match score',
                        'Applicant profile with AI summary and human Advance/Reject',
                        'Schedule directly into bookable slots',
                        'Kanban pipeline board that notifies as it moves',
                        'Offer management and analytics dashboard with PRD KPIs',
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
                  <p className="font-semibold text-sm">Candidate Portal — 5 screens</p>
                  <p className="text-xs text-[var(--text-500)] mt-0.5">careers.nexora.com</p>
                </div>
                <div className="p-5 space-y-4">
                  <div>
                    <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">The Flow</p>
                    <ul className="space-y-1.5">
                      {[
                        'Browse roles with clear requirements and team context',
                        'Short, progressive application form — CV upload triggers AI parsing',
                        'Immediate confirmation with real expectations',
                        'Status tracker updating from recruiter pipeline actions',
                        'Self-service interview booking into recruiter\'s actual availability',
                      ].map((s) => (
                        <li key={s} className="flex gap-2 text-xs text-[var(--text-400)] leading-relaxed">
                          <span className="text-[var(--border-md)] flex-shrink-0">–</span>{s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ── WIREFRAMES — RECRUITER ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} className="mb-8">
              <SectionLabel>Wireframes — Recruiter Flow</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-medium">9 screens from login to analytics</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {recruiterScreens.map((img, i) => (
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

        {/* ── WIREFRAMES — CANDIDATE ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} className="mb-8">
              <SectionLabel>Wireframes — Candidate Flow</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-medium">5 screens from browse to booked interview</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {candidateScreens.map((img, i) => (
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
              <h2 className="text-2xl md:text-3xl font-medium mb-4">Try the coded prototype</h2>
              <p className="text-sm text-[var(--text-400)] leading-relaxed max-w-xl mx-auto">
                Built with Claude Code as a working HTML prototype rather than static frames. Click through the recruiter dashboard, pipeline board, and candidate portal to see how the two sides connect.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="rounded-2xl border-2 border-[var(--border-md)] bg-[var(--surface)] p-2 shadow-2xl max-w-5xl mx-auto">
                <div className="rounded-xl overflow-hidden bg-white" style={{ aspectRatio: '16/10' }}>
                  <iframe
                    src="https://nexora-recruit.vercel.app/"
                    title="Nexora Recruit interactive prototype"
                    className="w-full h-full border-0"
                    allow="fullscreen"
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="text-center text-xs text-[var(--text-600)] mt-4">Navigate the prototype to explore both recruiter and candidate flows</p>
            </motion.div>
          </motion.div>
        </section>

        {/* ── WHAT COMES NEXT ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>Where It Stands</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-medium mb-4">A phase deliverable, not a shipped product</h2>
              <p className="text-sm text-[var(--text-400)] leading-relaxed max-w-2xl">
                The prototype is built, annotated, and ready for stakeholder review. The honest version of where this stands is more useful than a polished one.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Stakeholder review', desc: 'With the client\'s PMs and BAs, then incorporating that feedback into the design.' },
                { title: 'Mid-fidelity push', desc: 'If the lo-fi structure holds up under review, elevate the visual fidelity.' },
                { title: 'Figma rebuild', desc: 'Formal Phase 4 handoff artefact for the engineering team.' },
                { title: 'Usability testing', desc: 'Against the three PRD targets once there is a testable build — none of the numbers mean anything until real users move through real flows.' },
              ].map((s) => (
                <motion.div key={s.title} variants={fadeUp}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <p className="text-sm font-medium mb-1">{s.title}</p>
                  <p className="text-xs text-[var(--text-400)] leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── REFLECTION ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="max-w-2xl">
              <SectionLabel>Reflection</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-medium mb-6">Systems, not screens</h2>
              <p className="text-sm text-[var(--text-400)] leading-relaxed mb-4">
                The decisions I'm proudest of — the scheduling loop and the move-a-card-send-a-message pattern — are not really about how anything looks. They're about two screens behaving as one mechanism. The best fix for the candidate's experience lived inside the recruiter's workflow, and I would have missed it if I had designed the two flows separately instead of as halves of the same thing.
              </p>
              <p className="text-sm text-[var(--text-400)] leading-relaxed">
                Prototyping in code with Claude Code let me work faster than I could have otherwise, and being open that two of my three iterations were partly wrong, and that this is a phase deliverable rather than a shipped product, costs me nothing and makes the work easier to trust.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ── NEXT CTA ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          >
            <motion.div variants={fadeUp}>
              <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-3">Next Case Study</p>
              <h2 className="text-2xl md:text-3xl font-medium mb-2">UrbanNest</h2>
              <p className="text-sm text-[var(--text-400)] max-w-md leading-relaxed">
                Mobile-first property search platform for UK renters, scoped around three high-pain problems across a 4-week sprint.
              </p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link to="/work/UrbanNest"
                className="flex items-center gap-2 bg-[var(--btn-bg)] text-[var(--btn-text)] px-6 py-3 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors shrink-0">
                View Case Study <ArrowRight size={15} />
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
