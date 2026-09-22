import React from 'react';
import { MapPin, Phone, CheckCircle, ShieldCheck, Heart } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_DATA } from '../data/business';
import { RatingBadge } from '../components/RatingBadge';
import workshopImage from '../assets/images/soap_workshop_1789837106289.jpg';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="pt-14 pb-12 bg-[#FAF7F2] border-b border-[#EAE1D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8C735B] font-semibold block">
            Our Marseille Workshop
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#241E1A] font-bold tracking-tight">
            About Savonnerie Locale
          </h1>
          <p className="text-base sm:text-lg text-[#5F5045] leading-relaxed max-w-2xl mx-auto">
            A small artisan soap maker located at 33 Rue Paradis in Marseille, dedicated to creating handmade soaps, scented products, and everyday personal-care items.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* 1. Who We Are */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5 text-[#4E4137] text-base leading-relaxed">
            <h2 className="font-serif text-3xl font-bold text-[#241E1A]">
              Crafting Personal Care with Purpose
            </h2>
            <p>
              Savonnerie Locale operates as a dedicated artisan soap maker in the historic coastal city of Marseille. Our workshop is founded on a straightforward mission: producing reliable, finely crafted soaps and personal-care items that bring tangible quality to everyday domestic living.
            </p>
            <p>
              Rather than pursuing large-scale industrial output, we keep our operations centered on careful, small-batch artisan methods. This scale allows us to examine every bar, monitor curing conditions, and ensure that every item meets our high artisan benchmarks before reaching our patrons.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <RatingBadge size="md" />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-[#E2D8CD] shadow-xs bg-[#ECE4DA]">
              <img
                src={workshopImage}
                alt="Savonnerie Locale workshop interior with cured artisan soaps"
                className="w-full h-[320px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-[#E5DCD0]" />

        {/* 2. Our Focus Areas */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="font-serif text-3xl font-bold text-[#241E1A]">
              Our Workshop Disciplines
            </h2>
            <p className="text-sm sm:text-base text-[#615145] leading-relaxed">
              We concentrate our efforts on three complementary categories of handmade personal care:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#FAF7F2] border border-[#E2D8CD] space-y-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#8A7156]">Pillar I</span>
              <h3 className="font-serif text-xl font-bold text-[#2A2420]">Handmade Soaps</h3>
              <p className="text-xs sm:text-sm text-[#5C4D42] leading-relaxed">
                Hand-poured and hand-cut soap bars that celebrate tactile texture, solid durability, and gentle daily cleansing.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#FAF7F2] border border-[#E2D8CD] space-y-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#8A7156]">Pillar II</span>
              <h3 className="font-serif text-xl font-bold text-[#2A2420]">Scented Products</h3>
              <p className="text-xs sm:text-sm text-[#5C4D42] leading-relaxed">
                Harmonious scented goods and fragrant personal items presented with understated French aesthetic elegance.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#FAF7F2] border border-[#E2D8CD] space-y-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#8A7156]">Pillar III</span>
              <h3 className="font-serif text-xl font-bold text-[#2A2420]">Everyday Personal-Care</h3>
              <p className="text-xs sm:text-sm text-[#5C4D42] leading-relaxed">
                Thoughtful, functional personal-care creations made in small batches for consistent morning and evening routines.
              </p>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-[#E5DCD0]" />

        {/* 3. Authentic Marseille Identity */}
        <section className="p-8 sm:p-10 rounded-2xl bg-[#F4EEE7] border border-[#E2D8CD] space-y-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#8C735B] font-semibold block">
              Local Connection
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#241E1A]">
              Situated on Rue Paradis in Marseille
            </h2>
            <p className="text-base text-[#56483E] leading-relaxed max-w-3xl">
              Savonnerie Locale is proud to be based at 33 Rue Paradis in Marseille (postal code 13006). Rue Paradis is one of Marseille’s renowned thoroughfares, known for its elegant architecture, boutique shops, and proximity to the historic Old Port (Vieux-Port).
            </p>
            <p className="text-base text-[#56483E] leading-relaxed max-w-3xl">
              Our presence in Marseille keeps us directly connected to our local patrons and the enduring tradition of Mediterranean soap craftsmanship. We welcome inquiries by telephone and are always pleased to share details regarding our latest creations.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-6 text-sm text-[#4E4137]">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#8C6D4A]" />
              <span className="font-medium">{BUSINESS_DATA.address.full}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#8C6D4A]" />
              <a
                href={`tel:${BUSINESS_DATA.phone.tel}`}
                className="font-medium hover:underline text-[#2A2420]"
              >
                {BUSINESS_DATA.phone.display}
              </a>
            </div>
          </div>
        </section>

        {/* CTA Card */}
        <div className="text-center pt-4">
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#38302A] hover:bg-[#231D19] text-[#FAF7F2] font-semibold text-xs uppercase tracking-wider transition-colors shadow-xs"
          >
            Contact Savonnerie Locale
          </button>
        </div>

      </div>
    </div>
  );
};
