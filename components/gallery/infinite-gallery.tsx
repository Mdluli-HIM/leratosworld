'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';

import { galleryItems } from '@/content/gallery-items';

type Tile = {
  id: string;
  title: string;
  src: string;
  alt: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

type GalleryLayout = {
  tileW: number;
  tileH: number;
  gapX: number;
  gapY: number;
  cols: number;
};

const DRAG_THRESHOLD = 6;
const LIGHTBOX_SWIPE_THRESHOLD = 42;

function buildTiles(layout: GalleryLayout) {
  return galleryItems.map((item, index) => {
    const col = index % layout.cols;
    const row = Math.floor(index / layout.cols);

    const rowOffset = row % 2 === 0 ? 0 : layout.tileH * 0.08;
    const colOffset = col % 2 === 0 ? 0 : layout.tileW * 0.06;

    return {
      ...item,
      x: col * (layout.tileW + layout.gapX) + colOffset,
      y: row * (layout.tileH + layout.gapY) + rowOffset,
      w: layout.tileW,
      h: layout.tileH,
    };
  });
}

export function InfiniteGallery() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const lightboxWheelLockRef = useRef(false);
  const lightboxSwipeRef = useRef({
    startX: 0,
    startY: 0,
    active: false,
  });

  const dragState = useRef({
    active: false,
    moved: false,
    startX: 0,
    startY: 0,
    originX: 0,
    originY: 0,
    pressedIndex: null as number | null,
  });

  const [viewportWidth, setViewportWidth] = useState(1440);
  const [hintVisible, setHintVisible] = useState(true);
  const [isColorMode, setIsColorMode] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const updateWidth = () => setViewportWidth(window.innerWidth);
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const isMobile = viewportWidth <= 720;

  const layout = useMemo<GalleryLayout>(() => {
    if (viewportWidth <= 720) {
      return {
        tileW: 132,
        tileH: 176,
        gapX: 24,
        gapY: 26,
        cols: 3,
      };
    }

    if (viewportWidth <= 980) {
      return {
        tileW: 188,
        tileH: 248,
        gapX: 42,
        gapY: 42,
        cols: 4,
      };
    }

    return {
      tileW: 260,
      tileH: 330,
      gapX: 96,
      gapY: 92,
      cols: 5,
    };
  }, [viewportWidth]);

  const tiles = useMemo(() => buildTiles(layout), [layout]);
  const rows = Math.ceil(galleryItems.length / layout.cols);
  const totalWidth = layout.cols * (layout.tileW + layout.gapX);
  const totalHeight = rows * (layout.tileH + layout.gapY);

  const goNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return 0;
      return (current + 1) % galleryItems.length;
    });
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return 0;
      return (current - 1 + galleryItems.length) % galleryItems.length;
    });
  }, []);

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setHintVisible(false);
    }, 1800);

    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') goNext();
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') goPrev();
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeIndex, closeLightbox, goNext, goPrev]);

  useEffect(() => {
    const viewport = viewportRef.current;
    const stage = stageRef.current;

    if (!viewport || !stage) return;

    let targetX = -totalWidth * (isMobile ? 0.52 : 0.32);
    let targetY = -totalHeight * (isMobile ? 0.28 : 0.18);
    let currentX = targetX;
    let currentY = targetY;
    let vx = 0;
    let vy = 0;

    const wrapX = gsap.utils.wrap(-totalWidth, 0);
    const wrapY = gsap.utils.wrap(-totalHeight, 0);
    const setX = gsap.quickSetter(stage, 'x', 'px');
    const setY = gsap.quickSetter(stage, 'y', 'px');

    const spring = isMobile ? 0.14 : 0.1;
    const friction = isMobile ? 0.74 : 0.8;

    const render = () => {
      vx += (targetX - currentX) * spring;
      vy += (targetY - currentY) * spring;

      vx *= friction;
      vy *= friction;

      currentX += vx;
      currentY += vy;

      setX(wrapX(currentX));
      setY(wrapY(currentY));
    };

    const ticker = () => render();
    gsap.ticker.add(ticker);

    const onWheel = (event: WheelEvent) => {
      if (activeIndex !== null) return;

      event.preventDefault();

      const dx = event.deltaX;
      const dy = event.deltaY;

      targetX -= dx;
      targetY -= dy;

      if (Math.abs(dx) < 0.5 && event.shiftKey) {
        targetX -= dy * 0.9;
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      if (activeIndex !== null) return;

      const target = event.target as HTMLElement | null;
      const tile = target?.closest<HTMLElement>('[data-gallery-index]');
      const indexValue = tile?.dataset.galleryIndex;
      const parsedIndex = indexValue ? Number(indexValue) : null;

      dragState.current.active = true;
      dragState.current.moved = false;
      dragState.current.startX = event.clientX;
      dragState.current.startY = event.clientY;
      dragState.current.originX = targetX;
      dragState.current.originY = targetY;
      dragState.current.pressedIndex =
        parsedIndex !== null && !Number.isNaN(parsedIndex) ? parsedIndex : null;

      viewport.setPointerCapture(event.pointerId);
      viewport.dataset.dragging = 'true';
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!dragState.current.active || activeIndex !== null) return;

      const dx = event.clientX - dragState.current.startX;
      const dy = event.clientY - dragState.current.startY;

      if (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD) {
        dragState.current.moved = true;
      }

      if (!dragState.current.moved) return;

      targetX = dragState.current.originX + dx;
      targetY = dragState.current.originY + dy;
    };

    const onPointerUp = (event: PointerEvent) => {
      if (!dragState.current.active) return;

      const moved = dragState.current.moved;
      const pressedIndex = dragState.current.pressedIndex;

      dragState.current.active = false;
      dragState.current.moved = false;
      dragState.current.pressedIndex = null;

      if (viewport.hasPointerCapture(event.pointerId)) {
        viewport.releasePointerCapture(event.pointerId);
      }

      delete viewport.dataset.dragging;

      if (activeIndex !== null || moved) return;
      if (pressedIndex === null) return;

      setActiveIndex(pressedIndex);
    };

    const onPointerCancel = (event: PointerEvent) => {
      dragState.current.active = false;
      dragState.current.moved = false;
      dragState.current.pressedIndex = null;

      if (viewport.hasPointerCapture(event.pointerId)) {
        viewport.releasePointerCapture(event.pointerId);
      }

      delete viewport.dataset.dragging;
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (activeIndex !== null) return;

      const step = event.shiftKey ? 180 : 90;

      switch (event.key) {
        case 'ArrowLeft':
          targetX += step;
          break;
        case 'ArrowRight':
          targetX -= step;
          break;
        case 'ArrowUp':
          targetY += step;
          break;
        case 'ArrowDown':
          targetY -= step;
          break;
        default:
          break;
      }
    };

    viewport.addEventListener('wheel', onWheel, { passive: false });
    viewport.addEventListener('pointerdown', onPointerDown);
    viewport.addEventListener('pointermove', onPointerMove);
    viewport.addEventListener('pointerup', onPointerUp);
    viewport.addEventListener('pointercancel', onPointerCancel);
    window.addEventListener('keydown', onKeyDown);

    return () => {
      gsap.ticker.remove(ticker);
      viewport.removeEventListener('wheel', onWheel);
      viewport.removeEventListener('pointerdown', onPointerDown);
      viewport.removeEventListener('pointermove', onPointerMove);
      viewport.removeEventListener('pointerup', onPointerUp);
      viewport.removeEventListener('pointercancel', onPointerCancel);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeIndex, totalHeight, totalWidth, isMobile]);

  const handleLightboxWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (lightboxWheelLockRef.current) return;
    lightboxWheelLockRef.current = true;

    const delta =
      Math.abs(event.deltaX) > Math.abs(event.deltaY)
        ? event.deltaX
        : event.deltaY;

    if (delta > 0) {
      goNext();
    } else {
      goPrev();
    }

    window.setTimeout(() => {
      lightboxWheelLockRef.current = false;
    }, 380);
  };

  const handleLightboxPointerDown = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    lightboxSwipeRef.current.active = true;
    lightboxSwipeRef.current.startX = event.clientX;
    lightboxSwipeRef.current.startY = event.clientY;
  };

  const handleLightboxPointerUp = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (!lightboxSwipeRef.current.active) return;

    const dx = event.clientX - lightboxSwipeRef.current.startX;
    const dy = event.clientY - lightboxSwipeRef.current.startY;

    lightboxSwipeRef.current.active = false;

    if (Math.abs(dx) < LIGHTBOX_SWIPE_THRESHOLD) return;
    if (Math.abs(dx) < Math.abs(dy)) return;

    if (dx < 0) goNext();
    else goPrev();
  };

  const clones = [-1, 0, 1];
  const activeItem = activeIndex !== null ? galleryItems[activeIndex] : null;
  const activeCount =
    activeIndex !== null ? String(activeIndex + 1).padStart(2, '0') : '01';

  return (
    <section
      className="gallery-canvas gallery-canvas--immersive"
      data-color-mode={isColorMode ? 'color' : 'mono'}
      aria-label="Free pan gallery"
    >
      <Link
        href="/"
        className="gallery-back-button"
        aria-label="Go back to homepage"
      >
        <span className="gallery-back-button__arrow">←</span>
        <span className="gallery-back-button__label">Back</span>
      </Link>

      <button
        type="button"
        className={`gallery-color-switch${isColorMode ? ' gallery-color-switch--active' : ''}`}
        aria-pressed={isColorMode}
        aria-label={
          isColorMode
            ? 'Switch gallery to black and white'
            : 'Switch gallery to color'
        }
        onClick={() => setIsColorMode((value) => !value)}
      >
        <span className="gallery-color-switch__label">Mono</span>
        <span className="gallery-color-switch__track">
          <span className="gallery-color-switch__thumb" />
        </span>
        <span className="gallery-color-switch__label">Color</span>
      </button>

      <div
        className={`gallery-hint${hintVisible ? '' : ' gallery-hint--hidden'}`}
        aria-hidden="true"
      >
        Drag
      </div>

      <div
        ref={viewportRef}
        className="gallery-canvas__viewport"
        tabIndex={0}
        aria-label="Use touch drag, trackpad, wheel, or arrow keys to pan the gallery"
      >
        <div
          ref={stageRef}
          className="gallery-canvas__stage"
          style={{
            width: totalWidth * 3,
            height: totalHeight * 3,
          }}
        >
          {clones.map((cx) =>
            clones.map((cy) =>
              tiles.map((tile, index) => (
                <article
                  key={`${cx}-${cy}-${tile.id}`}
                  className="gallery-tile"
                  data-gallery-index={index}
                  style={{
                    width: tile.w,
                    height: tile.h,
                    left: tile.x + (cx + 1) * totalWidth,
                    top: tile.y + (cy + 1) * totalHeight,
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Open image ${tile.id}`}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setActiveIndex(index);
                    }
                  }}
                >
                  <div className="gallery-tile__image">
                    <img
                      src={tile.src}
                      alt={tile.alt}
                      className="gallery-tile__img"
                      loading="lazy"
                      decoding="async"
                      draggable="false"
                    />
                  </div>

                  <div className="gallery-tile__meta">
                    <span>{tile.id}</span>
                  </div>
                </article>
              ))
            )
          )}
        </div>
      </div>

      {activeItem ? (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          <div className="gallery-lightbox__backdrop" />

          <button
            type="button"
            className="gallery-lightbox__close"
            onClick={closeLightbox}
            aria-label="Close image viewer"
          >
            Close
          </button>

          <button
            type="button"
            className="gallery-lightbox__nav gallery-lightbox__nav--prev"
            onClick={(event) => {
              event.stopPropagation();
              goPrev();
            }}
            aria-label="Previous image"
          >
            ←
          </button>

          <button
            type="button"
            className="gallery-lightbox__nav gallery-lightbox__nav--next"
            onClick={(event) => {
              event.stopPropagation();
              goNext();
            }}
            aria-label="Next image"
          >
            →
          </button>

          <div
            className="gallery-lightbox__inner"
            onClick={(event) => event.stopPropagation()}
            onWheel={handleLightboxWheel}
          >
            <div className="gallery-lightbox__frame">
              <div
                className="gallery-lightbox__media"
                onPointerDown={handleLightboxPointerDown}
                onPointerUp={handleLightboxPointerUp}
              >
                <Image
                  key={activeItem.id}
                  src={activeItem.src}
                  alt={activeItem.alt}
                  fill
                  sizes="(max-width: 720px) 92vw, 46vw"
                  className="gallery-lightbox__img"
                />
              </div>

              <div className="gallery-lightbox__caption">
                <div className="gallery-lightbox__caption-bar">
                  <span>{activeItem.id}</span>
                  <span>{activeItem.title}</span>
                </div>
              </div>
            </div>

            <div className="gallery-lightbox__count">
              <span>{activeCount}</span>
              <span>/</span>
              <span>{String(galleryItems.length).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
