import type { Metadata } from 'next';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { values } from '@/content/site';

export const metadata: Metadata = {
  title: 'About | Mazhwetu General Works',
  description: 'Learn about Mazhwetu General Works, its values, approach and ongoing commitment to clients beyond project handover.',
};

export default function AboutPage() {
  return (
    <main id="main">
      <section className="about-hero section--dark" aria-labelledby="about-page-title">
        <div className="container">
          <div className="section__topline"><span className="eyebrow">Mazhwetu General Works</span><span className="eyebrow">About</span></div>
          <ScrollReveal><h1 id="about-page-title">Built Around People. Driven By Excellence.</h1></ScrollReveal>
          <p className="about-hero__lede">Established in 2015, Mazhwetu General Works is a customer-oriented company providing construction, general maintenance, landscaping, groundskeeping and allied services.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="about-story-title">
        <div className="container">
          <div className="about-page-grid">
            <div>
              <span className="eyebrow">About Mazhwetu</span>
              <ScrollReveal><h2 id="about-story-title" className="section-title">Built Around People. Driven By Excellence.</h2></ScrollReveal>
            </div>
            <ScrollReveal delay={0.08}>
              <div className="about-page-copy">
                <p>Established in 2015, Mazhwetu General Works is a customer-oriented company providing construction, general maintenance, landscaping, groundskeeping and allied services.</p>
                <p>We work with clients across residential, commercial, private estate and development environments, tailoring our approach to the unique requirements of each project.</p>
                <p className="about-page-statement">Understand The Objective.<br />Execute Professionally.<br />Create Lasting Value.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="values-title">
        <div className="container">
          <div className="section__topline"><span className="eyebrow">What Drives Us</span><span className="eyebrow">01 / Values</span></div>
          <div className="values-page-grid">
            <ScrollReveal><h2 id="values-title" className="section-title">Our values.</h2></ScrollReveal>
            <div className="values-grid values-grid--dark">
              {values.map((value) => (
                <ScrollReveal key={value.title} className="value-item value-item--dark">
                  <h3>{value.title}</h3><p>{value.body}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="support-title">
        <div className="container">
          <div className="about-support about-support--page">
            <ScrollReveal>
              <span className="eyebrow">After-sales support</span>
              <h2 id="support-title">Our Relationship Doesn’t End At Handover.</h2>
              <p>We believe in supporting our clients beyond project delivery. Where required, we remain available for consultation, guidance and ongoing support — helping ensure that the value created continues beyond completion.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <div className="about-page-side-statement">
                <span className="eyebrow">Our focus</span>
                <p>Understand The Objective.<br />Execute Professionally.<br />Create Lasting Value.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
