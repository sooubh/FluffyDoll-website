import React from 'react';
import { POLICY_METADATA } from '../data/policyData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact-and-deletion-card" className="scroll-mt-16 py-8 border-b border-stone-200/70 last:border-b-0">
      <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight mb-4">
        Contact &amp; Grievance Redressal
      </h2>

      <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-4">
        If you have questions about this Privacy Policy, want to exercise your privacy rights, or want to raise a concern or grievance:
      </p>

      <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 space-y-2.5 text-xs sm:text-sm text-stone-800">
        <div>
          <span className="font-semibold text-stone-900">Email: </span>
          <a href={`mailto:${POLICY_METADATA.developerEmail}`} className="text-pink-600 underline font-medium">
            {POLICY_METADATA.developerEmail}
          </a>
        </div>
        <div>
          <span className="font-semibold text-stone-900">Developer / Data Controller: </span>
          <span className="text-stone-700">{POLICY_METADATA.developerName}, {POLICY_METADATA.developerLocation}</span>
        </div>
        <div>
          <span className="font-semibold text-stone-900">Website: </span>
          <a 
            href={POLICY_METADATA.websiteUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-pink-600 underline font-medium"
          >
            {POLICY_METADATA.websiteUrl}
          </a>
        </div>
        <div className="pt-2 text-stone-500 text-xs border-t border-stone-200/60">
          We will acknowledge your request and aim to resolve verified privacy and erasure requests within statutory timeframes (generally 30 to 45 days).
        </div>
      </div>
    </section>
  );
};
