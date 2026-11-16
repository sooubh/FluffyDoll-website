import React from 'react';
import type { Metadata } from 'next';
import { MinimalAppLanding } from '../components/MinimalAppLanding';

export const metadata: Metadata = {
  title: 'FluffyDoll — Tactile Soft-Body Plush Physics Game for Android',
  description: 'An offline casual indie game featuring tactile 2D soft-body ragdoll physics, cozy collectible plush companions, and calm untimed gameplay.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return <MinimalAppLanding />;
}
