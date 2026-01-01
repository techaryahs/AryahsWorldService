import React from "react";
import { motion } from "framer-motion";

const NewsletterSection = () => {
  return (
    <section className="relative overflow-hidden bg-emerald-400 py-24">
      {/* Watermark Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[18rem] font-extrabold text-black/10 select-none">
          scribe
        </h1>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="uppercase font-semibold tracking-widest text-black mb-4">
            Subscribe to our free
          </p>

          <h2 className="text-6xl md:text-7xl font-extrabold text-black mb-6">
            Newsletter
          </h2>

          <p className="text-black max-w-md leading-relaxed">
            Stay updated with the latest advancements in the realm of custom
            software development and mobile application development.
          </p>
        </motion.div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <label className="block text-black font-semibold mb-2">
            Email:
          </label>

          <div className="flex w-full max-w-xl">
            <input
              type="email"
              placeholder="Your email address"
              className="
                flex-1
                px-6 py-4
                outline-none
                text-gray-800
                placeholder-gray-500
              "
            />
            <button
              className="
                bg-black text-white
                px-8 py-4
                font-semibold
                hover:bg-red-600
                transition
              "
            >
              SIGN UP
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
