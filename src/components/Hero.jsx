import React from "react";
import { motion } from "framer-motion";
import BackgroundCircles from "./BackgroundCircles";

const FloatingHearts = () => (
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-pink-400 text-2xl"
        initial={{ bottom: 0, left: `${Math.random() * 100}%`, opacity: 0 }}
        animate={{ bottom: "100%", opacity: [0, 1, 0] }}
        transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: i * 0.5 }}
      >
        ♥
      </motion.div>
    ))}
  </div>
);

const PulsingHeart = () => (
  <motion.span
    className="text-pink-400 text-4xl absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
  >
    ♥
  </motion.span>
);

const FireworkHearts = () => {
  const burstVariants = {
    initial: { scale: 0, opacity: 1 },
    animate: {
      scale: 1.5,
      opacity: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-400 text-2xl"
          initial="initial"
          animate="animate"
          variants={burstVariants}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          transition={{ delay: i * 0.3, repeat: 1 }}
        >
          ♥
        </motion.div>
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen bg-red-50/50">
      <BackgroundCircles className="z-0" />
      <FireworkHearts />
      <FloatingHearts />
      <motion.h1
        className="font-medium text-xs sm:text-sm md:text-base lg:text-lg text-pink-400 text-center typewriter"
        initial={{ top: "50%", transform: "translate(-50%, -50%)" }}
        animate={{ top: "14vh", transform: "translate(-50%, 0)" }}
        transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
      >
        MADE WITH LOVE, JUST FOR YOU MY GIRL!
      </motion.h1>
      <motion.div
        className="relative z-10 text-pink-400 text-[20vw] md:text-[200px] font-lilita text-center leading-none opacity-20 shabeena-text"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.2, scale: [1, 1.05, 1] }}
        transition={{ duration: 0.8, delay: 3, repeat: 1 }}
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
        transition={{ duration: 0.6, delay: 5 }}
      />
      <PulsingHeart />
    </div>
  );
};

export default Hero;