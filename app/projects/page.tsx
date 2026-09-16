import Link from 'next/link';
import { LocomotiveProvider } from '@/components/motion/LocomotiveProvider';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { Gallery } from './Gallery';

export const metadata = {
  title: 'Projects & Gallery | Mazhwetu General Works',
  description: 'Explore the Mazhwetu General Works project and gallery experience across construction, renovation, landscaping, outdoor spaces and maintenance.',
};

export default function ProjectsPage() {
  return (
    <LocomotiveProvider>
      <main id="main">
        <section className="projects-hero" data-scroll-section>
          <div className="container">
            <span className="eyebrow">Mazhwetu General Works · Projects</span>
            <ScrollReveal><h1>Our Projects. Our Craft. Our Proof.</h1></ScrollReveal>
            <p>Great work speaks for itself. Explore a selection of project imagery and discover the quality, detail and versatility behind our work.</p>
          </div>
        </section>
        <section className="projects-board" data-scroll-section aria-labelledby="project-board-title">
          <div className="container">
            <div className="section__topline"><span className="eyebrow" id="project-board-title">Gallery</span><span className="eyebrow">06 / Work</span></div>
            <p className="gallery-intro">Construction · Renovations · Landscapes & Gardens · Swimming Pools · Water Features · Patios & Pergolas · Bomas & Braai Areas · Paving & Concrete · Cabinetry · Groundskeeping · Outdoor Spaces</p>
            <Gallery />
            <div className="gallery-note">The current imagery is temporary reference material because authentic Mazhwetu project photography was not included with the supplied content. Replace these images before launch so the gallery functions as truthful project proof.</div>
            <div style={{ marginTop: 46, display:'flex', justifyContent:'space-between', alignItems:'center', gap: 20 }}>
              <span className="eyebrow">Back to the studio</span>
              <Link href="/" className="action action--dark">Return home <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>
      </main>
    </LocomotiveProvider>
  );
}
