"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactMe() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setForm({ name: "", email: "", message: "" });
        setStatus("Message sent!");
      } else {
        const { error } = await res.json();
        setStatus(`Failed to send: ${error || "Unknown error"}`);
      }
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact_me"
      data-key="next_prev"
      className="px-[1rem] lgc:px-[4rem] xlc:px-[8rem] 3lgc:px-[6rem] 2lgc:px-[3rem] 2xlc:px-[12rem] pb-[3rem] 2xlc:pb-[6rem] text-slate-50 flex item-center"
    >
      <div className="hidden 2lgc:block w-[60%]">
        <Image
          src="/contact.png"
          width={500}
          height={500}
          alt="sleeping cat image"
          className="w-full rounded-tl-md rounded-bl-md"
        />
      </div>
      <div className="w-full 2lgc:w-[40%] flex justify-center items-center 2xlc:justify-end bg-gradient-to-br from-slate-50 via-slate-50/70 to-slate-50/50 rounded-md 2lgc:rounded-tl-none 2lgc:rounded-bl-none">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 w-full  p-[1.2rem] rounded-tr-md rounded-br-md flex flex-col items-end"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
            value={form.name}
            className="w-full border-solid border-[2px] border-slate-400 p-2 rounded-sm text-slate-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={handleChange}
            value={form.email}
            className="w-full border-solid border-[2px] border-slate-400 p-2 rounded-sm text-slate-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            onChange={handleChange}
            value={form.message}
            className="w-full border-solid border-[2px] border-slate-400 p-2 h-[10rem] 2lgc:h-[5rem] 2xlc:h-[6rem] 3xlc:h-[8rem] rounded-sm text-slate-500"
          />
          <button
            type="submit"
            className="w-full xlc:w-fit bg-gradient-to-bl from-teal-950 via-teal-900 to-teal-800 font-medium text-slate-50 px-[2.5rem] py-[0.8rem] 2lgc:py-[0.5rem] 2xlc:py-[0.8rem] rounded-md cursor-pointer hover:from-teal-800 hover:via-teal-800 hover:to-teal-800 gap-1 items-center text-center"
          >
            Send
          </button>
          {status && <p className="text-sm text-blue-600">{status}</p>}
        </form>
      </div>
    </section>
  );
}
