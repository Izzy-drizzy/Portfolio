import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Clock from './Clock';

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-28 pb-8 px-10 flex flex-col overflow-hidden">

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
            className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.15]"
          >
            Product designer building <br></br> <span className="whitespace-nowrap">0<img src="/arrow.svg" alt="→" className="inline-block w-8 h-8 mx-0.5 align-middle" />1</span> SaaS Products that drive measurable business impact
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="mb-4">
              <Clock />
            </div>

            <p className="text-sm text-gray-400 max-w-sm mb-6 leading-relaxed">
              I design SaaS products across fintech, health & wellness, EdTech, and B2B platforms. Whether it's financial transactions, personalized wellbeing experiences, or analytics dashboards, I focus on creating products that users love and businesses scale from.            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={onOpenContact}
                className="flex items-center gap-2 bg-[#E4E3E0] text-[#141414] px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors"
              >
                <ArrowUpRight size={15} />
                Let's Work Together
              </button>
              <button className="flex items-center gap-2 border border-[#E4E3E0]/20 text-[#E4E3E0] px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#E4E3E0]/10 transition-colors">
                <ArrowRight size={15} />
                View All Work
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Column — wider, cards side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:col-span-6 lg:col-start-7">
          <motion.a
            href="/work/healf"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="group block relative rounded-xl overflow-hidden bg-[#1A1A1A] shadow-sm hover:shadow-md transition-shadow border border-gray-800"
          >
            <div className="aspect-[5/3] overflow-hidden bg-[#222]">
              <img
                src="/images/healf/slide-2.png"
                alt="Healf Onboarding Redesign"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="p-4">
              <h2 className="text-base font-semibold mb-2 leading-snug">
                Redesigning Healf's Onboarding for better discovery and engagement
              </h2>
              <p className="text-xs text-gray-400 mb-3 line-clamp-2">
                UX audit and onboarding redesign for wellness platform. Simplified navigation, improved content hierarchy, and enhanced service discovery for better user engagement.
              </p>
              <div className="flex items-center gap-1.5 text-xs font-medium border-t border-gray-800 pt-3 mt-1 pb-1">
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
            className="group block relative rounded-xl overflow-hidden bg-[#1A1A1A] shadow-sm hover:shadow-md transition-shadow border border-gray-800"
          >
            <div className="aspect-[5/3] overflow-hidden bg-[#222]">
              <img
                src="/images/hobpay/slide-1.png"
                alt="Hobpay Case Study"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="p-4">
              <h2 className="text-base font-semibold mb-2 leading-snug">
                Cross-platform fintech redesign recovering 28% of blocked users
              </h2>
              <p className="text-xs text-gray-400 mb-3 line-clamp-2">
                Strategic web-first redesign eliminating platform barriers for Nigerian fintech serving 10K+ users. Simplified navigation, streamlined service access, and progressive disclosure increased satisfaction 30% while recovering iOS-blocked users.
              </p>
              <div className="flex items-center gap-1.5 text-xs font-medium border-t border-gray-800 pt-3 mt-1 pb-1">
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
