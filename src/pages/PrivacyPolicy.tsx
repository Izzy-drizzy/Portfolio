import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#141414] text-[#E4E3E0]">
      <div className="max-w-3xl mx-auto px-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#E4E3E0] transition-colors mb-12"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <p className="text-sm text-gray-400 mb-4">Last updated: March 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Privacy Policy<span className="text-[#F45D01]">.</span>
          </h1>
          <p className="text-gray-400 mb-16 text-sm leading-relaxed">
            This policy explains how information submitted through the contact form on this website is handled.
          </p>

          <div className="space-y-12 text-sm leading-relaxed">

            <section className="border-t border-gray-800 pt-8">
              <h2 className="text-lg font-bold mb-4">1. What information is collected</h2>
              <p className="text-gray-400">
                When you submit the contact form, I collect only the information you provide — your name, email address, phone number (if given), enquiry type, and your message.
              </p>
            </section>

            <section className="border-t border-gray-800 pt-8">
              <h2 className="text-lg font-bold mb-4">2. How your information is used</h2>
              <p className="text-gray-400">
                Your information is used solely to respond to your enquiry. I will only contact you in direct relation to what you have reached out about — nothing else. Your details will not be used for marketing, newsletters, or any unsolicited communication.
              </p>
            </section>

            <section className="border-t border-gray-800 pt-8">
              <h2 className="text-lg font-bold mb-4">3. Data sharing</h2>
              <p className="text-gray-400">
                Your information is not sold, rented, or shared with any third parties. It is not used for advertising purposes and will not be passed to any external organisations.
              </p>
            </section>

            <section className="border-t border-gray-800 pt-8">
              <h2 className="text-lg font-bold mb-4">4. Data retention</h2>
              <p className="text-gray-400">
                Contact form submissions are retained only for as long as necessary to handle your enquiry. Once our conversation is concluded, your data is no longer actively stored or used.
              </p>
            </section>

            <section className="border-t border-gray-800 pt-8">
              <h2 className="text-lg font-bold mb-4">5. Your rights</h2>
              <p className="text-gray-400">
                You have the right to request deletion of any personal information you have submitted. To do so, get in touch and I will action your request promptly.
              </p>
            </section>

            <section className="border-t border-gray-800 pt-8">
              <h2 className="text-lg font-bold mb-4">6. Contact</h2>
              <p className="text-gray-400">
                If you have any questions about this privacy policy or how your data is handled, please reach out directly via the contact form on the homepage.
              </p>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
