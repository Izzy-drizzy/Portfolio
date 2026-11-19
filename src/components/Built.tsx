import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import WorkLabel, { type WorkKind } from './WorkLabel';

interface BuiltItem {
  name: string;
  kind: WorkKind;
  description: string;
  builtWith: string;
  live?: { label: string; href: string };
  source?: string;
  // A case study on this site about the item.
  page?: string;
  note?: string;
}

const items: BuiltItem[] = [
  {
    name: 'Artbox HQ',
    kind: 'Internal tool',
    description:
      "The CRM my studio runs on. It finds and scores leads, checks each prospect's website and reviews, and builds a private audit page for each one.",
    builtWith: 'React, Vite, Supabase, Cloudflare',
    page: '/work/artbox-hq',
    note: 'No live link: it holds real prospect data.',
  },
  {
    name: 'Artbox client dashboard',
    kind: 'Demo',
    description:
      'A dashboard for UK home-improvement businesses: new leads, conversations, booked appointments, ad results and a monthly report, on desktop and phone. It runs on made-up sample data and says so on every screen.',
    builtWith: 'React, TypeScript, Vite, Cloudflare Workers',
    note: 'No public link at the moment. Source is private.',
  },
  {
    name: 'Nexora recruitment platform',
    kind: 'Programme project',
    description:
      'A recruiter dashboard and candidate portal designed as one system, with flows for AI-assisted CV screening and interview scheduling. The prototype shows the screening in its screens; no model runs behind it.',
    builtWith: 'Next.js, React, TypeScript, Tailwind CSS',
    live: { label: 'Live prototype', href: 'https://nexora-recruit.vercel.app/' },
    source: 'https://github.com/Izzy-drizzy/Nexora-Prototype',
  },
  {
    name: 'FreshRoute slot booking',
    kind: 'Programme project',
    description:
      'A clickable prototype of a grocery delivery slot picker, substitution choices and an accessibility mode, built to test the redesign.',
    builtWith: 'React, JavaScript',
    live: { label: 'Live prototype', href: 'https://fresh-route-prototype.vercel.app/' },
    source: 'https://github.com/Izzy-drizzy/FreshRoute-Prototype',
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

const linkClass =
  'inline-flex items-center gap-1 text-xs font-medium text-[var(--text)] underline underline-offset-4 decoration-[var(--border-sm)] hover:decoration-[var(--text)] transition-colors';

export default function Built() {
  return (
    <motion.section
      className="w-full py-24 px-7 md:px-10 border-t border-[var(--border)]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      <motion.div variants={fadeUp} custom={0} className="mb-10">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
          Things I've built<span className="text-[#F45D01]">.</span>
        </h2>
        <p className="text-sm text-[var(--text-400)] mt-3">
          Working things you can open, and the code behind them where it is public.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {items.map((item, i) => (
          <motion.div
            key={item.name}
            variants={fadeUp}
            custom={i + 1}
            className="flex flex-col bg-[var(--surface-2)] border border-[var(--border)] rounded-xl p-5"
          >
            <WorkLabel kind={item.kind} className="self-start mb-3" />
            <h3 className="font-medium text-base text-[var(--text)] leading-snug mb-2">{item.name}</h3>
            <p className="text-xs text-[var(--text-400)] leading-relaxed mb-3">{item.description}</p>
            <p className="text-xs text-[var(--text-400)] mb-4">
              <span className="text-[var(--text)]">Built with</span> {item.builtWith}
            </p>
            <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[var(--border)] pt-3">
              {item.page && (
                <Link to={item.page} className={linkClass}>
                  Read the case study <ArrowRight size={13} />
                </Link>
              )}
              {item.live && (
                <a href={item.live.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {item.live.label} <ArrowUpRight size={13} />
                </a>
              )}
              {item.source && (
                <a href={item.source} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Source on GitHub <ArrowUpRight size={13} />
                </a>
              )}
              {item.note && <span className="text-xs text-[var(--text-400)]">{item.note}</span>}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
