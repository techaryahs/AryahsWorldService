import { motion } from "framer-motion";
import webDevelopmentImg from "../../../assets/webDevelopment.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const WebDevelopmentServices = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-blue-600 mb-8">
              Website Development Services
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                A user-friendly website design should be accompanied by a
                scalable website development architecture. Our{" "}
                <span className="font-semibold text-blue-600">
                  website development services
                </span>{" "}
                are designed to create robust, secure, and scalable websites
                that meet the demands of modern businesses.
              </p>

              <p>
                To ensure optimal performance, our website development team uses
                the latest technologies and best practices. As one of the
                leading website development companies in India, UAE, and the
                USA, we are committed to delivering high-quality solutions that
                drive success.
              </p>

              <p>
                Here are the various aspects of our website development services:
              </p>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src={webDevelopmentImg}
              alt="Website Development"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        {/* SERVICES LIST */}
        <div className="mt-24 space-y-16 max-w-5xl">

          {[
            {
              title: "Static Website Development",
              desc:
                "A static website consists of web pages with fixed content, making them ideal for organizational, institutional, or personal websites. These websites are perfect for showcasing brands, products, or services with minimal data and quick loading times. We specialize in creating high-quality static websites that provide a secure and fast online presence.",
            },
            {
              title: "Custom Website / Dynamic Website Development",
              desc:
                "A dynamic website generates content in real-time based on user interactions or other triggers, creating a more interactive and engaging experience. We excel in creating dynamic websites that offer rich functionality and a personalized user experience.",
            },
            {
              title: "E-Commerce Development",
              desc:
                "E-commerce development involves creating online platforms where businesses can sell products or services. We develop secure, scalable, and user-friendly e-commerce solutions with features like product listings, shopping carts, and payment gateways.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800 transition-colors duration-300 mb-4">
                {item.title}
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 flex justify-center"
        >
          <button className="border-2 border-blue-600 text-blue-600 px-10 py-4 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
            Click here to know more about our Website Development Process
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default WebDevelopmentServices;
