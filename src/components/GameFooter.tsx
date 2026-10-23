import React from 'react';
import Link from 'next/link';
import { FluffyDollLogo } from './FluffyDollLogo';

export const GameFooter: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <FluffyDollLogo size="md" className="[&_span]:text-white" />
            </Link>
            <p className="text-sm text-stone-400 max-w-sm leading-relaxed">
              FluffyDoll is a delightful casual mobile puzzle game built with Google Flutter and the Flame 2D game engine. Squish, match, and relax with adorable plush companions.
            </p>
            <div className="flex items-center gap-2 text-xs text-stone-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Available for Android · Google Play</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Game
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-pink-400 transition-colors">
                  Key Features
                </a>
              </li>
              <li>
                <a href="#dolls" className="hover:text-pink-400 transition-colors">
                  Meet the Dolls
                </a>
              </li>
              <li>
                <a href="#gameplay" className="hover:text-pink-400 transition-colors">
                  Gameplay &amp; Boosters
                </a>
              </li>
              <li>
                <a href="#specs" className="hover:text-pink-400 transition-colors">
                  Android Specs
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-pink-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Compliance &amp; Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/privacy-policy" 
                  className="inline-flex items-center gap-1.5 text-pink-300 hover:text-pink-200 font-semibold transition-colors"
                >
                  <span>Official Privacy Policy</span>
                  <span className="text-[10px] bg-pink-500/20 text-pink-300 px-1.5 py-0.5 rounded border border-pink-400/30">
                    Google Play
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy-policy#contact-and-deletion" 
                  className="hover:text-pink-400 transition-colors"
                >
                  Contact &amp; Data Deletion Requests
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy-policy#section-16" 
                  className="hover:text-pink-400 transition-colors"
                >
                  Google Play Data Safety Table
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy-policy#section-8" 
                  className="hover:text-pink-400 transition-colors"
                >
                  Children&apos;s Online Privacy (COPPA)
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            &copy; 2026 FluffyDoll. Built with Flutter &amp; Flame Engine for Android.
          </p>
          <p className="text-[11px] text-stone-500 text-center sm:text-right">
            Google Play and the Google Play logo are trademarks of Google LLC.
          </p>
        </div>

      </div>
    </footer>
  );
};
