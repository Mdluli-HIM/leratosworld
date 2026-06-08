import type { CSSProperties } from 'react';
import Image from 'next/image';

import { AlbumVideo } from '@/components/media/album-video';
import { home } from '@/content/media';

const spreadOne = {
  left: {
    src: home.spread01,
    alt: 'Lerato — spread 01',
    position: 'center 18%',
    mobilePosition: 'center 20%',
  },
};

const spreadTwo = [
  {
    src: home.spread02a,
    alt: 'Lerato — spread 02a',
    position: 'center 18%',
    mobilePosition: 'center 20%',
    className: 'photobook-collage__item photobook-collage__item--tall',
  },
  {
    src: home.spread02b,
    alt: 'Lerato — spread 02b',
    position: 'center 16%',
    mobilePosition: 'center 18%',
    className: 'photobook-collage__item photobook-collage__item--square',
  },
  {
    src: home.spread02c,
    alt: 'Lerato — spread 02c',
    position: 'center 48%',
    mobilePosition: 'center 52%',
    className: 'photobook-collage__item photobook-collage__item--landscape',
  },
];

const spreadThree = {
  left: {
    src: home.spread03Left,
    alt: 'Lerato — spread 03 left',
    position: 'center 56%',
    mobilePosition: 'center 60%',
  },
  right: {
    src: home.spread03Right,
    alt: 'Lerato — spread 03 right',
    position: 'center 52%',
    mobilePosition: 'center 56%',
  },
};

export function HomeLookbook() {
  const [videoOne, videoTwo] = home.videos;

  return (
    <section className="section photobook-sections">
      <div className="page-shell">
        <div className="visual-home-rail" data-reveal>
          <span>02</span>
          <span>Photo spreads</span>
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
              <p className="photobook-copy__label">Spread 01</p>
              <h2 className="photobook-copy__title">Her smile</h2>
            </div>
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
              <p className="photobook-copy__label">Spread 02</p>
              <h2 className="photobook-copy__title">Good times</h2>
            </div>
          </div>
        </article>

        {videoOne ? (
          <article className="photobook-spread photobook-spread--video" data-reveal>
            <div className="photobook-spread__page photobook-spread__page--video">
              <AlbumVideo src={videoOne} autoPlay={false} />
            </div>

            <div className="photobook-spread__page photobook-spread__page--dark photobook-spread__page--centered">
              <div className="photobook-copy photobook-copy--composition">
                <p className="photobook-copy__label">Moving memory</p>
                <h2 className="photobook-copy__title">In motion</h2>
              </div>
            </div>
          </article>
        ) : null}

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
            {videoTwo ? (
              <div className="photobook-image photobook-image--landscape photobook-image--landscape-refined photobook-image--video">
                <AlbumVideo src={videoTwo} autoPlay={false} />
              </div>
            ) : (
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
            )}
          </div>
        </article>
      </div>
    </section>
  );
}
