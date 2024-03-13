"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border-[#704f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#dad1f5] mr-[10px] h-8 w-8" />
        <h1 className="Welcome-text text-3xl text-[18px]">
          Building tomorrow&apos;s technology, today.
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[26px] text-white font-normal mt-[10px] text-center mb-[15px] bg-gray-900 rounded-lg p-3 animate-pulse"
      >
        Making apps with modern technology
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="font-serif tracking-wider text-3xl text-gray-600 mb-6 text-center"
      >
        It&apos;s the possibility of having a dream come true that makes life
        interesting. - Paulo Coelho
      </motion.div>
    </div>
  );
};

export default SkillText;
