import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaCodeBranch,
  FaBriefcase,
} from "react-icons/fa";

const skills = ["React", "TypeScript", "TailwindCSS", "Node.js", "Next.js", "GraphQL"];
const projects = [
  { name: "Portfolio Site", link: "#", icon: <FaCodeBranch /> },
  { name: "Design System", link: "#", icon: <FaCodeBranch /> },
  { name: "Map App", link: "#", icon: <FaCodeBranch /> },
];
const experience = [
  { year: "2023", title: "UI Architect at TechCorp" },
  { year: "2020", title: "Lead Frontend Engineer at DevStudio" },
  { year: "2016", title: "Senior Developer at CodeHive" },
];

const Profile: React.FC = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center px-6 py-10"
      style={{
        background: "linear-gradient(135deg, #1f4037, #99f2c8, #a18cd1, #fbc2eb)",
        backgroundSize: "300% 300%",
        animation: "gradientShift 15s ease infinite",
      }}
    >
      <motion.div
        className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-full max-w-5xl flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile Image */}
        <motion.div
          className="relative"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 blur-md animate-pulse opacity-60"></div>
          <img
            src="https://avatars.githubusercontent.com/u/583231?v=4"
            alt="Profile"
            className="relative z-10 w-16 h-16 rounded-full border-4 border-white shadow-md object-cover"
          />
        </motion.div>

        {/* Info */}
        <motion.div
          className="flex-1 text-gray-800"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-pink-600 to-indigo-600 mb-2">
            Eswar Kumar
          </h1>
          <h2 className="text-lg font-medium text-gray-700 mb-4">
            🎯 Full Stack Engineer | UI Architect
          </h2>
          <p className="text-sm mb-4 leading-relaxed text-gray-600">
            Expert in building scalable UI systems and engaging applications using React, Tailwind, and TypeScript.
          </p>

          {/* Contact Info */}
          <div className="space-y-2 text-sm text-gray-700 mb-5">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-indigo-500" /> eswar@example.com
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-400" /> Hyderabad, India
            </div>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h3 className="font-semibold text-indigo-700 mb-2">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-medium shadow hover:scale-105 hover:bg-indigo-200 transition"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 items-center mb-6">
            <a href="https://linkedin.com" target="_blank" className="text-indigo-600 hover:text-indigo-800 text-xl">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" className="text-gray-700 hover:text-black text-xl">
              <FaGithub />
            </a>
            <a
              href="/resume.pdf"
              download
              className="ml-4 inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition"
            >
              <FaDownload /> Resume
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Experience Timeline */}
      <motion.div
        className="bg-white/90 backdrop-blur-lg shadow-xl rounded-2xl mt-10 p-8 w-full max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="text-xl font-semibold text-indigo-800 mb-4">📅 Experience</h3>
        <ul className="space-y-3 text-gray-700">
          {experience.map((exp) => (
            <li key={exp.year} className="flex items-start gap-3">
              <FaBriefcase className="text-indigo-500 mt-1" />
              <div>
                <div className="font-bold">{exp.year}</div>
                <div>{exp.title}</div>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        className="bg-white/90 backdrop-blur-lg shadow-xl rounded-2xl mt-10 p-8 w-full max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h3 className="text-xl font-semibold text-indigo-800 mb-4">📁 Projects</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              className="flex items-center gap-3 p-4 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow text-sm transition hover:scale-[1.02]"
            >
              {project.icon}
              {project.name}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Gradient Animation */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Profile;
