import { mediaImages } from '@/content/media';

export type GalleryItem = {
  id: string;
  title: string;
  src: string;
  alt: string;
};

export const galleryItems: GalleryItem[] = mediaImages.map((src, index) => {
  const number = String(index + 1).padStart(2, '0');

  return {
    id: String(index + 1).padStart(3, '0'),
    title: `Memory ${number}`,
    src,
    alt: `Lerato — memory ${number}`,
  };
});
