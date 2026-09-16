import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { site } from '@/content/site';

export function Visualisation() {
  return (
    <section className="section" aria-labelledby="vision-title" style={{ padding: '0' }}>
      <div className="vision">
        <div className="vision__copy">
          <span className="eyebrow">Design & visualisation</span>
          <ScrollReveal><h2 id="vision-title">{site.visualisation.title}</h2></ScrollReveal>
          <p>{site.visualisation.body}</p>
          <a href="#contact" className="action action--ghost" style={{ width: 'fit-content' }}>Discuss a project <span aria-hidden="true">↗</span></a>
        </div>
        <div className="vision__image" aria-label="Abstract architectural visualisation graphic">
          <div className="vision-drawing"><div className="vision-drawing__grid" /></div>
        </div>
      </div>
    </section>
  );
}
