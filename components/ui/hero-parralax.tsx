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
    useTransform(scrollYProgress, [0.1, 0.55], [-200, -600]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0.03, 0.15], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0.0005, 0.14], [0.09, 1]),
    springConfig
  );
  const titleOpacity = useSpring(
    useTransform(scrollYProgress, [0.095, 0.125], [0.0, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0.03, 0.15], [20, 0]),
    springConfig
  );

  const translateY = useSpring(
    useTransform(scrollYProgress, [0.03, 0.15], [-1000, 400]),
    springConfig
  );

  const opacitySocials = useSpring(
    useTransform(scrollYProgress, [0.2, 0.21], [1.0, 0]),
    springConfig
  );


  
  return (
    <div
      ref={ref}
      className="min-h-[150vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-dark"
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
              <h1 className={"pt-32 text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.orange.400),theme(colors.purple.400),theme(colors.yellow.200),theme(colors.purple.400),theme(colors.green.100),theme(colors.green.300))] bg-[length:200%_auto] animate-gradient"}>
                     My Projects
              </h1>
              <div className="min-w-[100%] text-center  text-md sm:text-base md:text-lg mt-4 text-gray-100 flex items-center justify-center">
                  <div className="max-w-[80%] md:max-w-[50%]">
                      <p className=""></p>
                  </div>
              </div>

              <div className="absolute max-w-[100vw] -top-80  -z-10 translate-x-[-25%]">
                <svg id="visual" viewBox="0 0 960 540" preserveAspectRatio="none" width="180vw" height="36vh" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 333L13.7 354C27.3 375 54.7 417 82 421.8C109.3 426.7 136.7 394.3 163.8 390.5C191 386.7 218 411.3 245.2 407.2C272.3 403 299.7 370 327 365C354.3 360 381.7 383 409 390.7C436.3 398.3 463.7 390.7 491 385.2C518.3 379.7 545.7 376.3 573 380.3C600.3 384.3 627.7 395.7 654.8 380C682 364.3 709 321.7 736.2 298.8C763.3 276 790.7 273 818 278.5C845.3 284 872.7 298 886.3 305L900 312L900 601L886.3 601C872.7 601 845.3 601 818 601C790.7 601 763.3 601 736.2 601C709 601 682 601 654.8 601C627.7 601 600.3 601 573 601C545.7 601 518.3 601 491 601C463.7 601 436.3 601 409 601C381.7 601 354.3 601 327 601C299.7 601 272.3 601 245.2 601C218 601 191 601 163.8 601C136.7 601 109.3 601 82 601C54.7 601 27.3 601 13.7 601L0 601Z" fill="#fa7268"></path><path d="M0 433L13.7 430.7C27.3 428.3 54.7 423.7 82 428.3C109.3 433 136.7 447 163.8 455.8C191 464.7 218 468.3 245.2 471C272.3 473.7 299.7 475.3 327 475.8C354.3 476.3 381.7 475.7 409 472C436.3 468.3 463.7 461.7 491 442C518.3 422.3 545.7 389.7 573 379.7C600.3 369.7 627.7 382.3 654.8 399.2C682 416 709 437 736.2 443.8C763.3 450.7 790.7 443.3 818 447.2C845.3 451 872.7 466 886.3 473.5L900 481L900 601L886.3 601C872.7 601 845.3 601 818 601C790.7 601 763.3 601 736.2 601C709 601 682 601 654.8 601C627.7 601 600.3 601 573 601C545.7 601 518.3 601 491 601C463.7 601 436.3 601 409 601C381.7 601 354.3 601 327 601C299.7 601 272.3 601 245.2 601C218 601 191 601 163.8 601C136.7 601 109.3 601 82 601C54.7 601 27.3 601 13.7 601L0 601Z" fill="#eb5967"></path><path d="M0 413L13.7 433C27.3 453 54.7 493 82 511C109.3 529 136.7 525 163.8 523.5C191 522 218 523 245.2 526.7C272.3 530.3 299.7 536.7 327 534.7C354.3 532.7 381.7 522.3 409 510.2C436.3 498 463.7 484 491 472C518.3 460 545.7 450 573 451.7C600.3 453.3 627.7 466.7 654.8 468.8C682 471 709 462 736.2 456.5C763.3 451 790.7 449 818 443.2C845.3 437.3 872.7 427.7 886.3 422.8L900 418L900 601L886.3 601C872.7 601 845.3 601 818 601C790.7 601 763.3 601 736.2 601C709 601 682 601 654.8 601C627.7 601 600.3 601 573 601C545.7 601 518.3 601 491 601C463.7 601 436.3 601 409 601C381.7 601 354.3 601 327 601C299.7 601 272.3 601 245.2 601C218 601 191 601 163.8 601C136.7 601 109.3 601 82 601C54.7 601 27.3 601 13.7 601L0 601Z" fill="#da3f67"></path><path d="M0 547L13.7 545.2C27.3 543.3 54.7 539.7 82 544.8C109.3 550 136.7 564 163.8 553.2C191 542.3 218 506.7 245.2 504.2C272.3 501.7 299.7 532.3 327 545.3C354.3 558.3 381.7 553.7 409 547.2C436.3 540.7 463.7 532.3 491 536.2C518.3 540 545.7 556 573 549C600.3 542 627.7 512 654.8 502.2C682 492.3 709 502.7 736.2 504C763.3 505.3 790.7 497.7 818 497.7C845.3 497.7 872.7 505.3 886.3 509.2L900 513L900 601L886.3 601C872.7 601 845.3 601 818 601C790.7 601 763.3 601 736.2 601C709 601 682 601 654.8 601C627.7 601 600.3 601 573 601C545.7 601 518.3 601 491 601C463.7 601 436.3 601 409 601C381.7 601 354.3 601 327 601C299.7 601 272.3 601 245.2 601C218 601 191 601 163.8 601C136.7 601 109.3 601 82 601C54.7 601 27.3 601 13.7 601L0 601Z" fill="#c62368"></path></svg>
              </div>
              <div className="absolute max-w-[100vw] -top-24 rotate-180 -z-10">
                <svg id="visual" viewBox="0 0 960 540" preserveAspectRatio="none" width="180vw" height="36vh" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 333L13.7 354C27.3 375 54.7 417 82 421.8C109.3 426.7 136.7 394.3 163.8 390.5C191 386.7 218 411.3 245.2 407.2C272.3 403 299.7 370 327 365C354.3 360 381.7 383 409 390.7C436.3 398.3 463.7 390.7 491 385.2C518.3 379.7 545.7 376.3 573 380.3C600.3 384.3 627.7 395.7 654.8 380C682 364.3 709 321.7 736.2 298.8C763.3 276 790.7 273 818 278.5C845.3 284 872.7 298 886.3 305L900 312L900 601L886.3 601C872.7 601 845.3 601 818 601C790.7 601 763.3 601 736.2 601C709 601 682 601 654.8 601C627.7 601 600.3 601 573 601C545.7 601 518.3 601 491 601C463.7 601 436.3 601 409 601C381.7 601 354.3 601 327 601C299.7 601 272.3 601 245.2 601C218 601 191 601 163.8 601C136.7 601 109.3 601 82 601C54.7 601 27.3 601 13.7 601L0 601Z" fill="#fa7268"></path><path d="M0 433L13.7 430.7C27.3 428.3 54.7 423.7 82 428.3C109.3 433 136.7 447 163.8 455.8C191 464.7 218 468.3 245.2 471C272.3 473.7 299.7 475.3 327 475.8C354.3 476.3 381.7 475.7 409 472C436.3 468.3 463.7 461.7 491 442C518.3 422.3 545.7 389.7 573 379.7C600.3 369.7 627.7 382.3 654.8 399.2C682 416 709 437 736.2 443.8C763.3 450.7 790.7 443.3 818 447.2C845.3 451 872.7 466 886.3 473.5L900 481L900 601L886.3 601C872.7 601 845.3 601 818 601C790.7 601 763.3 601 736.2 601C709 601 682 601 654.8 601C627.7 601 600.3 601 573 601C545.7 601 518.3 601 491 601C463.7 601 436.3 601 409 601C381.7 601 354.3 601 327 601C299.7 601 272.3 601 245.2 601C218 601 191 601 163.8 601C136.7 601 109.3 601 82 601C54.7 601 27.3 601 13.7 601L0 601Z" fill="#eb5967"></path><path d="M0 413L13.7 433C27.3 453 54.7 493 82 511C109.3 529 136.7 525 163.8 523.5C191 522 218 523 245.2 526.7C272.3 530.3 299.7 536.7 327 534.7C354.3 532.7 381.7 522.3 409 510.2C436.3 498 463.7 484 491 472C518.3 460 545.7 450 573 451.7C600.3 453.3 627.7 466.7 654.8 468.8C682 471 709 462 736.2 456.5C763.3 451 790.7 449 818 443.2C845.3 437.3 872.7 427.7 886.3 422.8L900 418L900 601L886.3 601C872.7 601 845.3 601 818 601C790.7 601 763.3 601 736.2 601C709 601 682 601 654.8 601C627.7 601 600.3 601 573 601C545.7 601 518.3 601 491 601C463.7 601 436.3 601 409 601C381.7 601 354.3 601 327 601C299.7 601 272.3 601 245.2 601C218 601 191 601 163.8 601C136.7 601 109.3 601 82 601C54.7 601 27.3 601 13.7 601L0 601Z" fill="#da3f67"></path><path d="M0 547L13.7 545.2C27.3 543.3 54.7 539.7 82 544.8C109.3 550 136.7 564 163.8 553.2C191 542.3 218 506.7 245.2 504.2C272.3 501.7 299.7 532.3 327 545.3C354.3 558.3 381.7 553.7 409 547.2C436.3 540.7 463.7 532.3 491 536.2C518.3 540 545.7 556 573 549C600.3 542 627.7 512 654.8 502.2C682 492.3 709 502.7 736.2 504C763.3 505.3 790.7 497.7 818 497.7C845.3 497.7 872.7 505.3 886.3 509.2L900 513L900 601L886.3 601C872.7 601 845.3 601 818 601C790.7 601 763.3 601 736.2 601C709 601 682 601 654.8 601C627.7 601 600.3 601 573 601C545.7 601 518.3 601 491 601C463.7 601 436.3 601 409 601C381.7 601 354.3 601 327 601C299.7 601 272.3 601 245.2 601C218 601 191 601 163.8 601C136.7 601 109.3 601 82 601C54.7 601 27.3 601 13.7 601L0 601Z" fill="#c62368"></path></svg>
              </div>

            </div>

            <div className="absolute translate-x-[-75%] opacity-75">
              <svg id="visual" viewBox="0 0 900 900" width="1100" height="1100" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(450 300)"><path d="M165.1 -227.3C212.7 -192.7 249 -142.7 267.2 -86.8C285.3 -30.9 285.3 30.9 267.2 86.8C249 142.7 212.7 192.7 165.1 227.3C117.6 261.8 58.8 280.9 0 280.9C-58.8 280.9 -117.6 261.8 -165.1 227.3C-212.7 192.7 -249 142.7 -267.2 86.8C-285.3 30.9 -285.3 -30.9 -267.2 -86.8C-249 -142.7 -212.7 -192.7 -165.1 -227.3C-117.6 -261.8 -58.8 -280.9 0 -280.9C58.8 -280.9 117.6 -261.8 165.1 -227.3" fill="none" stroke="#FF6F61" stroke-width="3"></path></g></svg>
            </div>

            <div className="absolute translate-y-[-5%] translate-x-[-70%] opacity-75 ">
              <svg id="visual" viewBox="0 0 900 900" width="1100" height="1100" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(450 300)"><path d="M165.1 -227.3C212.7 -192.7 249 -142.7 267.2 -86.8C285.3 -30.9 285.3 30.9 267.2 86.8C249 142.7 212.7 192.7 165.1 227.3C117.6 261.8 58.8 280.9 0 280.9C-58.8 280.9 -117.6 261.8 -165.1 227.3C-212.7 192.7 -249 142.7 -267.2 86.8C-285.3 30.9 -285.3 -30.9 -267.2 -86.8C-249 -142.7 -212.7 -192.7 -165.1 -227.3C-117.6 -261.8 -58.8 -280.9 0 -280.9C58.8 -280.9 117.6 -261.8 165.1 -227.3" fill="none" stroke="#FF6F61" stroke-width="3"></path></g></svg>
            </div>

            <div className="absolute translate-y-[-12%] translate-x-[-65%] opacity-75 ">
              <svg id="visual" viewBox="0 0 900 900" width="1200" height="1200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(450 300)"><path d="M165.1 -227.3C212.7 -192.7 249 -142.7 267.2 -86.8C285.3 -30.9 285.3 30.9 267.2 86.8C249 142.7 212.7 192.7 165.1 227.3C117.6 261.8 58.8 280.9 0 280.9C-58.8 280.9 -117.6 261.8 -165.1 227.3C-212.7 192.7 -249 142.7 -267.2 86.8C-285.3 30.9 -285.3 -30.9 -267.2 -86.8C-249 -142.7 -212.7 -192.7 -165.1 -227.3C-117.6 -261.8 -58.8 -280.9 0 -280.9C58.8 -280.9 117.6 -261.8 165.1 -227.3" fill="none" stroke="#FF6F61" stroke-width="3"></path></g></svg>
            </div>
        

            <div className="absolute translate-x-[95%] translate-y-[35%] opacity-75">
              <svg id="visual" viewBox="0 0 900 900" width="1100" height="1100" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(450 300)"><path d="M165.1 -227.3C212.7 -192.7 249 -142.7 267.2 -86.8C285.3 -30.9 285.3 30.9 267.2 86.8C249 142.7 212.7 192.7 165.1 227.3C117.6 261.8 58.8 280.9 0 280.9C-58.8 280.9 -117.6 261.8 -165.1 227.3C-212.7 192.7 -249 142.7 -267.2 86.8C-285.3 30.9 -285.3 -30.9 -267.2 -86.8C-249 -142.7 -212.7 -192.7 -165.1 -227.3C-117.6 -261.8 -58.8 -280.9 0 -280.9C58.8 -280.9 117.6 -261.8 165.1 -227.3" fill="none" stroke="#FF6F61" stroke-width="3"></path></g></svg>
            </div>

            <div className="absolute translate-y-[40%] translate-x-[90%] opacity-75 ">
              <svg id="visual" viewBox="0 0 900 900" width="1100" height="1100" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(450 300)"><path d="M165.1 -227.3C212.7 -192.7 249 -142.7 267.2 -86.8C285.3 -30.9 285.3 30.9 267.2 86.8C249 142.7 212.7 192.7 165.1 227.3C117.6 261.8 58.8 280.9 0 280.9C-58.8 280.9 -117.6 261.8 -165.1 227.3C-212.7 192.7 -249 142.7 -267.2 86.8C-285.3 30.9 -285.3 -30.9 -267.2 -86.8C-249 -142.7 -212.7 -192.7 -165.1 -227.3C-117.6 -261.8 -58.8 -280.9 0 -280.9C58.8 -280.9 117.6 -261.8 165.1 -227.3" fill="none" stroke="#FF6F61" stroke-width="3"></path></g></svg>
            </div>

            <div className="absolute translate-y-[42%] translate-x-[85%] opacity-75 ">
              <svg id="visual" viewBox="0 0 900 900" width="1200" height="1200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(450 300)"><path d="M165.1 -227.3C212.7 -192.7 249 -142.7 267.2 -86.8C285.3 -30.9 285.3 30.9 267.2 86.8C249 142.7 212.7 192.7 165.1 227.3C117.6 261.8 58.8 280.9 0 280.9C-58.8 280.9 -117.6 261.8 -165.1 227.3C-212.7 192.7 -249 142.7 -267.2 86.8C-285.3 30.9 -285.3 -30.9 -267.2 -86.8C-249 -142.7 -212.7 -192.7 -165.1 -227.3C-117.6 -261.8 -58.8 -280.9 0 -280.9C58.8 -280.9 117.6 -261.8 165.1 -227.3" fill="none" stroke="#FF6F61" stroke-width="3"></path></g></svg>
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
            <p className="max-w-sm md:max-w-lg lg:max-w-xl  text-sm sm:text-md md:text-base pt-4 text-gray-200" style={{zIndex:2}}>You are on my portfoilio page! I am {age} years young. Working as a Full Stack Developer, Game Developer and Trader.</p>
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
      <div className="absolute w-full h-full bg-dark opacity-100">

      </div>
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="1200"
          width="1200"
          className="object-cover object-left-top absolute h-full w-full inset-0 rounded-lg border border-black hover:border-0 border-opacity-20"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black rounded-lg pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
