import { process, site } from '@/content/site';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

export function Approach() {
  return (
    <section className="section section--dark" id="approach" aria-labelledby="approach-title">
      <div className="container">
        <div className="section__topline"><span className="eyebrow">How we work</span><span className="eyebrow">04 / Approach</span></div>
        <div className="trust-grid" style={{ marginTop: 36 }}>
          <ScrollReveal><h2 id="approach-title" className="section-title">{site.approach.title}</h2></ScrollReveal>
          <ScrollReveal delay={.1}>
            <div className="approach-copy">
              <p className="section-intro">{site.approach.body}</p>
            </div>
          </ScrollReveal>
        </div>
        <div className="process-intro"><span className="eyebrow">Our Process</span><p>From your idea to the finished space.</p></div>
        <div className="process-grid process-grid--seven">
          {process.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * .04} className="process-card">
              <span className="process-card__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
