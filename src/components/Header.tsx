'use client';

import React from 'react';
import { FluffyDollLogo } from './FluffyDollLogo';

export const Header: React.FC = () => {
  return (
    <header className="border-b border-stone-200/80 bg-white/80 backdrop-blur-xs py-3.5 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        <a href="#top" className="hover:opacity-80 transition-opacity">
          <FluffyDollLogo size="sm" />
        </a>

        <div className="flex items-center gap-4 text-xs text-stone-500">
          <span className="hidden sm:inline">Android Casual Puzzle Game</span>
          <button 
            type="button"
            onClick={() => window.print()}
            className="no-print text-stone-600 hover:text-stone-900 underline font-medium cursor-pointer"
            title="Print or export Privacy Policy to PDF"
          >
            Print
          </button>
        </div>
      </div>
    </header>
  );
};
