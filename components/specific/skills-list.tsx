"use client";

import { useScroll } from 'framer-motion';
import React, { useRef } from 'react'
import { StickyScrollRevealMain } from './sticky-scroll-main';

function SkillsList() {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end end"],
    });




  return (
    <div className="pt-52">
        <h1 className={"text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.orange.400),theme(colors.purple.400),theme(colors.yellow.200),theme(colors.purple.400),theme(colors.green.100),theme(colors.green.300))] bg-[length:200%_auto] animate-gradient"}>
                Skills and Experience
        </h1>
        <div className="min-w-[100%] text-center  text-md sm:text-base md:text-lg pt-4 text-gray-300 flex items-center justify-center">
            <div className="max-w-[80%] md:max-w-[50%]">
                <p className="">View by category my experience in each field.</p>
            </div>
        </div>
        <StickyScrollRevealMain></StickyScrollRevealMain>
    </div>
  )
}

export default SkillsList