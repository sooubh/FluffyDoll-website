import React from 'react';

interface FeatureCardItem {
  icon: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  gradient: string;
  borderHover: string;
}

const FEATURES: FeatureCardItem[] = [
  {
    icon: '🧸',
    badge: 'Physics Engine',
    badgeColor: 'bg-pink-100 text-pink-700 border-pink-200',
    title: 'Squishy Plush Physics',
    description: 'Every doll is modeled with responsive soft-body physics using the Flame 2D engine. Watch them squish, tumble, bounce, and react to every touch.',
    gradient: 'from-pink-50/50 to-white',
    borderHover: 'hover:border-pink-300',
  },
  {
    icon: '👗',
    badge: 'Customization',
    badgeColor: 'bg-purple-100 text-purple-700 border-purple-200',
    title: 'Doll Closet & Styling',
    description: 'Collect ribbons, cozy knit hats, pastel bows, and dreamy seasonal outfits. Dress your plush squad and customize your game home.',
    gradient: 'from-purple-50/50 to-white',
    borderHover: 'hover:border-purple-300',
  },
  {
    icon: '☁️',
    badge: '200+ Puzzles',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    title: 'Cozy, Stress-Free Levels',
    description: 'Say goodbye to harsh failure timers and high-pressure paywalls. Enjoy gentle ambient soundtracks and relaxing satisfying puzzle challenges.',
    gradient: 'from-amber-50/50 to-white',
    borderHover: 'hover:border-amber-300',
  },
  {
    icon: '📴',
    badge: 'Zero Wi-Fi',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    title: '100% Offline Playable',
    description: 'No Wi-Fi? Cellular dead zone? Airplane mode? FluffyDoll plays completely offline anytime, anywhere without interrupting your groove.',
    gradient: 'from-emerald-50/50 to-white',
    borderHover: 'hover:border-emerald-300',
  },
  {
    icon: '🛡️',
    badge: 'COPPA Certified',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-200',
    title: 'Safe for All Ages',
    description: 'Designed from the ground up for family safety, complying with Google Play Families and COPPA guidelines. Zero invasive permissions or hidden tracking.',
    gradient: 'from-sky-50/50 to-white',
    borderHover: 'hover:border-sky-300',
  },
  {
    icon: '⚡',
    badge: 'Butter Smooth',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    title: 'Featherlight 60 FPS',
    description: 'High-performance Flutter architecture ensures fast startup in under a second, under 40 MB install size, and silky 60 FPS with gentle battery usage.',
    gradient: 'from-rose-50/50 to-white',
    borderHover: 'hover:border-rose-300',
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 sm:py-28 bg-white border-y border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-wider text-pink-600 bg-pink-100/70 border border-pink-200/80 px-3.5 py-1 rounded-full">
            Wholesome Gameplay
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Why Players Fall in Love with FluffyDoll
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            Crafted for pure relaxation, thoughtful puzzle-solving, and delightful plush doll magic. Every feature is tuned for your comfort.
          </p>
        </div>

        {/* 6 Feature Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURES.map((item, idx) => (
            <div
              key={idx}
              className={`group relative rounded-3xl p-6 sm:p-7 border border-stone-200/80 bg-gradient-to-b ${item.gradient} transition-all duration-300 hover:shadow-xl hover:shadow-pink-100/50 hover:-translate-y-1 ${item.borderHover}`}
            >
              {/* Card Top: Icon & Badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-13 h-13 rounded-2xl bg-white shadow-xs border border-stone-100 flex items-center justify-center text-3xl transition-transform group-hover:scale-110">
                  {item.icon}
                </div>
                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
                  {item.badge}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-stone-900 tracking-tight group-hover:text-pink-600 transition-colors">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm text-stone-600 leading-relaxed">
                {item.description}
              </p>

              {/* Decorative Stitch Line */}
              <div className="mt-6 pt-4 border-t border-dashed border-stone-200 flex items-center justify-between text-xs text-stone-400 font-mono">
                <span>✦ Flutter + Flame</span>
                <span>Ready ✦</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
