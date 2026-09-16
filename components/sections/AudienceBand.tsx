import { audience } from '@/content/site';

export function AudienceBand() {
  return (
    <section className="audience-band" aria-label="Who Mazhwetu works with">
      <div className="container">
        <div className="audience-track">
          {audience.map((item) => <span key={item} className="audience-item">{item}</span>)}
        </div>
      </div>
    </section>
  );
}
