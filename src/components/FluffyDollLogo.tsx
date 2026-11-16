import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const FluffyDollLogo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  showSubtitle = true,
}) => {
  const sizeConfig = {
    sm: {
      box: 'w-7 h-7 rounded-lg',
      icon: 'w-4 h-4',
      title: 'text-sm font-bold',
      badge: 'text-[9px] px-1.5 py-0.5',
    },
    md: {
      box: 'w-9 h-9 rounded-xl',
      icon: 'w-5 h-5',
      title: 'text-base sm:text-lg font-bold',
      badge: 'text-[10px] px-2 py-0.5',
    },
    lg: {
      box: 'w-12 h-12 rounded-2xl',
      icon: 'w-7 h-7',
      title: 'text-2xl font-bold',
      badge: 'text-xs px-2.5 py-0.5',
    },
  }[size];

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Refined Minimalist Plush Mark */}
      <div 
        className={`flex items-center justify-center bg-zinc-900 text-white border border-zinc-800 shadow-2xs transition-transform hover:scale-102 ${sizeConfig.box}`}
        aria-hidden="true"
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className={sizeConfig.icon}
        >
          {/* Plush Teddy Head with Ears */}
          <circle cx="12" cy="13" r="7" />
          <circle cx="7" cy="7.5" r="2.5" fill="currentColor" fillOpacity="0.3" />
          <circle cx="17" cy="7.5" r="2.5" fill="currentColor" fillOpacity="0.3" />
          {/* Button Eyes */}
          <circle cx="9.5" cy="12" r="1" fill="currentColor" />
          <circle cx="14.5" cy="12" r="1" fill="currentColor" />
          {/* Subtle Smile */}
          <path d="M10.5 15c.8.7 2.2.7 3 0" />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`tracking-tight text-zinc-900 ${sizeConfig.title}`}>
            FluffyDoll
          </span>
          <span className={`font-medium rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200/80 ${sizeConfig.badge}`}>
            Game
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[11px] font-medium text-zinc-500 tracking-normal">
            Android Puzzle · Flutter &amp; Flame
          </span>
        )}
      </div>
    </div>
  );
};
