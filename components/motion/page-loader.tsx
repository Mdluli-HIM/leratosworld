'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP);
}

export function PageLoader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const hasSeenLoader = window.sessionStorage.getItem('cd-loader-seen');

    if (!hasSeenLoader) {
      setActive(true);
      window.sessionStorage.setItem('cd-loader-seen', 'true');
    }
  }, []);

  useGSAP(
    () => {
      if (!active || !rootRef.current) return;

      const overlay = rootRef.current;
      const title = overlay.querySelector('[data-loader-title]');
      const meta = overlay.querySelector('[data-loader-meta]');
      const line = overlay.querySelector('[data-loader-line]');
      const counter = overlay.querySelector('[data-loader-count]');
      const progressValue = { value: 0 };

      if (!title || !meta || !line || !counter) return;

      const tl = gsap.timeline({
        defaults: { ease: 'power3.inOut' },
        onComplete: () => {
          gsap.set(overlay, { display: 'none' });
          setActive(false);
        },
      });

      tl.fromTo(title, { yPercent: 100 }, { yPercent: 0, duration: 0.8 })
        .fromTo(
          meta,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          0.2
        )
        .fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 0.85 }, 0.1)
        .to(
          progressValue,
          {
            value: 100,
            duration: 1.2,
            onUpdate: () => {
              if (!counter) return;
              counter.textContent = String(
                Math.round(progressValue.value)
              ).padStart(2, '0');
            },
          },
          0
        )
        .to(
          [title, meta, counter],
          { y: -18, opacity: 0, duration: 0.45 },
          '+=0.15'
        )
        .to(
          line,
          { scaleX: 0, transformOrigin: 'right center', duration: 0.45 },
          '<'
        )
        .to(overlay, { yPercent: -100, duration: 0.95 }, '-=0.05');
    },
    { dependencies: [active], scope: rootRef }
  );

  if (!active) {
    return null;
  }

  return (
    <div className="page-loader" ref={rootRef}>
      <div className="page-loader__inner">
        <div className="page-loader__meta" data-loader-meta>
          <span>Monochrome portfolio</span>
          <span data-loader-count>00</span>
        </div>
        <div className="page-loader__title-wrap">
          <div className="page-loader__title-mask">
            <p className="page-loader__title" data-loader-title>
              Cathy Dolle
            </p>
          </div>
        </div>
        <div className="page-loader__line" data-loader-line />
      </div>
    </div>
  );
}
