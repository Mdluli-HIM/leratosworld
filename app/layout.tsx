import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';

import { PageLoader } from '@/components/motion/page-loader';
import { GlobalReveals } from '@/components/motion/global-reveals';
import { SiteHeader } from '@/components/site/site-header';
import { SiteFooter } from '@/components/site/site-footer';
import { PurpleCursor } from '@/components/motion/purple-cursor';

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
  title: 'Cathy Dolle — Monochrome Portfolio',
  description:
    'A premium monochrome portfolio concept for a freelance designer and developer working across photography, web design, and interactive experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <PageLoader />
        <GlobalReveals />
        <PurpleCursor />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
