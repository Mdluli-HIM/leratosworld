import Image from 'next/image';
import Link from 'next/link';

import { projects } from '@/content/projects';

export default function ProjectsPage() {
  const heroProject = projects[0];

  return (
    <main className="projects-library-page">
      <div className="page-shell">
        <div className="project-book-rail" data-reveal>
          <span>Archive</span>
          <span>Selected volumes</span>
          <span>{projects.length} projects</span>
        </div>

        <section className="library-board" data-reveal>
          <div className="library-board__page library-board__page--title">
            <p className="photobook-copy__label">Project index</p>
            <h1 className="library-board__title">
              Project
              <br />
              archive
            </h1>
          </div>

          <div className="library-board__page library-board__page--note">
            <div className="library-board__note">
              <p className="photobook-copy__label">Overview</p>
              <p className="library-board__copy">
                Each project opens like a quiet picture book — restrained
                layouts, strong imagery, and very little noise.
              </p>
            </div>
          </div>

          <div className="library-board__footer">
            <span>Works archive</span>
            <span>Volume shelf</span>
          </div>
        </section>

        <section className="library-shelf-section">
          <div className="library-shelf-heading" data-reveal>
            <span>Featured shelf</span>
            <span>Open a volume</span>
          </div>

          <div className="library-shelf" data-reveal>
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="volume-card volume-card--library"
              >
                <div className="volume-card__spine">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>

                <div className="volume-card__body">
                  <div className="volume-card__image">
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

                  <div className="volume-card__submeta">
                    <span>{project.client}</span>
                    <span>{project.category}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="photobook-spread library-index-spread" data-reveal>
          <div className="photobook-spread__page">
            <div className="photobook-image photobook-image--portrait">
              <Image
                src={heroProject.heroImage.src}
                alt={heroProject.heroImage.alt}
                fill
                sizes="(max-width: 720px) 100vw, (max-width: 1100px) 42vw, 28vw"
                className="editorial-image"
              />
            </div>
          </div>

          <div className="photobook-spread__page photobook-spread__page--quiet">
            <div className="library-index">
              <p className="photobook-copy__label">Archive index</p>

              <div className="library-index__list">
                {projects.map((project, index) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="library-index__item"
                  >
                    <span className="library-index__number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="library-index__title">
                      {project.title}
                    </span>
                    <span className="library-index__year">{project.year}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="photobook-spread__footer">
            <span>Index</span>
            <span>A–Z</span>
          </div>
        </section>
      </div>
    </main>
  );
}
