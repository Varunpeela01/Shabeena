import React from "react";
import { motion } from "framer-motion";
import TimelineEntry from "./TimelineEntry";

const MemoriesSection = () => {
  const memories = [
    {
      date: "January 31, 2025",
      description: "Our first meet, it was a surprise meet!",
    },
    {
      date: "February 17, 2025",
      description: "Our Second meet, where i travelled 350km for you!",
    },
    {
      date: "March 07, 2025",
      description: "Our Third meet, with a forgettable memories!",
    },
  ];

  return (
    <div className="flex flex-col justify-center py-4 px-4 sm:px-6 mt-6 w-full max-w-[801px] text-base bg-white rounded-3xl shadow-[0px_10px_30px_rgba(255,105,180,0.1)]">
      {memories.map((memory, index) => (
        <motion.div
          key={memory.date}
          className={index > 0 ? "mt-2" : ""}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <TimelineEntry date={memory.date} description={memory.description} />
        </motion.div>
      ))}
    </div>
  );
};

export default MemoriesSection;