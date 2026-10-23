import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FluffyDoll — Official Privacy Policy',
  description: 'Official Privacy Policy documentation and Google Play Store compliance guide for FluffyDoll, a casual puzzle game built with Flutter and Flame for Android.',
  metadataBase: new URL('https://YOUR_PRODUCTION_DOMAIN.com'),
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'FluffyDoll — Official Privacy Policy',
    description: 'Official Privacy Policy documentation and Google Play Store compliance guide for FluffyDoll, a casual puzzle game built with Flutter and Flame for Android.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'FluffyDoll — Official Privacy Policy',
    description: 'Official Privacy Policy documentation and Google Play Store compliance guide for FluffyDoll.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-stone-800 antialiased selection:bg-pink-100 selection:text-pink-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}
