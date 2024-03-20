"use client";
import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion, useInView, usePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
 
import reactPNG from "@/images/reactPNG.png" 

export function ServiceCard() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });

  return (

        <motion.div 
            ref={ref}
            animate={isInView ? {opacity: 1, y:0} : {opacity:0, y:-20}}
            transition={{
                duration:4.0,
                ease:"backInOut"
            }}
            className="bg-black pt-8 pb-8 md:flex md:justify-between md:items-center md:gap-10"
            >
            <div className="min-h-[35vh]">
                <h1 className="ml-[5vw] text-2xl md:text-3xl lg:text-4xl font-bold ">
                    Website Development
                </h1>
                <p className="ml-[7vw] max-w-sm md:max-w-lg lg:max-w-2xl  text-sm sm:text-md md:text-base pt-2 text-gray-300">
                    Need a refreshed design of your company's website or a brand-new personal portfoilio website for yourself? 
                </p>
                
                <div className="ml-[7vw] pt-8">
                    <Image
                        src={reactPNG}
                        width={30}
                        height={30}
                        alt="Icon"
                        className="bg-black rounded-full border-2 border-white"
                        >
                    </Image>


                </div>

                <p className="ml-[7vw] max-w-sm md:max-w-md lg:max-w-lg  text-xs sm:text-sm md:text-md pt-2 text-gray-300">
                    Utilizing Mordern Tech Stacks to bring you an affordable quote, and a modern looking design.
                </p>

                <div className="ml-[7vw] flex justify-start gap-4 pt-8">
                    <button className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Portfoilio
                    </button>
                    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Contact
                    </button>
                </div>
            </div>

            <div className="pt-8 md:pt-0 md:min-h-[10vh] md:flex md:items-center md:justify-center md:mr-[7vw] md:ml-[0vw] ml-[7vw]">
                <Image
                    src="https://aceternity.com/images/products/thumbnails/new/editrix.png"
                    alt = "Website Developer"
                    width = {400}
                    height = {180}
                    >

                </Image>
            </div>

        </motion.div>
        
  )
}

export default ServiceCard