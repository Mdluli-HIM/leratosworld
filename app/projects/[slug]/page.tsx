import Image from 'next/image';
import { notFound } from 'next/navigation';

import { AlbumVideo } from '@/components/media/album-video';
import { getProject, projects } from '@/content/projects';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const media = [
    { type: 'image' as const, ...project.coverImage },
    { type: 'image' as const, ...project.heroImage },
    ...project.media,
  ];

  return (
    <main className="project-images-page">
      <div className="project-images-stack">
        {media.map((item) =>
          item.type === 'video' ? (
            <div key={item.src} className="project-media-frame project-media-frame--video">
              <AlbumVideo src={item.src} autoPlay={false} />
            </div>
          ) : (
            <div key={item.src} className="project-media-frame">
              <Image
                src={item.src}
                alt=""
                fill
                sizes="100vw"
                className="editorial-image"
              />
            </div>
          )
        )}
      </div>
    </main>
  );
}
