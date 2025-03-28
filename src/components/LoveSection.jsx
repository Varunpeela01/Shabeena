import React, { useState } from "react";
import { motion } from "framer-motion";
import BackgroundCircles from "./BackgroundCircles";
import WhyILoveYouSection from "./WhyILoveYouSection";
import MemoriesSection from "./MemoriesSection";

const HeartBurst = ({ trigger }) => (
  <motion.div
    className="absolute text-pink-400 text-3xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
    key={trigger}
    initial={{ opacity: 1, scale: 1 }}
    animate={{ opacity: 0, scale: 2 }}
    transition={{ duration: 0.5 }}
  >
    ♥
  </motion.div>
);

const Confetti = ({ trigger }) => {
  const confettiVariants = {
    initial: { y: -20, opacity: 1 },
    animate: {
      y: 100,
      opacity: 0,
      rotate: [0, 360],
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`${trigger}-${i}`}
          className="absolute text-pink-400 text-xl"
          initial="initial"
          animate="animate"
          variants={confettiVariants}
          style={{
            left: `${Math.random() * 100}%`,
            top: "10%",
          }}
          transition={{ delay: i * 0.1 }}
        >
          {i % 2 === 0 ? "♥" : "✨"}
        </motion.div>
      ))}
    </div>
  );
};

const LoveSection = () => {
  const [activeTab, setActiveTab] = useState("whyILoveYou");

  return (
    <div className="relative flex overflow-hidden flex-col justify-center items-center w-full h-screen px-5 sm:px-20 bg-red-50/50">
      <BackgroundCircles className="z-0" />
      <div className="relative z-10 flex flex-col items-center w-full max-w-[943px] py-12">
        <motion.div
          className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight text-center text-pink-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          EVERY DAY I FALL MORE IN LOVE WITH YOU
        </motion.div>
        <motion.div
          className="flex gap-6 sm:gap-8 items-center mt-6 sm:mt-8 text-base sm:text-lg text-center text-pink-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            onClick={() => setActiveTab("ourMemories")}
            className={`pb-2.5 ${
              activeTab === "ourMemories" ? "border-b border-pink-400" : ""
            }`}
          >
            Our Memories
          </button>
          <button
            onClick={() => setActiveTab("whyILoveYou")}
            className={`pb-2.5 ${
              activeTab === "whyILoveYou" ? "border-b border-pink-400" : ""
            }`}
          >
            Why I Love You
          </button>
        </motion.div>
        <HeartBurst trigger={activeTab} />
        <Confetti trigger={activeTab} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {activeTab === "ourMemories" ? <MemoriesSection /> : <WhyILoveYouSection />}
        </motion.div>
      </div>
    </div>
  );
};

export default LoveSection;