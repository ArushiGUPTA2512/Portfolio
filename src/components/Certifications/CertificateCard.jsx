import React from "react";
import { motion } from "motion/react";

import AnimatedBorder from "../Common/AnimatedBorder";
import SpotlightCard from "../Common/SpotlightCard";

import CertificateTag from "./CertificateTag";
import CertificateButton from "./CertificateButton";

const CertificateCard = ({ certificate }) => {
  return (
    <SpotlightCard>
      <AnimatedBorder>
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          whileHover={{
            y: -10,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="
          group
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          "
        >
          {/* Certificate Image */}

          <div className="relative overflow-hidden">

            <motion.img
              src={certificate.image}
              alt={certificate.title}
              whileHover={{
                scale: 1.08,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
              aspect-video
              w-full
              object-cover
              "
            />

            {/* Gradient Overlay */}

            <div
              className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#0F172A]
              via-transparent
              to-transparent
              opacity-60
              "
            />
          </div>

          {/* Content */}

          <div className="p-7">

            <h3 className="text-2xl font-bold text-white">
              {certificate.title}
            </h3>

            <p className="mt-2 text-gray-400">
              {certificate.issuer}
            </p>

            <p className="mt-2 text-sm text-gray-500">
              {certificate.date}
            </p>

            {/* Tags */}

            <div className="mt-6 flex flex-wrap gap-3">
              {certificate.tags.map((tag) => (
                <CertificateTag
                  key={tag}
                  tag={tag}
                />
              ))}
            </div>

            {/* Button */}

            <CertificateButton
              pdf={certificate.pdf}
            />

          </div>
        </motion.div>
      </AnimatedBorder>
    </SpotlightCard>
  );
};

export default CertificateCard;