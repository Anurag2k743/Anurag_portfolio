import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pb-10 border-t border-gray-800 pt-10">
      <div className="container mx-auto px-4 text-center md:text-left md:flex md:justify-between md:items-start">
        <div className="mb-8 md:mb-0">
          <div className="text-2xl font-bold mb-2 gradient-text">Anurag Vashisht</div>
          <p className="text-gray-400 max-w-md mx-auto md:mx-0">
            Frontend Developer passionate about creating amazing web experiences
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          <nav className="flex flex-col gap-2 text-sm md:text-base">
            <Link href="#home" className="text-gray-400 hover:text-orange-500 hover:underline transition duration-300">
              Home
            </Link>
            <Link href="#about" className="text-gray-400 hover:text-orange-500 transition duration-300 hover:underline">
              About
            </Link>
            <Link href="#projects" className="text-gray-400 hover:text-orange-500 transition duration-300 hover:underline">
              Projects
            </Link>
            <Link href="#contact" className="text-gray-400 hover:text-orange-500 transition duration-300 hover:underline">
              Contact
            </Link>
          </nav>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Anurag2k743" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github
                size={24}
                className="w-9 h-9 transition-transform duration-300 rounded p-2 bg-white/10 text-orange-500 hover:scale-110 hover:text-orange-600"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/anurag-vashisht/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin
                size={24}
                className="w-9 h-9 transition-transform duration-300 rounded p-2 bg-white/10 text-orange-500 hover:scale-110 hover:text-orange-600"
              />
            </a>
            <a href="mailto:vashishtanurag@gmail.com" aria-label="Email">
              <Mail
                size={24}
                className="w-9 h-9 transition-transform duration-300 rounded p-2 bg-white/10 text-orange-500 hover:scale-110 hover:text-orange-600"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
