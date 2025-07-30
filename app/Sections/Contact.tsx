"use client"

import React, { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState<null | { type: "success" | "error"; message: string }>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "")
      setFormData({ ...formData, [name]: numericValue.slice(0, 10) })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errors: { [key: string]: string } = {}

    if (!formData.name.trim()) errors.name = "Name is required"
    if (!formData.email.trim()) errors.email = "Email is required"
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required"
    } else if (formData.phone.length !== 10) {
      errors.phone = "Phone number must be exactly 10 digits"
    }
    if (!formData.message.trim()) errors.message = "Message is required"

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    setFormErrors({})
    setIsSubmitting(true)
    setStatusMessage(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setStatusMessage({ type: "success", message: "Message sent successfully!" })
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        setStatusMessage({ type: "error", message: data.error || "Failed to send message. Try again." })
      }
    } catch (error) {
      console.error("Form error:", error)
      setStatusMessage({ type: "error", message: "An unexpected error occurred." })
    }

    setIsSubmitting(false)

    setTimeout(() => {
      setStatusMessage(null)
    }, 5000)
  }

  return (
    <section id="contact" className="py-10 md:py-20 scroll-mt-20">
      <div className="container">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Get <span className="text-[#7f45ee] font-bold">In Touch</span>
          </h2>
          <p className="text-[#E6E5E5]/80 max-w-2xl mx-auto text-lg">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT PANEL */}
          <div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Let's Connect</h3>
            <p className="text-[#E6E5E5]/80 mb-8 text-lg">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:anuragvashisht743@gmail.com"
                className="flex items-center space-x-4 group rounded-lg transition-all duration-300 hover-lift cursor-pointer"
              >
                <Mail className="w-9 h-9 group-hover:scale-110 transition-transform duration-300 rounded p-2 bg-white/10 text-purple-500 hover:text-purple-600" />
                <span className="text-[#E6E5E5]/80 group-hover:text-purple-500 transition-colors duration-300">
                  anuragvashisht743@gmail.com
                </span>
              </a>

              <a
                href="tel:+917876212773"
                className="flex items-center space-x-4 group rounded-lg transition-all duration-300 hover-lift cursor-pointer"
              >
                <Phone className="w-9 h-9 group-hover:scale-110 transition-transform duration-300 rounded p-2 bg-white/10 text-purple-500 hover:text-purple-600" />
                <span className="text-[#E6E5E5]/80 group-hover:text-[#7f45ee] transition-colors duration-300">
                  +91 7876212773
                </span>
              </a>

              <a
                href="https://maps.app.goo.gl/Mae2RG9jjGoM8U7V9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 group rounded-lg transition-all duration-300 hover-lift cursor-pointer"
              >
                <MapPin className="w-9 h-9 group-hover:scale-110 transition-transform duration-300 rounded p-2 bg-white/10 text-[#7f45ee]" />
                <span className="text-[#E6E5E5]/80 group-hover:text-[#7f45ee] transition-colors duration-300">
                  Dharamshala, Himachal Pradesh, India
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="bg-gradient-to-br from-[#111215] to-[#1a1a1a] p-8 rounded-lg hover-lift transition-all duration-500">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-white/10 rounded-lg"
                  placeholder="Your Name"
                />
                {formErrors.name && <p className="text-red-400 text-sm mt-1">{formErrors.name}</p>}
              </div>

              {/* Email */}
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-white/10 rounded-lg"
                  placeholder="your.email@example.com"
                />
                {formErrors.email && <p className="text-red-400 text-sm mt-1">{formErrors.email}</p>}
              </div>

              {/* Phone */}
              <div className="group">
                <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  inputMode="numeric"
                  maxLength={10}
                  className="w-full px-4 py-3 border border-white/10 rounded-lg"
                  placeholder="Enter your 10-digit phone number"
                />
                {formErrors.phone && <p className="text-red-400 text-sm mt-1">{formErrors.phone}</p>}
              </div>

              {/* Message */}
              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-white/10 rounded-lg resize-none"
                  placeholder="Your message..."
                />
                {formErrors.message && <p className="text-red-400 text-sm mt-1">{formErrors.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#7f45ee] text-white px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 button-glow hover-lift group"
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

              {/* Global Status Message */}
              {statusMessage && (
                <div
                  className={`text-center text-sm font-medium mt-4 px-4 py-2 rounded-lg transition-all duration-300 ${
                    statusMessage.type === "success"
                      ? "bg-green-500/10 text-green-400 border border-green-500/30"
                      : "bg-red-500/10 text-red-400 border border-red-500/30"
                  }`}
                >
                  {statusMessage.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
