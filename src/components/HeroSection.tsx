import React from 'react';
import { GameShowcase } from './GameShowcase';
import { IconGooglePlay, IconArrowRight, IconCheck } from './icons/GameIcons';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-24 bg-[#FBFBFA] border-b border-zinc-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Game Headlines & Primary Value */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-medium mb-6 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
              <span>Available for Android · Flutter &amp; Flame 2D</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.12]">
              Tactile plush physics, handcrafted for{' '}
              <span className="underline decoration-zinc-300 underline-offset-8">
                pure relaxation.
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-5 text-base sm:text-lg text-zinc-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              FluffyDoll is a calm 2D puzzle adventure with genuine soft-body compression, customizable companions, and hundreds of gentle stages. No ticking clocks, no high-pressure paywalls.
            </p>

            {/* Call To Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              {/* Google Play Store Button */}
              <a
                href="#download"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white shadow-xs transition-all active:scale-95"
              >
                <IconGooglePlay className="w-5 h-5 fill-current text-white shrink-0" />
                <div className="text-left">
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-zinc-400 leading-none">GET IT ON</span>
                  <span className="block text-sm font-bold tracking-tight leading-none mt-1">Google Play</span>
                </div>
              </a>

              {/* Secondary CTA: Companions */}
              <a
                href="#dolls"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-zinc-50 text-zinc-800 font-medium text-sm border border-zinc-200 shadow-2xs hover:border-zinc-300 transition-all"
              >
                <span>Meet the Companions</span>
                <IconArrowRight className="w-4 h-4 text-zinc-500" />
              </a>
            </div>

            {/* Value Guarantees */}
            <div className="mt-10 pt-6 border-t border-zinc-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-zinc-900">
                  <IconCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Flame Physics</span>
                </span>
                <span className="text-[11px] text-zinc-500 block mt-0.5">True soft-body loop</span>
              </div>

              <div>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-zinc-900">
                  <IconCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>100% Offline</span>
                </span>
                <span className="text-[11px] text-zinc-500 block mt-0.5">Zero cellular data</span>
              </div>

              <div>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-zinc-900">
                  <IconCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Zero Pressure</span>
                </span>
                <span className="text-[11px] text-zinc-500 block mt-0.5">Untimed puzzle play</span>
              </div>

              <div>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-zinc-900">
                  <IconCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>&lt; 40 MB Size</span>
                </span>
                <span className="text-[11px] text-zinc-500 block mt-0.5">Instant Android install</span>
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
