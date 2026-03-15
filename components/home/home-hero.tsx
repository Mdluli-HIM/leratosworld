import type { CSSProperties } from 'react';
import Image from 'next/image';

const cover = {
  src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80',
  alt: 'Monochrome portrait used as the photobook cover image.',
  position: 'center 22%',
  mobilePosition: 'center 24%',
};

const spread = {
  left: {
    src: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1400&q=80',
    alt: 'Quiet editorial portrait framed with generous white page space.',
    position: 'center 20%',
    mobilePosition: 'center 22%',
  },
  right: {
    src: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1600&q=80',
    alt: 'Large monochrome fashion image used as the opening right-hand spread.',
    position: 'center 24%',
    mobilePosition: 'center 28%',
  },
};

export function HomeHero() {
  return (
    <section className="section photobook-home-hero">
      <div className="page-shell">
        <div className="visual-home-rail" data-reveal>
          <span>05</span>
          <span>Cover / Opening spread</span>
        </div>

        <div className="photobook-hero-grid photobook-hero-grid--balanced">
          <article className="book-cover book-cover--refined" data-reveal>
            <div className="book-cover__topline">
              <span>Vol. 01</span>
              <span>Portfolio</span>
            </div>

            <div
              className="book-cover__image book-cover__image--refined"
              style={
                {
                  '--image-position': cover.position,
                  '--image-position-mobile': cover.mobilePosition,
                } as CSSProperties
              }
            >
              <Image
                src={cover.src}
                alt={cover.alt}
                fill
                priority
                sizes="(max-width: 720px) 100vw, (max-width: 1100px) 40vw, 24vw"
                className="editorial-image"
              />
            </div>

            <div className="book-cover__body book-cover__body--refined">
              <p className="book-cover__eyebrow">Cathy Dolle</p>

              <div className="book-cover__title-group">
                <h1 className="book-cover__title">
                  Photo
                  <br />
                  Book
                </h1>

                <div className="book-cover__meta">
                  <span>Photography</span>
                  <span>Web & Interactive</span>
                  <span>UI Design</span>
                </div>
              </div>
            </div>
          </article>

          <article
            className="photobook-spread photobook-spread--hero photobook-spread--hero-refined"
            data-reveal
          >
            <div className="photobook-spread__page photobook-spread__page--quiet photobook-spread__page--intro">
              <div
                className="photobook-image photobook-image--floating photobook-image--floating-refined"
                style={
                  {
                    '--image-position': spread.left.position,
                    '--image-position-mobile': spread.left.mobilePosition,
                  } as CSSProperties
                }
              >
                <Image
                  src={spread.left.src}
                  alt={spread.left.alt}
                  fill
                  sizes="(max-width: 720px) 100vw, (max-width: 1100px) 36vw, 22vw"
                  className="editorial-image"
                />
              </div>

              <div className="photobook-intro-note">
                <p className="photobook-copy__label">Opening note</p>
                <p className="photobook-intro-note__text">
                  Monochrome digital work arranged with the pace of a printed
                  editorial sequence.
                </p>
              </div>
            </div>

            <div className="photobook-spread__page photobook-spread__page--hero-image">
              <div
                className="photobook-image photobook-image--full photobook-image--full-refined"
                style={
                  {
                    '--image-position': spread.right.position,
                    '--image-position-mobile': spread.right.mobilePosition,
                  } as CSSProperties
                }
              >
                <Image
                  src={spread.right.src}
                  alt={spread.right.alt}
                  fill
                  sizes="(max-width: 720px) 100vw, (max-width: 1100px) 60vw, 42vw"
                  className="editorial-image"
                />
              </div>
            </div>

            <div className="photobook-spread__footer">
              <span>Opening spread</span>
              <span>2026</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
