import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaJava,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

export const skillsData = [
  {
    category: "Frontend",
    skills: [
      {
        name: "HTML",
        icon: FaHtml5,
        color: "text-orange-500",
        level: 95,
      },
      {
        name: "CSS",
        icon: FaCss3Alt,
        color: "text-blue-500",
        level: 90,
      },
      {
        name: "JavaScript",
        icon: FaJs,
        color: "text-yellow-400",
        level: 88,
      },
      {
        name: "React",
        icon: FaReact,
        color: "text-cyan-400",
        level: 90,
      },
      {
        name: "Tailwind",
        icon: SiTailwindcss,
        color: "text-sky-400",
        level: 92,
      },
      
    ],
  },

  {
    category: "Backend",
    skills: [
      {
        name: "Java",
        icon: FaJava,
        color: "text-orange-500",
        level: 90,
      },
      {
        name: "Spring Boot",
        icon: SiSpringboot,
        color: "text-green-500",
        level: 80,
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "text-green-500",
        level: 75,
      },
    ],
  },

  {
    category: "Database",
    skills: [
      {
        name: "MySQL",
        icon: SiMysql,
        color: "text-blue-500",
        level: 88,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-green-500",
        level: 82,
      },
    ],
  },

  {
    category: "Tools",
    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "text-orange-500",
        level: 90,
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "text-white",
        level: 92,
      },
      {
        name: "VS Code",
        icon: FaReact,
        color: "text-blue-500",
        level: 95,
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "text-orange-500",
        level: 85,
      },
    ],
  },
];