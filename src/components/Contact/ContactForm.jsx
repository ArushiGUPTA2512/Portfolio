import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Portfolio Contact from ${formData.name}`;

    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;

    const mailtoLink = `mailto:your-email@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      {/* Name */}

      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-gray-300">
          Your Name
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your name"
          className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-4 text-white outline-none transition focus:border-amber-400"
        />
      </div>

      {/* Email */}

      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-gray-300">
          Email Address
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
          className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-4 text-white outline-none transition focus:border-amber-400"
        />
      </div>

      {/* Message */}

      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-gray-300">
          Message
        </label>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="6"
          placeholder="Write your message..."
          className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/60 px-4 py-4 text-white outline-none transition focus:border-amber-400"
        />
      </div>

      {/* Submit */}

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(245,158,11,0.35)]"
      >
        Send Message
        <HiOutlineMail size={20} />
      </button>
    </form>
  );
};

export default ContactForm;