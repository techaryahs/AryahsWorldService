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
  Clock
} from "lucide-react";

// Animation Variants
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
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const ContactUs = () => {
  return (
    <div className="bg-white text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-600 overflow-x-hidden">
      
      {/* ================= HERO & TOP GRID ================= */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-b from-blue-50/50 to-white">
        {/* The "Plus Grid" Pattern from SS */}
        <div className="absolute top-20 left-10 w-48 h-48 opacity-20 pointer-events-none hidden lg:block">
          <div className="grid grid-cols-4 gap-6">
            {[...Array(16)].map((_, i) => (
              <span key={i} className="text-blue-600 font-bold text-2xl">+</span>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center lg:text-left"
          >
            <motion.span 
              variants={fadeUp}
              className="inline-block py-2 px-4 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-[0.2em] uppercase mb-6"
            >
              Get In Touch
            </motion.span>
            
            <motion.h1 
              variants={fadeUp}
              className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8"
            >
              Contact Us. <br />
              <span className="text-blue-600">Let's Start Your</span> Project
            </motion.h1>

            <motion.p 
              variants={fadeUp}
              className="max-w-2xl text-xl text-slate-500 leading-relaxed mb-10 mx-auto lg:mx-0"
            >
              Have an innovative idea or a complex project? Email us or fill out the 
              form – let’s collaborate to turn your digital vision into reality.
            </motion.p>
          </motion.div>
        </div>

        {/* Large Watermark Background Text */}
        <div className="absolute -bottom-10 right-0 text-[200px] font-black text-slate-50 select-none -z-10 tracking-tighter uppercase">
          Reach
        </div>
      </section>

      {/* ================= CONTACT FORM & INFO SECTION ================= */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">
          
          {/* LEFT: Contact Information Cards */}
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
                sub: "Global Delivery Center"
              },
              { 
                icon: Phone, 
                title: "Call Us", 
                detail: "+91 96199 01999",
                sub: "Mon - Sat, 10am - 7pm"
              },
              { 
                icon: Mail, 
                title: "Email Support", 
                detail: "contact@aryahsworld.com",
                sub: "Response within 24 hours"
              },
              { 
                icon: Clock, 
                title: "Working Hours", 
                detail: "10:00 AM - 07:00 PM",
                sub: "Sunday Closed"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                whileHover={{ x: 10 }}
                className="flex items-start gap-6 p-8 rounded-[32px] bg-white border border-slate-100 shadow-xl shadow-blue-900/5 group transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <item.icon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">{item.title}</h4>
                  <p className="text-xl font-bold text-slate-900 mb-1">{item.detail}</p>
                  <p className="text-sm text-slate-500">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT: Modern Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white rounded-[48px] p-8 md:p-12 shadow-2xl shadow-blue-900/10 border border-slate-50 relative"
          >
            <div className="mb-10 text-center lg:text-left">
              <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Send Us a Message</h3>
              <p className="text-slate-500 font-medium">We usually respond in less than 2 hours.</p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-600 focus:ring-0 transition-all text-slate-900 font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-600 focus:ring-0 transition-all text-slate-900 font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Subject / Service</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-600 focus:ring-0 transition-all text-slate-900 font-medium appearance-none">
                  <option>Custom Software Development</option>
                  <option>Web & App Development</option>
                  <option>AI & Machine Learning Solution</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Project Brief</label>
                <textarea 
                  rows="4" 
                  placeholder="Tell us about your project..."
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-600 focus:ring-0 transition-all text-slate-900 font-medium"
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-lg shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 transition-all"
              >
                Send Message <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ================= GOOGLE MAPS ================= */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[48px] overflow-hidden shadow-2xl border-8 border-white grayscale hover:grayscale-0 transition-all duration-700 h-[500px]"
          >
            <iframe
              title="Aryahs World Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.059434774934!2d73.0427876!3d19.017102499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c34d7fd7396b%3A0x8936c484aef8948b!2sAryahs%20World%20Infotech%20OPC%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1758013636819!5m2!1sen!2sin"className="w-full h-full border-0"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= SOCIAL CONNECT ================= */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Plus grid pattern for balance */}
        <div className="absolute bottom-10 right-10 w-32 h-32 opacity-10 hidden lg:block">
           <div className="grid grid-cols-4 gap-4">
            {[...Array(16)].map((_, i) => (
              <span key={i} className="text-blue-600 font-bold text-xl">+</span>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-black text-slate-900 mb-12 tracking-tight"
          >
            Follow Our Innovation Journey
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: Linkedin, color: "hover:bg-blue-700" },
              { icon: Facebook, color: "hover:bg-blue-800" },
              { icon: Instagram, color: "hover:bg-pink-600" },
              { icon: Twitter, color: "hover:bg-slate-900" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -10, scale: 1.1 }}
                className={`p-6 bg-white rounded-3xl text-slate-400 ${social.color} hover:text-white shadow-xl shadow-slate-200 transition-all duration-300 border border-slate-100`}
              >
                <social.icon className="w-8 h-8" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER WAVE & CTA ================= */}
      <section className="relative pt-32 pb-20 bg-blue-600 text-white overflow-hidden">
        {/* CSS Wave SVG */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
          <svg className="relative block w-full h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <MessageSquare className="w-16 h-16 text-blue-200 mx-auto mb-8 opacity-50" />
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase">
              Free Consultation & <br /> Documentation
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12 font-medium">
              Join 120+ global companies. We don't just build code; we provide full project 
              roadmaps and technical documentation for free with every consultation.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-12 py-6 rounded-full font-black text-xl uppercase tracking-widest shadow-2xl shadow-blue-900/40 hover:bg-slate-900 hover:text-white transition-all"
            >
              Talk to a Consultant
            </motion.button>
          </motion.div>
        </div>

        {/* Small Footer Signature */}
        <div className="mt-32 pt-10 border-t border-white/10 text-center">
           <p className="text-blue-200 text-sm font-bold tracking-widest uppercase opacity-60">
             © 2026 Aryahs World Infotech. Build for the future.
           </p>
        </div>
      </section>

    </div>
  );
};

export default ContactUs;