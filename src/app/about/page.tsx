import { FaUsers, FaLightbulb, FaRocket, FaHandshake } from "react-icons/fa";
import Image from "next/image";
import FadeIn from "../components/FadeIn";
import Link from "next/link";

const values = [
  { icon: <FaRocket className="text-orange-400 text-2xl md:text-3xl" />, label: "INNOVATION", desc: "Always ahead, so our clients soar first." },
  { icon: <FaUsers className="text-yellow-400 text-2xl md:text-3xl" />, label: "CLIENT CENTRIC", desc: "Your goals, your dreams, our full focus." },
  { icon: <FaLightbulb className="text-green-400 text-2xl md:text-3xl" />, label: "TRANSPARENCY", desc: "Clear, honest reporting—always know your return." },
  { icon: <FaHandshake className="text-pink-400 text-2xl md:text-3xl" />, label: "PARTNERSHIP", desc: "We win together: your mission becomes ours." },
];

export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h1 className="uppercase text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-600 bg-clip-text text-transparent mb-2">About PIXELPILOT</h1>
        <p className="text-lg text-orange-200 font-semibold mb-5">Empowering brands with digital altitude. 🚀</p>
      </div>
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 mb-10">
        <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Pilot" className="rounded-2xl shadow-lg w-full md:w-1/2 object-cover aspect-[4/3]" width={400} height={200}/>
        <div className="flex-1">
          <div className="bg-gradient-to-br from-black/80 via-zinc-900/80 to-orange-300/20 rounded-2xl p-6 md:p-8 shadow-xl border border-orange-500/20">
            <h2 className="text-2xl font-bold text-orange-400 mb-2">WHY BRANDS TRUST US</h2>
            <p className="text-gray-200 font-medium mb-3">PIXELPILOT crafts digital strategies that transform your ambition into measurable results.<br/> From SEO mastery to social buzz, each client receives our first class treatment.<br/>We are more than an agency—we &apos; re your co-pilot!</p>
            <div className="rounded-xl bg-orange-400/10 px-4 py-2 text-orange-400 font-bold text-center">
              &quot;FLY HIGH. LEVEL UP. SUCCEED TOGETHER.&quot;
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {values.map((v, idx) => (
          <FadeIn key={v.label} delay={idx * 0.1}> 
          <div key={v.label}
            className="group bg-gradient-to-br from-orange-50/20 via-black/40 to-yellow-400/10 p-6 rounded-xl shadow-md text-center hover:scale-105 hover:shadow-xl hover:bg-orange-100/30 ease-in-out duration-200 transition">
            <div>{v.icon}</div>
            <h3 className="font-bold text-orange-400 text-lg mt-2 mb-1 group-hover:underline">{v.label}</h3>
            <p className="text-sm text-gray-300">{v.desc}</p>
          </div>
          </FadeIn>
        ))}        
      </div>
      
      <div className="p-6 rounded-xl bg-gradient-to-r from-orange-400/10 via-yellow-200/10 to-orange-500/10 text-center shadow flex flex-col items-center gap-3">
        <span className="text-3xl">✨</span>
        <div className="uppercase font-bold text-orange-400">choose PIXELPILOT & ENJOY THE RIDE</div>
        <p className="text-gray-200 text-sm">Ready to take off? 
        <Link href="/contact#contact-form" className=" 2 rounded-lg  text-orange font-bold shadow
                hover:scale-110 hover:bg-orange-300 transition-all duration-200 text-sm">
                <span className="text-orange-600">Contact us for a trusted partnership 🤝</span>
              </Link></p>
      </div>
    </section>
  );
}