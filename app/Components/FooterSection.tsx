"use client"
import Link from "next/link"
import { Send } from "lucide-react"
import { useState } from "react"

export default function FooterSection() {
  const [email, setEmail] = useState("")

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Contact", href: "#" },
  ]

  const services = [
    "Web Development",
    "UI/UX Design",
    "Responsive Design",
    "Performance Optimization",
    "React Development",
  ]

  const contactInfo = {
    location: "Dharmshal Himachal Pradesh, India",
    phone: "+91 7876212773",
    email: "vashishtanurag743@gmail.com",
  }


  return (
    <footer className="text-white relative bg-[#1a1a1a] pt-16">

      <div className="container mx-auto px-4 md:px-6">


        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 md:mb-16">
          <div>
            <h3 className="text-xl font-bold mb-2">Anurag Vashisht</h3>
            <p className="text-sm text-gray-300 mb-4">
              Frontend Developer passionate about creating amazing web experiences
            </p>

          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">OUR SERVICES</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {services.map((service, idx) => (
                <li key={idx}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">MY CONTACT</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>{contactInfo.location}</li>
              <li>{contactInfo.phone}</li>
              <li>{contactInfo.email}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">NEWSLETTER</h3>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <input
                type="email"
                placeholder="Enter mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex h-10 w-full rounded-md border-b border-gray-600 bg-transparent px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-0 focus:border-[#7f45ee]"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center text-sm font-medium text-white hover:text-[#7f45ee] border-gray-600 border px-3 py-2 rounded-full transition-all duration-300"
                aria-label="Subscribe"
              >
                SUBSCRIBE <Send className="ml-5 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 border-t border-gray-800">
        <div className="container">
          <div className="flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400 gap-4 text-center md:text-left">

            {/* Navigation Links */}
            <ul className="flex flex-wrap justify-center md:justify-start space-x-2">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-[#7f45ee]">
                    {link.name} /
                  </Link>
                </li>
              ))}
            </ul>

            <p className="max-w-xl">
              © {new Date().getFullYear()} Anurag Vashisht. All rights reserved.
            </p>

          </div>
        </div>

      </div>
    </footer>
  )
}
