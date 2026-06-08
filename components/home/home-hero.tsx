import type { CSSProperties } from 'react';
import Image from 'next/image';

import { home } from '@/content/media';
import { site } from '@/content/site';

const cover = {
  src: home.cover,
  alt: 'Lerato — album cover',
  position: 'center 22%',
  mobilePosition: 'center 24%',
};

const spread = {
  left: {
    src: home.openingLeft,
    alt: 'Lerato — opening spread left',
    position: 'center 20%',
    mobilePosition: 'center 22%',
  },
  right: {
    src: home.openingRight,
    alt: 'Lerato — opening spread right',
    position: 'center 24%',
    mobilePosition: 'center 28%',
  },
};

export function HomeHero() {
  return (
    <section className="section photobook-home-hero">
      <div className="page-shell">
        <div className="visual-home-rail" data-reveal>
          <span>01</span>
          <span>Album cover</span>
        </div>

        <div className="photobook-hero-grid photobook-hero-grid--balanced">
          <article className="book-cover book-cover--refined" data-reveal>
            <div className="book-cover__topline">
              <span>{site.albumLabel}</span>
              <span>Birthday gift</span>
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
              <p className="book-cover__eyebrow">{site.name}</p>

              <div className="book-cover__title-group">
                <h1 className="book-cover__title">
                  Her
                  <br />
                  Album
                </h1>

                <div className="book-cover__meta">
                  <span>Birthday</span>
                  <span>{site.birthday}</span>
                  <span>Ten years</span>
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
                  A collection of moments made for {site.shortName} — continue being the beautiful soul you are.
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
          </article>
        </div>
      </div>
    </section>
  );
}
