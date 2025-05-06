import Link from "next/link";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";

// internal imports
import projects from "../constants/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      data-key="next_prev"
      // className="px-[12rem] py-[6rem] bg-gradient-to-l from-teal-800 via-teal-800/50 to-transparent text-slate-50 rounded-tr-[10%] flex flex-col justify-center item-center"
      className="px-[1rem] lgc:px-[4rem] xlc:px-[8rem] 2lgc:px-[3rem] 2xlc:px-[12rem] py-[5rem] 2xlc:py-[10rem] bg-gradient-to-r from-teal-800/70 via-teal-800/20 to-transparent text-slate-50 2xlc:rounded-tr-[10%] flex flex-col gap-[2.5rem] 2xlc:gap-0 2xlc:flex-row justify-between item-center"
    >
      <div className="grid 2lgc:grid-cols-2 2xlc:grid-cols-3 gap-[2rem]">
        {projects.map((project, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col p-4 md:p-0 rounded-md shadow-md bg-gradient-to-br from-slate-50 via-slate-50/70 to-slate-50/30 "
            >
              <div className="p-[0.5rem] rounded-md">
                <Link href={project.github}>
                  <Image
                    src={project.image}
                    alt=""
                    width={1000}
                    height={1000}
                    className="rounded-sm hover:opacity-90 p-[0.5rem] border-[1px] border-solid border-slate-50/60"
                  />
                </Link>
              </div>
              <div className="p-[2rem] pt-[1rem] flex flex-col justify-center items-start gap-[0.6rem]">
                <h1 className="text-[1.6rem] font-bold text-slate-700">
                  {project.name}
                </h1>
                <p className="text-md leading-7 text-teal-900 font-medium">
                  {project.description}
                </p>
                <div className="flex flex-row align-bottom space-x-4 text-teal-900">
                  <Link href={project.github} target="_blank">
                    <BsGithub
                      size={30}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
