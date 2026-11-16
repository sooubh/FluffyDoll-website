import React from 'react';

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 sm:py-28 bg-white border-y border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-wider text-pink-600 bg-pink-100/70 border border-pink-200/80 px-3.5 py-1 rounded-full">
            Wholesome Gameplay
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Designed for Pure Relaxation
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            No energy bars. No countdown timers. No pay-to-win roadblocks. Just squishy plush puzzles handcrafted to help you unwind.
          </p>
        </div>

        {/* Feature Grid with Varied Rhythm */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Main Hero Feature Card: Soft-Body Physics */}
          <div className="md:col-span-12 lg:col-span-7 rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-pink-50 via-[#FFF8F6] to-white border border-pink-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white shadow-2xs border border-pink-100 flex items-center justify-center text-3xl mb-6">
                🧸
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
                Authentic Soft-Body Physics
              </h3>
              <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl">
                Unlike rigid tile-matching games, FluffyDoll simulates genuine plush fabric physics using the Flame 2D game engine. Plushies softly compress when stacked, gently tumble, and bounce with satisfying tactile feedback every time you make a match.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-pink-100/80 flex flex-wrap gap-4 text-xs font-bold text-pink-800">
              <span className="bg-white/80 px-3 py-1 rounded-full border border-pink-200/60">Flame 2D Physics</span>
              <span className="bg-white/80 px-3 py-1 rounded-full border border-pink-200/60">Tactile Haptics</span>
              <span className="bg-white/80 px-3 py-1 rounded-full border border-pink-200/60">Silky 60 FPS</span>
            </div>
          </div>

          {/* Feature 2: Zero Pressure & Ambient Vibes */}
          <div className="md:col-span-6 lg:col-span-5 rounded-3xl p-8 bg-gradient-to-br from-amber-50/70 via-[#FFFDF9] to-white border border-amber-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white shadow-2xs border border-amber-100 flex items-center justify-center text-3xl mb-6">
                ☕
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                Zero Pressure, Zero Rush
              </h3>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                Take as long as you want on every move. Enjoy calming lo-fi acoustic melodies and soft bell chimes designed to calm your mind after a busy day.
              </p>
            </div>

            <div className="mt-6 pt-4 text-xs font-semibold text-amber-800">
              ✨ Infinite undo options · No countdown clocks
            </div>
          </div>

          {/* Feature 3: 100% Offline Freedom */}
          <div className="md:col-span-6 lg:col-span-4 rounded-3xl p-7 bg-gradient-to-br from-emerald-50/70 via-[#F9FDFB] to-white border border-emerald-200/80 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-2xs border border-emerald-100 flex items-center justify-center text-2xl mb-5">
              📴
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight">
              100% Offline Freedom
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
              Play during subway commutes, flights, or cozy cabin getaways. All levels and puzzle logic execute entirely on your phone without demanding mobile data.
            </p>
          </div>

          {/* Feature 4: Doll Styling Closet */}
          <div className="md:col-span-6 lg:col-span-4 rounded-3xl p-7 bg-gradient-to-br from-purple-50/70 via-[#FCF9FD] to-white border border-purple-200/80 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-2xs border border-purple-100 flex items-center justify-center text-2xl mb-5">
              👗
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight">
              Plushie Wardrobe
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
              Earn ribbons, knit hats, and cozy seasonal scarves simply by completing levels. Dress your plush squad and customize your game home.
            </p>
          </div>

          {/* Feature 5: Lightweight & Battery Friendly */}
          <div className="md:col-span-6 lg:col-span-4 rounded-3xl p-7 bg-gradient-to-br from-sky-50/70 via-[#F9FCFE] to-white border border-sky-200/80 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-2xs border border-sky-100 flex items-center justify-center text-2xl mb-5">
              ⚡
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight">
              Featherlight on Storage
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
              Under 40 MB install size. Highly optimized Flutter architecture keeps battery drain minimal and loads in less than one second.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
