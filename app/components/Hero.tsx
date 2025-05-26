"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

import {
  FaUserCircle,
  FaLinkedin,
  FaFileDownload,
  FaGithub,
} from "react-icons/fa";
import { FaBluesky, FaSquareXTwitter } from "react-icons/fa6";

// internal imports
import Button from "./Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col lgc:px-[4rem] xlc:px-[8rem] 3lgc:px-[6rem] 3lgc:pt-[2rem] 3lgc:grid 3lgc:grid-cols-2 3lgc:[grid-template-rows:90%_10%] px-[1rem] 2xlc:px-[12rem] 2xlc:pt-[4rem] pb-[5rem] items-center rounded-[0%] 2xlc:rounded-bl-[10%]"
    >
      <article
        id="hero_desc"
        className="w-full flex flex-col 3lgc:items-start justify-center items-center"
      >
        <div
          id="header"
          className="leading-[2.2rem] 2lgc:leading-[3rem] 2xlc:leading-[4rem] text-center 3lgc:text-start"
        >
          <h3 className="text-[1.5rem] 2xlc:text-[2rem] font-semibold text-slate-300">
            Hi, I'm
          </h3>
          <h1 className="text-[3rem] 2lgc:text-[4rem] 2xlc:text-[5rem] 3xlc:text-[6rem] font-bold text-neutral-50">
            Suryarghya
          </h1>
        </div>

        <h2 className="pt-[2.5rem] text-[1.5rem] 2xlc:text-[2rem] font-medium text-slate-300 text-center 2xlc:text-start">
          I'm a{" "}
          <TypeAnimation
            sequence={[
              "Web Developer",
              2000,
              "Software Engineer",
              2000,
              "Problem Solver",
              2000,
            ]}
            speed={50}
            className="font-semibold text-slate-50 font-display-space text-[1.8rem] 2xlc:text-[2.2rem]"
            wrapper="span"
            repeat={Infinity}
          />
        </h2>
        <p className="text-slate-200 text-[1rem] 2xlc:text-[1.2rem] font-medium text-center 2xlc:text-start pt-[1.2rem] 3lgc:pt-[0rem]">
          In pursuit of perfection in the realm of technology
        </p>
        <div
          id="hero_buttons"
          className="flex flex-col lgc:flex-row justify-center 3lgc:justify-start gap-[1rem] pt-[3rem] w-full"
        >
          <a
            href="https://drive.google.com/file/d/1_7WrorlWQzOCm6_EzoHn6tq2WqptFT4H/view?usp=sharing"
            target="_blank"
          >
            <Button
              title="Download CV"
              icon={<FaFileDownload />}
              bgColor="bg-teal-600"
              hoverBgColor="hover:bg-teal-950/20"
              textColor="text-slate-50"
              hoverTextColor="text-slate-50"
            />
          </a>

          <a href="#contact_me">
            <Button
              title="Contact Me"
              icon={<FaUserCircle />}
              bgColor="bg-teal-950/20"
              hoverBgColor="hover:bg-teal-600"
              textColor="text-slate-50"
              hoverTextColor="text-slate-50"
            />
          </a>
        </div>
      </article>
      <div
        id="hero_photo"
        className="flex justify-end items-center pt-[2rem] 2xlc:pt-[0rem]"
      >
        <div className="p-[0.6rem] border-solid border-[2px] border-slate-50 rounded-full">
          <Image
            src="/profile-new.jpg"
            width={350}
            height={350}
            alt="profile photo"
            className="rounded-full h-[15rem] w-[15rem] 2xlc:w-[20rem] 2xlc:h-[20rem]"
          />
        </div>
      </div>
      <div className="col-span-2 flex justify-center items-center text-slate-50 gap-[3rem] text-[1.7rem] pt-[6rem]">
        <a
          href="https://github.com/cole319"
          target="_blank"
          className="hover:-translate-y-1 transition-transform"
        >
          <FaGithub size={23} />
        </a>
        <a
          href="https://x.com/dem_e_god"
          target="_blank"
          className="hover:-translate-y-1 transition-transform"
        >
          <FaSquareXTwitter size={23} />
        </a>
        <a
          href="https://www.linkedin.com/in/suryarghya-saha-286ab4147/"
          target="_blank"
          className="hover:-translate-y-1 transition-transform"
        >
          <FaLinkedin size={23} />
        </a>
        <a
          href="https://bsky.app/profile/demig0d33.bsky.social"
          target="_blank"
          className="hover:-translate-y-1 transition-transform"
        >
          <FaBluesky size={23} />
        </a>
      </div>
    </section>
  );
}
