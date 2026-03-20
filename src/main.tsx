import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import Work from './pages/Work.tsx';
import About from './pages/About.tsx';
import CaseStudyHobpay from './pages/CaseStudyHobpay.tsx';
import CaseStudyMoolapay from './pages/CaseStudyMoolapay.tsx';
import CaseStudyHealf from './pages/CaseStudyHealf.tsx';
import CaseStudyLeadTrader from './pages/CaseStudyLeadTrader.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/work/Hobpay" element={<CaseStudyHobpay />} />
        <Route path="/work/Moolapay" element={<CaseStudyMoolapay />} />
        <Route path="/work/healf" element={<CaseStudyHealf />} />
        <Route path="/work/LeadTrader" element={<CaseStudyLeadTrader />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
