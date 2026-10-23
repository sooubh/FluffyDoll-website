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
  title: 'FluffyDoll — Official Privacy Policy & Google Play Compliance',
  description: 'Official Privacy Policy documentation and Google Play Store compliance declarations for FluffyDoll, an Android casual puzzle game built with Flutter & Flame.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-stone-800 font-sans antialiased selection:bg-pink-100 selection:text-pink-900">
      <div id="top" />

      {/* Legal Header with Navigation Back to Game */}
      <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/95 backdrop-blur-xs py-3 px-4 sm:px-6">
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
              Google Play Compliant Document
            </span>
            <PrintButton />
          </div>
        </div>
      </header>

      {/* Main Legal Document Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-8 pb-16">
        
        {/* Document Header */}
        <header className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Public Legal Document · Google Play Console Verification URL</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            FluffyDoll Official Privacy Policy
          </h1>

          <p className="mt-3 text-xs sm:text-sm text-stone-500">
            <span>Effective Date: <strong>{POLICY_METADATA.effectiveDate}</strong></span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>Last Updated: <strong>{POLICY_METADATA.lastUpdated}</strong></span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>App Version: <strong>{POLICY_METADATA.policyVersion}</strong></span>
          </p>

          <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed">
            This Privacy Policy describes how information is collected, used, and disclosed in connection with the mobile application <strong>FluffyDoll</strong>, a casual puzzle game built with Flutter and Flame for Android devices and distributed through the Google Play Store.
          </p>
        </header>

        {/* Compact Table of Contents */}
        <TableOfContents />

        {/* Complete Policy Sections 1 to 16 */}
        <div className="divide-y divide-stone-100">
          {POLICY_SECTIONS.map((section) => (
            <PolicySectionCard key={section.id} section={section} />
          ))}
        </div>

        {/* Contact and Data Deletion Section */}
        <ContactSection />

      </main>

      {/* Minimal Legal Footer */}
      <Footer />
    </div>
  );
}
