import React from 'react';
import { MapPin, Phone, Award } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_DATA, NAV_ITEMS } from '../data/business';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#241E1A] text-[#D8CDC2] border-t border-[#3A322C]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-[#3B322B]">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <span className="block font-serif text-2xl tracking-wider text-[#FAF7F2] font-semibold">
              {BUSINESS_DATA.name.toUpperCase()}
            </span>
            <p className="text-xs uppercase tracking-[0.2em] text-[#BFA68D] font-medium">
              Handmade Soap & Body Care · Marseille, France
            </p>
            <p className="text-sm text-[#B3A497] leading-relaxed max-w-md pt-2">
              {BUSINESS_DATA.aboutBrief}
            </p>
            <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-md bg-[#2F2722] border border-[#433831] text-xs text-[#E3D8CD] mt-3">
              <Award className="w-3.5 h-3.5 text-[#D1AA73]" aria-hidden="true" />
              <span>Verified Google Rating: <strong>{BUSINESS_DATA.rating.score}/{BUSINESS_DATA.rating.max}</strong> ({BUSINESS_DATA.rating.reviewCount} Reviews)</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.18em] text-[#FAF7F2] font-semibold">
              Explore Pages
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    id={`footer-nav-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className="text-[#B3A497] hover:text-[#FAF7F2] hover:underline underline-offset-4 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.18em] text-[#FAF7F2] font-semibold">
              Atelier Location & Contact
            </h3>
            <div className="space-y-3.5 text-sm text-[#B3A497]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C9A982] shrink-0 mt-0.5" aria-hidden="true" />
                <address className="not-italic leading-relaxed">
                  <span className="block font-medium text-[#FAF7F2]">{BUSINESS_DATA.name}</span>
                  <span>{BUSINESS_DATA.address.street}</span>
                  <span className="block">{BUSINESS_DATA.address.postalCode} {BUSINESS_DATA.address.city}, {BUSINESS_DATA.address.country}</span>
                </address>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Phone className="w-4 h-4 text-[#C9A982] shrink-0" aria-hidden="true" />
                <a
                  id="footer-phone-link"
                  href={`tel:${BUSINESS_DATA.phone.tel}`}
                  className="font-medium text-[#FAF7F2] hover:text-[#E8D6C4] hover:underline transition-colors focus-visible:outline-white"
                  aria-label={`Call Savonnerie Locale at ${BUSINESS_DATA.phone.display}`}
                >
                  {BUSINESS_DATA.phone.display}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                id="footer-inquire-btn"
                onClick={() => handleNavClick('contact')}
                className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#3F342C] hover:bg-[#4E4137] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold transition-colors border border-[#52443A]"
              >
                Send an Enquiry
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A796E]">
          <p>© {currentYear} {BUSINESS_DATA.name}. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Artisan personal-care creations made in Marseille.
          </p>
        </div>
      </div>
    </footer>
  );
};
