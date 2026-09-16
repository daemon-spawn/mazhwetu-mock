import Image from 'next/image';
import { site, audience } from '@/content/site';

export function ProofStrip() {
  const items = [
    { label: 'Clients', value: audience.join(' · ') },
    { label: 'Method', value: 'Quality + execution' },
    { label: 'Since', value: site.established },
  ];

  return (
    <section className="proof-strip" aria-label="Mazhwetu overview">
      <div className="container proof-strip__grid">
        <div className="proof-item proof-item--stars">
          <span className="proof-item__label">Our standard</span>
          <Image
            src="/images/five-star-laurel.png"
            alt="Laurel wreath with five five-point stars"
            width={520}
            height={170}
            className="proof-item__stars"
          />
        </div>
        {items.map((item) => (
          <div className="proof-item" key={item.label}>
            <span className="proof-item__label">{item.label}</span>
            <span className="proof-item__value">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
