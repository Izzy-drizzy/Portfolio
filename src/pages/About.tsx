import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import SEO from '../components/SEO';

const expertise = [
  {
    title: 'Design',
    icon: '/icons/design-white.svg',
    link: { label: 'View Behance', href: 'https://www.behance.net/bukunmiisijola' },
    body: [
      "I prototype in code as well as Figma, so API constraints, loading states and mobile performance come up while I'm designing instead of at handoff. I research before I design and prototype before I commit, and the business goal stays on the table throughout.",
      "Most of my work has been in fintech and SaaS, where people need to understand complex information and trust it. Recent work includes an investment platform redesign that moved user satisfaction by 30%, and trading applications designed for both first-time and experienced investors. The most interesting part of the job is taking something that feels complicated and finding the version that makes sense on first use.",
    ],
  },
  {
    title: 'Development',
    icon: '/icons/code-white.svg',
    link: { label: 'View GitHub', href: 'https://github.com/Izzy-drizzy' },
    body: [
      "My development background shapes how I design. I've written front-end code, so I know what's cheap to build and what isn't. That helps me make better calls early, which means less back-and-forth with developers and builds that match the designs.",
      "I've built responsive web applications, contributed to complex API integration, and optimised user interfaces for performance. My prototypes usually run, and when I hand off designs, developers come back with questions about timelines rather than whether the thing can be built.",
    ],
  },
  {
    title: 'Founder',
    icon: '/icons/pen-white.svg',
    link: { label: 'View Artbox', href: 'https://artbox-studio.com' },
    body: [
      "In November 2024, I launched Artbox Studio to stay sharp while seeking the right full-time UX role. Running my own consultancy has taught me project management, stakeholder communication, and how to deliver work a business can measure.",
      "While I've enjoyed the entrepreneurial experience, I want to go deep on one product with a strong team instead of switching between client projects.",
    ],
  },
];

const reads = [
  {
    title: 'Google UX Design Certificate',
    date: 'March 2022',
    body: "Where I learned to stop designing from assumptions. The research and testing methods from this course still shape how I start every project: talk to users first, prototype cheap, test before committing.",
  },
  {
    title: 'Complete Web & Mobile Designer: UI/UX, Figma by Andrei Neagoie',
    date: 'April 2024',
    body: "This is where my Figma skills went from functional to fluent. Neagoie's approach to component systems and responsive layouts changed how I structure files for handoff. I stopped treating mobile as a scaled-down desktop after this one.",
  },
  {
    title: 'Motion Design with Figma: Animations, Motion Graphics, UX/UI by Andrei Neagoie',
    date: 'April 2024',
    body: "Before this course, I used animation to make things look nice. After it, I started using motion to show users where they are and what just happened. The prototyping techniques also made it much easier to spec animations for developers.",
  },
  {
    title: "Don't Make Me Think by Steve Krug",
    date: 'January 2025',
    body: "Krug's whole point is that if someone has to think about how to use your interface, you've already lost. I re-read the chapter on navigation every time I'm stuck on an information architecture problem.",
  },
  {
    title: 'Learning new stuff 😊',
    date: 'Currently',
    body: 'Always partway through a course or a book.',
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

export default function About() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans">
      <SEO title="About" description="Product designer with a CS background who works best at the zero-to-one stage. Five years, most of it in fintech." path="/about" />
      <Navigation onOpenContact={() => setIsContactModalOpen(true)} />

      <main className="pt-28 px-7 md:px-10">
        {/* Page Header */}
        <motion.div
          className="pb-12"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <p className="text-sm text-[var(--text-500)] mb-2">About</p>
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight">
            About Me<span className="text-[#F45D01]">.</span>
          </h1>
        </motion.div>

        {/* Bio */}
        <motion.div
          className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8 mb-4"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
        >
          <div className="space-y-5 text-[var(--text-300)] text-base leading-relaxed">
            <p>
              Hi, I'm Bukunmi (Oluwabukunmi David Isijola if we're being formal). I've been a creator for as long as I can remember. Growing up, I was the kid always scribbling something; drawing comic books with my brother, filling entire notebooks with stories to share with friends who'd eagerly await the next chapter. I've been telling stories visually ever since.
            </p>
            <p>
              As I got older I moved from paper to screens and taught myself Illustrator and Photoshop. Then came university and a Computer Science degree, where I found I could make things with code too: HTML, CSS, JavaScript, React. Frontend development turned out to be another creative outlet.
            </p>
            <p>
              Fast forward through a Master's in Computer Science and 5+ years designing fintech and SaaS products, and I'm now a product designer who works on both sides of design and development. I know what users need and what engineers can build, so what I design tends to ship.
            </p>
            <p className="text-[var(--text-400)]">
              Currently running Artbox Studio and looking for a Senior Product Designer role.
            </p>
          </div>
        </motion.div>

        {/* Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {expertise.map((item, i) => (
            <motion.div
              key={item.title}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8 flex flex-col gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={i}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    {item.title}
                    <img src={item.icon} alt="" className="opacity-50" style={{ width: '1.1em', height: '1.1em' }} />
                  </h2>
                </div>
                <a
                  href={item.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-xs text-[#F45D01] hover:opacity-70 transition-opacity flex-shrink-0"
                >
                  {item.link.label}
                  <ArrowUpRight size={12} />
                </a>
              </div>
              <div className="space-y-4 text-sm text-[var(--text-400)] leading-relaxed">
                {item.body.map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* My Reads */}
        <motion.div
          className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-10">
            My Reads<span className="text-[#F45D01]">.</span>
          </h2>

          <div className="divide-y divide-[var(--border)]">
            {reads.map((read, i) => (
              <motion.div
                key={i}
                className="py-8 first:pt-0 last:pb-0"
                variants={fadeUp}
                custom={i}
              >
                <div className="flex items-start justify-between gap-6 mb-3">
                  <h3 className="text-base font-semibold leading-snug">{read.title}</h3>
                  <span className="text-xs text-[#F45D01] flex-shrink-0 mt-0.5">{read.date}</span>
                </div>
                <p className="text-sm text-[var(--text-400)] leading-relaxed">{read.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      <Footer />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
