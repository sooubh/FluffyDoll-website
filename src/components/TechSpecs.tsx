import React from 'react';

interface SpecRow {
  label: string;
  value: string;
  sub: string;
}

const SPECS: SpecRow[] = [
  { label: 'Game Engine', value: 'Flutter & Flame 2D', sub: 'Native high-efficiency mobile rendering' },
  { label: 'Operating System', value: 'Android 8.0 (Oreo) & Above', sub: 'Compatible with over 95% of active devices' },
  { label: 'Download Size', value: '< 40 MB', sub: 'Ultra-lightweight instant install' },
  { label: 'Internet Needed', value: 'No (100% Offline)', sub: 'Play anywhere without mobile data' },
  { label: 'Target Frame Rate', value: '60 FPS / 120 FPS', sub: 'Adaptive high refresh rate support' },
  { label: 'Permissions', value: 'Zero Intrusive Access', sub: 'No location, camera, or contacts requested' },
];

export const TechSpecs: React.FC = () => {
  return (
    <section id="specs" className="py-20 sm:py-28 bg-stone-50/70 border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-700 bg-emerald-100/80 border border-emerald-200 px-3.5 py-1 rounded-full">
            Engineering &amp; Performance
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Built for Smooth Android Gaming
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            Engineered with modern mobile game standards for low battery consumption, fast load times, and respectful device resource usage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SPECS.map((spec, index) => (
            <div 
              key={index}
              className="p-6 rounded-3xl bg-white border border-stone-200/80 shadow-xs hover:border-emerald-300 transition-colors"
            >
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                {spec.label}
              </span>
              <p className="text-lg font-black text-stone-900 mt-1">
                {spec.value}
              </p>
              <p className="text-xs text-stone-500 mt-1">
                {spec.sub}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
