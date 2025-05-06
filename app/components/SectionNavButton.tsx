"use client";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

// internal imports

import { navigateToNext, navigateToPrev } from "../utils/navigateToNextOrPrev";

export function SectionNavButtonUp() {
  return (
    <button
      className="bg-slate-50/10 text-teal-950/50 p-[1rem] text-[1.5rem] rounded-full cursor-pointer hover:bg-slate-50 hover:text-teal-950 ease-in-out duration-300"
      onClick={navigateToPrev}
    >
      <MdKeyboardDoubleArrowUp />
    </button>
  );
}

export function SectionNavButtonDown() {
  return (
    <button
      className="bg-slate-50/10 text-teal-950/50 p-[1rem] text-[1.5rem] rounded-full cursor-pointer hover:bg-slate-50 hover:text-teal-950 ease-in-out duration-300"
      onClick={navigateToNext}
    >
      <MdKeyboardDoubleArrowDown />
    </button>
  );
}
