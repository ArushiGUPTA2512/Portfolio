import React from "react";
import { motion } from "motion/react";
import CircularProgress from "./CircularProgress";
import AnimatedBorder from "../Common/AnimatedBorder";
import SpotlightCard from "../Common/SpotlightCard";

const SkillCard = ({ skill, index }) => {
  const Icon = skill.icon;

  return (
    <SpotlightCard>
        <AnimatedBorder>
        <motion.div
            initial={{
            opacity: 0,
            y: 40,
            }}
            whileInView={{
            opacity: 1,
            y: 0,
            }}
            viewport={{ once: true }}
            whileHover={{
            y: -8,
            scale: 1.04,
            rotateX:4,
            rotateY:4
            }}
            transition={{
            duration: 0.6,
            delay: index * 0.08,
            }}
            className="
                relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl p-6
                "
        >
            {/* Background Glow */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-400/10 blur-3xl" />

            <div className="relative flex items-center justify-between">
            {/* Left Side */}
            <div>
                {/* Floating Icon */}
                <motion.div
                animate={{
                    y: [0, -6, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800 shadow-lg shadow-amber-500/20"
                >
                <Icon className={`text-4xl ${skill.color} transition-transform duration-300 group-hover:scale-125`}/>
                </motion.div>

                <h3 className="text-xl font-semibold text-white">
                {skill.name}
                </h3>

                <p className="mt-2 text-gray-400">
                {skill.level}% Proficiency
                </p>
            </div>

            {/* Circular Progress */}
            <CircularProgress value={skill.level} />
            </div>
        </motion.div>
        </AnimatedBorder>
    </SpotlightCard>
  );
};

export default SkillCard;