import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import ImageZoom from '../components/ImageZoom';

const images = [
  '/images/edusmart/slide-1.png',
  '/images/edusmart/slide-2.png',
  '/images/edusmart/slide-3.png',
  '/images/edusmart/slide-4.png',
  '/images/edusmart/slide-5.png',
  '/images/edusmart/slide-6.png',
  '/images/edusmart/slide-7.png',
];

const finalDesigns = [
  { src: '/images/edusmart/final-1.png', label: 'Student Onboarding — Step 1' },
  { src: '/images/edusmart/final-2.png', label: 'Student Onboarding — Step 2 (Consent)' },
  { src: '/images/edusmart/final-3.png', label: 'Student Dashboard' },
  { src: '/images/edusmart/final-4.png', label: 'Student Settings' },
  { src: '/images/edusmart/final-5.png', label: 'Instructor Dashboard' },
  { src: '/images/edusmart/final-6.png', label: 'Instructor — At-Risk Students List' },
  { src: '/images/edusmart/final-7.png', label: 'Admin Dashboard' },
  { src: '/images/edusmart/final-8.png', label: 'Admin — Compliance Dashboard' },
  { src: '/images/edusmart/final-9.png', label: 'Admin — Data Integration Status' },
];

const tags = ['EdTech', 'Analytics Dashboard', 'B2B SaaS', 'GDPR', 'Higher Education', 'Stakeholder Research'];

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
        <img key={i} src={src} alt={`EduSmart mockup ${i + 1}`}
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
          <button key={i} onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-white w-4' : 'bg-white/30 w-1.5'}`} />
        ))}
      </div>
    </div>
  );
}

