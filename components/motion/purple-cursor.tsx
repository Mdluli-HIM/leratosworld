'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function PurpleCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;

    if (!cursor || !dot) return;

    const isTouchDevice =
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(hover: none)').matches;

    if (isTouchDevice) {
      return;
    }

    document.documentElement.classList.add('has-purple-cursor');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    const setDotX = gsap.quickSetter(dot, 'x', 'px');
    const setDotY = gsap.quickSetter(dot, 'y', 'px');
    const setRingX = gsap.quickSetter(cursor, 'x', 'px');
    const setRingY = gsap.quickSetter(cursor, 'y', 'px');

    const showCursor = () => {
      gsap.to([cursor, dot], {
        autoAlpha: 1,
        duration: 0.22,
        ease: 'power2.out',
        overwrite: true,
      });
    };

    const hideCursor = () => {
      gsap.to([cursor, dot], {
        autoAlpha: 0,
        duration: 0.2,
        ease: 'power2.out',
        overwrite: true,
      });
    };

    const onMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      setDotX(mouseX);
      setDotY(mouseY);
      showCursor();
    };

    const onEnter = () => showCursor();
    const onLeave = () => hideCursor();

    const onPointerOver = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, .gallery-tile'
      );

      if (interactive) {
        cursor.dataset.state = 'active';
      } else {
        delete cursor.dataset.state;
      }
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      setRingX(ringX);
      setRingY(ringY);
    };

    gsap.ticker.add(tick);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onPointerOver);
    window.addEventListener('mouseenter', onEnter);
    window.addEventListener('mouseleave', onLeave);

    return () => {
      document.documentElement.classList.remove('has-purple-cursor');
      gsap.ticker.remove(tick);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onPointerOver);
      window.removeEventListener('mouseenter', onEnter);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="purple-cursor" aria-hidden="true" />
      <div ref={dotRef} className="purple-cursor-dot" aria-hidden="true" />
    </>
  );
}
