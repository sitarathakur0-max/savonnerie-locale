import React, { useState, useEffect, useCallback } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PageSEO } from './components/PageSEO';
import { HomePage } from './pages/HomePage';
import { SoapsBodyCarePage } from './pages/SoapsBodyCarePage';
import { ArtisanCraftPage } from './pages/ArtisanCraftPage';
import { AboutPage } from './pages/AboutPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';

const PATH_TO_PAGE: Record<string, PageId> = {
  '/': 'home',
  '/soaps-and-body-care': 'soaps',
  '/artisan-craft': 'craft',
  '/about': 'about',
  '/faq': 'faq',
  '/contact': 'contact'
};

const PAGE_TO_PATH: Record<PageId, string> = {
  home: '/',
  soaps: '/soaps-and-body-care',
  craft: '/artisan-craft',
  about: '/about',
  faq: '/faq',
  contact: '/contact'
};

export default function App() {
  const getInitialPage = (): PageId => {
    if (typeof window === 'undefined') return 'home';
    const path = window.location.pathname.toLowerCase();
    return PATH_TO_PAGE[path] || 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      setCurrentPage(PATH_TO_PAGE[path] || 'home');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = useCallback((page: PageId) => {
    setCurrentPage(page);
    const targetPath = PAGE_TO_PATH[page] || '/';
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ page }, '', targetPath);
    }
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'soaps':
        return <SoapsBodyCarePage onNavigate={handleNavigate} />;
      case 'craft':
        return <ArtisanCraftPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'faq':
        return <FAQPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C2723]">
      <PageSEO page={currentPage} />

      {/* Accessible skip link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#2C2723] text-[#FAF7F2] rounded-md shadow-lg"
      >
        Skip to main content
      </a>

      {/* Header with Navigation and Local Atelier Details */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main id="main-content" className="flex-1 w-full" tabIndex={-1}>
        {renderPage()}
      </main>

      {/* Footer with Business Information and Page Links */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
