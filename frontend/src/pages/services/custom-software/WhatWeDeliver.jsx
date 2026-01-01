import { motion } from "framer-motion";
import { FaUsers, FaProjectDiagram, FaIndustry, FaAward } from "react-icons/fa";

const WhatWeDeliver = () => (
  <section className="py-28 bg-white">
    <div className="max-w-7xl mx-auto px-8">

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-20 items-start">

        {/* Item 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-extrabold mb-4 text-blue-700">
            10+ Years Of Experience In <br />
            <span className="text-gray-900">Custom Software Development</span>
          </h3>

          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold text-gray-900">AryahsWorld</span> has pioneered
            custom software development services, backed by over
            <span className="font-semibold text-gray-900"> 10+ years of experience</span>
            in delivering scalable, secure, and high-performance software
            solutions tailored to diverse business needs.
          </p>
        </motion.div>

        {/* Item 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-6">
            <FaUsers className="text-5xl text-blue-600" />
            <div>
              <h3 className="text-2xl font-extrabold mb-3 text-gray-900">
                75+ Custom Software Developers
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our team of top-notch and dynamic software developers
                consistently helps clients transform complex ideas into
                powerful digital products with speed and precision.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Item 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-6">
            <FaAward className="text-5xl text-blue-600" />
            <div>
              <h3 className="text-2xl font-extrabold mb-3 text-gray-900">
                50+ Successful Custom Software Projects
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We have successfully delivered over
                <span className="font-semibold text-gray-900"> 100+ custom software projects</span>,
                gaining deep insights into diverse business models and
                client-specific requirements.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Item 4 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-6">
            <FaIndustry className="text-5xl text-blue-600" />
            <div>
              <h3 className="text-2xl font-extrabold mb-3 text-gray-900">
                Custom Software Development For 35+ Industries
              </h3>
              <p className="text-gray-700 leading-relaxed">
                AryahsWorld has delivered custom software solutions across
                <span className="font-semibold text-gray-900"> 50+ industries</span>,
                helping businesses innovate, scale, and stay competitive
                in their markets.
              </p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* CTA Button */}
      <div className="text-center mt-20">
        <button
          className="px-10 py-4 border-2 border-blue-600 text-blue-600 
          font-semibold rounded-md
          hover:bg-blue-600 hover:text-white 
          transition-all duration-300"
        >
          Click here to avail the Best Custom Software Development Services
        </button>
      </div>

    </div>
  </section>
);

export default WhatWeDeliver;
