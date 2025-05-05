"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";

import { FaFileDownload } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

// internal imports
import Button from "./Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid grid-cols-2 px-[12rem] pt-[6rem] pb-[8rem] items-center"
    >
      <article
        id="hero_desc"
        className="w-full flex flex-col items-start justify-center"
      >
        <div id="header" className="leading-[4rem]">
          <h3 className="text-[2rem] font-semibold text-slate-300">Hi, I'm</h3>
          <h1 className="text-[6rem] font-bold text-neutral-50">Suryarghya!</h1>
        </div>

        <h2 className="pt-[2.5rem] text-[2rem] font-medium text-slate-300">
          I'm a{" "}
          <TypeAnimation
            sequence={[
              "Web Developer",
              2000,
              "Software Engineer",
              2000,
              "Problem Solver",
              2000,
              "Designer",
              2000,
            ]}
            speed={50}
            className="font-semibold text-slate-50 font-display-space text-[2.2rem]"
            wrapper="span"
            repeat={Infinity}
          />
        </h2>
        <p className="pt-[1rem] text-slate-200 text-[1.2rem] font-medium">
          In pursuit of perfection in the realm of technology
        </p>
        <div
          id="hero_buttons"
          className="flex justify-start gap-[1rem] pt-[1.5rem]"
        >
          <Button
            title="Download CV"
            icon={<FaFileDownload />}
            bgColor="bg-teal-600"
            hoverBgColor="hover:bg-teal-950/20"
            textColor="text-slate-50"
            hoverTextColor="text-slate-50"
          />
          <Button
            title="Contact Me"
            icon={<FaUserCircle />}
            bgColor="bg-teal-950/20"
            hoverBgColor="hover:bg-teal-600"
            textColor="text-slate-50"
            hoverTextColor="text-slate-50"
          />
        </div>
      </article>
      <div id="hero_photo" className="flex justify-end items-center">
        <div className="p-[0.6rem] border-solid border-[2px] border-slate-50 rounded-full">
          <Image
            src="/profile-new.jpg"
            width={350}
            height={350}
            alt="profile photo"
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
