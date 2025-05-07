"use client";

import { useState } from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";

export default function Navbar() {
  const [linksOpen, setLinksOpen] = useState<boolean>(false);

  const handleClick = () => setLinksOpen(!linksOpen);

  return (
    <nav
      data-key="next_prev"
      id="navbar"
      className="relative py-[1.5rem] px-[1rem] lgc:px-[4rem] lgc:py-[2rem] xlc:px-[8rem] 2lgc:px-[2rem] 3lgc:px-[6rem] 2xlc:px-[12rem] 2xlc:py-[1.5rem] flex justify-between items-center w-full text-slate-50"
    >
      <div id="logo" className="flex justify-start items-center gap-[1rem]">
        <div
          id="icons"
          className="p-[0.2rem] border-solid border-[1px] border-slate-50 rounded-full"
        >
          <Image
            src={"/glowbotTransparent.svg"}
            height={50}
            width={50}
            alt="glowbot icon"
            className="rounded-full bg-teal-950 h-[2rem] w-[2rem] 2xlc:h-[3rem] 2xlc:w-[3rem]"
          />
        </div>
        <h1
          id="title"
          className="hidden lgc:block font-display-space font-semibold text-[1.2rem] 2xlc:text-[1.6rem]"
        >
          Suryarghya Saha
        </h1>
        <h1
          id="title"
          className="lgc:hidden font-display-space font-semibold text-[1.2rem] 2xlc:text-[1.6rem]"
        >
          Suryarghya
        </h1>
      </div>

      {linksOpen && (
        <div className="absolute left-0 top-0 2xlc:hidden w-full px-[2rem] pt-[1rem] pb-[3rem] bg-gradient-to-br from-slate-50 via-slate-50 to-slate-50/80 z-50">
          <div
            onClick={handleClick}
            className="2lgc:hidden text-slate-600 flex justify-end cursor-pointer"
          >
            <CgClose size={40} />
          </div>

          <ul className="flex flex-col justify-center items-center gap-[2rem] text-[1.2rem] font-medium text-slate-800 pt-[3rem]">
            <li className="hover:text-slate-500 cursor-pointer ease-in-out duration-300">
              <a href="#about_me">About</a>
            </li>
            <li className="hover:text-slate-500 cursor-pointer ease-in-out duration-300">
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:text-slate-500 cursor-pointer ease-in-out duration-300">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-slate-500 cursor-pointer ease-in-out duration-300">
              <a href="#contact_me">Contact</a>
            </li>
          </ul>
        </div>
      )}

      <div id="navlinks">
        {!linksOpen && (
          <div onClick={handleClick} className="2lgc:hidden cursor-pointer">
            <RxHamburgerMenu size={40} />
          </div>
        )}

        <ul className="hidden 2lgc:flex justify-end 2lgc:gap-[1.2rem] 2xlc:gap-[2rem] 2lgc:text-[1rem] 2xlc:text-[1.2rem] font-medium">
          <li className="hover:text-slate-300 cursor-pointer ease-in-out duration-300">
            <a href="#about_me">About</a>
          </li>
          <li className="hover:text-slate-300 cursor-pointer ease-in-out duration-300">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-slate-300 cursor-pointer ease-in-out duration-300">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-slate-300 cursor-pointer ease-in-out duration-300">
            <a href="#contact_me">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
