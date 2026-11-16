import React from 'react';
import Link from 'next/link';

export const DownloadCta: React.FC = () => {
  return (
    <section id="download" className="py-20 sm:py-28 bg-gradient-to-b from-white via-pink-50/30 to-rose-50/40 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Mascot Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-pink-100 text-pink-600 border border-pink-200/80 shadow-md mb-6 text-3xl">
          🧸
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
          Ready to Squish Your Stress Away?
        </h2>

        <p className="mt-4 text-base sm:text-lg text-stone-600 max-w-xl mx-auto leading-relaxed">
          Download FluffyDoll for Android today and start matching plushies, collecting cozy doll outfits, and enjoying hundreds of relaxing puzzles!
        </p>

        {/* CTA Button Group */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://play.google.com/store/apps"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white shadow-xl shadow-stone-900/15 hover:shadow-stone-900/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <svg className="w-6 h-6 fill-current text-white shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a1.996 1.996 0 0 1-.61-1.423V3.237c0-.55.228-1.047.609-1.423zm11.235 11.238l2.585-2.585-12.18-7.032 9.595 9.617zm0 1.896l-9.595 9.617 12.18-7.032-2.585-2.585zm1.052-1.052l3.418 1.973c.96.554.96 1.458 0 2.012l-2.482 1.433-2.316-2.316 1.38-3.102z" />
            </svg>
            <div className="text-left">
              <span className="block text-[10px] uppercase font-bold tracking-wider text-stone-300">GET IT ON</span>
              <span className="block text-lg font-extrabold tracking-tight leading-none">Google Play</span>
            </div>
          </a>

          <Link
            href="/privacy-policy"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-stone-50 text-stone-700 font-bold text-sm border-2 border-pink-200/80 shadow-2xs hover:border-pink-300 transition-all"
          >
            <span>Read Privacy Policy</span>
            <span>&rarr;</span>
          </Link>
        </div>

        {/* Reassurance Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-stone-600">
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-500 font-bold">✓</span> 100% Free to Play
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-500 font-bold">✓</span> No Wi-Fi Needed
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-500 font-bold">✓</span> Safe for Ages 13+
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-500 font-bold">✓</span> Under 40 MB Download
          </span>
        </div>

      </div>
    </section>
  );
};
