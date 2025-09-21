import { FaBuilding, FaStar, FaRocket, FaTrophy } from "react-icons/fa";
import FadeIn from "../components/FadeIn";

const cases = [
  {
    title: "Regional Retailer: 3x More Leads",
    emoji: "🛍️",
    icon: <FaBuilding className="text-green-500 text-xl" />,
    result: "3x more leads in 6 months with paid + organic PIXELPILOT boost.",
    quote: '"PixelPilot delivered results fast and kept us in the loop—game changers!"',
    year: 2025
  },
  {
    title: "Law Firm: Digital First 🚀",
    emoji: "⚖️",
    icon: <FaRocket className="text-orange-400 text-xl" />,
    result: "Became #1 in Google local. PPC campaign: 500% ROI.",
    quote: '"Transparent, honest, creative solutions from the PP team."',
    year: 2024
  },
  {
    title: "Beauty Startup: 2x Brand Growth",
    emoji: "💄",
    icon: <FaStar className="text-pink-400 text-xl" />,
    result: "Engagement & SEO traffic doubled in 3 months.",
    quote: '"We got the personal care of a co-pilot and the vision of a leader!"',
    year: 2025
  },
];

export default function CaseStudiesPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="uppercase text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-600 bg-clip-text text-transparent mb-7 text-center">PIXELPILOT CASE STUDIES</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cases.map((c, idx) => (
          <FadeIn key={c.title} delay={idx * 0.1}>
          <div key={c.title}
            className="group rounded-2xl bg-gradient-to-br from-black/80 via-orange-100/10 to-yellow-300/10 p-6 shadow-lg hover:scale-105 transition-all flex flex-col border border-orange-400/10"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{c.emoji}</span>
              {c.icon}
              <div className="text-sm bg-orange-400/10 text-orange-500 rounded px-2 ml-auto">{c.year}</div>
            </div>
            <div className="font-bold text-lg text-orange-400 group-hover:text-orange-500">{c.title}</div>
            <div className="mt-2 text-gray-300 text-sm">{c.result}</div>
            <div className="mt-3 italic text-orange-200 bg-orange-600/10 rounded px-3 py-1"> {c.quote}</div>
            <div className="mt-auto pt-6 flex justify-center">
              <span className="text-lg text-yellow-400 font-bold animate-bounce">PIXELPILOT – POWERED GROWTH</span>
            </div>
          </div>
          </FadeIn>
        ))}
      </div>
      <div className="text-center mt-10 p-5 font-bold text-orange-400 rounded-xl bg-gradient-to-r from-orange-400/10 to-yellow-300/10 shadow">
        Trust PIXELPILOT. Transform results. These stories could soon include yours!
      </div>
    </section>
  );
}