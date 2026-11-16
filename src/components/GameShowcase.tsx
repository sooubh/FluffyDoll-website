'use client';

import React, { useState } from 'react';
import { AvatarBunny, AvatarBear, AvatarCat, AvatarPuppy, IconPhysics, IconSparkle } from './icons/GameIcons';

interface DollCell {
  id: number;
  type: 'bunny' | 'bear' | 'cat' | 'puppy';
  name: string;
  avatar: React.ReactNode;
  physicsNote: string;
}

const CELL_PRESETS: Omit<DollCell, 'id'>[] = [
  { 
    type: 'bunny', 
    name: 'BunBun', 
    avatar: <AvatarBunny className="w-10 h-10 text-zinc-800" />,
    physicsNote: 'Marshmallow soft rebound' 
  },
  { 
    type: 'bear', 
    name: 'PuffBear', 
    avatar: <AvatarBear className="w-10 h-10 text-zinc-800" />,
    physicsNote: 'High-density hug compression' 
  },
  { 
    type: 'cat', 
    name: 'Mochi', 
    avatar: <AvatarCat className="w-10 h-10 text-zinc-800" />,
    physicsNote: 'Velveteen elastic settling' 
  },
  { 
    type: 'puppy', 
    name: 'Dottie', 
    avatar: <AvatarPuppy className="w-10 h-10 text-zinc-800" />,
    physicsNote: 'Dynamic spring-back' 
  },
];

export const GameShowcase: React.FC = () => {
  const [cells, setCells] = useState<DollCell[]>([
    { id: 1, ...CELL_PRESETS[0] },
    { id: 2, ...CELL_PRESETS[1] },
    { id: 3, ...CELL_PRESETS[2] },
    { id: 4, ...CELL_PRESETS[1] },
    { id: 5, ...CELL_PRESETS[0] },
    { id: 6, ...CELL_PRESETS[3] },
    { id: 7, ...CELL_PRESETS[2] },
    { id: 8, ...CELL_PRESETS[3] },
    { id: 9, ...CELL_PRESETS[0] },
  ]);

  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>('Select any plush doll to trigger Flame 2D physics');
  const [squishCount, setSquishCount] = useState<number>(0);
  const [cascadeActive, setCascadeActive] = useState<boolean>(false);

  const handleCellClick = (index: number) => {
    setActiveIdx(index);
    const doll = cells[index];
    setSquishCount((prev) => prev + 1);
    setStatusMessage(`${doll.name}: ${doll.physicsNote}`);

    setTimeout(() => {
      setActiveIdx(null);
    }, 450);
  };

  const handleCascadeSimulation = () => {
    setCascadeActive(true);
    setStatusMessage('Cascade simulation: soft-body collision active across all 9 cells');
    setSquishCount((prev) => prev + 9);

    setTimeout(() => {
      setCascadeActive(false);
      // Subtle reorder
      setCells((prev) => [...prev].sort(() => Math.random() - 0.5));
    }, 600);
  };

  const handleReset = () => {
    setSquishCount(0);
    setStatusMessage('Grid reset to standard 3x3 layout');
    setCells([
      { id: 1, ...CELL_PRESETS[0] },
      { id: 2, ...CELL_PRESETS[1] },
      { id: 3, ...CELL_PRESETS[2] },
      { id: 4, ...CELL_PRESETS[1] },
      { id: 5, ...CELL_PRESETS[0] },
      { id: 6, ...CELL_PRESETS[3] },
      { id: 7, ...CELL_PRESETS[2] },
      { id: 8, ...CELL_PRESETS[3] },
      { id: 9, ...CELL_PRESETS[0] },
    ]);
  };

  return (
    <div className="relative mx-auto w-full max-w-sm sm:max-w-md select-none">
      {/* Precision Handheld Simulator Housing */}
      <div className="rounded-3xl bg-white border border-zinc-200/90 p-5 sm:p-6 shadow-sm">
        
        {/* Device Status Bar */}
        <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-zinc-100 text-xs">
          <div className="flex items-center gap-1.5 text-zinc-700 font-medium">
            <IconPhysics className="w-4 h-4 text-zinc-900" />
            <span>Flame 2D Physics Simulator</span>
          </div>

          <div className="flex items-center gap-3 text-zinc-500 font-mono text-[11px]">
            <span>60 FPS</span>
            <span className="text-zinc-300">|</span>
            <span className="tabular-nums">Passes: {squishCount}</span>
          </div>
        </div>

        {/* Live Feedback Banner */}
        <div className="min-h-[2.25rem] mb-3.5 p-2 rounded-xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-between px-3 text-xs">
          <span className="text-zinc-700 truncate font-medium">
            {statusMessage}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 ml-2" aria-hidden="true" />
        </div>

        {/* 3x3 Vector Plushie Matrix */}
        <div className="grid grid-cols-3 gap-2.5 p-2 rounded-2xl bg-zinc-100/60 border border-zinc-200/60">
          {cells.map((cell, idx) => {
            const isSquishing = activeIdx === idx || cascadeActive;
            return (
              <button
                key={cell.id}
                type="button"
                onClick={() => handleCellClick(idx)}
                aria-label={`Squish ${cell.name}`}
                className={`relative aspect-square rounded-xl bg-white border flex flex-col items-center justify-center p-2 cursor-pointer transition-all duration-200 shadow-2xs active:scale-95 ${
                  isSquishing
                    ? 'border-zinc-900 ring-2 ring-zinc-900/10 scale-102'
                    : 'border-zinc-200/80 hover:border-zinc-400 hover:shadow-xs'
                }`}
              >
                <div className={`transition-transform duration-300 ${isSquishing ? 'scale-y-75 scale-x-120' : ''}`}>
                  {cell.avatar}
                </div>
                <span className="text-[10px] font-medium text-zinc-600 mt-1 tracking-tight">
                  {cell.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interaction Controls */}
        <div className="mt-4 pt-3.5 border-t border-zinc-100 flex items-center justify-between gap-2.5">
          <button
            type="button"
            onClick={handleCascadeSimulation}
            disabled={cascadeActive}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-xs transition-colors cursor-pointer disabled:opacity-50"
          >
            <IconSparkle className="w-3.5 h-3.5" />
            <span>Simulate Soft Cascade</span>
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="py-2 px-3 rounded-xl bg-white hover:bg-zinc-100 border border-zinc-200 text-zinc-700 font-medium text-xs transition-colors cursor-pointer"
          >
            Reset
          </button>
        </div>

        <p className="mt-2.5 text-center text-[11px] text-zinc-400">
          Interactive client-side demonstration of Flame 2D soft-body matrix
        </p>

      </div>
    </div>
  );
};
