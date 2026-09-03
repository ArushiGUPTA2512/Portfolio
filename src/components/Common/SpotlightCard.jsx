import React, { useState } from "react";

const SpotlightCard = ({ children }) => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-3xl"
    >
      {/* Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(
            220px circle at ${position.x}px ${position.y}px,
            rgba(245,158,11,0.18),
            transparent 70%
          )`,
        }}
      />

      {children}
    </div>
  );
};

export default SpotlightCard;