export default function CaseStudyEdusmart() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#141414] text-[#E4E3E0]">
      <Navigation onOpenContact={() => setIsContactModalOpen(true)} />

      <main>
        {/* ── HERO ── */}
        <section className="min-h-screen pt-28 pb-16 px-5 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left — text */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
            <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>

              <motion.div variants={fadeUp} className="flex items-center gap-2 text-xs text-gray-500 mb-6">
                <Link to="/work" className="hover:text-gray-300 transition-colors">Case Studies</Link>
                <span>/</span>
                <span>EduSmart Analytics</span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight mb-6">
                Preventing £5M revenue loss through stakeholder validation
              </motion.h1>

              <motion.p variants={fadeUp} className="text-sm text-gray-400 leading-relaxed mb-6">
                Student analytics platform for 200+ universities across the UK and Canada. We ran assumption-testing workshops before building anything — 15 of 22 assumptions were wrong. That discovery changed the entire product direction, and protected £5M in contracts.
              </motion.p>

              <motion.div variants={fadeUp} className="flex items-center gap-2 text-xs text-gray-500 mb-8">
                <span>2026 (Ongoing)</span>
                <span className="w-1 h-1 rounded-full bg-gray-700" />
                <span>Product Design Consultant @ Amdari</span>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="text-xs border border-gray-700 text-gray-400 px-3 py-1 rounded-full">{t}</span>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right — carousel */}
          <motion.div
            className="lg:col-span-7 rounded-xl overflow-hidden bg-[#1A1A1A]"
            style={{ height: '65vh' }}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ImageCarousel />
          </motion.div>
        </section>

        {/* ── SUMMARY STATS ── */}
        <section className="px-5 md:px-10 py-16 border-t border-gray-800">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {[
              { val: '15/22', label: 'Assumptions rejected through stakeholder validation' },
              { val: '66%', label: 'Scope reduction — 58 features down to 20 validated' },
              { val: '88%', label: 'Task completion rate in usability testing' },
              { val: '£5M', label: 'Annual contracts protected through focused delivery' },
            ].map((s) => (
              <motion.div key={s.val} variants={fadeUp}
                className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-6">
                <p className="text-3xl md:text-4xl font-semibold text-[#F45D01] mb-2">{s.val}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── PROBLEM FRAMING ── */}
        <section className="px-5 md:px-10 py-16 border-t border-gray-800">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>Problem Framing</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">A £5M crisis hiding inside a reporting lag</h2>
              <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">
                EduSmart Analytics — founded 2017, serving 200+ institutions with 6% UK market share — faced a post-COVID inflection point. 48-hour reporting delays were preventing early student intervention, and three major university clients were actively evaluating competitors.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                {
                  n: '01',
                  title: '48-Hour Reporting Lag',
                  body: 'Students were flagged as at-risk too late for intervention to help. Faculty were spending 5–6 hours per week tracking cohorts manually in Excel.',
                },
                {
                  n: '02',
                  title: 'Scalability Failure',
                  body: 'Performance degraded above 100,000 students. Data was split across Blackboard, Moodle, Canvas, and HR systems with no single view across all of them.',
                },
                {
                  n: '03',
                  title: '£5M Revenue at Risk',
                  body: '3 major university contracts were actively evaluating US EdTech competitors. GDPR pressure around AI-driven analytics was giving clients a reason to look elsewhere.',
                },
              ].map((p) => (
                <motion.div key={p.n} variants={fadeUp}
                  className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-6">
                  <span className="text-xs text-[#F45D01] font-mono block mb-3">{p.n}</span>
                  <h3 className="text-sm font-semibold mb-2">{p.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{p.body}</p>
                </motion.div>
              ))}
            </div>

            {/* The critical discovery callout */}
            <motion.div variants={fadeUp}
              className="rounded-xl border border-[#F45D01]/20 bg-[#F45D01]/5 p-6 md:p-8">
              <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-3">The Critical Discovery</p>
              <p className="text-sm text-gray-300 leading-relaxed max-w-3xl">
                Through stakeholder validation workshops with 15 participants, I discovered 15 out of 22 initial product assumptions were wrong. We weren't just over-designing — we were building the wrong product entirely. The pivot: cut scope from 58 to 20 validated features and shift focus from student self-monitoring to faculty intervention.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ── ROLE & TEAM ── */}
        <section className="px-5 md:px-10 py-16 border-t border-gray-800">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>Role & Team</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Product Design Consultant, Amdari</h2>
              <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">
                Engaged as the sole UX/UI lead within a cross-functional Scrum team — working alongside a Project Manager and Business Analyst in 2-week sprints, with weekly reviews involving EduSmart's product and engineering stakeholders.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={fadeUp} className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-6">
                <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-4">My Responsibilities</p>
                <ul className="space-y-2.5">
                  {[
                    'Journey mapping workshops — 2 flows, 12 participants',
                    'Created 4 validated user personas across 3 role types',
                    'Led stakeholder validation workshops (15 participants, 22 assumptions tested)',
                    'Wireframed 58 initial features, then streamlined to 20',
                    'Hi-fi designs for 3 dashboards + 6 secondary pages',
                    'Interactive Figma prototypes for usability testing',
                    'Recruited and tested with 15 users — 88% task completion',
                  ].map((r) => (
                    <li key={r} className="flex gap-2.5 text-xs text-gray-400 leading-relaxed">
                      <span className="text-[#F45D01] mt-0.5 flex-shrink-0">+</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-6">
                <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-4">Team Structure</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-300 mb-1.5">Amdari Consulting Team</p>
                    <ul className="space-y-1.5">
                      {[
                        ['Bukunmi (Me)', 'Product Design Consultant — full UX/UI ownership'],
                        ['Project Manager', 'Scrum facilitation, sprint planning, stakeholder management'],
                        ['Business Analyst', 'Requirements gathering, feature prioritisation, acceptance criteria'],
                      ].map(([name, role]) => (
                        <li key={name} className="text-xs text-gray-400">
                          <span className="text-gray-300 font-medium">{name}</span> — {role}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-300 mb-1.5">EduSmart Stakeholders</p>
                    <ul className="space-y-1.5">
                      {[
                        'Product & Engineering teams (weekly sprint reviews)',
                        '15 validation workshop participants (5 students, 5 faculty, 5 admins)',
                        '12 journey mapping workshop participants',
                      ].map((s) => (
                        <li key={s} className="text-xs text-gray-400">– {s}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-gray-600 pt-1">Methodology: Agile/Scrum — 2-week sprints, daily standups</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ── RESEARCH APPROACH ── */}
        <section className="px-5 md:px-10 py-16 border-t border-gray-800">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>Research & Approach</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">A 9-phase validation-first process</h2>
              <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">
                Before touching wireframes or visual design, I built a process to test every assumption with real stakeholders. Uncover real problems, test assumptions, design only validated solutions, then iterate through usability testing.
              </p>
            </motion.div>

            {/* Phases */}
            <div className="space-y-4 mb-12">
              {[
                {
                  phase: 'Phase 1–2',
                  title: 'Journey Mapping & Persona Creation',
                  detail: 'Ran workshops with 12 participants to map two flows: the student lifecycle and the faculty intervention workflow. Findings produced 4 personas — Maya Thompson (student, data-conscious), James Okafor (at-risk student), Dr. Sarah Chen (instructor, 280 students, Excel-dependent), David Robertson (admin, GDPR anxiety).',
                  quote: '"With 280 students, I can\'t monitor everyone by hand. I need to know WHO to help WHEN." — Dr. Sarah Chen',
                },
                {
                  phase: 'Phase 3–4',
                  title: 'UX Recommendations & Stakeholder Validation',
                  detail: 'Documented recommendations — then the BA and PM flagged a contradiction: we were recommending more analytics transparency while users said analytics were already too complex. That conflict shaped the validation framework: 22 assumptions across 3 user types, tested in 2-hour structured workshops.',
                  quote: 'Result: 15 of 22 assumptions REJECTED. We were building the wrong product.',
                },
                {
                  phase: 'Phase 5–7',
                  title: 'Wireframes → Hi-Fi → Prototype',
                  detail: 'Cut from 58 features to 20 validated ones. Designed 3 dashboards (Student, Instructor, Admin) and 6 secondary pages — desktop-first, because the research confirmed faculty work at desks, not on mobile. Built interactive Figma prototypes across 3 user flows for usability testing.',
                  quote: null,
                },
                {
                  phase: 'Phase 8–9',
                  title: 'Usability Testing & Success Metrics',
                  detail: '15 participants (5 per persona), 5 tasks each, unmoderated remote via Maze. Results: 88% task completion (target >80%), 4.2/5 satisfaction (target 4+), zero P0 bugs. Success metrics and handoff specs documented for the development team.',
                  quote: '"This is exactly what I need. Simple, fast, and tells me who to contact." — Instructor participant',
                },
              ].map((p) => (
                <motion.div key={p.phase} variants={fadeUp}
                  className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-3">
                    <span className="text-xs text-[#F45D01] font-mono block mb-1">{p.phase}</span>
                    <h3 className="text-sm font-semibold leading-snug">{p.title}</h3>
                  </div>
                  <div className="md:col-span-9">
                    <p className="text-sm text-gray-400 leading-relaxed mb-3">{p.detail}</p>
                    {p.quote && (
                      <p className="text-xs text-gray-500 italic border-l-2 border-gray-700 pl-3">{p.quote}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* The 3 Contradictions */}
            <motion.div variants={fadeUp} className="mb-4">
              <p className="text-sm font-semibold mb-4">The three critical contradictions that forced the pivot</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  n: '01',
                  title: 'Analytics Complexity vs Transparency',
                  before: 'We were designing more analytics transparency features',
                  after: 'Stakeholders said analytics were already too complex — would have made the problem worse',
                },
                {
                  n: '02',
                  title: 'Student Self-Monitoring vs Faculty Intervention',
                  before: 'We designed student self-monitoring as the primary workflow',
                  after: 'Students don\'t check dashboards weekly — faculty need to see who\'s struggling. Wrong primary user = wrong product',
                },
                {
                  n: '03',
                  title: 'Privacy Anxiety vs Institutional Compliance',
                  before: 'We designed 4 granular privacy toggles for student anxiety',
                  after: '"I trust the university. I just want to know it\'s GDPR compliant." One toggle replaced four.',
                },
              ].map((c) => (
                <motion.div key={c.n} variants={fadeUp}
                  className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-5">
                  <span className="text-xs text-[#F45D01] font-mono block mb-2">{c.n}</span>
                  <h3 className="text-xs font-semibold mb-4">{c.title}</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-1">Assumption</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{c.before}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-[#F45D01] uppercase tracking-widest mb-1">Reality</p>
                      <p className="text-xs text-gray-300 leading-relaxed">{c.after}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── CHALLENGES ── */}
        <section className="px-5 md:px-10 py-16 border-t border-gray-800">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>Challenges</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-semibold">What I had to overcome</h2>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  n: '01',
                  title: 'Convincing stakeholders to cut 66% of scope',
                  challenge: 'After validation rejected 15/22 assumptions, I had to explain to the PM, BA, and client stakeholders why 38 features should go. The pushback: "But users mentioned these in interviews."',
                  solution: 'Built a Feature Validation Matrix linking every feature to interview mentions and workshop validation. "At-risk student list" — mentioned by 5/5 faculty, validated: keep. "AI explainability dashboard" — mentioned once, not validated: cut. The data made the case. PM and BA aligned quickly; the client took two additional presentations but came around.',
                },
                {
                  n: '02',
                  title: 'Cross-functional coordination in Scrum as a consultant',
                  challenge: 'The BA had already written acceptance criteria for 58 features before validation showed 38 were unnecessary. Two-week sprint timelines didn\'t fit the longer validation cycles.',
                  solution: 'Proposed marking unvalidated features as "pending validation" so the BA could defer criteria without blocking progress. Design tasks were written as user stories for sprint planning. By Sprint 4 the team had a workable rhythm: BA on confirmed requirements, PM building workshop time into sprint planning, me delivering wireframes only for validated features.',
                },
                {
                  n: '03',
                  title: 'Designing for three very different user types simultaneously',
                  challenge: 'Students, instructors, and admins have different mental models, trust levels, and task frequencies. Early designs tried to serve all three equally, which made the platform overwhelming for all of them.',
                  solution: 'Validated that faculty is the primary retention driver. Cut student features from 18 to 8, admin from 18 to 4, and put the freed capacity into a thorough instructor intervention workflow. Each dashboard does one job well.',
                },
              ].map((c) => (
                <motion.div key={c.n} variants={fadeUp}
                  className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-3">
                    <span className="text-xs text-[#F45D01] font-mono block mb-1">{c.n}</span>
                    <h3 className="text-sm font-semibold leading-snug">{c.title}</h3>
                  </div>
                  <div className="lg:col-span-8 lg:col-start-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">Challenge</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{c.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">How I solved it</p>
                      <p className="text-sm text-gray-300 leading-relaxed">{c.solution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── SOLUTION ── */}
        <section className="px-5 md:px-10 py-16 border-t border-gray-800">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>Solution</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">A faculty intervention tool — not a student monitoring platform</h2>
              <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">
                Validation showed we had the primary user wrong. The redesign centred on one finding: retention value comes from faculty identifying and contacting struggling students early. Students checking their own dashboards didn't move the needle.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                {
                  user: 'Students',
                  count: '8 features',
                  screens: ['2-step onboarding (down from 5)', 'Simple dashboard — GPA, class rank, at-risk courses, Email Instructor CTA', 'Single consent toggle + data transparency (not 4 granular controls)'],
                  decision: 'Desktop-first — the mobile usage assumption was rejected in validation. Alerts are action-oriented: students want to know what to do, not just what\'s happening.',
                },
                {
                  user: 'Instructors',
                  count: '8 features (primary focus)',
                  screens: ['Dashboard: at-risk count (12), contacted this week (8), priority alerts', 'Colour-coded student list — red (High Risk), amber (Medium), blue (Watch)', 'Student detail view: risk factors, pre-written email template, Mark as Contacted'],
                  decision: 'Colour-coded severity lets instructors triage 100+ students at a glance. Pre-written email templates lower the barrier to outreach and keep messaging consistent.',
                },
                {
                  user: 'Admins',
                  count: '4 features',
                  screens: ['Dashboard: students monitored (15,000), flagged (47), GDPR PASS, consent 85%', 'Compliance dashboard: GDPR checklist (6 items), consent donut chart', 'Integration status: LMS 98% green, SIS 81% amber — Fix Issue CTA'],
                  decision: 'PASS/FAIL compliance status — admins need to know everything is fine, not to configure anything. Drill-down is available when something isn\'t.',
                },
              ].map((u) => (
                <motion.div key={u.user} variants={fadeUp}
                  className="rounded-xl border border-gray-800 bg-[#1A1A1A] overflow-hidden">
                  <div className="px-5 py-4 border-b border-gray-800">
                    <p className="font-semibold text-sm">{u.user}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{u.count}</p>
                  </div>
                  <div className="p-5 space-y-4">
                    <div>
                      <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">Key Screens</p>
                      <ul className="space-y-1.5">
                        {u.screens.map((s) => (
                          <li key={s} className="flex gap-2 text-xs text-gray-400 leading-relaxed">
                            <span className="text-gray-700 flex-shrink-0">–</span>{s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">Design Rationale</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{u.decision}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── FINAL DESIGNS ── */}
        <section className="px-5 md:px-10 py-16 border-t border-gray-800">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} className="mb-8">
              <SectionLabel>Final Designs</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-semibold">9 screens across 3 user types</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {finalDesigns.map((img, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="rounded-xl overflow-hidden bg-[#1A1A1A] border border-gray-800 group cursor-pointer">
                  <ImageZoom src={img.src} alt={img.label}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-[1.02] transition-transform duration-500" />
                  <div className="px-4 py-3">
                    <p className="text-xs text-gray-500">{img.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── RESULTS ── */}
        <section className="px-5 md:px-10 py-16 border-t border-gray-800">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>Results & Impact</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-semibold">Validated design, measurable outcomes</h2>
            </motion.div>

            {/* Usability metrics table */}
            <motion.div variants={fadeUp} className="rounded-xl border border-gray-800 bg-[#1A1A1A] overflow-hidden mb-6">
              <div className="px-6 py-4 border-b border-gray-800">
                <p className="text-xs text-gray-500 uppercase tracking-widest">Usability Testing Results</p>
              </div>
              <div className="divide-y divide-gray-800">
                {[
                  { label: 'Task Completion Rate', target: '>80%', result: '88% (66/75 tasks)', status: 'Exceeded' },
                  { label: 'Average Time Per Task', target: '<3 min', result: '2m 25s average', status: 'Met' },
                  { label: 'User Satisfaction', target: '4.0 / 5', result: '4.2 / 5', status: 'Exceeded' },
                  { label: 'Critical (P0) Bugs', target: '0', result: '0 found', status: 'Met' },
                ].map((r) => (
                  <div key={r.label} className="px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <span className="text-gray-300 text-xs font-medium">{r.label}</span>
                    <span className="text-gray-500 text-xs">{r.target}</span>
                    <span className="text-gray-300 text-xs">{r.result}</span>
                    <span className="text-xs text-[#F45D01]">{r.status}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Business impact cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { val: '£5M', label: 'Annual contracts retained', sub: '3 major universities stayed engaged after seeing the validated roadmap' },
                { val: '£125K+', label: 'Development costs avoided', sub: '38 unvalidated features removed before any code was written' },
                { val: '15 months', label: 'Of misdirected development avoided', sub: 'Testing assumptions first stopped the team from building the wrong product' },
              ].map((s) => (
                <motion.div key={s.val} variants={fadeUp}
                  className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-6">
                  <p className="text-2xl font-semibold text-[#F45D01] mb-1">{s.val}</p>
                  <p className="text-xs font-medium text-gray-300 mb-2">{s.label}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.div variants={fadeUp}
              className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-6 md:p-8">
              <p className="text-sm text-gray-300 italic mb-3 leading-relaxed">
                "Finally, someone actually asked us what we need instead of assuming."
              </p>
              <p className="text-xs text-gray-600">— EduSmart client stakeholder, post-validation workshop</p>
            </motion.div>
          </motion.div>
        </section>

        {/* ── NEXT CTA ── */}
        <section className="px-5 md:px-10 py-16 border-t border-gray-800">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <motion.div variants={fadeUp}>
              <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Next Case Study</p>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">Hobpay</h2>
              <p className="text-sm text-gray-400 max-w-md leading-relaxed">
                Web-first redesign that removed iOS barriers and brought 10K+ users to a Nigerian fintech platform.
              </p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link to="/work/Hobpay"
                className="flex items-center gap-2 bg-[#E4E3E0] text-[#141414] px-6 py-3 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors">
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
