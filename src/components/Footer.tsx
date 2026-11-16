import React from 'react';
import { POLICY_METADATA } from '../data/policyData';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-stone-200 py-8 text-xs text-stone-500 no-print">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-0">
        <div>
          <p className="font-medium text-stone-700">
            &copy; 2026 FluffyDoll · {POLICY_METADATA.developerName}.
          </p>
          <p className="text-[11px] text-stone-400 mt-0.5">
            Effective: {POLICY_METADATA.effectiveDate} · Last Updated: {POLICY_METADATA.lastUpdated}
          </p>
        </div>

        <a 
          href="#top" 
          className="text-stone-600 hover:text-pink-600 underline transition-colors"
        >
          Back to Top &uarr;
        </a>
      </div>
    </footer>
  );
};
