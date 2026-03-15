import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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

  const [imageOne, imageTwo, imageThree, imageFour] = project.gallery;

  return (
    <main className="project-book-page">
      <div className="page-shell">
        <div className="project-book-rail" data-reveal>
          <span>{project.year}</span>
          <span>{project.category}</span>
          <span>{project.client}</span>
        </div>

        <section className="photobook-hero-grid photobook-hero-grid--project">
          <article className="book-cover book-cover--project" data-reveal>
            <div className="book-cover__topline">
              <span>{project.category}</span>
              <span>{project.year}</span>
            </div>

            <div className="book-cover__image">
              <Image
                src={project.coverImage.src}
                alt={project.coverImage.alt}
                fill
                priority
                sizes="(max-width: 720px) 100vw, (max-width: 1100px) 40vw, 24vw"
                className="editorial-image"
              />
            </div>

            <div className="book-cover__body">
              <p className="book-cover__eyebrow">{project.client}</p>

              <div className="project-book-intro">
                <h1 className="book-cover__title">{project.title}</h1>
                <p className="project-book-excerpt">{project.excerpt}</p>
              </div>

              <div className="project-book-meta-grid">
                <div className="project-book-meta-item">
                  <span className="meta-label">Volume</span>
                  <span className="meta-value">01</span>
                </div>
                <div className="project-book-meta-item">
                  <span className="meta-label">Format</span>
                  <span className="meta-value">Inside spread</span>
                </div>
                <div className="project-book-meta-item">
                  <span className="meta-label">Build</span>
                  <span className="meta-value">Next.js / GSAP</span>
                </div>
              </div>
            </div>
          </article>

          <article
            className="photobook-spread photobook-spread--project-hero"
            data-reveal
          >
            <div className="photobook-spread__page photobook-spread__page--quiet">
              <div className="project-book-note">
                <p className="photobook-copy__label">Opening spread</p>
                <h2 className="project-book-note__title">Inside the volume</h2>
              </div>
            </div>

            <div className="photobook-spread__page">
              <div className="photobook-image photobook-image--full project-book-hero-image">
                <Image
                  src={project.heroImage.src}
                  alt={project.heroImage.alt}
                  fill
                  sizes="(max-width: 720px) 100vw, (max-width: 1100px) 60vw, 42vw"
                  className="editorial-image"
                />
              </div>
            </div>

            <div className="photobook-spread__footer">
              <span>{project.title}</span>
              <span>{project.year}</span>
            </div>
          </article>
        </section>

        <section className="project-book-stack">
          <article className="photobook-spread" data-reveal>
            <div className="photobook-spread__page photobook-spread__page--quiet">
              <div className="photobook-image photobook-image--small">
                <Image
                  src={imageOne.src}
                  alt={imageOne.alt}
                  fill
                  sizes="(max-width: 720px) 100vw, (max-width: 1100px) 36vw, 24vw"
                  className="editorial-image"
                />
              </div>
            </div>

            <div className="photobook-spread__page photobook-spread__page--dark">
              <div className="project-book-metrics">
                <div className="project-book-note">
                  <p className="photobook-copy__label">Chapter 01</p>
                  <h2 className="project-book-note__title">Measured rhythm</h2>
                </div>

                <div className="project-book-metric-list">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="project-book-metric">
                      <span className="meta-label">{metric.label}</span>
                      <span className="meta-value">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="photobook-spread__footer">
              <span>Project facts</span>
              <span>01 / 03</span>
            </div>
          </article>

          <article className="photobook-spread" data-reveal>
            <div className="photobook-spread__page">
              <div className="project-book-collage">
                <div className="project-book-collage__item project-book-collage__item--tall">
                  <Image
                    src={imageTwo.src}
                    alt={imageTwo.alt}
                    fill
                    sizes="(max-width: 720px) 100vw, (max-width: 1100px) 24vw, 18vw"
                    className="editorial-image"
                  />
                </div>

                <div className="project-book-collage__item project-book-collage__item--wide">
                  <Image
                    src={imageThree.src}
                    alt={imageThree.alt}
                    fill
                    sizes="(max-width: 720px) 100vw, (max-width: 1100px) 28vw, 20vw"
                    className="editorial-image"
                  />
                </div>
              </div>
            </div>

            <div className="photobook-spread__page photobook-spread__page--quiet">
              <div className="project-book-services">
                <div className="project-book-note">
                  <p className="photobook-copy__label">Chapter 02</p>
                  <h2 className="project-book-note__title">What was shaped</h2>
                </div>

                <div className="project-book-service-list">
                  {project.services.map((service) => (
                    <div key={service} className="project-book-service">
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="photobook-spread__footer">
              <span>Services</span>
              <span>02 / 03</span>
            </div>
          </article>

          <article className="photobook-spread" data-reveal>
            <div className="photobook-spread__page">
              <div className="photobook-image photobook-image--portrait">
                <Image
                  src={imageFour.src}
                  alt={imageFour.alt}
                  fill
                  sizes="(max-width: 720px) 100vw, (max-width: 1100px) 40vw, 28vw"
                  className="editorial-image"
                />
              </div>
            </div>

            <div className="photobook-spread__page photobook-spread__page--quiet photobook-spread__page--centered">
              <div className="project-book-close">
                <p className="photobook-copy__label">Close volume</p>
                <h2 className="project-book-note__title">Back to works</h2>
                <Link href="/projects" className="project-book-backlink">
                  View all projects
                </Link>
              </div>
            </div>

            <div className="photobook-spread__footer">
              <span>{project.client}</span>
              <span>03 / 03</span>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
