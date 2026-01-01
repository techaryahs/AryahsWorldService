import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section className="w-full bg-black">
      <div className="max-w-7xl mx-auto px-6 py-32">

        {/* SMALL TOP TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-widest text-blue-500 mb-8"
        >
          Work with the pro website design & website development team
        </motion.p>

        {/* MAIN HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white font-extrabold text-4xl md:text-6xl leading-tight max-w-5xl mb-16"
        >
          Would you like to have a professional project?
          <br />
          Let’s talk about it!
        </motion.h2>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <button className="border-2 border-blue-500 text-blue-500 px-10 py-4 font-semibold tracking-wide hover:bg-blue-500 hover:text-black transition-all duration-300">
            Get started
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default FinalCTA;
