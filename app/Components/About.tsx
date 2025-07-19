"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Code, Palette, Zap } from "lucide-react"

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: false, // animate every time it's in view
    threshold: 0.2, // how much of the section should be visible before animation starts
  })

  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code following best practices.",
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-500" />,
      title: "UI/UX Focus",
      description: "Creating beautiful and intuitive user interfaces with attention to detail.",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and excellent user experience.",
    },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="pt-20 border-t border-gray-800 text-white  overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I&apos;m a passionate frontend developer with expertise in modern web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left section: text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="pr-0 lg:pr-20"
          >
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <p className="text-gray-300 mb-4">
              As a frontend developer, I specialize in creating responsive and interactive web applications. My journey
              began with HTML and CSS, and I&apos;ve evolved to master modern frameworks like React.js and Next.js.
            </p>
            <p className="text-gray-300 mb-4">
              I&apos;m passionate about writing clean, efficient code and staying up-to-date with the latest web
              development trends and best practices.
            </p>
            <p className="text-gray-300">
              When I&apos;m not coding, I love exploring new technologies, contributing to open-source projects, and
              sharing knowledge with the developer community.
            </p>
          </motion.div>

          {/* Right section: highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-[#1d2229] p-6 rounded-lg hover-lift group cursor-pointer hover:shadow-[0_4px_20px_rgba(59,130,246,0.2)] transition-shadow duration-300"
              >
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">{item.title}</h4>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
