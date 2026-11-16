import React from 'react';
import { PolicySectionItem, PolicyTable } from '../data/policyData';

interface SectionCardProps {
  section: PolicySectionItem;
}

export const PolicySectionCard: React.FC<SectionCardProps> = ({ section }) => {
  const renderFormattedText = (text: string) => {
    // Regex splits markdown bold, markdown link, inline code, standalone URLs, and emails
    const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\)|\`.*?\`|https?:\/\/[^\s)]+|[\w.-]+@[\w.-]+\.\w+)/g);

    return (
      <>
        {parts.map((part, index) => {
          if (!part) return null;

          if (part.startsWith('**') && part.endsWith('**')) {
            return (
              <strong key={index} className="font-semibold text-stone-900">
                {part.slice(2, -2)}
              </strong>
            );
          }

          if (part.startsWith('`') && part.endsWith('`')) {
            return (
              <code
                key={index}
                className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200/80 font-mono text-xs text-stone-800"
              >
                {part.slice(1, -1)}
              </code>
            );
          }

          if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
            const match = part.match(/\[(.*?)\]\((.*?)\)/);
            if (match) {
              const [, label, href] = match;
              return (
                <a
                  key={index}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="text-zinc-950 underline font-medium hover:text-zinc-700 transition-colors"
                >
                  {label}
                </a>
              );
            }
          }

          if (part.startsWith('http://') || part.startsWith('https://')) {
            return (
              <a
                key={index}
                href={part}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-950 underline font-medium hover:text-zinc-700 break-all transition-colors"
              >
                {part}
              </a>
            );
          }

          if (part.includes('@') && !part.includes(' ') && part.includes('.')) {
            return (
              <a
                key={index}
                href={`mailto:${part}`}
                className="text-zinc-950 underline font-medium hover:text-zinc-700 transition-colors"
              >
                {part}
              </a>
            );
          }

          return part;
        })}
      </>
    );
  };

  const renderTable = (table: PolicyTable) => (
    <div className="overflow-x-auto my-4 rounded-2xl border border-stone-200/80 shadow-2xs">
      <table className="min-w-full divide-y divide-stone-200 text-left text-xs sm:text-sm">
        <thead className="bg-[#FAF8F5] text-stone-800 font-bold uppercase tracking-wider text-[11px]">
          <tr>
            {table.headers.map((h, i) => (
              <th key={i} scope="col" className="px-4 py-3 border-b border-stone-200/80 font-bold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-stone-100 bg-white">
          {table.rows.map((row, rIdx) => (
            <tr key={rIdx} className="hover:bg-stone-50/60 transition-colors">
              {row.map((cell, cIdx) => (
                <td key={cIdx} className="px-4 py-3 text-stone-700 align-top leading-relaxed">
                  {renderFormattedText(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderContentItems = (items: string[]) => {
    const blocks: { type: 'paragraph' | 'bullets'; items: string[] }[] = [];

    items.forEach((item) => {
      const isBullet = item.startsWith('• ') || item.startsWith('- ');
      const cleanItem = isBullet ? item.replace(/^[•\-]\s*/, '') : item;

      if (isBullet) {
        const lastBlock = blocks[blocks.length - 1];
        if (lastBlock && lastBlock.type === 'bullets') {
          lastBlock.items.push(cleanItem);
        } else {
          blocks.push({ type: 'bullets', items: [cleanItem] });
        }
      } else {
        blocks.push({ type: 'paragraph', items: [cleanItem] });
      }
    });

    return blocks.map((block, bIdx) => {
      if (block.type === 'bullets') {
        return (
          <ul key={bIdx} className="space-y-2.5 my-3 list-none pl-0">
            {block.items.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-stone-700 text-sm sm:text-base leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 mt-2 shrink-0" aria-hidden="true" />
                <span className="flex-1">{renderFormattedText(bullet)}</span>
              </li>
            ))}
          </ul>
        );
      }

      return (
        <div key={bIdx} className="space-y-3.5 my-3 first:mt-0 last:mb-0">
          {block.items.map((p, idx) => (
            <p key={idx} className="text-stone-700 text-sm sm:text-base leading-relaxed">
              {renderFormattedText(p)}
            </p>
          ))}
        </div>
      );
    });
  };

  return (
    <section 
      id={section.id} 
      className="scroll-mt-20 py-8 border-b border-stone-200/70 last:border-b-0 print-section relative"
    >
      {/* Anchor aliases for backward compatibility */}
      {section.id === 'section-15' && <span id="contact-and-deletion" className="absolute -top-20" />}

      <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight mb-4">
        {section.number}. {section.title}
      </h2>

      {section.content && section.content.length > 0 && (
        <div className="text-stone-700 text-sm sm:text-base leading-relaxed">
          {renderContentItems(section.content)}
        </div>
      )}

      {section.table && renderTable(section.table)}

      {section.subsections && section.subsections.length > 0 && (
        <div className="mt-6 space-y-6 pl-0 sm:pl-2">
          {section.subsections.map((sub, sIdx) => (
            <div key={sIdx} id={sub.id} className="space-y-2 relative scroll-mt-20">
              {sub.id === 'section-2-8' && <span id="section-16" className="absolute -top-20" />}
              <h3 className="text-base sm:text-lg font-bold text-stone-900">
                {sub.title}
              </h3>

              {sub.content && sub.content.length > 0 && (
                <div className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  {renderContentItems(sub.content)}
                </div>
              )}

              {sub.table && renderTable(sub.table)}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
