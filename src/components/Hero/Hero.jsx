import React from "react";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
import Button from "../Common/Button";
import SocialIcons from "../Common/SocialIcons";
import { heroTitles } from "../../data/heroData";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import {
  FaGithub,
  FaLinkedin,
  FaJava,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const Hero = () => {
  return (
  
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-900"
    >
      {/* Background Blur */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.08),transparent_60%)]" />

      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main Container */}

        <div className="mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-20 px-6 pt-32 lg:flex-row">        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
          }}
          className="max-w-xl"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-5 py-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>

            <span className="text-sm text-gray-300">
              Hello, I'm
            </span>

            <span className="font-semibold text-amber-400">
              Arushi Gupta
            </span>
          </div>

          <h1 className="font-black leading-[0.9]">
              <span className="block text-5xl text-white md:text-6xl lg:text-7xl">
                Arushi
              </span>

              <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300 bg-clip-text text-6xl text-transparent md:text-7xl lg:text-8xl">
                Gupta
              </span>
            </h1>

            <h2 className="mt-8 mb-8 text-2xl font-semibold text-gray-300 md:text-3xl">
            <Typewriter
                words={heroTitles}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1500}
            />
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-9 text-gray-400">
            Passionate Full Stack Developer crafting modern,
            scalable, and responsive web applications using
            React, Java, TailwindCSS, and modern backend
            technologies. I love solving real-world problems
            through clean architecture and intuitive user experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

          <div className="rounded-2xl border border-white/10 bg-slate-800/60 px-5 py-4 backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-amber-400">
              15+
            </h3>

            <p className="text-sm text-gray-400">
              Projects
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-800/60 px-5 py-4 backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-amber-400">
              300+
            </h3>

            <p className="text-sm text-gray-400">
              DSA Problems
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-800/60 px-5 py-4 backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-amber-400">
              20+
            </h3>

            <p className="text-sm text-gray-400">
              Certificates
            </p>
          </div>

        </div>

          {/* Buttons */}

           <div className="mt-10 flex flex-wrap items-center gap-5">

<Button
title="Download Resume"
primary
href="/resume.pdf"
download
icon={<HiOutlineDocumentArrowDown size={18}/>}
/>

<Button
title="View Projects"
href="#projects"
/>

</div>

<Button
  title="View Projects"
  href="#projects"
/>

          {/* Social */}

        <div className="mt-10 flex items-center gap-6">
            <SocialIcons />
        </div>
        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          className="relative mt-16 lg:mt-0"
        >
          {/* Main Circle */}

          <div className="relative flex h-[420px] w-[420px] items-center justify-center rounded-full border border-white/10 bg-slate-800/40 backdrop-blur-xl">
            <div className="absolute inset-0 rounded-full bg-amber-400/10 blur-3xl"></div>
            <img
              src="/profile.png"
              alt="Profile"
              className="relative z-10 h-[340px] w-[340px] rounded-full object-cover shadow-2xl"
            />
          </div>

          {/* Floating Icons */}

          <motion.div
            animate={{
              y: [-12, 12, -12],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="absolute left-0 top-10 rounded-xl bg-white/10 p-3 backdrop-blur-lg"
          >
            <FaReact className="text-3xl text-cyan-400" />
          </motion.div>

          <motion.div
            animate={{
              y: [15, -15, 15],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute right-0 top-20 rounded-xl bg-white/10 p-3 backdrop-blur-lg"
          >
            <FaJava className="text-3xl text-orange-500" />
          </motion.div>

          <motion.div
            animate={{
              y: [-15, 15, -15],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="absolute bottom-20 left-2 rounded-xl bg-white/10 p-3 backdrop-blur-lg"
          >
            <FaNodeJs className="text-3xl text-green-500" />
          </motion.div>


          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "linear",
            }}
            className="absolute -top-10 left-1/2"
          >
            <SiMongodb className="text-3xl text-green-500" />
          </motion.div>

        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-4 lg:bottom-10 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="mb-2 text-sm text-gray-400">
          Scroll Down
        </p>

        <div className="mx-auto h-10 w-6 rounded-full border border-white/20">
          <motion.div
            animate={{
              y: [0, 18, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="mx-auto mt-2 h-2 w-2 rounded-full bg-amber-400"
          />
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;