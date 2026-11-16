import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const IconGooglePlay: React.FC<IconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    width={size} 
    height={size}
    aria-hidden="true"
  >
    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.996 1.996 0 0 1-.61-1.423V3.237c0-.55.228-1.047.609-1.423zm11.235 11.238l2.585-2.585-12.18-7.032 9.595 9.617zm0 1.896l-9.595 9.617 12.18-7.032-2.585-2.585zm1.052-1.052l3.418 1.973c.96.554.96 1.458 0 2.012l-2.482 1.433-2.316-2.316 1.38-3.102z" />
  </svg>
);

export const IconPhysics: React.FC<IconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    width={size} 
    height={size}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="8" />
    <path d="M12 4v4m0 8v4M4 12h4m8 0h4" />
    <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
  </svg>
);

export const IconOffline: React.FC<IconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    width={size} 
    height={size}
    aria-hidden="true"
  >
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="2.5" />
    <line x1="2" y1="2" x2="22" y2="22" strokeWidth="1.75" />
  </svg>
);

export const IconCalm: React.FC<IconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    width={size} 
    height={size}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
    <path d="M7 17a9 9 0 0 1 0-10" strokeDasharray="2 2" />
  </svg>
);

export const IconWardrobe: React.FC<IconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    width={size} 
    height={size}
    aria-hidden="true"
  >
    <path d="M12 3a2 2 0 0 0-2 2c0 .74.4 1.39 1 1.73V8L3 13.5A2 2 0 0 0 2 15v1a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1a2 2 0 0 0-1-1.5L13 8V6.73A2 2 0 0 0 12 3z" />
    <path d="M9 17v4m6-4v4" />
  </svg>
);

export const IconBattery: React.FC<IconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    width={size} 
    height={size}
    aria-hidden="true"
  >
    <rect x="2" y="7" width="16" height="10" rx="2" ry="2" />
    <line x1="22" y1="11" x2="22" y2="13" />
    <line x1="6" y1="11" x2="6" y2="13" />
    <line x1="10" y1="11" x2="10" y2="13" />
    <line x1="14" y1="11" x2="14" y2="13" />
  </svg>
);

export const IconShieldCheck: React.FC<IconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    width={size} 
    height={size}
    aria-hidden="true"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

export const IconStorage: React.FC<IconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    width={size} 
    height={size}
    aria-hidden="true"
  >
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="8" y="4" width="8" height="6" />
    <circle cx="12" cy="15" r="2" />
  </svg>
);

export const IconDeviceAndroid: React.FC<IconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    width={size} 
    height={size}
    aria-hidden="true"
  >
    <rect x="5" y="2" width="14" height="20" rx="3" />
    <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
    <line x1="10" y1="5" x2="14" y2="5" />
  </svg>
);

export const IconSparkle: React.FC<IconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    width={size} 
    height={size}
    aria-hidden="true"
  >
    <path d="M12 3v18M3 12h18M6.5 6.5l11 11M6.5 17.5l11-11" />
  </svg>
);

export const IconYarnBall: React.FC<IconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    width={size} 
    height={size}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="8.5" />
    <path d="M6 8c3 1 7 4 9 9" />
    <path d="M8 6c2 3 4 8 4 12" />
    <path d="M16 6c-1 3-3 8-7 11" />
    <path d="M19 15c2 2 3 3 3 5" />
  </svg>
);

export const IconPetalBloom: React.FC<IconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    width={size} 
    height={size}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 3c-1.5 2-1.5 4 0 6 1.5-2 1.5-4 0-6z" />
    <path d="M12 15c-1.5 2-1.5 4 0 6 1.5-2 1.5-4 0-6z" />
    <path d="M3 12c2-1.5 4-1.5 6 0-2 1.5-4 1.5-6 0z" />
    <path d="M15 12c2-1.5 4-1.5 6 0-2 1.5-4 1.5-6 0z" />
  </svg>
);

export const IconNeedles: React.FC<IconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    width={size} 
    height={size}
    aria-hidden="true"
  >
    <line x1="4" y1="4" x2="20" y2="20" />
    <line x1="20" y1="4" x2="4" y2="20" />
    <circle cx="4" cy="4" r="1.5" fill="currentColor" />
    <circle cx="20" cy="4" r="1.5" fill="currentColor" />
  </svg>
);

