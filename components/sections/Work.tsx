import Link from 'next/link';
import { projects } from '@/content/site';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { ProjectImageReveal } from '@/components/motion/ProjectImageReveal';

export function Work() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="container">
        <div className="section__topline"><span className="eyebrow">Selected work</span><span className="eyebrow">03 / Projects</span></div>
        <div className="work-head" style={{ marginTop: 28 }}>
          <ScrollReveal><div><h2 id="work-title" className="section-title">See what we create.</h2><p className="work-lede">Great work speaks for itself. Explore a selection of Mazhwetu projects and discover the quality, detail and versatility behind our work.</p></div></ScrollReveal>
          <Link href="/projects" className="action action--dark">View all projects <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="work-grid">
          {projects.slice(0, 4).map((project, index) => (
            <ScrollReveal key={project.id} className={`work-card ${index === 0 ? 'work-card--tall' : index === 3 ? 'work-card--wide' : ''}`} delay={index * .07}>
              <ProjectImageReveal src={project.image} alt={project.alt} />
              <div className="work-card__content"><div><div className="work-card__eyebrow">{project.type} · {project.service}</div><h3>{project.title}</h3></div><div className="work-card__arrow" aria-hidden="true">↗</div></div>
            </ScrollReveal>
          ))}
        </div>
        <div className="work-utility"><p className="work-note">Our gallery is intended to carry the strongest visual proof on the site. Replace the temporary reference imagery with authentic Mazhwetu project photography before launch.</p><Link href="/projects" className="eyebrow">View the gallery ↗</Link></div>
      </div>
    </section>
  );
}
