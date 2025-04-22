import { motion } from "framer-motion";
import { FaGithub, FaLink } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiPython,
  SiStreamlit,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiOpenproject,
  SiExpress,
} from "react-icons/si";

const projects = [
  {
    title: "Finance Tracker",
    description:
      "MERN stack app with JWT auth for personal finance management.",
    tags: ["React", "Node.js", "Expressjs", "MongoDB", "JWT", "Chart.js"],
    githubLink: "https://github.com/JeevithK/Fullstack_Finance_Tracker",
    demoLink: "https://fullstack-finance-tracker-grk2.onrender.com/",
  },
  {
    title: "Recipe FullStack",
    description: "MERN stack recipe app with JWT auth and image uploads.",
    tags: ["React", "Node.js", "Expressjs", "MongoDB", "JWT"],
    githubLink: "https://github.com/JeevithK/Receipe-Fullstack",
    demoLink: "#",
  },
  {
    title: "PokeDex",
    description: "Interactive PokeDex using React and PokeAPI.",
    tags: ["React", "Tailwind CSS", "PokeAPI"],
    githubLink: "https://github.com/JeevithK/PokeLib",
    demoLink: "https://poke-lib-by-jk.netlify.app/",
  },
  {
    title: "Food Recipe Finder",
    description: "Recipe search app using MealDB API with favorites feature.",
    tags: ["HTML5", "CSS3", "JavaScript", "MealDB API"],
    githubLink: "https://github.com/JeevithK/simplefoodapp",
    demoLink: "https://jeevithk.github.io/simplefoodapp/",
  },

  {
    title: "Job Eligibility Prediction",
    description: "AI tool for resume analysis with Google Generative AI.",
    tags: ["Python", "Streamlit", "Google AI"],
    githubLink:
      "https://github.com/JeevithK/Job-Eligible-prediction-by-resume-analysis",
  },
  {
    title: "Snake Game",
    description: "Classic Snake game built with vanilla JavaScript.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    githubLink: "https://github.com/JeevithK/Snake",
    demoLink: "https://jeevithk.github.io/Snake/",
  },
  {
    title: "Task Management App",
    description:
      "A responsive task management application with local storage persistence.",
    tags: ["React", "Tailwind CSS", "LocalStorage"],
    githubLink: "https://github.com/JeevithK/TaskApp",
    demoLink: "https://task-app-by-jk.netlify.app/",
  },
];

export default function Projects() {
  return (
    <div
      id="projects"
      className="px-6 pt-32 pb-16 min-h-screen max-w-7xl mx-auto"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center text-indigo-400">
        <div className="flex items-center justify-center gap-2">
          <SiOpenproject className="text-indigo-400" />
          Projects
        </div>
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              transition: { duration: 0.3 },
            }}
            className="bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-800 transform transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, idx) => {
                let Icon;
                switch (tag) {
                  case "React":
                    Icon = <SiReact className="text-blue-400" />;
                    break;
                  case "Node.js":
                    Icon = <SiNodedotjs className="text-green-500" />;
                    break;
                  case "MongoDB":
                    Icon = <SiMongodb className="text-green-600" />;
                    break;
                  case "JWT":
                  case "JavaScript":
                    Icon = <SiJavascript className="text-yellow-400" />;
                    break;
                  case "Chart.js":
                    Icon = <SiJavascript className="text-yellow-400" />;
                    break;
                  case "Tailwind CSS":
                    Icon = <SiTailwindcss className="text-sky-400" />;
                    break;
                  case "Python":
                    Icon = <SiPython className="text-blue-500" />;
                    break;
                  case "Streamlit":
                    Icon = <SiStreamlit className="text-yellow-500" />;
                    break;
                  case "HTML5":
                    Icon = <SiHtml5 className="text-orange-500" />;
                    break;
                  case "CSS3":
                    Icon = <SiCss3 className="text-blue-500" />;
                        break;
                    case "Expressjs":
                        Icon = <SiExpress className="text-white" />;
                        break;
                  default:
                    Icon = <span className="text-sm text-gray-400">{tag}</span>;
                    break;
                }
                return (
                  <span
                    key={idx}
                    className="text-sm flex items-center gap-1 px-2 py-1 bg-indigo-700 text-white rounded-full"
                  >
                    {Icon} {tag}
                  </span>
                );
              })}
            </div>
            <div className="flex gap-4">
              <a
                href={project.githubLink}
                className="text-indigo-400 hover:text-indigo-600 flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
                GitHub
              </a>
              {project.demoLink && project.demoLink !== "#" && (
                <a
                  href={project.demoLink}
                  className="text-indigo-400 hover:text-indigo-600 flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink />
                  Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
