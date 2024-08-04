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
    <div className="pt-36 bg-fill">
        <h1 className={"text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black"}>
                Skills
        </h1>
        <div className="min-w-[100%] text-center  text-md sm:text-base md:text-lg pt-4 text-gray-100 flex items-center justify-center">
            <div className="max-w-[80%] md:max-w-[50%]">
                <p className=""></p>
            </div>
        </div>
        <StickyScrollRevealMain></StickyScrollRevealMain>
    </div>
  )
}

export default SkillsList