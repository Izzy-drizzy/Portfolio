import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';

const accordionData = [
  {
    title: "Strategy",
    content: "Briefs are a starting point. Before Figma, I'm asking what users keep running into, what the team has already tried, and what success actually looks like for the business. That's usually where the actual problem shows up."
  },
  {
    title: "User Experience",
    content: "I map how people actually move through a product and wireframe from there. Flows and structure get settled before any visual work starts, because polishing a broken flow only makes it more expensive to fix later."
  },
  {
    title: "Design",
    content: "I work from rough sketches to production-ready UI. I set up component systems, responsive layouts and design tokens so engineering can pick the work up without a lot of back-and-forth."
  },
  {
    title: "Interaction",
    content: "I use motion to show people where they are and confirm what just happened. If an animation doesn't make something clearer, I take it out."
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
      className="w-full py-24 px-7 md:px-10 border-t border-[var(--border)]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.h2
        variants={fadeUp}
        custom={0}
        className="text-3xl md:text-4xl font-medium tracking-tight mb-16"
      >
        My design approach<span className="text-[#F45D01]">.</span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Left - Accordion */}
        <motion.div variants={fadeUp} custom={1} className="space-y-0">
          {accordionData.map((item, index) => (
            <div key={index} className="border-b border-[var(--border)]">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full py-5 text-left font-medium text-lg hover:text-[var(--text-300)] transition-colors"
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
                    <p className="pb-6 text-[var(--text-400)] text-sm leading-relaxed">
                      {item.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* Right - Text */}
        <motion.div variants={fadeUp} custom={2} className="flex flex-col justify-between gap-10">
          <div className="text-[var(--text-400)] space-y-6 text-sm leading-relaxed">
            <p>
              The SaaS products I design have to work for the person using them, the stakeholder who owns the outcome and the engineer building them, and they have to move a number the business cares about. If a design can't ship, or ships and misses the problem, the job isn't done.
            </p>
            <p>
              Most briefs get me 70% of the way there. The rest comes from questions that weren't in the document: what broke last time, what engineering won't build, what the PM and the stakeholder actually disagree on. That's usually where I find the problem worth designing for.
            </p>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
