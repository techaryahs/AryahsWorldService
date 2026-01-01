import { motion } from "framer-motion";
import {
  FileText,
  Calculator,
  BadgeCheck,
  Handshake,
  Shield,
  BookOpen,
} from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const SuccessFactors = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-28">

        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
        >
          How we ensure success in website design and website development services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl text-gray-700 leading-relaxed mb-20"
        >
          Besides technical expertise, Aryahs World Infotech prioritizes several
          critical factors essential for achieving successful website design and
          development goals, ensuring high-end product quality, timely delivery,
          and cost efficiency.
        </motion.p>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-20"
        >
          {/* Scoping */}
          <motion.div variants={item} className="flex gap-6">
            <FileText className="w-10 h-10 text-blue-600 flex-shrink-0" />
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Scoping
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Scoping encompasses requirement gathering, feasibility analysis,
                and managing scope changes effectively throughout the project.
              </p>
            </div>
          </motion.div>

          {/* Cost Estimation */}
          <motion.div variants={item} className="flex gap-6">
            <Calculator className="w-10 h-10 text-blue-600 flex-shrink-0" />
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Cost Estimation
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Our team identifies key cost drivers and applies best practices
                to optimize budgets without compromising quality.
              </p>
            </div>
          </motion.div>

          {/* Quality Management */}
          <motion.div variants={item} className="flex gap-6">
            <BadgeCheck className="w-10 h-10 text-blue-600 flex-shrink-0" />
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Quality Management
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Robust KPIs ensure quality control at each stage of the
                development lifecycle.
              </p>
            </div>
          </motion.div>

          {/* Collaboration */}
          <motion.div variants={item} className="flex gap-6">
            <Handshake className="w-10 h-10 text-blue-600 flex-shrink-0" />
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Collaboration
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Transparent communication between clients and teams ensures
                clarity and seamless collaboration.
              </p>
            </div>
          </motion.div>

          {/* Security Management */}
          <motion.div variants={item} className="flex gap-6">
            <Shield className="w-10 h-10 text-blue-600 flex-shrink-0" />
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Security Management
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Rigorous security practices ensure applications remain secure
                and scalable throughout development.
              </p>
            </div>
          </motion.div>

          {/* Knowledge Management */}
          <motion.div variants={item} className="flex gap-6">
            <BookOpen className="w-10 h-10 text-blue-600 flex-shrink-0" />
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Knowledge Management
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Comprehensive documentation ensures continuity and long-term
                maintainability of solutions.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 flex justify-center"
        >
          <button className="border-2 border-blue-600 text-blue-600 px-10 py-4 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
            Get details about the approach to your project
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default SuccessFactors;
