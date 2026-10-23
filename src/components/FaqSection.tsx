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
    answer: 'Yes! FluffyDoll is completely free to download and play on Android devices. You can play through levels, enjoy squishy doll physics, and unlock achievements without mandatory paywalls.',
  },
  {
    id: 'offline-support',
    question: 'Can I play FluffyDoll without an internet or Wi-Fi connection?',
    answer: 'Absolutely. FluffyDoll is engineered as a 100% offline-first game. You do not need active Wi-Fi or cellular mobile data to play puzzle levels, save your local progress, or customize your plush companions.',
  },
  {
    id: 'child-safety',
    question: 'Is FluffyDoll safe for children and families?',
    answer: 'Yes. FluffyDoll complies strictly with the Google Play Families Policy and the Children’s Online Privacy Protection Act (COPPA). The game does not collect personal contact information from children and contains no violent or inappropriate themes.',
  },
  {
    id: 'save-progress',
    question: 'How is my puzzle progress and high score saved?',
    answer: 'Your gameplay progress, unlocked outfits, and high scores are saved safely on your local Android device storage. If you clear your Android application cache or uninstall the app without backing up, your local puzzle progress will be reset.',
  },
  {
    id: 'engine-performance',
    question: 'What technology powers FluffyDoll?',
    answer: 'FluffyDoll is proudly built with Google Flutter and the Flame 2D game engine. This stack provides hardware-accelerated 60 FPS graphics, responsive soft-body physics, and battery-friendly performance on Android phones and tablets.',
  },
  {
    id: 'privacy-policy-link',
    question: 'Where can I read the official Privacy Policy and Data Safety information?',
    answer: (
      <span>
        You can view our verified, 16-section legal documentation anytime on our dedicated{' '}
        <Link href="/privacy-policy" className="text-pink-600 underline font-bold hover:text-pink-800">
          Official Privacy Policy Page
        </Link>
        , which includes our full Google Play Data Safety breakdown and contact information.
      </span>
    ),
  },
];

export const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-white border-b border-stone-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-extrabold tracking-wider text-pink-600 bg-pink-100/70 border border-pink-200 px-3.5 py-1 rounded-full">
            Got Questions?
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            Everything you need to know about FluffyDoll, offline gameplay, and privacy standards.
          </p>
        </div>

        {/* Accordion using modern native semantic <details name="faq"> */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <details
              key={faq.id}
              name="faq"
              id={faq.id}
              open={index === 0 ? true : undefined}
              className="group rounded-2xl border border-stone-200/80 bg-stone-50/50 p-5 open:bg-white open:border-pink-300 open:shadow-md open:shadow-pink-100/40 transition-all duration-200"
            >
              <summary className="flex cursor-pointer items-center justify-between text-base sm:text-lg font-bold text-stone-900 group-hover:text-pink-600 select-none list-none focus:outline-hidden">
                <span className="pr-4">{faq.question}</span>
                <span className="ml-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white border border-stone-200 text-stone-500 group-open:rotate-180 group-open:bg-pink-100 group-open:text-pink-700 group-open:border-pink-300 transition-transform">
                  &darr;
                </span>
              </summary>
              <div className="mt-3.5 pt-3 border-t border-stone-100 text-sm sm:text-base text-stone-600 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
};
