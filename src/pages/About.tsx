import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';

const expertise = [
  {
    title: 'Design',
    icon: '✕',
    link: { label: 'View Behance', href: 'https://behance.net' },
    body: [
      "Here's what separates me from other designers: I prototype in code, not just Figma. This means I'm thinking about API constraints, loading states, and mobile performance while designing, not after. My approach combines thorough user research with rapid prototyping, always keeping business goals in focus.",
      "I've specialized in fintech and SaaS products, where complex information needs to be digestible and trustworthy. Recent work includes transforming an investment platform with 30% satisfaction improvements and redesigning trading applications for both novice and expert users. What excites me most is turning complex problems into simple, elegant solutions that users intuitively understand.",
    ],
  },
  {
    title: 'Development',
    icon: '<>',
    link: { label: 'View GitHub', href: 'https://github.com' },
    body: [
      "My development expertise is my competitive advantage. With front-end experience and a solid understanding of technical constraints, I create designs that developers can actually build efficiently. This technical perspective helps me make smarter design decisions early, reducing back-and-forth and ensuring pixel-perfect implementations.",
      "I've built responsive web applications, contributed to complex API integration, and optimised user interfaces for performance. This dual expertise means I can prototype functional solutions, not just pretty mockups. When I hand off designs, developers don't come back with 'this is impossible' — they come back with shipping dates.",
    ],
  },
  {
    title: 'Founder',
    icon: '✕',
    link: { label: 'View Artbox', href: 'https://artbox.studio' },
    body: [
      "In November 2024, I launched Artbox Studio to stay sharp while seeking the right full-time UX role. Running my own consultancy has taught me project management, stakeholder communication, and the importance of delivering work that drives real business results, not just wins design awards.",
      "While I've enjoyed the entrepreneurial experience, I'm specifically looking for a UX role at an established company where I can focus on product work, collaborate with strong teams, and contribute to meaningful growth.",
    ],
  },
];

const reads = [
  {
    title: 'Google UX Design Certificate',
    date: 'March 2022',
    body: "Google's comprehensive UX program that taught me the fundamentals of user-centered design thinking. This course solidified my understanding of design research, wireframing, prototyping, and testing methodologies. What I loved most was the emphasis on real-world application and iterative design processes that I still use in every project today.",
  },
  {
    title: 'Complete Web & Mobile Designer: UI/UX, Figma by Andrei Neagoie',
    date: 'April 2024',
    body: "An in-depth course that elevated my Figma skills and design system thinking. Neagoie's practical approach to both web and mobile design helped me understand responsive design principles and component-based design workflows. The course's focus on real-world projects and industry best practices directly improved how I approach design handoffs and maintain consistency across platforms.",
  },
  {
    title: 'Motion Design with Figma: Animations, Motion Graphics, UX/UI by Andrei Neagoie',
    date: 'April 2024',
    body: "This course transformed how I think about micro-interactions and animation in user interfaces. Learning to create meaningful motion graphics and transitions in Figma helped me communicate user flows more effectively and add polish to my designs. The skills from this course now influence how I prototype interactions and collaborate with developers on animation specifications.",
  },
  {
    title: "Don't Make Me Think by Steve Krug",
    date: 'January 2025',
    body: "The classic usability bible that changed how I approach web design. Krug's principles of intuitive navigation and reducing cognitive load became core to my design philosophy. This book taught me that the best interfaces are invisible — users should accomplish their goals without having to think about how to use the interface itself.",
  },
  {
    title: 'Learning new stuff 😊',
    date: 'Currently',
    body: 'The learning never stops...',
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
    <div className="min-h-screen bg-[#141414] text-[#E4E3E0] font-sans selection:bg-[#E4E3E0] selection:text-[#141414]">
      <Navigation onOpenContact={() => setIsContactModalOpen(true)} />

      <main className="pt-28 px-10">
        {/* Page Header */}
        <motion.div
          className="pb-12"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <p className="text-sm text-gray-500 mb-2">About</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            About Me<span className="text-[#F45D01]">.</span>
          </h1>
        </motion.div>

        {/* Bio */}
        <motion.div
          className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-8 mb-4"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
        >
          <div className="space-y-5 text-gray-300 text-base leading-relaxed">
            <p>
              Hi, I'm Bukunmi — Oluwabukunmi David Isijola if we're being formal. I've been a creator for as long as I can remember. Growing up, I was the kid always scribbling something; drawing comic books with my brother, filling entire notebooks with stories to share with friends who'd eagerly await the next chapter. That early love for visual storytelling shaped everything that came after.
            </p>
            <p>
              As I got older, my canvas evolved. I moved from paper to pixels, teaching myself tools like Illustrator and Photoshop to create and tell stories digitally. Then came university and a Computer Science degree, where I discovered I could express creativity through code — HTML, CSS, JavaScript, React. Frontend development wasn't just technical; it was another form of creative expression.
            </p>
            <p>
              Fast forward through a Master's in Computer Science and 4+ years designing fintech and SaaS products, and here I am: a Product Designer who bridges design and development. I understand what users need and what engineers can build, which means I create experiences that don't just look good — they work, they scale, and they drive measurable business impact.
            </p>
            <p className="text-gray-400">
              Currently running Artbox Studio while exploring Senior Product Designer opportunities at companies building products that matter.
            </p>
          </div>
        </motion.div>

        {/* Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {expertise.map((item, i) => (
            <motion.div
              key={item.title}
              className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-8 flex flex-col gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={i}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold">
                    {item.title}{' '}
                    <span className="text-gray-600 font-normal text-sm">{item.icon}</span>
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
              <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                {item.body.map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* My Reads */}
        <motion.div
          className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
            My Reads<span className="text-[#F45D01]">.</span>
          </h2>

          <div className="divide-y divide-gray-800">
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
                <p className="text-sm text-gray-400 leading-relaxed">{read.body}</p>
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
