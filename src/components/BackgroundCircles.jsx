import React from "react";
import { motion } from "framer-motion";

const BackgroundCircles = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute w-[50vw] h-[50vw] md:w-[800px] md:h-[800px] rounded-full bg-pink-300/40"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          left: "-10%",
          top: "5%",
          filter: "blur(calc(50px + 2vw))",
        }}
      />
      <motion.div
        className="absolute w-[45vw] h-[45vw] md:w-[700px] md:h-[700px] rounded-full bg-peach-300/40"
        animate={{
          x: [0, -70, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          right: "-5%",
          top: "20%",
          filter: "blur(calc(40px + 2vw))",
        }}
      />
      <motion.div
        className="absolute w-[60vw] h-[60vw] md:w-[900px] md:h-[900px] rounded-full bg-pink-400/30"
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          left: "15%",
          bottom: "-10%",
          filter: "blur(calc(60px + 2vw))",
        }}
      />
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-pink-200"
          animate={{ opacity: [0, 1, 0], scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
        />
      ))}
    </div>
  );
};

export default BackgroundCircles;