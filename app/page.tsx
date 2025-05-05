import Image from "next/image";

import { FaInfoCircle } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";

//internal imports
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen font-display-work bg-gradient-to-br from-teal-50 via-slate-50 to-teal-50 text-teal-950 flex flex-col justify-between gap-[2rem] ">
      <div className="bg-[url('/hero_bg.jpg')] bg-cover bg-fixed rounded-bl-[10%]">
        <Navbar />
        <Hero />
      </div>
      <Header
        icon={<FaInfoCircle size={20} />}
        heading="About Me"
        desc="Get to Know more"
      />
      <div className="bg-[url('/aboutme_bg.jpg')] bg-cover bg-fixed bg-center rounded-tr-[10%] rounded-bl-[10%]">
        <AboutMe />
      </div>
      <Header
        icon={<FaLightbulb size={20} />}
        heading="Skills"
        desc="Explore my"
      />
      <div className="bg-[url('/skills_bg.jpg')] bg-cover bg-fixed bg-center rounded-tr-[10%] rounded-bl-[10%]">
        <Skills />
      </div>
      <Header
        icon={<FaGears size={30} />}
        heading="Projects"
        desc="Browse my latest"
      />
      <div className="bg-[url('/projects_bg.jpg')] bg-cover bg-fixed bg-center rounded-tr-[10%]">
        <Projects />
      </div>
      <ContactMe />
      <Footer />
    </div>
  );
}
