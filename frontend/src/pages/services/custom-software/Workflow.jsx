import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaMapMarkedAlt,
  FaPencilRuler,
  FaCode,
  FaVial,
  FaRocket
} from "react-icons/fa";

const steps = [
  {
    icon: <FaLightbulb />,
    title: "Ideation",
    desc: "By thoroughly understanding the client's requirements and creatively brainstorming ideas to address the problem statement, we aim to formulate a comprehensive development plan."
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Plan",
    desc: "We start by defining project goals and breaking them down into achievable milestones. We then establish a timeline and assign dedicated teams tailored to specific requirements."
  },
  {
    icon: <FaPencilRuler />,
    title: "Design",
    desc: "We build interactive prototypes and wireframes to visually conceptualize the interface. This process helps in refining and iterating on design elements before full-scale development."
  },
  {
    icon: <FaCode />,
    title: "Develop",
    desc: "Once the tech stack is finalized, our dedicated team initiates the development process, meticulously adhering to defined milestones and timelines for a high-quality solution."
  },
  {
    icon: <FaVial />,
    title: "Test",
    desc: "We conduct rigorous product testing using manual and automated methods. This ensures thorough quality assurance and validation of functionality and performance."
  },
  {
    icon: <FaRocket />,
    title: "Deploy",
    desc: "After completing UAT, we proceed to make the application available to the target audience, ensuring the product meets all requirements before its official release."
  }
];

const Workflow = () => {
  return (
    <section className="bg-white py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-20 text-center text-blue-900">
          Our Development Workflow
        </h2>

        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center justify-between w-full ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
              >
                {/* 1. Content Area */}
                <div className="w-[45%]">
                  <div className={`${index % 2 === 0 ? "text-left" : "text-right"}`}>
                    <h3 className="text-2xl font-bold text-blue-900 mb-3 uppercase tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* 2. Central Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="z-10 bg-white p-3 rounded-full border-2 border-blue-600 shadow-lg text-blue-600 text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {step.icon}
                  </div>
                </div>

                {/* 3. Empty Spacer for the other side */}
                <div className="w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;