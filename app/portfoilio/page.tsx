"use client";

import { ReactLenis } from '@studio-freight/react-lenis'
import PortfoilioHero from '@/components/specific/portfoilioHero';

export default function Home() {
  return (
    
    <main className="overflow-hidden scrollbar scrollbar-none scrollbar-track-transparent">

          <ReactLenis root>
            { /* content */ }
          </ReactLenis>

        <PortfoilioHero/>

    </main>
  );
}
