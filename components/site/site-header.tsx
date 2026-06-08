'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { site } from '@/content/site';

const links = [
  { href: '/', label: 'Cover', number: '01' },
  { href: '/projects', label: 'Volumes', number: '02' },
  { href: '/gallery', label: 'Gallery', number: '03' },
  { href: '/about', label: 'About', number: '04' },
];

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();

  if (pathname.startsWith('/gallery')) {
    return null;
  }

  return (
    <header className="chrome-header">
      <div className="page-shell">
        <div className="chrome-header__bar">
          <Link href="/" className="chrome-brand" aria-label="Go to album cover">
            <span className="chrome-brand__code">{site.albumLabel}</span>
            <span className="chrome-brand__name">{site.shortName}</span>
          </Link>

          <nav className="chrome-nav" aria-label="Primary navigation">
            {links.map((link) => {
              const active = isActive(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`chrome-link${active ? ' chrome-link--active' : ''}`}
                  aria-current={active ? 'page' : undefined}
                >
                  <span className="chrome-link__index">{link.number}</span>
                  <span className="chrome-link__label">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="chrome-status" aria-hidden="true">
            <span className="chrome-status__label">Gift</span>
            <span className="chrome-status__value">Birthday album</span>
          </div>
        </div>
      </div>
    </header>
  );
}
