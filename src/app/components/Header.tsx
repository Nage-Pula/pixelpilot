"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function ResponsiveHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
  <header className="relative z-50 w-full px-1 pt-6 pb-3 bg-transparent">
  <nav
    className={`
      flex items-center flex-wrap gap-3
      bg-black
      rounded-2xl md:rounded-full
      border-2 border-orange-500
      shadow-xl
      w-full max-w-[98vw]
      mx-auto
      px-2 sm:px-5 md:px-12
      py-3 md:py-7
      min-h-[74px] md:min-h-[140px]
      transition-all duration-300 group
      hover:shadow-[0_8px_40px_10px_rgba(255,140,0,0.18)]
      hover:scale-105
    `}
    style={{
      boxSizing: 'border-box',
      transition: 'box-shadow 0.3s, transform 0.3s',
      background: '#000'
    }}
  >
    <Link href="/" className="flex items-center flex-shrink-0 mr-4">
      <Image
        src="/pixelpilotlogo.png"
        alt="PixelPilot logo"
        width={600}
        height={160}
        priority
        className="w-28 sm:w-40 md:w-[300px] h-auto object-contain"
        style={{
          background: '#000',
          borderRadius: '0.5rem',
        }}
      />
    </Link>
    <div className="flex flex-1 flex-wrap justify-center gap-x-2 gap-y-2 sm:gap-x-3 md:gap-y-5">
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`
            px-2 py-1 rounded-full font-bold text-lg uppercase
            transition-all duration-200 shadow
            bg-gradient-to-b from-yellow-400 via-orange-500 to-orange-700
            text-black
            hover:bg-yellow-300 hover:text-black hover:shadow-lg hover:scale-110 hover:-rotate-3 hover:-translate-y-1
            
            ${pathname === href
              ? "bg-white text-black-700 scale-110 -translate-y-2 shadow-2xl border-3 border-orange-200 z-20 font-extrabold"
              : "opacity-95"
            }
          `}
          aria-current={pathname === href ? "page" : undefined}
        >
          {label}
        </Link>
      ))}
    </div>
  </nav>
      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 w-full min-h-screen z-[9999] bg-black/95 flex flex-col transition-all duration-300">
          <div className="flex items-center justify-between px-4 py-3 border-b border-orange-600">
            <Link href="/" className="flex-shrink min-w-0" style={{ maxWidth: 1000 }}>
              <Image
                src="/pixelpilotlogo.png"
                alt="PixelPilot logo"
                width={500}
                height={200}
                priority
                className="max-w-[120px] w-full h-auto object-contain"
              />
            </Link>
            <button
              aria-label="Close menu"
              className="text-orange-400 p-1 text-3xl"
              onClick={() => setMenuOpen(false)}
            >
              <HiX size={34} />
            </button>
          </div>
          <nav className="flex flex-col gap-6 mt-6 px-6 text-xl font-semibold w-full">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`w-full rounded-xl px-3 py-4 text-orange-400 hover:bg-orange-500 hover:text-black transition-all 
                  ${pathname === href
                  ? "bg-orange-400 !text-black font-extrabold shadow-md border border-orange-600 shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
                  : ""}}
                `}
                aria-current={pathname === href ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >{label}</Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}