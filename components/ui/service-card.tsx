"use client";
import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion, useInView, usePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
 
import reactPNG from "@/images/libraryIcons/reactPNG.png" 
import nextJsPNG from "@/images/libraryIcons/nextjs.png"

export const ServiceCard =({
    title,
    description,
    displayLibraryIcons,
    libraryIconDescription,
    portfolioBtn,
    contactBtn,
    LTR,
    inviewAmount,
    
  }: {
    title: string,
    description: string;
    displayLibraryIcons:{
        src: string;
        alt: string;
        darkBg: boolean;
      }[];
    libraryIconDescription: string;
    portfolioBtn: boolean;
    contactBtn: boolean;
    LTR: boolean;
    inviewAmount: number;

  }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: "0px 50px -50px 0px" , amount: inviewAmount});
  return (

        <motion.div 
            ref={ref}
            animate={isInView ? {opacity: 1, y:0} : {opacity:0.2, y:-0}}
            transition={{
                duration:0.35,
                ease:"backInOut"
            }}
            className="min-h-[100vh] md:min-h-[65vh]  pt-8 pb-8 md:flex md:justify-between md:items-center md:gap-10"
            >
            
            {!LTR && 

                <MotionImageDisplay 
                src="https://aceternity.com/images/products/thumbnails/new/editrix.png"
                alt = "Website Developer"
                width = {400}
                height = {180}
                LTR = {false}
                />
            }   

            <div className="min-h-[35vh]">
                <h1 className={(LTR ? "ml-[5vw]" : "mr-[5vw]" )+ " max-w-fit text-2xl md:text-3xl lg:text-4xl font-bold "}>
                    {title}
                </h1>
                <div className={LTR ? "ml-[7vw]" : "mr-[7vw]"}>
                    <p className="max-w-sm md:max-w-lg lg:max-w-2xl  text-sm sm:text-md md:text-base pt-2 text-gray-300">
                        {description}
                    </p>
                    
                    <div className="pt-8 flex gap-1">

                        {displayLibraryIcons.map((e) => {
                            return <LibraryIconDisplay
                                src={e.src}
                                alt={e.alt}
                                darkBg={e.darkBg}
                                >
                            </LibraryIconDisplay>
                        })}

                    </div>

                    <p className="max-w-sm md:max-w-md lg:max-w-lg  text-xs sm:text-sm md:text-md pt-2 text-gray-300">
                        {libraryIconDescription}
                    </p>
                    
                    {
                        (portfolioBtn || contactBtn) ? 
                            <div className="flex justify-start gap-4 pt-8">
                                {portfolioBtn && 
                                    <button className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                        Portfoilio
                                    </button>
                                }
                                {contactBtn && 
                                    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                        Contact
                                    </button>
                                }
                            </div>
                        :
                        <></>
                    }
                </div>
                
                
            </div>

            {LTR && 
                <MotionImageDisplay 
                src="https://aceternity.com/images/products/thumbnails/new/editrix.png"
                alt = "Website Developer"
                width = {400}
                height = {180}
                LTR
                />
            }   

        </motion.div>
        
  )
}

export default ServiceCard

export const MotionImageDisplay = ({
    src,
    alt,
    width,
    height,
    LTR,
  }: {
    src: string,
    alt: string,
    width: number,
    height: number,
    LTR: boolean,
  }) => {
    return (
        <motion.div className={(LTR ? "md:mr-[7vw] md:ml-[0vw] " : "md:ml-[7vw] md:mr-[0vw] ") + "ml-[0vw] mr-[0vw] pt-8 md:pt-0 md:min-h-[10vh] md:flex md:items-center md:justify-center   [transform-style:preserve-3d] "}
            initial={{

            }}
            animate={{
                translateY:[0,10,0],
                translateX:[0,0,0]
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            >
            <Image
                src = {src}
                alt = {alt}
                width = {width}
                height = {height}
                >

            </Image>
        </motion.div>
    );
  };

  export const LibraryIconDisplay = ({
    src,
    alt,
    darkBg,
  }: {
    src: string,
    alt: string,
    darkBg: boolean,
  }) => {
    return (
        <Image
            src={src}
            width={24}
            height={24}
            alt={alt}
            className={darkBg ? "bg-black rounded-full" : "bg-white rounded-full border-2 border-black"}
            >
        </Image>
    );
  };