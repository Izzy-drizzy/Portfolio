import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpNarrowWide, ArrowDownNarrowWide } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';

const projects = [
  {
    number: '001',
    title: 'FreshRoute',
    tags: ['Product Design', 'Grocery & Delivery', 'Accessibility', 'WCAG 2.2 AA', 'UX Strategy', 'Design Leadership'],
    description:
      'Redesigned slot booking and substitutions for a UK grocery delivery platform. Competitive analysis across 6 platforms, 15 research interviews, and a tested high-fidelity prototype targeting £46M in recoverable revenue — from a slot grid 22% of shoppers abandoned to a personalised, accessible booking flow.',
    collaboration: 'Amdari',
    href: '/work/FreshRoute',
    images: [
      '/images/freshroute/slides/slide-1.png',
      '/images/freshroute/slides/slide-2.png',
      '/images/freshroute/slides/slide-3.png',
      '/images/freshroute/slides/slide-4.png',
      '/images/freshroute/slides/slide-5.png',
      '/images/freshroute/slides/slide-6.png',
      '/images/freshroute/slides/slide-7.png',
    ],
  },
  {
    number: '002',
    title: 'EduSmart Analytics',
    tags: ['EdTech', 'Analytics Dashboard', 'B2B SaaS', 'GDPR', 'Higher Education', 'Stakeholder Research'],
    description:
      'AI-powered student analytics platform for 200+ UK/Canadian universities. Stakeholder validation revealed 15/22 product assumptions were wrong — pivoting from student self-monitoring to a faculty intervention tool addressed £5M in at-risk contracts and cut scope 66%.',
    collaboration: 'Amdari',
    href: '/work/Edusmart',
    images: [
      '/images/edusmart/slide-1.png',
      '/images/edusmart/slide-2.png',
      '/images/edusmart/slide-3.png',
      '/images/edusmart/slide-4.png',
      '/images/edusmart/slide-5.png',
      '/images/edusmart/slide-6.png',
      '/images/edusmart/slide-7.png',
    ],
  },
  {
    number: '003',
    title: 'Hobpay',
    tags: ['Product Design', 'Fintech', 'Cross Platform', 'Regulatory Compliance', 'Investment'],
    description:
      'Strategic web-first redesign eliminating platform barriers for Nigerian fintech serving 10K+ users. Simplified navigation, streamlined service access, and progressive disclosure increased satisfaction 30% while recovering iOS-blocked users.',
    collaboration: null,
    href: '/work/Hobpay',
    images: [
      '/images/hobpay/slide-1.png',
      '/images/hobpay/slide-2.png',
      '/images/hobpay/slide-3.png',
      '/images/hobpay/slide-4.png',
      '/images/hobpay/slide-5.png',
      '/images/hobpay/slide-6.png',
    ],
  },
  {
    number: '004',
    title: 'Healf Zone 2.0',
    tags: ['Product Design', 'Health Tech', 'Mobile Design', 'Wellbeing Intelligence', 'UX Strategy'],
    description:
      'Unsolicited case study for Healf\'s Founding Lead Product Designer role. A blueprint for Healf\'s wellbeing intelligence vision — transforming Zone from a twice-yearly testing service into a continuous companion that interprets biomarkers, guides adaptive protocols, and integrates commerce as a natural extension of care.',
    collaboration: null,
    href: '/work/healf-zone-2',
    images: [
      '/images/healf-zone2/slides/slide-1.png',
      '/images/healf-zone2/slides/slide-2.png',
      '/images/healf-zone2/slides/slide-3.png',
      '/images/healf-zone2/slides/slide-4.png',
      '/images/healf-zone2/slides/slide-5.png',
      '/images/healf-zone2/slides/slide-6.png',
    ],
  },
  {
    number: '005',
    title: 'Nexora',
    tags: ['Product Design', 'Enterprise Recruitment', 'Two-Sided Platform', 'AI Screening', 'Coded Prototype', 'Agile'],
    description:
      'Designed a two-sided recruitment platform for a 14,000-person enterprise across 22 countries. Recruiter dashboard and candidate portal as one connected system — 14 screens, prototyped in code, with AI-assisted screening and a self-closing scheduling loop.',
    collaboration: 'Amdari',
    href: '/work/Nexora',
    images: [
      '/images/nexora/slides/slide-1.png',
      '/images/nexora/slides/slide-2.png',
      '/images/nexora/slides/slide-3.png',
    ],
  },
  {
    number: '006',
    title: 'UrbanNest',
    tags: ['Product Design', 'PropTech', 'Mobile-First', 'AI-Powered', 'Commute Data', 'B2C'],
    description:
      'Mobile-first property search platform for UK renters. Worked with PMs and BAs to scope the Sprint 1 MVP around three high-pain problems: commute checks happening outside the app, filters that don\'t work on mobile, and no personalisation on first use. 8 screens delivered across a 4-week sprint.',
    collaboration: 'Amdari',
    href: '/work/UrbanNest',
    images: [
      '/images/urbannest/slides/slide-1.png',
      '/images/urbannest/slides/slide-2.png',
      '/images/urbannest/slides/slide-3.png',
      '/images/urbannest/slides/slide-4.png',
      '/images/urbannest/slides/slide-5.png',
    ],
  },
  {
    number: '007',
    title: 'Moolapay',
    tags: ['Product Design', 'Cryptocurrency', 'Financial Inclusion', 'Low Digital Literacy', 'Inclusive UX'],
    description:
      "Financial inclusion platform connecting underserved Nigerian communities to cryptocurrency and digital payments. Designed simplified navigation and visual language transcending literacy barriers, with trust-building elements and culturally-aware interface patterns.",
    collaboration: null,
    href: '/work/Moolapay',
    images: [
      '/images/moolapay/slide-1.png',
      '/images/moolapay/slide-2.png',
      '/images/moolapay/slide-3.png',
      '/images/moolapay/slide-4.png',
    ],
  },
  {
    number: '008',
    title: 'Healf App Onboarding',
    tags: ['Product Design', 'UX Audit', 'Mobile Design', 'Onboarding', 'Health & Wellness'],
    description:
      "Redesigned Healf's onboarding flow to improve user discovery and engagement. Focused on creating a personalized first-run experience that connects users to the right wellness content faster.",
    collaboration: null,
    href: '/work/healf',
    images: [
      '/images/healf/slide-1.png',
      '/images/healf/slide-2.png',
      '/images/healf/slide-3.png',
    ],
  },
  {
    number: '009',
    title: 'Lead Trader',
    tags: ['Product Design', 'Stock Trading', 'Mobile Design', 'Reduced Cognitive Load', 'High Stress UX'],
    description:
      "Strategic demo redesign for parent company evaluating product overhaul. Identified critical UX issues; visual hierarchy chaos, data visualization gaps, expert-only assumptions, and redesigned core flows with progressive disclosure, performance indicators, and organized quick actions serving both novice and expert traders",
    collaboration: 'Artbox Studio',
    href: '/work/LeadTrader',
    images: [
      '/images/leadtrader/slide-1.png',
      '/images/leadtrader/slide-2.png',
      '/images/leadtrader/slide-3.png',
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

function MobileSlider({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 3500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [images.length]);

  return (
    <div className="mt-8 relative overflow-hidden rounded-xl" style={{ height: '56vw' }}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => {
              setCurrent(i);
              if (timerRef.current) clearInterval(timerRef.current);
              timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % images.length), 3500);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-white w-4' : 'bg-white/30 w-1.5'}`}
          />
        ))}
      </div>
    </div>
  );
}

