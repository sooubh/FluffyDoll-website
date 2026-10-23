import React from 'react';
import { GameShowcase } from './GameShowcase';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-18 sm:pb-28 bg-gradient-to-b from-pink-50/70 via-white to-rose-50/30">
      {/* Background Soft Glows */}
      <div 
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-pink-200/40 via-purple-100/30 to-amber-100/30 blur-3xl -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Game Headlines & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Pill Announcement */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100/80 border border-pink-200 text-pink-700 text-xs font-semibold mb-6 shadow-xs animate-float">
              <span className="flex h-2 w-2 rounded-full bg-pink-500 animate-ping" />
              <span>Cozy Android Puzzle · Flutter &amp; Flame</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight leading-[1.12]">
              Squish, Match &amp; Smile with{' '}
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 bg-clip-text text-transparent">
                FluffyDoll
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-5 text-base sm:text-lg text-stone-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Enter a cozy dreamland of squishy plush physics, lovable customizable companions, and hundreds of relaxing match puzzles. Handcrafted for pure delight with zero stressful timers.
            </p>

            {/* Call To Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              {/* Authentic Google Play Store Button */}
              <a
                href="#download"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white shadow-xl shadow-stone-900/15 hover:shadow-stone-900/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                {/* Google Play Vector Icon */}
                <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.996 1.996 0 0 1-.61-1.423V3.237c0-.55.228-1.047.609-1.423zm11.235 11.238l2.585-2.585-12.18-7.032 9.595 9.617zm0 1.896l-9.595 9.617 12.18-7.032-2.585-2.585zm1.052-1.052l3.418 1.973c.96.554.96 1.458 0 2.012l-2.482 1.433-2.316-2.316 1.38-3.102z" />
                </svg>
                <div className="text-left">
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-stone-300">GET IT ON</span>
                  <span className="block text-base font-extrabold tracking-tight leading-none">Google Play</span>
                </div>
              </a>

              {/* Secondary CTA: Explore Features */}
              <a
                href="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-stone-50 text-stone-800 font-bold text-sm border-2 border-stone-200/80 shadow-xs hover:border-pink-300 transition-all"
              >
                <span>Explore Gameplay</span>
                <span>&darr;</span>
              </a>
            </div>

            {/* Quick Proof Badges */}
            <div className="mt-10 pt-8 border-t border-pink-100/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center lg:text-left">
              <div>
                <span className="block text-2xl font-black text-pink-600">4.9 ★</span>
                <span className="text-xs text-stone-500 font-medium">Player Rating</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-stone-900">200+</span>
                <span className="text-xs text-stone-500 font-medium">Cozy Levels</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-emerald-600">100%</span>
                <span className="text-xs text-stone-500 font-medium">Offline Play</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-purple-600">0 MB</span>
                <span className="text-xs text-stone-500 font-medium">Data Drain</span>
              </div>
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
