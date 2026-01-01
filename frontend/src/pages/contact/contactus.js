import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  Send,
  MessageSquare,
  Clock,
} from "lucide-react";

/* ================= ANIMATION VARIANTS ================= */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ================= MAIN COMPONENT ================= */

const ContactUs = () => {
  return (
    <div className="bg-white text-slate-800 font-sans overflow-x-hidden selection:bg-blue-100 selection:text-blue-600">

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-28 sm:pt-32 lg:pt-48 pb-20 lg:pb-32 bg-gradient-to-b from-blue-50/50 to-white overflow-hidden">
        {/* Decorative Plus Grid */}
        <div className="absolute top-20 left-10 w-48 h-48 opacity-20 pointer-events-none hidden lg:block">
          <div className="grid grid-cols-4 gap-6">
            {[...Array(16)].map((_, i) => (
              <span key={i} className="text-blue-600 font-bold text-2xl">+</span>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center lg:text-left"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block py-2 px-4 rounded-full bg-blue-100 text-blue-700 text-xs font-black tracking-[0.2em] uppercase mb-6"
            >
              Get In Touch
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-tight mb-8"
            >
              Contact Us. <br />
              <span className="text-blue-600">Let's Start Your</span> Project
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-2xl mx-auto lg:mx-0 text-lg sm:text-xl text-slate-500 leading-relaxed mb-10"
            >
              Have an innovative idea or a complex project? Email us or fill out
              the form — let’s collaborate to turn your digital vision into reality.
            </motion.p>
          </motion.div>
        </div>

        {/* Background Watermark */}
        <div className="hidden md:block absolute -bottom-10 right-0 text-[200px] font-black text-slate-50 select-none -z-10 tracking-tighter uppercase">
          Reach
        </div>
      </section>

      {/* ================= CONTACT FORM + INFO ================= */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* LEFT: CONTACT INFO */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="lg:col-span-5 space-y-6"
          >
            {[
              {
                icon: MapPin,
                title: "Head Office",
                detail: "Navi Mumbai, Maharashtra, India",
                sub: "Global Delivery Center",
              },
              {
                icon: Phone,
                title: "Call Us",
                detail: "+91 96199 01999",
                sub: "Mon - Sat, 10am - 7pm",
              },
              {
                icon: Mail,
                title: "Email Support",
                detail: "contact@aryahsworld.com",
                sub: "Response within 24 hours",
              },
              {
                icon: Clock,
                title: "Working Hours",
                detail: "10:00 AM - 07:00 PM",
                sub: "Sunday Closed",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="flex items-start gap-5 p-6 sm:p-8 rounded-[28px] bg-white border border-slate-100 shadow-xl shadow-blue-900/5 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">
                    {item.title}
                  </h4>
                  <p className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
                    {item.detail}
                  </p>
                  <p className="text-sm text-slate-500">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT: FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white rounded-[36px] sm:rounded-[48px] p-6 sm:p-10 shadow-2xl shadow-blue-900/10 border border-slate-50"
          >
            <div className="mb-8 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
                Send Us a Message
              </h3>
              <p className="text-slate-500 font-medium">
                We usually respond within 2 hours.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-5 sm:px-6 py-4 rounded-2xl bg-slate-50 text-base sm:text-lg focus:bg-white focus:border-blue-600 transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-5 sm:px-6 py-4 rounded-2xl bg-slate-50 text-base sm:text-lg focus:bg-white focus:border-blue-600 transition-all"
                />
              </div>

              <select className="w-full px-5 sm:px-6 py-4 rounded-2xl bg-slate-50 text-base sm:text-lg focus:bg-white focus:border-blue-600 transition-all">
                <option>Custom Software Development</option>
                <option>Web & App Development</option>
                <option>AI & Machine Learning</option>
                <option>General Inquiry</option>
              </select>

              <textarea
                rows="4"
                placeholder="Tell us about your project..."
                className="w-full px-5 sm:px-6 py-4 rounded-2xl bg-slate-50 text-base sm:text-lg focus:bg-white focus:border-blue-600 transition-all"
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-lg shadow-xl shadow-blue-600/30 flex items-center justify-center gap-3 transition-all"
              >
                Send Message <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ================= GOOGLE MAP (FULL COLOR) ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-[28px] sm:rounded-[48px] overflow-hidden shadow-2xl border-4 sm:border-8 border-white h-[300px] sm:h-[400px] lg:h-[500px]">
            <iframe
              title="Aryahs World Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.059434774934!2d73.0427876!3d19.017102499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c34d7fd7396b%3A0x8936c484aef8948b!2sAryahs%20World%20Infotech%20OPC%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1758013636819!5m2!1sen!2sin"  className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ================= SOCIAL LINKS ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-12">
            Follow Our Innovation Journey
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {[Linkedin, Facebook, Instagram, Twitter].map((Icon, i) => (
              <motion.a
                key={i}
                whileHover={{ y: -8, scale: 1.1 }}
                className="p-4 sm:p-6 bg-white rounded-2xl sm:rounded-3xl text-slate-400 hover:text-white hover:bg-blue-600 shadow-xl transition-all"
                href="#"
              >
                <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA FOOTER ================= */}
      <section className="relative pt-32 pb-20 bg-blue-600 text-white text-center">
        <MessageSquare className="w-16 h-16 text-blue-200 mx-auto mb-8 opacity-50" />
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-8 uppercase">
          Free Consultation & Documentation
        </h2>
        <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-12">
          We provide complete project roadmaps and technical documentation free
          with every consultation.
        </p>
        <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-black text-lg uppercase tracking-widest shadow-2xl hover:bg-slate-900 hover:text-white transition-all">
          Talk to a Consultant
        </button>

        <p className="mt-20 text-blue-200 text-sm font-bold tracking-widest uppercase opacity-60">
          © 2026 Aryahs World Infotech. Built for the future.
        </p>
      </section>
    </div>
  );
};

export default ContactUs;
