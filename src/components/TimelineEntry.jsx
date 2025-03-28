import React from "react";
import { motion } from "framer-motion";

const TimelineEntry = ({ date, description, index }) => {
  return (
    <motion.div
      className="flex flex-col sm:flex-row sm:gap-5 items-start py-3 px-3 w-full rounded-xl bg-pink-400 bg-opacity-10 card-hover"
      initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
    >
      <div className="font-semibold text-pink-400 uppercase">{date}</div>
      <div className="text-stone-500">{description}</div>
    </motion.div>
  );
};

export default TimelineEntry;