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
    <section className="section photobook-volumes">
      <div className="page-shell">
        <div className="visual-home-rail" data-reveal>
          <span>03</span>
          <span>Selected volumes</span>
        </div>

        <div className="volume-grid">
          {projects.map((project, index) => {
            const point = positions[index] ?? {
              desktop: 'center center',
              mobile: 'center center',
            };

            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="volume-card"
                data-reveal
              >
                <div className="volume-card__spine">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>

                <div className="volume-card__body">
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
                      alt={project.coverImage.alt}
                      fill
                      sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 24vw"
                      className="editorial-image"
                    />
                  </div>

                  <div className="volume-card__meta">
                    <span>{project.title}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
