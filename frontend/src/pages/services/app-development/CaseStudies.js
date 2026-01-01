import React from "react";
import { motion } from "framer-motion";
import {
  FaLink,
  FaCamera,
  FaVideo,
  FaFileAlt
} from "react-icons/fa";

import project1 from "../../../assets/project1Axorex.jpeg";
import project2 from "../../../assets/project2Bailgada.jpeg";

const projects = [
  {
    title: "ASOREX",
    description:
      "ASOREX is a smart construction material procurement platform that simplifies sourcing cement, steel, bricks, and other materials with GST billing, logistics tracking, and vendor management.",
    category: "Enterprise Procurement Platform",
    image: project1
  },
  {
    title: "BAILGADA",
    description:
      "BAILGADA is a digital platform for managing rural sports events, registrations, schedules, live updates, and result tracking with seamless mobile-first experience.",
    category: "Event & Sports Management App",
    image: project2
  }
];

const CaseStudies = () => {
  return (
    <section className="py-24 bg-white">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-5xl font-extrabold mb-4 text-black">
          Case Studies
        </h2>
        <p className="text-gray-600 max-w-3xl text-lg">
          We have developed 100+ custom software solutions, helping startups and
          enterprises solve complex challenges with scalable and future-ready
          technology.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group"
          >
            {/* Image Wrapper */}
            <div className="relative overflow-hidden rounded-lg bg-gray-100">
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  aspect-[16/9]
                  object-contain
                  transition-transform duration-700
                  group-hover:scale-105
                "
              />

              {/* Hover Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-blue-600/90
                  opacity-0
                  group-hover:opacity-100
                  transition-all duration-500
                  flex items-center justify-center
                "
              >
                <div className="flex gap-6">
                  <IconBox icon={<FaFileAlt />} />
                  <IconBox icon={<FaLink />} />
                  <IconBox icon={<FaCamera />} />
                  <IconBox icon={<FaVideo />} />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="mt-6">
              <h3 className="text-2xl font-bold text-blue-600">
                {project.title}
              </h3>

              <p className="text-gray-700 mt-3 leading-relaxed">
                {project.description}
              </p>

              <p className="text-sm text-gray-500 mt-2">
                {project.category}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-20">
        <button
          className="
            border-2 border-blue-600 text-blue-600
            px-10 py-4
            font-semibold
            hover:bg-blue-600 hover:text-white
            transition-all duration-300
          "
        >
          Explore the list of projects completed by us
        </button>
      </div>
    </section>
  );
};

const IconBox = ({ icon }) => {
  return (
    <div
      className="
        w-14 h-14
        rounded-full
        bg-white
        flex items-center justify-center
        text-blue-600
        text-xl
        transform scale-0
        group-hover:scale-100
        transition-all duration-500
        hover:bg-black hover:text-white
        cursor-pointer
      "
    >
      {icon}
    </div>
  );
};

export default CaseStudies;
