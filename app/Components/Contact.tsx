"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-10 md:py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-white max-w-2xl mx-auto text-lg">
            I&apos;m always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT PANEL */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Let&apos;s Connect</h3>
            <p className="text-white mb-8 text-lg">
              Feel free to reach out if you&apos;re looking for a developer, have a question, or just want to connect.
            </p>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:anuragvashisht743@gmail.com"
                className="flex items-center space-x-4 group rounded-lg transition-all duration-300 hover-lift cursor-pointer"
              >
                <Mail className="w-9 h-9 group-hover:scale-110 transition-transform duration-300 rounded p-2 bg-white/10 text-purple-500 hover:text-purple-600" />
                <span className="text-white group-hover:text-purple-500 transition-colors duration-300">
                  anuragvashisht743@gmail.com
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+917876212773"
                className="flex items-center space-x-4 group rounded-lg transition-all duration-300 hover-lift cursor-pointer"
              >
                <Phone className="w-9 h-9 group-hover:scale-110 transition-transform duration-300 rounded p-2 bg-white/10 text-purple-500 hover:text-purple-600" />
                <span className="text-white group-hover:text-[#7f45ee] transition-colors duration-300">
                  +91 7876212773
                </span>
              </a>

              {/* Location */}
              <a
                href="https://maps.app.goo.gl/Mae2RG9jjGoM8U7V9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 group rounded-lg transition-all duration-300 hover-lift cursor-pointer">
                <MapPin className="w-9 h-9 group-hover:scale-110 transition-transform duration-300 rounded p-2 bg-white/10 text-[#7f45ee]" />
                <span className="text-white group-hover:text-[#7f45ee] transition-colors duration-300">
                  Dharmshal Himachal Pradesh, India
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="bg-gradient-to-br from-[#111215] to-[#1a1a1a] p-8 rounded-lg hover-lift transition-all duration-500">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-white/10  rounded-lg"
                  placeholder="Your Name"
                />
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-white/10 rounded-lg "
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-white/10 rounded-lg resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#7f45ee] text-white px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 button-glow hover-lift group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
