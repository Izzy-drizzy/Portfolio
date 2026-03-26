import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { X, ArrowUpRight, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

// ─── EmailJS config ────────────────────────────────────────────────────────────
// Replace these three values after setting up your EmailJS account
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  ?? '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '';
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  ?? '';
// ───────────────────────────────────────────────────────────────────────────────

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const [fields, setFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: '',
  });

  const set = (key: keyof typeof fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFields((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    `${fields.firstName} ${fields.lastName}`.trim(),
          from_email:   fields.email,
          phone:        fields.phone || 'Not provided',
          enquiry_type: fields.enquiryType,
          message:      fields.message,
        },
        EMAILJS_PUBLIC_KEY,
      );

      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setFields({ firstName: '', lastName: '', email: '', phone: '', enquiryType: '', message: '' });
        onClose();
      }, 3500);
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full p-4 bg-[#1A1A1A] rounded-xl border border-transparent focus:border-gray-700 focus:bg-[#222] outline-none transition-all placeholder:text-gray-500';

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
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
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
                  Message sent! I'll get back to you shortly.
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name <span className="text-gray-500">*</span></label>
                      <input
                        required
                        type="text"
                        placeholder="First name"
                        value={fields.firstName}
                        onChange={set('firstName')}
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name <span className="text-gray-500">*</span></label>
                      <input
                        required
                        type="text"
                        placeholder="Last name"
                        value={fields.lastName}
                        onChange={set('lastName')}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address <span className="text-gray-500">*</span></label>
                      <input
                        required
                        type="email"
                        placeholder="email@company.com"
                        value={fields.email}
                        onChange={set('email')}
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="07000-000000"
                        value={fields.phone}
                        onChange={set('phone')}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Enquiry Type <span className="text-gray-500">*</span></label>
                    <select
                      required
                      value={fields.enquiryType}
                      onChange={set('enquiryType')}
                      className={`${inputClass} appearance-none text-[#E4E3E0]`}
                    >
                      <option value="" hidden>Select one...</option>
                      <option value="Job opportunity">Job opportunity</option>
                      <option value="Freelance project">Freelance project</option>
                      <option value="General inquiry">General inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message <span className="text-gray-500">*</span></label>
                    <textarea
                      required
                      placeholder="Your message"
                      rows={4}
                      value={fields.message}
                      onChange={set('message')}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      required
                      type="checkbox"
                      id="privacy"
                      className="w-5 h-5 rounded border-gray-700 bg-[#1A1A1A] text-[#E4E3E0] focus:ring-[#E4E3E0] focus:ring-offset-[#141414]"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-400">
                      I have read and agree to the{' '}
                      <Link to="/privacy-policy" className="underline hover:text-[#E4E3E0]">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-red-400">
                      Something went wrong. Please try again or email me directly at{' '}
                      <a href="mailto:isijolabukunmi@gmail.com" className="underline">
                        isijolabukunmi@gmail.com
                      </a>
                      .
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="flex items-center justify-center w-full gap-2 bg-[#E4E3E0] text-[#141414] px-6 py-4 rounded-xl text-sm font-medium hover:bg-opacity-90 transition-colors mt-8 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <ArrowUpRight size={16} />
                        Send Message
                      </>
                    )}
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
