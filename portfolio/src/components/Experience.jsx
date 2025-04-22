import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div id="experience" className="px-6 py-16 max-w-7xl mx-auto">
      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-12 text-center text-indigo-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My Experience
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Professional Experience */}
        <motion.div
          className="bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-indigo-900 rounded-full">
              <svg
                className="w-6 h-6 text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Professional Experience
            </h3>
          </div>

          <div className="space-y-6">
            <div className="border-l-2 border-indigo-500 pl-4">
              <h4 className="text-xl font-semibold text-white">
                Web Development Intern
              </h4>
              <p className="text-indigo-400 mb-2">Ethnus, Chennai</p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">•</span>
                  Developed and maintained full-stack web applications using
                  React.js, Node.js, Express, and MongoDB, achieving a 15-second
                  reduction in average load times
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">•</span>
                  Designed and deployed RESTful APIs improving data integration,
                  resulting in 30% faster data retrieval
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">•</span>
                  Enhanced performance with caching, reducing load times by 20%
                  and improving server response by 25%
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">•</span>
                  Collaborated with cross-functional teams in agile development
                  cycles
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Open Source Contribution */}
        <motion.div
          className="bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-lg"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-indigo-900 rounded-full">
              <svg
                className="w-6 h-6 text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Open Source Contribution
            </h3>
          </div>

          <div className="space-y-6">
            <div className="border-l-2 border-indigo-500 pl-4">
              <h4 className="text-xl font-semibold text-white">
                Technical Team Member
              </h4>
              <p className="text-indigo-400 mb-2">
                Open Source Club, VIT Chennai
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">•</span>
                  Contributed to open-source projects and mentored fellow
                  students in version control using Git/GitHub
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">•</span>
                  Organized and conducted workshops on open-source tools and
                  technologies
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">•</span>
                  Collaborated with team members to maintain and improve club
                  projects
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">•</span>
                  Assisted in organizing hackathons and coding competitions
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
