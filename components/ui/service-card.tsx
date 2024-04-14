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
    id,
    
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
    id: number;

  }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: "0px 30px -30px 0px" , amount: inviewAmount});
    var iconKey = 1;
  return (

        <motion.div 
            key={id}
            ref={ref}
            initial = {{
                opacity:0.2, y:0
            }}
            animate={isInView ? {opacity: 1, y:0} : {opacity:0.2, y:-0}}
            transition={{
                duration:0.35,
                ease:"backInOut"
            }}
            className="pt-8 pb-8 md:flex md:justify-between md:items-center md:gap-10"
            >
            
            

            <MotionImageDisplay 
            src="https://aceternity.com/images/products/thumbnails/new/editrix.png"
            alt = "Website Developer"
            width = {600}
            height = {270}
            LTR={LTR}
            isTop={true}
            key={1}
            />
            
            
            <div className="min-h-[35vh] my-auto flex items-center justify-center" key={3}>
                <motion.div
                    initial={{
                        opacity:0.0,
                    }}
                    animate={{
                        opacity: isInView ? 1.0 : 0,
                        x: isInView ? 0 : (LTR ? -200 : 200)
                    }}
                    transition={{
                        delay: 0.01,
                        ease: "circOut"
                    }}
                >
                    <motion.h1
                        initial={{
                            x: LTR? -400:400
                        }}
                        animate={{
                            x: isInView ? 0 : (LTR? -400:400)
                        }}
                        className={(LTR ? "md:ml-[7vw]" : "md:ml-[7vw] md:mr-[7vw]" )+ " max-w-fit text-2xl md:text-3xl lg:text-4xl font-bold "}>
                            {title}
                    </motion.h1>
                    <div className={LTR ? "md:ml-[9vw]" : "md:ml-[9vw] md:mr-[9vw]"}>
                        <p className="max-w-sm md:max-w-lg lg:max-w-2xl  text-sm sm:text-md md:text-base pt-2 text-gray-300">
                            {description}
                        </p>
                        
                        <div className="pt-8 flex gap-1">

                            {displayLibraryIcons.map((e) => {
                                
                                return <LibraryIconDisplay
                                    src={e.src}
                                    alt={e.alt}
                                    darkBg={e.darkBg}
                                    key={++iconKey + id * 5}
                                    id={++iconKey + id * 5}
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
                                        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-200 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                            Contact
                                        </button>
                                    }
                                </div>
                            :
                            <></>
                        }
                    </div>
                </motion.div>
                
                
                
            </div>


            <MotionImageDisplay 
            src="https://aceternity.com/images/products/thumbnails/new/editrix.png"
            alt = "Website Developer"
            width = {600}
            height = {270}
            LTR={LTR}
            isTop={false}
            key={2}
            />
             

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
    isTop,
  }: {
    src: string,
    alt: string,
    width: number,
    height: number,
    LTR: boolean,
    isTop: boolean,
  }) => {

    var shown = "";
    if(LTR) //Text is left, Image is Right
    {
        if(isTop) //Left Image 
        {
            shown = " md:invisible md:hidden ";
        }
        else {
            shown = "invisible hidden md:visible md:block "
        }
    }else { //Image is left, Text is Right
        if (isTop) //Left Image
        {
            shown = "visible block ";
        }
        else {
            shown = "invisible hidden absolute";
        }
    }

    return (
        <motion.div className={shown + (LTR ? " md:mr-[7vw] md:ml-[0vw] " : " md:ml-[7vw] md:mr-[0vw] ") + "max-w-[60%] max-h-[60%] md:max-w-[40%] md:max-h-[40%] mx-auto md:ml-[7vw] md:mr-[0vw] pt-8 pb-8  md:pb-0 md:pt-0 md:min-h-[10vh] flex items-center justify-center  md:[perspective:1000px]  md:[transform-style:preserve-3d] "}
            initial={{
                rotateX: LTR ? 40 : -40,
                rotateY: -10,
                rotateZ: LTR ? 10 : -10
            }}
            animate={{
                translateY: shown && [0,10,0],
                translateX: shown && [0,0,0],
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
    id,
  }: {
    src: string,
    alt: string,
    darkBg: boolean,
    id: number,
  }) => {
    return (
        <Image
            src={src}
            width={24}
            height={24}
            alt={alt}
            key={id}
            className={darkBg ? "bg-black rounded-full" : "bg-white rounded-full border-2 border-black"}
            >
        </Image>
    );
  };