import React, { useState } from "react";
import { motion } from "framer-motion";
import BackgroundCircles from "./BackgroundCircles";
import WhyILoveYouSection from "./WhyILoveYouSection";
import MemoriesSection from "./MemoriesSection";

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