import Image from 'next/image';

const socials = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Behance', href: 'https://behance.net' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
];

export default function ContactPage() {
  return (
    <main className="contact-book-page">
      <div className="page-shell">
        <div className="project-book-rail" data-reveal>
          <span>Closing page</span>
          <span>Contact</span>
          <span>Selected commissions</span>
        </div>

        <section className="photobook-spread contact-book-spread" data-reveal>
          <div className="photobook-spread__page photobook-spread__page--dark">
            <div className="contact-closing-note">
              <p className="photobook-copy__label">Final chapter</p>
              <h1 className="project-book-note__title">
                Create the
                <br />
                next volume
              </h1>
              <p className="contact-book-small">
                Minimal digital experiences shaped with strong imagery, motion
                restraint, and premium visual rhythm.
              </p>
            </div>
          </div>

          <div className="photobook-spread__page photobook-spread__page--quiet">
            <div className="photobook-image photobook-image--portrait">
              <Image
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80"
                alt="Monochrome editorial portrait used as a closing page image."
                fill
                priority
                sizes="(max-width: 720px) 100vw, (max-width: 1100px) 42vw, 28vw"
                className="editorial-image"
              />
            </div>
          </div>

          <div className="photobook-spread__footer">
            <span>Contact volume</span>
            <span>01 / 02</span>
          </div>
        </section>

        <section className="photobook-spread contact-book-spread" data-reveal>
          <div className="photobook-spread__page photobook-spread__page--quiet">
            <div className="contact-book-list">
              <div className="contact-book-list__item">
                <span className="meta-label">Email</span>
                <a
                  href="mailto:hello@cathydolle.com"
                  className="contact-book-link"
                >
                  hello@cathydolle.com
                </a>
              </div>

              <div className="contact-book-list__item">
                <span className="meta-label">Availability</span>
                <span className="contact-book-value">
                  Open for selected 2026 projects
                </span>
              </div>

              <div className="contact-book-list__item">
                <span className="meta-label">Focus</span>
                <span className="contact-book-value">
                  Portfolio websites / photography / art direction
                </span>
              </div>

              <div className="contact-book-list__item">
                <span className="meta-label">Response time</span>
                <span className="contact-book-value">
                  Usually within 1–2 business days
                </span>
              </div>
            </div>
          </div>

          <div className="photobook-spread__page photobook-spread__page--centered">
            <div className="contact-book-cta">
              <p className="photobook-copy__label">Start a conversation</p>

              <a
                href="mailto:hello@cathydolle.com"
                className="contact-book-email"
              >
                Send inquiry
              </a>

              <div className="contact-book-socials">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-book-social"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="photobook-spread__footer">
            <span>Cathy Dolle</span>
            <span>02 / 02</span>
          </div>
        </section>
      </div>
    </main>
  );
}
