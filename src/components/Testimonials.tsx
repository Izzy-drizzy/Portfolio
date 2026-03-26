import { useRef, type ReactNode } from 'react';
import { motion } from 'motion/react';

function TiltCard({ children, className }: { children: ReactNode; className: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -10;
    const rotateY = ((x - rect.width / 2) / rect.width) * 10;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transition: 'transform 0.15s ease' }}
    >
      {children}
    </div>
  );
}

const testimonials = [
  {
    quote: "Even now, Bukunmi's work on Hobpay speaks for itself. He showed dedication and commitment to problem solving.",
    name: "Olufemi Akintunde",
    role: "CMP, Hobpay",
    initials: "OA"
  },
  {
    quote: "I have worked with Bukunmi on more than a few projects over the years, genuinely one of the more talented designers I know and his growth has been great to see.",
    name: "Seun Obadipe",
    role: "Product Designer, Artbox",
    initials: "SO"
  },
  {
    quote: "Bukunmi is doing some amazing work. Talented, listens intently to ideas and feedback, very organized. Just makes everyone's life easier.",
    name: "Gaius Ogbe",
    role: "Web Developer, Artbox / Hobpay",
    initials: "GO"
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

export default function Testimonials() {
  return (
    <motion.section
      className="w-full py-14 px-7 md:px-10 border-t border-[var(--border)]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.div className="pb-8 mb-8" variants={fadeUp} custom={0}>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
          Testimonials from peers &amp; coworkers<span className="text-[#F45D01]">.</span>
        </h2>
        <p className="text-sm text-[var(--text-400)] mt-3">
          Here are a few kind words people have to say about collaborating and solving problems with me.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <motion.div key={i} variants={fadeUp} custom={i + 1}>
          <TiltCard className="flex flex-col justify-between bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 gap-10 h-full">
            <div>
              <p className="text-sm text-[var(--text-300)] leading-relaxed">
                {t.quote}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[var(--surface-3)] border border-[var(--border-md)] flex items-center justify-center text-xs font-medium text-[var(--text-300)] flex-shrink-0">
                {t.initials}
              </div>
              <div>
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs text-[var(--text-500)]">{t.role}</p>
              </div>
            </div>
          </TiltCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
