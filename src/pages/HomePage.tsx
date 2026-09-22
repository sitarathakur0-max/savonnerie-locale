import React from 'react';
import { ArrowRight, Sparkles, Compass, HeartHandshake, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_DATA } from '../data/business';
import { RatingBadge } from '../components/RatingBadge';
import heroImage from '../assets/images/soap_hero_1789837092483.jpg';
import workshopImage from '../assets/images/soap_workshop_1789837106289.jpg';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-[#FAF7F2] border-b border-[#EAE1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE8DF] border border-[#DDD3C6] text-xs uppercase tracking-widest text-[#6B5A4D] font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-[#9C7D5A]" aria-hidden="true" />
                  Marseille Artisan Atelier
                </span>
                <RatingBadge size="sm" />
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#241E1A] font-bold tracking-tight leading-[1.15]">
                Handmade Care, Crafted Locally
              </h1>

              <p className="text-lg sm:text-xl text-[#58493F] leading-relaxed max-w-2xl font-normal">
                Handmade soaps, scented products and everyday personal-care creations from a small artisan soap maker in Marseille.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  id="hero-explore-btn"
                  onClick={() => onNavigate('soaps')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#38302A] hover:bg-[#231D19] text-[#FAF7F2] font-medium text-base transition-colors shadow-xs group"
                >
                  <span>Explore Our Creations</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </button>

                <button
                  id="hero-contact-btn"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-transparent hover:bg-[#F2ECE3] text-[#2C2723] font-medium text-base transition-colors border border-[#D5C9BD]"
                >
                  <span>Get in Touch</span>
                </button>
              </div>

              {/* Verified Trust Highlight */}
              <div className="pt-6 border-t border-[#E8DFD3] flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#6F5F54]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8A7156]" aria-hidden="true" />
                  <span>33 Rue Paradis, 13006 Marseille</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8A7156]" aria-hidden="true" />
                  <span>Small-scale artisan production</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8A7156]" aria-hidden="true" />
                  <span>{BUSINESS_DATA.rating.score}/{BUSINESS_DATA.rating.max} on Google Reviews</span>
                </div>
              </div>
            </div>

            {/* Hero Image Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#E5DCD0] bg-[#EFE9DF]">
                <img
                  src={heroImage}
                  alt="Handcrafted artisan soap bars stacked on natural linen cloth with soft sunlight"
                  className="w-full h-[360px] sm:h-[420px] lg:h-[480px] object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#FAF7F2]/90 backdrop-blur-md border border-[#E2D8CC] text-xs text-[#4E4137]">
                  <p className="font-serif font-bold text-sm text-[#2A2420]">Savonnerie Locale</p>
                  <p className="mt-0.5 text-[#6E5E52]">Handcrafted bars and personal-care items prepared at 33 Rue Paradis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE CORE CREATIONS: SUBSTANTIAL CONTENT SECTIONS */}
      <section className="py-20 bg-[#F4EFEA] border-b border-[#E8E0D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#8C735B] font-semibold block mb-2">
              Our Core Offerings
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#241E1A] font-bold leading-tight">
              Artisan Essentials for Everyday Living
            </h2>
            <p className="text-[#5F5045] mt-4 text-base sm:text-lg leading-relaxed">
              At Savonnerie Locale, we focus our daily craft on three complementary areas of personal care: handmade soaps, scented creations, and everyday personal-care goods produced with mindful care in Marseille.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Handmade Soaps */}
            <div className="bg-[#FAF7F2] p-8 rounded-xl border border-[#E2D8CD] shadow-xs flex flex-col justify-between hover:border-[#CFBEAD] transition-all">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-wider text-[#8A7156] font-semibold">
                  Artisan Category 01
                </span>
                <h3 className="font-serif text-2xl text-[#241E1A] font-bold">
                  Handmade Soaps
                </h3>
                <p className="text-[#5C4D42] text-sm leading-relaxed">
                  Our handmade soap bars are created through measured artisan processes that respect the authentic character of traditional soapmaking. Each cut bar possesses a distinct tactile presence, subtle variations in texture, and an understated rustic beauty that turns routine handwashing and bathing into a grounded, sensory moment.
                </p>
                <div className="pt-2 text-xs text-[#7D6B5E] space-y-1.5 border-t border-[#EFE8DE]">
                  <p>• Hand-cut with tactile edges</p>
                  <p>• Crafted in small batches</p>
                  <p>• Clean, balanced formulation approach</p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-[#EFE8DE]">
                <button
                  onClick={() => onNavigate('soaps')}
                  className="text-xs font-semibold uppercase tracking-wider text-[#2A2420] hover:text-[#7A5A3D] inline-flex items-center gap-1.5 group"
                >
                  <span>Read About Our Soaps</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Card 2: Scented Products */}
            <div className="bg-[#FAF7F2] p-8 rounded-xl border border-[#E2D8CD] shadow-xs flex flex-col justify-between hover:border-[#CFBEAD] transition-all">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-wider text-[#8A7156] font-semibold">
                  Artisan Category 02
                </span>
                <h3 className="font-serif text-2xl text-[#241E1A] font-bold">
                  Scented Products
                </h3>
                <p className="text-[#5C4D42] text-sm leading-relaxed">
                  Scent has the quiet power to transform a domestic space or an everyday ritual. Savonnerie Locale crafts scented items focused on balanced, harmonious aromatic experiences that feel natural and inviting in personal spaces, celebrating thoughtful presentation and restraint.
                </p>
                <div className="pt-2 text-xs text-[#7D6B5E] space-y-1.5 border-t border-[#EFE8DE]">
                  <p>• Carefully curated aromatic balance</p>
                  <p>• Elegant, understated presentation</p>
                  <p>• Designed for daily sensory enjoyment</p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-[#EFE8DE]">
                <button
                  onClick={() => onNavigate('soaps')}
                  className="text-xs font-semibold uppercase tracking-wider text-[#2A2420] hover:text-[#7A5A3D] inline-flex items-center gap-1.5 group"
                >
                  <span>Explore Scented Items</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Card 3: Everyday Personal-Care */}
            <div className="bg-[#FAF7F2] p-8 rounded-xl border border-[#E2D8CD] shadow-xs flex flex-col justify-between hover:border-[#CFBEAD] transition-all">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-wider text-[#8A7156] font-semibold">
                  Artisan Category 03
                </span>
                <h3 className="font-serif text-2xl text-[#241E1A] font-bold">
                  Everyday Personal-Care Items
                </h3>
                <p className="text-[#5C4D42] text-sm leading-relaxed">
                  Beyond our signature soap bars, we produce everyday personal-care goods thoughtfully made to support gentle daily hygiene. Produced locally with consistent attention to detail, these items provide a dependable, authentic alternative to mass-market industrial personal care.
                </p>
                <div className="pt-2 text-xs text-[#7D6B5E] space-y-1.5 border-t border-[#EFE8DE]">
                  <p>• Made for dependable everyday routines</p>
                  <p>• Authentic artisan craftsmanship</p>
                  <p>• Sourced and prepared in Marseille</p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-[#EFE8DE]">
                <button
                  onClick={() => onNavigate('soaps')}
                  className="text-xs font-semibold uppercase tracking-wider text-[#2A2420] hover:text-[#7A5A3D] inline-flex items-center gap-1.5 group"
                >
                  <span>Discover Personal Care</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE ARTISAN APPROACH & THOUGHTFUL EVERYDAY CARE */}
      <section className="py-20 bg-[#FAF7F2] border-b border-[#EAE1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Workshop image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-[#E2D8CD] shadow-md bg-[#ECE4DA]">
                <img
                  src={workshopImage}
                  alt="Inside the artisan soapmaking studio with cured soap blocks on wooden shelving"
                  className="w-full h-[380px] sm:h-[440px] object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Philosophy text */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#8C735B] font-semibold block">
                The Artisan Approach
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#241E1A] font-bold leading-tight">
                Thoughtful Care Rooted in Deliberate Craft
              </h2>
              <div className="space-y-4 text-base text-[#594B40] leading-relaxed">
                <p>
                  At Savonnerie Locale, our work is defined by the conscious choice to remain small, focused, and deliberate. In an era dominated by rapid mass manufacturing, artisan soapmaking preserves the human touch—where every step from mixing and pouring to cutting and curing is monitored with patience and trained senses.
                </p>
                <p>
                  We believe that everyday personal-care products should not be sterile commodities. When an item is crafted by hand, it carries an inherent story of care, patience, and purpose. It honors the time-tested legacy of soapmaking in Marseille while speaking directly to the modern desire for authenticity, tactile beauty, and transparent craftsmanship.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-[#F4EEE7] border border-[#E5DCD0]">
                  <h4 className="font-serif font-bold text-lg text-[#2A2420]">Patient Curing</h4>
                  <p className="text-xs text-[#635347] mt-1 leading-relaxed">
                    Giving every bar the time it requires to cure properly creates a firm, long-lasting bar with refined tactile qualities.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#F4EEE7] border border-[#E5DCD0]">
                  <h4 className="font-serif font-bold text-lg text-[#2A2420]">Individual Character</h4>
                  <p className="text-xs text-[#635347] mt-1 leading-relaxed">
                    Slight variations in cut and beveling celebrate the human hand rather than uniform mechanical reproduction.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  id="home-learn-craft-btn"
                  onClick={() => onNavigate('craft')}
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#38302A] hover:text-[#7A5A3D] transition-colors group"
                >
                  <span>Explore the Craft Behind Our Creations</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LOCAL CRAFTSMANSHIP IN MARSEILLE */}
      <section className="py-20 bg-[#F4EFEA] border-b border-[#E8E0D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="text-xs uppercase tracking-[0.2em] text-[#8C735B] font-semibold block">
              Local Heritage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#241E1A] font-bold">
              Rooted in the Historic Heart of Marseille
            </h2>
            <p className="text-base sm:text-lg text-[#5F5045] leading-relaxed">
              Located on Rue Paradis in the vibrant 6th arrondissement, Savonnerie Locale carries forward the rich tradition of artisan soap craft within the city celebrated worldwide for its soapmaking heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#FAF7F2] rounded-xl border border-[#E3D9CE] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#EFE8DF] flex items-center justify-center text-[#7F644A]">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2A2420]">33 Rue Paradis</h3>
              <p className="text-sm text-[#5F5045] leading-relaxed">
                Positioned in central Marseille, our location serves as the heart of our artisan work and a direct link to the local community.
              </p>
            </div>

            <div className="p-6 bg-[#FAF7F2] rounded-xl border border-[#E3D9CE] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#EFE8DF] flex items-center justify-center text-[#7F644A]">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2A2420]">Independent Atelier</h3>
              <p className="text-sm text-[#5F5045] leading-relaxed">
                As an independent maker, our focus remains squarely on craft discipline, personal accountability, and meaningful customer care.
              </p>
            </div>

            <div className="p-6 bg-[#FAF7F2] rounded-xl border border-[#E3D9CE] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#EFE8DF] flex items-center justify-center text-[#7F644A]">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2A2420]">Verified Customer Trust</h3>
              <p className="text-sm text-[#5F5045] leading-relaxed">
                With a verified 4.9/5 rating across 26 Google Reviews, our workshop has earned the genuine trust of everyday patrons in Marseille.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STRONG CLOSING CONTACT CTA */}
      <section className="py-20 bg-[#2C2520] text-[#FAF7F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <RatingBadge size="md" className="mx-auto" />
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF7F2] tracking-tight">
            Connect With Savonnerie Locale
          </h2>
          <p className="text-base sm:text-lg text-[#C8BCB0] max-w-2xl mx-auto leading-relaxed">
            Whether you have questions about our current handmade soaps, scented products, or everyday personal-care creations, we invite you to get in touch or call our workshop in Marseille.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="cta-send-enquiry-btn"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#FAF7F2] text-[#2C2520] hover:bg-[#EFE9DF] font-semibold text-sm uppercase tracking-wider transition-colors shadow-sm"
            >
              Send an Enquiry
            </button>
            <a
              id="cta-call-phone-link"
              href={`tel:${BUSINESS_DATA.phone.tel}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#3F352E] hover:bg-[#4E423A] text-[#FAF7F2] font-semibold text-sm uppercase tracking-wider transition-colors border border-[#5A4C42]"
            >
              <Phone className="w-4 h-4 text-[#D8B991]" aria-hidden="true" />
              <span>Call {BUSINESS_DATA.phone.display}</span>
            </a>
          </div>

          <p className="text-xs text-[#9E8E81] pt-2">
            33 Rue Paradis, 13006 Marseille, France · Small Artisan Soap Maker
          </p>
        </div>
      </section>
    </div>
  );
};
