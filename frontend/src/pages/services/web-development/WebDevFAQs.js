import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What is website design vs. website development?",
    a: "Website design revolves around enhancing the visual appeal and aesthetics of a website, including layout and user interface (UI). Website development focuses on implementing functionality through coding and programming to ensure optimal performance.",
  },
  {
    q: "Do you provide responsive design?",
    a: "Yes, all our websites are fully responsive and optimized to work seamlessly across desktops, tablets, and mobile devices.",
  },
  {
    q: "What technology do you use?",
    a: "We use modern and scalable technologies including React, Next.js, Node.js, Tailwind CSS, cloud services, and secure backend architectures.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "Absolutely. We analyze your existing website, identify gaps, and redesign it to improve performance, UX, and visual appeal.",
  },
  {
    q: "How long does it take to develop a website?",
    a: "Project timelines depend on complexity, features, and scope. Typically, development ranges from 2 to 8 weeks.",
  },
  {
    q: "What security measures do you implement during website development?",
    a: "We follow best security practices including HTTPS, secure authentication, data encryption, vulnerability testing, and regular audits.",
  },
];

const WebDevFAQs = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-28">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-600 mb-16"
        >
          FAQs For Website Design & Website Development Services
        </motion.h2>

        {/* FAQ LIST */}
        <div className="space-y-6">
          {faqs.map((item, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border border-gray-300"
              >
                {/* QUESTION */}
                <button
                  onClick={() => setActive(isOpen ? null : index)}
                  className={`w-full flex items-center justify-between px-6 py-5 text-left font-semibold uppercase tracking-wide transition-all
                  ${
                    isOpen
                      ? "bg-black text-blue-500"
                      : "bg-white text-gray-900 hover:text-blue-600"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-blue-500" />
                    ) : (
                      <Plus className="w-5 h-5 text-blue-600" />
                    )}
                    {item.q}
                  </span>
                </button>

                {/* ANSWER */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-6 text-gray-400 leading-relaxed border-t border-gray-300">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WebDevFAQs;
