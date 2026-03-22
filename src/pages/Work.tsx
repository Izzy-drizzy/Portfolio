import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';

const projects = [
  {
    number: '001',
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
    number: '002',
    title: 'Moolapay',
    tags: ['Product Design', 'Crypocurrency', 'Financial Inclusion', 'Low digital Literacy', 'Inclusive UX'],
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
    number: '003',
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
    number: '004',
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
  {
    number: '005',
    title: 'EduSmart Analytics',
    tags: ['EdTech', 'Analytics Dashboard', 'B2B SaaS', 'GDPR', 'Higher Education', 'Stakeholder Research'],
    description:
      'AI-powered student analytics platform for 200+ UK/Canadian universities. Stakeholder validation revealed 15/22 product assumptions were wrong — pivoting from student self-monitoring to a faculty intervention tool protected £5M in at-risk contracts and cut scope 66%.',
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
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
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
            className="flex-shrink-0 rounded-xl overflow-hidden bg-[#1A1A1A]"
            style={{ width: '42vw', height: '52vh' }}
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Work() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#141414] text-[#E4E3E0] font-sans selection:bg-[#E4E3E0] selection:text-[#141414]">
      <Navigation onOpenContact={() => setIsContactModalOpen(true)} />

      <main className="pt-28">
        {/* Page Header */}
        <motion.div
          className="px-5 md:px-10 pb-12"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <p className="text-sm text-gray-500 mb-2">Work</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Index of Work<span className="text-[#F45D01]">.</span>
          </h1>
        </motion.div>

        {/* Project List */}
        <div className="px-5 md:px-10 py-10 flex flex-col gap-12">
        {projects.map((project, i) => (
          <motion.section
            key={project.number}
            className="rounded-xl border border-gray-800 bg-[#1A1A1A] overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {/* Info Row */}
            <div className="px-5 md:px-8 pt-8 flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8">
              <motion.div className="flex-1 min-w-0" variants={fadeUp} custom={0}>
                <p className="text-xs text-gray-500 mb-1">({project.number})</p>
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-5">
                  {project.title}
                </h2>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs border border-gray-700 text-gray-400 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-300 leading-relaxed max-w-lg mb-4">
                  {project.description}
                </p>

                {/* Collaboration */}
                {project.collaboration && (
                  <div className="text-xs text-gray-500">
                    <span>In collaboration with</span>
                    <br />
                    <span className="text-gray-400">{project.collaboration}</span>
                  </div>
                )}
              </motion.div>

              {/* View Case Study */}
              <motion.a
                href={project.href}
                variants={fadeUp}
                custom={1}
                className="flex items-center gap-2 border border-gray-700 text-[#E4E3E0] px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#E4E3E0]/10 transition-colors self-start flex-shrink-0 md:mt-1"
              >
                <ArrowRight size={15} />
                View Case Study
              </motion.a>
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
