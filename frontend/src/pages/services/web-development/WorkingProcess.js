import { motion } from "framer-motion";
import {
  Pencil,
  Lightbulb,
  Layout,
  Code2,
  MonitorCheck,
  Rocket,
} from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
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

const WorkingProcess = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-28">

        {/* TOP TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-6"
        >
          Our success in the website design and website development space hinges
          on our robust operations.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold text-gray-900 mb-20"
        >
          Our Working process
        </motion.h2>

        {/* PROCESS GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-y-24 gap-x-16 text-center"
        >
          {/* IDEATION */}
          <motion.div variants={item}>
            <Pencil className="w-10 h-10 mx-auto text-blue-600 mb-6" />
            <h4 className="font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
              IDEATION
            </h4>
            <p className="text-gray-400 leading-relaxed">
              By understanding the client’s requirements and brainstorming
              ideas, we formulate a comprehensive development plan.
            </p>
          </motion.div>

          {/* PLAN */}
          <motion.div variants={item}>
            <Lightbulb className="w-10 h-10 mx-auto text-blue-600 mb-6" />
            <h4 className="font-bold text-blue-600 mb-4">
              PLAN
            </h4>
            <p className="text-gray-500 leading-relaxed">
              We define project goals, timelines, and assign dedicated teams
              aligned with specific project requirements.
            </p>
          </motion.div>

          {/* DESIGN */}
          <motion.div variants={item}>
            <Layout className="w-10 h-10 mx-auto text-blue-600 mb-6" />
            <h4 className="font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
              DESIGN
            </h4>
            <p className="text-gray-400 leading-relaxed">
              Interactive wireframes and prototypes help visualize and refine
              the interface before full-scale development.
            </p>
          </motion.div>

          {/* DEVELOP */}
          <motion.div variants={item}>
            <Code2 className="w-10 h-10 mx-auto text-blue-600 mb-6" />
            <h4 className="font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
              DEVELOP
            </h4>
            <p className="text-gray-400 leading-relaxed">
              Our team builds the solution following milestones and timelines,
              ensuring efficient and structured progress.
            </p>
          </motion.div>

          {/* TEST */}
          <motion.div variants={item}>
            <MonitorCheck className="w-10 h-10 mx-auto text-blue-600 mb-6" />
            <h4 className="font-bold text-blue-600 mb-4">
              TEST
            </h4>
            <p className="text-gray-500 leading-relaxed">
              Rigorous testing ensures quality assurance, validation, and
              performance optimization before deployment.
            </p>
          </motion.div>

          {/* DEPLOY */}
          <motion.div variants={item}>
            <Rocket className="w-10 h-10 mx-auto text-blue-600 mb-6" />
            <h4 className="font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
              DEPLOY
            </h4>
            <p className="text-gray-400 leading-relaxed">
              After UAT approval, the product is deployed to the target
              environment, ready for real-world use.
            </p>
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
            Click here to know more about our Working Process
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkingProcess;
