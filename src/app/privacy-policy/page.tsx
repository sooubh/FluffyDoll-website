import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { POLICY_METADATA, POLICY_SECTIONS } from '../../data/policyData';
import { FluffyDollLogo } from '../../components/FluffyDollLogo';
import { TableOfContents } from '../../components/TableOfContents';
import { PolicySectionCard } from '../../components/PolicySectionCard';
import { ContactSection } from '../../components/ContactSection';
import { Footer } from '../../components/Footer';
import { PrintButton } from '../../components/PrintButton';

export const metadata: Metadata = {
  title: 'FluffyDoll Privacy Policy — Official Legal & Privacy Documentation',
  description: 'Official Privacy Policy for the FluffyDoll mobile game. Effective 16 November 2026. Developer: Sourabh Singh (Sooubh).',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FFFDFB] text-stone-800 font-sans antialiased selection:bg-pink-100 selection:text-pink-900">
      <div id="top" />

      {/* Legal Header with Navigation Back to Game */}
      <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-white/95 backdrop-blur-md py-3 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-600 hover:text-pink-800 bg-pink-50 hover:bg-pink-100 px-3 py-1.5 rounded-xl border border-pink-200/70 transition-colors"
            >
              <span>&larr;</span>
              <span>Back to Game Website</span>
            </Link>
            <div className="hidden sm:block">
              <FluffyDollLogo size="sm" showSubtitle={false} />
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-stone-500">
            <span className="hidden md:inline bg-stone-100 text-stone-700 px-2.5 py-1 rounded-full font-medium">
              Google Play Compliant
            </span>
            <PrintButton />
          </div>
        </div>
      </header>

      {/* Main Legal Document Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 pb-20">
        
        {/* Document Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Public Legal Document · Google Play Console Verification URL</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            FluffyDoll Privacy Policy
          </h1>

          {/* Key Facts Summary Box */}
          <div className="mt-5 p-5 rounded-2xl bg-white border border-stone-200/80 text-xs sm:text-sm space-y-2 text-stone-700 shadow-2xs">
            <div>
              <span className="font-bold text-stone-900">Effective date: </span>
              <span>{POLICY_METADATA.effectiveDate}</span>
            </div>
            <div>
              <span className="font-bold text-stone-900">Last updated: </span>
              <span>{POLICY_METADATA.lastUpdated}</span>
            </div>
            <div>
              <span className="font-bold text-stone-900">Developer / data controller: </span>
              <span>{POLICY_METADATA.developerName}, {POLICY_METADATA.developerLocation}</span>
            </div>
            <div>
              <span className="font-bold text-stone-900">Contact and grievance email: </span>
              <a 
                href={`mailto:${POLICY_METADATA.developerEmail}`} 
                className="text-pink-600 underline font-medium hover:text-pink-800"
              >
                {POLICY_METADATA.developerEmail}
              </a>
            </div>
            <div>
              <span className="font-bold text-stone-900">Website: </span>
              <a 
                href={POLICY_METADATA.websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-pink-600 underline font-medium hover:text-pink-800"
              >
                {POLICY_METADATA.websiteUrl}
              </a>
            </div>
          </div>

          <p className="mt-6 text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
            This Privacy Policy explains what information the FluffyDoll mobile game (&quot;FluffyDoll&quot;, &quot;the app&quot;, &quot;we&quot;, &quot;us&quot;) collects, why we collect it, how it is used, who it is shared with, how long it is kept, and the choices and rights you have. Please read it carefully. By installing or using the app you acknowledge this policy.
          </p>

          <div className="mt-4 p-4 bg-amber-50/90 border border-amber-200/90 rounded-2xl text-xs sm:text-sm text-amber-900 font-semibold leading-relaxed shadow-2xs">
            Notice: FluffyDoll is intended for a general audience aged 13 and older. It is not directed at children under 13.
          </div>
        </header>

        {/* Compact Table of Contents */}
        <TableOfContents />

        {/* Complete Policy Sections 1 to 15 */}
        <div className="divide-y divide-stone-100">
          {POLICY_SECTIONS.map((section) => (
            <PolicySectionCard key={section.id} section={section} />
          ))}
        </div>

        {/* Contact and Grievance Section */}
        <ContactSection />

      </main>

      {/* Floating Jump to Top for convenience */}
      <div className="fixed bottom-6 right-6 no-print z-30">
        <a 
          href="#top" 
          aria-label="Back to top of privacy policy"
          className="flex items-center justify-center w-11 h-11 rounded-full bg-white hover:bg-stone-50 border border-stone-200 text-stone-700 shadow-md hover:shadow-lg transition-all active:scale-95"
        >
          &uarr;
        </a>
      </div>

      {/* Minimal Legal Footer */}
      <Footer />
    </div>
  );
}
