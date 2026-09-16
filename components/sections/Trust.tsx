import { site, whyMazhwetu } from '@/content/site';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

export function Trust() {
  return (
    <section className="section" aria-labelledby="trust-title">
      <div className="container">
        <div className="section__topline"><span className="eyebrow">Confidence</span><span className="eyebrow">05 / Trust</span></div>
        <div className="trust-grid" style={{ marginTop: 34 }}>
          <ScrollReveal><h2 id="trust-title" className="section-title">More than a service. A commitment to the result.</h2></ScrollReveal>
          <ScrollReveal delay={.1}>
            <div className="trust-list">
              {whyMazhwetu.map((item) => (
                <div className="trust-row" key={item.title}><div className="trust-row__title">{item.title}</div><div className="trust-row__body">{item.body}</div></div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="quality-block">
          <ScrollReveal><span className="eyebrow">Quality</span></ScrollReveal>
          <ScrollReveal delay={.08}><h3>{site.quality.title}</h3></ScrollReveal>
          <ScrollReveal delay={.12}><p>{site.quality.body}</p></ScrollReveal>
          <ScrollReveal delay={.16}><strong>{site.quality.statement}</strong></ScrollReveal>
        </div>


      </div>
    </section>
  );
}
