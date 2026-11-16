import React from 'react';
import { IconDeviceAndroid, IconStorage, IconBattery, IconShieldCheck } from './icons/GameIcons';

interface SpecRow {
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
}

const SPECS: SpecRow[] = [
  { 
    icon: <IconDeviceAndroid className="w-5 h-5 text-zinc-900" />,
    label: 'Compatibility', 
    title: 'Android 8.0 & Newer', 
    description: 'Fully supported across active Android smartphones and tablets, testing positive on over 95% of active devices.' 
  },
  { 
    icon: <IconStorage className="w-5 h-5 text-zinc-900" />,
    label: 'App Footprint', 
    title: '< 40 MB Download', 
    description: 'Compressed asset delivery allows rapid installation without consuming cellular data allowances or internal device storage.' 
  },
  { 
    icon: <IconBattery className="w-5 h-5 text-zinc-900" />,
    label: 'Thermal Profile', 
    title: 'Battery & GPU Efficient', 
    description: 'Compiled natively via Flutter with Flame 2D rendering shaders to maintain low operating temperature and minimal battery drain.' 
  },
  { 
    icon: <IconShieldCheck className="w-5 h-5 text-zinc-900" />,
    label: 'Device Sandbox', 
    title: 'Zero Intrusive Access', 
    description: 'Operates strictly within Android user sandbox. Never requests access to camera, microphone, contacts, location, or local files.' 
  },
];

export const TechSpecs: React.FC = () => {
  return (
    <section id="specs" className="py-20 sm:py-28 bg-[#FBFBFA] border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase font-mono tracking-wider text-zinc-500 font-semibold block mb-2">
            Engineering Rigor
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Built to Respect Your Device
          </h2>
          <p className="mt-4 text-base text-zinc-600 leading-relaxed font-normal">
            Technical standards engineered to deliver dependable performance, minimal disk footprint, and verified user security.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SPECS.map((spec, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs hover:border-zinc-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-4">
                  {spec.icon}
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-medium block">
                  {spec.label}
                </span>
                <h3 className="text-base font-bold text-zinc-900 mt-1">
                  {spec.title}
                </h3>
                <p className="text-xs text-zinc-600 mt-2 leading-relaxed font-normal">
                  {spec.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
