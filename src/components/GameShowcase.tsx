'use client';

import React, { useState } from 'react';

interface Plushie {
  id: number;
  name: string;
  emoji: string;
  color: string;
  bg: string;
  border: string;
  sound: string;
}

const PLUSHIE_TYPES: Plushie[] = [
  { id: 1, name: 'BunBun', emoji: '🐰', color: 'text-pink-600', bg: 'bg-pink-100/90', border: 'border-pink-300', sound: 'Boing! 🐰' },
  { id: 2, name: 'PuffBear', emoji: '🧸', color: 'text-amber-700', bg: 'bg-amber-100/90', border: 'border-amber-300', sound: 'Warm Hug! 🧸' },
  { id: 3, name: 'Mochi', emoji: '🐱', color: 'text-purple-600', bg: 'bg-purple-100/90', border: 'border-purple-300', sound: 'Purr... 🐱' },
  { id: 4, name: 'Dottie', emoji: '🐶', color: 'text-sky-600', bg: 'bg-sky-100/90', border: 'border-sky-300', sound: 'Wag wag! 🐶' },
  { id: 5, name: 'Berry', emoji: '🍓', color: 'text-rose-600', bg: 'bg-rose-100/90', border: 'border-rose-300', sound: 'Sweet pop! 🍓' },
];

