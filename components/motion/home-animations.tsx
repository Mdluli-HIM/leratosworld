'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function HomeAnimations() {
  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    gsap.from('[data-hero-line]', {
      y: 48,
      opacity: 0,
      duration: 1,
      stagger: 0.12,
      ease: 'power3.out',
      clearProps: 'all',
      delay: 0.25,
    });

    gsap.from('[data-hero-panel]', {
      y: 56,
      opacity: 0,
      scale: 0.96,
      duration: 1.1,
      stagger: 0.12,
      ease: 'power3.out',
      clearProps: 'all',
      delay: 0.35,
    });

    gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
      gsap.fromTo(
        element,
        { y: 56, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: element,
            start: 'top 88%',
            once: true,
          },
        }
      );
    });

    gsap.to('[data-marquee-track]', {
      xPercent: -20,
      duration: 18,
      ease: 'none',
      repeat: -1,
    });
  }, []);

  return null;
}
