"use client";

import { useState } from 'react'
import { ServiceCard } from "@/components/ui/service-card";

import { useInView } from "react-intersection-observer";
import reactPNG from "@/images/libraryIcons/reactPNG.png"
import nextJSPNG from "@/images/libraryIcons/nextjs.png"
import { CircleChevronDown, Mouse } from 'lucide-react';

import { motion, AnimatePresence, useAnimate, useScroll, inView } from "framer-motion"

function ServiceCardList() {
    
  const [isVisible, setIsVisible] = useState(true);
    const handleClick = () => {
        !isVisible && 
        setTimeout(function () {
            var ref = document.getElementById("MainService");
            ref?.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }, 250);
    }

    const scrollToBottom = () => {
        setTimeout(function () {
            var ref = document.getElementById("LastService");
            console.log("ref" + ref);
            ref?.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }, 350);

    }

    const [mainRef, inViewMainRef] = useInView({
        /* Optional options */
        triggerOnce: false,
        rootMargin: '0px 0px',
      })

      const [bottomRef, inViewBottomRef] = useInView({
        /* Optional options */
        triggerOnce: true,
        rootMargin: '-300px 0px',
      })

      const [hoveringDisplayBtn, setHoveringDisplayButton] = useState(false)

  return (
    <div className="pt-52 space-y-32 md:space-y-16 pb-52 relative overflow-hidden" ref={mainRef}>


        <motion.button className="fixed bottom-10 left-[50%] z-10" onClick={() => scrollToBottom()}
            initial={{opacity:0}}
            animate={{opacity: isVisible ? ( (inViewMainRef && !inViewBottomRef) ? 1 : 0) : 0}}
        >
            <CircleChevronDown className=" translate-x-[-50%] w-[1.7rem] h-[1.7rem] text-gray-300"></CircleChevronDown>
        </motion.button>

        <div className="text-center">
            <h1 className={"text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.orange.400),theme(colors.purple.400),theme(colors.yellow.200),theme(colors.purple.400),theme(colors.green.100),theme(colors.green.300))] bg-[length:200%_auto] animate-gradient"}>
                    Freelance Services
            </h1>
            <div className="min-w-[100%] text-center  text-md sm:text-base md:text-lg pt-4 text-gray-200 flex items-center justify-center">
                <div className="max-w-[80%] md:max-w-[50%]">
                    <p className="">Building products that achieve and go beyond your goals is what I'm passionate in. Work with me and we can discuss affordable rates as i build up my portfoilio.</p>
                </div>
            </div>

            <div className="justify-center items-center flex pt-24 gap-3">
                <AnimatePresence>
                    {!isVisible && (
                        <motion.button

                            exit={{
                                opacity:0
                            }}

                            onClick={(e) => {setIsVisible(true);
                                e.preventDefault();

                                handleClick();}}
                            
                            onMouseOver={()=>setHoveringDisplayButton(true)}
                            onFocus={()=>setHoveringDisplayButton(true)}
                            onMouseOut={()=>setHoveringDisplayButton(false)}
                            onBlur={()=>setHoveringDisplayButton(true)}
                            className=" rounded-full min-w-[15rem] min-h-[6rem] md:min-w-[20rem] md:min-h-[8rem] bg-[linear-gradient(to_right,theme(colors.gray.900),theme(colors.slate.800),theme(colors.gray.950),theme(colors.slate.800),theme(colors.gray.900))] bg-[length:200%_auto] animate-gradient flex items-center justify-center"
                        >
                            <motion.div
                                
                                animate={{
                                    rotateZ: hoveringDisplayBtn ? [0,-10,0,10,0] : [0,0,0,0,0]
                                }}
                                transition={{
                                    repeat: Infinity
                                }}
                                >
                                <Mouse className=" text-white min-w-[2.5rem] min-h-[2.5rem] md:min-w-[3.5rem] md:min-h-[3.5rem] outline-2 outline-black"></Mouse>
                            </motion.div>
                            
                            <AnimatePresence mode="popLayout">
                                {!isVisible && (
                                    <motion.div
                                        initial={{
                                            x:0
                                        }}
                                        exit={{
                                            x:100,
                                            scale: 0.01,
                                            opacity:0
                                        }}
                                        >
                                        <h1 className=" font-bold text-base md:text-lg lg:text-lg ">
                                            Click to Display
                                        </h1>
                                        <p className="text-gray-300 text-base">Display my freelance services</p>
                                    </motion.div>                            
                                )}
                            </AnimatePresence>
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>

        </div>

        <AnimatePresence 
        mode="popLayout"
        >
            {isVisible && (
                <motion.div
                    id="MainService"
                    initial={{opacity:0,y:-50}}
                    animate={{opacity:1,y:0}}
                    exit={{opacity:0}}
                    transition={{duration:1,delay:0.1}}
                    className="pt-24"
                >
                    <ServiceCard 
                        title="Website Development"
                        description="Modernize and elevate your website design by working with me. I like to build websites with fun and unique animations to make it pop. I also believe in a customer experience first design."
                        displayLibraryIcons={
                            [
                                {src: reactPNG.src, alt: "React Icon", darkBg: true},
                                {src: nextJSPNG.src, alt: "NextJS Icon", darkBg: false},
                            ]
                        }
                        libraryIconDescription="I utilize the latest tech stacks to bring you a website product with a mordern user experience."
                        portfolioBtn={true}
                        contactBtn={true}
                        LTR={true}
                        inviewAmount={0.25}
                        id={1}
                    />
                </motion.div>
            )}
        </AnimatePresence>
        
        {isVisible && false && (
            <motion.div
                initial={{opacity:0,y:-50}}
                animate={{opacity:1,y:0}}
                exit={{opacity:0}}
                transition={{duration:1,delay:0.5}}
            >
                <ServiceCard 
                    title="Programming Tuition"
                    description="Score better, and have a productive learning session with me. Your goal is to learn and perform, and I will help you with both."
                    displayLibraryIcons={
                        [
                            {src: reactPNG.src, alt: "React Icon", darkBg: true},
                            {src: nextJSPNG.src, alt: "NextJS Icon", darkBg: false},
                        ]
                    }
                    libraryIconDescription="I'm able to teach Unity, Java, C#, HTML, CSS, JS, Python."
                    portfolioBtn={true}
                    contactBtn={true}
                    LTR={false}
                    inviewAmount={0.55}
                    id={2}
                />

            </motion.div>
        )}


        {isVisible && (
            <motion.div
                initial={{opacity:0,y:-50}}
                animate={{opacity:1,y:0}}
                exit={{opacity:0}}
                transition={{duration:1,delay:0.75}}
            >
                <ServiceCard 
                    title="Trading Indicator Development"
                    description="Make your dream TradingView indicator come to life. Or a C-Trader CBot automatic trader."
                    displayLibraryIcons={
                        [
                            {src: reactPNG.src, alt: "React Icon", darkBg: true},
                            {src: nextJSPNG.src, alt: "NextJS Icon", darkBg: false},
                        ]
                    }
                    libraryIconDescription="I build indicators on tradingview, and automated trading software on C-Trader platform for any custom strategy that is in your mind."
                    portfolioBtn={true}
                    contactBtn={true}
                    LTR={true}
                    inviewAmount={0.55}
                    id={3}
                />
            </motion.div>
        )}

        {isVisible && (
            <motion.div
                ref={bottomRef}
                id="LastService"
                initial={{opacity:0,y:-50}}
                animate={{opacity:1,y:0}}
                exit={{opacity:0}}
                transition={{duration:1,delay:1}}
            >
                <ServiceCard 
                    title="Game Development"
                    description="Looking for co-partnerships to build games, I build multiplayer networking games, AR applications, etc."
                    displayLibraryIcons={
                        [
                            {src: reactPNG.src, alt: "React Icon", darkBg: true},
                            {src: nextJSPNG.src, alt: "NextJS Icon", darkBg: false},
                        ]
                    }
                    libraryIconDescription="Over 3 years of unity experience, view my games portfoilio for better insight."
                    portfolioBtn={true}
                    contactBtn={true}
                    LTR={true}
                    inviewAmount={0.55}
                    id={4}
                />
            </motion.div>
        )}
    </div>
  )
}

export default ServiceCardList;