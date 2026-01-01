import { motion } from "framer-motion";

const Benefits = () => (
  <section className="py-24 bg-white">
    <div className="max-w-5xl mx-auto px-6">

      <h2 className="text-5xl font-extrabold mb-16 text-blue-700">
        Benefits
      </h2>

      <div className="space-y-12">

        {/* Benefit 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-bold text-blue-700 tracking-widest mb-3">
            FULLY TAILORED
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Custom software is developed to fit specific business requirements,
            workflows, and objectives. AryahsWorld delivers tailor-made software
            solutions that integrate seamlessly with your processes for optimal
            performance and efficiency.
          </p>
        </motion.div>

        {/* Benefit 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-bold text-blue-700 tracking-widest mb-3">
            FLEXIBILITY
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Custom software is flexible enough to scale with evolving business
            needs. Whether adding new features, enhancing functionality, or
            expanding systems, AryahsWorld ensures smooth scalability without
            disrupting existing workflows.
          </p>
        </motion.div>

        {/* Benefit 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-bold text-blue-700 tracking-widest mb-3">
            LOWER LEARNING CURVE
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We develop custom software aligned with your current business
            processes. This significantly reduces the learning curve, as
            employees are already familiar with the workflows and system logic.
          </p>
        </motion.div>

        {/* Benefit 4 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-bold text-blue-700 tracking-widest mb-3">
            ENHANCED SECURITY
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Custom software offers higher security compared to off-the-shelf
            solutions. AryahsWorld builds systems with tailored encryption,
            access control, and security protocols to protect sensitive data.
          </p>
        </motion.div>

        {/* Benefit 5 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-bold text-blue-700 tracking-widest mb-3">
            COMPLIANCE
          </h3>
          <p className="text-gray-700 leading-relaxed">
            AryahsWorld ensures that all custom software complies with
            industry-specific regulations and standards, helping businesses
            reduce compliance risks and avoid penalties.
          </p>
        </motion.div>

        {/* Benefit 6 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-bold text-blue-700 tracking-widest mb-3">
            SEAMLESS INTEGRATION
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Custom software enables smooth integration with existing and
            third-party systems. AryahsWorld ensures your software works
            harmoniously with your current technology stack, reducing
            operational bottlenecks.
          </p>
        </motion.div>
        

      </div>
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

export default Benefits;
