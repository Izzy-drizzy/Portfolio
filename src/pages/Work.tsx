import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import AutoVideo, { isVideo, prefersReducedMotion } from '../components/AutoVideo';
import WorkLabel, { type WorkKind } from '../components/WorkLabel';

const projects = [
  {
    number: '001',
    title: 'Hobpay',
    imageAlt: 'Phone mockups of the redesigned Hobpay wallet and transaction screens',
    kind: 'Shipped product, in-house team' as WorkKind,
    tags: ['Product Design', 'Fintech', 'Cross Platform', 'Investment'],
    description:
      'Web-first redesign of a Nigerian fintech platform serving 10K+ users. The app ran on Android only with the iOS build delayed, so I moved the core experience to web. Simplified navigation and progressive disclosure brought satisfaction from 3.2 to 4.2/5.',
    collaboration: null,
    href: '/work/Hobpay',
    images: [
      '/images/hobpay/slide-1.webp',
      '/images/hobpay/slide-2.webp',
      '/images/hobpay/slide-3.webp',
      '/images/hobpay/slide-4.webp',
      '/images/hobpay/slide-5.webp',
      '/images/hobpay/slide-6.webp',
    ],
  },
  {
    number: '002',
    title: 'Artbox HQ',
    imageAlt: 'Artbox HQ screens on sample data: the lead list with priority scores, one lead with its health check findings, and the audit page a prospect sees',
    kind: 'Internal tool' as WorkKind,
    tags: ['Product Design', 'Built in React', 'CRM', 'Supabase', 'Lead Scoring'],
    description:
      "The CRM my studio runs on, which I designed and built. It finds and scores leads, checks each prospect's website and reviews, and builds a private audit page for each one. When hand-checks found 7 of 8 \"no contact form\" claims were false, I added a rule that a finding only reaches a prospect if the data proves it.",
    collaboration: null,
    href: '/work/artbox-hq',
    images: [
      '/images/artbox-hq/leads.webp',
      '/images/artbox-hq/lead-detail.webp',
      '/images/artbox-hq/audit-findings.webp',
      '/images/artbox-hq/pipeline.webp',
    ],
  },
  {
    number: '003',
    title: 'Nexora',
    imageAlt: 'Mockups of the Nexora recruiter dashboard and candidate portal screens',
    kind: 'Programme project' as WorkKind,
    tags: ['Product Design', 'Enterprise Recruitment', 'Two-Sided Platform', 'AI-Screening Flows', 'Working Prototype', 'Agile'],
    description:
      'Designed a two-sided recruitment platform for a 14,000-person enterprise across 22 countries. Recruiter dashboard and candidate portal as one connected system. 14 screens, built as a working prototype in Next.js and TypeScript, with designed flows for AI-assisted screening and a self-closing scheduling loop.',
    collaboration: 'Amdari Industry Programme',
    href: '/work/Nexora',
    images: [
      '/images/nexora/slides/slide-1.webp',
      '/images/nexora/slides/slide-2.webp',
      '/images/nexora/slides/slide-3.webp',
    ],
  },
  {
    number: '004',
    title: 'Lead Trader',
    imageAlt: 'Phone mockups of the redesigned Lead Trader stock trading app',
    kind: 'Client project' as WorkKind,
    tags: ['Product Design', 'Stock Trading', 'Mobile Design', 'Reduced Cognitive Load', 'High Stress UX'],
    description:
      "Demo redesign for a parent company deciding whether to invest in a full product overhaul. Audited the existing trading app, found visual hierarchy problems and an interface that only worked for expert traders. Redesigned 5 core screens with progressive disclosure so both novice and expert users could navigate the same product.",
    collaboration: 'Artbox Studio',
    href: '/work/LeadTrader',
    images: [
      '/images/leadtrader/slide-1.webp',
      '/images/leadtrader/slide-2.webp',
      '/images/leadtrader/slide-3.webp',
    ],
  },
  {
    number: '005',
    title: 'Moolapay',
    imageAlt: 'Phone mockups of the Moolapay payments app, with icon-led screens',
    kind: 'Client project' as WorkKind,
    tags: ['Product Design', 'Cryptocurrency', 'Financial Inclusion', 'Low Digital Literacy', 'Inclusive UX'],
    description:
      "Cryptocurrency payments app for users in Nigeria with low digital literacy. Designed a visual-first interface that works across 4 literacy levels, using icons over text, progressive onboarding, and culturally relevant trust patterns to reduce drop-off.",
    collaboration: null,
    href: '/work/Moolapay',
    images: [
      '/images/moolapay/slide-1.webp',
      '/images/moolapay/slide-2.webp',
      '/images/moolapay/slide-3.webp',
      '/images/moolapay/slide-4.webp',
    ],
  },
  {
    number: '006',
    title: 'EduSmart Analytics',
    imageAlt: 'Phone mockups of the EduSmart student dashboard and privacy settings screens',
    kind: 'Programme project' as WorkKind,
    tags: ['EdTech', 'Analytics Dashboard', 'B2B SaaS', 'GDPR', 'Higher Education', 'Stakeholder Research'],
    description:
      'AI-powered student analytics platform for 200+ UK/Canadian universities. Stakeholder validation revealed 15/22 product assumptions were wrong. Pivoting from student self-monitoring to a faculty intervention tool, against £5M of contracts at risk, cut scope 66%.',
    collaboration: 'Amdari Industry Programme',
    href: '/work/Edusmart',
    images: [
      '/images/edusmart/slide-1.webp',
      '/images/edusmart/slide-2.webp',
      '/images/edusmart/slide-3.webp',
      '/images/edusmart/slide-4.webp',
      '/images/edusmart/slide-5.webp',
      '/images/edusmart/slide-6.webp',
      '/images/edusmart/slide-7.webp',
    ],
  },
  {
    number: '007',
    title: 'UrbanNest',
    imageAlt: 'Phone mockups of the UrbanNest property search, with commute times on each listing card',
    kind: 'Programme project' as WorkKind,
    tags: ['Product Design', 'PropTech', 'Mobile-First', 'Commute Data', 'B2C'],
    description:
      'Mobile-first property search platform for UK renters. Worked with PMs and BAs to scope the Sprint 1 MVP around three high-pain problems: commute checks happening outside the app, filters that don\'t work on mobile, and no personalisation on first use. 8 screens delivered across a 4-week sprint.',
    collaboration: 'Amdari Industry Programme',
    href: '/work/UrbanNest',
    images: [
      '/images/urbannest/slides/slide-1.webp',
      '/images/urbannest/slides/slide-2.webp',
      '/images/urbannest/slides/slide-3.webp',
      '/images/urbannest/slides/slide-4.webp',
      '/images/urbannest/slides/slide-5.webp',
    ],
  },
  {
    number: '008',
    title: 'Healf Zone 2.0',
    imageAlt: 'Phone mockups of the Healf Zone 2.0 results and check-in screens',
    kind: 'Self-set brief' as WorkKind,
    tags: ['Product Design', 'Health Tech', 'Mobile Design', 'Wellbeing Intelligence', 'UX Strategy'],
    description:
      'Self-set 14-day sprint against Healf\'s published Founding Lead Product Designer brief. Designed the product vision for evolving Zone from a twice-yearly testing service into something users come back to between tests: biomarker interpretation, adaptive protocols, and commerce tied to what their results actually say.',
    collaboration: null,
    href: '/work/healf-zone-2',
    images: [
      '/images/healf-zone2/slides/slide-1.webp',
      '/images/healf-zone2/slides/slide-2.webp',
      '/images/healf-zone2/slides/slide-3.webp',
      '/images/healf-zone2/slides/slide-4.webp',
      '/images/healf-zone2/slides/slide-5.webp',
      '/images/healf-zone2/slides/slide-6.webp',
    ],
  },
  {
    number: '009',
    title: 'Healf App Onboarding',
    imageAlt: 'Phone mockups of the redesigned Healf onboarding screens',
    kind: 'Unsolicited concept' as WorkKind,
    tags: ['Product Design', 'UX Audit', 'Mobile Design', 'Onboarding', 'Health & Wellness'],
    description:
      "Unsolicited audit of Healf's mobile onboarding. The existing flow dumped users into a home screen with no context. Redesigned it around Healf's Four Pillars framework so new users understand the ecosystem before they create an account.",
    collaboration: null,
    href: '/work/healf',
    images: [
      '/images/healf/slide-1.webp',
      '/images/healf/slide-2.webp',
      '/images/healf/slide-3.webp',
    ],
  },
  {
    number: '010',
    title: 'FreshRoute',
    imageAlt: 'Phone mockups of the FreshRoute slot booking and substitution screens',
    kind: 'Programme project' as WorkKind,
    tags: ['Product Design', 'Grocery & Delivery', 'Accessibility', 'WCAG 2.2 AA', 'UX Strategy', 'Design Leadership'],
    description:
      'Redesigned slot booking and substitutions for a UK grocery delivery platform. Competitive analysis across 6 platforms and a tested high-fidelity prototype. Took a slot grid 22% of shoppers abandoned and turned it into a personalised, accessible booking flow, aiming at about 15% abandonment. Financial figures are modelled, not measured.',
    collaboration: 'Amdari Industry Programme',
    href: '/work/FreshRoute',
    images: [
      '/images/freshroute/slides/slide-1.webp',
      '/images/freshroute/slides/slide-2.webp',
      '/images/freshroute/slides/slide-3.webp',
      '/images/freshroute/slides/slide-4.webp',
      '/images/freshroute/slides/slide-5.webp',
      '/images/freshroute/slides/slide-6.webp',
      '/images/freshroute/slides/slide-7.webp',
    ],
  },
  {
    number: '011',
    title: 'Spotify Sound Match',
    imageAlt: 'Phone screens of the Sound Match concept: listening, what we heard, and the matched playlist',
    kind: 'Unsolicited concept' as WorkKind,
    tags: ['Product Design', 'Music Streaming', 'Mobile Design', 'Audio Discovery'],
    description:
      "Unsolicited concept for Spotify, not affiliated with the company. You hear a song out in the world, Spotify names it, shows what it heard, and builds a playlist matched on the sound itself rather than your listening history. Four entry points, a 15-second capture and a fallback for every way it can fail.",
    collaboration: null,
    href: '/work/spotify-sound-match',
    images: [
      '/images/spotify-sound-match/video/sound-match-preview.mp4',
      '/images/spotify-sound-match/slides/slide-1.webp',
      '/images/spotify-sound-match/slides/slide-2.webp',
      '/images/spotify-sound-match/slides/slide-3.webp',
      '/images/spotify-sound-match/slides/slide-4.webp',
      '/images/spotify-sound-match/slides/slide-5.webp',
    ],
  },
];

