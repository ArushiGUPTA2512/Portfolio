import React from "react";

const Button = ({
  title,
  href,
  onClick,
  icon,
  primary,
  download,
}) => {
  const className = `
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-full
    px-8
    py-4
    font-semibold
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-xl
    whitespace-nowrap
    ${
      primary
        ? "bg-gradient-to-r from-amber-400 to-orange-500 text-black hover:shadow-amber-500/30"
        : "border border-white/15 bg-white/5 text-white backdrop-blur-xl hover:border-amber-400 hover:text-amber-400"
    }
  `;

  if (href) {
    return (
      <a
        href={href}
        download={download}
        className={className}
      >
        {title}
        {icon}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={className}
    >
      {title}
      {icon}
    </button>
  );
};

export default Button;