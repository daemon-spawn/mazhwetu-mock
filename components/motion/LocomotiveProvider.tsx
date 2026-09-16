'use client';

import { ReactNode, useEffect, useRef } from 'react';
import type LocomotiveScroll from 'locomotive-scroll';

export function LocomotiveProvider({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let scroll: LocomotiveScroll | undefined;
    let cancelled = false;

    import('locomotive-scroll').then(({ default: LocomotiveScroll }) => {
      if (!ref.current || cancelled) return;

      scroll = new LocomotiveScroll({
        el: ref.current,
        smooth: true,
        smartphone: { smooth: false },
        tablet: { smooth: false, breakpoint: 1024 },
      });

      const onResize = () => scroll?.update();
      window.addEventListener('resize', onResize);

      return () => {
        window.removeEventListener('resize', onResize);
        scroll?.destroy();
      };
    });

    return () => {
      cancelled = true;
      scroll?.destroy();
    };
  }, []);

  return <div ref={ref} data-scroll-container>{children}</div>;
}
