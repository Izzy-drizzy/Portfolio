import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Clock from './Clock';
import WorkLabel from './WorkLabel';

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

        {/* Left Column - narrower */}
        <div className="lg:col-span-5 h-full flex flex-col justify-between gap-10 lg:gap-0">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-sm text-[var(--text-400)] mb-4"
            >
              Senior Product Designer
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.15] [text-wrap:balance]"
            >
              I'm a product designer who{' '}
              <span
                className="px-0.5 -mx-0.5"
                style={{ backgroundImage: 'linear-gradient(transparent 60%, rgb(244 93 1 / 0.7) 60%, rgb(244 93 1 / 0.7) 94%, transparent 94%)' }}
              >
                builds
              </span>{' '}
              what I design.
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="mb-4">
              <Clock />
            </div>

            <p className="text-sm text-[var(--text-400)] max-w-sm mb-6 leading-relaxed">
              I work in Figma and build in React and TypeScript, with a BSc and MSc in Computer Science. At Hobpay I owned design for a live consumer fintech product, working with three engineers, a product manager and the founder.
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

        {/* Right Column - wider, cards side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:col-span-6 lg:col-start-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <Link
              to="/work/Hobpay"
              className="group block relative rounded-xl overflow-hidden bg-[var(--surface)] shadow-sm hover:shadow-md transition-shadow border border-[var(--border)]"
            >
              <div className="aspect-[5/3] overflow-hidden bg-[var(--surface-input)]">
                <img
                  src="/images/hobpay/slide-1.webp"
                  alt="Hobpay app screens on two phones, from the redesigned wallet and transaction flows"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-4">
                <WorkLabel kind="Shipped product, in-house team" className="mb-3" />
                <h2 className="text-base font-medium mb-2 leading-snug">
                  Redesigning the core flows of a live consumer fintech product
                </h2>
                <p className="text-xs text-[var(--text-400)] mb-3 line-clamp-3">
                  Lead product designer on a platform serving 10,000+ users. I rebuilt the transaction flows and led a web build for the 28% of potential users the Android-only app could not reach.
                </p>
                <div className="flex items-center gap-1.5 text-xs font-medium border-t border-[var(--border)] pt-3 mt-1 pb-1">
                  <ArrowRight size={13} />
                  View Case Study
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          >
            <Link
              to="/work/artbox-hq"
              className="group block relative rounded-xl overflow-hidden bg-[var(--surface)] shadow-sm hover:shadow-md transition-shadow border border-[var(--border)]"
            >
              <div className="aspect-[5/3] overflow-hidden bg-[var(--surface-input)]">
                <img
                  src="/images/artbox-hq/leads-card.webp"
                  alt="Artbox HQ lead list on sample data, with each invented business scored and sorted by priority"
                  className="w-full h-full object-cover object-left-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-4">
                <WorkLabel kind="Internal tool" className="mb-3" />
                <h2 className="text-base font-medium mb-2 leading-snug">
                  Artbox HQ: the CRM my studio runs on
                </h2>
                <p className="text-xs text-[var(--text-400)] mb-3 line-clamp-3">
                  I designed and built it in React and Supabase. It finds and scores leads, checks each prospect's website and reviews, and builds a private audit page for each one.
                </p>
                <div className="flex items-center gap-1.5 text-xs font-medium border-t border-[var(--border)] pt-3 mt-1 pb-1">
                  <ArrowRight size={13} />
                  View Case Study
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
