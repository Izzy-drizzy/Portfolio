import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const tools = [
  {
    name: 'Figma',
    description: 'Interface design and prototyping',
    icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/figma.svg',
    iconBg: '#1E1E1E',
    href: 'https://figma.com',
  },
  {
    name: 'Github',
    description: 'Version control and code collaboration',
    icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg',
    iconBg: '#1E1E1E',
    href: 'https://github.com',
  },
  {
    name: 'VS Code',
    description: 'Code editor and development environment',
    icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/visualstudiocode.svg',
    iconBg: '#1E1E1E',
    href: 'https://code.visualstudio.com',
  },
  {
    name: 'Claude Code',
    description: 'AI pair programmer in the terminal',
    icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/claude.svg',
    iconBg: '#1E1E1E',
    href: 'https://claude.com/claude-code',
  },
  {
    name: 'React',
    description: 'Frontend JavaScript library',
    icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/react.svg',
    iconBg: '#1E1E1E',
    href: 'https://react.dev',
  },
  {
    name: 'Tailwind',
    description: 'Utility-first CSS framework',
    icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tailwindcss.svg',
    iconBg: '#1E1E1E',
    href: 'https://tailwindcss.com',
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

export default function Stack() {
  return (
    <motion.section
      className="w-full py-24 px-7 md:px-10 border-t border-[var(--border)]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      <motion.div variants={fadeUp} custom={0} className="mb-10">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
          My stack<span className="text-[#F45D01]">.</span>
        </h2>
        <p className="text-sm text-[var(--text-400)] mt-3">
          I am committed to staying updated with the best design and development tools and techniques.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {tools.map((tool, i) => (
          <motion.a
            key={tool.name}
            href={tool.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            custom={i + 1}
            className="flex items-center gap-4 bg-[var(--surface-2)] border border-[var(--border)] rounded-xl px-5 py-4 hover:border-[var(--border-sm)] transition-colors group"
          >
            <div className="w-11 h-11 rounded-lg bg-[var(--surface-3)] flex items-center justify-center flex-shrink-0 overflow-hidden">
              <img
                src={tool.icon}
                alt={tool.name}
                loading="lazy"
                className="w-6 h-6 invert"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm text-[var(--text)]">{tool.name}</p>
              <p className="text-xs text-[var(--text-400)] mt-0.5">{tool.description}</p>
            </div>
            <ArrowUpRight size={16} className="text-[var(--text-600)] group-hover:text-[var(--text)] transition-colors flex-shrink-0" />
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
