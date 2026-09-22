import React from 'react';
import { ArrowRight, Phone, ShieldCheck, Sparkles, Layers } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_DATA } from '../data/business';
import scentedCareImage from '../assets/images/scented_care_1789837119328.jpg';

interface SoapsBodyCarePageProps {
  onNavigate: (page: PageId) => void;
}

export const SoapsBodyCarePage: React.FC<SoapsBodyCarePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="pt-14 pb-12 bg-[#FAF7F2] border-b border-[#EAE1D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8C735B] font-semibold block">
            Atelier Creations
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#241E1A] font-bold tracking-tight">
            Soaps & Body Care
          </h1>
          <p className="text-base sm:text-lg text-[#5F5045] leading-relaxed max-w-2xl mx-auto">
            Discover the three foundational pillars of our artisan production: handmade soaps, scented products, and everyday personal-care items crafted locally at Savonnerie Locale in Marseille.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* 1. HANDMADE SOAPS SECTION */}
        <section id="handmade-soaps" className="scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#8A7156] font-semibold">
                Category I
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#241E1A] font-bold">
                Handmade Soaps
              </h2>
              <p className="text-sm font-medium text-[#736052] italic">
                The authentic appeal of genuine artisan soapmaking
              </p>
              <div className="pt-4">
                <div className="p-5 rounded-xl bg-[#F4EEE7] border border-[#E3D9CD] space-y-2">
                  <h3 className="font-serif font-bold text-base text-[#2A2420] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#8C6D4A]" />
                    Artisan Soap Characteristics
                  </h3>
                  <ul className="text-xs text-[#635347] space-y-1.5 leading-relaxed">
                    <li>• Distinctive tactile texture and hand-cut individuality</li>
                    <li>• Balanced lather suited for regular handwashing and washing</li>
                    <li>• Solid, durable bars cured for daily longevity</li>
                    <li>• Made without industrialized shortcuts or automated extrusion</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 text-[#4E4137] text-base leading-relaxed">
              <p>
                Handmade soap occupies a unique place in the rhythm of the home. Unlike mass-manufactured detergent bars that are pressed rapidly through high-speed industrial machinery, artisan soap retains the tangible mark of the maker’s hand. Each bar is mixed, poured into molds, allowed to set, and individually cut with precision.
              </p>
              <p>
                The enduring appeal of handmade soap lies in its character. From the subtle natural variations along its beveled edges to the rich, smooth touch of the bar when worked into water, artisan soap delivers a grounded, satisfying tactile experience. It honors the historical legacy of Marseille as a world center for soap craft, while offering everyday practical utility for modern bathrooms and washstands.
              </p>
              <p>
                By keeping production centered on small artisan batches, we can observe every phase of development, ensuring that each soap bar possesses the weight, balance, and firmness that discerning patrons expect from an independent Marseille soapmaker.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#38302A] hover:bg-[#231D19] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  <span>Enquire About Current Bars</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION DIVIDER WITH ARTISAN DETAIL */}
        <div className="w-full h-px bg-[#E5DCD0]" />

        {/* 2. SCENTED PRODUCTS SECTION (WITH CAREFULLY SELECTED IMAGE) */}
        <section id="scented-products" className="scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-[#E2D8CD] shadow-xs bg-[#ECE4DA]">
                <img
                  src={scentedCareImage}
                  alt="Minimalist artisan personal care and scented products on limestone counter"
                  className="w-full h-[360px] sm:h-[420px] object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-[#FAF7F2] border-t border-[#E5DCD0] text-xs text-[#6A5A4E]">
                  <span className="font-semibold text-[#2C241E]">Scent & Presentation:</span> Balanced aromatic creations designed to harmonize with domestic spaces.
                </div>
              </div>
            </div>

            {/* Copy */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <span className="text-xs uppercase tracking-wider text-[#8A7156] font-semibold">
                Category II
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#241E1A] font-bold">
                Scented Products
              </h2>
              <p className="text-sm font-medium text-[#736052] italic">
                Aromatic balance, calm presentation, and sensory harmony
              </p>

              <div className="space-y-4 text-base text-[#4E4137] leading-relaxed">
                <p>
                  Scent plays an evocative role in our perception of atmosphere and self-care. At Savonnerie Locale, our scented products are created with a deep respect for restraint. Rather than overwhelming the senses with aggressive or cloying artificial notes, our aromatic creations are formulated to provide a calm, balanced backdrop to daily life.
                </p>
                <p>
                  Equally important to the fragrance is the presentation. We approach packaging and visual design with minimalist elegance—using understated wrappers, clean labeling, and natural packaging materials that sit beautifully on a wooden shelf, a stone vanity, or a linen cabinet. Each scented item is crafted to feel like a thoughtful gift to oneself or a guest.
                </p>
                <p>
                  Because our scented goods are produced in measured batches, their aromatic profiles maintain freshness and integrity. We invite you to contact our workshop directly to inquire about currently prepared aromatic pieces.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${BUSINESS_DATA.phone.tel}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#38302A] hover:text-[#7A5A3D] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#8C6D4A]" />
                  <span>Call {BUSINESS_DATA.phone.display} for Current Fragrance Profiles</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION DIVIDER */}
        <div className="w-full h-px bg-[#E5DCD0]" />

        {/* 3. EVERYDAY PERSONAL-CARE ITEMS */}
        <section id="personal-care" className="scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#8A7156] font-semibold">
                Category III
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#241E1A] font-bold">
                Everyday Personal-Care Items
              </h2>
              <p className="text-sm font-medium text-[#736052] italic">
                Mindful creations for grounded daily hygiene
              </p>
              <div className="pt-4">
                <div className="p-5 rounded-xl bg-[#F4EEE7] border border-[#E3D9CD] space-y-3">
                  <h3 className="font-serif font-bold text-base text-[#2A2420] flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#8C6D4A]" />
                    Everyday Craft Principles
                  </h3>
                  <p className="text-xs text-[#635347] leading-relaxed">
                    Personal care items at Savonnerie Locale are created to accompany real daily routines. They combine artisan integrity with straightforward, dependable function.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 text-[#4E4137] text-base leading-relaxed">
              <p>
                True luxury in self-care is not about unnecessary excess; it is found in the quality of items we use every single day. Savonnerie Locale produces personal-care essentials designed to enrich normal morning and evening routines with tactile comfort and visual simplicity.
              </p>
              <p>
                Whether prepared for regular washstands, bathing routines, or gentle cleansing, our everyday creations reflect our unwavering commitment to small-scale artisan standards. We believe personal-care items should be safe, dependable, and pleasant to use, free from needless gimmicks or artificial inflation.
              </p>
              <p>
                By sourcing and manufacturing locally in Marseille, we maintain direct oversight over our entire workshop process, ensuring each batch meets the high expectations reflected in our 4.9/5 Google rating.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#38302A] hover:bg-[#231D19] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  <span>Request Atelier Information</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('craft')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-transparent hover:bg-[#F2ECE3] text-[#2C2723] text-xs uppercase tracking-wider font-semibold transition-colors border border-[#D5C9BD]"
                >
                  <span>Our Craft Philosophy</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CARE & STORAGE PRACTICAL NOTES */}
        <section className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#E4DACF] shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-[#8C6D4A]">
            <Sparkles className="w-5 h-5" />
            <h3 className="font-serif text-2xl font-bold text-[#2A2420]">
              Caring for Your Artisan Creations
            </h3>
          </div>
          <p className="text-sm text-[#5C4D42] leading-relaxed max-w-3xl">
            Because handmade soaps are crafted without synthetic hardening chemicals found in commercial bars, proper care preserves their longevity. We recommend placing your bar on a ridged or slotted dish that allows water to drain freely and air to circulate around all sides. Keep scented items away from prolonged direct midday sunlight to maintain their delicate aromatic notes.
          </p>
        </section>

      </div>
    </div>
  );
};
