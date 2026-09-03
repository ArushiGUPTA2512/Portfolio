import React from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

const ProjectButtons = ({ github, live }) => {
  return (
    <div className="mt-6 flex gap-4">
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="
        flex
        items-center
        gap-2
        rounded-xl
        border
        border-white/10
        bg-white/5
        px-5
        py-3
        text-white
        transition
        duration-300
        hover:border-amber-400
        hover:text-amber-400
        "
      >
        <FaGithub />
        GitHub
      </a>

      <a
        href={live}
        target="_blank"
        rel="noreferrer"
        className="
        flex
        items-center
        gap-2
        rounded-xl
        bg-gradient-to-r
        from-amber-400
        to-orange-500
        px-5
        py-3
        font-semibold
        text-black
        transition
        duration-300
        hover:scale-105
        "
      >
        <HiOutlineExternalLink />
        Live Demo
      </a>
    </div>
  );
};

export default ProjectButtons;