'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FluffyDollLogo } from './FluffyDollLogo';

export const GameNavbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-pink-100/80 shadow-xs transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="hover:opacity-90 transition-opacity focus:outline-hidden focus-visible:ring-2 focus-visible:ring-pink-500 rounded-xl"
        >
          <FluffyDollLogo size="md" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
          <a href="#features" className="hover:text-pink-600 transition-colors">
            Features
          </a>
          <a href="#dolls" className="hover:text-pink-600 transition-colors">
            Meet the Dolls
          </a>
          <a href="#gameplay" className="hover:text-pink-600 transition-colors">
            Gameplay
          </a>
          <a href="#specs" className="hover:text-pink-600 transition-colors">
            Specs
          </a>
          <a href="#faq" className="hover:text-pink-600 transition-colors">
            FAQ
          </a>
          <Link 
            href="/privacy-policy" 
            className="flex items-center gap-1.5 text-stone-500 hover:text-stone-900 transition-colors text-xs bg-stone-100 hover:bg-stone-200/80 px-2.5 py-1 rounded-full font-medium"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            Privacy Policy
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold text-xs shadow-md shadow-pink-200 hover:shadow-lg hover:shadow-pink-300 transition-all active:scale-95"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a1.996 1.996 0 0 1-.61-1.423V3.237c0-.55.228-1.047.609-1.423zm11.235 11.238l2.585-2.585-12.18-7.032 9.595 9.617zm0 1.896l-9.595 9.617 12.18-7.032-2.585-2.585zm1.052-1.052l3.418 1.973c.96.554.96 1.458 0 2.012l-2.482 1.433-2.316-2.316 1.38-3.102z" />
            </svg>
            Play on Android
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-stone-600 hover:text-stone-900 hover:bg-pink-50 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-pink-500"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-pink-100 bg-white/95 backdrop-blur-md px-5 py-5 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2.5 text-base font-medium text-stone-700">
            <a 
              href="#features" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-pink-50 hover:text-pink-600 transition-colors"
            >
              Features
            </a>
            <a 
              href="#dolls" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-pink-50 hover:text-pink-600 transition-colors"
            >
              Meet the Dolls
            </a>
            <a 
              href="#gameplay" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-pink-50 hover:text-pink-600 transition-colors"
            >
              Gameplay &amp; Boosters
            </a>
            <a 
              href="#specs" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-pink-50 hover:text-pink-600 transition-colors"
            >
              Android Specs
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-pink-50 hover:text-pink-600 transition-colors"
            >
              Frequently Asked Questions
            </a>
            <Link 
              href="/privacy-policy" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-sm flex items-center justify-between"
            >
              <span>Legal Privacy Policy</span>
              <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">Google Play</span>
            </Link>
          </nav>

          <div className="pt-2">
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-sm shadow-md"
            >
              Get FluffyDoll on Android
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
