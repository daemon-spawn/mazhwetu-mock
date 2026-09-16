'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-nav${scrolled ? ' scrolled' : ''}`}>
      <div className="container site-nav__inner">
        <Link href="/" className="wordmark" aria-label="Mazhwetu General Works home">
          <Image src="/images/mazhwetu-logo.png" alt="Mazhwetu General Works" width={204} height={120} priority />
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="/#work">Work</a>
          <a href="/#services">Services</a>
          <a href="/#approach">Approach</a>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
        </nav>
        <a className="nav-cta" href="/#contact">Start a project <span aria-hidden="true">↗</span></a>
        <button className="nav-menu" type="button" aria-label="Open navigation" onClick={() => window.location.href = '/#contact'}>
          <span aria-hidden="true">☰</span>
        </button>
      </div>
    </header>
  );
}
