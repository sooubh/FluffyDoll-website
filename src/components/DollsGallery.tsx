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
  favoriteNapSpot: string;
  squishFeel: string;
  signatureSkill: string;
  outfits: { id: string; name: string; accessory: string }[];
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
    favoriteNapSpot: 'Inside a knitted wool sock',
    squishFeel: 'Maximum Marshmallow Squish',
    signatureSkill: 'Super Fluff Bounce — clears full vertical columns with bouncy plush ears.',
    outfits: [
      { id: 'ribbon', name: 'Pastel Bow', accessory: '🎀' },
      { id: 'scarf', name: 'Knit Scarf', accessory: '🧣' },
      { id: 'crown', name: 'Daisy Crown', accessory: '🌼' },
    ],
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
    favoriteNapSpot: 'Atop a stack of soft quilts',
    squishFeel: 'Dense, Reassuring Teddy Hug',
    signatureSkill: 'Cozy Honey Hug — melts through sticky blocks and unlocks frozen crates.',
    outfits: [
      { id: 'bowtie', name: 'Velvet Bowtie', accessory: '🎀' },
      { id: 'glasses', name: 'Tiny Glasses', accessory: '👓' },
      { id: 'honey', name: 'Honey Pot Pin', accessory: '🍯' },
    ],
  },
  {
    id: 'mochi',
    name: 'Mochi Kitty',
    tagline: 'The Sleepy Yarn Spinner',
    emoji: '🐱',
    colorTheme: 'text-purple-600',
    bgGradient: 'from-purple-100 via-fuchsia-50 to-white',
    borderTheme: 'border-purple-300 ring-purple-400',
    badge: 'Unlockable at Level 15',
    personality: 'Loves curling up inside teacups and napping peacefully between matching streaks.',
    favoriteSnack: 'Sweet Milk Candy',
    favoriteNapSpot: 'Yarn basket near the sunny window',
    squishFeel: 'Ultra-Soft Velveteen Pillowy',
    signatureSkill: 'Rainbow Yarn Whirl — weaves magical yarn to turn 4 random dolls wild.',
    outfits: [
      { id: 'bell', name: 'Silver Bell Collar', accessory: '🔔' },
      { id: 'fish', name: 'Taiyaki Snack', accessory: '🐟' },
      { id: 'beret', name: 'Woolen Beret', accessory: '🎨' },
    ],
  },
  {
    id: 'dottie',
    name: 'Dottie Pup',
    tagline: 'The Loyal Star Seeker',
    emoji: '🐶',
    colorTheme: 'text-sky-600',
    bgGradient: 'from-sky-100 via-blue-50 to-white',
    borderTheme: 'border-sky-300 ring-sky-400',
    badge: 'Unlockable at Level 30',
    personality: 'Always wagging his little plush tail, eager to sniff out hidden star gems.',
    favoriteSnack: 'Caramel Bone Biscuits',
    favoriteNapSpot: 'At the foot of the bed on your slippers',
    squishFeel: 'Bouncy Springy Cotton Ball',
    signatureSkill: 'Joyful Bark Pop — creates a friendly shockwave clearing a 3x3 radius.',
    outfits: [
      { id: 'bandana', name: 'Red Bandana', accessory: '🧣' },
      { id: 'cap', name: 'Baseball Cap', accessory: '🧢' },
      { id: 'star', name: 'Gold Star Badge', accessory: '⭐' },
    ],
  },
];

