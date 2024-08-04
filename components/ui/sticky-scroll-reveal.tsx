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


import ProductCreationPng from "@/images/portfoilio/fnf/detailedSS/ProductVariantCreation.png"
import frontEndStore from "@/images/portfoilio/fnf/fnfstorefront.png"
import CodingAdmin from "@/images/portfoilio/fnf/detailedSS/CodingBlockAdmin.png"

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

    //console.log("Height: " + height + " width: " + width + " div: " + width/height);
  })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const initOffset = 100;
  const translateY1 = useMotionValue(initOffset);
  const translateY2 = useMotionValue(1000);
  const translateY3 = useMotionValue(2000);
  const translateY4 = useMotionValue(4000);
  const opacity1 = useMotionValue(1);
  const opacity2 = useMotionValue(1);
  const opacity1to2 = useMotionValue(1);
  const opacity3 = useMotionValue(1);

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
    var diff2 = translateY3.get() - translateY2.get();
    console.log("diff 2 " + diff2);
    if(diff2 < 250) 
    {
      opacity2.set(diff2 * 0.004);
    }
    else opacity2.set(1);

    //Opacity1 TO 2 Set
    opacity1to2.set(opacity2.get() + opacity1.get());
    
    //Transition3-4 Animation
    var trans3Max = 3000
    var transition3 = latest * 2.5 * trans3Max - translateY3.get();
    
    translateY4.set(translateY3.get() + trans3Max - ( transition3 > trans3Max ? 2000 : transition3 / 2.5));
    
    //Opacity3 Animation
    var diff3 = translateY4.get() - translateY3.get();
    console.log("diff 3 " + diff3);
    console.log("translate 2 " + translateY2.get() + " t3 " + translateY3.get() + " t4 " + translateY4.get());
    if(diff3 < 250) 
    {
      opacity3.set(diff3 * 0.004);
    }
    else opacity3.set(1);
  

    
    
  });

  return (
    <motion.div
      className="h-[100vh] flex justify-center overflow-hidden relative rounded-md pb-[400vh]"
      ref={ref}
    >
      <div className="" >


        {/**FULL STACK LHS VERTICAL TEXT START */}
        <motion.div 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.5, delay: 0.15, ease:"circInOut"}}
          style={{
            translateY: translateY1,
            opacity: opacity1to2,
            left: "8vw",
            top: 0,
            bottom: 0,
            rotate:180,
            writingMode: 'vertical-rl'
          }}
          className="absolute  max-w-[60vh]"
           >
          <h2 className="text-4xl text-dark border-l-4 border-spacing-4 border-l-yellow-600 text-right">Full Stack Web Development</h2>
        </motion.div>
        {/**FULL STACK LHS VERTICAL TEXT END */}
        
        {/**FULL STACK RHS TEXT & IMAGE 1 START */}
        <motion.div
          style={{
            translateY: translateY1,
            opacity: opacity1,
            left: 0,
            right: 0
          }}
          className="absolute mx-auto max-h-[60vh] my-8 w-[85vw] "
        >
          <div className="flex justify-start items-center gap-[4vw]">
            <div className="min-w-[12vw]">

            </div>
            <div className=" min-w-[25vw] h-[60vh] flex items-center justify-center">
              <motion.div  
              whileInView={{scale:1.5}}
              transition={{duration:0.5, delay: 0.15}}
              className="">
                <Image
                  alt="Product Creation"
                  src={ProductCreationPng.src}
                  width={1200}
                  height={1200}
                  className="my-auto overflow-hidden rounded-lg max-h-[60vh] max-w-[25vw]"
                  >

                </Image>
              </motion.div>
            </div>

            <motion.div 
            whileInView={{opacity: 1.0, translateX:0}}
            initial={{opacity: 0.0, translateX:-200}}
            transition={{duration:0.5, delay: 0.15}}
            className="mx-[6vw] text-dark max-w-[35vw]">
              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold">Building Impressions That Last</h1>
              <h1 className="text-lg lg:text-xl xl:text-2xl">Data Read / Write / Store Applications / Ecommerce / Portfoilio Websites</h1>
            </motion.div>
          </div>

        </motion.div>
        {/**FULL STACK RHS TEXT & IMAGE 1 END */}

        
         {/**FULL STACK RHS TEXT & IMAGE 2 START */}
         <motion.div
          style={{
            translateY: translateY2,
            opacity: opacity2,
            left: 0,
            right: 0
          }}
          className="absolute mx-auto max-h-[60vh] my-8 w-[85vw] "
        >
          <div className="flex justify-start items-center gap-[4vw]">
            <div className="min-w-[12vw]">

            </div>

            <motion.div 
            whileInView={{opacity: 1.0, translateX:0}}
            initial={{opacity: 0.0, translateX:200}}
            transition={{duration:0.5, delay: 0.15}}
            className=" text-dark max-w-[35vw]">
              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold">Building With First Impression In Mind</h1>
              <h1 className="text-lg lg:text-xl xl:text-2xl">User Experience / Animations / Load Time / SEO / Functionality</h1>
            </motion.div>

            <div className="mx-[6vw] min-w-[25vw] h-[60vh] flex items-center justify-center">
              <motion.div  
              whileInView={{scale:1.5}}
              transition={{duration:0.5, delay: 0.15}}
              className="">
                <Image
                  alt="Product Creation"
                  src={frontEndStore.src}
                  width={1200}
                  height={1200}
                  className="my-auto overflow-hidden rounded-lg max-h-[60vh] max-w-[25vw]"
                  >

                </Image>
              </motion.div>
            </div>


          </div>

        </motion.div>
        {/**FULL STACK RHS TEXT & IMAGE 2 END */}


         {/**FULL STACK RHS TEXT & IMAGE 3 START */}
         <motion.div
          style={{
            translateY: translateY3,
            opacity: opacity3,
            left: 0,
            right: 0
          }}
          className="absolute mx-auto max-h-[60vh] my-8 w-[85vw] "
        >
          <div className="flex justify-start items-center gap-[4vw]">
            <div className="min-w-[12vw]">

            </div>

            <div className=" min-w-[25vw] h-[60vh] flex items-center justify-center">
              <motion.div  
              whileInView={{scale:1.5}}
              transition={{duration:0.5, delay: 0.15}}
              className="">
                <Image
                  alt="Product Creation"
                  src={CodingAdmin.src}
                  width={1200}
                  height={1200}
                  className="my-auto overflow-hidden rounded-lg max-h-[60vh] max-w-[25vw]"
                  >

                </Image>
              </motion.div>
            </div>

            <motion.div 
            whileInView={{opacity: 1.0, translateX:0}}
            initial={{opacity: 0.0, translateX:-200}}
            transition={{duration:0.5, delay: 0.15}}
            className=" mx-[6vw] text-dark max-w-[35vw]">
              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold">Building With Safety In Mind</h1>
              <h1 className="text-lg lg:text-xl xl:text-2xl">Server Side Authentication / Data Handling / Bug Free Code</h1>
            </motion.div>




          </div>

        </motion.div>
        {/**FULL STACK RHS TEXT & IMAGE 3 END */}

        
        {false &&

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
}

      </div>


    </motion.div>
  );
};
