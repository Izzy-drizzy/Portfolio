import {StrictMode, Suspense, lazy, useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import App from './App.tsx';
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.tsx'));
const Work = lazy(() => import('./pages/Work.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const CaseStudyHobpay = lazy(() => import('./pages/CaseStudyHobpay.tsx'));
const CaseStudyMoolapay = lazy(() => import('./pages/CaseStudyMoolapay.tsx'));
const CaseStudyHealf = lazy(() => import('./pages/CaseStudyHealf.tsx'));
const CaseStudyLeadTrader = lazy(() => import('./pages/CaseStudyLeadTrader.tsx'));
const CaseStudyEdusmart = lazy(() => import('./pages/CaseStudyEdusmart.tsx'));
const CaseStudyHealfZone2 = lazy(() => import('./pages/CaseStudyHealfZone2.tsx'));
const CaseStudyUrbanNest = lazy(() => import('./pages/CaseStudyUrbanNest.tsx'));
const CaseStudyFreshRoute = lazy(() => import('./pages/CaseStudyFreshRoute.tsx'));
const CaseStudyNexora = lazy(() => import('./pages/CaseStudyNexora.tsx'));
const CaseStudySpotifySoundMatch = lazy(() => import('./pages/CaseStudySpotifySoundMatch.tsx'));
const CaseStudyMonzoLeftToSpend = lazy(() => import('./pages/CaseStudyMonzoLeftToSpend.tsx'));
const CaseStudyArtboxHQ = lazy(() => import('./pages/CaseStudyArtboxHQ.tsx'));
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
        <Suspense fallback={<div className="min-h-screen bg-[var(--bg)]" />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/work/Hobpay" element={<CaseStudyHobpay />} />
          <Route path="/work/artbox-hq" element={<CaseStudyArtboxHQ />} />
          <Route path="/work/Moolapay" element={<CaseStudyMoolapay />} />
          <Route path="/work/healf" element={<CaseStudyHealf />} />
          <Route path="/work/LeadTrader" element={<CaseStudyLeadTrader />} />
          <Route path="/work/Edusmart" element={<CaseStudyEdusmart />} />
          <Route path="/work/healf-zone-2" element={<CaseStudyHealfZone2 />} />
          <Route path="/work/UrbanNest" element={<CaseStudyUrbanNest />} />
          <Route path="/work/FreshRoute" element={<CaseStudyFreshRoute />} />
          <Route path="/work/Nexora" element={<CaseStudyNexora />} />
          <Route path="/work/spotify-sound-match" element={<CaseStudySpotifySoundMatch />} />
          <Route path="/for/monzo" element={<CaseStudyMonzoLeftToSpend />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
    </HelmetProvider>
  </StrictMode>,
);
