import Image from 'next/image';

export function HomeManifesto() {
  return (
    <section className="section manifesto">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Approach</p>
        <h2>
          High-end digital portfolios should feel edited,
          <br />
          not decorated.
        </h2>
      </div>

      <div className="manifesto__grid" data-reveal>
        <p className="manifesto__quote">
          The strongest photography websites are built like magazines: sequence
          first, rhythm second, motion third.
        </p>

        <div className="manifesto__body">
          <p>
            This concept uses a strict black-and-white palette, oversized
            condensed typography, and carefully delayed animation to create an
            awwwards-style portfolio that feels premium without becoming noisy.
          </p>
          <p>
            The foundation is scalable: a strong homepage, a reusable project
            detail template, and room to add real imagery, CMS content, or
            experimental transitions later.
          </p>
        </div>
      </div>

      <div className="editorial-spread" data-reveal>
        <div className="editorial-spread__frame editorial-spread__frame--large">
          <Image
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
            alt="Figure standing in an atmospheric landscape photographed in monochrome style."
            fill
            sizes="(max-width: 980px) 100vw, 66vw"
            className="editorial-image"
          />
        </div>

        <div className="editorial-spread__content">
          <div className="editorial-spread__note">
            <span className="meta-label">Story frame</span>
            <p>
              Oversized imagery is balanced with quiet type blocks, sharp
              alignments, and generous margins so the homepage feels authored
              rather than assembled.
            </p>
          </div>

          <div className="editorial-spread__stack">
            <div className="editorial-spread__frame editorial-spread__frame--small">
              <Image
                src="https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1000&q=80"
                alt="Interior corridor with graphic perspective and strong black and white contrast."
                fill
                sizes="(max-width: 980px) 100vw, 24vw"
                className="editorial-image"
              />
            </div>
            <div className="editorial-spread__frame editorial-spread__frame--small">
              <Image
                src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1000&q=80"
                alt="Minimal tabletop composition resembling an editorial still life."
                fill
                sizes="(max-width: 980px) 100vw, 24vw"
                className="editorial-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
