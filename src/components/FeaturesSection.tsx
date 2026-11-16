import React from 'react';
import { 
  IconPhysics, 
  IconCalm, 
  IconOffline, 
  IconWardrobe, 
  IconBattery, 
  IconShieldCheck 
} from './icons/GameIcons';

interface FeatureItem {
  icon: React.ReactNode;
  tag: string;
  title: string;
  description: string;
}

const FEATURES: FeatureItem[] = [
  {
    icon: <IconPhysics className="w-6 h-6 text-zinc-900" />,
    tag: 'Engine Architecture',
    title: 'Soft-Body Flame Physics',
    description: 'Unlike rigid grid matchers, dolls compress, deform, and settle dynamically based on mass and impact using the Flutter Flame 2D physics engine.',
  },
  {
    icon: <IconCalm className="w-6 h-6 text-zinc-900" />,
    tag: 'Player Pacing',
    title: 'Zero Stress, Untimed Stages',
    description: 'Solve puzzles on your own schedule with no ticking countdowns, artificial fail states, or energy limits. Supported by gentle acoustic chimes.',
  },
  {
    icon: <IconOffline className="w-6 h-6 text-zinc-900" />,
    tag: 'Connectivity',
    title: 'Completely Offline Capable',
    description: 'All 200+ stages, cosmetic unlocks, and local save files operate directly on your Android device without requiring an active internet connection.',
  },
  {
    icon: <IconWardrobe className="w-6 h-6 text-zinc-900" />,
    tag: 'Customization',
    title: 'Plush Companion Wardrobe',
    description: 'Collect knit scarves, ribbon bows, and seasonal accessories by completing stages. Personalize your plush squad and decorate your in-game shelf.',
  },
  {
    icon: <IconBattery className="w-6 h-6 text-zinc-900" />,
    tag: 'Performance',
    title: 'Efficient & Battery Friendly',
    description: 'Optimized rendering pipeline draws less than 40 MB of disk storage and runs at smooth 60 FPS without overheating mobile hardware.',
  },
  {
    icon: <IconShieldCheck className="w-6 h-6 text-zinc-900" />,
    tag: 'Privacy Standards',
    title: 'Zero Intrusive Tracking',
    description: 'No account registration, no contact harvesting, and no sensitive permissions. Engineered with strict adherence to Google Play policies.',
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 sm:py-28 bg-white border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase font-mono tracking-wider text-zinc-500 font-semibold block mb-2">
            Engineered Gameplay
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Designed for thoughtful puzzle-solving.
          </h2>
          <p className="mt-4 text-base text-zinc-600 leading-relaxed font-normal">
            Every interaction in FluffyDoll is calibrated for satisfying tactile feedback, low cognitive friction, and long-term offline durability.
          </p>
        </div>

        {/* 6 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 sm:p-7 bg-[#FBFBFA] border border-zinc-200/80 hover:border-zinc-300 transition-colors flex flex-col justify-between shadow-2xs"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-5 shadow-2xs">
                  {item.icon}
                </div>
                <span className="text-[11px] font-mono uppercase text-zinc-600 font-medium tracking-wide">
                  {item.tag}
                </span>
                <h3 className="text-lg font-bold text-zinc-900 mt-1">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
