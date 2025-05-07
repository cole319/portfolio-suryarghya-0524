"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaBluesky, FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center md:text-start bg-gradient-to-tr from-teal-950 via-teal-900 to-teal-950 text-slate-50 py-10 px-[1rem] lgc:px-[4rem] xlc:px-[8rem] 2xlc:px-[12rem]">
      <div className="flex flex-col md:grid md:grid-cols-3 gap-8 items-center 2xlc:items-start">
        <div>
          <a href="#navbar">
            <h2 className="text-2xl font-bold text-white">Suryarghya Saha</h2>
          </a>
          <p className="mt-2 text-sm text-slate-300">
            Full-stack dev. Builder of fast, clean, and intelligent web
            experiences.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a
                href="#about_me"
                className="text-slate-300 hover:text-slate-50 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-slate-300 hover:text-slate-50 transition"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact_me"
                className="text-slate-300 hover:text-slate-50 transition"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/196J0v9nhwJb92DVfN8-V2NrJhaF-Nl2F/view?usp=sharing"
                target="_blank"
                className="text-slate-300 hover:text-slate-50 transition"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Get in Touch
          </h3>
          <p className="text-sm text-slate-300 mb-3">
            Got a project or idea? Let’s talk.
          </p>
          <div className="flex space-x-4 text-xl justify-center md:justify-start items-center">
            <a
              href="mailto:suryar1332001@gmail.com"
              aria-label="Email"
              className="hover:-translate-y-1 transition-transform"
            >
              <BiLogoGmail size={20} />
            </a>
            <a
              href="https://github.com/cole319"
              target="_blank"
              aria-label="GitHub"
              className="hover:-translate-y-1 transition-transform"
            >
              <FaGithub size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/suryarghya-saha-286ab4147/"
              target="_blank"
              aria-label="LinkedIn"
              className="hover:-translate-y-1 transition-transform"
            >
              <FaLinkedin size={17} />
            </a>
            <a
              href="https://x.com/dem_e_god"
              target="_blank"
              aria-label="X"
              className="hover:-translate-y-1 transition-transform"
            >
              <FaSquareXTwitter size={17} />
            </a>
            <a
              href="https://bsky.app/profile/demig0d33.bsky.social"
              target="_blank"
              aria-label="Bluesky"
              className="hover:-translate-y-1 transition-transform"
            >
              <FaBluesky size={17} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-slate-400 border-t border-slate-50/20 pt-[1.5rem]">
        © {currentYear} Suryarghya saha. All rights reserved.
      </div>
    </footer>
  );
}
