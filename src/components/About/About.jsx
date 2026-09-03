import React from "react";
import { motion } from "motion/react";
import AboutCard from "./AboutCard";
import StatsCard from "./StatsCard";
import Timeline from "./Timeline";
import InfoCard from "./InfoCard";
import { personalInfo } from "../../data/personalInfo";

import { aboutCards, statistics } from "../../data/aboutData";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0F172A] py-28"
     >
        {/* Background Glow */}

        <div className="absolute left-1/2 top-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[140px]" />

        <div className="absolute -left-40 top-80 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-amber-400/10 blur-[120px]" />

        {/* Grid */}

        <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
                backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
                `,
                backgroundSize: "60px 60px",
            }}
        />
       <div className="mx-auto max-w-7xl px-6">

            {/* Heading */}

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-24 text-center"
                >
                <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-5 py-2 text-sm font-medium text-amber-400">
                    Get To Know Me
                </span>

                <h2 className="mt-6 text-5xl font-bold md:text-6xl">
                    About{" "}
                    <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                    Me
                    </span>
                </h2>

                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
                    Passionate Full Stack Developer building scalable applications,
                    intuitive user experiences, and solving real-world problems
                    using modern technologies.
                </p>
            </motion.div>

            <motion.div
            className="mb-24 grid items-center gap-16 lg:grid-cols-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            >
            {/* Left */}

            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.8,
                }}
                whileInView={{
                    opacity: 1,
                    scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.8,
                }}
                className="relative mx-auto"
                >

                {/* Background Glow */}

                <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-[90px]" />

                {/* Rotating Ring */}

             <motion.div
                animate={{
                rotate: 360,
                }}
                transition={{
                repeat: Infinity,
                duration: 15,
                ease: "linear",
                }}
                className="
                absolute
                inset-0
                rounded-full
                border-2
                border-dashed
                border-amber-400/30
                "
                />

                {/* Glass Circle */}

                <div
                    className="
                    relative
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    p-3
                    backdrop-blur-xl
                    shadow-2xl
                    "
                >

                    <img
                        src="/profile.png"
                        alt="Arushi Gupta"
                        className="
                        h-80
                        w-80
                        rounded-full
                        object-cover
                        transition
                        duration-500
                        hover:scale-105
                        "
                    />

                </div>

            {/* Status Badge */}

            <div
                className="
                absolute
                bottom-5
                right-0
                rounded-full
                border
                border-emerald-400/30
                bg-emerald-500/10
                px-5
                py-2
                backdrop-blur-xl
                "
             >

                <p className="text-sm font-medium text-emerald-400">

                ● Available for Opportunities

                </p>

            </div>

        </motion.div>

        {/* Right */}

        <div>

            <h3 className="text-5xl font-bold leading-tight text-white">

            Hi, I'm

            <br />

            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">

            Arushi Gupta

            </span>

            </h3>

            <p className="mt-8 leading-9 text-gray-400">

            I'm a passionate Computer Science student focused on
            building scalable full stack applications with React,
             Java and modern backend technologies.

            I enjoy transforming ideas into clean,
            interactive and user-friendly digital experiences.

            </p>
 
                <div className="mt-10 grid grid-cols-2 gap-5">

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition duration-300 hover:border-amber-400">
                    <h4 className="text-lg font-semibold text-white">
                    Full Stack
                    </h4>

                    <p className="mt-2 text-sm text-gray-400">
                    React, Java & Spring Boot
                    </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition duration-300 hover:border-amber-400">
                    <h4 className="text-lg font-semibold text-white">
                    UI Design
                    </h4>

                    <p className="mt-2 text-sm text-gray-400">
                    Modern & Responsive Interfaces
                    </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition duration-300 hover:border-amber-400">
                    <h4 className="text-lg font-semibold text-white">
                    Problem Solving
                    </h4>

                    <p className="mt-2 text-sm text-gray-400">
                    Data Structures & Algorithms
                    </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition duration-300 hover:border-amber-400">
                    <h4 className="text-lg font-semibold text-white">
                    Learning
                    </h4>

                    <p className="mt-2 text-sm text-gray-400">
                    AI & Cloud Technologies
                    </p>
                </div>

                </div>

            <div className="mt-8 flex flex-wrap gap-4">

                    <div className="rounded-full bg-white/5 px-5 py-3 text-sm text-white">

                    ⚛ React

                    </div>

                    <div className="rounded-full bg-white/5 px-5 py-3 text-sm text-white">

                    ☕ Java

                    </div>

                    <div className="rounded-full bg-white/5 px-5 py-3 text-sm text-white">

                    💻 Full Stack

                    </div>

            </div>
            <button
                className="
                mt-10
                rounded-full
                bg-gradient-to-r
                from-amber-400
                to-orange-500
                px-8
                py-4
                font-semibold
                text-black
                transition
                duration-300
                hover:scale-105"
                >
                Download Resume

            </button>

            </div>

        </motion.div>

        <div className="mb-24 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {personalInfo.map((item, index) => (
                <InfoCard
                key={index}
                icon={item.icon}
                title={item.title}
                value={item.value}
                />
            ))}
        </div>

        {/* Cards */}

        <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    visible: {
                    transition: {
                        staggerChildren: 0.15,
                    },
                    },
                }}
             className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            >
          {aboutCards.map((item) => (
            <AboutCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </motion.div>

        {/* Stats */}

        <div className="mt-24 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {statistics.map((item) => (
            <StatsCard
              key={item.id}
              number={item.number}
              title={item.title}
            />
          ))}
        </div>

        {/* Timeline */}

        <div className="mt-28">
            <Timeline />
        </div>

      </div>
    </section>
  );
};

export default About;