import React from "react";
import { motion } from "motion/react";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0F172A] py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-20 top-10 h-72 w-72 rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="absolute bottom-10 right-20 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span
            className="
            rounded-full
            border
            border-amber-400/20
            bg-amber-400/10
            px-5
            py-2
            text-sm
            text-amber-400
            "
            >

            Let's Connect

            </span>

            <h2 className="mt-6 text-6xl font-bold">

            Get In

            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">

            Touch

            </span>
            </h2>
            <div className="mx-auto mt-8 h-[2px] w-24 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"/>
            
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Whether you have an opportunity, collaboration,
            freelance project or just want to say hello,
            I'd love to hear from you.
          </p>
        </motion.div>

        {/* Main Layout */}

        <div className="grid gap-16 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ContactInfo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ContactForm />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;