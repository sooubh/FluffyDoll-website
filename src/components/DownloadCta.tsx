import React from 'react';
import Link from 'next/link';
import { IconGooglePlay, IconArrowRight, IconCheck } from './icons/GameIcons';

export const DownloadCta: React.FC = () => {
  return (
    <section id="download" className="py-20 sm:py-28 bg-[#FBFBFA] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <span className="text-xs uppercase font-mono tracking-wider text-zinc-500 font-semibold block mb-3">
          Get Started
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight">
          Ready for a calmer puzzle experience?
        </h2>

        <p className="mt-4 text-base sm:text-lg text-zinc-600 max-w-xl mx-auto leading-relaxed font-normal">
          Download FluffyDoll for Android today. Enjoy tactile soft-body physics, customizable companions, and hundreds of relaxing stages.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href="https://play.google.com/store/apps"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white shadow-xs transition-all active:scale-95"
          >
            <IconGooglePlay className="w-5 h-5 fill-current text-white shrink-0" />
            <div className="text-left">
              <span className="block text-[10px] uppercase font-bold tracking-wider text-zinc-400 leading-none">GET IT ON</span>
              <span className="block text-sm font-bold tracking-tight leading-none mt-1">Google Play</span>
            </div>
          </a>

          <Link
            href="/privacy-policy"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-50 text-zinc-800 font-medium text-sm border border-zinc-200 shadow-2xs hover:border-zinc-300 transition-all"
          >
            <span>Read Privacy Policy</span>
            <IconArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>

        {/* Verification Guarantee Points */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-zinc-500 font-medium">
          <span className="flex items-center gap-1.5">
            <IconCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>100% Free to Play</span>
          </span>
          <span className="flex items-center gap-1.5">
            <IconCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Fully Offline Capable</span>
          </span>
          <span className="flex items-center gap-1.5">
            <IconCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>General Audience (13+)</span>
          </span>
          <span className="flex items-center gap-1.5">
            <IconCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Under 40 MB Download</span>
          </span>
        </div>

      </div>
    </section>
  );
};
