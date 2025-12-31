import { motion } from "framer-motion";

const WebDesignQuote = () => {
  return (
    <section className="w-full bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="relative bg-[#2c3f50] px-10 py-16">
          {/* QUOTE TEXT */}
          <p className="text-gray-300 text-lg font-semibold uppercase tracking-wide leading-relaxed max-w-5xl">
            Studies show that 79% of website visitors primarily scan the design
            and layout of a page, while only 16% engage deeply by reading the
            content.
          </p>

          {/* QUOTE MARK */}
          <span className="absolute bottom-6 right-10 text-6xl font-bold text-emerald-400">
            ”
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default WebDesignQuote;
