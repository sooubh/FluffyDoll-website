import React from 'react';
import { POLICY_SECTIONS } from '../data/policyData';

export const TableOfContents: React.FC = () => {
  return (
    <nav 
      aria-label="Table of contents" 
      className="my-8 p-5 bg-stone-50/80 rounded-xl border border-stone-200 text-xs sm:text-sm no-print"
    >
      <h2 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-3">
        Table of Contents
      </h2>
      <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 list-none m-0 p-0 text-stone-600">
        {POLICY_SECTIONS.map((sec) => (
          <li key={sec.id}>
            <a 
              href={`#${sec.id}`}
              className="hover:text-pink-700 hover:underline transition-colors block py-0.5 truncate"
            >
              {sec.shortTitle}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};
