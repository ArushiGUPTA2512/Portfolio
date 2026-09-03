import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex gap-5 text-3xl">
      <a
        href="https://github.com/ArushiGUPTA2512"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub className="text-gray-400 transition duration-300 hover:scale-125 hover:text-amber-400" />
      </a>

      <a
        href="https://linkedin.com/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className="text-gray-400 transition duration-300 hover:scale-125 hover:text-amber-400" />
      </a>
    </div>
  );
};

export default SocialIcons;