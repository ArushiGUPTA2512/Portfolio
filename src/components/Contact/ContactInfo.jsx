import React from "react";
import ContactCard from "./ContactCard";
import { contactInfo } from "../../data/contactData";

const ContactInfo = () => {
  return (
    <div>

      <h2 className="mb-8 text-4xl font-bold text-white">
        Contact Information
      </h2>

      <p className="mb-10 leading-8 text-gray-400">
        Feel free to reach out for internships,
        collaborations, freelance work, or simply
        to connect.
      </p>

      <div className="space-y-6">

        {contactInfo.map((item) => (
          <ContactCard
            key={item.id}
            {...item}
          />
        ))}

      </div>

      <div
        className="
        mt-10
        rounded-3xl
        border
        border-emerald-500/20
        bg-gradient-to-r
        from-emerald-500/10
        to-emerald-400/5
        p-6
        "
        >

        <div className="flex items-center gap-3">

        <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse"/>

        <h3 className="text-lg font-semibold text-emerald-400">

        Available for Opportunities

        </h3>

        </div>

        <p className="mt-3 text-gray-300">

        Open to internships,
        freelance projects,
        and full-time opportunities.

        </p>

        </div>

    </div>
  );
};

export default ContactInfo;