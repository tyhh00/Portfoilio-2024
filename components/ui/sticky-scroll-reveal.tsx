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

import { fancy_title_text } from "./fonts";


import ProductCreationPng from "@/images/portfoilio/fnf/detailedSS/ProductVariantCreation.png"
import frontEndStore from "@/images/portfoilio/fnf/fnfstorefront.png"
import CodingAdmin from "@/images/portfoilio/fnf/detailedSS/CodingBlockAdmin.png"
import VortexNetwork from "@/images/portfoilio/vortexnetwork/Vortex_150Player.png"
import UnityGameDev from "@/images/portfoilio/nyp/iwp/IWP.png"

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
  
  const totalHeight = 1200;
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

  const categories = 2;
  var categoriesOpacity = new Map<number, MotionValue<number>>();

  const webDevSlides = 3;
  categoriesOpacity.set(webDevSlides - 1, useMotionValue(1)); //Web Dev Category, since web dev got 3 slides, opacities up to array index 2 used to calculate

  const gameDevSlides = 2;
  categoriesOpacity.set(webDevSlides + gameDevSlides - 1, useMotionValue(0));

  

  const initOffset = height * (width > 1200 ?  0.016 : 0.016);
  //console.log("init offset " + initOffset);


  //For Even amount: 1/totalSlides for length
  const lengthVarBetweenCards = 0.16;
  const scrollSpeed = 5.00;

  translations[0].set(0.0 * (height * scrollRatio) + initOffset);
  categoriesOpacity.set(webDevSlides, useMotionValue(1));

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    //console.log("Latest: " + latest);
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
      const opac = opacitys[i-1].get();
      //console.log("Opacity " + (i-1) + " : " + opacitys[i-1].get());
    }
    var prevKey = -1;
    var prevValue = 0
    for (let [key, value] of categoriesOpacity) {
      var totalOpacity = 0;
      for(var i = prevKey + 1; i <= key; i++)
      {
        totalOpacity += opacitys[i].get();
      }
      if(totalOpacity > 1) totalOpacity = 1;
      totalOpacity -= (prevValue);
      value.set(totalOpacity);
      prevKey = key;
      prevValue += value.get();
    }
  });

  return (
    <motion.div
      className={"min-h-[100vh] flex justify-center overflow-hidden relative rounded-md" +  " pb-[1200vh]"}
      ref={ref}
    >
      <div className="" >


        {/**FULL STACK LHS VERTICAL TEXT START */}
        <SkillTitle
          title="Full Stack Web Development"
          titleColor="yellow-600"

          translateY={translations[0]}
          opacity={categoriesOpacity.get(webDevSlides - 1) as MotionValue<number>}

          screenWidth={width}
        />
        {/**FULL STACK LHS VERTICAL TEXT END */}

        <SkillTitle
          title="Game Development"
          titleColor="purple-600"

          translateY={translations[0]}
          opacity={categoriesOpacity.get(webDevSlides + gameDevSlides - 1) as MotionValue<number>}

          screenWidth={width}
        />

        

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

        {opacitys.forEach((opac) => {})}
        {translations.forEach((trans) => {})}
        
        {/**FULL STACK RHS TEXT & IMAGE 1 START */}
        <ProductCard
          src= {ProductCreationPng.src}
          alt="Product Creation Image"
          key={0}
          titleBold="Building Websites With Technical Implementations"
          description="Data Read / Write / Store Applications / Ecommerce / Portfoilio Websites"
          textLeft={false}
          translateY={translations[0]}
          opacity={opacitys[0]}
        />
        {/**FULL STACK RHS TEXT & IMAGE 1 END */}
        
        
         {/**FULL STACK RHS TEXT & IMAGE 2 START */}
         <ProductCard
          src= {frontEndStore.src}
          alt="FNF Front End Image"
          key={1}
          titleBold="Building With First Impression In Mind"
          description="User Experience / Animations / Load Time / SEO / Functionality"
          textLeft={true}
          translateY={translations[1]}
          opacity={opacitys[1]}
        />
        {/**FULL STACK RHS TEXT & IMAGE 2 END */}


         {/**FULL STACK RHS TEXT & IMAGE 3 START */}
         <ProductCard
          src= {CodingAdmin.src}
          alt="FNF Backend Coding Source"
          key={2}
          titleBold="Building With Safety In Mind"
          description="Server Side Authentication / Data Handling / Bug Free Code"
          textLeft={false}
          translateY={translations[2]}
          opacity={opacitys[2]}
        />

        {/**FULL STACK RHS TEXT & IMAGE 3 END */}

        {/**FULL STACK RHS TEXT & IMAGE 4 START */}
        <ProductCard
          src= {VortexNetwork.src}
          alt="Vortex Network"
          key={3}
          titleBold="Ran Successful Minecraft Networks"
          description="Successfully managed and grown a 1500 MAU network of games. Most successfully the Prisons Gamemode. Generated over $10,000USD"
          textLeft={true}
          translateY={translations[3]}
          opacity={opacitys[3]}
        />

        {/**FULL STACK RHS TEXT & IMAGE 4 END */}

        {/**FULL STACK RHS TEXT & IMAGE 5 START */}
        <ProductCard
          src= {UnityGameDev.src}
          alt="Unity Game Developer"
          key={4}
          titleBold="Experienced Unity Developer"
          description="P2P Networking / FPS Game Creation / 2D & 3D Development / Server Side Storage / 3 Years of Unity Experience"
          textLeft={false}
          translateY={translations[4]}
          opacity={opacitys[4]}
        />

        {/**FULL STACK RHS TEXT & IMAGE 5 END */}

        

      </div>


    </motion.div>
  );
};

