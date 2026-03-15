export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
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
};

export const projects: Project[] = [
  {
    slug: 'atelier-noir',
    title: 'Atelier Noir',
    category: 'Photography Portfolio',
    year: '2026',
    client: 'Independent Fashion Photographer',
    excerpt:
      'A monochrome portfolio system built like a printed lookbook: measured pacing, cinematic transitions, and an editorial structure that gives each series space to breathe.',
    services: [
      'Creative direction',
      'UI design',
      'Motion design',
      'Front-end development',
    ],
    metrics: [
      { label: 'Format', value: 'Lookbook system' },
      { label: 'Palette', value: 'Pure monochrome' },
      { label: 'Build', value: 'Next.js + GSAP' },
    ],
    coverImage: {
      src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80',
      alt: 'Black and white portrait of a woman in soft studio light.',
    },
    heroImage: {
      src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80',
      alt: 'Fashion portrait photographed with strong contrast and editorial framing.',
    },
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
        alt: 'Monochrome portrait study with strong eye contact.',
      },
      {
        src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
        alt: 'Close portrait cropped tightly like a magazine cover.',
      },
      {
        src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
        alt: 'Profile portrait in soft black and white light.',
      },
      {
        src: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=1200&q=80',
        alt: 'Portrait detail used as a gallery close-up.',
      },
    ],
  },
  {
    slug: 'silent-frames',
    title: 'Silent Frames',
    category: 'Web & Interactive',
    year: '2025',
    client: 'Cultural Image Archive',
    excerpt:
      'A restrained web experience for archival photography, where typography, whitespace, and scroll rhythm do the heavy lifting instead of decorative effects.',
    services: [
      'Information architecture',
      'Experience design',
      'Animation system',
    ],
    metrics: [
      { label: 'Approach', value: 'Editorial pacing' },
      { label: 'Motion', value: 'Scroll-triggered reveals' },
      { label: 'Focus', value: 'Reading + imagery' },
    ],
    coverImage: {
      src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
      alt: 'Close-up of a camera body used as a photography placeholder.',
    },
    heroImage: {
      src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
      alt: 'Silhouette figure in an atmospheric landscape used as an editorial hero frame.',
    },
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
        alt: 'Camera detail representing the archive interface.',
      },
      {
        src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=80',
        alt: 'Landscape frame styled like an archive plate.',
      },
      {
        src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80',
        alt: 'Quiet landscape used as a supporting story image.',
      },
      {
        src: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80',
        alt: 'Editorial image of a book and table arrangement.',
      },
    ],
  },
  {
    slug: 'afterlight-studio',
    title: 'Afterlight Studio',
    category: 'Design Agency',
    year: '2025',
    client: 'Boutique Creative Studio',
    excerpt:
      'A portfolio platform that positions the studio through a quiet but highly controlled visual language, balancing credibility, atmosphere, and conversion.',
    services: [
      'Brand expression',
      'Portfolio strategy',
      'Responsive art direction',
    ],
    metrics: [
      { label: 'Feel', value: 'Premium + sparse' },
      { label: 'Layouts', value: 'Asymmetric grid' },
      { label: 'Device pass', value: 'Desktop first, mobile refined' },
    ],
    coverImage: {
      src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
      alt: 'Minimal fashion image used as a design agency case study cover.',
    },
    heroImage: {
      src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80',
      alt: 'Standing figure framed with generous negative space.',
    },
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
        alt: 'Figure standing in clean studio light.',
      },
      {
        src: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=1200&q=80',
        alt: 'Portrait close-up for the agency founder story.',
      },
      {
        src: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=1200&q=80',
        alt: 'Quiet working desk composition.',
      },
      {
        src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
        alt: 'Studio interior used as a placeholder environment image.',
      },
    ],
  },
  {
    slug: 'city-echoes',
    title: 'City Echoes',
    category: 'Street Photography',
    year: '2024',
    client: 'Personal Series',
    excerpt:
      'An immersive case study for urban black-and-white photography with layered crops, sequence-based storytelling, and tactile interactions inspired by print.',
    services: [
      'Narrative sequencing',
      'Case study design',
      'Micro-interactions',
    ],
    metrics: [
      { label: 'Story mode', value: 'Sequential spreads' },
      { label: 'Navigation', value: 'Index based' },
      { label: 'Audience', value: 'Collectors + curators' },
    ],
    coverImage: {
      src: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1200&q=80',
      alt: 'Street photography frame with a lone figure in the city.',
    },
    heroImage: {
      src: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1600&q=80',
      alt: 'Urban black and white scene with a single figure in deep perspective.',
    },
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80',
        alt: 'City street scene with architecture and movement.',
      },
      {
        src: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1200&q=80',
        alt: 'Long corridor with graphic floor pattern.',
      },
      {
        src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
        alt: 'Moody city lane photographed in monochrome style.',
      },
      {
        src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80',
        alt: 'Open urban landscape to punctuate the gallery sequence.',
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
