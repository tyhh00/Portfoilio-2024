"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValue, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";

import bgPhoto from "@/images/background.jpg"
import reactPNG from "@/images/libraryIcons/reactPNG.png"
import nextJSPNG from "@/images/libraryIcons/nextjs.png"

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const ref = useRef<any>(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
    setWidth(ref.current.getBoundingClientRect().width);

    console.log("Height: " + height + " width: " + width + " div: " + width/height);
  })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const initOffset = 100;
  const translateY1 = useMotionValue(initOffset);
  const translateY2 = useMotionValue(1000);
  const opacity1 = useMotionValue(1);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Latest: " + latest);
    translateY1.set(latest * (height * 0.75) + initOffset);

    var trans1Max = 1000
    var transition1 = latest * 1.5 * trans1Max;
    

    translateY2.set(translateY1.get() + trans1Max - ( transition1 > trans1Max ? trans1Max : transition1));
    
    //Opacity1 Animation
    var diff = translateY2.get() - translateY1.get();
    if(diff < 250) 
    {
      opacity1.set(diff * 0.004);
    }

    
    
  });

  return (
    <motion.div
      className="h-[100vh] flex justify-center overflow-hidden relative rounded-md pb-[400vh]"
      ref={ref}
    >
      <div className="" >

        <motion.div
          style={{
            translateY: translateY1,
            opacity: opacity1,
            left: 0,
            right: 0
          }}
          className="absolute mx-auto border-blue-500 border-l-4 rounded-t-3xl rounded-b-lg  bg-neutral-200 drop-shadow-2xl min-h-[30vh] my-8 w-[85vw]">
          <div className="space-y-10 lg:space-y-0 lg:flex items-center md:gap-10 lg:gap-20 ml-[4vw] mr-[4vw]">
            
            <div className="lg:h-[30vh] flex items-center">
              <p className="lg:mt-0 mt-20 text-matteyellow font-bold text-5xl">WEB DEVELOPMENT</p>
            </div>

            <div>
              <p className="text-gray-700 text-lg ">
                I build exciting, animated websites with passion! I love using the React Next.JS Framework, and utilize innovative techniques to achieve the smoothest experience on the websites I build.
              </p>
              {/* Animated BG */}
            </div>

            <div>
              <p className="text-gray-700 text-4xl md:text-5xl lg:text-6xl xl:text-7lg pb-4">
                3+ Years
              </p>
            </div>

          </div>

          <div className=" grid-flow-col grid-cols-3 ml-[4vw] mr-[4vw] gap-5 pb-24 lg:pb-8 text-neutral-800 text-xl font-bold">
            <div className="flex items-center justify-start gap-5">
              <Image src={reactPNG} alt="React Icon" width={50} height={50}></Image>
              <p>React</p>
              <p>︱ 1 Year of Experience</p>
            </div>

            <div className="flex items-center justify-start gap-5">
              <Image src={nextJSPNG} alt="NextJS Icon" width={50} height={50}></Image>
              <p>NextJS</p>
            </div>

            <div className="flex items-center justify-start gap-5">
              <Image src={nextJSPNG} alt="NextJS Icon" width={50} height={50}></Image>
              <p>NextJS</p>
            </div>
          </div>

        </motion.div>


        <motion.div 
          style={{
            translateY: translateY2,
            left: 100
          }}


          className="absolute   border-blue-500 border-l-4 rounded-t-3xl rounded-b-lg  bg-neutral-200 drop-shadow-2xl min-h-[30vh] my-8 w-[85vw]">
          <div className="space-y-10 lg:space-y-0 lg:flex items-center md:gap-10 lg:gap-20 ml-[4vw] mr-[4vw]">
            
            <div className="lg:h-[30vh] flex items-center">
              <p className="lg:mt-0 mt-20 text-matteyellow font-bold text-5xl">WEB DEVELOPMENT</p>
            </div>

            <div>
              <p className="text-gray-700 text-lg ">
                I build exciting, animated websites with passion! I love using the React Next.JS Framework, and utilize innovative techniques to achieve the smoothest experience on the websites I build.
              </p>
              {/* Animated BG */}
            </div>

            <div>
              <p className="text-gray-700 text-4xl md:text-5xl lg:text-6xl xl:text-7lg pb-16 lg:pb-0">
                3+ Years
              </p>
            </div>

          </div>
        </motion.div>

        <motion.div 
        style={{
          translateY: translateY2,
          
          left: 100
        }}
        className="absolute  border-red-500 border-l-4 rounded-t-3xl rounded-b-lg  bg-neutral-200 drop-shadow-2xl min-h-[30vh] my-8 w-[85vw]">
          <div className="space-y-10 lg:space-y-0 lg:flex items-center md:gap-10 lg:gap-20 ml-[4vw] mr-[4vw]">
            
            <div className="lg:h-[30vh] flex items-center">
              <p className="lg:mt-0 mt-20 text-matteyellow font-bold text-5xl">WEB DEVELOPMENT</p>
            </div>

            <div>
              <p className="text-gray-700 text-lg ">
                I build exciting, animated websites with passion! I love using the React Next.JS Framework, and utilize innovative techniques to achieve the smoothest experience on the websites I build.
              </p>
              {/* Animated BG */}
            </div>

            <div>
              <p className="text-gray-700 text-4xl md:text-5xl lg:text-6xl xl:text-7lg pb-16 lg:pb-0">
                3+ Years
              </p>
            </div>

          </div>
        </motion.div>

      </div>


    </motion.div>
  );
};
