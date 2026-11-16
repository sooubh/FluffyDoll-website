'use client';

import React, { useState } from 'react';
import { AvatarBunny, AvatarBear, AvatarCat, AvatarPuppy, IconCheck } from './icons/GameIcons';

interface DollCharacter {
  id: string;
  name: string;
  tagline: string;
  avatar: React.ReactNode;
  badge: string;
  fabricNote: string;
  personality: string;
  signatureSkill: string;
  unlockRequirement: string;
  accessories: string[];
}

const DOLLS: DollCharacter[] = [
  {
    id: 'bunbun',
    name: 'BunBun Strawberry',
    tagline: 'Vertical Column Clearer',
    avatar: <AvatarBunny className="w-24 h-24 text-zinc-900" />,
    badge: 'Starter Companion',
    fabricNote: 'Long-staple cotton fleece with high-resilience polyfill',
    personality: 'Energetic and forward-moving. Always the first companion to initiate high-altitude bounce cascades.',
    signatureSkill: 'Super Fluff Bounce — decompresses vertical columns upon matching 4 aligned tiles.',
    unlockRequirement: 'Available at Stage 1',
    accessories: ['Silk Ribbon', 'Winter Scarf', 'Daisy Wreath'],
  },
  {
    id: 'puffbear',
    name: 'PuffBear Honey',
    tagline: 'Obstacle & Crate Melter',
    avatar: <AvatarBear className="w-24 h-24 text-zinc-900" />,
    badge: 'Stage 5 Unlock',
    fabricNote: 'Dense woolen felt with weighted grain inner pouch',
    personality: 'Calm and steady. Provides heavy downward compression that destabilizes reinforced crates and obstacles.',
    signatureSkill: 'Cozy Honey Hug — dissolves frozen blocks and unlocks sealed wooden crates.',
    unlockRequirement: 'Clear Stage 5',
    accessories: ['Felt Bowtie', 'Scholar Glasses', 'Honey Badge'],
  },
  {
    id: 'mochi',
    name: 'Mochi Kitty',
    tagline: 'Wildcard Yarn Weaver',
    avatar: <AvatarCat className="w-24 h-24 text-zinc-900" />,
    badge: 'Stage 15 Unlock',
    fabricNote: 'Velveteen brushed microfiber with micro-bead filling',
    personality: 'Patient and observant. Interweaves disparate colors by spinning connecting thread pathways.',
    signatureSkill: 'Yarn Whirl — connects four disjointed non-matching cells into active wildcard matches.',
    unlockRequirement: 'Clear Stage 15',
    accessories: ['Silver Bell', 'Woolen Beret', 'Fish Pin'],
  },
  {
    id: 'dottie',
    name: 'Dottie Pup',
    tagline: 'Radial 3x3 Impact',
    avatar: <AvatarPuppy className="w-24 h-24 text-zinc-900" />,
    badge: 'Stage 30 Unlock',
    fabricNote: 'Canvas weave plush with high-spring cotton core',
    personality: 'Inquisitive and loyal. Emits a radial shockwave that clears difficult perimeter tiles.',
    signatureSkill: 'Bark Shockwave — creates a 3x3 radial clearance burst around target impact area.',
    unlockRequirement: 'Clear Stage 30',
    accessories: ['Bandana', 'Courier Cap', 'Star Emblem'],
  },
];

export const DollsGallery: React.FC = () => {
  const [selectedDoll, setSelectedDoll] = useState<DollCharacter>(DOLLS[0]);
  const [selectedAccessory, setSelectedAccessory] = useState<string>(DOLLS[0].accessories[0]);
  const [isSquishing, setIsSquishing] = useState<boolean>(false);

  const handleDollSelect = (doll: DollCharacter) => {
    setSelectedDoll(doll);
    setSelectedAccessory(doll.accessories[0]);
  };

  const handleAvatarClick = () => {
    setIsSquishing(true);
    setTimeout(() => setIsSquishing(false), 450);
  };

  return (
    <section id="dolls" className="py-20 sm:py-28 bg-[#FBFBFA] border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase font-mono tracking-wider text-zinc-500 font-semibold block mb-2">
            Collectible Companions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Meet the Plush Squad
          </h2>
          <p className="mt-4 text-base text-zinc-600 leading-relaxed font-normal">
            Each companion features calibrated mass, friction, and signature clearance mechanics tailored for specific puzzle boards.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {DOLLS.map((doll) => {
            const isSelected = selectedDoll.id === doll.id;
            return (
              <button
                key={doll.id}
                type="button"
                onClick={() => handleDollSelect(doll)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-zinc-900 text-white shadow-2xs'
                    : 'bg-white hover:bg-zinc-100 text-zinc-700 border border-zinc-200'
                }`}
              >
                <span>{doll.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Doll Spotlight Panel */}
        <div className="rounded-3xl border border-zinc-200/90 bg-white p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Avatar Display */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-8 bg-[#FBFBFA] rounded-2xl border border-zinc-200/70">
              <button
                type="button"
                onClick={handleAvatarClick}
                title="Click to test compression animation"
                className={`relative w-44 h-44 rounded-full bg-white border border-zinc-200 flex items-center justify-center cursor-pointer active:scale-95 transition-transform duration-300 shadow-2xs ${
                  isSquishing ? 'scale-y-75 scale-x-120 ring-2 ring-zinc-900/10' : 'hover:scale-102'
                }`}
              >
                <div className="transition-transform duration-300">
                  {selectedDoll.avatar}
                </div>
              </button>

              <h3 className="mt-5 text-xl font-bold text-zinc-950">
                {selectedDoll.name}
              </h3>
              <p className="text-xs font-mono uppercase text-zinc-500 mt-1">
                {selectedDoll.tagline}
              </p>
              <span className="mt-2 inline-block text-[11px] font-medium bg-zinc-100 text-zinc-700 px-2.5 py-0.5 rounded-full border border-zinc-200/80">
                {selectedDoll.unlockRequirement}
              </span>
            </div>

            {/* Right: Technical Specs & Lore */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-400 font-semibold">
                  Behavior &amp; Profile
                </h4>
                <p className="mt-1.5 text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
                  {selectedDoll.personality}
                </p>
              </div>

              {/* Signature Mechanics */}
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80">
                <span className="text-[11px] font-mono font-bold text-zinc-900 uppercase tracking-wide block mb-1">
                  Signature In-Game Clearance
                </span>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                  {selectedDoll.signatureSkill}
                </p>
              </div>

              {/* Fabric Specifications */}
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80">
                <span className="text-[11px] font-mono font-bold text-zinc-900 uppercase tracking-wide block mb-1">
                  Tactile Fabric Spec
                </span>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {selectedDoll.fabricNote}
                </p>
              </div>

              {/* Accessory Preview */}
              <div>
                <span className="text-xs font-mono uppercase text-zinc-500 font-semibold block mb-2">
                  Collectible Wardrobe
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedDoll.accessories.map((acc, aIdx) => {
                    const isSelected = selectedAccessory === acc;
                    return (
                      <button
                        key={aIdx}
                        type="button"
                        onClick={() => setSelectedAccessory(acc)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-zinc-900 text-white shadow-2xs'
                            : 'bg-white hover:bg-zinc-100 text-zinc-700 border border-zinc-200'
                        }`}
                      >
                        {isSelected && <IconCheck className="w-3 h-3 text-white" />}
                        <span>{acc}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
