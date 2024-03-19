"use client";

import React from 'react'
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const words = [
    {
      text: "Hi!",
    },
    {
        text: "I'm",
    },
    {
        text: "Yong",
        className: "font-bold lg:text-6xl underline"
    },
    {
        text: "Hong.\n",
        className: "font-bold lg:text-6xl underline"
    },
  ];

function TypeWritterTitle() {
  return (
    <TypewriterEffect words={words} className=""/>
  )
}

export default TypeWritterTitle;