import React from "react";
import { motion } from "motion/react";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0F172A]">

      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-amber-500/10 blur-[140px]" />

      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        {/* Top */}

        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <h2 className="text-4xl font-black text-white">
              Arushi
              <span className="text-amber-400">
                {" "}Gupta
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Passionate Full Stack Developer focused on
              building modern, scalable and interactive
              web applications with React, Java and
              Spring Boot.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <a href="#home" className="hover:text-amber-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-amber-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-amber-400 transition">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-amber-400 transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-amber-400 transition">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>📧 yourmail@gmail.com</p>

              <p>📍 Ghaziabad, India</p>

              <p>💼 Open for Opportunities</p>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-white">
              Connect
            </h3>

            <div className="flex gap-5">

              <motion.a
                whileHover={{
                  y: -5,
                  scale: 1.1,
                }}
                href="https://github.com/ArushiGUPTA2512"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-xl text-white transition hover:bg-amber-400 hover:text-black"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                whileHover={{
                  y: -5,
                  scale: 1.1,
                }}
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-xl text-white transition hover:bg-amber-400 hover:text-black"
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                whileHover={{
                  y: -5,
                  scale: 1.1,
                }}
                href="mailto:yourmail@gmail.com"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-xl text-white transition hover:bg-amber-400 hover:text-black"
              >
                <FaEnvelope />
              </motion.a>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} Arushi Gupta. All Rights Reserved.
          </p>

          <motion.button
            whileHover={{
              y: -4,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={scrollToTop}
            className="
            flex
            items-center
            gap-2
            rounded-full
            bg-gradient-to-r
            from-amber-400
            to-orange-500
            px-6
            py-3
            font-semibold
            text-black
            shadow-lg
            shadow-amber-500/20
            "
          >
            <FaArrowUp />

            Back to Top
          </motion.button>

        </div>

      </div>

    </footer>
  );
};

export default Footer;