import Image from 'next/image';
import Link from 'next/link';

import { about } from '@/content/media';
import { site } from '@/content/site';

const qualities = [
  'Beautiful inside and out',
  'Deeply emotional',
  'Ten years of knowing you',
  'Worth every single memory',
];

const notes = [
  `Born ${site.birthday}`,
  'A birthday gift — just for you',
  'Your life, in pictures',
  site.name,
];

const socials = [site.socials.instagram, site.socials.spotify];

export default function AboutPage() {
  return (
    <main className="about-book-page">
      <div className="page-shell">
        <div className="project-book-rail" data-reveal>
          <span>Birthday gift</span>
          <span>About</span>
          <span>{site.name}</span>
        </div>

        <section className="photobook-spread about-book-spread" data-reveal>
          <div className="photobook-spread__page photobook-spread__page--dark">
            <div className="about-book-foreword">
              <p className="photobook-copy__label">For you</p>
              <h1 className="project-book-note__title">
                A beautiful 
                <br />
                Soul
              </h1>
              <p className="about-book-small">
              
              </p>
            </div>
          </div>

          <div className="photobook-spread__page photobook-spread__page--quiet">
            <div className="photobook-image photobook-image--portrait">
              <Image
                src={about.foreword}
                alt="Lerato — about page portrait"
                fill
                priority
                sizes="(max-width: 720px) 100vw, (max-width: 1100px) 42vw, 28vw"
                className="editorial-image"
              />
            </div>
          </div>
        </section>

        <section className="photobook-spread about-book-spread" data-reveal>
          <div className="photobook-spread__page photobook-spread__page--quiet">
            <div className="about-book-essay">
              <p className="photobook-copy__label">A note</p>

              <div className="about-book-paragraphs">
                <p>
                  I have known you for years now — a full decade of
                  laughter, late conversations, and the kind of Relationship that
                  does not need explaining.
                </p>
                <p>
                  You are beautiful in ways that go far beyond what any picture
                  can hold, and you feel everything deeply. That is not a
                  weakness. It is one of the truest things about you.
                </p>
                <p>
                  Born on {site.birthday}, you deserve something made with
                  care. So this album exists — a small world put together for
                  your birthday.
                </p>
              </div>
            </div>
          </div>

          <div className="photobook-spread__page photobook-spread__page--centered">
            <div className="about-book-principles">
              <p className="photobook-copy__label">What I see in you</p>

              <div className="about-book-principles__list">
                {qualities.map((quality) => (
                  <div key={quality} className="about-book-principle">
                    {quality}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="photobook-spread about-book-spread" data-reveal>
          <div className="photobook-spread__page">
            <div className="about-book-notes">
              <p className="photobook-copy__label">Album details</p>

              <div className="about-book-notes__list">
                {notes.map((note) => (
                  <div key={note} className="about-book-note-row">
                    <span>{note}</span>
                  </div>
                ))}
              </div>

              <div className="about-book-socials">
                <p className="photobook-copy__label">Her world</p>
                <div className="contact-book-socials">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="contact-book-social"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="photobook-spread__page photobook-spread__page--dark photobook-spread__page--centered">
            <div className="about-book-close">
              <p className="photobook-copy__label">Turn the page</p>
              <Link href="/gallery" className="about-album-link">
                <h2 className="project-book-note__title">Open the album</h2>
                <span className="about-album-link__hint">View gallery →</span>
              </Link>
              <p className="about-colour-hint">
                Flip the site palette anytime with the{' '}
                <span className="about-colour-hint__mark">colourme</span> button
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
