'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function GlobalReveals() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reduceMotion) {
      document.documentElement.classList.remove('motion-ready');
      return;
    }

    document.documentElement.classList.add('motion-ready');

    const ctx = gsap.context(() => {
      const revealItems = gsap.utils.toArray<HTMLElement>('[data-reveal]');

      revealItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            autoAlpha: 0,
            y: 30,
            scale: 0.985,
            filter: 'blur(8px)',
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.95,
            delay: index * 0.03,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 88%',
              once: true,
            },
          }
        );
      });

      const imageFrames = gsap.utils.toArray<HTMLElement>(
        '.book-cover__image, .photobook-image, .volume-card__image, .project-book-collage__item'
      );

      imageFrames.forEach((frame) => {
        gsap.fromTo(
          frame,
          {
            scale: 1.035,
            autoAlpha: 0.96,
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: frame,
              start: 'top 92%',
              once: true,
            },
          }
        );
      });

      const rails = gsap.utils.toArray<HTMLElement>(
        '.visual-home-rail, .project-book-rail, .site-footer-book__rail, .library-shelf-heading'
      );

      rails.forEach((rail) => {
        gsap.fromTo(
          rail,
          {
            autoAlpha: 0,
            y: 10,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: 'power2.out',
          }
        );
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    });

    return () => {
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
