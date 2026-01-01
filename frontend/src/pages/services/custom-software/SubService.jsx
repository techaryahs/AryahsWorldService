import { motion } from "framer-motion";
import {
  FaCogs,
  FaDatabase,
  FaProjectDiagram,
  FaTools,
  FaServer,
  FaCode,
  FaPlug,
  FaCloud
} from "react-icons/fa";

const SubService = () => (
  <section className="py-28 bg-white relative overflow-hidden">

    {/* Soft blue background accents */}
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
    <div className="absolute bottom-0 -right-32 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-50"></div>

    <div className="relative max-w-7xl mx-auto px-8">

      {/* Heading */}
      <h2 className="text-5xl font-extrabold text-center mb-4 text-gray-900">
        Sub Services
      </h2>

      <p className="text-center text-blue-700 uppercase tracking-widest text-sm mb-20">
        Refer to the diverse range of custom software development services that we offer
      </p>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16 text-center">

        {[
          {
            icon: <FaCogs />,
            title: "Software Development Outsourcing",
            desc: "We extend your in-house IT capabilities with skilled developers, analysts, and project managers using agile development practices."
          },
          {
            icon: <FaTools />,
            title: "CRM Development",
            desc: "We build customized CRM solutions to manage customer lifecycle, sales, marketing, and service workflows efficiently."
          },
          {
            icon: <FaProjectDiagram />,
            title: "MVP Development",
            desc: "Launch a minimum viable product quickly to validate ideas, gather feedback, and accelerate business growth."
          },
          {
            icon: <FaCode />,
            title: "Software Product Development",
            desc: "Transform ideas into scalable commercial software products with a focus on quality, performance, and ROI."
          },
          {
            icon: <FaServer />,
            title: "Large-Scale Software Development",
            desc: "We design and deliver complex, enterprise-grade systems through careful planning and cross-team collaboration."
          },
          {
            icon: <FaCloud />,
            title: "Legacy Software Modernization",
            desc: "Upgrade and modernize existing applications to improve performance, scalability, security, and maintainability."
          },
          {
            icon: <FaPlug />,
            title: "API Development",
            desc: "Secure, well-documented APIs that enable seamless system integration and reliable data exchange."
          },
          {
            icon: <FaDatabase />,
            title: "Database Development",
            desc: "Optimized, secure, and scalable database solutions that support high-performance software applications."
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="p-8 rounded-3xl bg-white shadow-lg border border-gray-100 
                       hover:shadow-2xl transition-all duration-300"
          >
            <div className="text-4xl text-blue-600 mb-6 flex justify-center">
              {item.icon}
            </div>

            <h3 className="text-lg font-bold mb-4 text-gray-900">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SubService;
