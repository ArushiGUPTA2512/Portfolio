import React from "react";
import { motion } from "motion/react";
import SpotlightCard from "../Common/SpotlightCard";
import AnimatedBorder from "../Common/AnimatedBorder";

const InfoCard = ({ icon: Icon, title, value }) => {
  return (
    <SpotlightCard>
      <AnimatedBorder>
        <motion.div
          whileHover={{
            y: -6,
            scale: 1.02,
          }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-4 rounded-3xl bg-white/5 p-5 backdrop-blur-xl"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/10">
            <Icon className="text-2xl text-amber-400" />
          </div>

          <div>
            <p className="text-sm text-gray-400">
              {title}
            </p>

            <h3 className="font-semibold text-white">
              {value}
            </h3>
          </div>
        </motion.div>
      </AnimatedBorder>
    </SpotlightCard>
  );
};

export default InfoCard;