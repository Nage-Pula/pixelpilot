import Link from 'next/link';
const videos = [
  {
    src: "/pixelpilotvideo.mp4",
    title: "PIXELPILOT - What We Do"
  },
  {
    src: "/pixelpilotvideo2.mp4",
    title: "Our Creative Strategy"
  },
  {
    src: "/pixelpilotvideo1.mp4",
    title: "Grow Your Brand With PIXELPILOT"
  },
];
export default function Home() {
  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-black via-zinc-900 to-black relative">
      {/* Accent background circle for depth */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-orange-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-2xl mx-auto py-16 md:py-24 relative z-10">
        <h1 className="uppercase text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-600 bg-clip-text text-transparent mb-4 tracking-tighter">
          Skyrocket Your Success with <span className="font-bold text-orange-600">PIXELPILOT</span>
        </h1>
        <h2 className="text-lg md:text-2xl text-orange-200 font-semibold mb-3">
          Your Trusted Digital Growth Co-Pilot 🚀
        </h2>
        <p className="text-gray-100 max-w-xl mx-auto mb-4 font-medium md:text-lg">
          At <span className="font-bold text-orange-600">PIXELPILOT</span>, we craft data-driven marketing strategies that fuel results. <br />
          From SEO to paid ads & social media, amplify your business and build lasting trust in the digital world.
        </p>
        <p className="text-gray-400 mb-8">
          <span className="font-semibold text-orange-300">Results-driven. Transparent. Innovative. Your growth, our mission.</span>
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-400 text-gray-900 font-bold text-lg tracking-wide shadow hover:scale-110 hover:bg-orange-400 transition-transform duration-200"
        >
          Start With a Free Growth Audit
        </Link>
        {/* Video Section */}
        <div className="mt-12 flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {videos.map((v, idx) => (
          <div 
            className="rounded-xl overflow-hidden border-2 border-orange-600 shadow-lg w-full h-full max-w-xs md:max-w-sm aspect-[4/3]bg-zinc-900 flex-shrink-0" 
            key={idx}
          >
            <video 
              src={v.src}
              title={v.title}
              controls
              className="w-full h-full object-cover"
              poster="/pixelpilotlogo.jpg"
            />
            <div className="px-4 py-2 bg-black/70 text-white text-center font-semibold uppercase text-sm">
              {v.title}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}