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
      box: 'w-8 h-8 rounded-xl',
      icon: 'w-4.5 h-4.5',
      title: 'text-base font-black',
      badge: 'text-[10px] px-1.5 py-0.5',
    },
    md: {
      box: 'w-10 h-10 rounded-2xl',
      icon: 'w-5.5 h-5.5',
      title: 'text-lg sm:text-xl font-black',
      badge: 'text-xs px-2 py-0.5',
    },
    lg: {
      box: 'w-14 h-14 rounded-3xl',
      icon: 'w-8 h-8',
      title: 'text-2xl sm:text-3xl font-black',
      badge: 'text-xs px-2.5 py-1',
    },
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Plush Doll Brand Icon */}
      <div 
        className={`flex items-center justify-center bg-gradient-to-br from-pink-400 via-rose-400 to-purple-400 text-white shadow-md shadow-pink-200/80 border-2 border-white transition-transform hover:scale-105 active:scale-95 ${sizeConfig.box}`}
        aria-hidden="true"
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className={sizeConfig.icon}
        >
          {/* Cute Plush Doll with Teddy Ears */}
          <circle cx="12" cy="13" r="7.5" fill="rgba(255,255,255,0.2)" />
          {/* Left ear */}
          <circle cx="6.5" cy="6.5" r="3" fill="rgba(255,255,255,0.25)" />
          <circle cx="6.5" cy="6.5" r="1.5" fill="currentColor" opacity="0.6" />
          {/* Right ear */}
          <circle cx="17.5" cy="6.5" r="3" fill="rgba(255,255,255,0.25)" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" opacity="0.6" />
          {/* Eyes */}
          <circle cx="9.5" cy="12" r="1" fill="currentColor" />
          <circle cx="14.5" cy="12" r="1" fill="currentColor" />
          {/* Sweet smile & blush */}
          <path d="M10.5 15c.8.8 2.2.8 3 0" />
          {/* Cute forehead ribbon bow */}
          <path d="M11 7.5c-1-1-2.5 0-1.5 1s2.5.5 2.5.5 1.5.5 2.5-.5-0.5-2-1.5-1c-.7.7-1 1-1 1s-.3-.3-1-1z" fill="currentColor" />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className={`tracking-tight text-stone-900 bg-gradient-to-r from-stone-900 via-pink-900 to-rose-700 bg-clip-text text-transparent ${sizeConfig.title}`}>
            FluffyDoll
          </span>
          <span className={`font-semibold rounded-full bg-pink-100/80 text-pink-700 border border-pink-200/60 ${sizeConfig.badge}`}>
            Game
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[11px] font-medium text-stone-500 tracking-wide">
            Cozy Puzzle · Flutter &amp; Flame
          </span>
        )}
      </div>
    </div>
  );
};
