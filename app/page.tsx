import Image from "next/image";

import { FaInfoCircle, FaLightbulb, FaMailBulk } from "react-icons/fa";
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
import {
  SectionNavButtonUp,
  SectionNavButtonDown,
} from "./components/SectionNavButton";
import Chatbot from "./components/Chatbot";
import ChatbotWidget from "./components/ChatbotWidget";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen font-display-work bg-gradient-to-br from-teal-800 via-slate-50 to-teal-700 bg-fixed text-teal-950 flex flex-col justify-between gap-[2rem] overflow-hidden">
      <div className="fixed top-[85vh] 3lgc:top-[50vh] right-[2%] 2xlc:right-[5%] transform -translate-y-[50%] z-50 flex flex-col gap-[1rem]">
        <SectionNavButtonUp />
        <SectionNavButtonDown />
      </div>
      <ChatbotWidget />
      <div className="bg-[url('/hero_bg.jpg')] bg-cover bg-fixed 2xlc:rounded-bl-[10%]">
        <Navbar />
        <Hero />
      </div>
      <Header
        icon={<FaInfoCircle size={20} />}
        heading="About Me"
        desc="Get to Know more"
      />
      <div className="bg-[url('/aboutme_bg.jpg')] bg-cover bg-fixed bg-center 2xlc:rounded-tr-[10%] 2xlc:rounded-bl-[10%]">
        <AboutMe />
      </div>
      <Header
        icon={<FaLightbulb size={20} />}
        heading="Skills"
        desc="Explore my"
      />
      <div className="bg-[url('/skills_bg.jpg')] bg-cover bg-fixed bg-center 2xlc:rounded-tr-[10%] 2xlc:rounded-bl-[10%]">
        <Skills />
      </div>
      <Header
        icon={<FaGears size={30} />}
        heading="Projects"
        desc="Browse my latest"
      />
      <div className="bg-[url('/projects_bg.jpg')] bg-cover bg-fixed bg-center 2xlc:rounded-tr-[10%]">
        <Projects />
      </div>
      <Header
        icon={<FaMailBulk size={20} />}
        heading="Contact"
        desc="Let's connect"
      />
      <ContactMe />
      <Footer />
    </main>
  );
}
