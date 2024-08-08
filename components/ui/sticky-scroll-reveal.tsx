"use client";
import React, { useEffect, useRef, useState } from "react";
import { MotionValue, useMotionValue, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
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
  }, )

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  
  const totalHeight = 800;
  const scrollRatio = (totalHeight-100)/totalHeight

  var translations = Array<MotionValue<number>>();
  var opacitys = Array<MotionValue<number>>();
  var bgParallax = useMotionValue(0);
  translations.push(useMotionValue(totalHeight));
  opacitys.push(useMotionValue(1));

  const totalSlides = 5;
  for(var i = 1; i<=totalSlides; i++) {
    translations.push(useMotionValue(totalHeight * (i+1)));
    opacitys.push(useMotionValue(0));
  }

  

  const initOffset = 100;
  const translateY3 = useMotionValue(2000);
  const opacity1to2 = useMotionValue(1);


  const lengthVarBetweenCards = 0.25;
  const scrollSpeed = 5.00;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Latest: " + latest);
    translations[0].set(latest * (height * scrollRatio) + initOffset);
    bgParallax.set(translations[0].get() - latest * totalHeight );
    for(var i = 1; i < translations.length; i++)
    {
      var transitionMax =  totalHeight * (i) * scrollRatio / (1/translations.length) * lengthVarBetweenCards;
      var transitionProcess = latest * (totalHeight / transitionMax) * transitionMax * scrollSpeed;
      translations[i].set(translations[i-1].get() + transitionMax - (transitionProcess > transitionMax ? transitionMax : transitionProcess) );
      //console.log("Translation " + i + " :" + translations[i].get() + " translation max " + transitionMax + " translation process " + transitionProcess);
      var diff = translations[i].get() - translations[i-1].get();
      if(diff < 250) {
        opacitys[i-1].set(diff * 0.004);
      }
      else opacitys[i-1].set(1);
    }





    
    
  });

  return (
    <motion.div
      className={"min-h-[100vh] flex justify-center overflow-hidden relative rounded-md" +  " pb-["+totalHeight+"vh]"}
      ref={ref}
    >
      <div className="" >


        {/**FULL STACK LHS VERTICAL TEXT START */}
        <motion.div 
          initial={{opacity:0.0, scale:1.0, left:"0vw"}}
          whileInView={{opacity:1, scale:1.0, left: (width < 650 ? width * 0.04 : width*0.08)}}
          viewport={{margin:"200px"}}
          transition={{duration:0.8, delay: 0.3, ease:"anticipate"}}
          style={{
            translateY: translations[0],
            opacity: opacity1to2,
            top: 0,
            bottom: 0,
            rotate:180,
            writingMode: 'vertical-rl'
          }}
          className="invisible hidden md:visible md:block absolute mt-[4vh] sm:mt-[1vh] md:max-w-[56vh]"
           >
          <h2 className="text-xl md:text-2xl lg:text-4xl text-dark border-l-4 border-spacing-4 border-l-yellow-600 text-right">Full Stack Web Development</h2>
        </motion.div>
        {/**FULL STACK LHS VERTICAL TEXT END */}

        {/**Circles On The Bottom Right */}
        <motion.div style={{
            translateY: bgParallax,
            }}
            className="absolute -right-[30%]">

              <svg id="visual" className="opacity-75" viewBox="0 0 900 900" width="1000" height="1000" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(450 300)"><path d="M165.1 -227.3C212.7 -192.7 249 -142.7 267.2 -86.8C285.3 -30.9 285.3 30.9 267.2 86.8C249 142.7 212.7 192.7 165.1 227.3C117.6 261.8 58.8 280.9 0 280.9C-58.8 280.9 -117.6 261.8 -165.1 227.3C-212.7 192.7 -249 142.7 -267.2 86.8C-285.3 30.9 -285.3 -30.9 -267.2 -86.8C-249 -142.7 -212.7 -192.7 -165.1 -227.3C-117.6 -261.8 -58.8 -280.9 0 -280.9C58.8 -280.9 117.6 -261.8 165.1 -227.3" fill="none" stroke="#FFFFFF" stroke-width="3"></path></g></svg>
              <svg id="visual2" className=" top-10 opacity-75" viewBox="0 0 900 900" width="1000" height="1000" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(450 300)"><path d="M165.1 -227.3C212.7 -192.7 249 -142.7 267.2 -86.8C285.3 -30.9 285.3 30.9 267.2 86.8C249 142.7 212.7 192.7 165.1 227.3C117.6 261.8 58.8 280.9 0 280.9C-58.8 280.9 -117.6 261.8 -165.1 227.3C-212.7 192.7 -249 142.7 -267.2 86.8C-285.3 30.9 -285.3 -30.9 -267.2 -86.8C-249 -142.7 -212.7 -192.7 -165.1 -227.3C-117.6 -261.8 -58.8 -280.9 0 -280.9C58.8 -280.9 117.6 -261.8 165.1 -227.3" fill="none" stroke="#FFFFFF" stroke-width="3"></path></g></svg>
              <svg id="visual3" className="top-[50%] opacity-75" viewBox="0 0 900 900" width="1000" height="1000" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(450 300)"><path d="M165.1 -227.3C212.7 -192.7 249 -142.7 267.2 -86.8C285.3 -30.9 285.3 30.9 267.2 86.8C249 142.7 212.7 192.7 165.1 227.3C117.6 261.8 58.8 280.9 0 280.9C-58.8 280.9 -117.6 261.8 -165.1 227.3C-212.7 192.7 -249 142.7 -267.2 86.8C-285.3 30.9 -285.3 -30.9 -267.2 -86.8C-249 -142.7 -212.7 -192.7 -165.1 -227.3C-117.6 -261.8 -58.8 -280.9 0 -280.9C58.8 -280.9 117.6 -261.8 165.1 -227.3" fill="none" stroke="#FFFFFF" stroke-width="3"></path></g></svg>
        </motion.div>
        {/**Circles On The Bottom Right END */}
        
        {/**FULL STACK RHS TEXT & IMAGE 1 START */}
        <motion.div
          style={{
            translateY: translations[0],
            opacity: opacitys[0],
            left: 0,
            right: 0
          }}
          className="absolute mx-auto max-h-[60vh] my-8 w-[85vw] "
        >
          <div className="md:flex justify-start items-center gap-[4vw]">
            <div className="md:min-w-[12vw]">

            </div>
            <div className=" min-w-[25vw] md:h-[30vw] h-[60vw] flex items-center justify-center">
              <motion.div  
              whileInView={{scale:1.5}}
              transition={{duration:0.5, delay: 0.15}}
              className="">
                <Image
                  alt="Product Creation"
                  src={ProductCreationPng.src}
                  width={1200}
                  height={1200}
                  className="my-auto overflow-hidden rounded-lg max-h-[60vh] max-w-[50vw] md:max-w-[25vw]"
                  >

                </Image>
              </motion.div>
            </div>

            <motion.div 
            whileInView={{opacity: 1.0, translateX:0}}
            initial={{opacity: 0.0, translateX:-200}}
            transition={{duration:0.5, delay: 0.15}}
            className="pt-[12.5vw] md:pt-0 text-center md:text-left md:mx-[6vw] text-dark max-w-[90vw] md:max-w-[35vw]">
              
              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold">Building Impressions That Last</h1>
              <h1 className="text-lg lg:text-xl xl:text-2xl">Data Read / Write / Store Applications / Ecommerce / Portfoilio Websites</h1>

            </motion.div>
          </div>

        </motion.div>
        {/**FULL STACK RHS TEXT & IMAGE 1 END */}

        
         {/**FULL STACK RHS TEXT & IMAGE 2 START */}
         <motion.div
          style={{
            translateY: translations[1],
            opacity: opacitys[1],
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
            translateY: translations[2],
            opacity: opacitys[2],
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

        {/**FULL STACK RHS TEXT & IMAGE 4 START */}
        <motion.div
          style={{
            translateY: translations[3],
            opacity: opacitys[3],
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
        {/**FULL STACK RHS TEXT & IMAGE 4 END */}


          {/**FULL STACK RHS TEXT & IMAGE 5 START */}
         <motion.div
          style={{
            translateY: translations[4],
            opacity: opacitys[4],
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
        {/**FULL STACK RHS TEXT & IMAGE 5 END */}
        
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
