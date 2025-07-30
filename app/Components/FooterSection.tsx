"use client"
import Link from "next/link"
import { useState } from "react"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"
import { motion } from "framer-motion"

export default function FooterSection() {

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
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

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      href: "https://github.com/Anurag2k743",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      href: "https://www.linkedin.com/in/anurag-vashisht-39981836b",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      href: "https://instagram.com/anuragvashisht",
      label: "Instagram",
    },
  ]

  return (
    <footer className="text-white relative bg-[#1a1a1a] pt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 md:mb-16">
          <div>
            <h3 className="text-xl font-bold mb-2">Anurag Vashisht</h3>
            <p className="text-sm text-gray-300 mb-4 pr-10
            ">
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
            <h3 className="text-lg font-bold mb-4">SOCIAL MEDIA</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-300 hover:text-[#7f45ee] transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 border-t border-gray-800">
        <div className="container">
          <div className="flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400 gap-4 text-center md:text-left">
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
