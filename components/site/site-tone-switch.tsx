'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'lerato-site-tone';

export function SiteToneSwitch() {
  const [mounted, setMounted] = useState(false);
  const [isPurple, setIsPurple] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) === 'purple';
    setIsPurple(saved);
    document.documentElement.dataset.siteTone = saved ? 'purple' : 'default';
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    document.documentElement.dataset.siteTone = isPurple ? 'purple' : 'default';
    window.localStorage.setItem(STORAGE_KEY, isPurple ? 'purple' : 'default');
  }, [isPurple, mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <button
      type="button"
      className={`site-tone-switch${isPurple ? ' site-tone-switch--active' : ''}`}
      aria-pressed={isPurple}
      title="Flip the site colour"
      aria-label={
        isPurple
          ? 'Switch website back to default colour'
          : 'Switch website to purple colourme tone'
      }
      onClick={() => setIsPurple((value) => !value)}
    >
      <span className="site-tone-switch__hint">Flip colour</span>
      <span className="site-tone-switch__label">default</span>
      <span className="site-tone-switch__track">
        <span className="site-tone-switch__thumb" />
      </span>
      <span className="site-tone-switch__label">colourme</span>
    </button>
  );
}
