import React, { useState } from 'react';
import { ChevronDown, Phone, MessageSquare, HelpCircle } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_DATA, FAQ_LIST } from '../data/business';

interface FAQPageProps {
  onNavigate: (page: PageId) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'handmade-soaps-nature': true,
    'scented-creations': true
  });
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredFAQs = activeFilter === 'all'
    ? FAQ_LIST
    : FAQ_LIST.filter((item) => item.category === activeFilter);

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="pt-14 pb-12 bg-[#FAF7F2] border-b border-[#EAE1D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8C735B] font-semibold block">
            Visitor Guidance
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#241E1A] font-bold tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-[#5F5045] leading-relaxed max-w-2xl mx-auto">
            Practical information about our handmade soaps, scented products, everyday personal-care items, and how to reach our Marseille atelier.
          </p>
        </div>
      </section>

      {/* Main FAQ Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
          {[
            { id: 'all', label: 'All Questions' },
            { id: 'soaps', label: 'Handmade Soaps' },
            { id: 'scented', label: 'Scented Products' },
            { id: 'personal-care', label: 'Personal Care' },
            { id: 'contact', label: 'Visiting & Contact' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeFilter === cat.id
                  ? 'bg-[#38302A] text-[#FAF7F2]'
                  : 'bg-[#F2ECE3] text-[#5C4D42] hover:bg-[#EAE1D5] hover:text-[#2A2420]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion Questions */}
        <div className="space-y-4" role="region" aria-label="FAQ Accordion">
          {filteredFAQs.map((faq) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div
                key={faq.id}
                className="rounded-xl border border-[#E3D9CD] bg-[#FAF7F2] overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-[#F6F0E8] transition-colors focus-visible:outline-[#9C826B]"
                >
                  <span className="font-serif text-lg sm:text-xl font-bold text-[#2A2420] pr-2">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8C6D4A] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className="px-6 pb-6 pt-2 text-[#56483E] text-base leading-relaxed border-t border-[#EFE8DE] bg-[#FAF7F2]"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Questions Notice & Explicit Contact Directives */}
        <div className="p-8 rounded-2xl bg-[#F4EEE7] border border-[#E2D8CD] space-y-4 text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:space-y-0 gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-serif text-2xl font-bold text-[#2A2420] flex items-center justify-center sm:justify-start gap-2">
              <HelpCircle className="w-5 h-5 text-[#8C6D4A]" />
              Have a Specific or Unlisted Question?
            </h3>
            <p className="text-sm text-[#5C4D42] leading-relaxed">
              For questions regarding current batch availability, bespoke gifts, or workshop inquiries, please contact Savonnerie Locale directly. We are always pleased to provide direct answers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              id="faq-call-btn"
              href={`tel:${BUSINESS_DATA.phone.tel}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#38302A] hover:bg-[#231D19] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Atelier</span>
            </a>
            <button
              id="faq-contact-btn"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-transparent hover:bg-[#EAE0D3] text-[#2A2420] text-xs uppercase tracking-wider font-semibold transition-colors border border-[#D5C9BD]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Send Message</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
