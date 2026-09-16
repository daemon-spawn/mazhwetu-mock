import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/content/site';
import { HeroMotion } from '@/components/motion/HeroMotion';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__image">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=90"
          alt="Temporary reference image of modern architecture and construction"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <HeroMotion />
      <div className="hero__grid">
        <div>
          <p className="eyebrow" style={{ marginBottom: 18 }}>{site.hero.eyebrow}</p>
          <h1 id="hero-title" className="hero__title" aria-label={site.hero.title}>
            {site.hero.title.split(' ').map((word, index) => (
              <span key={`${word}-${index}`} style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.19em' }}>
                <span style={{ display: 'inline-block' }}>{word}</span>
              </span>
            ))}
          </h1>
        </div>
        <div>
          <p className="hero__body">{site.hero.body}</p>
          <div className="hero__actions">
            <a className="action action--primary" href="#contact">{site.hero.cta} <span aria-hidden="true">↗</span></a>
            <Link className="action action--ghost" href="/projects">{site.hero.secondaryCta} <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
