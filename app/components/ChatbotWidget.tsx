// app/components/ChatbotWidget.tsx
"use client";

import { useState } from "react";
import { FaMessage } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import Chatbot from "./Chatbot";
import Lottie from "lottie-react";
import animationData from "@/public/greyrobot.json";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      {isOpen && (
        <div className="w-[350px] h-[500px] bg-gradient-to-t from-neutral-50 via-neutral-50/60 to-neutral-50/60 shadow-xl rounded-lg overflow-hidden relative animate-fade-in">
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
        <button
          //   className="bg-gradient-to-t from-slate-50/40 text-neutral-50 rounded-full shadow-xl"
          className="cursor-pointer"
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
    </div>
  );
}
