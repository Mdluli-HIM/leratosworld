import {
  getVolumeImages,
  getVolumeVideos,
  volumeSlugs,
  type VolumeSlug,
} from '@/content/media';

export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectVideo = {
  src: string;
  alt: string;
};

export type ProjectMedia =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; alt: string };

export type Project = {
  slug: VolumeSlug;
  title: string;
  category: string;
  year: string;
  client: string;
  excerpt: string;
  services: string[];
  metrics: { label: string; value: string }[];
  coverImage: ProjectImage;
  heroImage: ProjectImage;
  gallery: ProjectImage[];
  videos: ProjectVideo[];
  media: ProjectMedia[];
};

const volumeMeta: Record<
  VolumeSlug,
  {
    title: string;
    excerpt: string;
    services: string[];
    metrics: { label: string; value: string }[];
  }
> = {
  'atelier-noir': {
    title: 'Volume I — Portraits',
    excerpt: 'Portraits and quiet frames of Lerato through the years.',
    services: ['Her smile', 'Soft light', 'Close moments'],
    metrics: [
      { label: 'Spread', value: '01' },
      { label: 'Theme', value: 'Portraits' },
      { label: 'Album', value: 'Volume I' },
    ],
  },
  'silent-frames': {
    title: 'Volume II — Quiet days',
    excerpt: 'Still and gentle moments from ordinary days worth keeping.',
    services: ['Calm scenes', 'Soft frames', 'In-between moments'],
    metrics: [
      { label: 'Spread', value: '02' },
      { label: 'Theme', value: 'Quiet days' },
      { label: 'Album', value: 'Volume II' },
    ],
  },
  'afterlight-studio': {
    title: 'Volume III — Golden light',
    excerpt: 'Warm frames where the light falls just right on her.',
    services: ['Golden hour', 'Warm tones', 'Soft glow'],
    metrics: [
      { label: 'Spread', value: '03' },
      { label: 'Theme', value: 'Golden light' },
      { label: 'Album', value: 'Volume III' },
    ],
  },
  'city-echoes': {
    title: 'Volume IV — Out and about',
    excerpt: 'City streets, open roads, and days spent exploring together.',
    services: ['City walks', 'Open roads', 'Adventures'],
    metrics: [
      { label: 'Spread', value: '04' },
      { label: 'Theme', value: 'Out and about' },
      { label: 'Album', value: 'Volume IV' },
    ],
  },
};

function buildProject(slug: VolumeSlug): Project {
  const volumeImages = getVolumeImages(slug);
  const volumeVideos = getVolumeVideos(slug);
  const meta = volumeMeta[slug];
  const [cover, hero, ...rest] = volumeImages;

  const gallery = rest.map((src, index) => ({
    src,
    alt: `Lerato — ${meta.title} photo ${String(index + 1).padStart(2, '0')}`,
  }));

  const videos = volumeVideos.map((src, index) => ({
    src,
    alt: `Lerato — ${meta.title} clip ${String(index + 1).padStart(2, '0')}`,
  }));

  return {
    slug,
    title: meta.title,
    category: 'Photo spread',
    year: 'Memories',
    client: 'Lerato Mokoka',
    excerpt: meta.excerpt,
    services: meta.services,
    metrics: meta.metrics,
    coverImage: {
      src: cover ?? '',
      alt: `Lerato — ${meta.title} cover`,
    },
    heroImage: {
      src: hero ?? cover ?? '',
      alt: `Lerato — ${meta.title} hero`,
    },
    gallery,
    videos,
    media: [
      ...gallery.map((item) => ({ type: 'image' as const, ...item })),
      ...videos.map((item) => ({ type: 'video' as const, ...item })),
    ],
  };
}

export const projects: Project[] = volumeSlugs.map(buildProject);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
