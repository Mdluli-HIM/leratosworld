import type { CSSProperties } from 'react';
import Image from 'next/image';

const spreadOne = {
  left: {
    src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
    alt: 'Portrait image placed on a quiet white page with large margins.',
    position: 'center 18%',
    mobilePosition: 'center 20%',
  },
};

const spreadTwo = [
  {
    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80',
    alt: 'Full body monochrome fashion portrait.',
    position: 'center 18%',
    mobilePosition: 'center 20%',
    className: 'photobook-collage__item photobook-collage__item--tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=80',
    alt: 'Quiet portrait crop with soft shadow.',
    position: 'center 16%',
    mobilePosition: 'center 18%',
    className: 'photobook-collage__item photobook-collage__item--square',
  },
  {
    src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80',
    alt: 'Editorial crop with stronger negative space.',
    position: 'center 48%',
    mobilePosition: 'center 52%',
    className: 'photobook-collage__item photobook-collage__item--landscape',
  },
];

const spreadThree = {
  left: {
    src: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=1400&q=80',
    alt: 'Figure in motion with dramatic contrast.',
    position: 'center 56%',
    mobilePosition: 'center 60%',
  },
  right: {
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
    alt: 'Atmospheric editorial landscape composition.',
    position: 'center 52%',
    mobilePosition: 'center 56%',
  },
};

export function HomeLookbook() {
  return (
    <section className="section photobook-sections">
      <div className="page-shell">
        <div className="visual-home-rail" data-reveal>
          <span>04</span>
          <span>Picture book</span>
        </div>

        <article
          className="photobook-spread photobook-spread--composition"
          data-reveal
        >
          <div className="photobook-spread__page photobook-spread__page--quiet photobook-spread__page--composition-left">
            <div
              className="photobook-image photobook-image--small photobook-image--small-refined"
              style={
                {
                  '--image-position': spreadOne.left.position,
                  '--image-position-mobile': spreadOne.left.mobilePosition,
                } as CSSProperties
              }
            >
              <Image
                src={spreadOne.left.src}
                alt={spreadOne.left.alt}
                fill
                sizes="(max-width: 720px) 100vw, (max-width: 1100px) 34vw, 22vw"
                className="editorial-image"
              />
            </div>
          </div>

          <div className="photobook-spread__page photobook-spread__page--dark photobook-spread__page--composition-copy">
            <div className="photobook-copy photobook-copy--composition">
              <p className="photobook-copy__label">Chapter 01</p>
              <h2 className="photobook-copy__title">Portrait studies</h2>
            </div>
          </div>

          <div className="photobook-spread__footer">
            <span>Quiet sequence</span>
            <span>01 / 03</span>
          </div>
        </article>

        <article
          className="photobook-spread photobook-spread--composition"
          data-reveal
        >
          <div className="photobook-spread__page photobook-spread__page--collage">
            <div className="photobook-collage photobook-collage--refined">
              {spreadTwo.map((image) => (
                <div
                  key={image.src}
                  className={image.className}
                  style={
                    {
                      '--image-position': image.position,
                      '--image-position-mobile': image.mobilePosition,
                    } as CSSProperties
                  }
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 720px) 100vw, (max-width: 1100px) 24vw, 16vw"
                    className="editorial-image"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="photobook-spread__page photobook-spread__page--quiet photobook-spread__page--centered">
            <div className="photobook-copy photobook-copy--tiny photobook-copy--composition">
              <p className="photobook-copy__label">Chapter 02</p>
              <h2 className="photobook-copy__title">Sequence</h2>
            </div>
          </div>

          <div className="photobook-spread__footer">
            <span>Image first</span>
            <span>02 / 03</span>
          </div>
        </article>

        <article
          className="photobook-spread photobook-spread--composition"
          data-reveal
        >
          <div className="photobook-spread__page photobook-spread__page--composition-left">
            <div
              className="photobook-image photobook-image--portrait photobook-image--portrait-refined"
              style={
                {
                  '--image-position': spreadThree.left.position,
                  '--image-position-mobile': spreadThree.left.mobilePosition,
                } as CSSProperties
              }
            >
              <Image
                src={spreadThree.left.src}
                alt={spreadThree.left.alt}
                fill
                sizes="(max-width: 720px) 100vw, (max-width: 1100px) 40vw, 26vw"
                className="editorial-image"
              />
            </div>
          </div>

          <div className="photobook-spread__page photobook-spread__page--quiet photobook-spread__page--composition-right">
            <div
              className="photobook-image photobook-image--landscape photobook-image--landscape-refined"
              style={
                {
                  '--image-position': spreadThree.right.position,
                  '--image-position-mobile': spreadThree.right.mobilePosition,
                } as CSSProperties
              }
            >
              <Image
                src={spreadThree.right.src}
                alt={spreadThree.right.alt}
                fill
                sizes="(max-width: 720px) 100vw, (max-width: 1100px) 40vw, 26vw"
                className="editorial-image"
              />
            </div>
          </div>

          <div className="photobook-spread__footer">
            <span>Open spread</span>
            <span>03 / 03</span>
          </div>
        </article>
      </div>
    </section>
  );
}
