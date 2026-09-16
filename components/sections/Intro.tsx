import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { site } from '@/content/site';

export function Intro() {
  return (
    <section className="section" id="about" aria-labelledby="intro-title">
      <div className="container">
        <div className="section__topline"><span className="eyebrow">Mazhwetu General Works</span><span className="eyebrow">01 / Purpose</span></div>
        <div className="intro-grid" style={{ marginTop: 52 }}>
          <ScrollReveal><h2 id="intro-title" className="intro-quote">{site.introduction.title}</h2></ScrollReveal>
          <ScrollReveal delay={0.1} className="intro-copy">
            <p>{site.introduction.body}</p>
          </ScrollReveal>
        </div>
        <div className="intro-difference">
          <ScrollReveal><span className="eyebrow">The Mazhwetu Difference</span></ScrollReveal>
          <ScrollReveal delay={0.08}><p>{site.difference.body}</p></ScrollReveal>
        </div>
      </div>
    </section>
  );
}
