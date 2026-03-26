/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Stack from './components/Stack';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans">
      <Preloader />
      <Navigation onOpenContact={() => setIsContactModalOpen(true)} />
      <main>
        <Hero onOpenContact={() => setIsContactModalOpen(true)} />
        <About />
        <Stack />
        <Testimonials />
        <CTA onOpenContact={() => setIsContactModalOpen(true)} />
      </main>
      <Footer />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}
