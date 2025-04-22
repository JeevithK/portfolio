import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";


export default function Home() {
  return (
    <div
      id="home"
      className="h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-900 rounded-full filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.1, 1],
          x: [-20, 20, -20],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-900 rounded-full filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [20, -20, 20],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="text-center max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-2 text-lg md:text-xl text-indigo-400 font-mono"
        >
          Hi there, I'm
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4"
        >
          <motion.span
            className="inline-block"
            whileHover={{
              scale: [1, 1.1, 1],
              textShadow: "0 0 15px rgba(79, 70, 229, 0.8)",
              transition: { duration: 0.5 },
            }}
          >
            Jeevith K
          </motion.span>
        </motion.h1>

        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 text-xl md:text-2xl text-gray-400 font-medium"
        >
          I build <span className="text-indigo-400">digital experiences</span>{" "}
          that matter
        </motion.p> */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-4 max-w-2xl mx-auto text-gray-500"
        >
          Full Stack Developer | Problem Solver | DSA Enthusiast
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 flex flex-wrap gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 rounded-lg text-white font-semibold cursor-pointer flex items-center gap-2 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
            >
              View Projects
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 transition-all duration-300 rounded-lg font-semibold cursor-pointer flex items-center gap-2"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
