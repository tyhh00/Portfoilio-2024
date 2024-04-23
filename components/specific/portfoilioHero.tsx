import { motion, useMotionValue, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'
import { Vortex } from '../ui/vortex';

type Props = {}

function PortfoilioHero({}: Props) {
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
    
    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const heroTitle_transX = useSpring(
    useTransform(scrollYProgress, [0.05, 0.10], [0, 1500]),
    springConfig
    );

    const heroTitle_opacity = useSpring(
    useTransform(scrollYProgress, [0.09, 0.10], [1, 0]),
    springConfig
    );

    const yearCard_opacity = useSpring(
    useTransform(scrollYProgress, [0.09, 0.13], [0, 1]),
    springConfig
    );

    const yearCard_translateY = useSpring(
        useTransform(scrollYProgress, [0.09, 0.13], [-300, 0]),
        springConfig
        );

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        
    
    
    
    });

  return (
    <motion.div
    className="h-[100vh] flex justify-center overflow-hidden relative rounded-md pb-[400vh]"
    ref={ref}
    >

        <motion.h1 style={{translateX: heroTitle_transX, opacity: heroTitle_opacity}} className="top-[48vh] fixed text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.white),theme(colors.white),theme(colors.green.200),theme(colors.green.600),theme(colors.green.400),theme(colors.white),theme(colors.white))] bg-[length:200%_auto] animate-gradient">
            The Portfoilio
        </motion.h1>

        <motion.div style={{opacity: yearCard_opacity, translateY: yearCard_translateY}} className="fixed top-[20vh]">
            <div className=" rounded-full border-2 border-gray-600 shadow-xl bg-black text-white text-sm md:text-md lg:text-base xl:text-lg py-2 px-4">
                2024
            </div>
        </motion.div>

        <motion.div style={{opacity: yearCard_opacity, translateY: yearCard_translateY}} className="fixed left-[-1.8vw] top-[40vh] space-y-1">
            <motion.div initial={{rotateZ: 10}} className=" rounded-xl border-2 border-t-white border-t-2 shadow-xl bg-gray-800 bg-opacity-50 text-yellow-100 text-base md:text-lg lg:text-2xl xl:text-3xl py-4 px-10 font-thin ">
                BADMINTON ROYALE
            </motion.div>
            <motion.div initial={{rotateZ: 10}} className=" rounded-xl border-2 border-t-white border-t-2 shadow-xl bg-gray-800 bg-opacity-50 text-yellow-100 text-base md:text-lg lg:text-2xl xl:text-3xl py-4 px-10 font-thin ">
                BADMINTON ROYALE
            </motion.div>
        </motion.div>

    </motion.div>
  )
}

export default PortfoilioHero;