const capabilities = [
  {
    title: 'Creative systems',
    body: 'Art direction translated into layout rules, spacing logic, and a recognizable editorial voice.',
  },
  {
    title: 'Motion language',
    body: 'GSAP timelines used with restraint so motion supports perception rather than competing with content.',
  },
  {
    title: 'Responsive finesse',
    body: 'Desktop drama retained on mobile through crop control, spacing compression, and hierarchy shifts.',
  },
  {
    title: 'Immersive accents',
    body: 'Three.js moments used as atmosphere, not gimmicks, to elevate the visual identity of key sections.',
  },
];

export function HomeServices() {
  return (
    <section className="section capabilities" data-reveal>
      <div className="section-heading">
        <p className="eyebrow">Capabilities</p>
        <h2>
          Built for freelance portfolios, design studios, and photography-led
          brands.
        </h2>
      </div>

      <div className="capabilities__list">
        {capabilities.map((capability) => (
          <article key={capability.title} className="capability-card">
            <h3>{capability.title}</h3>
            <p>{capability.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