function ImageMarquee({ images }: { images: string[] }) {
  const doubled = [...images, ...images];
  return (
    <div className="overflow-hidden mt-10">
      <div
        className="flex gap-4"
        style={{ animation: 'marquee 28s linear infinite', width: 'max-content' }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 rounded-xl overflow-hidden bg-[var(--surface)]"
            style={{ width: '42vw', height: '52vh' }}
          >
            <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Work() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [ascending, setAscending] = useState(true);

  const sortedProjects = ascending ? [...projects] : [...projects].reverse();

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans">
      <SEO
        title="Work"
        description="Case studies across fintech, health tech, edtech, and proptech. Product design from research through shipped screens."
        path="/work"
      />
      <Navigation onOpenContact={() => setIsContactModalOpen(true)} />

      <main className="pt-28">
        {/* Page Header */}
        <motion.div
          className="px-4 md:px-10 pb-12 flex items-end justify-between gap-4"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div>
            <p className="text-sm text-[var(--text-500)] mb-2">Work</p>
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight">
              Index of Work<span className="text-[#F45D01]">.</span>
            </h1>
          </div>

          <button
            onClick={() => setAscending((a) => !a)}
            className="flex items-center gap-2 border border-[var(--border-md)] text-[var(--text-400)] px-5 py-2.5 rounded-lg text-sm font-medium hover:text-[var(--text)] hover:border-[var(--text-400)] transition-colors flex-shrink-0 self-end mb-1"
            title={ascending ? 'Sort descending' : 'Sort ascending'}
          >
            {ascending ? <ArrowUpNarrowWide size={15} /> : <ArrowDownNarrowWide size={15} />}
            <span className="hidden sm:inline">{ascending ? '001 → 0' + ('0' + projects.length).slice(-2) : '0' + ('0' + projects.length).slice(-2) + ' → 001'}</span>
          </button>
        </motion.div>

        {/* Project List */}
        <div className="px-4 md:px-10 py-10 flex flex-col gap-12">
        {sortedProjects.map((project, i) => (
          <motion.section
            key={project.number}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {/* Info Row */}
            <div className="px-5 md:px-8 pt-8 flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8">
              <motion.div className="flex-1 min-w-0" variants={fadeUp} custom={0}>
                <p className="text-xs text-[var(--text-500)] mb-1">({project.number})</p>
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-5">
                  {project.title}
                </h2>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs border border-[var(--border-md)] text-[var(--text-400)] px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm text-[var(--text-300)] leading-relaxed max-w-lg mb-4">
                  {project.description}
                </p>

                {/* Collaboration */}
                {project.collaboration && (
                  <div className="text-xs text-[var(--text-500)]">
                    <span>In collaboration with</span>
                    <br />
                    <span className="text-[var(--text-400)]">{project.collaboration}</span>
                  </div>
                )}
              </motion.div>

              {/* View Case Study */}
              <motion.div variants={fadeUp} custom={1} className="self-start flex-shrink-0 md:mt-1">
                <Link
                  to={project.href}
                  className="flex items-center gap-2 bg-[var(--btn-bg)] text-[var(--btn-text)] px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors"
                >
                  <ArrowRight size={15} />
                  View Case Study
                </Link>
              </motion.div>
            </div>

            {/* Images — full-width slider on mobile, marquee on desktop */}
            <motion.div variants={fadeUp} custom={2}>
              <div className="block md:hidden px-5 pb-2">
                <MobileSlider images={project.images} />
              </div>
              <div className="hidden md:block">
                <ImageMarquee images={project.images} />
              </div>
            </motion.div>

            <div className="pb-8" />
          </motion.section>
        ))}
        </div>
      </main>

      <Footer />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