type FilterId = 'all' | 'shipped' | 'internal' | 'client' | 'programme' | 'concept';

const FILTERS: { id: FilterId; label: string; kinds: WorkKind[] | null }[] = [
  { id: 'all', label: 'All', kinds: null },
  { id: 'shipped', label: 'Shipped product', kinds: ['Shipped product, in-house team'] },
  { id: 'internal', label: 'Internal tool', kinds: ['Internal tool'] },
  { id: 'client', label: 'Client project', kinds: ['Client project'] },
  { id: 'programme', label: 'Programme project', kinds: ['Programme project'] },
  { id: 'concept', label: 'Concept', kinds: ['Unsolicited concept', 'Self-set brief'] },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

// Video slides stay up longer so the clip gets a moment to play.
const dwell = (src: string) => (isVideo(src) ? 9000 : 3500);

function MobileSlider({ images, alt }: { images: string[]; alt: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setCurrent((c) => (c + 1) % images.length), dwell(images[current]));
    return () => clearTimeout(t);
  }, [current, images]);

  return (
    <div className="mt-8 relative overflow-hidden rounded-xl" style={{ height: '56vw' }}>
      {images.map((src, i) =>
        isVideo(src) ? (
          <div
            key={i}
            className="absolute inset-0 bg-[#06060b] transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <AutoVideo src={src} paused={i !== current || prefersReducedMotion()} className="w-full h-full object-cover" />
          </div>
        ) : (
          <img
            key={i}
            src={src}
            alt={`${alt} (${images.filter((x) => !isVideo(x)).indexOf(src) + 1} of ${images.filter((x) => !isVideo(x)).length})`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0 }}
          />
        ),
      )}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-white w-4' : 'bg-white/30 w-1.5'}`}
          />
        ))}
      </div>
    </div>
  );
}

