import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        bg-black
        border-t-4 border-orange-500
        w-full
        shadow-inner
        transition-all duration-300
        group
        rounded-none
        sm:rounded-t-xl
        md:rounded-t-2xl
        lg:rounded-t-3xl
        hover:shadow-[0_6px_36px_8px_rgba(255,140,0,0.25)]
        hover:border-orange-400
      "
    >
      <div className="max-w-7xl mx-auto px-3 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Big, beautiful PIXELPILOT brand */}
        <div className="flex items-center">
          <Link href="/" className="
            text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-widest select-none
            bg-gradient-to-tr from-orange-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent
            drop-shadow-[0_2px_18px_rgba(255,149,0,0.51)]
            transition-transform duration-200
            hover:scale-104
            cursor-pointer
            outline-none
          ">
            PIXELPILOT
          </Link>
        </div>
        {/* Center: Social & tagline */}
        <div className="flex flex-col items-center">
          <div className="flex gap-7 mb-3 justify-center">
            {/* WhatsApp */}
            <a
              href="https://wa.me/+918977195143"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="
                rounded-full p-[10px] hover:scale-110 shadow transition-all
                bg-[#25d366]
              "
              style={{
                boxShadow: "0 1px 12px 2px #25d36660"
              }}
            >
              <FaWhatsapp size={48} className="text-white" />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/pixelpilot_digitalsolutions/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="
                rounded-full p-[10px] hover:scale-110 shadow transition-all
                bg-gradient-to-br from-yellow-400 via-pink-600 to-purple-700
              "
              style={{
                boxShadow: "0 1px 12px 2px #ec489960"
              }}
            >
              <FaInstagram size={48} className="text-white" />
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1BH6zgWTzP/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="
                rounded-full p-[10px] hover:scale-110 shadow transition-all
                bg-[#1877f3]
              "
              style={{
                boxShadow: "0 1px 12px 2px #1877f360"
              }}
            >
              <FaFacebook size={48} className="text-white" />
            </a>
          </div>
          <div className="text-gray-200 text-lg font-semibold my-2 text-center">
            Your trusted digital growth co-pilot
          </div>
        </div>
        {/* Right: Copyright/Links */}
        <div className="text-gray-400 text-xs text-center md:text-right">
          &copy; {new Date().getFullYear()} <Link
                    href="/"
                    className="
                      font-semibold tracking-wide text-orange-400
                      hover:underline focus:underline
                      transition-transform duration-200
                      hover:scale-110
                      cursor-pointer
                      outline-none
                    "
                  >
                    PIXELPILOT
                  </Link>. All rights reserved.
          <div>
            <Link href="/privacy" className="hover:underline hover:text-orange-400 ml-2">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline hover:text-orange-400 ml-2">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}