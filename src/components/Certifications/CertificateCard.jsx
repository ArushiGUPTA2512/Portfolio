import React from "react";
import { motion } from "motion/react";
import { HiOutlineExternalLink } from "react-icons/hi";

import AnimatedBorder from "../Common/AnimatedBorder";
import SpotlightCard from "../Common/SpotlightCard";
import CertificateTag from "./CertificateTag";

const CertificateCard = ({ certificate }) => {
  return (
    <SpotlightCard>
      <AnimatedBorder>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            group
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-slate-800/70
            backdrop-blur-xl
          "
        >
          {/* Certificate Preview */}

          <div className="relative h-48 overflow-hidden">
            <motion.img
              src={certificate.image}
              alt={certificate.title}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="
                h-full
                w-full
                object-cover
                object-top
              "
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />

            {/* Category */}

            <div className="absolute left-4 top-4">
              <span className="rounded-full border border-amber-400/30 bg-slate-900/80 px-3 py-1 text-xs font-semibold text-amber-400 backdrop-blur-md">
                {certificate.tags[0]}
              </span>
            </div>
          </div>

          {/* Content */}

          <div className="p-5">

            {/* Title */}

            <h3 className="line-clamp-2 text-lg font-bold leading-6 text-white transition-colors duration-300 group-hover:text-amber-400">
              {certificate.title}
            </h3>

            {/* Issuer */}

            <p className="mt-2 text-sm text-gray-400">
              {certificate.issuer}
            </p>

            {/* Date */}

            <p className="mt-1 text-xs text-gray-500">
              {certificate.date}
            </p>

            {/* Tags */}

            <div className="mt-4 flex flex-wrap gap-2">
              {certificate.tags.map((tag) => (
                <CertificateTag
                  key={tag}
                  tag={tag}
                />
              ))}
            </div>

            {/* View Certificate */}

            <a
              href={certificate.pdf}
              target="_blank"
              rel="noreferrer"
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-amber-400
                transition-all
                duration-300
                hover:gap-3
                hover:text-orange-400
              "
            >
              View Certificate

              <HiOutlineExternalLink size={16} />
            </a>

          </div>
        </motion.div>
      </AnimatedBorder>
    </SpotlightCard>
  );
};

export default CertificateCard;