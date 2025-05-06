import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      data-key="next_prev"
      className="px-[12rem] py-[1.5rem] flex justify-between items-center w-full text-slate-50 "
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
            className="rounded-full bg-teal-950"
          />
        </div>
        <h1
          id="title"
          className="font-display-space font-semibold text-[1.6rem]"
        >
          Suryarghya Saha
        </h1>
      </div>
      <div id="navlinks">
        <ul className="flex justify-end gap-[2rem] text-[1.2rem] font-medium">
          <li className="hover:text-slate-300 cursor-pointer ease-in-out duration-300">
            <a href="#about_me">About Me</a>
          </li>
          <li className="hover:text-slate-300 cursor-pointer ease-in-out duration-300">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-slate-300 cursor-pointer ease-in-out duration-300">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-slate-300 cursor-pointer ease-in-out duration-300">
            <a href="#contact_me">Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
