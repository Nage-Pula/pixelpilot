import { FaDesktop, FaChartPie, FaInstagram, FaRocket } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Skyrocket 🚀",
    icon: <FaDesktop className="text-orange-500 text-3xl" />,
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80",
    desc: "Boosted sales 200% for a fashion startup. Bold ads + a sleek webstore ↑",
    cta: "See How",
  },
  {
    title: "Content That Converts 💡",
    icon: <FaChartPie className="text-yellow-400 text-3xl" />,
    img: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=500&q=80",
    desc: "Brand storytelling for a SaaS—retention up 40%.",
    cta: "View Story",
  },
  {
    title: "Influencer Social Buzz 📸",
    icon: <FaInstagram className="text-pink-500 text-3xl" />,
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
    desc: "Tripled engagement for a travel brand via reels & UGC campaigns.",
    cta: "Get Inspired",
  },
];

export default function PortfolioPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="uppercase text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-600 bg-clip-text text-transparent mb-10">PIXELPILOT PORTFOLIO</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(p => (
          <div
            key={p.title}
            className="rounded-2xl shadow-xl overflow-hidden bg-gradient-to-br from-black/70 via-orange-100/20 to-yellow-200/10 hover:scale-105 hover:shadow-2xl transition group">
            <div className="relative w-full aspect-[4/3]">
              <Image src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:brightness-110 transition" />
              <div className="absolute top-3 left-3">{p.icon}</div>
            </div>
            <div className="p-6 flex flex-col gap-2 min-h-[150px]">
              <div className="font-bold text-lg text-orange-400">{p.title}</div>
              <div className="text-gray-200 text-sm">{p.desc}</div>
              <a
                href="#"
                className="mt-auto inline-block uppercase px-4 py-2 rounded-lg bg-gradient-to-r from-orange-400 to-yellow-300 text-black font-semibold shadow hover:scale-110 focus:outline-none transition mt-4 text-sm">
                {p.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10 p-5 font-semibold text-orange-400 rounded-xl bg-gradient-to-r from-orange-400/10 to-yellow-300/10 shadow">&quot;Let&apos;s build your next success story with PIXELPILOT!&quot;</div>
    </section>
  );
}