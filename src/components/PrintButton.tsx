'use client';

import React from 'react';

interface PrintButtonProps {
  className?: string;
}

export const PrintButton: React.FC<PrintButtonProps> = ({ 
  className = 'no-print text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 px-3 py-1.5 rounded-lg font-semibold cursor-pointer transition-colors text-xs' 
}) => {
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== 'undefined') {
          window.print();
        }
      }}
      className={className}
      title="Print or export Privacy Policy to PDF"
    >
      Print / Save PDF
    </button>
  );
};
