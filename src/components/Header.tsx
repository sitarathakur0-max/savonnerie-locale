import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_DATA, NAV_ITEMS } from '../data/business';
import { RatingBadge } from './RatingBadge';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Local Atelier Info Bar */}
      <div className="bg-[#2A2420] text-[#E7DDD3] text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#C9A982] shrink-0" aria-hidden="true" />
            <span>{BUSINESS_DATA.address.full}</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              id="header-top-phone-link"
              href={`tel:${BUSINESS_DATA.phone.tel}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors underline-offset-2 hover:underline focus-visible:outline-white"
              aria-label={`Call Savonnerie Locale at ${BUSINESS_DATA.phone.display}`}
            >
              <Phone className="w-3 h-3 text-[#C9A982]" aria-hidden="true" />
              <span className="font-medium">{BUSINESS_DATA.phone.display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`w-full bg-[#FAF7F2]/95 backdrop-blur-md border-b transition-colors ${scrolled ? 'border-[#E2D8CC] shadow-xs' : 'border-[#EBE3D7]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo / Atelier Identity */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="text-left group focus-visible:outline-offset-4 focus-visible:outline-[#9C826B]"
            aria-label="Savonnerie Locale - Return to home page"
          >
            <span className="block font-serif text-2xl sm:text-3xl font-bold tracking-wider text-[#2A2420] group-hover:text-[#644D3A] transition-colors">
              SAVONNERIE LOCALE
            </span>
            <span className="block text-[10px] tracking-[0.25em] uppercase text-[#7D6B5E] font-medium mt-0.5">
              Marseille · Artisan Savonnier
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#2A2420] bg-[#EFE9E0] font-semibold'
                      : 'text-[#5C4D42] hover:text-[#2A2420] hover:bg-[#F3EDE4]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTA / Rating */}
          <div className="hidden md:flex items-center gap-4">
            <RatingBadge size="sm" className="hidden xl:inline-flex" />
            <button
              id="header-cta-contact-btn"
              onClick={() => handleNavClick('contact')}
              className="px-4 py-2 rounded-md bg-[#38302A] hover:bg-[#231D19] text-[#FAF7F2] text-sm font-medium transition-colors shadow-xs"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              id="mobile-quick-call"
              href={`tel:${BUSINESS_DATA.phone.tel}`}
              className="p-2 rounded-md text-[#38302A] hover:bg-[#EFE9E0] transition-colors"
              aria-label={`Call ${BUSINESS_DATA.phone.display}`}
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-md text-[#2A2420] hover:bg-[#EFE9E0] focus:outline-hidden focus:ring-2 focus:ring-[#9C826B] transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileMenuOpen ? 'Close main navigation menu' : 'Open main navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden fixed inset-x-0 top-[113px] sm:top-[73px] bottom-0 z-40 bg-black/40 backdrop-blur-xs"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-sm ml-auto h-full bg-[#FAF7F2] p-6 shadow-xl border-l border-[#E2D8CC] flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="pb-4 border-b border-[#E8DFD3] mb-6">
                <p className="font-serif text-xl font-bold text-[#2A2420]">Savonnerie Locale</p>
                <p className="text-xs text-[#7A6B60] mt-1">Handmade Soaps & Body Care · Marseille</p>
              </div>

              <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
                {NAV_ITEMS.map((item) => {
                  const isActive = currentPage === item.id;
                  return (
                    <button
                      key={item.id}
                      id={`mobile-nav-${item.id}`}
                      onClick={() => handleNavClick(item.id)}
                      className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-[#EAE2D7] text-[#2A2420] font-semibold'
                          : 'text-[#5C4D42] hover:bg-[#F2ECE3] hover:text-[#2A2420]'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </nav>

              <div className="mt-8 pt-6 border-t border-[#E8DFD3]">
                <RatingBadge size="md" className="w-full justify-center mb-4" />
              </div>
            </div>

            <div className="pt-6 border-t border-[#E8DFD3] text-sm text-[#67574D] space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#8C6D4A] shrink-0 mt-0.5" />
                <span>{BUSINESS_DATA.address.full}</span>
              </div>
              <a
                href={`tel:${BUSINESS_DATA.phone.tel}`}
                className="flex items-center gap-2 font-medium text-[#2A2420] hover:underline"
              >
                <Phone className="w-4 h-4 text-[#8C6D4A] shrink-0" />
                <span>{BUSINESS_DATA.phone.display}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
