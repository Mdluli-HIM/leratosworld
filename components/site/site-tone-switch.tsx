'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const STORAGE_KEY = 'cathy-site-tone';

export function SiteToneSwitch() {
  const pathname = usePathname();
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

  if (!mounted || pathname.startsWith('/gallery')) {
    return null;
  }

  return (
    <button
      type="button"
      className={`site-tone-switch${isPurple ? ' site-tone-switch--active' : ''}`}
      aria-pressed={isPurple}
      aria-label={
        isPurple
          ? 'Switch website to default tone'
          : 'Switch website to purple tone'
      }
      onClick={() => setIsPurple((value) => !value)}
    >
      <span className="site-tone-switch__label"></span>
      <span className="site-tone-switch__track">
        <span className="site-tone-switch__thumb" />
      </span>
      <span className="site-tone-switch__label">colourme</span>
    </button>
  );
}
