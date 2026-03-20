import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';

const accordionData = [
  {
    title: "Strategy",
    content: "Questioning briefs to find what actually needs solving. Research, competitive analysis, early structure. Figure out the real problem before touching design tools."
  },
  {
    title: "User Experience",
    content: "Mapping how people move through things. User flows, wireframes, stripping complexity. Get the foundation right before worrying about how it looks."
  },
  {
    title: "Design",
    content: "Prototyping from rough concepts to pixel-perfect UI. Building responsive interfaces and component systems. Making brands work across every touchpoint."
  },
  {
    title: "Interaction",
    content: "Animation that guides, not decorates. Micro-interactions and transitions that help people understand what's happening. Motion with purpose, not flair."
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }
  })
};

export default function About() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.section
      className="w-full py-24 px-10 border-t border-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.h2
        variants={fadeUp}
        custom={0}
        className="text-3xl md:text-4xl font-bold tracking-tight mb-16"
      >
        My design approach<span className="text-[#F45D01]">.</span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Left — Accordion */}
        <motion.div variants={fadeUp} custom={1} className="space-y-0">
          {accordionData.map((item, index) => (
            <div key={index} className="border-b border-gray-800">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full py-5 text-left font-medium text-lg hover:text-gray-300 transition-colors"
              >
                {item.title}
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Plus size={20} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-gray-400 text-sm leading-relaxed">
                      {item.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* Right — Text */}
        <motion.div variants={fadeUp} custom={2} className="flex flex-col justify-between gap-10">
          <div className="text-gray-400 space-y-6 text-sm leading-relaxed">
            <p>
              I design digital experiences that work for the people using them and the teams maintaining them. Start with what users actually need, map flows, test early, build interfaces that don't need manuals.
            </p>
            <p>
              The work spans UX, interaction design, information architecture, and brand evolution. Design for real conditions. Messy ones. If users get lost or the client can't update content without breaking something, that's a problem. Good design holds up when things get complicated.
            </p>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
