'use client';

import React, { useState } from 'react';

interface DollCharacter {
  id: string;
  name: string;
  tagline: string;
  emoji: string;
  colorTheme: string;
  bgGradient: string;
  borderTheme: string;
  badge: string;
  personality: string;
  favoriteSnack: string;
  signatureSkill: string;
  stats: {
    softness: number; // 1-100
    bounce: number;
    fluffPower: number;
  };
}

const DOLLS: DollCharacter[] = [
  {
    id: 'bunbun',
    name: 'BunBun Strawberry',
    tagline: 'The Cotton-Candy Jumper',
    emoji: '🐰',
    colorTheme: 'text-pink-600',
    bgGradient: 'from-pink-100 via-rose-50 to-white',
    borderTheme: 'border-pink-300 ring-pink-400',
    badge: 'Starter Companion',
    personality: 'Energetic, bubbly, and always the first to leap into high-flying puzzle combos.',
    favoriteSnack: 'Strawberry Marshmallows',
    signatureSkill: 'Super Fluff Bounce — Clears entire vertical columns with bouncy ear ears!',
    stats: { softness: 95, bounce: 98, fluffPower: 88 },
  },
  {
    id: 'puffbear',
    name: 'PuffBear Honey',
    tagline: 'The Gentle Golden Hugger',
    emoji: '🧸',
    colorTheme: 'text-amber-700',
    bgGradient: 'from-amber-100 via-orange-50 to-white',
    borderTheme: 'border-amber-300 ring-amber-400',
    badge: 'Fan Favorite',
    personality: 'Calm, patient, and full of sweet honey wisdom for tough puzzle boards.',
    favoriteSnack: 'Warm Honey Waffles',
    signatureSkill: 'Cozy Honey Hug — Melts through sticky blocks and clears locked wooden crates.',
    stats: { softness: 100, bounce: 75, fluffPower: 92 },
  },
  {
    id: 'mochi',
    name: 'Mochi Kitty',
    tagline: 'The Sleepy Yarn Spinner',
    emoji: '🐱',
    colorTheme: 'text-purple-600',
    bgGradient: 'from-purple-100 via-fuchsia-50 to-white',
    borderTheme: 'border-purple-300 ring-purple-400',
    badge: 'Unlockable Level 15',
    personality: 'Loves curling up inside teacups and napping between fast matching streaks.',
    favoriteSnack: 'Sweet Milk Candy',
    signatureSkill: 'Rainbow Yarn Whirl — Spins yarn to transform 4 random dolls into wild matchers.',
    stats: { softness: 90, bounce: 85, fluffPower: 96 },
  },
  {
    id: 'dottie',
    name: 'Dottie Pup',
    tagline: 'The Loyal Puzzle Seeker',
    emoji: '🐶',
    colorTheme: 'text-sky-600',
    bgGradient: 'from-sky-100 via-blue-50 to-white',
    borderTheme: 'border-sky-300 ring-sky-400',
    badge: 'Unlockable Level 30',
    personality: 'Always wagging his little plush tail, eager to sniff out hidden star gems.',
    favoriteSnack: 'Caramel Bone Biscuits',
    signatureSkill: 'Joyful Bark Pop — Unleashes a soft blast wave clearing a 3x3 radius.',
    stats: { softness: 88, bounce: 94, fluffPower: 90 },
  },
];

export const DollsGallery: React.FC = () => {
  const [selectedDoll, setSelectedDoll] = useState<DollCharacter>(DOLLS[0]);

  return (
    <section id="dolls" className="py-20 sm:py-28 bg-gradient-to-b from-rose-50/40 via-white to-pink-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-extrabold tracking-wider text-purple-600 bg-purple-100/80 border border-purple-200 px-3.5 py-1 rounded-full">
            Plush Companions
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Meet the Fluffy Crew
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            Every plush doll in FluffyDoll has unique charm, squishy physics properties, and special combo powers. Which one will be your cozy favorite?
          </p>
        </div>

        {/* Doll Select Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
          {DOLLS.map((doll) => {
            const isSelected = selectedDoll.id === doll.id;
            return (
              <button
                key={doll.id}
                type="button"
                onClick={() => setSelectedDoll(doll)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-stone-900 text-white shadow-lg shadow-stone-900/15 scale-105'
                    : 'bg-white hover:bg-stone-50 text-stone-700 border border-stone-200/80'
                }`}
              >
                <span className="text-xl">{doll.emoji}</span>
                <span>{doll.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Doll Spotlight Card */}
        <div className={`rounded-3xl border-2 p-6 sm:p-10 bg-gradient-to-br ${selectedDoll.bgGradient} ${selectedDoll.borderTheme} shadow-xl shadow-pink-100/40 transition-all`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Doll Plushie Big Avatar */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-6 bg-white/70 backdrop-blur-xs rounded-3xl border border-white shadow-sm">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-white shadow-inner flex items-center justify-center border-4 border-dashed border-pink-200">
                <span className="text-7xl sm:text-8xl filter drop-shadow-md animate-float">
                  {selectedDoll.emoji}
                </span>
                <span className="absolute -bottom-2 px-3 py-1 bg-stone-900 text-white text-[11px] font-black rounded-full shadow-md">
                  {selectedDoll.badge}
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-black text-stone-900">
                {selectedDoll.name}
              </h3>
              <p className={`text-xs font-bold uppercase tracking-wider mt-1 ${selectedDoll.colorTheme}`}>
                {selectedDoll.tagline}
              </p>
            </div>

            {/* Doll Details & Stats */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <h4 className="text-xs uppercase font-extrabold text-stone-400 tracking-wider">
                  Personality &amp; Story
                </h4>
                <p className="mt-1 text-sm sm:text-base text-stone-700 leading-relaxed font-medium">
                  {selectedDoll.personality}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 border border-stone-200/60 shadow-xs">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block mb-1">
                  ✨ Signature Puzzle Power
                </span>
                <p className="text-sm font-bold text-stone-800">
                  {selectedDoll.signatureSkill}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-stone-600 bg-white/60 px-3.5 py-2 rounded-xl border border-stone-200/50">
                <span className="font-semibold text-stone-800">Favorite Treat:</span>
                <span>{selectedDoll.favoriteSnack}</span>
              </div>

              {/* Doll Stat Bars */}
              <div className="space-y-3 pt-2">
                <div>
                  <div className="flex justify-between text-xs font-bold text-stone-700 mb-1">
                    <span>Softness &amp; Squish</span>
                    <span>{selectedDoll.stats.softness}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-stone-200/70 overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-pink-500 transition-all duration-500" 
                      style={{ width: `${selectedDoll.stats.softness}%` }} 
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-stone-700 mb-1">
                    <span>Flame 2D Bounce Factor</span>
                    <span>{selectedDoll.stats.bounce}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-stone-200/70 overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-amber-500 transition-all duration-500" 
                      style={{ width: `${selectedDoll.stats.bounce}%` }} 
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-stone-700 mb-1">
                    <span>Fluff Combo Power</span>
                    <span>{selectedDoll.stats.fluffPower}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-stone-200/70 overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-purple-500 transition-all duration-500" 
                      style={{ width: `${selectedDoll.stats.fluffPower}%` }} 
                    />
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
