'use client';

import React, { useState } from 'react';

interface DollTile {
  id: number;
  type: 'bunny' | 'bear' | 'cat' | 'puppy';
  name: string;
  emoji: string;
  color: string;
  bg: string;
  border: string;
  isSquishing: boolean;
}

const INITIAL_TILES: DollTile[] = [
  { id: 1, type: 'bunny', name: 'Bunny', emoji: '🐰', color: 'text-pink-600', bg: 'bg-pink-100', border: 'border-pink-300', isSquishing: false },
  { id: 2, type: 'bear', name: 'Bear', emoji: '🧸', color: 'text-amber-700', bg: 'bg-amber-100', border: 'border-amber-300', isSquishing: false },
  { id: 3, type: 'cat', name: 'Mochi', emoji: '🐱', color: 'text-purple-600', bg: 'bg-purple-100', border: 'border-purple-300', isSquishing: false },
  { id: 4, type: 'puppy', name: 'Dottie', emoji: '🐶', color: 'text-sky-600', bg: 'bg-sky-100', border: 'border-sky-300', isSquishing: false },
  { id: 5, type: 'bear', name: 'Bear', emoji: '🧸', color: 'text-amber-700', bg: 'bg-amber-100', border: 'border-amber-300', isSquishing: false },
  { id: 6, type: 'bunny', name: 'Bunny', emoji: '🐰', color: 'text-pink-600', bg: 'bg-pink-100', border: 'border-pink-300', isSquishing: false },
  { id: 7, type: 'cat', name: 'Mochi', emoji: '🐱', color: 'text-purple-600', bg: 'bg-purple-100', border: 'border-purple-300', isSquishing: false },
  { id: 8, type: 'bunny', name: 'Bunny', emoji: '🐰', color: 'text-pink-600', bg: 'bg-pink-100', border: 'border-pink-300', isSquishing: false },
  { id: 9, type: 'puppy', name: 'Dottie', emoji: '🐶', color: 'text-sky-600', bg: 'bg-sky-100', border: 'border-sky-300', isSquishing: false },
];

