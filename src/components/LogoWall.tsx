import { motion } from 'motion/react';
import { Shield, Hexagon, Triangle, Circle, Square, Star } from 'lucide-react';

export default function LogoWall() {
  const logos = [
    { id: 1, icon: Shield },
    { id: 2, icon: Hexagon },
    { id: 3, icon: Triangle },
    { id: 4, icon: Circle },
    { id: 5, icon: Square },
    { id: 6, icon: Star },
  ];

  return (
    <section className="py-24 px-10 max-w-7xl mx-auto border-t border-gray-800">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-50">
        {logos.map((logo) => (
          <motion.div
            key={logo.id}
            whileHover={{ scale: 1.1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center w-full aspect-video"
          >
            <logo.icon size={48} strokeWidth={1} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
