import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/content/site';

const socialPlaceholders = ['Instagram', 'Facebook', 'LinkedIn'];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" aria-label="Mazhwetu General Works home"><Image src="/images/mazhwetu-logo.png" alt="Mazhwetu General Works" width={360} height={240} /></Link>
            <p>{site.positioning}</p>
            <p className="footer-service-line">Construction | Renovations | Landscaping | Outdoor Spaces | Maintenance</p>
          </div>
          <div className="footer-links">
            <div className="footer-col"><span className="footer-col__title">Navigate</span><Link href="/about">About</Link><Link href="/#services">Services</Link><Link href="/projects">Projects</Link><Link href="/projects">Gallery</Link><Link href="/#contact">Contact</Link></div>
            <div className="footer-col"><span className="footer-col__title">Contact</span><a href={site.phoneHref}>{site.phone}</a><a href={site.emailHref}>{site.email}</a><a href={site.adminEmailHref}>{site.adminEmail}</a><span style={{ marginTop: 14, fontSize: 12, lineHeight: 1.5, color: 'rgba(245,243,236,.46)' }}>{site.address}<br />Reg No. {site.registration}</span></div>
            <div className="footer-col footer-socials"><span className="footer-col__title">Socials</span><div className="social-slots" aria-label="Social media links to be added"><span>Instagram</span><span>Facebook</span><span>LinkedIn</span></div><span className="footer-social-note">Social links can be connected once the client provides the active profiles.</span></div>
          </div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} {site.legalName}</span><span>Value Created In Our Execution</span></div>
      </div>
    </footer>
  );
}
