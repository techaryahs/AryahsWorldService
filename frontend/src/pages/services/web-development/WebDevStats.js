import { motion } from "framer-motion";
import { Activity, Users, Scale, Factory } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const WebDevStats = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-16 items-center">

          {/* TOP LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group"
          >
            <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
              6+ Years Of Experience In
              <br />
              Website Development
            </h3>
            <p className="mt-4 text-gray-400 leading-relaxed hover:text-blue-600 transition-colors duration-300">
              Aryahs World Infotech has pioneered{" "}
              <span className="font-semibold">website development services</span>,
              delivering reliable and scalable solutions.
            </p>
          </motion.div>

          {/* ICON 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center group"
          >
            <Activity className="w-20 h-20 text-gray-900 group-hover:text-blue-600 transition-colors duration-300" strokeWidth={1.5} />
          </motion.div>

          {/* TOP RIGHT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group"
          >
            <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
              50+ Website Designers And
              <br />
              Website Developers
            </h3>
            <p className="mt-4 text-gray-400 leading-relaxed hover:text-blue-600 transition-colors duration-300">
              Our top-notch designers and developers consistently turn ideas into
              production-ready platforms.
            </p>
          </motion.div>

          {/* BOTTOM LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group"
          >
            <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
              200+ Successful Website
              <br />
              Development Projects
            </h3>
            <p className="mt-4 text-gray-400 leading-relaxed hover:text-blue-600 transition-colors duration-300">
              We have delivered 200+ projects with deep understanding of diverse
              client requirements.
            </p>
          </motion.div>

          {/* ICON 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center group"
          >
            <Scale className="w-20 h-20 text-gray-900 group-hover:text-blue-600 transition-colors duration-300" strokeWidth={1.5} />
          </motion.div>

          {/* BOTTOM RIGHT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group"
          >
            <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
              Website Development For
              <br />
              50+ Industries
            </h3>
            <p className="mt-4 text-gray-400 leading-relaxed hover:text-blue-600 transition-colors duration-300">
              We provide tailored website development services across 50+
              industries worldwide.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 text-sm font-semibold tracking-wide hover:bg-blue-600 hover:text-white transition-all duration-300">
            Click here to avail the Best Website Development Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WebDevStats;
