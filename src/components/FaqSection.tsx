import React from 'react';
import Link from 'next/link';

interface FaqItem {
  id: string;
  question: string;
  answer: string | React.ReactNode;
}

const FAQS: FaqItem[] = [
  {
    id: 'free-to-play',
    question: 'Is FluffyDoll free to play?',
    answer: 'Yes. FluffyDoll is completely free to download and play on Android. All puzzle stages, companions, and wardrobe unlocks can be obtained through natural gameplay without mandatory paywalls.',
  },
  {
    id: 'offline-support',
    question: 'Can I play without an internet connection?',
    answer: 'Yes. FluffyDoll is designed with a strict offline-first architecture. You do not need Wi-Fi or cellular mobile data to launch the game, progress through levels, or save your high scores.',
  },
  {
    id: 'target-audience',
    question: 'What is the intended audience and age rating?',
    answer: 'FluffyDoll is intended for a general audience aged 13 and older and is not directed at children under 13. The game contains zero violent or mature themes, requires no user account, and does not harvest personal user data.',
  },
  {
    id: 'save-progress',
    question: 'How is game progress and customization saved?',
    answer: 'Your gameplay progress, unlocked doll outfits, and high scores are saved locally in private device storage. If you choose to sign in to Google Play Games, progress is automatically synced to your personal Google account cloud save.',
  },
  {
    id: 'tech-stack',
    question: 'What engine and technology powers the game?',
    answer: 'FluffyDoll is natively built with Google Flutter and the Flame 2D game engine. This stack provides hardware-accelerated 60 FPS graphics, responsive soft-body physics, and low battery consumption.',
  },
  {
    id: 'privacy-policy-link',
    question: 'Where can I read the official Privacy Policy and Data Safety information?',
    answer: (
      <span>
        You can review our verified, 15-section legal documentation anytime on our{' '}
        <Link href="/privacy-policy" className="text-zinc-950 underline font-semibold hover:text-zinc-700">
          Official Privacy Policy Page
        </Link>
        , which includes data retention schedules, third-party service disclosures, and contact details.
      </span>
    ),
  },
];

export const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-white border-b border-zinc-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase font-mono tracking-wider text-zinc-500 font-semibold block mb-2">
            Clear Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-zinc-600 leading-relaxed font-normal">
            Key details regarding gameplay mechanics, offline support, device compatibility, and data safety.
          </p>
        </div>

        {/* Accordion using semantic <details name="faq"> */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => (
            <details
              key={faq.id}
              name="faq"
              id={faq.id}
              open={index === 0 ? true : undefined}
              className="group rounded-2xl border border-zinc-200/90 bg-[#FBFBFA] p-5 open:bg-white open:border-zinc-400 open:shadow-xs transition-all duration-200"
            >
              <summary className="flex cursor-pointer items-center justify-between text-base sm:text-lg font-bold text-zinc-900 group-hover:text-zinc-950 select-none list-none focus:outline-hidden">
                <span className="pr-4">{faq.question}</span>
                <span className="ml-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 group-open:rotate-180 transition-transform">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="mt-3.5 pt-3 border-t border-zinc-100 text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
};
