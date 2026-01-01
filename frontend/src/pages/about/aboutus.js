import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Lightbulb,
  Target,
  Globe,
  Rocket,
  ShieldCheck,
  Cpu,
  Layers,
  Users,
  Award,
  ArrowRight,
  ChevronRight,
  ExternalLink,
  Linkedin,
  Twitter,
  Instagram
} from "lucide-react";
import CEO from "../../assets/ceo.jpeg";

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const AboutUs = () => {
  return (
    <div className="bg-white text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-600">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
        {/* Background Decorative Element: The Red/Blue Plus Grid from SS */}
        <div className="absolute top-20 right-10 w-64 h-64 opacity-20 pointer-events-none hidden lg:block">
          <div className="grid grid-cols-6 gap-6">
            {[...Array(24)].map((_, i) => (
              <span key={i} className="text-blue-600 font-bold text-2xl">+</span>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.span 
              variants={itemVariants}
              className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-widest uppercase mb-6"
            >
              Excellence in Innovation
            </motion.span>
            
            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight leading-[0.95]"
            >
              About Us – <br />
              <span className="text-blue-600">Leading Custom</span> <br />
              Software Company
            </motion.h1>
            
            <motion.div 
              variants={itemVariants}
              className="mt-12 flex flex-col md:flex-row items-start md:items-center gap-8"
            >
              <div className="h-px w-24 bg-blue-600 hidden md:block"></div>
              <p className="max-w-2xl text-xl text-slate-600 leading-relaxed">
                With over <span className="font-bold text-slate-900 border-b-2 border-blue-600">6+ years of experience</span>, 
                Aryahs World Infotech has transformed from a visionary startup into a global technology partner 
                operating across India, UAE, and the USA.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Large Watermark Text like the Screenshot */}
        <div className="absolute -bottom-16 right-0 text-[180px] font-black text-slate-50 select-none -z-10 tracking-tighter">
          DIGITAL
        </div>
      </section>

      {/* ================= STATS COUNTER ================= */}
      <section className="py-12 border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Founded In", val: "2018" },
              { label: "Team Members", val: "50+" },
              { label: "Global Clients", val: "120+" },
              { label: "Project Success", val: "100%" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center md:text-left"
              >
                <h4 className="text-4xl font-black text-blue-600">{stat.val}</h4>
                <p className="text-sm uppercase tracking-widest text-slate-500 font-bold mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.span variants={itemVariants} className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                The Journey Since 2018
              </motion.span>
              <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                Who <br />We Are?
              </motion.h2>
              
              {/* Dots Pattern from Screenshot */}
              <motion.div variants={itemVariants} className="mt-10 grid grid-cols-8 gap-3 w-fit opacity-30">
                {[...Array(32)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                ))}
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-8 text-lg text-slate-600 leading-relaxed"
            >
              <motion.p variants={itemVariants}>
                Founded by a young and passionate entrepreneur in 2018, <span className="text-blue-700 font-semibold">Aryahs World Infotech</span> was born 
                from a simple mission: to bridge the gap between complex business challenges and intelligent digital solutions. 
                Starting as a specialized team of five, we were driven by an insatiable desire to create something disruptive.
              </motion.p>

              <motion.blockquote variants={itemVariants} className="border-l-4 border-blue-600 pl-8 py-2 bg-blue-50/50 rounded-r-xl">
                <p className="text-xl font-medium text-slate-800 italic">
                  "Our journey to becoming a top-tier software company was built on the foundation of continuous SOP innovation and a refusal to settle for 'good enough'."
                </p>
              </motion.blockquote>

              <motion.p variants={itemVariants}>
                As we developed each new solution, our team grew in both size and expertise. Today, we stand 50+ strong, 
                leveraging high-end tech stacks like <span className="text-slate-900 font-bold">AI/ML, IoT, and Cloud-Native architectures</span>. 
                We don't just build software; we build the digital infrastructure that transforms businesses into structured, tech-driven enterprises.
              </motion.p>
              
              <motion.div variants={itemVariants} className="pt-4">
                <button className="flex items-center gap-2 font-bold text-blue-600 group">
                  Learn about our methodology <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= FOUNDER & CEO SUMMARY ================= */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        {/* Animated background circles */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-400/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariants}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-blue-600 rounded-2xl opacity-20 blur-2xl group-hover:opacity-40 transition duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={CEO} // Replace with assets/ceo.jpeg
                  alt="Ahana Shaikh"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-blue-600 p-6 rounded-2xl shadow-xl max-w-[200px] hidden md:block">
                <Award className="w-8 h-8 text-white mb-2" />
                <p className="text-xs font-bold uppercase tracking-widest text-blue-100">Awarded By</p>
                <p className="text-sm font-black text-white">Chief Minister of Maharashtra</p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-blue-500"></div>
                <span className="text-blue-400 font-bold uppercase tracking-[0.3em] text-sm">Leadership Profile</span>
              </motion.div>

              <motion.h2 variants={itemVariants} className="text-5xl font-black mb-2 tracking-tight">Ahana Shaikh</motion.h2>
              <motion.h3 variants={itemVariants} className="text-2xl text-blue-400 font-bold mb-8 italic">Founder & Director</motion.h3>
              
              <motion.div variants={itemVariants} className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>
                  Ahana Shaikh is a visionary tech leader specializing in the convergence of Artificial Intelligence and Enterprise Solutions. Currently pursuing her <span className="text-white font-semibold">B.Tech in Computer Science (AI & ML)</span> from D. Y. Patil University, she possesses a rare blend of academic rigor and street-smart entrepreneurship.
                </p>
                <p>
                  As the driving force behind Aryahs World, Ahana has pioneered the integration of AI-driven automation into traditional business workflows, helping companies scale beyond human limitations. Her technical focus lies in Neural Networks and Machine Learning architectures that solve real-world industrial bottlenecks.
                </p>
                <p>
                  Recognized for her impact at a young age, she was honored with the <span className="text-blue-400 font-bold uppercase tracking-wider">Youngest Entrepreneur Award</span> at the ALFA Awards, a prestigious recognition presented by the Hon’ble Chief Minister of Maharashtra. Her goal remains constant: to democratize advanced technology for businesses worldwide.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-10 flex gap-6">
                <a href="#" className="p-3 bg-white/5 hover:bg-blue-600 rounded-full transition-all duration-300">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="p-3 bg-white/5 hover:bg-blue-600 rounded-full transition-all duration-300">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="p-3 bg-white/5 hover:bg-blue-600 rounded-full transition-all duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-32 bg-white relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[250px] font-black text-slate-50 pointer-events-none select-none -z-0">
          VISION
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-600 font-black uppercase tracking-widest text-sm"
            >
              Our Core Principles
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-black text-slate-900 mt-4"
            >
              The Secret to Our Success
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Our Mission",
                desc: "To achieve excellence in software development by providing innovative and high-quality solutions that empower businesses to thrive. We are dedicated to utilizing cutting-edge technologies, fostering a collaborative environment, and consistently surpassing our clients' expectations.",
                icon: Target,
                color: "bg-blue-600"
              },
              {
                title: "Our Vision",
                desc: "To be a globally recognized leader in software development, celebrated for our commitment to innovation, quality, and customer satisfaction. We aim to continuously set new industry standards and drive technological advancements, helping businesses transform and excel in the digital age.",
                icon: Lightbulb,
                color: "bg-blue-500"
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-12 rounded-[48px] shadow-2xl shadow-blue-100 border border-slate-100 relative group overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-2 h-full ${card.color}`} />
                <div className={`w-16 h-16 rounded-2xl ${card.color} flex items-center justify-center mb-8 shadow-lg shadow-blue-200`}>
                  <card.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-6">{card.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-32 bg-blue-600 text-white relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl font-black mb-20 tracking-tight"
          >
            Why Aryahs World Infotech?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Rocket,
                title: "Future-Ready Solutions",
                desc: "We don't build for today; we engineer architectures that scale for the challenges of 2030 and beyond.",
              },
              {
                icon: ShieldCheck,
                title: "Security & Reliability",
                desc: "Enterprise-grade security is baked into our DNA. We protect your data as if it were our own.",
              },
              {
                icon: Globe,
                title: "Global Reach",
                desc: "With a footprint in the USA, UAE, and India, we provide 24/7 support and localized expertise.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 text-left"
              >
                <item.icon className="w-12 h-12 text-blue-200 mb-6" />
                <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                <p className="text-blue-50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-slate-900 rounded-[60px] p-16 text-center text-white relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="grid grid-cols-12 gap-4 h-full w-full p-4">
                {[...Array(48)].map((_, i) => (
                  <div key={i} className="text-white">+</div>
                ))}
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-8 relative z-10">Start Your Digital <br/>Transformation Today</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Join 120+ global companies that trust us with their most critical software projects. Let’s build something extraordinary together.
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full font-black text-lg transition-all transform hover:scale-105 shadow-xl shadow-blue-900/20">
                Contact Our Experts
              </button>
              <button className="bg-transparent border-2 border-white/30 hover:border-white text-white px-10 py-5 rounded-full font-black text-lg transition-all transform hover:scale-105">
                Explore Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
             <h3 className="text-2xl font-black text-slate-900">ARYAHS WORLD</h3>
             <p className="text-slate-400 text-sm mt-1">Leading Custom Software Development Partner</p>
          </div>
          <div className="flex gap-10 font-bold text-sm text-slate-500 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-blue-600 transition-colors">Career</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
          </div>
          <div className="text-slate-400 text-sm italic">
            © 2026 Aryahs World Infotech. Built for the future.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;