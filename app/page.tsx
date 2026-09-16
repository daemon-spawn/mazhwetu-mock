import { LenisProvider } from '@/components/motion/LenisProvider';
import { Hero } from '@/components/sections/Hero';
import { ProofStrip } from '@/components/sections/ProofStrip';
import { Intro } from '@/components/sections/Intro';
import { Services } from '@/components/sections/Services';
import { AudienceBand } from '@/components/sections/AudienceBand';
import { Work } from '@/components/sections/Work';
import { Visualisation } from '@/components/sections/Visualisation';
import { Approach } from '@/components/sections/Approach';
import { Trust } from '@/components/sections/Trust';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Testimonials } from '@/components/sections/Testimonials';

export default function HomePage() {
  return (
    <LenisProvider>
      <main id="main">
        <Hero />
        <ProofStrip />
        <Intro />
        <Services />
        <AudienceBand />
        <Work />
        <Visualisation />
        <Approach />
        <Trust />
        <Testimonials />
        <ContactCTA />
      </main>
    </LenisProvider>
  );
}
