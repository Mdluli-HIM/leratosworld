import { about, home, mediaImages } from '@/content/media';

export type LoaderPhotoLayout = {
  x: number;
  y: number;
  rotate: number;
  scale: number;
};

export const loaderPhotoLayouts: LoaderPhotoLayout[] = [
  { x: -38, y: -32, rotate: -16, scale: 0.84 },
  { x: 34, y: -36, rotate: 12, scale: 0.88 },
  { x: -42, y: 8, rotate: -8, scale: 0.8 },
  { x: 40, y: 4, rotate: 14, scale: 0.86 },
  { x: -18, y: -42, rotate: 6, scale: 0.78 },
  { x: 22, y: -40, rotate: -10, scale: 0.82 },
  { x: -46, y: 28, rotate: -18, scale: 0.76 },
  { x: 44, y: 30, rotate: 16, scale: 0.8 },
  { x: -8, y: 36, rotate: -6, scale: 0.84 },
  { x: 12, y: 38, rotate: 9, scale: 0.82 },
  { x: -28, y: -12, rotate: -12, scale: 0.9 },
  { x: 26, y: -10, rotate: 8, scale: 0.92 },
  { x: -30, y: 22, rotate: 10, scale: 0.74 },
  { x: 32, y: 20, rotate: -14, scale: 0.76 },
];

export function getLoaderImages(): string[] {
  const featured = [
    home.cover,
    about.foreword,
    home.spread01,
    home.openingLeft,
    home.openingRight,
    home.spread02a,
    home.spread02b,
    home.spread03Left,
  ];

  const sampled = mediaImages.filter((_, index) => index % 6 === 0);

  return [...new Set([...featured, ...sampled])].slice(
    0,
    loaderPhotoLayouts.length
  );
}
