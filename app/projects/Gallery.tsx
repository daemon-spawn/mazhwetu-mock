'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { galleryCategories, projects } from '@/content/site';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

type Project = (typeof projects)[number];

export function Gallery() {
  const [active, setActive] = useState<(typeof galleryCategories)[number]>('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (active === 'All') return projects;
    return projects.filter((project) => (project.galleryTags as readonly string[]).includes(active));
  }, [active]);

  return (
    <>
      <div className="gallery-filters" aria-label="Gallery categories">
        {galleryCategories.map((category) => (
          <button
            key={category}
            type="button"
            className={active === category ? 'gallery-filter is-active' : 'gallery-filter'}
            onClick={() => setActive(category)}
            aria-pressed={active === category}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-mosaic" style={{ marginTop: 34 }}>
        {filtered.map((project, index) => (
          <ScrollReveal key={project.id} delay={Math.min(index * .04, .2)} className="project-tile">
            <button className="project-tile__button" type="button" onClick={() => setSelected(project)} aria-label={`Open ${project.title} gallery image`}>
              <Image src={project.image} alt={project.alt} fill sizes="(max-width: 980px) 100vw, 50vw" />
              <span className="project-tile__note">Reference imagery</span>
              <div className="project-tile__content">
                <div>
                  <div className="project-tile__meta">{project.type} · {project.service}</div>
                  <h2>{project.title}</h2>
                </div>
                <span aria-hidden="true" style={{ fontSize: 28 }}>↗</span>
              </div>
            </button>
          </ScrollReveal>
        ))}
      </div>

      {selected && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${selected.title} gallery image`} onClick={() => setSelected(null)}>
          <div className="lightbox__inner" onClick={(event) => event.stopPropagation()}>
            <Image src={selected.image} alt={selected.alt} fill sizes="100vw" />
            <div className="lightbox__caption"><span>{selected.type}</span><strong>{selected.title}</strong><small>{selected.service}</small></div>
            <button className="lightbox__close" type="button" onClick={() => setSelected(null)} aria-label="Close gallery">Close ×</button>
          </div>
        </div>
      )}
    </>
  );
}
