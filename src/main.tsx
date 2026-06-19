import {StrictMode, useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import App from './App.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import Work from './pages/Work.tsx';
import About from './pages/About.tsx';
import CaseStudyHobpay from './pages/CaseStudyHobpay.tsx';
import CaseStudyMoolapay from './pages/CaseStudyMoolapay.tsx';
import CaseStudyHealf from './pages/CaseStudyHealf.tsx';
import CaseStudyLeadTrader from './pages/CaseStudyLeadTrader.tsx';
import CaseStudyEdusmart from './pages/CaseStudyEdusmart.tsx';
import CaseStudyHealfZone2 from './pages/CaseStudyHealfZone2.tsx';
import CaseStudyUrbanNest from './pages/CaseStudyUrbanNest.tsx';
import CaseStudyFreshRoute from './pages/CaseStudyFreshRoute.tsx';
import CaseStudyNexora from './pages/CaseStudyNexora.tsx';
import './index.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/work/Hobpay" element={<CaseStudyHobpay />} />
          <Route path="/work/Moolapay" element={<CaseStudyMoolapay />} />
          <Route path="/work/healf" element={<CaseStudyHealf />} />
          <Route path="/work/LeadTrader" element={<CaseStudyLeadTrader />} />
          <Route path="/work/Edusmart" element={<CaseStudyEdusmart />} />
          <Route path="/work/healf-zone-2" element={<CaseStudyHealfZone2 />} />
          <Route path="/work/UrbanNest" element={<CaseStudyUrbanNest />} />
          <Route path="/work/FreshRoute" element={<CaseStudyFreshRoute />} />
          <Route path="/work/Nexora" element={<CaseStudyNexora />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </HelmetProvider>
  </StrictMode>,
);
