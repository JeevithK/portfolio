import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiCplusplus,
  SiJavascript,
  SiMysql,
  SiPostman,
  SiExpress,
  
} from "react-icons/si";
import { SparklesIcon, TrophyIcon } from "@heroicons/react/24/outline";

export default function About() {
  return (
    <div
      id="about"
      className="px-6 pt-32 pb-16 min-h-screen max-w-5xl mx-auto text-center"
    >
      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-10 text-indigo-400 flex justify-center items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <SparklesIcon className="w-8 h-8 text-indigo-300" />
        About Me
      </motion.h2>

      <motion.p
        className="text-lg text-gray-400 leading-relaxed mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        I'm <span className="text-white font-semibold">Jeevith K</span>, a
        passionate MERN-stack developer who loves building web apps that are
        fast, responsive, and easy to use. I enjoy solving real-world problems
        with clean code and scalable solutions.
        <br />
        <br />
        I've also explored AI-powered apps like resume analysis using Google's
        Generative AI. Whether it's frontend finesse or backend logic, I enjoy
        crafting end-to-end experiences.
      </motion.p>

      <motion.div
        className="mt-25"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-indigo-300">
          Tech Stack
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 justify-items-center text-white text-4xl">
          <motion.div
            className="flex flex-col items-center gap-1"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <FaReact className="text-cyan-400" />
            <span className="text-sm text-gray-400">React</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center gap-1"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <FaNodeJs className="text-green-500" />
            <span className="text-sm text-gray-400">Node.js</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center gap-1"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <SiExpress className="text-white" />
            <span className="text-sm text-gray-400">Express</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center gap-1"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <SiMongodb className="text-green-600" />
            <span className="text-sm text-gray-400">MongoDB</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center gap-1"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <SiTailwindcss className="text-sky-400" />
            <span className="text-sm text-gray-400">Tailwind</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center gap-1"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <SiJavascript className="text-yellow-400" />
            <span className="text-sm text-gray-400">JavaScript</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center gap-1"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <SiCplusplus className="text-blue-400" />
            <span className="text-sm text-gray-400">C++</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center gap-1"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <SiMysql className="text-blue-500" />
            <span className="text-sm text-gray-400">MySQL</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center gap-1"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <FaGitAlt className="text-orange-500" />
            <span className="text-sm text-gray-400">Git</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center gap-1"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <SiPostman className="text-orange-400" />
            <span className="text-sm text-gray-400">Postman</span>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <div className="flex justify-center items-center gap-2 text-indigo-300 font-semibold mb-2 text-2xl mt-25">
          <TrophyIcon className="w-5 h-5" />
          Achievements
        </div>
        <p className="text-gray-300 text-1xl">
          🥇 Placed <strong>4th</strong> in Algo University Coding Contest
          <br />
          💡 Solved <strong>150+</strong> LeetCode problems
        </p>
      </motion.div>
    </div>
  );
}
