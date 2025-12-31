import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  IndianRupee,
  ShieldCheck,
  Users,
  BookOpen,
} from "lucide-react";

import goalStrategyImg from "../../../assets/goalStrategy.webp";

const practices = [
  {
    title: "Scoping",
    icon: <Search size={40} />,
    text: "Our structured scoping process ensures clarity in requirements and efficient project planning.",
  },
  {
    title: "Cost Estimation",
    icon: <IndianRupee size={40} />,
    text: "We identify critical cost factors early and optimize budgets without compromising quality.",
  },
  {
    title: "Quality Management",
    icon: <ShieldCheck size={40} />,
    text: "Strict quality KPIs ensure control and consistency at every development stage.",
  },
  {
    title: "Collaboration",
    icon: <Users size={40} />,
    text: "Transparent communication ensures alignment and long-term success.",
  },
  {
    title: "Security Management",
    icon: <ShieldCheck size={40} />,
    text: "We follow robust security practices to build scalable and secure applications.",
  },
  {
    title: "Knowledge Management",
    icon: <BookOpen size={40} />,
    text: "Comprehensive documentation and knowledge transfer across all stages.",
  },
];

const BestPractices = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-black mb-10"
        >
          Best Practices
        </motion.h2>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-orange-500 to-orange-600 p-12 rounded-md flex flex-col lg:flex-row items-center gap-12 mb-20"
        >
          <div className="text-white max-w-xl">
            <p className="text-2xl mb-4">We plan Your</p>

            <div className="inline-block bg-black px-6 py-2 font-bold text-xl mb-4">
              GOAL STRATEGY
            </div>

            <p className="text-2xl">and track results day by day</p>
          </div>

          <img
            src={goalStrategyImg}
            alt="Goal Strategy"
            className="max-w-md w-full object-contain"
          />
        </motion.div>

        {/* Description */}
        <div className="max-w-4xl mb-16">
          <h3 className="text-3xl font-bold mb-4">
            How we ensure success in Mobile App development services
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Aryahs World Infotech prioritizes planning, communication, security,
            and quality assurance to deliver scalable and high-impact solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
          {practices.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
              className="group flex gap-6 items-start cursor-pointer"
            >
              <div className="text-red-600 group-hover:text-blue-600 transition-colors duration-300">
                {item.icon}
              </div>

              <div>
                <h4 className="text-xl font-bold text-black group-hover:text-blue-600 transition-colors duration-300 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button className="bg-black text-white px-10 py-4 font-semibold hover:bg-blue-600 transition-all duration-300">
            Get details about the approach to your project
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestPractices;
