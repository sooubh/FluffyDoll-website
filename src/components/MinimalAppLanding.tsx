'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  IconGooglePlay, 
  IconPhysics, 
  IconOffline, 
  IconShieldCheck, 
  AvatarBunny,
  AvatarBear,
  AvatarCat,
  IconCheck,
  IconSparkle
} from './icons/GameIcons';

type CompanionId = 'bunbun' | 'puffbear' | 'mochi';

interface CompanionData {
  id: CompanionId;
  name: string;
  species: string;
  fabric: string;
  elasticity: string;
  avatar: React.FC<{ className?: string }>;
  accentColor: string;
}

const COMPANIONS: Record<CompanionId, CompanionData> = {
  bunbun: {
    id: 'bunbun',
    name: 'BunBun',
    species: 'Lop-Eared Bunny',
    fabric: 'Cashmere Felt',
    elasticity: '94% Spring',
    avatar: AvatarBunny,
    accentColor: '#DDA74F',
  },
  puffbear: {
    id: 'puffbear',
    name: 'PuffBear',
    species: 'Honey Sherpa Bear',
    fabric: 'Dense Fleece Fill',
    elasticity: '82% Cushion',
    avatar: AvatarBear,
    accentColor: '#A26E43',
  },
  mochi: {
    id: 'mochi',
    name: 'Mochi',
    species: 'Calico Cat',
    fabric: 'Silky Velvet',
    elasticity: '98% Fluid',
    avatar: AvatarCat,
    accentColor: '#C48B5E',
  },
};

