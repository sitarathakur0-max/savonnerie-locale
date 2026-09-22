import React from 'react';
import { ArrowRight, Sparkles, Feather, Eye, Compass, Award } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_DATA } from '../data/business';
import soapDetailImage from '../assets/images/soap_detail_1789837132141.jpg';

interface ArtisanCraftPageProps {
  onNavigate: (page: PageId) => void;
}

export const ArtisanCraftPage: React.FC<ArtisanCraftPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="pt-14 pb-12 bg-[#FAF7F2] border-b border-[#EAE1D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8C735B] font-semibold block">
            The Philosophy of Making
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#241E1A] font-bold tracking-tight">
            Artisan Craft
          </h1>
          <p className="text-base sm:text-lg text-[#5F5045] leading-relaxed max-w-2xl mx-auto">
            A deliberate dedication to the handmade identity, where everyday personal-care products are treated as objects of patience, touch, and thoughtful craftsmanship in Marseille.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* 1. THE ARTISAN APPROACH */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5 text-[#4E4137] text-base leading-relaxed">
            <span className="text-xs uppercase tracking-wider text-[#8A7156] font-semibold block">
              Pillar 01
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#241E1A] font-bold">
              The Artisan Approach
            </h2>
            <p>
              The artisan approach begins with a simple question: what happens when we refuse the rush of industrial mass production? For Savonnerie Locale, the answer is a return to measured human scale. An artisan is not simply someone who operates tools, but a practitioner who brings constant observation, patience, and care to every phase of creation.
            </p>
            <p>
              In our Marseille workshop, each batch of soap and personal-care formulation is overseen with personal accountability. Rather than automating processes to maximize sheer volume, our pace is determined by the materials themselves. This deliberate cadence ensures that every item leaving our atelier possesses a quiet integrity that automated machinery simply cannot replicate.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl bg-[#F4EEE7] border border-[#E3D9CD] space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#EAE0D3] flex items-center justify-center text-[#7F644A]">
                <Feather className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2A2420]">
                Measured Production
              </h3>
              <p className="text-sm text-[#635347] leading-relaxed">
                By maintaining small batches, we preserve tactile oversight and individual attention across every single creation produced at 33 Rue Paradis.
              </p>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-[#E5DCD0]" />

        {/* 2. HANDMADE WITH ATTENTION TO DETAIL (WITH MEANINGFUL DETAIL PHOTO) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-[#E2D8CD] shadow-xs bg-[#ECE4DA]">
              <img
                src={soapDetailImage}
                alt="Close-up macro detail of a hand-stamped artisan soap bar with natural texture on oak wood"
                className="w-full h-[380px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-[#FAF7F2] border-t border-[#E5DCD0] text-xs text-[#6A5A4E]">
                <span className="font-semibold text-[#2C241E]">Attention to Detail:</span> Hand-cut edges and subtle textural markings reflect authentic craftsmanship.
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5 text-[#4E4137] text-base leading-relaxed">
            <span className="text-xs uppercase tracking-wider text-[#8A7156] font-semibold block">
              Pillar 02
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#241E1A] font-bold">
              Handmade with Attention to Detail
            </h2>
            <p>
              In handmade personal care, quality lives in subtle nuances. It is reflected in how cleanly a soap bar is sliced, how gently its corners are planed, and how evenly it rests in the palm of a hand. These details are not ornamental; they directly affect the daily user experience.
            </p>
            <p>
              Every bar at Savonnerie Locale receives close physical inspection. When you pick up one of our soaps, you feel the density and smooth firmness resulting from proper curing. The surfaces feature natural micro-textures that tell the story of a hand-poured process, distinguishing them from glossy, mass-produced synthetic bars.
            </p>
            <p>
              This level of attention is impossible in factory environments where products race along conveyor belts. It is made possible only when an artisan stands over the cutting table, evaluating each piece by sight and touch.
            </p>
          </div>
        </section>

        <div className="w-full h-px bg-[#E5DCD0]" />

        {/* 3. EVERYDAY PRODUCTS WITH A CRAFTED CHARACTER */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5 text-[#4E4137] text-base leading-relaxed">
            <span className="text-xs uppercase tracking-wider text-[#8A7156] font-semibold block">
              Pillar 03
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#241E1A] font-bold">
              Everyday Products with a Crafted Character
            </h2>
            <p>
              Artisan creations need not be reserved solely for rare occasions or decorative display. We believe that everyday essentials—the items that wash your hands before a family meal, greet you in your morning shower, or sit beside your kitchen sink—deserve the highest level of craftsmanship.
            </p>
            <p>
              When functional necessities are crafted thoughtfully, they elevate routine domestic moments into moments of mindfulness and calm. A simple washing routine becomes a pause in a busy day. Our soaps and body-care items are designed to be thoroughly used and enjoyed, bringing tactile pleasure to daily life.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl bg-[#F4EEE7] border border-[#E3D9CD] space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#EAE0D3] flex items-center justify-center text-[#7F644A]">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2A2420]">
                Elevating Daily Routines
              </h3>
              <p className="text-sm text-[#635347] leading-relaxed">
                Transforming repetitive daily personal care into a grounded, pleasant sensory experience through balanced artisan textures.
              </p>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-[#E5DCD0]" />

        {/* 4. SCENT AND PRESENTATION */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#8A7156] font-semibold block">
              Pillar 04
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#241E1A] font-bold">
              Scent and Presentation
            </h2>
            <p className="text-base sm:text-lg text-[#5F5045] leading-relaxed">
              We approach fragrance and visual packaging as unified expressions of artisan restraint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#4E4137] text-base leading-relaxed">
            <div className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#E4DACF] space-y-3">
              <h3 className="font-serif text-2xl font-bold text-[#2A2420] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#8C6D4A]" />
                Harmonious Fragrance Design
              </h3>
              <p>
                Our scented products are blended to evoke gentle, comforting impressions rather than heavy perfumes. Scent should belong naturally within a space, enhancing an environment with clean, restorative warmth without overpowering personal comfort.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#E4DACF] space-y-3">
              <h3 className="font-serif text-2xl font-bold text-[#2A2420] flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#8C6D4A]" />
                Understated Packaging
              </h3>
              <p>
                Artisan packaging should speak with modest confidence. We favor simple wrappers, muted earth tones, and clean typographic accents that honor the soapmaker’s heritage and look serene in any interior aesthetic.
              </p>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-[#E5DCD0]" />

        {/* 5. LOCAL INDEPENDENT CRAFTSMANSHIP */}
        <section className="p-10 rounded-2xl bg-[#2E2722] text-[#FAF7F2] space-y-6">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#3F352E] border border-[#53463C] text-xs uppercase tracking-widest text-[#D3BFA9] font-medium">
              Pillar 05 · Marseille, France
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FAF7F2]">
            Local Independent Craftsmanship
          </h2>

          <p className="text-base sm:text-lg text-[#D2C5B8] leading-relaxed max-w-3xl">
            Marseille has been an international beacon for soapmakers across centuries. Operating as an independent maker on Rue Paradis means participating in that living tradition with contemporary sensibility. Being independent allows us to prioritize craftsmanship over corporate shortcuts and forge real relationships with our community.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#FAF7F2] text-[#2E2722] hover:bg-[#EAE1D3] font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              Get in Touch with the Atelier
            </button>
            <div className="inline-flex items-center gap-2 text-xs text-[#BFAF9F]">
              <Award className="w-4 h-4 text-[#D8B991]" />
              <span>Rated 4.9/5 by 26 patrons on Google Reviews</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
