import React from 'react';
import { PolicySectionItem } from '../data/policyData';

interface SectionCardProps {
  section: PolicySectionItem;
}

export const PolicySectionCard: React.FC<SectionCardProps> = ({ section }) => {
  const renderFormattedText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\)|\[ACTION REQUIRED:.*?\])/g);

    return (
      <>
        {parts.map((part, index) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return (
              <strong key={index} className="font-semibold text-stone-900">
                {part.slice(2, -2)}
              </strong>
            );
          }
          if (part.startsWith('[ACTION REQUIRED:') && part.endsWith(']')) {
            return (
              <span
                key={index}
                className="bg-amber-50 text-amber-900 border border-amber-300 font-mono text-xs px-1.5 py-0.5 rounded select-all"
                title="Action required by developer before Google Play publication"
              >
                {part}
              </span>
            );
          }
          if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
            const match = part.match(/\[(.*?)\]\((.*?)\)/);
            if (match) {
              return (
                <a
                  key={index}
                  href={match[2]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-900 underline hover:text-pink-700 font-medium"
                >
                  {match[1]}
                </a>
              );
            }
          }
          return part;
        })}
      </>
    );
  };

  return (
    <section 
      id={section.id} 
      className="scroll-mt-16 py-7 border-b border-stone-200/70 last:border-b-0 print-section"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight mb-4">
        {section.number}. {section.title}
      </h2>

      {section.actionRequired && (
        <div className="mb-4 p-3 bg-amber-50/80 border border-amber-200 rounded-lg text-xs text-amber-900 leading-relaxed no-print">
          <strong className="font-semibold text-amber-950">Developer Action Item:</strong> {section.actionRequired}
        </div>
      )}

      <div className="space-y-3.5 text-stone-700 text-sm sm:text-base leading-relaxed">
        {section.content.map((paragraph, idx) => (
          <p key={idx} className="leading-relaxed">
            {renderFormattedText(paragraph)}
          </p>
        ))}
      </div>

      {section.subsections && section.subsections.length > 0 && (
        <div className="mt-5 space-y-5 pl-0 sm:pl-2">
          {section.subsections.map((sub, sIdx) => (
            <div key={sIdx} className="space-y-2">
              <h3 className="text-base font-semibold text-stone-900">
                {sub.title}
              </h3>
              
              {sub.actionRequired && (
                <p className="text-xs text-amber-800 bg-amber-50/60 p-2 rounded border border-amber-200/70 no-print">
                  <strong>Notice:</strong> {sub.actionRequired}
                </p>
              )}

              <div className="space-y-2 text-stone-700 text-sm sm:text-base leading-relaxed">
                {sub.content.map((subP, pIdx) => (
                  <p key={pIdx}>
                    {renderFormattedText(subP)}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