export const GameShowcase: React.FC = () => {
  const [board, setBoard] = useState<Plushie[]>([
    PLUSHIE_TYPES[0], PLUSHIE_TYPES[1], PLUSHIE_TYPES[2],
    PLUSHIE_TYPES[1], PLUSHIE_TYPES[0], PLUSHIE_TYPES[3],
    PLUSHIE_TYPES[2], PLUSHIE_TYPES[3], PLUSHIE_TYPES[0],
  ]);
  const [squishingIdx, setSquishingIdx] = useState<number | null>(null);
  const [activeMessage, setActiveMessage] = useState<string>('Tap any plushie to squish!');
  const [squishCount, setSquishCount] = useState<number>(0);
  const [isRainbowActive, setIsRainbowActive] = useState<boolean>(false);

  const handleSquish = (index: number) => {
    setSquishingIdx(index);
    const doll = board[index];
    setSquishCount((c) => c + 1);

    const squishMessages = [
      `${doll.name} squished so soft! ✨`,
      `Boing! ${doll.sound}`,
      `Squishy combo +100! 💖`,
      `Maximum fluffiness unlocked! 🧸`,
    ];
    setActiveMessage(squishMessages[Math.floor(Math.random() * squishMessages.length)]);

    setTimeout(() => {
      setSquishingIdx(null);
    }, 450);
  };

  const handleShuffle = () => {
    setActiveMessage('Shuffled the toybox! 🎲');
    setBoard((prev) => [...prev].sort(() => Math.random() - 0.5));
  };

  const handleRainbowBooster = () => {
    setIsRainbowActive(true);
    setActiveMessage('🌈 Rainbow Yarn wave cleared the board!');
    setSquishCount((c) => c + 5);

    setTimeout(() => {
      setIsRainbowActive(false);
      setBoard([
        PLUSHIE_TYPES[Math.floor(Math.random() * PLUSHIE_TYPES.length)],
        PLUSHIE_TYPES[Math.floor(Math.random() * PLUSHIE_TYPES.length)],
        PLUSHIE_TYPES[Math.floor(Math.random() * PLUSHIE_TYPES.length)],
        PLUSHIE_TYPES[Math.floor(Math.random() * PLUSHIE_TYPES.length)],
        PLUSHIE_TYPES[Math.floor(Math.random() * PLUSHIE_TYPES.length)],
        PLUSHIE_TYPES[Math.floor(Math.random() * PLUSHIE_TYPES.length)],
        PLUSHIE_TYPES[Math.floor(Math.random() * PLUSHIE_TYPES.length)],
        PLUSHIE_TYPES[Math.floor(Math.random() * PLUSHIE_TYPES.length)],
        PLUSHIE_TYPES[Math.floor(Math.random() * PLUSHIE_TYPES.length)],
      ]);
    }, 600);
  };

  return (
    <div className="relative mx-auto w-full max-w-sm sm:max-w-md select-none">
      {/* Cozy Handheld Console Frame */}
      <div className="relative rounded-[2.5rem] bg-gradient-to-b from-stone-900 via-stone-850 to-stone-900 p-4 sm:p-5 shadow-2xl shadow-pink-900/15 border-4 border-stone-800">
        
        {/* Cute Console Screen Bezel */}
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#FFF7F2] via-[#FFF3EB] to-[#FCEEE5] p-4 sm:p-5 border border-pink-200/60 shadow-inner">
          
          {/* Top In-Game Bar */}
          <div className="flex items-center justify-between mb-3.5 bg-white/90 backdrop-blur-xs rounded-2xl px-3.5 py-2 shadow-xs border border-pink-100/80">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-600 block">Level 14</span>
              <p className="text-xs font-extrabold text-stone-800">Sunny Meadow</p>
            </div>
            
            <div className="flex items-center gap-1 text-sm" aria-label="3 Stars earned">
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
            </div>

            <div className="text-right">
              <span className="text-[10px] font-bold uppercase tracking-wider text-pink-600 block">Squishes</span>
              <p className="text-xs font-black text-pink-600 tabular-nums">{squishCount}</p>
            </div>
          </div>

          {/* Interactive Status Feedback Pill */}
          <div className="mb-3 text-center min-h-[1.75rem] flex items-center justify-center">
            <span 
              className={`text-xs font-bold px-3 py-1 rounded-full transition-all duration-200 ${
                isRainbowActive
                  ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-amber-500 text-white shadow-md'
                  : 'bg-white/90 text-pink-700 border border-pink-200/80 shadow-2xs'
              }`}
            >
              {activeMessage}
            </span>
          </div>

          {/* 3x3 Plushie Squish Grid */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3 p-2.5 bg-white/70 rounded-2xl border border-pink-100 shadow-inner">
            {board.map((doll, index) => {
              const isSquishing = squishingIdx === index || isRainbowActive;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSquish(index)}
                  aria-label={`Squish ${doll.name}`}
                  className={`group relative aspect-square rounded-2xl border-2 flex flex-col items-center justify-center transition-all cursor-pointer shadow-2xs active:scale-90 ${doll.bg} ${doll.border} ${
                    isSquishing ? 'animate-squish scale-105 ring-2 ring-pink-400' : 'hover:scale-102'
                  }`}
                >
                  <span className="text-3xl sm:text-4xl filter drop-shadow-xs transition-transform group-hover:scale-110">
                    {doll.emoji}
                  </span>
                  <span className={`text-[10px] font-bold mt-1 ${doll.color}`}>
                    {doll.name}
                  </span>

                  {/* Soft stitch details in corners */}
                  <span className="absolute top-1 left-1.5 text-[8px] text-stone-300 font-mono select-none">··</span>
                  <span className="absolute bottom-1 right-1.5 text-[8px] text-stone-300 font-mono select-none">··</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Controls */}
          <div className="mt-3.5 flex items-center justify-between gap-2 pt-2 border-t border-pink-100/80">
            <button
              type="button"
              onClick={handleRainbowBooster}
              disabled={isRainbowActive}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 hover:from-purple-600 hover:to-rose-600 text-white font-bold text-xs shadow-xs active:scale-95 transition-all cursor-pointer"
            >
              <span>🌈</span>
              <span>Rainbow Booster</span>
            </button>

            <button
              type="button"
              onClick={handleShuffle}
              title="Shuffle Dolls"
              className="px-3 py-2 rounded-xl bg-white hover:bg-stone-50 border border-stone-200 text-stone-600 text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
            >
              Shuffle 🎲
            </button>
          </div>

          <p className="mt-2 text-center text-[10px] text-stone-600 font-medium">
            Try it: Tap any plushie above to feel the squish animation!
          </p>

        </div>
      </div>
    </div>
  );
};
