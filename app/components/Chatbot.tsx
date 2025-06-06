"use client";

import { forwardRef, useImperativeHandle } from "react";
import { useState, useRef, useEffect } from "react";
import { RiSendPlane2Fill } from "react-icons/ri";

type Message = { role: string; content: string };

const Chatbot = forwardRef(function Chatbot(
  { welcomeMessage }: { welcomeMessage?: string },
  ref
) {
  const LOCAL_KEY = "chatbot_messages_v1";
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const hasWelcomedRef = useRef(false);

  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(LOCAL_KEY);
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) return parsed;
        } catch (e) {
          console.warn("Error parsing chat history:", e);
        }
      }
    }
    return [{ role: "system", content: "You are a helpful assistant." }];
  });

  useEffect(() => {
    if (welcomeMessage && !hasWelcomedRef.current) {
      const alreadyExists = messages.some(
        (m) => m.role === "assistant" && m.content === welcomeMessage
      );

      if (!alreadyExists) {
        const timer = setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            { role: "assistant", content: welcomeMessage },
          ]);
          hasWelcomedRef.current = true;
        }, 500);

        return () => clearTimeout(timer);
      } else {
        hasWelcomedRef.current = true;
      }
    }
  }, [welcomeMessage, messages]);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(messages));
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const updatedMessages = [...messages, { role: "user", content: input }];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await res.json();

      if (!data.choices || !data.choices.length) {
        console.error("Invalid response from OpenRouter:", data);
        setMessages([
          ...updatedMessages,
          {
            role: "assistant",
            content: "Sorry, something went wrong with the response.",
          },
        ]);
      } else {
        const reply = data.choices[0].message;
        setMessages([...updatedMessages, reply]);
      }
    } catch (err) {
      console.error("Chatbot API error:", err);
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: "Chatbot backend failed. Check console for more info.",
        },
      ]);
    }

    setLoading(false);
  };

  const handleResetChat = () => {
    const systemMessage = {
      role: "system",
      content: "You are a helpful assistant.",
    };
    const initialMessages = [systemMessage];

    if (welcomeMessage) {
      initialMessages.push({ role: "assistant", content: welcomeMessage });
      hasWelcomedRef.current = true;
    } else {
      hasWelcomedRef.current = false;
    }

    setMessages(initialMessages);
    localStorage.removeItem(LOCAL_KEY);
  };

  useImperativeHandle(ref, () => ({
    resetChat: handleResetChat,
  }));

  return (
    <div className="fixed bottom-4 w-full smc:w-[80%] mdc:w-[65%] lgc:w-[350px] rounded-xl p-[1rem] z-50">
      <div className="h-[400px] overflow-y-auto text-sm space-y-2 mb-2 flex flex-col">
        {messages
          .filter((m) => m.role !== "system")
          .map((m, i) => (
            <div
              key={i}
              className={`p-[1rem] rounded-2xl w-[85%] shadow-md ${
                m.role === "user"
                  ? "bg-sky-600 text-neutral-50 self-end rounded-br-none"
                  : "bg-slate-200 self-start rounded-bl-none"
              }`}
            >
              <strong>{m.role === "user" ? "You" : "Marie"}:</strong>{" "}
              {m.content}
            </div>
          ))}
        <div ref={messagesEndRef} />
        {loading && <div className="text-slate-500">Typing...</div>}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border border-slate-600 rounded-xl px-2 py-1 text-sm"
          placeholder="Write here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="text-sky-600 text-2xl px-1 py-1 rounded cursor-pointer hover:text-sky-500"
        >
          <RiSendPlane2Fill />
        </button>
      </div>
    </div>
  );
});

export default Chatbot;
