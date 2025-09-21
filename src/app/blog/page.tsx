'use client';
import { useEffect, useState } from "react";
import { FaArrowRight, FaRegNewspaper } from "react-icons/fa";
import Image from "next/image";

const posts = [
  {
    title: "SEO TRENDS FOR 2025 – BEAT YOUR COMPETITION WITH PIXELPILOT",
    date: "2025-07-07",
    description: "Step ahead of your rivals with the latest Google & AI-driven strategies from the PIXELPILOT team!",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "5 WAYS TO GAIN LOYAL CUSTOMERS — SOCIAL MEDIA MAGIC",
    date: "2025-07-01",
    description: "Convert likes and follows into 🔥 sales—PIXELPILOT’s social blueprints will have you trending this month.",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "WHATSAPP MARKETING: THE SECRET SAUCE FOR SMBs",
    date: "2025-06-22",
    description: "Instant, personal, and high-ROI: Why WhatsApp is a must for modern business. PIXELPILOT shows you how.",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=80",
  },
];
function getISTTime() {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  return new Date(utc + 19800000).toLocaleTimeString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

export default function BlogPage() {
  const [ist, setIST] = useState(getISTTime());
  useEffect(() => {
    const interval = setInterval(() => setIST(getISTTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-2 text-xl md:text-2xl font-extrabold uppercase text-orange-400">
            <FaRegNewspaper /> PIXELPILOT BLOG & INSIGHTS
          </div>
          <p className="text-orange-200 text-sm md:text-base">Fresh strategies, industry secrets, and trust-backed wisdom, delivered by PIXELPILOT.</p>
        </div>
        <span className="inline-block min-w-[180px] bg-yellow-200 text-orange-700 px-4 py-1 rounded-full text-xs font-bold text-center shadow">{ist} IST</span>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <div key={post.title} className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition cursor-pointer group bg-gradient-to-br from-orange-600/10 via-black/80 to-yellow-400/5 hover:shadow-orange-400/30">
            <div className="w-full aspect-[16/9] bg-zinc-800">
              <Image src={post.img} alt={post.title} className="w-full h-full object-cover hover:scale-110 transition" />
            </div>
            <div className="p-5 flex flex-col gap-2">
              <div className="flex flex-row items-center justify-between">
                <span className="font-bold text-xs bg-orange-100 text-orange-700 rounded px-2 py-0.5">{post.date}</span>
                <FaArrowRight className="text-orange-400 group-hover:translate-x-1 transition" />
              </div>
              <div className="font-extrabold text-lg text-orange-400 group-hover:underline group-hover:text-orange-500 transition">{post.title}</div>
              <div className="text-gray-200 text-sm">{post.description}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Inspirational quote/CGI area */}
      <div className="mt-10 p-5 bg-gradient-to-br from-orange-500/40 via-yellow-300/20 to-orange-600/60 rounded-xl shadow-xl flex items-center justify-center text-center text-lg font-bold text-orange-950">
        @quote; TRUST IS BUILT ON TRUTH. DIGITAL GROWTH IS BUILT ON PIXELPILOT. @quote;
      </div>

      {/* Fun video - replace src for your own! */}
      <div className="mt-8 mx-auto max-w-xl">
        <video
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          controls
          className="w-full rounded-lg shadow-xl"
        />
      </div>
    </section>
  );
}