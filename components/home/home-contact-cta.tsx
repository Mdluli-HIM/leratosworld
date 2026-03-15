import Link from 'next/link';

export function HomeContactCta() {
  return (
    <section className="section contact-cta" data-reveal>
      <div>
        <p className="eyebrow">Start a project</p>
        <h2>
          Looking for a portfolio that feels like a collectible object,
          <br />
          not a template?
        </h2>
      </div>

      <div className="contact-cta__actions">
        <p>
          The next pass after this starter build would be custom page
          transitions, CMS-driven case studies, and real photography art
          direction per project.
        </p>
        <Link href="/contact" className="button-link">
          Enquire now
        </Link>
      </div>
    </section>
  );
}
