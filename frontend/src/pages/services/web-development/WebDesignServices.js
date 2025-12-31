import { motion } from "framer-motion";
import designImg from "../../../assets/webDesign.jpg"; // replace with your image

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const WebDesignServices = () => {
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
            <h2 className="text-4xl font-bold text-red-600 mb-8">
              Website Design Services
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                At Aryahs World Infotech, we understand that your website often
                serves as the first impression customers have of your business.
                It’s your digital storefront, factory, and agency—all in one.
              </p>

              <p>
                Every business owner desires a website that is visually
                stunning, user-friendly, and easy to navigate.
              </p>

              <p>
                Our UI/UX designers deeply understand client requirements and
                deliver websites that not only meet but often exceed
                expectations.
              </p>

              <p>
                Our <span className="font-semibold">website designing services</span>{" "}
                are centered on creating the best visual experience for your
                customers.
              </p>

              <p>
                Here are the various aspects of our website design services:
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
              src={designImg}
              alt="Website Design"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        {/* SERVICES LIST */}
        <div className="mt-24 space-y-16 max-w-5xl">

          {/* ITEM */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h4 className="text-sm font-bold uppercase tracking-wider text-red-600 hover:text-blue-600 transition-colors duration-300 mb-4">
              Responsive Design
            </h4>
            <p className="text-gray-700 leading-relaxed">
              A responsive design adapts to different screen sizes and
              orientations, providing a fantastic user experience across
              desktops, tablets, and smartphones.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h4 className="text-sm font-bold uppercase tracking-wider text-red-600 hover:text-blue-600 transition-colors duration-300 mb-4">
              Custom Design
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Custom designs are tailored to business objectives, brand
              requirements, and client vision to ensure your website stands out
              from the competition.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h4 className="text-sm font-bold uppercase tracking-wider text-red-600 hover:text-blue-600 transition-colors duration-300 mb-4">
              User Experience (UX)
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Effective UX design includes clear navigation and organized
              content that guides users effortlessly while reducing friction.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h4 className="text-sm font-bold uppercase tracking-wider text-red-600 hover:text-blue-600 transition-colors duration-300 mb-4">
              Graphic Design
            </h4>
            <p className="text-gray-700 leading-relaxed">
              High-quality graphics, icons, and infographics enhance
              communication and ensure your message is visually compelling.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h4 className="text-sm font-bold uppercase tracking-wider text-red-600 hover:text-blue-600 transition-colors duration-300 mb-4">
              Branding
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Consistent branding across your website builds trust and ensures
              your site reflects your business identity clearly.
            </p>
          </motion.div>
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
            Click here to know more about our Website Designing Process
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default WebDesignServices;
