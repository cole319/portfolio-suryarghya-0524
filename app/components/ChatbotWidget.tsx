// app/components/ChatbotWidget.tsx
"use client";

import { useState } from "react";
import { FaMessage } from "react-icons/fa6";
import { BsChatRightTextFill } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import Chatbot from "./Chatbot";
import Lottie from "lottie-react";
import animationData from "@/public/greyrobot.json";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      {isOpen && (
        <div className="w-[350px] h-[500px] bg-neutral-50/95 shadow-xl rounded-lg overflow-hidden relative animate-fade-in">
          <button
            className="absolute top-2 right-2 p-1 rounded hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            <IoMdCloseCircle className="w-5 h-5" />
          </button>
          <Chatbot />
        </div>
      )}
      {!isOpen && (
        <div className="absolute -top-2 right-[0rem] bg-neutral-50 px-3 py-1 rounded-lg shadow text-sm animate-wiggle font-display-space z-50 hidden 2lgc:block">
          <h1>💬 Ask me anything!</h1>
          <div className="absolute bottom-[-6px] right-9 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
        </div>
      )}
      {!isOpen && (
        <button
          //   className="bg-gradient-to-t from-slate-50/40 text-neutral-50 rounded-full shadow-xl"
          className="cursor-pointer hidden 2lgc:block"
          onClick={() => setIsOpen(true)}
          aria-label="Open chatbot"
        >
          <Lottie
            animationData={animationData}
            loop={true}
            className="w-[10rem]"
          />
        </button>
      )}
      {!isOpen && (
        <button
          //   className="bg-gradient-to-t from-slate-50/40 text-neutral-50 rounded-full shadow-xl"
          className="cursor-pointer 2lgc:hidden text-blue-600 bg-neutral-50/80 p-2 rounded-full text-[2rem]"
          onClick={() => setIsOpen(true)}
          aria-label="Open chatbot"
        >
          <BsChatRightTextFill />
        </button>
      )}
    </div>
  );
}
