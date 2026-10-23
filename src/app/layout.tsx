import type { Metadata } from 'next';
import './globals.css';

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.startsWith('http')
      ? process.env.NEXT_PUBLIC_SITE_URL
      : `https://${process.env.NEXT_PUBLIC_SITE_URL}`;
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'https://fluffydoll.vercel.app';
};

export const metadata: Metadata = {
  title: {
    default: 'FluffyDoll — Cozy Casual Puzzle Game for Android',
    template: '%s | FluffyDoll',
  },
  description: 'Squish, match, and smile! FluffyDoll is a delightfully cozy 2D plush physics puzzle adventure built with Flutter & Flame for Android devices.',
  metadataBase: new URL(getBaseUrl()),
  alternates: {
    canonical: '/',
  },
  keywords: [
    'FluffyDoll',
    'Flutter Game',
    'Flame Engine',
    'Android Casual Game',
    'Cozy Puzzle Game',
    'Squishy Physics',
    'Offline Android Game',
    'Match 3 Puzzle',
  ],
  openGraph: {
    title: 'FluffyDoll — Cozy Casual Puzzle Game for Android',
    description: 'Squish, match, and smile! FluffyDoll is a delightfully cozy 2D plush physics puzzle adventure built with Flutter & Flame for Android.',
    url: '/',
    siteName: 'FluffyDoll Official Game Website',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FluffyDoll — Cozy Casual Puzzle Game for Android',
    description: 'Squish, match, and smile with FluffyDoll on Android!',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body 
        className="bg-white text-stone-900 antialiased selection:bg-pink-100 selection:text-pink-900 min-h-screen" 
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
