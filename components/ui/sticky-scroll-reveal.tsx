"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValue, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";

import bgPhoto from "@/images/background.jpg"
import reactPNG from "@/images/libraryIcons/reactPNG.png"
import nextJSPNG from "@/images/libraryIcons/nextjs.png"
import JSPNG from "@/images/libraryIcons/javascript.png"
import htmlPNG from "@/images/libraryIcons/html.png"
import computerPNG from "@/images/libraryIcons/computer.webp"

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
  })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const initOffset = 100;
  const translateY1 = useMotionValue(initOffset);
  const translateY2 = useMotionValue(1000);
  const translateY3 = useMotionValue(2000);
  const opacity1 = useMotionValue(1);
  const opacity2 = useMotionValue(1);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Latest: " + latest);
    translateY1.set(latest * (height * 0.75) + initOffset);

    //Transition1-2 Animation
    var trans1Max = 1000
    var transition1 = latest * 2.5 * trans1Max;
    
    translateY2.set(translateY1.get() + trans1Max - ( transition1 > trans1Max ? trans1Max : transition1));
    
    //Opacity1 Animation
    var diff = translateY2.get() - translateY1.get();
    if(diff < 250) 
    {
      opacity1.set(diff * 0.004);
    }
    else opacity1.set(1);


    //Transition2-3 Animation
    var trans2Max = 2000
    var transition2 = latest * 2.5 * trans2Max - translateY2.get();
    
    translateY3.set(translateY2.get() + trans2Max - ( transition2 > trans2Max ? trans2Max : transition2));
    
    //Opacity2 Animation
    var diff = translateY3.get() - translateY2.get();
    if(diff < 250) 
    {
      opacity2.set(diff * 0.004);
    }
    else opacity2.set(1);
    

    

    
    
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
          className="absolute mx-auto border-blue-500 overflow-hidden border-l-4 rounded-t-3xl rounded-b-lg  bg-neutral-200 sm:drop-shadow-2xl min-h-[30vh] my-8 w-[85vw]">
          <motion.div className="absolute right-0" 
            initial={{
              rotateZ: 40,
              scale: 1.05,
            }}
            animate={{
              translateY: [20, -20, 20],
              scale: [1.25, 1, 1.25],
              translateX: [-40, 40, -40],
            }}
            transition={{
              repeat: Infinity,
              duration: 5.0,
            }}
          >
            <Image src={computerPNG} alt="Computer" className="w-[5rem] h-[5rem] opacity-50"></Image>
          </motion.div>
          <div className="space-y-2 md:space-y-6 xl:space-y-0 xl:flex items-center md:gap-10 xl:gap-20 ml-[4vw] mr-[4vw]">
            
            <div className="xl:h-[30vh] flex items-center">
              <p className="xl:mt-0 mt-12 text-matteyellow font-bold text-3xl md:text-4xl xl:text-5xl">WEB DEVELOPMENT</p>
            </div>

            <div>
              <p className="text-gray-700 text-xs md:text-sm lg:text-base xl:text-lg ">
                I build exciting, animated websites with passion! I love using the React Next.JS Framework, and utilize innovative techniques to achieve the smoothest experience on the websites I build.
              </p>
              {/* Animated BG */}
            </div>

            <div>
              <p className="text-gray-700 text-3xl md:text-4xl  xl:text-7lg pb-4">
                3+ Years
              </p>
            </div>

          </div>

          <div className=" grid-flow-col grid-cols-3 ml-[4vw] mr-[4vw] gap-5 pb-8 md:pb-16 lg:pb-8 text-neutral-800 text-xs md:text-sm xl:text-xl font-bold">
            <div className="flex items-center justify-start gap-2 md:gap-4 xl:gap-5">
              <Image src={reactPNG} alt="React Icon" width={0} height={0} className="w-[25px] xl:w-[50px] h-auto"></Image>
              <p>React</p>
              <p>︱ 1 Year of Experience</p>
            </div>

            <div className="flex items-center justify-start  gap-2 md:gap-4 xl:gap-5">
              <Image src={nextJSPNG} alt="NextJS Icon" width={0} height={0} className="w-[25px] xl:w-[50px] h-auto"></Image>
              <p>NextJS</p>
            </div>

            <div className="flex items-center justify-start  gap-2 md:gap-4 xl:gap-5">
              <Image src={htmlPNG} alt="NextJS Icon" width={0} height={0} className="w-[25px] xl:w-[50px] h-auto"></Image>
              <p>NextJS</p>
            </div>
          </div>

        </motion.div>


        <motion.div 
          style={{
            translateY: translateY2,
            opacity: opacity2,
            left: 0,
            right: 0,
          }}


          className="absolute mx-auto  border-blue-500 border-l-4 rounded-t-3xl rounded-b-lg  bg-neutral-200 sm:drop-shadow-2xl min-h-[30vh] my-8 w-[85vw]">
          <div className="space-y-10 lg:space-y-0 lg:flex items-center md:gap-10 lg:gap-20 ml-[4vw] mr-[4vw]">
            
            <div className="lg:h-[30vh] flex items-center">
              <p className="lg:mt-0 mt-20 text-matteyellow font-bold text-5xl">WEB DEVELOPMENT 2</p>
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
          translateY: translateY3,
          
          left: 0,
          right: 0,
        }}
        className="absolute mx-auto border-red-500 border-l-4 rounded-t-3xl rounded-b-lg  bg-neutral-200 sm:drop-shadow-2xl min-h-[30vh] my-8 w-[85vw]">
          <div className="space-y-10 lg:space-y-0 lg:flex items-center md:gap-10 lg:gap-20 ml-[4vw] mr-[4vw]">
            
            <div className="lg:h-[30vh] flex items-center">
              <p className="lg:mt-0 mt-20 text-matteyellow font-bold text-5xl">WEB DEVELOPMENT 3</p>
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
