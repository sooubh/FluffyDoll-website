import React from 'react';
import { GameNavbar } from '../components/GameNavbar';
import { HeroSection } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { DollsGallery } from '../components/DollsGallery';
import { GameMechanics } from '../components/GameMechanics';
import { TechSpecs } from '../components/TechSpecs';
import { FaqSection } from '../components/FaqSection';
import { DownloadCta } from '../components/DownloadCta';
import { GameFooter } from '../components/GameFooter';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-stone-900 font-sans antialiased selection:bg-pink-100 selection:text-pink-900">
      <div id="top" />

      {/* Modern Game Navigation Bar */}
      <GameNavbar />

      {/* Main Game Showcase Content */}
      <main>
        {/* Hero Section with Interactive Mini-Game */}
        <HeroSection />

        {/* 6 Key Gameplay Highlights */}
        <FeaturesSection />

        {/* Interactive Doll Gallery (BunBun, PuffBear, Mochi, Dottie) */}
        <DollsGallery />

        {/* How to Play & Boosters Showcase */}
        <GameMechanics />

        {/* Android Specs & Flutter Engine Specs */}
        <TechSpecs />

        {/* Accessible FAQ Accordion */}
        <FaqSection />

        {/* Download Banner on Google Play */}
        <DownloadCta />
      </main>

      {/* Polished Game Footer with Legal Links */}
      <GameFooter />
    </div>
  );
}
