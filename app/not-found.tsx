
import Link from 'next/link'
import {
  motion,
} from "framer-motion";
import ghostPNG from "@/images/404/ghost.png"
import Image from 'next/image';

import { Inter, Mulish, Quattrocento } from "next/font/google";
const muli = Mulish({ subsets: ["latin"]});
 
export default function NotFound() {
  return (
    
    <div className={muli.className + " min-h-screen flex items-center justify-center gap-10"}>
      <div>
        <Image 
          src={ghostPNG} alt="404 Not Found" width={0} height={0} className="h-[8rem] w-[8rem]"></Image>
      </div>
      <div>
        <h2 className="text-lg font-bold">Boo! This is a dead end page.</h2> <br></br>
        <p>I might scare you again if you come back...</p>
      </div>
    </div>
  )
}