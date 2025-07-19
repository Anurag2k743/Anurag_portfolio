"use client";

import { useState } from "react";
import Link from "next/link";

import { ArrowRightIcon } from "lucide-react";
import { MdOutlineMenuOpen } from "react-icons/md";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 w-full px-4 md:px-6">
        <div className="max-w-8xl mx-auto flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-lg">
          <div className="text-xl font-bold text-white">Anurag Vashisht</div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-m font-semibold text-white hover:text-blue-600 transition-colors">Home</Link>
            <Link href="#about" className="text-m font-semibold text-white hover:text-blue-600 transition-colors">About</Link>
            <Link href="#skills" className="text-m font-semibold text-white hover:text-blue-600 transition-colors">Skills</Link>
            <Link href="#projects" className="text-m font-semibold text-white hover:text-blue-600 transition-colors">Projects</Link>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link
              href="#contact"
              className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-white hover:bg-white/20 transition-colors"
            >
              <span className="text-m font-semibold">Contact Me</span>
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <button onClick={toggleMenu} className="md:hidden text-white">
            <MdOutlineMenuOpen fontSize={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute right-4 top-[70px] z-40 w-[calc(100%-2rem)] rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg px-6 py-4 space-y-4 text-white transition-all animate-fade-in-down">
            <Link className="block font-medium hover:text-blue-500" href="#home" onClick={toggleMenu}>Home</Link>
            <Link className="block font-medium hover:text-blue-500" href="#about" onClick={toggleMenu}>About</Link>
            <Link className="block font-medium hover:text-blue-500" href="#skills" onClick={toggleMenu}>Skills</Link>
            <Link className="block font-medium hover:text-blue-500" href="#projects" onClick={toggleMenu}>Projects</Link>
            <Link className="block font-medium hover:text-blue-500" href="#contact" onClick={toggleMenu}>Contact</Link>
          </div>
        )}
      </header>
    </>
  );
}
