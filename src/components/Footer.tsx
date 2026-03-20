import { Link } from 'react-router-dom';
import Clock from './Clock';

export default function Footer() {
  return (
    <footer className="bg-[#141414] text-[#E4E3E0] pt-24 pb-12 px-10 mt-12 border-t border-gray-800">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-24">
          
          {/* Left Column */}
          <div className="lg:col-span-4">
            <div className="mb-8">
              <Clock />
            </div>
            <div className="text-gray-400 text-sm space-y-2">
              <p>Mon to Fri, 9AM - 5:30PM</p>
              <p>Sat, 10AM - 2PM</p>
              <p>Sundays & Bank Holidays, Closed</p>
            </div>
          </div>

          {/* Middle Column */}
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="text-gray-400 text-sm space-y-2 mb-8">
              <p>Based in Cambridge,</p>
              <p>Cambridgeshire, United Kingdom</p>
            </div>

            <a
              href="https://www.google.com/maps/place/Cambridge/@52.2053,0.1218,14z"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-sm font-medium hover:opacity-70 transition-opacity mb-8"
            >
              52.2053° N, 0.1218° E
            </a>

            <div className="flex flex-wrap gap-6 text-sm">
              <a href="mailto:hello@bukunmiisijola.com" className="text-gray-400 hover:text-[#E4E3E0] transition-colors">Mail</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#E4E3E0] transition-colors">Instagram</a>
              <a href="https://behance.net" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#E4E3E0] transition-colors">Behance</a>
              <a href="https://linkedin.com/in/bukunmiisijola" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#E4E3E0] transition-colors">LinkedIn</a>
              <a href="https://x.com/bukunmiisijola" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#E4E3E0] transition-colors">X</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-3 items-center text-sm text-gray-500 border-t border-gray-800 pt-8">
          <span>© {new Date().getFullYear()} Bukunmi Isijola. All Rights Reserved.</span>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-gray-300 transition-colors text-center">
            Back to top
          </button>
          <div className="flex justify-end">
            <Link to="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
          </div>
        </div>

        {/* Big Logo */}
        <div className="mt-24 flex justify-center">
          <img src="/logo.svg" alt="Bukunmi Isijola" className="w-[60vw] max-w-3xl opacity-10 select-none" />
        </div>
      </div>
    </footer>
  );
}
