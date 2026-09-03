import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";

import {
  EMAIL_PUBLIC_KEY,
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
} from "../../config/emailConfig";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        form.current,
        EMAIL_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully!");

        form.current.reset();
      })
      .catch((error) => {
        console.log(error);

        toast.error("Failed to send message.");
      });
  };

  return (
    <div
      className="
      relative
      overflow-hidden
      rounded-[32px]
      border
      border-white/10
      bg-white/5
      p-10
      backdrop-blur-2xl
      "
    >
      {/* Background Glow */}

      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-amber-400/10 blur-[90px]" />

      <h2 className="mb-8 text-4xl font-bold text-white">
        Send Message
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-6"
      >
        {/* Name */}

        <div className="relative">
          <input
            type="text"
            name="user_name"
            placeholder=" "
            required
            className="
            peer
            w-full
            rounded-2xl
            border
            border-white/10
            bg-white/5
            px-5
            pt-7
            pb-3
            text-white
            outline-none
            transition-all
            duration-300
            focus:border-amber-400
            focus:shadow-[0_0_20px_rgba(245,158,11,0.15)]
            "
          />

          <label
            className="
            absolute
            left-5
            top-4
            text-gray-400
            transition-all
            duration-300
            peer-placeholder-shown:top-5
            peer-placeholder-shown:text-base
            peer-focus:top-2
            peer-focus:text-xs
            peer-focus:text-amber-400
            "
          >
            Name
          </label>
        </div>

        {/* Email */}

        <div className="relative">
          <input
            type="email"
            name="user_email"
            placeholder=" "
            required
            className="
            peer
            w-full
            rounded-2xl
            border
            border-white/10
            bg-white/5
            px-5
            pt-7
            pb-3
            text-white
            outline-none
            transition-all
            duration-300
            focus:border-amber-400
            focus:shadow-[0_0_20px_rgba(245,158,11,0.15)]
            "
          />

          <label
            className="
            absolute
            left-5
            top-4
            text-gray-400
            transition-all
            duration-300
            peer-placeholder-shown:top-5
            peer-placeholder-shown:text-base
            peer-focus:top-2
            peer-focus:text-xs
            peer-focus:text-amber-400
            "
          >
            Email
          </label>
        </div>

        {/* Subject */}

        <div className="relative">
          <input
            type="text"
            name="subject"
            placeholder=" "
            required
            className="
            peer
            w-full
            rounded-2xl
            border
            border-white/10
            bg-white/5
            px-5
            pt-7
            pb-3
            text-white
            outline-none
            transition-all
            duration-300
            focus:border-amber-400
            focus:shadow-[0_0_20px_rgba(245,158,11,0.15)]
            "
          />

          <label
            className="
            absolute
            left-5
            top-4
            text-gray-400
            transition-all
            duration-300
            peer-placeholder-shown:top-5
            peer-placeholder-shown:text-base
            peer-focus:top-2
            peer-focus:text-xs
            peer-focus:text-amber-400
            "
          >
            Subject
          </label>
        </div>

        {/* Message */}

        <div className="relative">
          <textarea
            rows="6"
            name="message"
            placeholder=" "
            required
            className="
            peer
            w-full
            resize-none
            rounded-2xl
            border
            border-white/10
            bg-white/5
            px-5
            pt-7
            pb-3
            text-white
            outline-none
            transition-all
            duration-300
            focus:border-amber-400
            focus:shadow-[0_0_20px_rgba(245,158,11,0.15)]
            "
          />

          <label
            className="
            absolute
            left-5
            top-4
            text-gray-400
            transition-all
            duration-300
            peer-placeholder-shown:top-5
            peer-placeholder-shown:text-base
            peer-focus:top-2
            peer-focus:text-xs
            peer-focus:text-amber-400
            "
          >
            Message
          </label>
        </div>

        {/* Button */}

        <motion.button
          type="submit"
          whileHover={{
            scale: 1.02,
            y: -2,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="
          w-full
          rounded-2xl
          bg-gradient-to-r
          from-amber-400
          to-orange-500
          py-4
          font-semibold
          text-black
          transition-all
          duration-300
          hover:shadow-[0_0_30px_rgba(245,158,11,0.35)]
          "
        >
          Send Message →
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;