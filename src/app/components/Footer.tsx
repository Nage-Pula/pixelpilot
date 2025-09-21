import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black/80 text-white mt-16 border-t border-orange-500">
      <div className="container mx-auto py-10 px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Logo/Brand */}
        <div className="flex items-center space-x-3">
          <img
            src="/pixelpilotlogo.png"
            alt="PIXELPILOT"
            className="h-10 w-auto object-contain"
            style={{ filter: "brightness(2)" }}
          />
          <span className="hidden md:inline text-xl font-bold text-orange-500 tracking-widest uppercase">PIXELPILOT </span>
        </div>
        {/* Center: Social & tagline */}
        <div className="flex flex-col md:items-center">
          <div className="flex gap-4 mb-2 justify-center">
            {/* Substitute your real URLs below */}
            <a href="https://wa.me/+918977195143" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-orange-400"><FaWhatsapp size={22} /></a>
            <a href="https://www.instagram.com/pixelpilot_digitalsolutions/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-orange-400"><FaInstagram size={22} /></a>
            <a href="https://www.facebook.com/share/1BH6zgWTzP/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-orange-400"><FaFacebook size={22} /></a>
            
          </div>
          <div className="text-gray-400 text-sm">Your trusted digital growth co-pilot</div>
        </div>
        {/* Right: Copyright/Links */}
        <div className="text-gray-400 text-xs text-center md:text-right">
          &copy; {new Date().getFullYear()} PIXELPILOT. All rights reserved.
          <div>
            <a href="/privacy" className="hover:underline hover:text-orange-400 ml-2">Privacy Policy</a>
            <a href="/terms" className="hover:underline hover:text-orange-400 ml-2">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}