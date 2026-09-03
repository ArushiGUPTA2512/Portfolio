import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";

const CertificateButton = ({ pdf }) => {
  return (
    <a
      href={pdf}
      target="_blank"
      rel="noreferrer"
      className="
      mt-6
      inline-flex
      items-center
      gap-2
      rounded-xl
      bg-gradient-to-r
      from-amber-400
      to-orange-500
      px-6
      py-3
      font-semibold
      text-black
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]
      "
    >
      View Certificate

      <HiOutlineExternalLink />
    </a>
  );
};

export default CertificateButton;