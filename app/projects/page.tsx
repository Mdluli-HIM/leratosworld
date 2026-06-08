import Image from 'next/image';
import Link from 'next/link';

import { projects } from '@/content/projects';

export default function ProjectsPage() {
  return (
    <main className="projects-library-page projects-library-page--images-only">
      <div className="page-shell">
        <div className="library-shelf library-shelf--images-only" data-reveal>
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="volume-card volume-card--image-only"
              aria-label={project.title}
            >
              <div className="volume-card__image">
                <Image
                  src={project.coverImage.src}
                  alt=""
                  fill
                  sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 24vw"
                  className="editorial-image"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
