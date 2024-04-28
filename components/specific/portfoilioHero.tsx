import { MotionValue, animate, motion, motionValue, useMotionValue, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'

import Image from 'next/image';
import { LucideExpand } from 'lucide-react';

import prft_vnc_hp from "@/images/portfoilio/vnclosure/homepage.png"
import prft_vn from "@/images/portfoilio/vortexnetwork/Vortex_150Player.png"
import prft_ecom_hp from "@/images/portfoilio/ecommerce/ecommerce_itemshowcase.jpg"

import { inView } from "framer-motion"

type Year = {
    yearIDinDecsending: number;
    yearTitleText: string | JSX.Element;
    cards: Card[];
}

type Props = {
    yearsList: Year[]
}

enum AnimationYearState {
    NOT_STARTED,
    STARTED,
    ENDED,
    NULL,
};

type AnimationYearSequence = {
    yr: number;
    state: AnimationYearState;
    animValue: MotionValue;
}

function PortfoilioHero({yearsList}: Props) {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const ref = useRef<any>(null);

    var yearanimations : Array<AnimationYearSequence> = []
    var yearInView: [];
    var cardsList : Array<Card> = [];
    var yearOffset = 0;
    yearsList.map((year) => { 
        yearanimations.push( 
            {yr: year.yearIDinDecsending, 
                state: AnimationYearState.NOT_STARTED,
            animValue: motionValue(0)}
        ); 

        year.cards.forEach((card) => {
            cardsList.push(card);
        })
    });
    const [yearAnims, setYearAnims] = useState(yearanimations);

    const [year, setYear] = useState(yearsList[0].yearIDinDecsending)
    const [cards, setCards] = useState(yearsList[0].cards)
  
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

    const titleText_opacity = useSpring(
    useTransform(scrollYProgress, [0.09, 0.13], [0, 0.5]),
    springConfig
    );

    const cardScroll = useMotionValue(0);

    function yearExit() {
        let animSequence = yearAnims.find((searchYear) => {
            if(searchYear.yr == year && searchYear.state != AnimationYearState.ENDED)
            {
                searchYear.state = AnimationYearState.ENDED;
                
                animate(searchYear.animValue, -1000, { duration: 0.5 })
                console.log("State ended for year " + year);
            }
        });
        setYearAnims(yearAnims);
        
    }

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        var i = (latest - 0.13) * 1.149425287356322;
        var scrollProgress = 0;
        if(latest >= 0.13)
        {
            scrollProgress = (-i * 4000);
            console.log("Scroll " + cardScroll.get() + " width " + width);

            var foundYr = yearsList.find((y) => y.yearIDinDecsending == year);
            if(foundYr != null)
                {
                    var ele = document.getElementById(foundYr.yearIDinDecsending.toString() + "-end") || "foaiwda";
                    
                    inView(ele, yearExit);
                }
        }
        
        cardScroll.set(scrollProgress);
        
    });



  return (
    <motion.div
    className="h-[100vh] flex justify-center overflow-hidden relative rounded-md pb-[1200vh]"
    ref={ref}
    >

        <motion.h1 style={{translateX: heroTitle_transX, opacity: heroTitle_opacity}} className="top-[44vh] -z-[1] fixed text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.white),theme(colors.white),theme(colors.green.200),theme(colors.green.600),theme(colors.green.400),theme(colors.white),theme(colors.white))] bg-[length:200%_auto] animate-gradient">
            The Portfoilio
        </motion.h1>
        <motion.h1 style={{translateX: heroTitle_transX, opacity: heroTitle_opacity}} className="top-[48vh] fixed text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.white),theme(colors.white),theme(colors.green.200),theme(colors.green.600),theme(colors.green.400),theme(colors.white),theme(colors.white))] bg-[length:200%_auto] animate-gradient">
            The Portfoilio
        </motion.h1>

        <motion.div style={{opacity: yearCard_opacity, translateY: yearCard_translateY}} className="fixed top-[20vh]">
            <div className="flex justify-center items-center gap-3">
                <div className="opacity-50  scale-90 rounded-full border-2 border-gray-600 shadow-xl bg-black text-white text-sm md:text-md lg:text-base xl:text-lg py-2 px-4">
                    {year-1}
                </div>
                <div className=" rounded-full border-2 border-gray-600 shadow-xl bg-black text-white text-sm md:text-md lg:text-base xl:text-lg py-2 px-4">
                    {year}
                </div>
                <div className="opacity-50 scale-90 rounded-full border-2 border-gray-600 shadow-xl bg-black text-white text-sm md:text-md lg:text-base xl:text-lg py-2 px-4">
                    {year+1}
                </div>
            </div>
        </motion.div>

        <motion.div style={{opacity: titleText_opacity, translateY: yearCard_translateY, rotateZ: 0, }} className="fixed flex items-center justify-center top-[30vh] text-gray-600 font-bold  text-4xl">
            <p>I generally didnt do much this year tbh.<br></br> I'm serving national service in 2024.</p>
        </motion.div>

        <motion.div style={{opacity: yearCard_opacity, translateY: yearCard_translateY}} className="fixed right-[0.0vw] top-[45vh] ">
            <motion.div className="">
                {
                cards.map((card, i) => (
                    <motion.div 
                        style={{
                            x: cardScroll,
                            left: (yearAnims.find((searchYr) => searchYr.yr == year))?.animValue || motionValue(0) + "rem"
                        }}
                        initial={{
                            translateX: (-12.5 + i * 30) + "rem"
                        }}

                        key={card.id} 
                        className={card.thumbn_addiClassNames + " absolute w-[25rem] h-[22rem] rounded-3xl text-gray-300 space-y-4 "}>
                        <div className="px-8 pt-8 flex justify-between items-baseline">
                            <div className="">
                                <h2 className="text-lg font-bold ">{card.thumbn_title}</h2>
                                <p className={"text-sm font-thin text-gray-500 w-["+card.thumbn_descripWidth+"%]"}>{card.thumbn_descrip} </p>
                            </div>
                            <motion.button disabled={!card.hasExpandableContent}>
                                <LucideExpand className="w-[1rem] h-[1rem]"></LucideExpand>
                            </motion.button>
                        </div>

                        <Image src={card.thumbn_imageSRC} alt={card.thumbn_title} width={1920} height={1080} className="mx-auto w-[80%] rounded-xl"></Image>
                    </motion.div>
                )
                )}
                
                <motion.div 
                id={year.toString()+"-end"}
                style={{
                    x: cardScroll
                }}
                initial={{
                    translateX: ((4 * 30))+"rem" ,
                }}
                className="h-[22rem] w-[2rem] rounded-3xl bg-gradient-to-l from-slate-50 to-blue-300 ">

                </motion.div>

            </motion.div>
        </motion.div>

    </motion.div>
  )
}

export default PortfoilioHero;

type Card = {
    id: number;
    thumbn_title: string;
    thumbn_descrip: string;
    thumbn_descripWidth: number;
    thumbn_imageSRC: string; 
    thumbn_addiClassNames: string;
    hasExpandableContent: boolean;
    expandableContentPage: JSX.Element | React.ReactNode | string;

    //Handled internally

  };

  //WOP
type ExpandableContentsPage = {
    id: number;

}





export const YearShowcase = ({
    year,
    cards,
  }: {
    year: number,
    cards: Card[]
  }) => {

    return (
        <></>
    );
  };

export const Tag = ({
    tagType
  }: {
    tagType: string,
  }) => {

    var classVars = "";
    var tagDisplayName = "";
    switch(tagType)
    {
        case "full-stack":
            classVars += "bg-[#1A4D2E] border rounded-3xl p-1 border-[#4F6F52] text-[#E8DFCA]";
            tagDisplayName = "Full Stack"
            break;

    }

    return (
        <div className={" w-fit h-auto text-xs " + classVars}>
            {tagDisplayName}
        </div>
    );
  };