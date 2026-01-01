import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const PricingModels = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* WAVE BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="wavePattern"
              x="0"
              y="0"
              width="120"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 20 Q 30 0 60 20 T 120 20"
                fill="none"
                stroke="#d1d5db"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wavePattern)" />
        </svg>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 py-28">
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-600 mb-20"
        >
          Average cost of different website design and website development
          solutions
        </motion.h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* STATIC */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border border-gray-200 bg-white"
          >
            <div className="bg-blue-900 text-white px-8 py-10">
              <h3 className="text-2xl font-semibold mb-4">Static Websites</h3>
              <p className="text-lg">From ₹ 25,000 Onwards</p>
            </div>

            <div className="px-8 py-10 flex justify-center">
              <button className="border-2 border-blue-900 text-blue-900 px-6 py-3 font-semibold hover:bg-blue-900 hover:text-white transition-all duration-300">
                Get a customized quote
              </button>
            </div>
          </motion.div>

          {/* DYNAMIC */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border border-gray-200 bg-white"
          >
            <div className="bg-blue-600 text-white px-8 py-10">
              <h3 className="text-2xl font-semibold mb-4">
                Dynamic Websites
              </h3>
              <p className="text-lg">From ₹ 50,000 Onwards</p>
            </div>

            <div className="px-8 py-10 flex justify-center">
              <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                Get a customized quote
              </button>
            </div>
          </motion.div>

          {/* ECOMMERCE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border border-gray-200 bg-white"
          >
            <div className="bg-blue-900 text-white px-8 py-10">
              <h3 className="text-2xl font-semibold mb-4">
                E-commerce Development
              </h3>
              <p className="text-lg">From ₹ 80,000 Onwards</p>
            </div>

            <div className="px-8 py-10 flex justify-center">
              <button className="border-2 border-blue-900 text-blue-900 px-6 py-3 font-semibold hover:bg-blue-900 hover:text-white transition-all duration-300">
                Get a customized quote
              </button>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 flex justify-center"
        >
          <button className="border-2 border-blue-600 text-blue-600 px-10 py-4 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
            Click here to know more about our Pricing Models
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingModels;
