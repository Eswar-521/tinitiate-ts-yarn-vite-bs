import React from "react";
import { FaUserTie, FaEnvelope, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl w-full flex flex-col md:flex-row gap-8 items-center md:items-start">
        
        {/* Left Section – Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" // Replace with your image
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover border-4 border-indigo-300 shadow-lg"
          />
        </div>

        {/* Right Section – Info */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-indigo-800 mb-2 flex items-center gap-2">
            <FaUserTie /> Eswar Kumar
          </h2>
          <p className="text-gray-700 mb-4">
            UI Architect | Full-Stack Developer | Design System Specialist
          </p>

          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-indigo-500" />
              <span>eswar@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500" />
              <span>Hyderabad, India</span>
            </div>
            <div className="flex items-center gap-3">
              <FaBriefcase className="text-green-600" />
              <span>10+ Years in Frontend Architecture, React, TypeScript, and UX</span>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "TailwindCSS", "Next.js", "GraphQL", "Node.js"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium hover:bg-indigo-200 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
