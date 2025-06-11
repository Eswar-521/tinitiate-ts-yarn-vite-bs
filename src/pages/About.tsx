import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.div
      className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-6">📖 About Us</h2>
        <p className="text-lg mb-4">
          Welcome to our platform! This application is built to demonstrate the power and simplicity of modern web development technologies like <span className="text-purple-400 font-semibold">React</span>, <span className="text-purple-400 font-semibold">Tailwind CSS</span>, and <span className="text-purple-400 font-semibold">Framer Motion</span>.
        </p>
        <p className="text-lg mb-4">
          We aim to deliver a smooth, elegant, and responsive experience. Whether you're here to explore, learn, or build, this project reflects our commitment to performance, accessibility, and design.
        </p>
        <p className="text-lg">
          Thank you for visiting! We hope you enjoy using our app as much as we enjoyed building it. Feel free to reach out with feedback or questions anytime.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
