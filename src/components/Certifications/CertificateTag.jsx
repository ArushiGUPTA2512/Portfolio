import React from "react";

const CertificateTag = ({ tag }) => {
  return (
    <span
      className="
      rounded-full
      border
      border-amber-400/20
      bg-amber-400/10
      px-4
      py-2
      text-sm
      font-medium
      text-amber-400
      transition
      duration-300
      hover:bg-amber-400
      hover:text-black
      "
    >
      {tag}
    </span>
  );
};

export default CertificateTag;