'use client';
import { useEffect, useState } from 'react';
// You may use any icons from react-icons for the avatar
import { FaUserCircle, FaWhatsapp, FaPaperPlane, FaRegSmile, FaInstagram, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';



function getISTTime() {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  // IST is UTC+5:30 => 19800000 ms
  return new Date(utc + 19800000).toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
}

const WHATSAPP_NUMBER = '918977195143'; // <--- your WhatsApp number here (no '+', just countrycode+number)
export default function ContactPage() {
  const [form, setForm] = useState({ name: '', number: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [err, setErr] = useState('');
  const [ist, setIST] = useState('');

  // Live IST time
  useEffect(() => {
    const interval = setInterval(() => setIST(getISTTime()), 1000);
    return () => clearInterval(interval);
  }, []);
  
  // Form validation
  function validateNumber(num: string) {
    // Simple Indian mobile validation (10 digits)
    return /^[6-9]\d{9}$/.test(num);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErr('');
    setStatus('idle');
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.number || !form.message) {
      setErr('Please fill all the details!');
      return;
    }
    if (!validateNumber(form.number)) {
      setErr('Enter a valid 10-digit WhatsApp number (India).');
      return;
    }
    // Compose WhatsApp message
          const waText =
         `Hello PIXELPILOT!
          I'm ${form.name} 
          Interested in your digital growth services.

          My WhatsApp number: ${form.number} 

          My requirements:
          ${form.message}

          Thank you so much, PIXELPILOT team! 
          Looking forward to flying high together! 
          - ${form.name}

          visit you at : https://pixelpilot-digitalsolutions.vercel.app/
          `;
          const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;
          window.open(waUrl, "_blank");
          // Optionally still show a thank you or clear after
          setStatus('success');
          setTimeout(() => {
            setForm({ name: '', number: '', message: '' });
            setStatus('idle');
          }, 1500);
  }

  // For fun, a random "enjoy our services" or quote on each render
  const quotes = [
    "Your digital journey begins with PIXELPILOT!",
    "Unleash your brand’s potential.",
    "Trust. Transparency. Transformation.",
    "One small form for you, one giant leap for your business 🚀",
    "Dream. Design. Do – with PIXELPILOT.",
    "Customer success is our mission.",
    "Enjoy our world-class growth services!",
    "Fill & fly—let’s soar together!"
  ];
  const quote = quotes[Math.floor(Date.now() / 10000) % quotes.length];

  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 pt-10 pb-16 bg-gradient-to-br from-black via-zinc-900 to-black relative overflow-hidden">
      {/* Background floating emoji/image (optional) */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-300/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-2xl w-full mx-auto bg-zinc-900/80 rounded-2xl shadow-lg p-6 md:p-10 border border-orange-500/20 backdrop-blur-md z-10">
        {/* Welcome, Time, Message! */}
        <div className="text-center flex flex-col items-center">
          <FaPaperPlane className="text-orange-400 text-4xl mb-2 animate-bounce" />
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent text-center mb-3">
            Welcome to PIXELPILOT!
          </h1>
          <div className="mb-2">
            <span className="text-sm px-3 py-1 bg-orange-500/30 rounded-full text-orange-200 shadow transition">
              Current IST Time: <b>{ist}</b>
            </span>
          </div>
          <div className="mb-4 text-orange-200 font-semibold text-md md:text-lg animate-pulse">{quote}</div>
          <div className="mb-2 text-orange-300 font-bold flex items-center gap-2 justify-center">
            <FaWhatsapp className="inline mr-1" /> Ping your number below &nbsp;
            <span className="font-normal">We&apos;ll WhatsApp you 📞</span>
          </div>
          <p className="text-gray-300 mb-2">
            Just a few details and we&apos;ll personally connect for your free digital growth consult. Nothing is shared without your consent!
          </p>
        </div>
        {/* Form */}
        <form
          className={`mt-3 bg-gradient-to-br from-black/80 via-zinc-800/90 to-zinc-900 border border-orange-500/10 p-5 md:p-8 rounded-xl shadow-md space-y-6 
            ${status === "success" ? "ring-2 ring-green-400" : status === "error" ? "ring-2 ring-red-400" : ""}
            `}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          {/* Avatar User Icon instead of name input */}
          <div className="flex items-center gap-3">
            <FaUserCircle className="text-4xl text-orange-400" />
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="flex-1 p-3 rounded bg-zinc-800 text-white placeholder-gray-400 border border-zinc-700 focus:outline-orange-500"
              placeholder="Your Name"
              type="text"
              required
            />
          </div>
          {/* WhatsApp number input with icon */}
          <div className="flex items-center gap-3">
            <FaWhatsapp className="text-3xl text-green-400" />
            <input
              name="number"
              value={form.number}
              onChange={handleChange}
              className="flex-1 p-3 rounded bg-zinc-800 text-white placeholder-gray-400 border border-zinc-700 focus:outline-orange-500"
              placeholder="Your WhatsApp Number (10 digits)"
              type="tel"
              pattern="[6-9][0-9]{9}"
              required
            />
          </div>
          {/* Message textarea */}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded bg-zinc-800 text-white placeholder-gray-400 border border-zinc-700 focus:outline-orange-500"
            placeholder="How can PIXELPILOT help you achieve your goals?"
            rows={5}
            required
          />
          <button
            type="submit"
            className={`w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-bold text-lg flex items-center justify-center gap-2 
              shadow-lg transition-transform duration-200 hover:scale-105 
              ${status === "success" ? "bg-green-400 to-lime-400 text-black animate-pulse" : ""}
              `}
            disabled={status === 'success'}
          >
            Send via WhatsApp <FaWhatsapp className="ml-2" />
          </button>
          
          {/* Animated feedback */}
          {err && <div className="text-red-400 font-bold text-center animate-bounce">{err}</div>}
          {status === "success" && (
            <div className="flex flex-col items-center gap-2 text-green-400 text-lg font-bold animate-pulse">
              <span>Thank You!</span>
              <span>We ♥️ your trust. Our team at PIXELPILOT will WhatsApp you soon!</span>
              <span className="text-xs text-green-100">Enjoy our services and watch your brand soar 🚀</span>
            </div>
          )}
        </form>
        {/* Center: Social & tagline */}
                <div className="flex flex-col items-center mt-8">
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
                  <div className="uppercase text-yellow-500 font-bold my-2 text-center animate-bounce">
                    Connect With <span>
                      <Link href="/" className="
                        text-2xl sm:text-2xl md:text-2xl font-extrabold uppercase tracking-widest select-none
                        bg-gradient-to-tr from-orange-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent
                        drop-shadow-[0_2px_18px_rgba(255,149,0,0.51)]
                        transition-transform duration-200
                        hover:scale-104
                        cursor-pointer
                        outline-none
                        animate-bounce
                      ">
                        PIXELPILOT
                      </Link></span> From our <span className="font-bold text-xl uppercase tracking-wider flex items-center gap-1 select-none">
                      {/* "SO" WhatsApp */}
                      <a
                        href="https://wa.me/+918977195143"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="inline-block transition-transform hover:scale-110 cursor-pointer"
                        style={{ color: "#25D366" }} // WhatsApp green
                      >
                        SO
                      </a>
                      {/* "CI" Instagram gradient */}
                      <a
                        href="https://www.instagram.com/pixelpilot_digitalsolutions/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="inline-block transition-transform hover:scale-110 cursor-pointer
                          bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
                        style={{
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent"
                        }}
                      >
                        CI
                      </a>
                      {/* "AL" Facebook blue */}
                      <a
                        href="https://www.facebook.com/share/1BH6zgWTzP/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="inline-block transition-transform hover:scale-110 cursor-pointer"
                        style={{ color: "#1877F3" }} // Facebook blue
                      >
                        ALs
                      </a>
                    <span
                      className="
                        camelcase
                        text-lg
                        bg-gradient-to-r
                        from-red-500
                        via-yellow-400
                        via-green-400
                        via-blue-400
                        to-pink-500
                        bg-clip-text
                        text-transparent
                        inline-block
                        align-middle
                        drop-shadow
                        bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-blue-400 to-pink-500
                      "
                      style={{
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text" // fallback
                      }}
                    >
                      &amp; Enjoy Our Services!
                    </span>
                    </span>
                  </div>
                </div>
      </div>
    </section>
  );
}