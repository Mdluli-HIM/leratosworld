'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useMemo, useRef, useState } from 'react';

import {
  getLoaderImages,
  loaderPhotoLayouts,
} from '@/content/loader-images';
import { site } from '@/content/site';

const STORAGE_KEY = 'lerato-album-intro-seen';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP);
}

export function PageLoader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const loaderImages = useMemo(() => getLoaderImages(), []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const hasSeenLoader = window.localStorage.getItem(STORAGE_KEY);

    if (!hasSeenLoader) {
      setActive(true);
      window.localStorage.setItem(STORAGE_KEY, 'true');
    }
  }, []);

  useGSAP(
    () => {
      if (!active || !rootRef.current) return;

      const overlay = rootRef.current;
      const photos = gsap.utils.toArray<HTMLElement>('[data-loader-photo]');
      const glow = overlay.querySelector('[data-loader-glow]');
      const veil = overlay.querySelector('[data-loader-veil]');
      const title = overlay.querySelector('[data-loader-title]');
      const subtitle = overlay.querySelector('[data-loader-subtitle]');
      const meta = overlay.querySelector('[data-loader-meta]');
      const line = overlay.querySelector('[data-loader-line]');
      const counter = overlay.querySelector('[data-loader-count]');
      const progressValue = { value: 0 };

      if (
        !glow ||
        !veil ||
        !title ||
        !subtitle ||
        !meta ||
        !line ||
        !counter ||
        photos.length === 0
      ) {
        return;
      }

      photos.forEach((photo, index) => {
        const layout = loaderPhotoLayouts[index] ?? loaderPhotoLayouts[0];

        gsap.set(photo, {
          xPercent: layout.x,
          yPercent: layout.y,
          rotation: layout.rotate,
          scale: layout.scale * 0.15,
          opacity: 0,
          filter: 'blur(12px)',
        });
      });

      gsap.set([title, subtitle, meta, line], { opacity: 0 });
      gsap.set(title, { yPercent: 120 });
      gsap.set(subtitle, { y: 18 });
      gsap.set(meta, { y: 16 });
      gsap.set(line, { scaleX: 0 });
      gsap.set(glow, { opacity: 0, scale: 0.6 });
      gsap.set(veil, { opacity: 0.45 });

      const tl = gsap.timeline({
        defaults: { ease: 'power3.inOut' },
        onComplete: () => {
          gsap.set(overlay, { display: 'none' });
          setActive(false);
        },
      });

      tl.to(glow, { opacity: 0.85, scale: 1.15, duration: 1.4, ease: 'power2.out' }, 0)
        .to(
          photos,
          {
            opacity: 1,
            scale: (index) =>
              (loaderPhotoLayouts[index] ?? loaderPhotoLayouts[0]).scale,
            rotation: (index) =>
              (loaderPhotoLayouts[index] ?? loaderPhotoLayouts[0]).rotate,
            filter: 'blur(0px)',
            duration: 1.15,
            stagger: {
              each: 0.07,
              from: 'center',
            },
            ease: 'power4.out',
          },
          0.15
        )
        .to(
          photos,
          {
            y: '-=10',
            rotation: '+=4',
            duration: 1.8,
            yoyo: true,
            repeat: 1,
            ease: 'sine.inOut',
            stagger: {
              each: 0.04,
              from: 'random',
            },
          },
          '-=0.55'
        )
        .to(
          progressValue,
          {
            value: 100,
            duration: 2.4,
            ease: 'power2.inOut',
            onUpdate: () => {
              counter.textContent = String(
                Math.round(progressValue.value)
              ).padStart(2, '0');
            },
          },
          0.35
        )
        .to(veil, { opacity: 0.72, duration: 0.8 }, 0.9)
        .to(title, { yPercent: 0, opacity: 1, duration: 0.9, ease: 'power4.out' }, 1.1)
        .to(subtitle, { y: 0, opacity: 1, duration: 0.7 }, 1.25)
        .to(meta, { y: 0, opacity: 1, duration: 0.65 }, 1.35)
        .to(line, { scaleX: 1, duration: 0.85 }, 1.3)
        .to([title, subtitle, meta, counter], { opacity: 0, y: -16, duration: 0.5 }, '+=0.35')
        .to(line, { scaleX: 0, transformOrigin: 'right center', duration: 0.45 }, '<')
        .to(
          photos,
          {
            opacity: 0,
            scale: (index) =>
              ((loaderPhotoLayouts[index] ?? loaderPhotoLayouts[0]).scale +
                0.35) *
              1.2,
            xPercent: (index) => {
              const layout = loaderPhotoLayouts[index] ?? loaderPhotoLayouts[0];
              return layout.x * 1.8 + gsap.utils.random(-12, 12);
            },
            yPercent: (index) => {
              const layout = loaderPhotoLayouts[index] ?? loaderPhotoLayouts[0];
              return layout.y * 1.8 + gsap.utils.random(-12, 12);
            },
            rotation: (index) =>
              (loaderPhotoLayouts[index] ?? loaderPhotoLayouts[0]).rotate +
              gsap.utils.random(-24, 24),
            filter: 'blur(8px)',
            duration: 0.95,
            stagger: { each: 0.03, from: 'center' },
            ease: 'power3.in',
          },
          '<0.05'
        )
        .to(glow, { opacity: 0, scale: 1.65, duration: 0.85 }, '<')
        .to(veil, { opacity: 1, duration: 0.55 }, '<0.15')
        .to(overlay, { opacity: 0, duration: 0.7, ease: 'power2.inOut' }, '-=0.2');
    },
    { dependencies: [active, loaderImages.length], scope: rootRef }
  );

  if (!active) {
    return null;
  }

  return (
    <div className="page-loader page-loader--magical" ref={rootRef} aria-hidden="true">
      <div className="page-loader__shower">
        <div className="page-loader__glow" data-loader-glow />
        {loaderImages.map((src, index) => (
          <div
            key={src}
            className="page-loader__photo"
            data-loader-photo
            style={{ zIndex: index + 1 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" draggable={false} />
          </div>
        ))}
      </div>

      <div className="page-loader__veil" data-loader-veil />

      <div className="page-loader__inner page-loader__inner--magical">
        <div className="page-loader__meta" data-loader-meta>
          <span>Opening your album</span>
          <span data-loader-count>00</span>
        </div>

        <div className="page-loader__title-wrap">
          <div className="page-loader__title-mask">
            <p className="page-loader__title" data-loader-title>
              {site.name}
            </p>
          </div>
          <p className="page-loader__subtitle" data-loader-subtitle>
            A birthday gift — just for you
          </p>
        </div>

        <div className="page-loader__line" data-loader-line />
      </div>
    </div>
  );
}
