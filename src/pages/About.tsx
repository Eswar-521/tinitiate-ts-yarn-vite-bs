import React from "react";
import { FaLightbulb, FaCode, FaUsers, FaCheckCircle } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-indigo-100 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-4xl w-full space-y-6 animate-fade-in">
        <h1 className="text-3xl font-bold text-center text-indigo-800 mb-6">About Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vision */}
          <div className="p-5 rounded-xl border border-indigo-100 shadow-sm hover:shadow-md transition bg-gradient-to-tr from-indigo-50 to-white">
            <h3 className="flex items-center text-lg font-semibold text-indigo-700 mb-2">
              <FaLightbulb className="mr-2 text-yellow-500" /> Vision
            </h3>
            <p className="text-gray-600 text-sm">
              I believe in building intuitive, scalable, and visually engaging user experiences that solve real-world problems and delight users.
            </p>
          </div>

          {/* Expertise */}
          <div className="p-5 rounded-xl border border-indigo-100 shadow-sm hover:shadow-md transition bg-gradient-to-tr from-indigo-50 to-white">
            <h3 className="flex items-center text-lg font-semibold text-indigo-700 mb-2">
              <FaCode className="mr-2 text-blue-500" /> Expertise
            </h3>
            <p className="text-gray-600 text-sm">
              From TypeScript and React to full-stack systems with Node.js and MongoDB, I specialize in crafting seamless interfaces and modular codebases.
            </p>
          </div>

          {/* Collaboration */}
          <div className="p-5 rounded-xl border border-indigo-100 shadow-sm hover:shadow-md transition bg-gradient-to-tr from-indigo-50 to-white">
            <h3 className="flex items-center text-lg font-semibold text-indigo-700 mb-2">
              <FaUsers className="mr-2 text-pink-500" /> Collaboration
            </h3>
            <p className="text-gray-600 text-sm">
              I enjoy working with cross-functional teams and designers to bring products to life with attention to detail and user empathy.
            </p>
          </div>

          {/* Goal */}
          <div className="p-5 rounded-xl border border-indigo-100 shadow-sm hover:shadow-md transition bg-gradient-to-tr from-indigo-50 to-white">
            <h3 className="flex items-center text-lg font-semibold text-indigo-700 mb-2">
              <FaCheckCircle className="mr-2 text-green-500" /> Goal
            </h3>
            <p className="text-gray-600 text-sm">
              My goal is to continuously learn, build meaningful software, and contribute to the open-source and developer community.
            </p>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default About;
