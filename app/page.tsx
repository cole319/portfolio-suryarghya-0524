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
    <div className="min-h-screen font-display-work bg-teal-50 text-teal-950">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}
