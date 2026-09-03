import React from "react";
import { motion } from "motion/react";

const timelineData = [
  {
    year: "2024",
    title: "Started B.Tech",
    description:
      "Started my Computer Science journey at KIET Group of Institutions.",
  },
  {
    year: "2025",
    title: "Started Web Development",
    description:
      "Learned HTML, CSS, JavaScript and began building responsive websites.",
  },
  {
    year: "2026",
    title: "Built Full Stack Projects",
    description:
      "Worked on React, Java, MySQL and multiple real-world projects.",
  },
  {
    year: "2027",
    title: "AI & Full Stack Developer",
    description:
      "Building AI-powered applications and preparing for software engineering roles.",
  },
];

const Timeline = () => {
  return (
    <section className="mt-28">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center text-4xl font-bold text-white"
      >
        My{" "}
        <span className="text-amber-400">
          Journey
        </span>
      </motion.h2>

      <div className="relative mx-auto max-w-4xl">

        {/* Vertical Line */}
        <div className="absolute left-5 top-0 h-full w-1 rounded-full bg-gradient-to-b from-amber-400 via-orange-500 to-transparent"></div>

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.2,
              duration: 0.6,
            }}
            className="relative mb-14 pl-20"
          >
            {/* Circle */}
            <div className="absolute left-0 top-3 flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#0F172A] bg-amber-400 shadow-lg shadow-amber-400/50">
              <div className="h-3 w-3 rounded-full bg-white"></div>
            </div>

            {/* Card */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-400/20">

              <p className="text-sm font-semibold uppercase tracking-wider text-amber-400">
                {item.year}
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                {item.description}
              </p>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;