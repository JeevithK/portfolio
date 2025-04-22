import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub, FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("your_service_id", "your_template_id", e.target, "your_user_id")
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Error sending message. Please try again later.");
        }
      );
  };

  return (
    <div
      id="contact"
      className="px-6 pt-32 pb-16 min-h-screen max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-indigo-400 relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-indigo-500 rounded-full"></span>
        </motion.h2>
        <motion.p
          className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Let's collaborate! Whether you have a project in mind or just want to
          say hello, I'd love to hear from you.
        </motion.p>
      </div>

      <motion.div
        className="flex flex-col lg:flex-row gap-12 items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {/* Contact Info */}
        <motion.div
          className="w-full lg:w-1/3 bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Contact Information
          </h3>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-900 rounded-full">
                <FaEnvelope className="text-indigo-400 text-xl" />
              </div>
              <div>
                <p className="text-gray-400">Email me at</p>
                <a
                  href="mailto:jeevith.k2003@gmail.com"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  jeevith.k2003@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-900 rounded-full">
                <FaLinkedin className="text-indigo-400 text-xl" />
              </div>
              <div>
                <p className="text-gray-400">Connect on</p>
                <a
                  href="https://www.linkedin.com/in/jeevith-k-99a475250/"
                  target="_blank"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-900 rounded-full">
                <FaGithub className="text-indigo-400 text-xl" />
              </div>
              <div>
                <p className="text-gray-400">Check my</p>
                <a
                  href="https://github.com/JeevithK"
                  target="_blank"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="w-full lg:w-2/3 bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Send Me a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full p-4 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="w-full p-4 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows="5"
                className="w-full p-4 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-indigo-600 transition-all flex items-center justify-center gap-2"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>

          {status && (
            <div
              className={`mt-6 p-4 rounded-lg ${
                status.includes("success")
                  ? "bg-green-900/50 text-green-400"
                  : "bg-red-900/50 text-red-400"
              }`}
            >
              {status}
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
