import { Instagram, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // use this for the WhatsApp logo

export default function AboutUsSection() {
  return (
    <div className="pt-16">
      <div className="container mx-auto px-4">
        <section className="relative py-16 sm:py-20 px-4 sm:px-8 lg:px-16 overflow-hidden bg-black text-white">

          {/* Corner Borders */}
          <div className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 border-t-2 border-l-2 border-[#7f45ee]"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 border-b-2 border-r-2 border-[#7f45ee]"></div>

          {/* Content */}
          <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-start gap-6">
            <div className="inline-block px-4 py-1 rounded-full bg-[#1a1a1a] text-sm sm:text-base">
              About Me
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Know Me <span className="text-[#7f45ee]">Better</span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg mb-4">
              As a frontend developer, I specialize in creating responsive and interactive web applications...
            </p>
            {/* rest of paragraphs unchanged */}
          </div>

          {/* Social Buttons */}
          <div className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 flex-col gap-4 z-20">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <button className="rounded-full border-white text-white hover:bg-white hover:text-black bg-transparent p-2">
                <FaWhatsapp className="h-6 w-6" />
              </button>
            </a>
            <a href="mailto:your@email.com">
              <button className="rounded-full border-white text-white hover:bg-white hover:text-black bg-transparent p-2">
                <Send className="h-6 w-6" />
              </button>
            </a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <button className="rounded-full border-white text-white hover:bg-white hover:text-black bg-transparent p-2">
                <Instagram className="h-6 w-6" />
              </button>
            </a>
          </div>

        </section>
      </div>
    </div>
  );
}
