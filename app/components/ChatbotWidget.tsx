"use client";

import { useState, useRef, useEffect } from "react";
import { BsChatRightTextFill } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";

import Chatbot from "./Chatbot";
import Lottie from "lottie-react";
import animationData from "@/public/greyrobot.json";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [delayedWelcomeMessage, setDelayedWelcomeMessage] = useState<
    string | undefined
  >(undefined);
  const chatbotRef = useRef<{ resetChat: () => void }>(null);

  const handleReset = () => {
    if (chatbotRef.current) {
      chatbotRef.current.resetChat();
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setDelayedWelcomeMessage(
          "Hi,👋 I'm Marie Chatoinette, your friendly chatbot. Ask me anything about the site, your projects, or just say hi!"
        );
      }, 1200);

      return () => clearTimeout(timer);
    } else {
      setDelayedWelcomeMessage(undefined); // Reset when closed
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-[1rem] lgc:bottom-4 lgc:right-4 z-50 flex flex-col items-end gap-2">
      {isOpen && (
        <div className="w-[100vw] h-[500px] lgc:w-[350px] lgc:h-[500px] bg-neutral-50/95 shadow-xl lgc:rounded-lg flex flex-col items-center overflow-hidden relative animate-fade-in">
          <button
            className="absolute top-2 right-2 p-1 text-red-500 hover:text-red-400 ease-in-out duration-300"
            onClick={() => setIsOpen(false)}
          >
            <IoMdCloseCircle className="w-5 h-5 cursor-pointer" />
          </button>
          <button
            onClick={handleReset}
            className="absolute top-[0.6rem] right-12 py-[1px] px-[5px] font-medium text-sky-500 hover:text-sky-400 cursor-pointer ease-in-out duration-300"
          >
            Reset
          </button>
          <Chatbot
            ref={chatbotRef}
            welcomeMessage="Hi,👋 I'm Marie Chatoinette, your friendly chatbot. Ask me anything about the site, your projects, or just say hi!"
          />
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
          className="cursor-pointer hidden 2lgc:block"
          onClick={() => handleOpen()}
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
          className="fixed right-4 bottom-4 cursor-pointer 2lgc:hidden text-blue-600 bg-neutral-50/80 p-2 rounded-full text-[2rem]"
          onClick={() => handleOpen()}
          aria-label="Open chatbot"
        >
          <BsChatRightTextFill />
        </button>
      )}
    </div>
  );
}
