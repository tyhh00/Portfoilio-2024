"use client";
import { motion, AnimatePresence } from "framer-motion"
import { Quattrocento } from "next/font/google";

import TypewriterTitle from "@/components/misc/typewriter-title";

const quattrocento = Quattrocento({
    subsets: ["latin"],
    weight: "400"
});


export default function Home() {
  return (
    <main className=" ">
        {/** Hero Section **/}
        <div className="min-h-screen flex items-center justify-between bg-black">
            <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <motion.div
                    initial= {{
                        opacity: 0,
                        y: -20
                    }}
                    animate={{
                        opacity: 1,
                        y:0
                    }}
                    transition={{
                        duration:0.25,
                        ease:"backInOut"
                    }}
                    className="text-center"
                >
                    <h1 className={quattrocento.className + " text-3xl md:text-4xl lg:text-5xl font-bold"}>
                        <TypewriterTitle/>
                    </h1>
                    <p className="max-w-sm md:max-w-lg lg:max-w-2xl top-8 text-gray-300">I build Software Applications, Full-Stack Web Designs, Games, and Financial Market Software. <br></br> <br></br> I'm 21, check out my portfoilio 😎</p>
                </motion.div>
            </div>
           
        </div>

    </main>
  );
}
