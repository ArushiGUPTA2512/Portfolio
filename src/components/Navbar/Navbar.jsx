import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );

      sections.forEach((section, index) => {
        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < bottom
        ) {
          setActive(navLinks[index].name);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5">

        <div
          className={`flex items-center justify-between rounded-full border transition-all duration-500 ${
            scrolled
              ? "border-white/10 bg-slate-900/90 shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl"
              : "border-white/5 bg-slate-900/60 backdrop-blur-lg"
          } px-6 py-3`}
        >
          {/* Logo */}

          <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-amber-400
                bg-white/5
                text-lg
                font-bold
                text-amber-400
              "
            >
              {"</>"}
            </div>

          {/* Desktop Menu */}

          <ul className="hidden items-center gap-2 lg:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setActive(link.name)}
                  className={`relative rounded-full px-5 py-2 transition-all duration-300 ${
                    active === link.name
                      ? "bg-amber-400 text-black"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side */}

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://github.com/ArushiGUPTA2512"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-lg text-gray-300 transition hover:border-amber-400 hover:text-amber-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/arushi-gupta-25049a329/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-lg text-gray-300 transition hover:border-amber-400 hover:text-amber-400"
            >
              <FaLinkedin />
            </a>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 font-semibold text-black shadow-lg transition"
            >
              Resume
              <HiOutlineDocumentArrowDown size={18} />
            </motion.a>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-white lg:hidden"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="mt-4 rounded-3xl border border-white/10 bg-slate-900/95 p-6 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setMenuOpen(false);
                    setActive(link.name);
                  }}
                  className={`rounded-xl px-4 py-3 transition ${
                    active === link.name
                      ? "bg-amber-400 text-black"
                      : "text-gray-300 hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </a>
              ))}

              <a
                href="/resume.pdf"
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 py-3 font-semibold text-black"
              >
                Resume

                <HiOutlineDocumentArrowDown />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;