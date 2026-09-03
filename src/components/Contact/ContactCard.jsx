import React from "react";
import { motion } from "motion/react";
import SpotlightCard from "../Common/SpotlightCard";
import AnimatedBorder from "../Common/AnimatedBorder";

const ContactCard = ({ icon: Icon, title, value, link }) => {
  return (
    <SpotlightCard>
      <AnimatedBorder>

        <motion.a
          href={link}
          target="_blank"
          rel="noreferrer"
          whileHover={{
            y: -6,
            scale: 1.02,
          }}
          className="flex items-center gap-5 rounded-3xl bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-400"
        >

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400/20 to-orange-500/20">
            <Icon className="text-2xl text-amber-400" />
          </div>

          <div>

            <p className="text-sm text-gray-400">
              {title}
            </p>

            <h3 className="font-semibold text-white">
              {value}
            </h3>

          </div>

        </motion.a>

      </AnimatedBorder>
    </SpotlightCard>
  );
};

export default ContactCard;