// App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";


export default function App() {
  return (
    <div className="bg-gray-950 text-white font-sans scroll-smooth">
      <Navbar />
      <Home />
      <Projects />
      <Experience/>
      <About />
      <Contact />
    </div>
  );
}
