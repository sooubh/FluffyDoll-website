import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md';
}

export const FluffyDollLogo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md' 
}) => {
  const isSm = size === 'sm';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Subtle doll icon */}
      <div className={`flex items-center justify-center rounded-lg bg-pink-50 border border-pink-200 text-pink-600 ${isSm ? 'w-7 h-7' : 'w-8 h-8'}`}>
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.8" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className={isSm ? 'w-4 h-4' : 'w-4.5 h-4.5'}
          aria-hidden="true"
        >
          {/* Subtle plush doll silhouette */}
          <circle cx="12" cy="12" r="8" />
          <circle cx="9" cy="10" r="0.8" fill="currentColor" />
          <circle cx="15" cy="10" r="0.8" fill="currentColor" />
          <path d="M10 14c.8.8 2.2.8 3 0" />
          <path d="M7 6a2 2 0 0 1 2-2" />
          <path d="M17 6a2 2 0 0 0-2-2" />
        </svg>
      </div>

      <div className="flex items-baseline gap-2">
        <span className={`font-bold tracking-tight text-stone-900 ${isSm ? 'text-sm' : 'text-base'}`}>
          FluffyDoll
        </span>
        <span className="text-xs text-stone-400">
          Android
        </span>
      </div>
    </div>
  );
};

