import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { X, ArrowUpRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/20 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-2xl bg-[#141414] text-[#E4E3E0] z-[101] overflow-y-auto shadow-2xl border-l border-gray-800"
          >
            <div className="p-8 md:p-12">
              <button 
                onClick={onClose}
                className="absolute top-8 right-8 p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>

              <div className="mb-12">
                <p className="text-sm font-medium text-gray-400 mb-4">Contact</p>
                <h2 className="text-4xl font-medium mb-4">Let's Work Together</h2>
                <p className="text-gray-400">
                  Got a role, project, or just want to chat about design? Fill in the form and I'll get back to you soon.
                </p>
              </div>

              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-900/30 text-green-400 border border-green-900/50 p-6 rounded-xl"
                >
                  Thank you! Your submission has been received!
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name <span className="text-gray-500">*</span></label>
                      <input required type="text" placeholder="First name" className="w-full p-4 bg-[#1A1A1A] rounded-xl border border-transparent focus:border-gray-700 focus:bg-[#222] outline-none transition-all placeholder:text-gray-500" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name <span className="text-gray-500">*</span></label>
                      <input required type="text" placeholder="Last name" className="w-full p-4 bg-[#1A1A1A] rounded-xl border border-transparent focus:border-gray-700 focus:bg-[#222] outline-none transition-all placeholder:text-gray-500" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address <span className="text-gray-500">*</span></label>
                      <input required type="email" placeholder="email@company.com" className="w-full p-4 bg-[#1A1A1A] rounded-xl border border-transparent focus:border-gray-700 focus:bg-[#222] outline-none transition-all placeholder:text-gray-500" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone Number</label>
                      <input type="tel" placeholder="07000-000000" className="w-full p-4 bg-[#1A1A1A] rounded-xl border border-transparent focus:border-gray-700 focus:bg-[#222] outline-none transition-all placeholder:text-gray-500" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Enquiry Type <span className="text-gray-500">*</span></label>
                    <select required className="w-full p-4 bg-[#1A1A1A] rounded-xl border border-transparent focus:border-gray-700 focus:bg-[#222] outline-none transition-all appearance-none text-[#E4E3E0]">
                      <option value="" hidden>Select one...</option>
                      <option value="job">Job opportunity</option>
                      <option value="freelance">Freelance project</option>
                      <option value="general">General inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message <span className="text-gray-500">*</span></label>
                    <textarea required placeholder="Your message" rows={4} className="w-full p-4 bg-[#1A1A1A] rounded-xl border border-transparent focus:border-gray-700 focus:bg-[#222] outline-none transition-all resize-none placeholder:text-gray-500" />
                  </div>

                  <div className="flex items-center gap-3">
                    <input required type="checkbox" id="privacy" className="w-5 h-5 rounded border-gray-700 bg-[#1A1A1A] text-[#E4E3E0] focus:ring-[#E4E3E0] focus:ring-offset-[#141414]" />
                    <label htmlFor="privacy" className="text-sm text-gray-400">
                      I have read and agree to the <Link to="/privacy-policy" className="underline hover:text-[#E4E3E0]">Privacy Policy</Link>
                    </label>
                  </div>

                  <button type="submit" className="flex items-center justify-center w-full gap-2 bg-[#E4E3E0] text-[#141414] px-6 py-4 rounded-xl text-sm font-medium hover:bg-opacity-90 transition-colors mt-8">
                    <ArrowUpRight size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
