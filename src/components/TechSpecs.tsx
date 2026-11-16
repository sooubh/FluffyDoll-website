import React from 'react';

interface SpecRow {
  icon: string;
  label: string;
  title: string;
  description: string;
}

const SPECS: SpecRow[] = [
  { 
    icon: '📱', 
    label: 'Compatibility', 
    title: 'Android 8.0 & Newer', 
    description: 'Works smoothly across phones and tablets, covering over 95% of active Android devices.' 
  },
  { 
    icon: '🪶', 
    label: 'Storage', 
    title: '< 40 MB Download', 
    description: 'Installs in seconds without eating up your precious storage space or mobile data.' 
  },
  { 
    icon: '🔋', 
    label: 'Efficiency', 
    title: 'Battery & Heat Friendly', 
    description: 'Flutter & Flame 2D architecture designed for low CPU overhead and sustained cool gameplay.' 
  },
  { 
    icon: '🛡️', 
    label: 'Privacy', 
    title: 'Zero Intrusive Permissions', 
    description: 'No access requested to your camera, microphone, photos, contacts, or GPS location.' 
  },
];

export const TechSpecs: React.FC = () => {
  return (
    <section id="specs" className="py-18 sm:py-24 bg-stone-50/70 border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-700 bg-emerald-100/80 border border-emerald-200 px-3.5 py-1 rounded-full">
            Engineering Standards
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Crafted with Care for Android
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Engineered to respect your device, battery, storage, and privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SPECS.map((spec, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-2xs hover:border-emerald-300 transition-colors"
            >
              <div className="text-3xl mb-3">{spec.icon}</div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-600 block">
                {spec.label}
              </span>
              <h3 className="text-base font-bold text-stone-900 mt-1">
                {spec.title}
              </h3>
              <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                {spec.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
