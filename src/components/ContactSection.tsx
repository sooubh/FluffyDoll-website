import React from 'react';
import { POLICY_METADATA } from '../data/policyData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact-and-deletion" className="scroll-mt-16 py-8 border-b border-stone-200/70 last:border-b-0">
      <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight mb-4">
        Contact &amp; Data Deletion Requests
      </h2>

      <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-4">
        If you have any questions about this Privacy Policy, or if you wish to exercise your rights or request deletion of any support-related correspondence, please contact us:
      </p>

      <div className="bg-stone-50 rounded-lg p-5 border border-stone-200 space-y-2 text-xs sm:text-sm text-stone-800">
        <div>
          <span className="font-semibold text-stone-900">Developer / Publisher: </span>
          <span className="font-mono text-stone-700">{POLICY_METADATA.developerNamePlaceholder}</span>
        </div>
        <div>
          <span className="font-semibold text-stone-900">Privacy &amp; Data Rights Email: </span>
          <span className="font-mono text-stone-700">{POLICY_METADATA.developerEmailPlaceholder}</span>
        </div>
        <div>
          <span className="font-semibold text-stone-900">Mailing Address: </span>
          <span className="font-mono text-stone-700">{POLICY_METADATA.developerAddressPlaceholder}</span>
        </div>
        <div className="pt-2 text-stone-500 text-xs">
          Requests for data erasure or inquiries will be reviewed and answered within 30 calendar days.
        </div>
      </div>
    </section>
  );
};
