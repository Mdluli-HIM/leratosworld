'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP);
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!rootRef.current || !contentRef.current || !curtainRef.current)
        return;

      const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (reduceMotion) {
        gsap.set(curtainRef.current, { display: 'none' });
        return;
      }

      const tl = gsap.timeline();

      tl.set(curtainRef.current, {
        transformOrigin: 'top center',
        scaleY: 1,
      })
        .fromTo(
          contentRef.current,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            clearProps: 'all',
          },
          0.22
        )
        .to(curtainRef.current, {
          scaleY: 0,
          duration: 0.85,
          ease: 'power4.inOut',
        });
    },
    { dependencies: [pathname], scope: rootRef, revertOnUpdate: true }
  );

  return (
    <div ref={rootRef} className="page-transition">
      <div
        ref={curtainRef}
        className="page-transition__curtain"
        aria-hidden="true"
      />
      <div ref={contentRef}>{children}</div>
    </div>
  );
}
