"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { MdOutlineMenuOpen } from "react-icons/md";

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
    `text-md transition-colors ${activeSection === id
      ? "text-[#7f45ee] underline font-semibold text-md"
      : "text-white underline-hide text-md hover:text-[#7f45ee]"
    }`;

  return (
    <header className="fixed top-8 left-0 right-0 z-50 w-full ">
      <div className="container">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-[#1a1a1a]/70  px-6 py-3 backdrop-blur-md">
          <div className="text-xl font-bold text-white">Anurag Vashisht</div>

          <nav className="hidden md:flex items-center space-x-8">
            {sections.map((id) => (
              <Link key={id} href={`#${id}`} className={navLinkClass(id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link
              href="#contact"
              className="flex items-center gap-2 rounded-full px-5 py-3 text-white bg-[#1a1a1a] hover:bg-[#7f45ee] transition-colors">
              <span className="text-md">Contact Me</span>
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
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
              className={`block font-medium ${activeSection === id
                ? "text-[#7f45ee]"
                : "text-[#7f45ee] hover:text-[#7f45ee]"
                }`}
              href={`#${id}`}
              onClick={toggleMenu}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          ))}
          <Link
            className="block font-medium hover:text-[#7f45ee]"
            href="#contact"
            onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
