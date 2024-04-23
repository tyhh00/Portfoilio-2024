"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TypewriterTitle from "../specific/typewriter-title";
import { Quattrocento } from "next/font/google";

import personalPhoto from '@/images/personalPhoto.jpg';

const quattrocento = Quattrocento({
    subsets: ["latin"],
    weight: "400"
});

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 4);
  const secondRow = products.slice(4, 8);
  const thirdRow = products.slice(8, 12);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0.1, 0.55], [0, 600]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0.1, 0.55], [0, -600]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0.03, 0.15], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0.033, 0.14], [0.2, 1]),
    springConfig
  );
  const titleOpacity = useSpring(
    useTransform(scrollYProgress, [0.115, 0.125], [0.0, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0.03, 0.15], [20, 0]),
    springConfig
  );

  const translateY = useSpring(
    useTransform(scrollYProgress, [0.03, 0.15], [-800, 400]),
    springConfig
  );

  const opacitySocials = useSpring(
    useTransform(scrollYProgress, [0.2, 0.21], [1.0, 0]),
    springConfig
  );


  
  return (
    <div
      ref={ref}
      className="min-h-[150vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-black"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >

        <motion.div
            style={{
                opacity: titleOpacity,
            }}
            className=""
        >
            <div className="pb-40">
              <h1 className={"text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.orange.400),theme(colors.purple.400),theme(colors.yellow.200),theme(colors.purple.400),theme(colors.green.100),theme(colors.green.300))] bg-[length:200%_auto] animate-gradient"}>
                     My Projects
              </h1>
              <div className="min-w-[100%] text-center  text-md sm:text-base md:text-lg mt-4 text-gray-100 flex items-center justify-center">
                  <div className="max-w-[80%] md:max-w-[50%]">
                      <p className=""></p>
                  </div>
              </div>
            </div>

        </motion.div>
        
        <motion.div

        className="flex flex-row-reverse space-x-reverse mb-4 sm:mb-8 md:mb-12 lg:mb-20 space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-20 ">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-4 sm:mb-8 md:mb-12 lg:mb-20 space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-20  ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="min-h-[80px] flex flex-row-reverse space-x-reverse space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-20 pb-[600px]">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {

  var date = new Date();
  var age = date.getFullYear()-2003;

  return (
    <div className="flex items-center justify-center min-w-[100%] min-h-[50vh]"  >
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
            <motion.div
                initial= {{
                    opacity: 0,
                    y: 20
                }}
                animate={{
                    opacity: 1,
                    y:0
                }}
                transition={{
                    duration:0.25,
                    ease:"backInOut"
                }}

                className="flex justify-center items-center"
                style={{zIndex:1}}
                
                >
                <Image 
                    src={personalPhoto}
                    alt="Portfoilio Picture"
                    className="rounded-full max-w-[33vw] md:max-w-[16vw] lg:max-w-[12vw]"
                    style={{zIndex:1}}
                    >
                    
                </Image>
            </motion.div>
            
            <h1 className={" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pt-8"} style={{zIndex:2}}>
                <TypewriterTitle/>
            </h1>
            <p className="max-w-sm md:max-w-lg lg:max-w-2xl  text-sm sm:text-md md:text-base pt-4 text-gray-200" style={{zIndex:2}}>Hey there! I'm {age} this year. I build software applications, full stack websites, games, and quantitative trading software. I'm based in Singapore</p>
            

        </motion.div>
    </div>
    
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product  h-80 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
