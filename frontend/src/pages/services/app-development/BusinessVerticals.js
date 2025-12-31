import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  HeartPulse,
  Building2,
  Truck,
  Plane,
  Landmark,
  Utensils,
  Factory,
  Wifi,
  Theater,
  Dumbbell,
  Fuel,
} from "lucide-react";

const verticals = [
  { title: "Education", icon: GraduationCap },
  { title: "Healthcare", icon: HeartPulse },
  { title: "Real Estate", icon: Building2 },
  { title: "Logistics and transportation", icon: Truck },
  { title: "Travel and Hospitality", icon: Plane },
  { title: "Fintech", icon: Landmark },
  { title: "Food & Restaurant", icon: Utensils },
  { title: "Manufacturing", icon: Factory },
  { title: "Telecommunication", icon: Wifi },
  { title: "Entertainment", icon: Theater },
  { title: "Sports", icon: Dumbbell },
  { title: "Oil and Gas", icon: Fuel },
];

const BusinessVerticals = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-black mb-6"
        >
          Business Verticals
        </motion.h2>

        {/* Description */}
        <p className="max-w-4xl mx-auto text-gray-600 text-lg mb-14 leading-relaxed">
          Aryahs World Infotech is an experienced technology partner for every
          booming industry. We understand industry-specific requirements and
          deliver efficient custom software solutions.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
          {verticals.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0b4da2] group cursor-pointer flex flex-col items-center justify-center py-10 rounded-md"
              >
                <Icon
                  size={54}
                  className="text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300"
                />

                <p className="text-orange-400 font-semibold text-lg group-hover:text-blue-300 transition-colors duration-300">
                  {item.title}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div>
          <button className="border-2 border-black px-10 py-4 font-semibold text-black hover:bg-blue-600 hover:text-white transition-all duration-300">
            Get details about the approach to your project
          </button>
        </div>
      </div>
    </section>
  );
};

export default BusinessVerticals;
