"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { MdOutlineMenuOpen } from "react-icons/md"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  return (
    <header className="sticky top-4 z-50 mx-auto w-[calc(100%-2rem)] max-w-8xl md:px-6">
      <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-lg">
        <div className="text-xl font-bold text-white">
          Anurag Vashisht
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link className="text-m font-semibold text-white hover:text-blue-600 transition-colors" href="#home">Home</Link>
          <Link className="text-m font-semibold text-white hover:text-blue-600 transition-colors" href="#about">About</Link>
          <Link className="text-m font-semibold text-white hover:text-blue-600 transition-colors" href="#skills">Skills</Link>
          <Link className="text-m font-semibold text-white hover:text-blue-600 transition-colors" href="#projects">Projects</Link>
        </nav>

        <button className="hidden md:flex items-center gap-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors px-3 py-1.5">
          Contact Me
          <ArrowRightIcon className="h-4 w-4" />
        </button>

        <button onClick={toggleMenu} className="md:hidden text-white">
          <MdOutlineMenuOpen fontSize={24} />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute right-6 top-[70px] z-40 w-[calc(100%-3rem)] rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg px-6 py-4 space-y-4 text-white animate-fade-in-down transition-all">
          <Link className="block font-medium hover:text-blue-500" href="#home" onClick={toggleMenu}>Home</Link>
          <Link className="block font-medium hover:text-blue-500" href="#about" onClick={toggleMenu}>About</Link>
          <Link className="block font-medium hover:text-blue-500" href="#skills" onClick={toggleMenu}>Skills</Link>
          <Link className="block font-medium hover:text-blue-500" href="#projects" onClick={toggleMenu}>Projects</Link>
          <Link className="block font-medium hover:text-blue-500" href="#contact" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </header>
  )
}
