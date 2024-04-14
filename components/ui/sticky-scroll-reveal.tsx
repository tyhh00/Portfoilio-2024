"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
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
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Latest: " + latest);
    
  });


  return (
    <motion.div
      
      className="h-[100vh] overflow-y-auto flex justify-center relative  rounded-md scroll-m-0 no-scrollbar pt-12 "
      ref={ref}
    >
      <div className="space-y-20" >

        <div className="  border-blue-500 border-l-4 rounded-t-3xl rounded-b-lg  bg-neutral-200 drop-shadow-2xl min-h-[30vh] my-8 w-[85vw]">
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

        </div>


        <div className="  border-blue-500 border-l-4 rounded-t-3xl rounded-b-lg  bg-neutral-200 drop-shadow-2xl min-h-[30vh] my-8 w-[85vw]">
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
        </div>

        <div className="  border-blue-500 border-l-4 rounded-t-3xl rounded-b-lg  bg-neutral-200 drop-shadow-2xl min-h-[30vh] my-8 w-[85vw]">
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
        </div>

      </div>


    </motion.div>
  );
};
