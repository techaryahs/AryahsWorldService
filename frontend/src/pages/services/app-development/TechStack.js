import { motion } from "framer-motion";
import {
  FaPhp,
  FaLaravel,
  FaNodeJs,
  FaReact,
  FaVuejs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaAndroid,
  FaApple,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiFlutter,
  SiKubernetes,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const iconClass =
  "text-5xl text-gray-600 hover:text-blue-600 transition duration-300 cursor-pointer";

const TechStack = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-black mb-16"
        >
          Tech Stack
        </motion.h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-24">

          {/* BACKEND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-red-600 font-bold uppercase mb-6">
              Back-End Programming Languages
            </h4>
            <div className="flex gap-10">
              <FaPhp className={iconClass} />
              <FaLaravel className={iconClass} />
              <FaNodeJs className={iconClass} />
            </div>
          </motion.div>

          {/* FRONTEND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-red-600 font-bold uppercase mb-6">
              Front-End Programming Languages
            </h4>
            <div className="flex gap-10">
              <FaVuejs className={iconClass} />
              <FaReact className={iconClass} />
              <FaHtml5 className={iconClass} />
              <FaCss3Alt className={iconClass} />
              <FaJs className={iconClass} />
            </div>
          </motion.div>

          {/* MOBILE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-red-600 font-bold uppercase mb-6">
              Mobile
            </h4>
            <div className="flex gap-10">
              <FaAndroid className={iconClass} />
              <FaApple className={iconClass} />
              <SiFlutter className={iconClass} />
            </div>
          </motion.div>

          {/* DATABASES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-red-600 font-bold uppercase mb-6">
              Databases
            </h4>
            <div className="flex gap-10">
              <SiMysql className={iconClass} />
              <SiMongodb className={iconClass} />
            </div>
          </motion.div>

          {/* DEVOPS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-red-600 font-bold uppercase mb-6">
              DevOps
            </h4>
            <div className="flex gap-10">
              <FaDocker className={iconClass} />
              <SiKubernetes className={iconClass} />
            </div>
          </motion.div>

          {/* CLOUD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-red-600 font-bold uppercase mb-6">
              Cloud
            </h4>
            <div className="flex gap-10">
              <FaAws className={iconClass} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TechStack;