export const GameShowcase: React.FC = () => {
  const [tiles, setTiles] = useState<DollTile[]>(INITIAL_TILES);
  const [score, setScore] = useState<number>(1280);
  const [combo, setCombo] = useState<number>(1);
  const [floatingMessage, setFloatingMessage] = useState<string>('Tap a doll to squish!');
  const [powerUpActive, setPowerUpActive] = useState<boolean>(false);

  const handleTileClick = (index: number) => {
    const newTiles = [...tiles];
    newTiles[index] = { ...newTiles[index], isSquishing: true };
    setTiles(newTiles);

    // Calculate score
    const points = 100 * combo;
    setScore((prev) => prev + points);
    setCombo((prev) => Math.min(prev + 1, 5));

    const dollName = newTiles[index].name;
    const messages = [
      `Squished ${dollName}! +${points} pts ✨`,
      `Cozy combo ${combo}x! 💖`,
      `Fluffy soft bounce! 🧸`,
      `Super match! +${points} ⭐`,
    ];
    setFloatingMessage(messages[Math.floor(Math.random() * messages.length)]);

    // Reset squish animation after 400ms
    setTimeout(() => {
      setTiles((current) =>
        current.map((t, i) => (i === index ? { ...t, isSquishing: false } : t))
      );
    }, 450);
  };

  const handleTriggerBooster = () => {
    setPowerUpActive(true);
    setScore((prev) => prev + 500);
    setCombo(5);
    setFloatingMessage('🌈 Rainbow Yarn Cleared All Dolls! +500 pts!');

    // Animate all tiles
    setTiles((current) => current.map((t) => ({ ...t, isSquishing: true })));

    setTimeout(() => {
      setTiles((current) => current.map((t) => ({ ...t, isSquishing: false })));
      setPowerUpActive(false);
    }, 600);
  };

  return (
    <div className="relative mx-auto w-full max-w-sm sm:max-w-md select-none">
      {/* Decorative Floating Game Badges */}
      <div className="absolute -top-4 -left-4 z-20 hidden sm:flex items-center gap-1.5 bg-white/95 px-3 py-1.5 rounded-full shadow-lg border border-pink-200/80 text-xs font-bold text-pink-700 animate-float">
        <span>🧸</span> Flame 2D Physics
      </div>
      <div className="absolute -bottom-4 -right-4 z-20 hidden sm:flex items-center gap-1.5 bg-white/95 px-3 py-1.5 rounded-full shadow-lg border border-purple-200/80 text-xs font-bold text-purple-700 animate-float-delayed">
        <span>⚡</span> 60 FPS Smooth
      </div>

      {/* Mock Phone Frame */}
      <div className="relative rounded-[2.5rem] bg-gradient-to-b from-stone-900 to-stone-800 p-3.5 sm:p-4 shadow-2xl shadow-pink-900/20 border-4 border-stone-800">
        {/* Phone Speaker Notch */}
        <div className="mx-auto mb-3 h-4 w-28 rounded-full bg-stone-950 flex items-center justify-center">
          <div className="h-1.5 w-10 rounded-full bg-stone-800" />
        </div>

        {/* Screen Bezel */}
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-rose-50 via-pink-50 to-amber-50 p-4 sm:p-5 border border-pink-200/50">
          
          {/* Top In-Game Bar */}
          <div className="flex items-center justify-between mb-4 bg-white/80 backdrop-blur-xs rounded-2xl px-3.5 py-2 shadow-xs border border-pink-100">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Level 42</span>
              <p className="text-xs font-black text-stone-800">Cloud Kingdom</p>
            </div>
            
            <div className="text-right">
              <span className="text-[10px] font-bold uppercase tracking-wider text-pink-500">Score</span>
              <p className="text-sm font-black text-pink-600 tabular-nums">{score.toLocaleString()}</p>
            </div>
          </div>

          {/* Interactive Floating Status Feedback */}
          <div className="mb-3 text-center h-6 flex items-center justify-center">
            <span className={`text-xs font-bold transition-all px-3 py-0.5 rounded-full ${
              powerUpActive 
                ? 'bg-gradient-to-r from-amber-400 to-pink-500 text-white shadow-md animate-pulse' 
                : 'bg-pink-100 text-pink-800'
            }`}>
              {floatingMessage}
            </span>
          </div>

          {/* 3x3 Doll Squish Puzzle Grid */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3 p-2 bg-white/60 rounded-2xl border border-pink-100/80 shadow-inner">
            {tiles.map((tile, index) => (
              <button
                key={tile.id}
                type="button"
                onClick={() => handleTileClick(index)}
                aria-label={`Squish ${tile.name}`}
                className={`group relative aspect-square rounded-2xl border-2 flex flex-col items-center justify-center transition-all cursor-pointer shadow-xs active:scale-90 ${tile.bg} ${tile.border} ${
                  tile.isSquishing ? 'animate-squish scale-110 shadow-md ring-2 ring-pink-400' : 'hover:scale-105'
                }`}
              >
                {/* Cute plush doll face */}
                <span className="text-3xl sm:text-4xl filter drop-shadow-xs transition-transform group-hover:scale-110">
                  {tile.emoji}
                </span>
                <span className={`text-[10px] font-bold mt-1 ${tile.color}`}>
                  {tile.name}
                </span>

                {/* Soft stitch details */}
                <span className="absolute top-1 left-1.5 text-[8px] text-pink-300/80">· ·</span>
                <span className="absolute bottom-1 right-1.5 text-[8px] text-pink-300/80">· ·</span>
              </button>
            ))}
          </div>

          {/* In-Game Action Bar / Boosters */}
          <div className="mt-4 flex items-center justify-between gap-2 pt-2 border-t border-pink-100">
            <button
              type="button"
              onClick={handleTriggerBooster}
              disabled={powerUpActive}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xs shadow-md shadow-pink-200 hover:opacity-95 active:scale-95 transition-all cursor-pointer"
            >
              <span>🌈</span>
              <span>Rainbow Booster</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setScore(1280);
                setCombo(1);
                setFloatingMessage('Board reset! Tap to play.');
              }}
              title="Reset Mini Game"
              className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-600 text-xs font-semibold transition-colors cursor-pointer"
            >
              🔄
            </button>
          </div>

          {/* Interactive Hint */}
          <p className="mt-2 text-center text-[10px] text-stone-400 font-medium">
            ✨ Interactive preview: tap any plush doll to test squish physics!
          </p>

        </div>
      </div>
    </div>
  );
};
