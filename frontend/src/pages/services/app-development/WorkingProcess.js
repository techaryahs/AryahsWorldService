import React from "react";
import { motion } from "framer-motion";
import {
  FaDraftingCompass,
  FaLightbulb,
  FaPencilRuler,
  FaCode,
  FaBug,
  FaRocket
} from "react-icons/fa";
import workProcessImg from "../../../assets/workProcess.jpg";

const steps = [
  {
    title: "Ideation",
    icon: <FaDraftingCompass />,
    side: "left",
    content:
      "By thoroughly understanding the client’s requirements, business goals, and challenges, we conduct deep brainstorming sessions. This helps us define a clear problem statement and create a strong conceptual foundation for the project."
  },
  {
    title: "Plan",
    icon: <FaLightbulb />,
    side: "right",
    content:
      "We define project objectives, break them into achievable milestones, establish timelines, and assign dedicated resources. A structured roadmap ensures transparency, clarity, and predictable delivery."
  },
  {
    title: "Design",
    icon: <FaPencilRuler />,
    side: "left",
    content:
      "Our design team creates wireframes and interactive prototypes to visualize the application. This phase focuses on usability, accessibility, branding consistency, and user experience refinement."
  },
  {
    title: "Develop",
    icon: <FaCode />,
    side: "right",
    content:
      "Using modern and scalable technologies, our developers build robust solutions following agile practices. Continuous integration and clean code standards ensure high performance and scalability."
  },
  {
    title: "Test",
    icon: <FaBug />,
    side: "left",
    content:
      "We conduct extensive manual and automated testing to validate functionality, performance, security, and compatibility. This guarantees a stable and reliable product before deployment."
  },
  {
    title: "Deploy",
    icon: <FaRocket />,
    side: "right",
    content:
      "After client approval, we deploy the application in the production environment. Final validations, monitoring, and post-launch support ensure smooth operation and long-term success."
  }
];

const WorkingProcess = () => {
  return (
    <section className="w-full bg-white py-20">
      {/* Heading */}
      <h2 className="text-center text-5xl md:text-6xl font-extrabold text-black mb-16">
        Our Working Process
      </h2>

      {/* Hero Image */}
      {/* Hero Section */}
<div className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 py-20 mb-28">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
    
    {/* Text */}
    <div className="text-white">
      <p className="text-xl mb-4">We have</p>

      <div className="inline-block bg-black px-6 py-3 mb-6">
        <h3 className="text-3xl md:text-4xl font-extrabold tracking-wide">
          THE ULTIMATE SOLUTION
        </h3>
      </div>

      <p className="text-2xl md:text-3xl font-semibold">
        for your company's growth
      </p>
    </div>

    {/* Image */}
    <div className="flex justify-center md:justify-end">
      <img
        src={workProcessImg}
        alt="Working Process"
        className="max-w-md w-full"
      />
    </div>
  </div>
</div>


      {/* Timeline */}
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-300 -translate-x-1/2"></div>

        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative flex items-center mb-28 ${
              step.side === "left"
                ? "flex-row"
                : "flex-row-reverse"
            }`}
          >
            {/* Content */}
            <div className="w-[45%] px-6">
              <h3 className="text-2xl font-bold text-black mb-4">
                {step.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-base">
                {step.content}
              </p>
            </div>

            {/* Icon */}
            <div className="absolute left-1/2 -translate-x-1/2 z-10">
              <div className="w-14 h-14 rounded-full bg-white border-4 border-red-600 flex items-center justify-center text-red-600 text-xl shadow-md">
                {step.icon}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkingProcess;
