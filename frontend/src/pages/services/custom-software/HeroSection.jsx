import { motion } from "framer-motion";
import { FaDatabase, FaChartLine, FaBrain } from "react-icons/fa";

const Hero = () => (
  <section className="text-center pt-[150px] pb-24 px-6">
    
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-6xl font-extrabold 
      bg-gradient-to-r from-blue-700 to-blue-500
      text-transparent bg-clip-text tracking-tight"
    >
      Custom Software Development Company
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed"
    >
      <span className="font-semibold text-gray-800">AryahsWorld</span> is a
      premier custom software development company, backed by a team of
      <span className="font-semibold text-gray-800"> 75+ highly skilled developers</span>.
      With deep technical expertise and a strong commitment to excellence,
      we deliver scalable, secure, and high-performance software solutions
      that guarantee success on every project.
    </motion.p>

    <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
      <a href="https://www.aryahsworld.com/">
        <button
          className="mt-10 px-14 py-4 text-lg font-semibold rounded-full 
          bg-gradient-to-r from-blue-700 to-blue-500 text-white 
          shadow-xl hover:scale-110 transition-all duration-300"
        >
          Book a Strategy Call
        </button>
      </a>
    </motion.div>

    {/* Icon Row */}
    <div className="mt-14 flex justify-center gap-12 opacity-90 text-4xl">
      <FaDatabase className="text-blue-700" />
      <FaChartLine className="text-blue-600" />
      <FaBrain className="text-blue-500" />
    </div>

  </section>
);

export default Hero;
