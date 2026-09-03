import React, { useState } from "react";
import { motion } from "motion/react";
import { IoClose } from "react-icons/io5";

import CertificateCard from "./CertificateCard";
import { certificates } from "../../data/certificateData";

const Certifications = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section
        id="certifications"
        className="relative overflow-hidden bg-[#0F172A] py-28"
      >
        {/* Background Glow */}
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="absolute right-0 bottom-10 h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]" />

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
            className="text-center"
          >
            <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-5 py-2 text-sm font-medium text-amber-400">
              Achievements
            </span>

            <h2 className="mt-8 text-5xl font-bold text-white">
              My{" "}
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
              These certifications demonstrate my commitment to continuous
              learning in Cloud Computing, Full Stack Development, Java,
              Artificial Intelligence and Software Engineering.
            </p>
          </motion.div>

          {/* Featured Certificates */}
          <div className="mt-20 grid gap-8 md:grid-cols-2">
            {certificates.slice(0, 4).map((certificate) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-16 text-center">
            <button
              onClick={() => setIsOpen(true)}
              className="rounded-full border border-amber-400 px-8 py-4 font-semibold text-amber-400 transition-all duration-300 hover:bg-amber-400 hover:text-black hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]"
            >
              View All Certificates
            </button>
          </div>
        </div>
      </section>

      {/* ===================== MODAL ===================== */}

      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-md p-6">
          <div className="relative max-h-[90vh] w-full max-w-7xl overflow-y-auto rounded-3xl border border-white/10 bg-[#111827] p-8">

            {/* Close Button */}

            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-2xl text-white transition hover:bg-red-500"
            >
              <IoClose />
            </button>

            <h2 className="mb-10 text-center text-4xl font-bold text-white">
              All Certificates
            </h2>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {certificates.map((certificate) => (
                <div
                  key={certificate.id}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:-translate-y-2"
                >
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="aspect-video w-full object-cover"
                  />

                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-white">
                      {certificate.title}
                    </h3>

                    <p className="mt-2 text-gray-400">
                      {certificate.issuer}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      {certificate.date}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {certificate.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-amber-500/10 px-3 py-1 text-xs text-amber-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={certificate.pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-block rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 px-5 py-3 font-semibold text-black transition hover:scale-105"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Certifications;