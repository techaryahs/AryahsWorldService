import React from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaChevronDown
} from "react-icons/fa";

const ProjectInquirySection = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Text */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-blue-600 font-semibold uppercase tracking-wide mb-6"
        >
          To request more information
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-20"
        >
          {/* Left Content */}
          <div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Unsure about how to frame your software development idea? Simply
              fill out the form below, and our team will contact you to guide you
              in turning your dream into reality.
            </p>

            <p className="font-bold italic text-black text-lg">
              We provide Project Consultation & Documentation for{" "}
              <span className="text-blue-600">FREE!!!</span>
            </p>
          </div>

          {/* Decorative Dots */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-8 gap-3 w-fit">
              {Array.from({ length: 48 }).map((_, i) => (
                <span
                  key={i}
                  className="w-2 h-2 bg-blue-600 rounded-full opacity-80"
                ></span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InputField placeholder="Name*" icon={<FaUser />} />
            <InputField placeholder="Email*" icon={<FaEnvelope />} />
            <InputField placeholder="Phone*" icon={<FaPhone />} />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SelectField label="Select Service Required*" />
            <SelectField label="Select Estimated No. of Users*" />
            <SelectField label="Select Your Estimated Budget*" />
          </div>

          {/* Textarea */}
          <textarea
            placeholder="Tell us about your project..."
            className="
              w-full h-48
              border border-gray-800
              px-6 py-4
              text-gray-700
              outline-none resize-none
              focus:ring-2 focus:ring-blue-600
              transition
            "
          />

          {/* reCAPTCHA (UI only) */}
          <div className="border border-gray-800 w-fit px-6 py-4 flex items-center gap-4">
            <input type="checkbox" className="w-5 h-5 accent-blue-600" />
            <span className="text-sm">I'm not a robot</span>
            <div className="ml-4 text-xs text-gray-500">
              reCAPTCHA<br />Privacy - Terms
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="
              bg-black text-white
              px-10 py-4
              font-semibold
              tracking-wide
              hover:bg-blue-600
              transition
            "
          >
            Submit message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

/* ---------------- COMPONENTS ---------------- */

const InputField = ({ placeholder, icon }) => (
  <div className="relative">
    <input
      type="text"
      placeholder={placeholder}
      className="
        w-full border border-gray-800
        px-6 py-4 pr-12
        outline-none
        focus:ring-2 focus:ring-blue-600
        transition
      "
    />
    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-800">
      {icon}
    </span>
  </div>
);

const SelectField = ({ label }) => (
  <div className="relative">
    <select
      className="
        w-full border border-gray-800
        px-6 py-4 pr-12
        outline-none
        appearance-none
        bg-white
        focus:ring-2 focus:ring-blue-600
        transition
      "
    >
      <option>{label}</option>
    </select>
    <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-800" />
  </div>
);

export default ProjectInquirySection;
