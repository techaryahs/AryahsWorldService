import { motion } from "framer-motion";
import { Users, Layers } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const WebDevHero = () => {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* HERO TEXT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Website Design & Website Development Company
          </h1>

          <p className="mt-6 text-lg text-gray-700 font-medium">
            Looking for a top-rated website design and development company to
            create the first impression your customers will have of your
            business? <span className="font-semibold">Aryahs World Infotech</span>{" "}
            is the ultimate choice.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WebDevHero;
