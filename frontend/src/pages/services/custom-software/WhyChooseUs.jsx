import { motion } from "framer-motion";

const WhyChooseUs = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-blue-700">
          Custom Software Development Services
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          As a trusted <span className="font-semibold">Custom Software Development Partner</span>, 
          <span className="font-semibold"> AryahsWorld</span> builds high-quality, scalable, 
          and secure software solutions tailored to specific business requirements.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          We help organizations accelerate digital transformation by delivering 
          custom software applications that drive efficiency, innovation, and growth 
          across industries worldwide.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Our quality-first approach, transparent communication, and agile development 
          methodology ensure successful project delivery and long-term client satisfaction.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          AryahsWorld has successfully delivered industry-specific custom software 
          solutions to businesses of all sizes, from startups to enterprises.
        </p>
      </motion.div>

      {/* RIGHT VISUAL CARD */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative bg-[#f5f7ff] rounded-3xl p-10 shadow-lg"
      >
        <h3 className="text-3xl font-extrabold text-blue-700 mb-4 text-center">
          SOFTWARE DEVELOPMENT
        </h3>

        <p className="text-center text-gray-600 text-lg mb-10">
          Our custom software development services help businesses stay ahead
          of competition by delivering reliable, scalable, and secure solutions.
        </p>

        {/* Software Development Illustration */}
<div className="flex justify-center">
  <svg
    width="260"
    height="260"
    viewBox="0 0 260 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect x="0" y="0" width="260" height="260" rx="24" fill="#FFFFFF" />

    {/* Screen */}
    <rect x="40" y="40" width="180" height="140" rx="12" fill="#EEF2FF" stroke="#3B82F6" strokeWidth="2" />

    {/* Code Lines */}
    <rect x="60" y="65" width="80" height="8" rx="4" fill="#3B82F6" />
    <rect x="60" y="85" width="120" height="8" rx="4" fill="#60A5FA" />
    <rect x="60" y="105" width="100" height="8" rx="4" fill="#93C5FD" />
    <rect x="60" y="125" width="90" height="8" rx="4" fill="#3B82F6" />

    {/* Side Panel */}
    <rect x="160" y="65" width="40" height="68" rx="6" fill="#DBEAFE" />

    {/* Gear */}
    <circle cx="130" cy="195" r="22" fill="#3B82F6" />
    <circle cx="130" cy="195" r="10" fill="#FFFFFF" />

    {/* Dots */}
    <circle cx="80" cy="200" r="4" fill="#60A5FA" />
    <circle cx="100" cy="210" r="3" fill="#93C5FD" />
    <circle cx="160" cy="210" r="3" fill="#93C5FD" />
    <circle cx="180" cy="200" r="4" fill="#60A5FA" />
  </svg>
</div>

      </motion.div>

    </div>
  </section>
);

export default WhyChooseUs;
