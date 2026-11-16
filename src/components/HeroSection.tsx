import React from 'react';
import { GameShowcase } from './GameShowcase';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-10 pb-18 sm:pt-16 sm:pb-24 bg-gradient-to-b from-[#FFF5F2] via-[#FFFDFB] to-white">
      {/* Gentle Ambient Warm Glow */}
      <div 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-gradient-to-tr from-pink-200/30 via-rose-100/20 to-amber-100/20 blur-3xl -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Game Headlines & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Friendly Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100/70 border border-pink-200/80 text-pink-700 text-xs font-semibold mb-5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-pink-500" aria-hidden="true" />
              <span>Cozy Casual Puzzle · Now on Android</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight leading-[1.12]">
              The cozy squish puzzle that feels like a{' '}
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 bg-clip-text text-transparent">
                warm hug.
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-5 text-base sm:text-lg text-stone-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Squish, match, and relax with lovable plush companions. Experience delightfully responsive soft-body physics, customizable doll outfits, and hundreds of gentle stages with zero stressful timers.
            </p>

            {/* Call To Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              {/* Authentic Google Play Store Button */}
              <a
                href="#download"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white shadow-xl shadow-stone-900/10 hover:shadow-stone-900/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <svg className="w-6 h-6 fill-current text-white shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.996 1.996 0 0 1-.61-1.423V3.237c0-.55.228-1.047.609-1.423zm11.235 11.238l2.585-2.585-12.18-7.032 9.595 9.617zm0 1.896l-9.595 9.617 12.18-7.032-2.585-2.585zm1.052-1.052l3.418 1.973c.96.554.96 1.458 0 2.012l-2.482 1.433-2.316-2.316 1.38-3.102z" />
                </svg>
                <div className="text-left">
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-stone-300">GET IT ON</span>
                  <span className="block text-base font-extrabold tracking-tight leading-none">Google Play</span>
                </div>
              </a>

              {/* Secondary CTA: Meet the Dolls */}
              <a
                href="#dolls"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-stone-50 text-stone-800 font-bold text-sm border-2 border-stone-200/80 shadow-2xs hover:border-pink-300 transition-all"
              >
                <span>Meet the Dolls</span>
                <span>&rarr;</span>
              </a>
            </div>

            {/* Cozy Highlights Ribbon */}
            <div className="mt-9 pt-7 border-t border-pink-100/70 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2.5 text-xs font-semibold text-stone-600">
              <span className="inline-flex items-center gap-1.5">
                <span className="text-pink-500">🧸</span> Soft-body plush physics
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="text-emerald-500">📴</span> 100% Offline playable
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="text-amber-500">☕</span> No timers or pressure
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="text-purple-500">👗</span> Customizable doll wardrobe
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Game Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <GameShowcase />
          </div>

        </div>
      </div>
    </section>
  );
};
