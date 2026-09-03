import React from "react";
import { motion } from "motion/react";

const StatsCard = ({ number, title }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.05,
      }}
      transition={{
        duration: 0.3,
      }}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
    >
      <h2 className="text-5xl font-bold text-amber-400">
        {number}
      </h2>

      <p className="mt-4 text-gray-300">
        {title}
      </p>
    </motion.div>
  );
};

export default StatsCard;