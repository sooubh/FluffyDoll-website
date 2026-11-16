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
    <div className="min-h-screen bg-[#FBFBFA] text-zinc-900 font-sans antialiased selection:bg-zinc-200 selection:text-zinc-900">
      <div id="top" />

      {/* Navigation Bar */}
      <GameNavbar />

      {/* Main Game Showcase */}
      <main>
        {/* Hero Section with Interactive Physics Showcase */}
        <HeroSection />

        {/* Core Engineered Gameplay */}
        <FeaturesSection />

        {/* Collectible Plush Companions */}
        <DollsGallery />

        {/* Interaction Rules & Boosters */}
        <GameMechanics />

        {/* Android Hardware Standards */}
        <TechSpecs />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Download Call to Action */}
        <DownloadCta />
      </main>

      {/* Legal & Compliance Footer */}
      <GameFooter />
    </div>
  );
}