export const DollsGallery: React.FC = () => {
  const [selectedDoll, setSelectedDoll] = useState<DollCharacter>(DOLLS[0]);
  const [selectedOutfit, setSelectedOutfit] = useState<string>(DOLLS[0].outfits[0].id);
  const [isAvatarSquishing, setIsAvatarSquishing] = useState<boolean>(false);

  const handleDollSelect = (doll: DollCharacter) => {
    setSelectedDoll(doll);
    setSelectedOutfit(doll.outfits[0].id);
  };

  const handleAvatarClick = () => {
    setIsAvatarSquishing(true);
    setTimeout(() => setIsAvatarSquishing(false), 450);
  };

  const currentOutfit = selectedDoll.outfits.find((o) => o.id === selectedOutfit) || selectedDoll.outfits[0];

  return (
    <section id="dolls" className="py-20 sm:py-28 bg-gradient-to-b from-rose-50/30 via-white to-pink-50/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-extrabold tracking-wider text-purple-600 bg-purple-100/80 border border-purple-200 px-3.5 py-1 rounded-full">
            Plush Companions
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Meet Your Cozy Plush Squad
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            Every plush doll in FluffyDoll has their own delightful squish physics, favorite snack, and puzzle superpowers. Tap to get to know them!
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
                onClick={() => handleDollSelect(doll)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-stone-900 text-white shadow-md scale-102'
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
        <div className={`rounded-3xl border-2 p-6 sm:p-10 bg-gradient-to-br ${selectedDoll.bgGradient} ${selectedDoll.borderTheme} shadow-xl shadow-pink-100/30 transition-all`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Doll Plushie Big Avatar */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-6 bg-white/80 backdrop-blur-xs rounded-3xl border border-white shadow-xs">
              <button
                type="button"
                onClick={handleAvatarClick}
                title="Tap to squish!"
                className={`relative w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-white shadow-inner flex items-center justify-center border-4 border-dashed border-pink-200/80 cursor-pointer active:scale-95 transition-transform ${
                  isAvatarSquishing ? 'animate-squish ring-4 ring-pink-300' : 'hover:scale-102'
                }`}
              >
                <span className="text-7xl sm:text-8xl filter drop-shadow-md select-none">
                  {selectedDoll.emoji}
                </span>

                {/* Accessory Overlay */}
                <span className="absolute top-2 right-2 text-3xl filter drop-shadow-xs" title={currentOutfit.name}>
                  {currentOutfit.accessory}
                </span>

                <span className="absolute -bottom-2 px-3 py-1 bg-stone-900 text-white text-[11px] font-black rounded-full shadow-md">
                  {selectedDoll.badge}
                </span>
              </button>

              <h3 className="mt-5 text-2xl font-black text-stone-900">
                {selectedDoll.name}
              </h3>
              <p className={`text-xs font-bold uppercase tracking-wider mt-1 ${selectedDoll.colorTheme}`}>
                {selectedDoll.tagline}
              </p>
              <p className="mt-1 text-[11px] text-stone-400 font-medium">
                Tap doll to squish!
              </p>
            </div>

            {/* Doll Details & Lore */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <h4 className="text-xs uppercase font-extrabold text-stone-600 tracking-wider">
                  Personality
                </h4>
                <p className="mt-1 text-sm sm:text-base text-stone-700 leading-relaxed font-medium">
                  {selectedDoll.personality}
                </p>
              </div>

              {/* Signature Skill Box */}
              <div className="p-4 rounded-2xl bg-white/90 border border-stone-200/70 shadow-2xs">
                <span className="text-xs font-bold text-pink-600 uppercase tracking-wider block mb-1">
                  ✨ Signature Puzzle Power
                </span>
                <p className="text-sm font-bold text-stone-800">
                  {selectedDoll.signatureSkill}
                </p>
              </div>

              {/* Cozy Profile Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-white/70 p-3 rounded-xl border border-stone-200/60">
                  <span className="font-bold text-stone-700 block">Favorite Treat</span>
                  <span className="text-stone-600">{selectedDoll.favoriteSnack}</span>
                </div>
                <div className="bg-white/70 p-3 rounded-xl border border-stone-200/60">
                  <span className="font-bold text-stone-700 block">Cozy Nap Spot</span>
                  <span className="text-stone-600">{selectedDoll.favoriteNapSpot}</span>
                </div>
                <div className="bg-white/70 p-3 rounded-xl border border-stone-200/60 sm:col-span-2">
                  <span className="font-bold text-stone-700 block">Squish Rating</span>
                  <span className="text-pink-600 font-semibold">{selectedDoll.squishFeel}</span>
                </div>
              </div>

              {/* Wardrobe Accessory Picker */}
              <div className="pt-2">
                <span className="text-xs font-bold text-stone-600 uppercase tracking-wider block mb-2">
                  👗 Try an Accessory
                </span>
                <div className="flex items-center gap-2">
                  {selectedDoll.outfits.map((outfit) => {
                    const isOutfitActive = selectedOutfit === outfit.id;
                    return (
                      <button
                        key={outfit.id}
                        type="button"
                        onClick={() => setSelectedOutfit(outfit.id)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          isOutfitActive
                            ? 'bg-stone-900 text-white shadow-2xs'
                            : 'bg-white hover:bg-stone-50 text-stone-700 border border-stone-200'
                        }`}
                      >
                        <span>{outfit.accessory}</span>
                        <span>{outfit.name}</span>
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
