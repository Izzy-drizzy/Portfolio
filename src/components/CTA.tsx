import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

interface CTAProps {
  onOpenContact: () => void;
}

export default function CTA({ onOpenContact }: CTAProps) {
  return (
    <motion.section
      className="w-full py-24 px-10 border-t border-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      <motion.p variants={fadeUp} custom={0} className="text-sm text-gray-400 mb-4">
        Ready to collaborate?
      </motion.p>

      <motion.h2
        variants={fadeUp}
        custom={1}
        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-10 max-w-2xl"
      >
        Let's create something that works<span className="text-[#F45D01]">.</span>
      </motion.h2>

      <motion.button
        variants={fadeUp}
        custom={2}
        onClick={onOpenContact}
        className="flex items-center gap-2 bg-[#E4E3E0] text-[#141414] px-7 py-4 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-colors"
      >
        <ArrowUpRight size={16} />
        Drop a message
      </motion.button>
    </motion.section>
  );
}
