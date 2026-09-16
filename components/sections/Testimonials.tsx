import { ScrollReveal } from '@/components/motion/ScrollReveal';

// Intentionally empty until Mazhwetu supplies verified customer feedback.
// Do not invent testimonial copy or names; the structure is ready for real entries.
const testimonials: Array<{ quote: string; name: string; context?: string }> = [];

export function Testimonials() {
  return (
    <section className="section testimonials-section" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section__topline">
          <span className="eyebrow">Testimonials</span>
          <span className="eyebrow">06 / Client voice</span>
        </div>
        <div className="testimonials-layout">
          <ScrollReveal>
            <div>
              <h2 id="testimonials-title" className="section-title">Let the finished work speak.</h2>
              <p className="testimonials-lede">The testimonials area is reserved for verified words from Mazhwetu customers, placed here to support the decision at the right moment.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div className="testimonial-stage">
              {testimonials.length ? testimonials.map((testimonial) => (
                <figure key={testimonial.name} className="testimonial-card">
                  <blockquote>“{testimonial.quote}”</blockquote>
                  <figcaption>{testimonial.name}{testimonial.context ? ` · ${testimonial.context}` : ''}</figcaption>
                </figure>
              )) : (
                <div className="testimonial-empty">
                  <span className="testimonial-mark" aria-hidden="true">“</span>
                  <p>Verified customer testimonials will appear here as they are collected.</p>
                  <span className="eyebrow">Verified customer voice</span>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
