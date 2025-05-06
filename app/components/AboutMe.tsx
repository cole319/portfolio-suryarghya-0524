import { FaGraduationCap } from "react-icons/fa";

export default function AboutMe() {
  return (
    <section
      id="about_me"
      data-key="next_prev"
      className="lgc:px-[4rem] lgc:py-[2rem] px-[1rem] 2lgc:px-[10rem] 2xlc:px-[12rem] py-[3rem] xlc:px-[8rem] xlc:py-[4rem] 2xlc:py-[10rem] bg-gradient-to-l from-teal-800 via-teal-800/20 to-transparent text-slate-50 2xlc:rounded-tr-[10%] flex flex-col gap-[2.5rem] 2xlc:gap-0 2xlc:flex-row justify-between item-center"
    >
      <div
        id="education"
        className="bg-gradient-to-br from-slate-50 via-slate-50/70 to-slate-50/50 px-[1.5rem] py-[2rem] rounded-[0.5rem] w-full 2xlc:w-1/3"
      >
        <div
          id="education_header"
          className="flex justify-start items-center gap-[0.5rem]"
        >
          <span className="text-teal-900 text-[1.6rem] border-[1px] border-solid border-teal-950 rounded-full p-[0.2rem]">
            <FaGraduationCap />
          </span>
          <h1 className="text-teal-900 text-[1.2rem] font-semibold">
            Education
          </h1>
        </div>
        <div
          id="education_details"
          className="flex flex-col pt-[1rem] font-medium"
        >
          <h1 className="font-semibold text-slate-800">Degree:</h1>
          <p className="text-slate-600 pb-1">Bachelor of Technology (B.Tech)</p>
          <h1 className="font-semibold text-slate-800">Major:</h1>
          <p className="text-slate-600 pb-1">
            Computer Science and Engineering
          </p>
          <h1 className="font-semibold text-slate-800">Alma Mater:</h1>
          <p className="text-slate-600 pb-1">
            Indian Institute of Technology (Indian School of Mines) Dhanbad
          </p>
          <h1 className="font-semibold text-slate-800">Year:</h1>
          <p className="text-slate-600 pb-1">2020 - 2024</p>
        </div>
      </div>
      <div className="w-full 2xlc:w-1/2 text-[1rem] 2xlc:text-[1.2rem]">
        <p>Hello there!</p>
        <p>
          {" "}
          I’m a Computer Science and Engineering graduate from IIT (ISM) Dhanbad
          with a sharp focus on modern web development. My core stack revolves
          around JavaScript, React, Node.js, and Next.js. I enjoy architecting
          clean, scalable APIs and building fast, responsive web apps that don’t
          just work but impress. I have a growing interest in blockchain tech
          and occasionally dive into smart contracts and decentralized
          solutions. I thrive on solving real-world problems through code and
          believe in writing software that’s elegant, efficient, and
          maintainable. Tech keeps evolving—and so do I, one project at a time.
        </p>
      </div>
    </section>
  );
}
