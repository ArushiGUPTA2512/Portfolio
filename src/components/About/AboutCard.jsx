import React from "react";
import { easeOut, motion } from "motion/react";
import SpotlightCard from "../Common/SpotlightCard";
import AnimatedBorder from "../Common/AnimatedBorder";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const AboutCard = ({ icon: Icon, title, description }) => {
  return (
    <SpotlightCard>
      <AnimatedBorder>
        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={cardVariants}

          whileHover={{
            y: -8,
            scale: 1.04,
            rotateX:3,
            rotateY:3,
          }}
          transition={{
            duration: 0.3,
          }}
          className="relative overflow-hidden rounded-3xl bg-white/5 p-7 backdrop-blur-xl"
        >
          {/* Glow */}
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-amber-400/10 blur-3xl" />

          {/* Icon */}
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
            className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800 shadow-lg shadow-amber-400/20"
          >
            <Icon className="text-5xl text-amber-400" />
          </motion.div>

          <h3 className="mb-3 text-2xl font-semibold text-white">
            {title}
          </h3>

          <p className="leading-8 text-gray-400">
            {description}
          </p>
        </motion.div>
      </AnimatedBorder>
    </SpotlightCard>
  );
};

export default AboutCard;