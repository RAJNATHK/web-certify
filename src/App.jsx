import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Certifications from './pages/Certifications';
import CertificationDetails from './pages/CertificationDetails';
import Assessment from './pages/Assessment';
import Results from './pages/Results';
import CertificateView from './pages/CertificateView';
import Verify from './pages/Verify';
import Articles from './pages/Articles';
import ArticleDetails from './pages/ArticleDetails';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Legal from './pages/Legal';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 antialiased font-sans selection:bg-brand-500 selection:text-white">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/certifications/:id" element={<CertificationDetails />} />
            <Route path="/assessment/:id" element={<Assessment />} />
            <Route path="/results" element={<Results />} />
            <Route path="/certificate" element={<CertificateView />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:slug" element={<ArticleDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