export const MinimalAppLanding: React.FC = () => {
  // Active companion in phone simulator
  const [selectedCompanion, setSelectedCompanion] = useState<CompanionId>('bunbun');
  
  // Interactive tactile physics simulator states
  const [squishState, setSquishState] = useState<'idle' | 'squished' | 'stretched' | 'bouncing'>('idle');
  const [squishCount, setSquishCount] = useState(0);
  const [showQrModal, setShowQrModal] = useState(false);

  const activeDoll = COMPANIONS[selectedCompanion];
  const ActiveAvatar = activeDoll.avatar;

  const handleSquish = () => {
    setSquishState('squished');
    setSquishCount(prev => prev + 1);
    setTimeout(() => {
      setSquishState('stretched');
      setTimeout(() => setSquishState('idle'), 250);
    }, 180);
  };

  const handleStretch = () => {
    setSquishState('stretched');
    setSquishCount(prev => prev + 1);
    setTimeout(() => {
      setSquishState('squished');
      setTimeout(() => setSquishState('idle'), 250);
    }, 180);
  };

  const handleBounce = () => {
    setSquishState('bouncing');
    setSquishCount(prev => prev + 1);
    setTimeout(() => setSquishState('idle'), 600);
  };

  const handleReset = () => {
    setSquishState('idle');
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#1C1C1B] font-sans antialiased selection:bg-[#F3E8D8] selection:text-[#1C1C1B] flex flex-col justify-between">
      
      {/* Minimal Sticky Top Navigation */}
      <header className="sticky top-0 z-50 w-full bg-[#FBFBFA]/85 backdrop-blur-md border-b border-[#EBEAE5] transition-all">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          {/* Brand Mark */}
          <Link 
            href="/" 
            className="flex items-center gap-2.5 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-stone-400 rounded-xl"
          >
            {/* Squircle Brand Glyph */}
            <div className="w-8 h-8 rounded-xl bg-[#1C1C1B] text-white flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-4 h-4 text-[#FBFBFA]">
                <circle cx="12" cy="12" r="8" />
                <path d="M9 10h.01M15 10h.01M9.5 15a3.5 3.5 0 0 0 5 0" strokeLinecap="round" />
              </svg>
            </div>
            <span className="font-semibold text-base sm:text-lg tracking-tight text-[#1C1C1B]">
              FluffyDoll
            </span>
          </Link>

          {/* Navigation & Action Links */}
          <nav className="flex items-center gap-3 sm:gap-6">
            <a 
              href="#highlights" 
              className="hidden sm:inline-block text-xs sm:text-sm font-medium text-[#6B6A66] hover:text-[#1C1C1B] transition-colors"
            >
              Highlights
            </a>
            
            <Link 
              href="/privacy-policy" 
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#6B6A66] hover:text-[#1C1C1B] transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
              <span>Privacy Policy</span>
            </Link>

            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#1C1C1B] hover:bg-black text-white text-xs font-medium shadow-2xs transition-all active:scale-95"
            >
              <IconGooglePlay className="w-3.5 h-3.5 fill-current text-[#DDA74F]" />
              <span>Google Play</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Main Single-Screen Hero Showcase */}
      <main className="flex-grow flex flex-col items-center justify-center pt-8 pb-16 sm:pt-14 sm:pb-20 px-4 sm:px-6 max-w-5xl mx-auto w-full">
        
        {/* App Identity Section */}
        <section className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-4">
          
          {/* Premium Squircle App Icon */}
          <div className="relative group">
            <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-3xl bg-white p-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#EBEAE5] transition-transform duration-300 ease-out group-hover:scale-105">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#1C1C1B] to-[#2B2A28] flex items-center justify-center shadow-inner">
                <AvatarBunny className="w-10 h-10 sm:w-11 sm:h-11 text-white" />
              </div>
            </div>
            {/* Subtle verification badge */}
            <div className="absolute -bottom-1 -right-1 bg-emerald-600 text-white rounded-full p-1 shadow-xs border-2 border-[#FBFBFA]" title="Verified Safe Offline App">
              <IconCheck className="w-2.5 h-2.5" />
            </div>
          </div>

          {/* Title & Taglines */}
          <div className="space-y-1.5 pt-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1C1C1B]">
              FluffyDoll
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#805600] font-medium tracking-tight">
              Tactile soft-body plush physics for Android
            </p>
          </div>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-[#6B6A66] max-w-md leading-relaxed">
            An offline digital plushie crafted for calm, tactile fidgeting and gentle physical simulation. Zero ad interruptions, zero stressful timers.
          </p>

          {/* Primary Action Button Cluster */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#1C1C1B] hover:bg-black text-white text-xs sm:text-sm font-medium tracking-wide shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <IconGooglePlay className="w-4 h-4 fill-current text-[#DDA74F]" />
              <span>Get on Google Play</span>
            </a>

            {/* Quick Install QR Code Modal Toggle */}
            <button
              type="button"
              onClick={() => setShowQrModal(!showQrModal)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white hover:bg-[#F5F4EF] text-[#6B6A66] hover:text-[#1C1C1B] border border-[#EBEAE5] text-xs font-medium transition-all shadow-2xs"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <path d="M14 14h3v3h-3zM18 18h3v3h-3zM14 18h2v3h-2z" />
              </svg>
              <span>{showQrModal ? 'Hide QR' : 'Scan to Install'}</span>
            </button>
          </div>

          {/* QR Code Popover Card */}
          {showQrModal && (
            <div className="mt-3 p-4 bg-white rounded-2xl border border-[#EBEAE5] shadow-lg flex flex-col items-center gap-2 animate-in fade-in zoom-in-95 duration-150">
              <div className="w-32 h-32 bg-[#FAF9F6] p-2 rounded-xl border border-[#EBEAE5] flex items-center justify-center">
                {/* Clean Vector QR Code Representation */}
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#1C1C1B] fill-current">
                  {/* Top-left corner box */}
                  <rect x="10" y="10" width="24" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="18" y="18" width="8" height="8" rx="1" />
                  {/* Top-right corner box */}
                  <rect x="66" y="10" width="24" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="74" y="18" width="8" height="8" rx="1" />
                  {/* Bottom-left corner box */}
                  <rect x="10" y="66" width="24" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="18" y="74" width="8" height="8" rx="1" />
                  {/* Data patterns */}
                  <rect x="42" y="14" width="6" height="6" />
                  <rect x="52" y="14" width="6" height="14" />
                  <rect x="42" y="26" width="6" height="6" />
                  <rect x="14" y="44" width="14" height="6" />
                  <rect x="34" y="44" width="10" height="10" />
                  <rect x="50" y="40" width="6" height="8" />
                  <rect x="62" y="44" width="12" height="6" />
                  <rect x="80" y="44" width="6" height="12" />
                  <rect x="42" y="60" width="8" height="6" />
                  <rect x="56" y="56" width="6" height="14" />
                  <rect x="68" y="60" width="8" height="8" />
                  <rect x="44" y="74" width="6" height="12" />
                  <rect x="56" y="76" width="14" height="6" />
                  <rect x="76" y="76" width="10" height="10" />
                </svg>
              </div>
              <p className="text-[11px] font-medium text-[#6B6A66]">
                Point camera at QR code to open Google Play
              </p>
            </div>
          )}

          {/* Reassuring Trust & Hardware Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-[11px] text-[#827565]">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#F5F4EF] border border-[#EBEAE5]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Android 8.0+ Ready</span>
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#F5F4EF] border border-[#EBEAE5]">&lt; 40 MB</span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#F5F4EF] border border-[#EBEAE5]">100% Offline</span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#F5F4EF] border border-[#EBEAE5]">Flame 2D Physics</span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#F5F4EF] border border-[#EBEAE5]">
              <IconShieldCheck className="w-3 h-3 text-emerald-600" />
              <span>Data Safety Verified</span>
            </span>
          </div>
        </section>

        {/* Sleek Centered Android Smartphone Mockup */}
        <section className="mt-10 sm:mt-14 w-full flex flex-col items-center">
          <div className="relative max-w-[320px] sm:max-w-[360px] w-full">
            
            {/* Subtle Physics Touch Ripples */}
            <div className="absolute top-[44%] left-[26%] w-16 h-16 rounded-full border border-[#DDA74F]/25 pointer-events-none animate-ping opacity-60 z-20" />
            <div className="absolute top-[44%] left-[26%] w-2 h-2 rounded-full bg-[#DDA74F]/40 pointer-events-none z-20 -translate-x-1/2 -translate-y-1/2" />

            {/* Android Device Bezel Frame */}
            <div className="relative bg-[#1C1C1B] p-3 sm:p-3.5 rounded-[44px] shadow-[0_28px_60px_-15px_rgba(28,28,27,0.22)] border border-[#E0DDD7] ring-1 ring-white/10">
              
              {/* Minimal Ear-piece Punch Hole Camera */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-[#0D0D0D] rounded-full z-30 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]" />
              </div>

              {/* Inner Smartphone Screen */}
              <div className="relative bg-gradient-to-b from-[#FFFDFB] to-[#FAF8F5] rounded-[36px] overflow-hidden aspect-[9/18] flex flex-col justify-between border border-black/5 select-none shadow-inner">
                
                {/* Android System Status Bar */}
                <div className="pt-2 px-5 flex justify-between items-center text-[10px] text-[#6B6A66] font-medium z-20">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5 text-[9px]">
                    <span className="font-mono">Offline</span>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5">
                      <rect x="2" y="7" width="18" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                      <rect x="4" y="9" width="12" height="6" rx="1" />
                      <path d="M21 11v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {/* In-Game Top HUD: Companion Switcher Tabs */}
                <div className="pt-3 px-3 z-10">
                  <div className="bg-white/85 backdrop-blur-xs rounded-2xl p-1 border border-[#EBEAE5] shadow-2xs flex items-center justify-between">
                    {(Object.keys(COMPANIONS) as CompanionId[]).map((cid) => {
                      const comp = COMPANIONS[cid];
                      const isSelected = selectedCompanion === cid;
                      return (
                        <button
                          key={cid}
                          type="button"
                          onClick={() => {
                            setSelectedCompanion(cid);
                            setSquishState('bouncing');
                            setTimeout(() => setSquishState('idle'), 400);
                          }}
                          className={`flex-1 py-1.5 px-2 rounded-xl text-[11px] font-medium transition-all ${
                            isSelected 
                              ? 'bg-[#1C1C1B] text-white shadow-2xs font-semibold' 
                              : 'text-[#6B6A66] hover:text-[#1C1C1B]'
                          }`}
                        >
                          {comp.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Center Plush Interactive Viewport */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <div 
                    onClick={handleSquish}
                    className="relative cursor-pointer transition-transform duration-200 ease-out group"
                    title="Click to squish the plushie!"
                  >
                    {/* Plush Character Container with Spring Physics Transforms */}
                    <div className={`p-8 sm:p-9 rounded-full bg-white/80 border border-[#EBEAE5] shadow-[0_16px_32px_-10px_rgba(60,50,40,0.08)] transition-all duration-200 ${
                      squishState === 'squished' ? 'scale-x-125 scale-y-75 translate-y-2' :
                      squishState === 'stretched' ? 'scale-x-85 scale-y-120 -translate-y-2' :
                      squishState === 'bouncing' ? 'animate-bounce' :
                      'group-hover:scale-105'
                    }`}>
                      <ActiveAvatar className="w-24 h-24 sm:w-28 sm:h-28 text-[#1C1C1B]" />
                    </div>

                    {/* Plush Shadow beneath character */}
                    <div className={`w-20 h-3 mx-auto bg-stone-300/50 rounded-full blur-xs mt-2 transition-all duration-200 ${
                      squishState === 'squished' ? 'scale-x-130 opacity-80' :
                      squishState === 'stretched' ? 'scale-x-70 opacity-40' :
                      'opacity-60'
                    }`} />
                  </div>

                  {/* Character Specs & Squeeze Counter */}
                  <div className="mt-4 flex flex-col items-center gap-0.5 text-center">
                    <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1C1C1B]">
                      <span>{activeDoll.name}</span>
                      <span className="text-[#827565] font-normal">· {activeDoll.fabric}</span>
                    </div>
                    <p className="text-[10px] text-[#827565]">
                      Elasticity: {activeDoll.elasticity} · Squeezes: {squishCount}
                    </p>
                  </div>
                </div>

                {/* Bottom In-Game Tactile Physics Shelf */}
                <div className="pb-5 px-3.5 z-10">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2 border border-[#EBEAE5] shadow-xs flex items-center justify-around">
                    
                    {/* Reset Button */}
                    <button
                      type="button"
                      onClick={handleReset}
                      className="flex flex-col items-center gap-1 text-[#6B6A66] hover:text-[#1C1C1B] transition-colors p-1"
                      title="Reset shape"
                    >
                      <div className="w-8 h-8 rounded-xl bg-[#F5F4EF] flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                          <path d="M3 3v5h5" />
                        </svg>
                      </div>
                      <span className="text-[10px] font-medium">Reset</span>
                    </button>

                    {/* Squish Button */}
                    <button
                      type="button"
                      onClick={handleSquish}
                      className="flex flex-col items-center gap-1 text-[#805600] font-medium p-1"
                      title="Squish character"
                    >
                      <div className="w-8 h-8 rounded-xl bg-[#DDA74F] text-white flex items-center justify-center shadow-2xs active:scale-90 transition-transform">
                        <IconPhysics className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-[10px] font-semibold text-[#805600]">Squish</span>
                    </button>

                    {/* Stretch Button */}
                    <button
                      type="button"
                      onClick={handleStretch}
                      className="flex flex-col items-center gap-1 text-[#6B6A66] hover:text-[#1C1C1B] transition-colors p-1"
                      title="Stretch character"
                    >
                      <div className="w-8 h-8 rounded-xl bg-[#F5F4EF] flex items-center justify-center active:scale-90 transition-transform">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                          <path d="M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4" />
                        </svg>
                      </div>
                      <span className="text-[10px] font-medium">Stretch</span>
                    </button>

                    {/* Bounce Button */}
                    <button
                      type="button"
                      onClick={handleBounce}
                      className="flex flex-col items-center gap-1 text-[#6B6A66] hover:text-[#1C1C1B] transition-colors p-1"
                      title="Bounce character"
                    >
                      <div className="w-8 h-8 rounded-xl bg-[#F5F4EF] flex items-center justify-center active:scale-90 transition-transform">
                        <IconSparkle className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[10px] font-medium">Bounce</span>
                    </button>

                  </div>
                </div>

              </div>
            </div>

            {/* Subtle Floor Contact Shadow */}
            <div className="w-[85%] h-5 mx-auto bg-[#31302F]/10 rounded-full blur-md -mt-2" />
          </div>
        </section>

        {/* Three Concise Feature Pillars */}
        <section className="mt-16 sm:mt-24 w-full max-w-4xl mx-auto" id="highlights">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            
            {/* Feature 1: Tactile Physics */}
            <div className="bg-[#F5F4EF] p-5 sm:p-6 rounded-2xl border border-[#EBEAE5] shadow-[0_4px_16px_-2px_rgba(60,50,40,0.03)] flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="w-9 h-9 rounded-xl bg-white border border-[#EBEAE5] flex items-center justify-center text-[#805600] shadow-2xs">
                  <IconPhysics className="w-4.5 h-4.5" />
                </div>
                <h2 className="text-base font-semibold text-[#1C1C1B]">
                  Tactile Physics
                </h2>
                <p className="text-xs sm:text-sm text-[#6B6A66] leading-relaxed">
                  Built with the Flame 2D engine for elastic, satisfying soft-body ragdoll deformation and fluid collisions.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-[#EAE7DF] text-[#6B6A66] text-[11px] font-medium">Flame 2D</span>
                <span className="px-2 py-0.5 rounded-full bg-[#EAE7DF] text-[#6B6A66] text-[11px] font-medium">Soft-Body</span>
              </div>
            </div>

            {/* Feature 2: 100% Offline */}
            <div className="bg-[#F5F4EF] p-5 sm:p-6 rounded-2xl border border-[#EBEAE5] shadow-[0_4px_16px_-2px_rgba(60,50,40,0.03)] flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="w-9 h-9 rounded-xl bg-white border border-[#EBEAE5] flex items-center justify-center text-[#805600] shadow-2xs">
                  <IconOffline className="w-4.5 h-4.5" />
                </div>
                <h2 className="text-base font-semibold text-[#1C1C1B]">
                  100% Offline
                </h2>
                <p className="text-xs sm:text-sm text-[#6B6A66] leading-relaxed">
                  No internet connection required. No sign-in, no accounts, and no background network calls.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-[#EAE7DF] text-[#6B6A66] text-[11px] font-medium">Zero Logins</span>
                <span className="px-2 py-0.5 rounded-full bg-[#EAE7DF] text-[#6B6A66] text-[11px] font-medium">Airplane Ready</span>
              </div>
            </div>

            {/* Feature 3: Lightweight & Safe */}
            <div className="bg-[#F5F4EF] p-5 sm:p-6 rounded-2xl border border-[#EBEAE5] shadow-[0_4px_16px_-2px_rgba(60,50,40,0.03)] flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="w-9 h-9 rounded-xl bg-white border border-[#EBEAE5] flex items-center justify-center text-[#805600] shadow-2xs">
                  <IconShieldCheck className="w-4.5 h-4.5" />
                </div>
                <h2 className="text-base font-semibold text-[#1C1C1B]">
                  Lightweight &amp; Safe
                </h2>
                <p className="text-xs sm:text-sm text-[#6B6A66] leading-relaxed">
                  Under 40MB download package. Zero telemetry, zero analytics, zero personal data collection.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-[#EAE7DF] text-[#6B6A66] text-[11px] font-medium">&lt; 40 MB</span>
                <span className="px-2 py-0.5 rounded-full bg-[#EAE7DF] text-[#6B6A66] text-[11px] font-medium">Privacy First</span>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Minimal Clean Footer */}
      <footer className="w-full bg-[#F5F4EF] border-t border-[#EBEAE5] text-xs text-[#6B6A66]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Developer Attribution & Notice */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <span className="font-medium text-[#1C1C1B]">
              Crafted with care by Sourabh Singh (Sooubh)
            </span>
            <span className="hidden sm:inline text-[#D4C4B2]">•</span>
            <span className="text-[#827565]">
              &copy; 2026 FluffyDoll. All rights reserved.
            </span>
          </div>

          {/* Legal and Download Links */}
          <div className="flex items-center gap-5">
            <Link 
              href="/privacy-policy" 
              className="text-[#6B6A66] hover:text-[#1C1C1B] font-medium transition-colors underline decoration-[#EBEAE5] underline-offset-4"
            >
              Privacy Policy
            </Link>
            <a 
              href="https://play.google.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#6B6A66] hover:text-[#1C1C1B] transition-colors"
            >
              Google Play
            </a>
          </div>

        </div>
      </footer>

    </div>
  );
};
