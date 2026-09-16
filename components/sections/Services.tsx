import Image from 'next/image';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { serviceGroups } from '@/content/site';

export function Services() {
  return (
    <section className="section section--ink" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="section__topline"><span className="eyebrow">What we do</span><span className="eyebrow">02 / Services</span></div>
        <ScrollReveal><h2 id="services-title" className="section-title" style={{ marginTop: 34 }}>Built around your project.</h2></ScrollReveal>
        <p className="section-intro" style={{ marginTop: 26 }}>Construction, renovation, landscapes, outdoor spaces, water features and ongoing property care — brought together around the result.</p>
        <div className="services-grid">
          {serviceGroups.map((group, index) => (
            <ScrollReveal key={group.id} delay={index * .035}>
              <article className="service-row">
                <span className="service-row__number">0{index + 1}</span>
                <div className="service-row__title">{group.title}</div>
                <div className="service-row__body">
                  <p className="service-row__desc">{group.body}</p>
                  <div className="service-list" aria-label={`${group.title} services`}>
                    {group.services.map((service) => <span key={service}>{service}</span>)}
                  </div>
                </div>
                <div className="service-row__media">
                  <Image
                    src={group.image}
                    alt={group.imageAlt}
                    fill
                    sizes="(max-width: 980px) 50vw, 240px"
                  />
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
