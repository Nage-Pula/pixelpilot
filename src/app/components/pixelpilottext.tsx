'use client';

export default function pixelpilottext({ className = "" }) {
  return (
    <span
      className={`
        relative font-extrabold uppercase tracking-widest
        px-2 py-1
        inline-block
        text-transparent bg-clip-text
        z-10
        ${className}
      `}
      style={{
        background: "linear-gradient(270deg, #ff8800, #fee440, #9b5de5, #f15bb5, #ff8800)",
        backgroundSize: "1200% 1200%",
        animation: "pixelpilot-flash 2.5s linear infinite"
      }}
    >
      PIXELPILOT
      <style jsx>{`
        @keyframes pixelpilot-flash {
          0% { background-position: 0% 50%; filter: brightness(1.05);}
          40% { background-position: 100% 50%; filter: brightness(1.19);}
          60% { background-position: 20% 50%; filter: brightness(1.05);}
          90% { background-position: 70% 50%; filter: brightness(1.08);}
          100% { background-position: 0% 50%; filter: brightness(1);}
        }
      `}</style>
    </span>
  );
}