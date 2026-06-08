import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';

import { PageLoader } from '@/components/motion/page-loader';
import { GlobalReveals } from '@/components/motion/global-reveals';
import { SiteHeader } from '@/components/site/site-header';
import { PurpleCursor } from '@/components/motion/purple-cursor';
import { SiteToneSwitch } from '@/components/site/site-tone-switch';

import './globals.css';

const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const displayFont = Oswald({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Lerato Mokoka — Birthday Photo Album',
  description:
    'A digital photo album birthday gift for Lerato Mokoka — moments, memories, and pictures arranged like a book made just for her.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <PageLoader />
        <GlobalReveals />
        <SiteToneSwitch />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
