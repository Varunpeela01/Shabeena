import React from "react";
import { motion } from "framer-motion";
import BackgroundCircles from "./BackgroundCircles";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen bg-red-50/50">
      <BackgroundCircles className="z-0" />
      <motion.h1
        className="font-medium text-xs sm:text-sm md:text-base lg:text-lg text-pink-400 text-center typewriter"
        initial={{ top: "50%", transform: "translate(-50%, -50%)" }}
        animate={{ top: "12vh", transform: "translate(-50%, 0)" }}
        transition={{ delay: 6, duration: 1, ease: "easeInOut" }} // Delay: 4s (typewriter) + 2s (wait)
      >
        MADE WITH LOVE, JUST FOR YOU MY GIRL!
      </motion.h1>
      <motion.div
        className="relative z-10 text-pink-400 text-[20vw] md:text-[200px] font-lilita text-center leading-none opacity-20 shabeena-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 9 }} // Delay: 4s + 2s + 1s (movement) + 2s (wait)
      >
        SHABEENA
      </motion.div>
      <motion.img
        src="/person.png"
        alt="Person in pink dress"
        className="heart-image"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 11.6 }} // Delay: 4s + 2s + 1s + 2s (SHABEENA) + 2s (wait) + 0.6s (SHABEENA duration)
      />
    </div>
  );
};

export default Hero;