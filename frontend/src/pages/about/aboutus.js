import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useScroll, useTransform, AnimatePresence } from "framer-motion";
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
  Instagram,
  CheckCircle2,
  Zap,
  Code2,
  Sparkles
} from "lucide-react";
import CEO from "../../assets/ceo.jpeg";

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const imageVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

/**
 * Custom Counter Hook/Component for Numbers
 */
const AnimatedCounter = ({ value, label }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      className="flex flex-col items-center lg:items-start"
    >
      <span className="text-4xl md:text-6xl font-black text-blue-600 tracking-tighter">
        {value}
      </span>
      <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-slate-400 font-bold mt-2">
        {label}
      </span>
    </motion.div>
  );
};

const AboutUs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax effect for the background watermark
  const watermarkX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <div ref={containerRef} className="bg-white text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-600 overflow-x-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-24 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-blue-50/50 via-white to-white">
        {/* Background Plus Grid - Adaptive for Mobile */}
        <div className="absolute top-10 right-[-5%] md:right-10 w-48 h-48 md:w-80 md:h-80 opacity-20 pointer-events-none">
          <div className="grid grid-cols-6 gap-3 md:gap-8">
            {[...Array(24)].map((_, i) => (
              <span key={i} className="text-blue-600 font-bold text-xl md:text-4xl">+</span>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
               <span className="px-4 py-1.5 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest">
                 Innovation Hub
               </span>
               <span className="h-px w-8 md:w-16 bg-blue-200"></span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 tracking-tighter leading-[1.1] md:leading-[0.9] mb-10"
            >
              About Us – <br />
              <span className="text-blue-600">Leading Custom</span> <br />
              Software Company
            </motion.h1>
            
            <motion.div 
              variants={itemVariants}
              className="mt-12 flex flex-col md:flex-row items-start gap-8 md:gap-16"
            >
              <div className="flex flex-col gap-4">
                <p className="max-w-2xl text-lg md:text-2xl text-slate-600 leading-relaxed font-medium">
                  With over <span className="font-black text-slate-900 border-b-4 border-blue-600/30">6+ years of experience</span>, 
                  Aryahs World Infotech has transformed from a visionary startup into a global technology partner 
                  operating across India, UAE, and the USA.
                </p>
                <div className="flex gap-4 mt-4">
                   <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-all shadow-xl">
                      View Portfolio
                   </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Parallax Watermark Text */}
        <motion.div 
          style={{ x: watermarkX }}
          className="absolute -bottom-10 left-0 text-[100px] md:text-[280px] font-black text-slate-50 select-none -z-10 tracking-tighter whitespace-nowrap uppercase"
        >
          Aryahs World Digital
        </motion.div>
      </section>

      {/* ================= STATS COUNTER ================= */}
      <section className="py-16 md:py-24 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            <AnimatedCounter value="2018" label="Founded In" />
            <AnimatedCounter value="50+" label="Team Members" />
            <AnimatedCounter value="120+" label="Global Clients" />
            <AnimatedCounter value="100%" label="Project Success" />
          </div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 md:gap-20 items-center">
          
          <div className="lg:col-span-5 relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
                 <Sparkles className="text-blue-600" size={20} />
                 <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-[10px] md:text-xs">The Journey Since 2018</span>
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-10">
                Who <br /><span className="text-blue-600">We Are?</span>
              </motion.h2>
              
              <motion.div variants={itemVariants} className="grid grid-cols-8 gap-3 md:gap-4 w-fit">
                {[...Array(32)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-600/20 rounded-full" />
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
              className="space-y-8"
            >
              <motion.p variants={itemVariants} className="text-lg md:text-2xl text-slate-600 leading-relaxed">
                Founded by a young and passionate entrepreneur in 2018, <span className="text-blue-700 font-black underline decoration-blue-200 underline-offset-8">Aryahs World Infotech</span> was born 
                from a simple mission: to bridge the gap between complex business challenges and intelligent digital solutions. 
                Starting as a specialized team of five, we were driven by an insatiable desire to create something disruptive.
              </motion.p>

              <motion.div variants={itemVariants} className="relative p-8 md:p-12 bg-white rounded-[32px] md:rounded-[48px] shadow-2xl shadow-blue-100 border border-slate-100 group">
                <div className="absolute top-0 left-0 w-2 h-full bg-blue-600 rounded-l-full" />
                <p className="text-xl md:text-3xl font-bold text-slate-800 italic leading-snug">
                  "Our journey to becoming a top-tier software company was built on the foundation of continuous SOP innovation and a refusal to settle for 'good enough'."
                </p>
                <div className="mt-6 flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                      <CheckCircle2 className="text-blue-600" size={20} />
                   </div>
                   <span className="text-xs font-black uppercase tracking-widest text-slate-400">Core Philosophy</span>
                </div>
              </motion.div>

              <motion.p variants={itemVariants} className="text-base md:text-xl text-slate-500 leading-relaxed">
                As we developed each new solution, our team grew in both size and expertise. Today, we stand 50+ strong, 
                leveraging high-end tech stacks like <span className="text-slate-900 font-black">AI/ML, IoT, and Cloud-Native architectures</span>. 
                We don't just build software; we build the digital infrastructure that transforms businesses into structured, tech-driven enterprises.
              </motion.p>
              
              <motion.div variants={itemVariants} className="pt-6">
                <button className="flex items-center gap-4 font-black text-blue-600 group text-sm md:text-base uppercase tracking-widest">
                  Learn about our methodology 
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ChevronRight size={20} />
                  </div>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= FOUNDER & CEO SUMMARY ================= */}
      <section className="py-24 md:py-40 bg-slate-950 text-white relative overflow-hidden">
        {/* Animated ambient light */}
        <div className="absolute top-[-10%] right-[-10%] w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-500/10 blur-[100px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariants}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-[40px] opacity-20 blur-2xl group-hover:opacity-50 transition duration-700" />
              <div className="relative rounded-[40px] overflow-hidden border-8 border-white/5 shadow-3xl">
                <img 
                  src={CEO} 
                  alt="Ahana Shaikh"
                  className="w-full aspect-[4/5] object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40" />
              </div>
              
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="absolute -bottom-10 -right-4 md:-right-10 bg-blue-600 p-8 md:p-12 rounded-[40px] shadow-3xl max-w-[280px] hidden sm:block"
              >
                <Award className="w-12 h-12 text-white mb-4" />
                <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-100 mb-1">Awarded By</p>
                <p className="text-xl font-black text-white leading-tight">Chief Minister of Maharashtra</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
                <div className="h-[2px] w-12 bg-blue-500"></div>
                <span className="text-blue-400 font-black uppercase tracking-[0.4em] text-xs">Leadership Profile</span>
              </motion.div>

              <motion.h2 variants={itemVariants} className="text-5xl md:text-8xl font-black mb-4 tracking-tighter">Ahana Shaikh</motion.h2>
              <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl text-blue-400 font-bold mb-10 flex items-center gap-4">
                Founder & Director <span className="text-white/20">/</span> <span className="text-white font-medium text-lg uppercase tracking-widest">Visionary</span>
              </motion.h3>
              
              <motion.div variants={itemVariants} className="space-y-8 text-slate-300 text-lg md:text-xl leading-relaxed font-medium">
                <p>
                  Ahana Shaikh is a visionary tech leader specializing in the convergence of Artificial Intelligence and Enterprise Solutions. Currently pursuing her <span className="text-white font-black underline underline-offset-8 decoration-blue-600">B.Tech in Computer Science (AI & ML)</span> from D. Y. Patil University, she possesses a rare blend of academic rigor and street-smart entrepreneurship.
                </p>
                <p>
                  As the driving force behind Aryahs World, Ahana has pioneered the integration of AI-driven automation into traditional business workflows, helping companies scale beyond human limitations. Her technical focus lies in Neural Networks and Machine Learning architectures that solve real-world industrial bottlenecks.
                </p>
                <p className="text-white/80 border-l-2 border-blue-500 pl-6 italic">
                  Recognized for her impact at a young age, she was honored with the <span className="text-blue-400 font-black uppercase tracking-widest">Youngest Entrepreneur Award</span> at the ALFA Awards, a prestigious recognition presented by the Hon’ble Chief Minister of Maharashtra.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-12 flex flex-wrap gap-6">
                <a href="#" className="w-14 h-14 bg-white/5 hover:bg-blue-600 rounded-2xl flex items-center justify-center transition-all duration-500 border border-white/10 group">
                  <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-14 h-14 bg-white/5 hover:bg-blue-600 rounded-2xl flex items-center justify-center transition-all duration-500 border border-white/10 group">
                  <Twitter className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <button className="px-8 py-4 bg-blue-600 text-white font-black rounded-2xl uppercase tracking-widest text-xs hover:bg-white hover:text-blue-600 transition-all shadow-2xl shadow-blue-600/20">
                   Get in touch
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-24 md:py-40 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-600 font-black uppercase tracking-[0.5em] text-xs md:text-sm mb-4 block"
            >
              Our Core Principles
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter"
            >
              The Secret to <span className="text-blue-600">Our Success</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
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
                color: "bg-slate-900"
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -20 }}
                className="bg-slate-50 p-10 md:p-16 rounded-[40px] md:rounded-[64px] border border-slate-100 relative group overflow-hidden transition-all duration-500"
              >
                <div className={`w-20 h-20 rounded-3xl ${card.color} flex items-center justify-center mb-10 shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                  <card.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">{card.title}</h3>
                <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium">{card.desc}</p>
                <div className="mt-12 flex items-center gap-3 text-blue-600 font-black uppercase tracking-widest text-xs">
                  Learn more <ArrowRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 md:py-40 bg-blue-600 text-white relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="grid grid-cols-12 gap-8 p-10">
            {[...Array(60)].map((_, i) => <div key={i} className="text-4xl">+</div>)}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-7xl font-black mb-24 tracking-tighter uppercase"
          >
            Why Aryahs World <br />Infotech?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                className="bg-white/10 backdrop-blur-xl p-10 md:p-14 rounded-[40px] border border-white/20 text-left transition-all duration-500"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                   <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-6 tracking-tight">{item.title}</h3>
                <p className="text-blue-50 text-lg leading-relaxed opacity-80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-24 md:py-40 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-slate-950 rounded-[50px] md:rounded-[100px] p-12 md:p-32 text-center text-white relative overflow-hidden shadow-3xl"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="grid grid-cols-10 gap-4 h-full w-full p-8">
                {[...Array(40)].map((_, i) => <div key={i} className="text-xl">+</div>)}
              </div>
            </div>

            <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter uppercase leading-[0.95] relative z-10">
              Start Your Digital <br/><span className="text-blue-500">Transformation Today</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-2xl mb-16 max-w-3xl mx-auto relative z-10 font-medium">
              Join 120+ global companies that trust us with their most critical software projects. Let’s build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
              <button className="bg-blue-600 hover:bg-white hover:text-blue-600 text-white px-12 py-6 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.2em] transition-all transform hover:scale-105 shadow-2xl shadow-blue-600/20">
                Contact Our Experts
              </button>
              <button className="bg-transparent border-2 border-white/20 hover:border-white text-white px-12 py-6 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.2em] transition-all transform hover:scale-105">
                Explore Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-20 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left">
               <h3 className="text-3xl font-black text-slate-900 tracking-tighter">ARYAHS <span className="text-blue-600">WORLD</span></h3>
               <p className="text-slate-400 text-xs font-black uppercase tracking-[0.3em] mt-3">Leading Custom Software Partner</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 font-black text-[10px] md:text-xs text-slate-500 uppercase tracking-[0.3em]">
              <a href="#" className="hover:text-blue-600 transition-colors">Career</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Cookies</a>
            </div>

            <div className="flex gap-4">
               {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                 <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                   <Icon size={20} />
                 </a>
               ))}
            </div>
          </div>
          <div className="mt-20 pt-10 border-t border-slate-50 text-center">
             <p className="text-slate-400 text-xs font-bold tracking-widest uppercase italic">
               © 2026 Aryahs World Infotech. Engineered for Global Excellence.
             </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;