import React from 'react';
import { POLICY_SECTIONS } from '../data/policyData';

export const TableOfContents: React.FC = () => {
  return (
    <nav 
      aria-label="Table of contents" 
      className="my-8 p-5 sm:p-6 bg-[#FBFBFA] rounded-2xl border border-zinc-200/80 text-xs sm:text-sm no-print shadow-2xs"
    >
      <div className="flex items-center justify-between mb-3.5">
        <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-900">
          Table of Contents (15 Sections)
        </h2>
        <span className="text-[11px] font-mono text-zinc-500">Quick Navigation</span>
      </div>

      <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 list-none m-0 p-0 text-zinc-600">
        {POLICY_SECTIONS.map((sec) => (
          <li key={sec.id}>
            <a 
              href={`#${sec.id}`}
              className="hover:text-zinc-950 hover:underline transition-colors block py-0.5 truncate text-zinc-700 font-medium"
            >
              {sec.shortTitle}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};
