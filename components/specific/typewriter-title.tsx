"use client";

import React from 'react'
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const words = [
    {
      text: "Hi!",
      className: "text-2xl sm:text-3xl md:text-4xl lg:text-4xl"
    },
    {
        text: "I'm",
        className: "text-2xl sm:text-3xl md:text-4xl lg:text-4xl"
    },
    {
        text: "Yong",
        className: "font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl underline"
    },
    {
        text: "Hong.\n",
        className: "font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl underline"
    },
  ];

function TypeWritterTitle() {
  return (
    <TypewriterEffect words={words} className="" />
  )
}

export default TypeWritterTitle;