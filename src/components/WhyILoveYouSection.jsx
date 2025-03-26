import React from "react";
import { motion } from "framer-motion";

const WhyILoveYouSection = () => {
  const reasons = [
    {
      title: "YOUR SMILE",
      description: "It brightens up my darkest days",
    },
    {
      title: "YOUR HEART",
      description: "So pure and full of love",
    },
    {
      title: "YOUR SOUL",
      description: "Beautiful inside and out",
    },
  ];

  return (
    <div className="flex flex-col justify-center py-4 px-4 sm:px-6 mt-6 w-full max-w-[801px] text-base bg-white rounded-3xl shadow-[0px_10px_30px_rgba(255,105,180,0.1)]">
      {reasons.map((reason, index) => (
        <motion.div
          key={reason.title}
          className={`flex flex-col sm:flex-row sm:gap-5 items-start py-3 px-3 w-full rounded-xl bg-pink-400 bg-opacity-10 ${
            index > 0 ? "mt-2" : ""
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="font-semibold text-pink-400 uppercase">
            {reason.title}
          </div>
          <div className="text-stone-500">{reason.description}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default WhyILoveYouSection;