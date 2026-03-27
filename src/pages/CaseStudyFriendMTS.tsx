import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';

const tags = ['Product Design', 'UX Design', 'Brand Evolution', 'Web Design', 'Anti-Piracy'];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function CaseStudyFriendMTS() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#141414] text-[#E4E3E0]">
      <Navigation onOpenContact={() => setContactOpen(true)} />
      <main>
        {/* ── Hero ── */}
        <section className="min-h-screen pt-28 pb-12 px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center overflow-hidden">
          <motion.div className="lg:col-span-5 flex flex-col gap-8" initial="hidden" animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 text-xs text-gray-500">
              <Link to="/work" className="hover:text-gray-300 transition-colors">Case Studies</Link>
              <span>/</span>
              <span className="text-gray-300">FriendMTS</span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
              Building a dynamic digital identity for a global <span className="text-[#F45D01]">anti-piracy</span> technology leader
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-sm text-gray-400 leading-relaxed max-w-md">
              Friend MTS tackles video piracy for sports and media clients worldwide. Rebuilt the information architecture,
              designed dynamic interfaces, and evolved the brand to match the speed of the threats they're fighting.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex items-center gap-3 text-xs text-gray-500">
              <span>2023</span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span>Delivered by Artbox Studio</span>
            </motion.div>
            <motion.div variants={fadeUp} custom={4} className="flex flex-col gap-3">
              <p className="text-xs text-gray-600 uppercase tracking-widest">Project Tags</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1.5 rounded-full border border-gray-700 text-gray-300 bg-[#1A1A1A]">{tag}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — placeholder until images are added */}
          <motion.div className="lg:col-span-7 h-[55vh] lg:h-[80vh]"
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}>
            <div className="w-full h-full rounded-xl border-2 border-dashed border-gray-700 bg-[#1A1A1A] flex flex-col items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-600">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
              </div>
              <p className="text-xs text-gray-600">Images coming soon</p>
            </div>
          </motion.div>
        </section>

        {/* ── Next project CTA ── */}
        <section className="px-10 py-20 border-t border-gray-800">
          <motion.div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div>
              <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">Next Case Study</p>
              <h2 className="text-2xl font-medium">Moolapay</h2>
              <p className="text-sm text-gray-400 mt-1">Financial inclusion for underserved communities</p>
            </div>
            <Link to="/work/Moolapay" className="flex items-center gap-2 bg-[#E4E3E0] text-[#141414] px-6 py-3 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors shrink-0">
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
