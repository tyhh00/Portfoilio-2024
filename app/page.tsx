"use client";

import { HeroParallax } from "@/components/ui/hero-parralax";
import ServiceCardList from "@/components/specific/service-cards-list";
import LampMain from "@/components/specific/lamp-main";
import ServicesSpotlight from "@/components/specific/services-spotlight";
import SkillsList from "@/components/specific/skills-list";

import { MAINPAGE_HERO_PROJECTS } from "@/constants";


import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

export default function Home() {
  return (
    
    <main className="overflow-hidden scrollbar scrollbar-none scrollbar-track-transparent">

          <ReactLenis root>
            { /* content */ }
          </ReactLenis>

        {/** Hero Section **/}
        <HeroParallax products={MAINPAGE_HERO_PROJECTS} />

        {/** Skills List Section **/}
        <SkillsList/>

        {/** Freelance Services Section **/}
        <ServiceCardList/>




    </main>
  );
}


  