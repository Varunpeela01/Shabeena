import React from "react";

const TimelineEntry = ({ date, description }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-5 items-start py-3 px-3 w-full rounded-xl bg-pink-400 bg-opacity-10">
      <div className="font-semibold text-pink-400 uppercase">{date}</div>
      <div className="text-stone-500">{description}</div>
    </div>
  );
};

export default TimelineEntry;