export const IconCheck: React.FC<IconProps> = ({ className = 'w-4 h-4', size }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    width={size} 
    height={size}
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const IconArrowRight: React.FC<IconProps> = ({ className = 'w-4 h-4', size }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    width={size} 
    height={size}
    aria-hidden="true"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/* Clean Vector Doll Character Avatars (replacing emojis) */

export const AvatarBunny: React.FC<IconProps> = ({ className = 'w-12 h-12', size }) => (
  <svg 
    viewBox="0 0 48 48" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    width={size} 
    height={size}
    aria-hidden="true"
  >
    {/* Left Ear */}
    <path d="M18 18C15 12 14 6 17 4C20 2 22 8 22 18" fill="currentColor" fillOpacity="0.08" />
    {/* Right Ear */}
    <path d="M30 18C33 12 34 6 31 4C28 2 26 8 26 18" fill="currentColor" fillOpacity="0.08" />
    {/* Head */}
    <circle cx="24" cy="28" r="14" fill="currentColor" fillOpacity="0.06" />
    {/* Eyes */}
    <circle cx="19" cy="26" r="1.5" fill="currentColor" />
    <circle cx="29" cy="26" r="1.5" fill="currentColor" />
    {/* Sweet Nose and Mouth */}
    <path d="M24 29v2M22 32c1 1 3 1 4 0" />
    {/* Soft Cheek Blush Marks */}
    <circle cx="16" cy="30" r="1" fill="currentColor" opacity="0.4" />
    <circle cx="32" cy="30" r="1" fill="currentColor" opacity="0.4" />
  </svg>
);

export const AvatarBear: React.FC<IconProps> = ({ className = 'w-12 h-12', size }) => (
  <svg 
    viewBox="0 0 48 48" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    width={size} 
    height={size}
    aria-hidden="true"
  >
    {/* Left Rounded Ear */}
    <circle cx="14" cy="16" r="6" fill="currentColor" fillOpacity="0.08" />
    <circle cx="14" cy="16" r="3" fill="currentColor" fillOpacity="0.15" />
    {/* Right Rounded Ear */}
    <circle cx="34" cy="16" r="6" fill="currentColor" fillOpacity="0.08" />
    <circle cx="34" cy="16" r="3" fill="currentColor" fillOpacity="0.15" />
    {/* Head */}
    <circle cx="24" cy="28" r="14" fill="currentColor" fillOpacity="0.06" />
    {/* Snout Muzzle */}
    <ellipse cx="24" cy="31" rx="5" ry="4" fill="currentColor" fillOpacity="0.1" />
    {/* Eyes */}
    <circle cx="19" cy="25" r="1.5" fill="currentColor" />
    <circle cx="29" cy="25" r="1.5" fill="currentColor" />
    {/* Nose and Smile */}
    <ellipse cx="24" cy="29.5" rx="2" ry="1.2" fill="currentColor" />
    <path d="M22 33c1 .8 3 .8 4 0" />
  </svg>
);

export const AvatarCat: React.FC<IconProps> = ({ className = 'w-12 h-12', size }) => (
  <svg 
    viewBox="0 0 48 48" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    width={size} 
    height={size}
    aria-hidden="true"
  >
    {/* Pointy Left Ear */}
    <polygon points="12,19 16,7 23,17" fill="currentColor" fillOpacity="0.08" />
    {/* Pointy Right Ear */}
    <polygon points="36,19 32,7 25,17" fill="currentColor" fillOpacity="0.08" />
    {/* Head */}
    <circle cx="24" cy="28" r="14" fill="currentColor" fillOpacity="0.06" />
    {/* Whiskers */}
    <line x1="12" y1="28" x2="16" y2="29" opacity="0.6" />
    <line x1="12" y1="32" x2="16" y2="31" opacity="0.6" />
    <line x1="36" y1="28" x2="32" y2="29" opacity="0.6" />
    <line x1="36" y1="32" x2="32" y2="31" opacity="0.6" />
    {/* Eyes */}
    <circle cx="19" cy="25" r="1.5" fill="currentColor" />
    <circle cx="29" cy="25" r="1.5" fill="currentColor" />
    {/* Nose and Smile */}
    <path d="M23 29h2l-1 1z" fill="currentColor" />
    <path d="M21 31c1.5 1 2 1 3 0 1 1 1.5 1 3 0" />
  </svg>
);

export const AvatarPuppy: React.FC<IconProps> = ({ className = 'w-12 h-12', size }) => (
  <svg 
    viewBox="0 0 48 48" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    width={size} 
    height={size}
    aria-hidden="true"
  >
    {/* Floppy Left Ear */}
    <path d="M15 18C10 21 8 28 11 32C13 35 16 32 16 26" fill="currentColor" fillOpacity="0.12" />
    {/* Floppy Right Ear */}
    <path d="M33 18C38 21 40 28 37 32C35 35 32 32 32 26" fill="currentColor" fillOpacity="0.12" />
    {/* Head */}
    <circle cx="24" cy="27" r="13" fill="currentColor" fillOpacity="0.06" />
    {/* Eye Patch Spot */}
    <circle cx="19" cy="25" r="4.5" fill="currentColor" fillOpacity="0.1" stroke="none" />
    {/* Eyes */}
    <circle cx="19" cy="25" r="1.5" fill="currentColor" />
    <circle cx="29" cy="25" r="1.5" fill="currentColor" />
    {/* Cute Puppy Snout */}
    <ellipse cx="24" cy="29" rx="2" ry="1.5" fill="currentColor" />
    <path d="M22 32c1 1 3 1 4 0" />
  </svg>
);
