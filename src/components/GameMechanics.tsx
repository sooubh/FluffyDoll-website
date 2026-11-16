import React from 'react';

interface BoosterItem {
  icon: string;
  name: string;
  effect: string;
  trigger: string;
}

const BOOSTERS: BoosterItem[] = [
  {
    icon: '🌈',
    name: 'Rainbow Yarn Ball',
    effect: 'Matches with any plushie to clear every doll of that color from the entire board.',
    trigger: 'Match 5 plushies',
  },
  {
    icon: '🌸',
    name: 'Plushie Petal Bloom',
    effect: 'Bursts in a shower of soft felt petals, dissolving obstacles in a 3x3 surrounding zone.',
    trigger: 'Match in a T or L shape',
  },
  {
    icon: '🪄',
    name: 'Knitting Needle Swap',
    effect: 'Allows you to swap any two distant plushies across the board without using a move.',
    trigger: 'Earned through stage milestones',
  },
  {
    icon: '⭐',
    name: 'Shooting Star Ribbon',
    effect: 'Sends warm ribbon waves in cardinal directions, sweeping across full rows and columns.',
    trigger: 'Match 4 in a line',
  },
];

export const GameMechanics: React.FC = () => {
  return (
    <section id="gameplay" className="py-20 sm:py-28 bg-[#FFFDFB] border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-wider text-rose-600 bg-rose-100/70 border border-rose-200 px-3.5 py-1 rounded-full">
            How to Play
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Simple to Pick Up, Impossible to Put Down
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            Designed for intuitive one-finger mobile play. No complicated tutorials or reflex timers needed.
          </p>
        </div>

        {/* 3 Step Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-18">
          
          <div className="rounded-3xl p-7 bg-white border border-pink-200/80 shadow-2xs flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-700 font-black text-xl flex items-center justify-center mb-5 border border-pink-200">
              1
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">Slide &amp; Match</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Drag matching plushies together horizontally or vertically. Relax and plan your moves without any ticking clock.
            </p>
          </div>

          <div className="rounded-3xl p-7 bg-white border border-amber-200/80 shadow-2xs flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 font-black text-xl flex items-center justify-center mb-5 border border-amber-200">
              2
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">Feel the Squish</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Witness soft-body physics in action as surrounding dolls compress, jiggle, and cascade down with gentle tactile sound effects.
            </p>
          </div>

          <div className="rounded-3xl p-7 bg-white border border-purple-200/80 shadow-2xs flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 font-black text-xl flex items-center justify-center mb-5 border border-purple-200">
              3
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">Weave Combos</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Match 4 or more to craft special boosters like Rainbow Yarn balls and plushie petal bombs for satisfying board clears.
            </p>
          </div>

        </div>

        {/* Cozy Boosters Showcase */}
        <div className="rounded-3xl bg-gradient-to-br from-[#FFF7F4] to-pink-50/60 border border-pink-200/80 p-8 sm:p-12 shadow-xs">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase font-extrabold tracking-wider text-pink-600 bg-white px-3 py-1 rounded-full border border-pink-200/70">
              Special Boosters &amp; Items
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-stone-900 mt-3 tracking-tight">
              Crafted to Help You Breeze Through Puzzles
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              All boosters can be earned naturally through gameplay — zero mandatory paywalls.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BOOSTERS.map((b, idx) => (
              <div 
                key={idx}
                className="bg-white/95 rounded-2xl p-5 border border-stone-200/70 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl mb-3">{b.icon}</div>
                  <h4 className="text-base font-bold text-stone-900">{b.name}</h4>
                  <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">{b.effect}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] font-semibold text-pink-600">
                  {b.trigger}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
