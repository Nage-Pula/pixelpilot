
'use client';
import Link from 'next/link';
import { useRef } from 'react';


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
  // Store video refs for programmatic play/pause
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Handler to play only one video at a time
  const handlePlay = (idx: number) => {
    videoRefs.current.forEach((video, vidx) => {
      if (vidx !== idx && video) {
        video.pause();
      }
    });
  };

  return (
    <>
      <section
        className="min-h-[65vh] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-black via-zinc-900 to-black relative overflow-x-hidden"
        style={{overflowX: 'hidden'}}
      >
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
        </div>
      </section>

      {/* VIDEO CARD SECTION in its own div—you can style this independently */}
      <div
        className="
          bg-zinc-900/80 py-12
          flex justify-center
          w-full
        "
        // add or change className/background/padding for this area as needed!
      >
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-y-[25px]
            gap-x-2
            w-full
            max-w-6xl
            justify-items-center
            px-2
          "
        >
          {videos.map((v, idx) => (
            <div
              key={idx}
              className="
                bg-zinc-900
                rounded-xl
                overflow-hidden
                border-1
                border-orange-600
                shadow-lg
                w-full
                max-w-md //max-w-lg
                aspect-[4/3]
                min-h-[600px]
                flex flex-col
                items-center
              "
              style={{ boxSizing: "border-box" }}
            >
            
              <video
                ref={el => {
                  (videoRefs.current[idx] as HTMLVideoElement | null) = el;
                }}
                src={v.src}
                title={v.title}
                controls
                className="w-full h-full object-cover bg-black"
                poster="/pixelpilotlogo.jpg"
                onPlay={() => handlePlay(idx)}
              />
              <div className="px-4 py-2 bg-black/70 text-white text-center font-semibold uppercase text-sm w-full">
                {v.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
// End of src/app/page.tsx