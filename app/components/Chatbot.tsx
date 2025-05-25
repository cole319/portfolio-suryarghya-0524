"use client";

import { useState } from "react";
import { RiSendPlane2Fill } from "react-icons/ri";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { role: "system", content: "You are a helpful assistant." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="fixed bottom-4 right-4 w-[350px] bg-transparent rounded-xl p-[1rem] z-50">
      <div className="h-[400px] overflow-y-auto text-sm space-y-2 mb-2 flex flex-col">
        {messages
          .filter((m) => m.role !== "system")
          .map((m, i) => (
            <div
              key={i}
              className={`p-[1rem] rounded w-[85%] ${
                m.role === "user"
                  ? "bg-sky-600 text-neutral-50 self-end"
                  : "bg-gray-100 self-start"
              }`}
            >
              <strong>{m.role === "user" ? "You" : "Bot"}:</strong> {m.content}
            </div>
          ))}
        {loading && <div className="text-gray-500">Typing...</div>}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border border-slate-600 rounded px-2 py-1 text-sm"
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
}
