"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MdOutlineMenuOpen } from "react-icons/md";
import Image from "next/image";

const sections = ["home", "about", "skills", "projects"];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const navLinkClass = (id: string) =>
    `text-md transition-colors ${
      activeSection === id
        ? "text-[#7f45ee] underline font-semibold"
        : "text-white custom-underline-hide hover:text-[#7f45ee]"
    }`;

  return (
    <header className="fixed top-8 left-0 right-0 z-50 w-full ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-t-1 border-white/80  rounded-full px-6 py-3   bg-[#1a1a1a]/90 shadow-lg backdrop-blur-sm transition-all duration-300">
          <Link href="#home">
            <div className="text-xl font-bold text-white cursor-pointer hover:text-[#7f45ee] transition-colors duration-300">
              Portfolio
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {sections.map((id) => (
              <Link key={id} href={`#${id}`} className={navLinkClass(id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <button className="relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] font-semibold text-md pl-5 pr-3 text-white shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:ring-offset-2 focus:ring-offset-gray-900">
              <a href="#contact">Contact Me</a>
              <span className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#6D28D9]">
                <Image src="/arrow.png" height={17} width={17} alt="rightarrow" />
              </span>
            </button>
          </div>

          <button onClick={toggleMenu} className="md:hidden text-white">
            <MdOutlineMenuOpen fontSize={24} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute right-4 top-[70px] z-40 w-[calc(100%-2rem)] rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg px-6 py-4 space-y-4 text-white transition-all animate-fade-in-down">
          {sections.map((id) => (
            <Link
              key={id}
              className={`block font-medium ${
                activeSection === id
                  ? "text-[#7f45ee]"
                  : "text-[#ffffff] hover:text-[#7f45ee]"
              }`}
              href={`#${id}`}
              onClick={toggleMenu}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          ))}
          <Link
            className="block font-medium hover:text-[#7f45ee]"
            href="#contact"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