function ImageMarquee({ images, alt }: { images: string[]; alt: string }) {
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
            className={`flex-shrink-0 rounded-xl overflow-hidden ${isVideo(src) ? 'bg-[#06060b]' : 'bg-[var(--surface)]'}`}
            // A video tile keeps the video's own 16:9 shape, so nothing is cropped or letterboxed.
            style={{ width: isVideo(src) ? 'calc(52vh * 16 / 9)' : '42vw', height: '52vh' }}
          >
            {isVideo(src) ? (
              <AutoVideo src={src} className="w-full h-full object-cover" />
            ) : (
              <img src={src} alt={i < images.length ? `${alt} (${images.filter((x) => !isVideo(x)).indexOf(src) + 1} of ${images.filter((x) => !isVideo(x)).length})` : ""} aria-hidden={i >= images.length ? true : undefined} loading="lazy" className="w-full h-full object-cover" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Work() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const visibleFilters = FILTERS.map((f) => ({
    ...f,
    count: f.kinds ? projects.filter((p) => f.kinds.includes(p.kind)).length : projects.length,
  })).filter((f) => f.count > 0);

  const typeParam = searchParams.get('type');
  const activeFilter = visibleFilters.find((f) => f.id === typeParam) ?? visibleFilters[0];

  const selectFilter = (id: FilterId) => {
    const next = new URLSearchParams(searchParams);
    if (id === 'all') next.delete('type');
    else next.set('type', id);
    setSearchParams(next, { replace: true });
  };

  const filtered = activeFilter.kinds
    ? projects.filter((p) => activeFilter.kinds.includes(p.kind))
    : projects;

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans">
      <SEO
        title="Work"
        description="Case studies across fintech, health tech, edtech, and proptech. One shipped in-house product, plus client, programme and concept work."
        path="/work"
      />
      <Navigation onOpenContact={() => setIsContactModalOpen(true)} />

      <main className="pt-28">
        {/* Page Header */}
        <motion.div
          className="px-4 md:px-10 pb-12"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <p className="text-sm text-[var(--text-500)] mb-2">Work</p>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight">
            Index of Work<span className="text-[#F45D01]">.</span>
          </h1>
        </motion.div>

        {/* Filter by type of work */}
        <div className="px-4 md:px-10">
          <div role="group" aria-label="Filter by type of work" className="flex flex-wrap gap-2">
            {visibleFilters.map((f) => {
              const active = f.id === activeFilter.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => selectFilter(f.id)}
                  className={`text-sm px-4 py-2 min-h-9 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F45D01] ${
                    active
                      ? 'bg-[var(--btn-bg)] text-[var(--btn-text)] border border-transparent'
                      : 'border border-[var(--border-md)] text-[var(--text-400)] hover:text-[var(--text)] hover:border-[var(--text-400)]'
                  }`}
                >
                  {f.label}
                  <span className="ml-1.5 opacity-60 tabular-nums">{f.count}</span>
                </button>
              );
            })}
          </div>
          <p aria-live="polite" className="text-xs text-[var(--text-500)] mt-2 min-h-4">
            {activeFilter.id !== 'all' ? `Showing ${filtered.length} of ${projects.length}` : ''}
          </p>
        </div>

        {/* Project List */}
        <div className="px-4 md:px-10 pt-2 pb-10 flex flex-col gap-12">
        {filtered.map((project, i) => (
          <motion.section
            key={project.number}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Info Row */}
            <div className="px-5 md:px-8 pt-8 flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8">
              <motion.div className="flex-1 min-w-0" variants={fadeUp} custom={0}>
                <p className="text-xs text-[var(--text-500)] tabular-nums mb-3">({project.number})</p>
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-5">
                  {project.title}
                </h2>

                {/* Tags: the type of work first, then the topic tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <WorkLabel kind={project.kind} />
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

            {/* Images - full-width slider on mobile, marquee on desktop */}
            <motion.div variants={fadeUp} custom={2}>
              <div className="block md:hidden px-5 pb-2">
                <MobileSlider images={project.images} alt={project.imageAlt} />
              </div>
              <div className="hidden md:block">
                <ImageMarquee images={project.images} alt={project.imageAlt} />
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
