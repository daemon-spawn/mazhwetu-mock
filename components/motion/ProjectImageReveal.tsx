'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ProjectImageReveal({ src, alt }: { src: string; alt: string }) {
  const wrap = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = wrap.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(el.querySelector('img'), { scale: 1.16 }, {
        scale: 1, duration: 1.4, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return <div ref={wrap} className="media-wrap work-card__image"><Image src={src} alt={alt} fill sizes="(max-width: 980px) 100vw, 60vw" /></div>;
}
