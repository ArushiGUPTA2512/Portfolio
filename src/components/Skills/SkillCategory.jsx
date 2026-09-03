import React from "react";
import SkillCard from "./SkillCard";

const SkillCategory = ({ category, skills }) => {
  return (
    <div className="mb-16">
      <h2 className="mb-8 text-3xl font-bold text-amber-400">
        {category}
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skills.map((skill, index) => (
        <SkillCard
        key={skill.name}
        skill={skill}
        index={index}
      />
     ))}
    </div>
    </div>
  );
};

export default SkillCategory;