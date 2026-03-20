import { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X, ArrowUpRight, Moon } from 'lucide-react';

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-10 py-4 bg-[#141414]/80 backdrop-blur-md text-[#E4E3E0] border-b border-gray-800/50">
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
            onClick={onOpenContact}
            className="flex items-center gap-2 bg-[#E4E3E0] text-[#141414] px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors"
          >
            <ArrowUpRight size={16} />
            Let's Work Together
          </button>
          <button className="p-2 border border-[#E4E3E0]/20 rounded-lg hover:bg-[#E4E3E0]/10 transition-colors">
            <Moon size={16} />
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
          className="absolute top-full left-0 right-0 bg-[#141414] text-[#E4E3E0] p-6 flex flex-col gap-6 md:hidden"
        >
          <a href="/work" className="text-2xl font-normal">Work</a>
          <a href="/about" className="text-2xl font-normal">About</a>
          <a href="https://docs.google.com/document/d/1sO4h2zYp6yU316K9S-F-0Vii_5qq-BzFzus7vO969j0/edit?usp=sharing" target="_blank" rel="noreferrer" className="text-2xl font-normal">CV</a>
          <button 
            onClick={() => {
              setIsOpen(false);
              onOpenContact();
            }}
            className="flex items-center justify-center gap-2 bg-[#E4E3E0] text-[#141414] px-6 py-3 rounded-lg text-lg font-medium mt-4"
          >
            <ArrowUpRight size={20} />
            Let's Work Together
          </button>
        </motion.div>
      )}
    </header>
  );
}
