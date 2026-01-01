import React from "react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="bg-black py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Small top text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-blue-600 uppercase tracking-widest font-semibold mb-6"
        >
          Work with the pro website design & website development team
        </motion.p>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-5xl"
        >
          Would you like to have <br />
          professional project? <br />
          Let’s talk about it!
        </motion.h2>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <button
            className="
              border-2 border-blue-600
              text-blue-600
              px-10 py-4
              font-semibold
              transition-all duration-300
              hover:bg-blue-600 hover:text-white
            "
          >
            Get started
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default CTASection;
