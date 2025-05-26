// app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://suryarghya-portfolio.vercel.app/",
      "X-Title": "Marie",
    },
    body: JSON.stringify({
      model: "mistralai/mistral-7b-instruct",
      messages: body.messages,
      temperature: 0.7,
    }),
  });

  const data = await res.json();
  return NextResponse.json(data);
}
