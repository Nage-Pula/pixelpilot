"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi"; // react-icons

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/100 backdrop-blur-lg shadow-lg">
      <nav className="mx-auto max-w-screen-xl flex items-center md:justify-between gap-3 px-4 py-2">
        {/* Bigger Logo left, only in header */}
        <Link href="/" className="flex-shrink-0 block py-1" style={{ maxWidth: 1000 }}>
          <Image
            src="/pixelpilotlogo.png"
            alt="PixelPilot logo"
            width={873}
            height={174}
            priority
            className="w-full h-auto max-h-20 md:max-h-24 object-contain" // was max-h-12/14/16
          />
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 lg:gap-3">
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === href : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={
                  `px-4 py-2 rounded-lg font-semibold transition-all duration-200
                  flex items-center relative
                  text-orange-400
                  hover:scale-110 hover:bg-gradient-to-br hover:from-orange-400 hover:to-yellow-400 hover:text-white 
                  hover:shadow-lg
                  focus-visible:outline-none
                  ` +
                  (isActive
                    ? " bg-gradient-to-br from-orange-500 to-yellow-400 text-white shadow-xl after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-2.5 after:h-2.5 after:bg-orange-600 after:rounded-full"
                    : "")
                }
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
        </div>
        {/* Mobile: Hamburger */}
        <button
          aria-label="Open menu"
          className="md:hidden ml-auto p-2 text-orange-400 hover:text-white focus:outline-none"
          onClick={() => setMenuOpen(true)}
        >
          <HiOutlineMenu size={30} />
        </button>
        {/* Mobile Drawer/Nav */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur flex flex-col">
            <div className="flex items-center justify-end px-4 py-3 border-b border-orange-400">
              <button
                aria-label="Close menu"
                className="text-orange-400 p-1 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                <HiX size={36} />
              </button>
            </div>
            <nav className="flex flex-col text-lg gap-2 p-5">
              {navLinks.map(({ href, label }) => {
                const isActive =
                  href === "/" ? pathname === href : pathname.startsWith(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`px-4 py-3 rounded-lg font-semibold transition-all duration-200 text-orange-400
                      hover:scale-105 hover:bg-orange-500/80 hover:text-white
                      ` +
                      (isActive
                        ? " bg-orange-600/90 text-white shadow"
                        : "")
                    }
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
}