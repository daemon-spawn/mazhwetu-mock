'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function HeroMotion() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.hero__image img', { scale: 1.12, duration: 2.1 }, 0)
        .from('.hero__title span', { yPercent: 115, duration: 1.05, stagger: .05 }, .18)
        .from('.hero__body, .hero__actions, .hero__meta', { autoAlpha: 0, y: 24, duration: .8, stagger: .08 }, .55);
    }, el);
    return () => ctx.revert();
  }, []);

  return <div ref={ref} aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />;
}
