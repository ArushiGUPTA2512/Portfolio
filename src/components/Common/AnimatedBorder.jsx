import React from "react";

const AnimatedBorder = ({ children }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl p-[1px]">
      {/* Animated Gradient */}
      <div
        className="
        absolute
        inset-0
        rounded-3xl
        bg-[linear-gradient(90deg,#F59E0B,#FB923C,#F59E0B)]
        bg-[length:300%_300%]
        animate-gradient
        opacity-0
        transition-opacity
        duration-500
        group-hover:opacity-100
        "
      />

      {/* Card */}
      <div
        className="
        relative
        rounded-3xl
        border
        border-white/10
        bg-slate-900/90
        backdrop-blur-xl
        "
      >
        {children}
      </div>
    </div>
  );
};

export default AnimatedBorder;