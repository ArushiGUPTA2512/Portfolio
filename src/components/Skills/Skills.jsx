import React, { useState } from "react";
import { motion } from "motion/react";

import SkillCategory from "./SkillCategory";
import { skillsData } from "../../data/skillsData";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#0F172A] py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-28 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[140px]" />

      <div className="absolute -left-40 top-96 h-96 w-96 rounded-full bg-orange-500/10 blur-[130px]" />

      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-amber-400/10 blur-[130px]" />

      <div
        className="
        absolute
        inset-0
        opacity-[0.03]
        "
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute left-20 top-40 h-5 w-5 animate-pulse rounded-full bg-amber-400/50" />

      <div className="absolute right-32 top-60 h-3 w-3 animate-ping rounded-full bg-orange-400/40" />

      <div className="absolute bottom-24 left-1/4 h-4 w-4 animate-pulse rounded-full bg-amber-500/50" />

      <div className="absolute bottom-40 right-1/3 h-6 w-6 animate-pulse rounded-full bg-orange-500/30" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-5xl font-bold md:text-6xl">
          <span className="text-white">
            Technical
          </span>{" "}
          <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-gray-400">
          I craft scalable, high-performance web applications using modern
          technologies across the frontend, backend, databases, and cloud ecosystem.
        </p>
        </motion.div>

        {/* Category Buttons */}
        <div className="my-16 flex flex-wrap justify-center gap-5">
          {skillsData.map((item) => (
            <button
              key={item.category}
              onClick={() => setActiveCategory(item.category)}
              className={`rounded-full px-6 py-3 font-medium transition-all duration-300 ${
                activeCategory === item.category
                  ? "bg-amber-400 text-black"
                  : "bg-white/5 text-white hover:bg-white/10"
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Skills */}
        <div className="mt-20">
          {skillsData
            .filter((item) => item.category === activeCategory)
            .map((item) => (
              <SkillCategory
                key={item.category}
                category={item.category}
                skills={item.skills}
              />
            ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;