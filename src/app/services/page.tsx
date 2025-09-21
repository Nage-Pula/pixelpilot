// Optionally, you can make icons more stylish by using react-icons or emoji.
import { FaSearch, FaBullhorn, FaLaptopCode, FaChartLine, FaUserFriends, FaRegFileAlt } from "react-icons/fa";
import FadeIn from "../components/FadeIn";

const services = [
  {
    icon: <FaSearch size={36} className="text-orange-400" />,
    title: "SEO Optimization",
    description: "Dominate search rankings, drive quality organic traffic, and grow your business.",
    cta: "Boost My SEO",
  },
  {
    icon: <FaBullhorn size={36} className="text-pink-400" />,
    title: "Social Media Marketing",
    description: "Connect and engage with your audience, turn likes into loyal customers.",
    cta: "Grow My Socials",
  },
  {
    icon: <FaLaptopCode size={36} className="text-blue-400" />,
    title: "Web Design & Development",
    description: "Stunning, responsive websites that convert and represent your true brand.",
    cta: "Get a New Website",
  },
  {
    icon: <FaChartLine size={36} className="text-green-400" />,
    title: "Analytics & Reporting",
    description: "Data-driven insights and regular reporting to keep your campaigns sharp & transparent.",
    cta: "See My Growth",
  },
  {
    icon: <FaUserFriends size={36} className="text-yellow-300" />,
    title: "Paid Ads (PPC)",
    description: "Laser-targeted campaigns for instant results and measurable ROI.",
    cta: "Launch Paid Ads",
  },
  {
    icon: <FaRegFileAlt size={36} className="text-purple-400" />,
    title: "Content Copywriting",
    description: "Persuasive, brand-driven content and campaigns that inspire action.",
    cta: "Get Winning Copy",
  },
];

export default function ServicesPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center bg-gradient-to-br from-orange-500 via-yellow-400 to-orange-700 bg-clip-text text-transparent uppercase">Our Services</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {services.map((service, idx) => (
          <FadeIn key={service.title} delay={idx * 0.1}>
          <div
            key={service.title}
            className="group rounded-2xl p-6 md:p-8 flex flex-col items-center justify-between bg-gradient-to-br from-black/70 via-zinc-900/80 to-zinc-900/50 shadow-lg 
              border border-orange-600/10
              transition-all duration-300
              hover:scale-105 hover:shadow-2xl hover:shadow-orange-400/20 
              hover:bg-gradient-to-tr hover:from-orange-200/30 hover:to-zinc-900
              backdrop-blur-md"
          >
            <div className="mb-4">{service.icon}</div>
            <h2 className="text-xl font-bold text-orange-400 mb-2 text-center">{service.title}</h2>
            <p className="text-gray-200 text-center mb-5">{service.description}</p>
            <div className="w-full flex flex-col items-center mt-auto">
              <button
                className="uppercase px-6 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-bold shadow
                hover:scale-110 hover:bg-orange-400 focus:outline-none transition-all duration-200 text-sm"
              >
                {service.cta}
              </button>
            </div>
          </div>
          </FadeIn>
        ))}
      </div>
      
    </section>
  );
}