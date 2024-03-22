"use client";

import React from 'react'
import { ServiceCard } from "@/components/ui/service-card";

import reactPNG from "@/images/libraryIcons/reactPNG.png"
import nextJSPNG from "@/images/libraryIcons/nextjs.png"

function ServiceCardList() {
  return (
    <div className=" space-y-52 md:space-y-32">
        
        <div className="text-center">
            <h1 className={"text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.white),theme(colors.orange.100),theme(colors.blue.100),theme(colors.gray.200),theme(colors.gray.200),theme(colors.orange.100),theme(colors.blue.100))] bg-[length:200%_auto] animate-gradient"}>
                    My Freelance Offerings
            </h1>
            <div className="min-w-[100%] text-center  text-sm sm:text-md md:text-base pt-4 text-gray-300 ">
                <p className="">Building new and interesting ideas is what I love. If you find a suitable item, we can discuss affordable renumerations.</p>
            </div>

        </div>
        <ServiceCard 
            title="Website Development"
            description="Need a refreshed design of your company's website or a brand-new personal portfoilio website for yourself?"
            displayLibraryIcons={
                [
                    {src: reactPNG.src, alt: "React Icon", darkBg: true},
                    {src: nextJSPNG.src, alt: "NextJS Icon", darkBg: false},
                ]
            }
            libraryIconDescription="I utilize the latest tech stacks to bring you a website product with a mordern user experience."
            portfolioBtn={true}
            contactBtn={true}
            LTR={true}
            inviewAmount={0.25}
            id={1}
        />

        <ServiceCard 
            title="Programming Tuition"
            description="Need help with pre-university coding assignments, or other school programming projects?"
            displayLibraryIcons={
                [
                    {src: reactPNG.src, alt: "React Icon", darkBg: true},
                    {src: nextJSPNG.src, alt: "NextJS Icon", darkBg: false},
                ]
            }
            libraryIconDescription="I'm able to teach Unity, Java, C#, HTML, CSS, JS, Python and also Minecraft Java Plugins"
            portfolioBtn={true}
            contactBtn={true}
            LTR={false}
            inviewAmount={0.55}
            id={2}
        />

        <ServiceCard 
            title="Trading Indicator Development"
            description="Make your dream TradingView indicator come to life. Or a C-Trader CBot automatic trader."
            displayLibraryIcons={
                [
                    {src: reactPNG.src, alt: "React Icon", darkBg: true},
                    {src: nextJSPNG.src, alt: "NextJS Icon", darkBg: false},
                ]
            }
            libraryIconDescription="I can build you indicators on tradingview, or automated trading software on C-Trader CBot platform for a strategy you wish to use."
            portfolioBtn={true}
            contactBtn={true}
            LTR={true}
            inviewAmount={0.55}
            id={3}
        />

        
        <ServiceCard 
            title="Game Development"
            description="Graduated from Nanyang Polytechnic with merit, I've worked on FPS Multiplayer Games, 2D/3D Games, and even an AR Indoor Map & Minigames App for a Government Entity!"
            displayLibraryIcons={
                [
                    {src: reactPNG.src, alt: "React Icon", darkBg: true},
                    {src: nextJSPNG.src, alt: "NextJS Icon", darkBg: false},
                ]
            }
            libraryIconDescription="Graduated with 3.89 GPA, you can view my games Portfoilio here :)"
            portfolioBtn={true}
            contactBtn={true}
            LTR={false}
            inviewAmount={0.55}
            id={4}
        />
    </div>
  )
}

export default ServiceCardList;