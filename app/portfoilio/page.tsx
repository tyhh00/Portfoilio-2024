"use client";

import { ReactLenis } from '@studio-freight/react-lenis'
import PortfoilioHero from '@/components/specific/portfoilioHero';

export default function Home() {
  return (
    
    <main className="overflow-hidden scrollbar scrollbar-none scrollbar-track-transparent">

          <ReactLenis root>
            { /* content */ }
          </ReactLenis>

        <PortfoilioHero yearsList={portfoilio}/>

    </main>
  );
}

import prft_vnc_hp from "@/images/portfoilio/vnclosure/homepage.png"
import prft_vn from "@/images/portfoilio/vortexnetwork/Vortex_150Player.png"
import prft_ecom_hp from "@/images/portfoilio/ecommerce/ecommerce_itemshowcase.jpg"

export const portfoilio = [
  {
    yearIDinDecsending: 2024,
    yearTitleText: "I generally didnt do much this year tbh.\nI'm serving national service in 2024.",
    cards: [
      {
        id: 1,
        thumbn_title: "Ecommerce Store",
        thumbn_descrip: "Frontend & Backend with an admin management portal. ",
        thumbn_descripWidth: 55,
        thumbn_imageSRC: prft_ecom_hp.src, 
        thumbn_addiClassNames: "bg-gradient-to-tr from-zinc-950 to-zinc-900",
        hasExpandableContent: false,
        expandableContentPage: "test",
      },
      {
        id: 2,
        thumbn_title: "Vortex Network Closure",
        thumbn_descrip: "Front-end website for a minecraft server project I managed. ",
        thumbn_descripWidth: 55,
        thumbn_imageSRC: prft_vnc_hp.src, 
        thumbn_addiClassNames: "bg-gradient-to-tr from-zinc-950 to-zinc-900",
        hasExpandableContent: false,
        expandableContentPage: "test",
      },
      {
        id: 3,
        thumbn_title: "Vortex Network",
        thumbn_descrip: "My game server in Minecraft, ran from 2017-2024. Yielded over $10,000 in Rev. ",
        thumbn_descripWidth: 70,
        thumbn_imageSRC: prft_vn.src, 
        thumbn_addiClassNames: "bg-gradient-to-tr from-zinc-950 to-zinc-900",
        hasExpandableContent: false,
        expandableContentPage: "test",
      },
    ],
  },
];


