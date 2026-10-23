import React from 'react';

interface BoosterItem {
  icon: string;
  name: string;
  effect: string;
  badge: string;
}

const BOOSTERS: BoosterItem[] = [
  {
    icon: '🌈',
    name: 'Rainbow Yarn Ball',
    effect: 'Matches with any plush doll to clear every single doll of that color from the entire board.',
    badge: 'Match 5 Dolls',
  },
  {
    icon: '🌸',
    name: 'Plushie Bloom Bomb',
    effect: 'Bursts with soft fabric petals, destroying all obstacle boxes and clearing a 3x3 surrounding zone.',
    badge: 'Match in T-Shape',
  },
  {
    icon: '🪄',
    name: 'Magic Sewing Needle',
    effect: 'Allows you to swap any two distant dolls across the board without consuming a puzzle move.',
    badge: 'Special Booster',
  },
  {
    icon: '⭐',
    name: 'Star Sparkler',
    effect: 'Instantly fires four laser ribbons in cardinal directions, wiping full rows and columns.',
    badge: 'Match 4 in a Line',
  },
];

export const GameMechanics: React.FC = () => {
  return (
    <section id="gameplay" className="py-20 sm:py-28 bg-white border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-wider text-rose-600 bg-rose-100/70 border border-rose-200 px-3.5 py-1 rounded-full">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Easy to Learn, Delightful to Master
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            Simple one-finger intuitive touch controls engineered specifically for mobile screens on Android.
          </p>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          <div className="relative rounded-3xl p-6 bg-pink-50/50 border border-pink-200/70 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-pink-500 text-white font-black text-xl flex items-center justify-center mb-4 shadow-md shadow-pink-200">
              1
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">Aim &amp; Match</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Tap and slide to match three or more identical plush dolls. No rush, no timers — think and relax at your own pace.
            </p>
          </div>

          <div className="relative rounded-3xl p-6 bg-amber-50/50 border border-amber-200/70 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white font-black text-xl flex items-center justify-center mb-4 shadow-md shadow-amber-200">
              2
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">Watch the Squish</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Experience the realistic Flame 2D engine in action as plush dolls squish, cascade, bounce, and settle dynamically.
            </p>
          </div>

          <div className="relative rounded-3xl p-6 bg-purple-50/50 border border-purple-200/70 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-purple-500 text-white font-black text-xl flex items-center justify-center mb-4 shadow-md shadow-purple-200">
              3
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">Unleash Boosters</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Combine 4+ dolls to create explosive Rainbow Yarn balls and plushie blooms for satisfying full-board combos!
            </p>
          </div>

        </div>

        {/* Boosters Showcase Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 text-white p-8 sm:p-12 shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase font-extrabold tracking-wider text-pink-400">
              Special Boosters &amp; Items
            </span>
            <h3 className="text-2xl sm:text-3xl font-black mt-2">
              Power-Up Your Puzzle Solves
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 mt-2">
              Crafted power-ups that help you breeze through tricky obstacles with colorful visual feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BOOSTERS.map((booster, i) => (
              <div 
                key={i} 
                className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">{booster.icon}</span>
                  <span className="text-[10px] font-bold text-pink-300 bg-pink-500/20 px-2 py-0.5 rounded-full border border-pink-400/30">
                    {booster.badge}
                  </span>
                </div>
                <h4 className="font-bold text-base text-white">{booster.name}</h4>
                <p className="text-xs text-stone-300 mt-1.5 leading-relaxed">
                  {booster.effect}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
