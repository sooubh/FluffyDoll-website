import React from 'react';
import { IconYarnBall, IconPetalBloom, IconNeedles, IconSparkle } from './icons/GameIcons';

interface BoosterItem {
  icon: React.ReactNode;
  name: string;
  effect: string;
  trigger: string;
}

const BOOSTERS: BoosterItem[] = [
  {
    icon: <IconYarnBall className="w-5 h-5 text-zinc-900" />,
    name: 'Rainbow Yarn Ball',
    effect: 'Aligns with any plush doll type to clear all matching cells across the board.',
    trigger: 'Match 5 identical plushies',
  },
  {
    icon: <IconPetalBloom className="w-5 h-5 text-zinc-900" />,
    name: 'Felt Petal Bloom',
    effect: 'Detonates a soft shockwave that removes obstacles and crates in a 3x3 surrounding zone.',
    trigger: 'Match in a T or L formation',
  },
  {
    icon: <IconNeedles className="w-5 h-5 text-zinc-900" />,
    name: 'Knitting Needle Swap',
    effect: 'Transposes two distant plushies across the grid without expending a move.',
    trigger: 'Milestone stage completion',
  },
  {
    icon: <IconSparkle className="w-5 h-5 text-zinc-900" />,
    name: 'Star Ribbon Sweep',
    effect: 'Sends linear ribbon waves in four orthogonal directions, wiping full rows and columns.',
    trigger: 'Match 4 in a line',
  },
];

export const GameMechanics: React.FC = () => {
  return (
    <section id="gameplay" className="py-20 sm:py-28 bg-white border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase font-mono tracking-wider text-zinc-500 font-semibold block mb-2">
            Interaction Rules
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Intuitive touch, emergent depth.
          </h2>
          <p className="mt-4 text-base text-zinc-600 leading-relaxed font-normal">
            Designed for fluid one-thumb mobile control. Every gesture translates immediately into soft-body momentum.
          </p>
        </div>

        {/* 3 Step Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-18">
          
          <div className="rounded-2xl p-6 sm:p-7 bg-[#FBFBFA] border border-zinc-200/80 flex flex-col justify-between shadow-2xs">
            <div>
              <span className="font-mono text-xs font-bold text-zinc-400 block mb-4">
                STEP 01
              </span>
              <h3 className="text-lg font-bold text-zinc-900 mb-2">Slide &amp; Align</h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                Drag matching plushies together horizontally or vertically. Pacing is completely player-driven with zero countdown clocks.
              </p>
            </div>
          </div>

          <div className="rounded-2xl p-6 sm:p-7 bg-[#FBFBFA] border border-zinc-200/80 flex flex-col justify-between shadow-2xs">
            <div>
              <span className="font-mono text-xs font-bold text-zinc-400 block mb-4">
                STEP 02
              </span>
              <h3 className="text-lg font-bold text-zinc-900 mb-2">Soft-Body Cascade</h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                Surrounding dolls compress upon impact, tumble through open air gaps, and settle with responsive Flame 2D momentum.
              </p>
            </div>
          </div>

          <div className="rounded-2xl p-6 sm:p-7 bg-[#FBFBFA] border border-zinc-200/80 flex flex-col justify-between shadow-2xs">
            <div>
              <span className="font-mono text-xs font-bold text-zinc-400 block mb-4">
                STEP 03
              </span>
              <h3 className="text-lg font-bold text-zinc-900 mb-2">Combine Boosters</h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                Align 4 or more dolls to fabricate powerful yarn and bloom boosters that trigger cascading full-board clears.
              </p>
            </div>
          </div>

        </div>

        {/* Boosters Showcase */}
        <div>
          <div className="mb-8">
            <span className="text-xs uppercase font-mono tracking-wider text-zinc-500 font-semibold block mb-1">
              Crafted Items
            </span>
            <h3 className="text-2xl font-bold text-zinc-950 tracking-tight">
              In-Game Booster Inventory
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BOOSTERS.map((b, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-zinc-200/80 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-4">
                    {b.icon}
                  </div>
                  <h4 className="text-base font-bold text-zinc-900">{b.name}</h4>
                  <p className="text-xs text-zinc-600 mt-2 leading-relaxed font-normal">{b.effect}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-zinc-100 text-[11px] font-mono text-zinc-500">
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
