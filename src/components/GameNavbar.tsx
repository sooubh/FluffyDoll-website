'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FluffyDollLogo } from './FluffyDollLogo';
import { IconGooglePlay } from './icons/GameIcons';

export const GameNavbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-zinc-200/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="hover:opacity-90 transition-opacity focus:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 rounded-lg"
        >
          <FluffyDollLogo size="md" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-600">
          <a href="#features" className="hover:text-zinc-950 transition-colors">
            Features
          </a>
          <a href="#dolls" className="hover:text-zinc-950 transition-colors">
            Companions
          </a>
          <a href="#gameplay" className="hover:text-zinc-950 transition-colors">
            How It Works
          </a>
          <a href="#specs" className="hover:text-zinc-950 transition-colors">
            Standards
          </a>
          <a href="#faq" className="hover:text-zinc-950 transition-colors">
            FAQ
          </a>
          <Link 
            href="/privacy-policy" 
            className="flex items-center gap-1.5 text-zinc-600 hover:text-zinc-950 transition-colors text-xs bg-zinc-100 hover:bg-zinc-200/70 px-3 py-1.5 rounded-full font-medium border border-zinc-200/70"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            Privacy Policy
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-xs shadow-2xs transition-all active:scale-95"
          >
            <IconGooglePlay className="w-3.5 h-3.5 fill-current text-white" />
            <span>Get on Android</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-white px-5 py-4 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-1.5 text-sm font-medium text-zinc-700">
            <a 
              href="#features" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-zinc-100 hover:text-zinc-950 transition-colors"
            >
              Features
            </a>
            <a 
              href="#dolls" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-zinc-100 hover:text-zinc-950 transition-colors"
            >
              Companions
            </a>
            <a 
              href="#gameplay" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-zinc-100 hover:text-zinc-950 transition-colors"
            >
              How It Works
            </a>
            <a 
              href="#specs" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-zinc-100 hover:text-zinc-950 transition-colors"
            >
              Standards
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-zinc-100 hover:text-zinc-950 transition-colors"
            >
              Frequently Asked Questions
            </a>
            <Link 
              href="/privacy-policy" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs flex items-center justify-between"
            >
              <span>Legal Privacy Policy</span>
              <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">Google Play</span>
            </Link>
          </nav>

          <div className="pt-2">
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-900 text-white font-medium text-xs shadow-xs"
            >
              <IconGooglePlay className="w-4 h-4 fill-current text-white" />
              <span>Get on Google Play</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
