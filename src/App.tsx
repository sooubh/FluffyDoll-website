import React from 'react';
import { POLICY_METADATA, POLICY_SECTIONS } from './data/policyData';
import { Header } from './components/Header';
import { TableOfContents } from './components/TableOfContents';
import { PolicySectionCard } from './components/PolicySectionCard';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-stone-800 font-sans antialiased selection:bg-pink-100 selection:text-pink-900">
      <div id="top" />
      
      {/* Minimal Header */}
      <Header />

      {/* Main Document Reading Column (700-850px) */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 pb-16">
        
        {/* Document Header */}
        <header className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Privacy Policy
          </h1>

          <p className="mt-2 text-xs sm:text-sm text-stone-500">
            <span>Effective Date: <strong>{POLICY_METADATA.effectiveDate}</strong></span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>Last Updated: <strong>{POLICY_METADATA.lastUpdated}</strong></span>
          </p>

          <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed">
            This Privacy Policy describes how information is collected, used, and disclosed in connection with the mobile application <strong>FluffyDoll</strong>, a casual puzzle game built with Flutter and Flame for Android devices.
          </p>
        </header>

        {/* Compact Table of Contents */}
        <TableOfContents />

        {/* Complete Policy Sections */}
        <div className="divide-y-0">
          {POLICY_SECTIONS.map((section) => (
            <PolicySectionCard key={section.id} section={section} />
          ))}
        </div>

        {/* Contact and Data Deletion Section */}
        <ContactSection />

      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
