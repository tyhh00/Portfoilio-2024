"use client";
import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { fancy_title_text } from "./ui/fonts"; 

export function MainNavbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className=" top-5" />
    </div>
  );
}
 
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {
      const currentScrollPos = window.scrollY

      if(currentScrollPos > prevScrollPos){
          setVisible(false)
      }else{
          setVisible(true)
      }

      setPrevScrollPos(currentScrollPos)
  }

  useEffect( () => {
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll)
  })

  return (

    <motion.div
      animate={visible ? {opacity: 1, y:0} : {opacity:0, y:-60}}
      transition={{
        duration:0.6,
        ease:"backInOut",
      }}
      className={cn("fixed top-10 inset-x-0 w-[100vw] z-50", className)}
    >
      
      <Menu setActive={setActive}>
        <div className = "flex items-center justify-start">

          <div className="w-[10vw]">
           <h1 className={fancy_title_text.className + " text-3xl"}>YH</h1>
          </div>

          <div className="flex items-center justify-center gap-8 lg:gap-16 xl:gap-20 min-w-[80vw] pr-[10vw]">


            <MenuItem href="/" setActive={setActive} active={active} item="Start">
            </MenuItem>
            <MenuItem href="/yonghong" setActive={setActive} active={active} item="About Me">
            </MenuItem>
            <MenuItem href="/gallery" setActive={setActive} active={active} item="Gallery">
            </MenuItem>

            </div>
        </div>
        
      </Menu>
    </motion.div>
  );
}