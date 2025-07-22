import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className=" text-white py-16 border-t border-gray-800 ">
      <div className="container">
        <div className="mb-8 md:mb-0 flex flex-col items-center  text-center">
          <h3 className="text-6xl font-semibold mb-7 ">Anurag Vashisht</h3>
          <p className="text-white text-lg ">
            Frontend Developer passionate about creating amazing web experiences
          </p>
        </div>

       <div className="flex flex-col items-center  gap-6">
          <nav className="space-x-6  py-6">
            <Link href="#home" className="text-white hover:text-orange-500 hover:underline transition duration-300">
              Home
            </Link>
            <Link href="#about" className="text-white hover:text-orange-500 transition duration-300 hover:underline">
              About
            </Link>
            <Link href="#projects" className="text-white hover:text-orange-500 transition duration-300 hover:underline">
              Projects
            </Link>
            <Link href="#contact" className="text-white hover:text-orange-500 transition duration-300 hover:underline">
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
