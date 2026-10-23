import React from 'react';
import Link from 'next/link';

export const DownloadCta: React.FC = () => {
  return (
    <section id="download" className="py-20 sm:py-28 bg-gradient-to-b from-white via-pink-50/40 to-rose-100/50 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div 
        className="pointer-events-none absolute inset-0 max-w-5xl mx-auto bg-gradient-to-r from-pink-300/20 via-purple-200/20 to-amber-200/20 blur-3xl -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Cute Mascot Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-gradient-to-br from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-300/60 mb-6 text-3xl animate-bounce">
          🧸
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
          Ready for the Fluffiest Adventure?
        </h2>

        <p className="mt-4 text-base sm:text-lg text-stone-600 max-w-xl mx-auto leading-relaxed">
          Download FluffyDoll for Android today and squish your stress away with charming physics puzzles, customizable plushies, and hundreds of cozy levels!
        </p>

        {/* CTA Button Group */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://play.google.com/store/apps"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white shadow-xl shadow-stone-900/20 hover:shadow-stone-900/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a1.996 1.996 0 0 1-.61-1.423V3.237c0-.55.228-1.047.609-1.423zm11.235 11.238l2.585-2.585-12.18-7.032 9.595 9.617zm0 1.896l-9.595 9.617 12.18-7.032-2.585-2.585zm1.052-1.052l3.418 1.973c.96.554.96 1.458 0 2.012l-2.482 1.433-2.316-2.316 1.38-3.102z" />
            </svg>
            <div className="text-left">
              <span className="block text-[10px] uppercase font-bold tracking-wider text-stone-300">GET IT ON</span>
              <span className="block text-lg font-extrabold tracking-tight leading-none">Google Play</span>
            </div>
          </a>

          <Link
            href="/privacy-policy"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-stone-50 text-stone-700 font-bold text-sm border-2 border-pink-200/80 shadow-xs hover:border-pink-300 transition-all"
          >
            <span>Read Privacy Policy</span>
            <span>&rarr;</span>
          </Link>
        </div>

        {/* Reassurance Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-stone-500">
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-500">✓</span> 100% Free to Play
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-500">✓</span> No Wi-Fi Needed
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-500">✓</span> Google Play Verified Safe
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-500">✓</span> COPPA &amp; Families Policy Ready
          </span>
        </div>

      </div>
    </section>
  );
};
