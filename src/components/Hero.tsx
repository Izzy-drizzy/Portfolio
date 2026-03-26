import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Clock from './Clock';

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-28 pb-8 px-7 md:px-10 flex flex-col overflow-hidden">

      {/* Grain overlay */}
      <div className="absolute inset-0 -top-[50%] -left-[50%] w-[200%] h-[200%] pointer-events-none z-0 opacity-[0.04]"
        style={{ animation: 'grain 0.8s steps(1) infinite' }}>
        <svg width="100%" height="100%">
          <filter id="hero-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#hero-grain)" />
        </svg>
      </div>

      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end">

        {/* Left Column — narrower */}
        <div className="lg:col-span-5 h-full flex flex-col justify-between gap-10 lg:gap-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-medium tracking-tight leading-[1.15]"
          >
            Product designer building <br className="hidden md:block" /> <span className="whitespace-nowrap">0<img src="/arrow.svg" alt="→" className="inline-block w-8 h-8 mx-0.5 align-middle" />1</span> SaaS Products that drive measurable business impact
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="mb-4">
              <Clock />
            </div>

            <p className="text-sm text-[var(--text-400)] max-w-sm mb-6 leading-relaxed">
              I design product experiences mostly in fintech, health tech, and EdTech. The brief is usually clear. The actual problem usually isn't. I spend a lot of time in that gap.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={onOpenContact}
                className="flex items-center gap-2 bg-[var(--btn-bg)] text-[var(--btn-text)] px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors"
              >
                <ArrowUpRight size={15} />
                Let's Work Together
              </button>
              <Link to="/work" className="flex items-center gap-2 border border-[var(--text)]/20 text-[var(--text)] px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[var(--text)]/10 transition-colors">
                <ArrowRight size={15} />
                View All Work
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Column — wider, cards side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:col-span-6 lg:col-start-7">
          <motion.a
            href="/work/Edusmart"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="group block relative rounded-xl overflow-hidden bg-[var(--surface)] shadow-sm hover:shadow-md transition-shadow border border-[var(--border)]"
          >
            <div className="aspect-[5/3] overflow-hidden bg-[var(--surface-input)]">
              <img
                src="/images/edusmart/slide-1.png"
                alt="EduSmart Analytics"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="p-4">
              <h2 className="text-base font-medium mb-2 leading-snug">
                Preventing £5M revenue loss through stakeholder validation
              </h2>
              <p className="text-xs text-[var(--text-400)] mb-3 line-clamp-2">
                Student analytics platform for 200+ universities. Ran assumption-testing workshops before building anything — 15 of 22 were wrong. That discovery protected £5M in contracts.
              </p>
              <div className="flex items-center gap-1.5 text-xs font-medium border-t border-[var(--border)] pt-3 mt-1 pb-1">
                <ArrowRight size={13} />
                View Case Study
              </div>
            </div>
          </motion.a>

          <motion.a
            href="/work/Hobpay"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="group block relative rounded-xl overflow-hidden bg-[var(--surface)] shadow-sm hover:shadow-md transition-shadow border border-[var(--border)]"
          >
            <div className="aspect-[5/3] overflow-hidden bg-[var(--surface-input)]">
              <img
                src="/images/hobpay/slide-1.png"
                alt="Hobpay Case Study"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="p-4">
              <h2 className="text-base font-medium mb-2 leading-snug">
                Cross-platform fintech redesign recovering 28% of blocked users
              </h2>
              <p className="text-xs text-[var(--text-400)] mb-3 line-clamp-2">
                Hobpay had no iOS app. 28% of potential users couldn't log in at all. Built a web-first platform to fix access, then redesigned the whole UX. Satisfaction went from 3.2 to 4.2.
              </p>
              <div className="flex items-center gap-1.5 text-xs font-medium border-t border-[var(--border)] pt-3 mt-1 pb-1">
                <ArrowRight size={13} />
                View Case Study
              </div>
            </div>
          </motion.a>
        </div>

      </div>
    </section>
  );
}
