import React from 'react';
import Link from 'next/link';
import { FluffyDollLogo } from './FluffyDollLogo';

export const GameFooter: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-800 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <FluffyDollLogo size="md" showSubtitle={false} className="text-white brightness-125" />
            
            <p className="text-zinc-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              A calm casual 2D puzzle game built with Flutter &amp; Flame Engine for Android. Tactile soft-body physics with zero stressful timers.
            </p>

            <div className="pt-2 text-zinc-500 font-mono text-[11px]">
              Engineered by Sourabh Singh (Sooubh) · Nashik, Maharashtra, India
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-200">
              Game
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#dolls" className="hover:text-white transition-colors">
                  Companions
                </a>
              </li>
              <li>
                <a href="#gameplay" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#specs" className="hover:text-white transition-colors">
                  Device Standards
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-200">
              Compliance &amp; Legal
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link 
                  href="/privacy-policy" 
                  className="inline-flex items-center gap-2 text-zinc-200 hover:text-white transition-colors font-medium"
                >
                  <span>Official Privacy Policy</span>
                  <span className="text-[10px] bg-zinc-800 text-zinc-300 px-1.5 py-0.5 rounded border border-zinc-700">
                    Google Play
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy-policy#section-15" 
                  className="hover:text-white transition-colors"
                >
                  Contact &amp; Grievance Redressal
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy-policy#section-2-8" 
                  className="hover:text-white transition-colors"
                >
                  Data Collection Summary Table
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy-policy#section-10" 
                  className="hover:text-white transition-colors"
                >
                  Audience &amp; Minors (13+)
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy-policy#section-8" 
                  className="hover:text-white transition-colors"
                >
                  Choices &amp; Player Controls
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits & Legal Notice */}
        <div className="mt-14 pt-8 border-t border-zinc-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500">
          <p>
            &copy; 2026 FluffyDoll. Developed by Sourabh Singh (Sooubh). Built with Flutter &amp; Flame Engine for Android.
          </p>
          <p className="text-[11px] text-zinc-500 text-center sm:text-right">
            Google Play and the Google Play logo are trademarks of Google LLC.
          </p>
        </div>

      </div>
    </footer>
  );
};
