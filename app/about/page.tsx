import Image from 'next/image';
import Link from 'next/link';

const principles = [
  'Image-led storytelling',
  'Editorial pacing',
  'Monochrome restraint',
  'Motion with purpose',
];

const notes = [
  'Freelance designer & developer',
  'Portfolio and photography websites',
  'Next.js / GSAP / Three.js',
  'Selected commissions only',
];

export default function AboutPage() {
  return (
    <main className="about-book-page">
      <div className="page-shell">
        <div className="project-book-rail" data-reveal>
          <span>Foreword</span>
          <span>About</span>
          <span>Cathy Dolle</span>
        </div>

        <section className="photobook-spread about-book-spread" data-reveal>
          <div className="photobook-spread__page photobook-spread__page--dark">
            <div className="about-book-foreword">
              <p className="photobook-copy__label">Opening essay</p>
              <h1 className="project-book-note__title">
                Visual rhythm
                <br />
                in digital form
              </h1>
              <p className="about-book-small">
                Cathy Dolle is a freelance designer and developer building
                refined digital experiences where typography, image sequencing,
                motion, and code work together like pages in a printed
                publication.
              </p>
            </div>
          </div>

          <div className="photobook-spread__page photobook-spread__page--quiet">
            <div className="photobook-image photobook-image--portrait">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1400&q=80"
                alt="Monochrome portrait used as the about page foreword image."
                fill
                priority
                sizes="(max-width: 720px) 100vw, (max-width: 1100px) 42vw, 28vw"
                className="editorial-image"
              />
            </div>
          </div>

          <div className="photobook-spread__footer">
            <span>Foreword</span>
            <span>01 / 03</span>
          </div>
        </section>

        <section className="photobook-spread about-book-spread" data-reveal>
          <div className="photobook-spread__page photobook-spread__page--quiet">
            <div className="about-book-essay">
              <p className="photobook-copy__label">Practice</p>

              <div className="about-book-paragraphs">
                <p>
                  The strongest portfolios feel edited, not assembled. They give
                  each image space, let typography lead, and use motion only
                  when it sharpens attention.
                </p>
                <p>
                  My work is shaped by editorial systems, strong composition,
                  and the belief that a website can feel as intentional as a
                  printed object.
                </p>
                <p>
                  I focus on art direction, interaction structure, and front-end
                  implementation so the final experience remains coherent from
                  concept to build.
                </p>
              </div>
            </div>
          </div>

          <div className="photobook-spread__page photobook-spread__page--centered">
            <div className="about-book-principles">
              <p className="photobook-copy__label">Principles</p>

              <div className="about-book-principles__list">
                {principles.map((principle) => (
                  <div key={principle} className="about-book-principle">
                    {principle}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="photobook-spread__footer">
            <span>Approach</span>
            <span>02 / 03</span>
          </div>
        </section>

        <section className="photobook-spread about-book-spread" data-reveal>
          <div className="photobook-spread__page">
            <div className="about-book-notes">
              <p className="photobook-copy__label">Chapter notes</p>

              <div className="about-book-notes__list">
                {notes.map((note) => (
                  <div key={note} className="about-book-note-row">
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="photobook-spread__page photobook-spread__page--dark photobook-spread__page--centered">
            <div className="about-book-close">
              <p className="photobook-copy__label">Next page</p>
              <h2 className="project-book-note__title">Open the work</h2>
              <Link href="/projects" className="project-book-backlink">
                View projects
              </Link>
            </div>
          </div>

          <div className="photobook-spread__footer">
            <span>Cathy Dolle</span>
            <span>03 / 03</span>
          </div>
        </section>
      </div>
    </main>
  );
}
