'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const footerLinks = [
  { label: 'Index', href: '/' },
  { label: 'Works', href: '/projects' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const socials = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Behance', href: 'https://behance.net' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
];

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname.startsWith(href);
}

export function SiteFooter() {
  const pathname = usePathname();

  if (pathname.startsWith('/gallery')) {
    return null;
  }

  return (
    <footer className="site-footer-book">
      <div className="page-shell">
        <div className="site-footer-book__rail" data-reveal>
          <span>Colophon</span>
          <span>End paper</span>
          <span>Cathy Dolle</span>
        </div>

        <section className="site-footer-book__board" data-reveal>
          <div className="site-footer-book__page site-footer-book__page--intro">
            <p className="photobook-copy__label">Colophon</p>
            <h2 className="site-footer-book__title">
              Cathy
              <br />
              Dolle
            </h2>
            <p className="site-footer-book__copy">
              Freelance designer and developer creating image-led portfolio
              websites with editorial pacing, restrained motion, and monochrome
              clarity.
            </p>
          </div>

          <div className="site-footer-book__page">
            <div className="site-footer-book__stack">
              <div className="site-footer-book__group">
                <p className="photobook-copy__label">Navigation</p>
                <div className="site-footer-book__links">
                  {footerLinks.map((link) => {
                    const active = isActive(pathname, link.href);

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`site-footer-book__link${
                          active ? ' site-footer-book__link--active' : ''
                        }`}
                        aria-current={active ? 'page' : undefined}
                      >
                        <span className="site-footer-book__link-label">
                          {link.label}
                        </span>
                        {active ? (
                          <span className="site-footer-book__current">
                            Current
                          </span>
                        ) : null}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="site-footer-book__group">
                <p className="photobook-copy__label">Elsewhere</p>
                <div className="site-footer-book__links">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="site-footer-book__link"
                    >
                      <span className="site-footer-book__link-label">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="site-footer-book__footer">
            <span>Portfolio / Volume 01</span>
            <span>Next.js / GSAP / Three.js</span>
            <span>2026</span>
          </div>
        </section>
      </div>
    </footer>
  );
}
