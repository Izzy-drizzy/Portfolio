import { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavigationProps {
  onOpenContact: () => void;
}

function SlideText({ children }: { children: string }) {
  return (
    <span className="relative inline-flex flex-col overflow-hidden h-[1.2em]">
      <span className="transition-transform duration-300 ease-in-out group-hover:-translate-y-full">{children}</span>
      <span className="absolute translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">{children}</span>
    </span>
  );
}

export default function Navigation({ onOpenContact }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-7 md:px-10 py-4 bg-[var(--bg)]/80 backdrop-blur-md text-[var(--text)] border-b border-[var(--border)]/50">
      <div className="flex items-center justify-between">
        <a href="/" className="transition-transform duration-300 hover:scale-105 inline-block">
          <img src="/logo.svg" alt="Logo" className="h-7 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8 group/nav">
          <a href="/work" className="group text-base font-normal transition-opacity duration-200 group-hover/nav:opacity-40 hover:!opacity-100 overflow-hidden"><SlideText>Work</SlideText></a>
          <a href="/about" className="group text-base font-normal transition-opacity duration-200 group-hover/nav:opacity-40 hover:!opacity-100 overflow-hidden"><SlideText>About</SlideText></a>
          <a href="https://docs.google.com/document/d/1sO4h2zYp6yU316K9S-F-0Vii_5qq-BzFzus7vO969j0/edit?usp=sharing" target="_blank" rel="noreferrer" className="group text-base font-normal transition-opacity duration-200 group-hover/nav:opacity-40 hover:!opacity-100 overflow-hidden"><SlideText>CV</SlideText></a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggle}
            className="p-2 rounded-lg border border-[var(--border)] text-[var(--text-400)] hover:text-[var(--text)] hover:border-[var(--border-md)] transition-colors"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={onOpenContact}
            className="flex items-center gap-2 bg-[var(--btn-bg)] text-[var(--btn-text)] px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors"
          >
            <ArrowUpRight size={16} />
            Let's Work Together
          </button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-[var(--bg)] text-[var(--text)] p-6 flex flex-col gap-6 md:hidden"
        >
          <a href="/work" className="text-2xl font-normal">Work</a>
          <a href="/about" className="text-2xl font-normal">About</a>
          <a href="https://docs.google.com/document/d/1sO4h2zYp6yU316K9S-F-0Vii_5qq-BzFzus7vO969j0/edit?usp=sharing" target="_blank" rel="noreferrer" className="text-2xl font-normal">CV</a>
          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="p-2 rounded-lg border border-[var(--border)] text-[var(--text-400)] hover:text-[var(--text)] hover:border-[var(--border-md)] transition-colors"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenContact();
            }}
            className="flex items-center justify-center gap-2 bg-[var(--btn-bg)] text-[var(--btn-text)] px-6 py-3 rounded-lg text-lg font-medium mt-4"
          >
            <ArrowUpRight size={20} />
            Let's Work Together
          </button>
        </motion.div>
      )}
    </header>
  );
}
