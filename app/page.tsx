import Image from "next/image";

//internal imports
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-display-work bg-teal-50 text-teal-950 flex flex-col justify-between gap-[2rem]">
      <div className="bg-[url('/bg.jpg')] bg-cover bg-fixed">
        <Navbar />
        <Hero />
      </div>
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}
