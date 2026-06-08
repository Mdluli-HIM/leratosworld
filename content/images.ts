import { about, getVolumeImages, getVolumeVideos, home, mediaImages } from '@/content/media';

export { mediaImages, mediaVideos } from '@/content/media';

export const images = {
  about,
  home,
  gallery: (index: number) => mediaImages[index - 1] ?? mediaImages[0] ?? '',
  volume: {
    cover: (slug: string) => getVolumeImages(slug as never)[0] ?? '',
    hero: (slug: string) => getVolumeImages(slug as never)[1] ?? '',
    photo: (slug: string, index: number) =>
      getVolumeImages(slug as never)[index + 1] ?? '',
    videos: (slug: string) => getVolumeVideos(slug as never),
  },
} as const;