export const SkillTitle = ({
  title,
  titleColor,
  translateY,
  opacity,

  screenWidth,
}:{
  title: string;
  titleColor: string;

  translateY: MotionValue<number>;
  opacity: MotionValue<number>;

  screenWidth: number;
})=> {
  var borderColor = "border-l-" + titleColor;
  console.log("borderc" + borderColor);
  return (
    <div>
        <motion.div 
          initial={{scale:1.0, left:"0vw"}}
          whileInView={{ scale:1.0, left: screenWidth*0.08}}
          viewport={{margin:"200px"}}
          transition={{duration:0.8, delay: 0.3, ease:"anticipate"}}
          style={{
            translateY: translateY,
            opacity: opacity,
            top: 0,
            bottom: 0,
            rotate:180,
            writingMode: 'vertical-rl'
          }}
          className="invisible hidden md:visible md:block absolute mt-[4vh] sm:mt-[1vh] md:max-w-[56vh]"
           >
          <h2 className={"text-xl md:text-2xl lg:text-4xl text-dark border-l-4 border-spacing-4 "+ borderColor+ " text-right"}>{title}</h2>
        </motion.div>

        <motion.div 
          initial={{opacity:0.0, scale:1.0, y: -100}}
          whileInView={{opacity:1, scale:1.0, y:0}}
          viewport={{margin:"200px"}}
          transition={{duration:0.8, delay: 0.2, ease:"anticipate"}}
          style={{
            translateY: translateY,
            opacity: opacity,
          }}
          className="md:invisible md:hidden visible block "
           >
          <h2 className={fancy_title_text.className + " text-xl md:text-2xl lg:text-4xl text-"+titleColor+" rounded-xl p-1 "}>{title}</h2>
        </motion.div>
    </div>
  );
};

export const ProductCard = ({
  src,
  alt,
  key,
  titleBold,
  description,
  textLeft,
  translateY,
  opacity,
}: {
  src: string;
  alt: string;
  key: number;
  titleBold: string;
  textLeft: boolean;
  description: string;

  translateY: MotionValue<number>;
  opacity: MotionValue<number>;
}) => {
  return (
    <motion.div
    style={{
      translateY: translateY,
      opacity: opacity,
      left: 0,
      right: 0,
    }}
    key={key}
    className="absolute mx-auto max-h-[60vh] my-2 md:my-8 w-[85vw] "
  >
    <div className="md:flex justify-start items-center gap-[4vw]">
      <div className="md:min-w-[12vw]">

      </div>

      {textLeft &&
        <motion.div 
        whileInView={{opacity: 1.0, translateX:0}}
        initial={{opacity: 0.0, translateX:-200}}
        transition={{duration:0.5, delay: 0.15}}
        className="pt-[5vw] tiny:pt-[0vw] sm:pt-[0vw] md:pt-0 text-center md:text-left text-dark max-w-[90vw] md:max-w-[35vw]">
          
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">{titleBold}</h1>
          <h1 className="text-base md:text-lg lg:text-xl xl:text-2xl">{description}</h1>

        </motion.div>
      }

      <div className={(textLeft ? "mx-[6vw]" : "") +" min-w-[25vw] md:h-[30vw] h-[60vw] flex items-center justify-center"}>
        <motion.div  
        whileInView={{scale:1.5}}
        transition={{duration:0.5, delay: 0.15}}
        className="">
          <Image
            alt={alt}
            src={src}
            width={1200}
            height={1200}
            className={ "my-auto overflow-hidden rounded-lg max-h-[60vh] max-w-[50vw] tiny:max-w-[44vw] sm:max-w-[42vw] md:max-w-[25vw]"}
            >

          </Image>
        </motion.div>
      </div>

      {!textLeft &&
        <motion.div 
        whileInView={{opacity: 1.0, translateX:0}}
        initial={{opacity: 0.0, translateX:-200}}
        transition={{duration:0.5, delay: 0.15}}
        className="pt-[5vw] tiny:pt-[0vw] sm:pt-[0vw] md:pt-0 text-center md:text-left md:mx-[6vw] text-dark max-w-[90vw] md:max-w-[35vw]">
          
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">{titleBold}</h1>
          <h1 className="text-base md:text-lg lg:text-xl xl:text-2xl">{description}</h1>

        </motion.div>
      }
    </div>

  </motion.div>
  );
};