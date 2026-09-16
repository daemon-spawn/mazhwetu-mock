'use client';

import { ReactNode, useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export function LocomotiveProvider({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const scroll = new LocomotiveScroll({
      el: ref.current,
      smooth: true,
      smartphone: { smooth: false },
      tablet: { smooth: false },
    });

    const onResize = () => scroll.update();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      scroll.destroy();
    };
  }, []);

  return <div ref={ref} data-scroll-container>{children}</div>;
}
