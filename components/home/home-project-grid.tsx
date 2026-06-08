import type { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { projects } from '@/content/projects';

const positions = [
  { desktop: 'center 20%', mobile: 'center 22%' },
  { desktop: 'center 58%', mobile: 'center 60%' },
  { desktop: 'center 18%', mobile: 'center 20%' },
  { desktop: 'center 52%', mobile: 'center 56%' },
];

export function HomeProjectGrid() {
  return (
    <section className="section photobook-volumes photobook-volumes--images-only">
      <div className="page-shell">
        <div className="visual-home-rail" data-reveal>
          <span>03</span>
          <span>Album volumes</span>
        </div>

        <div className="volume-grid volume-grid--images-only">
          {projects.map((project, index) => {
            const point = positions[index] ?? {
              desktop: 'center center',
              mobile: 'center center',
            };

            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="volume-card volume-card--image-only"
                data-reveal
                aria-label={project.title}
              >
                <div
                  className="volume-card__image"
                  style={
                    {
                      '--image-position': point.desktop,
                      '--image-position-mobile': point.mobile,
                    } as CSSProperties
                  }
                >
                  <Image
                    src={project.coverImage.src}
                    alt=""
                    fill
                    sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 24vw"
                    className="editorial-image"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
