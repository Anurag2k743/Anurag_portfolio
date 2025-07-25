"use client"

import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { motion, easeInOut } from "framer-motion"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeInOut,
    },
  },
}

export default function Projects() {
  const projects = [
    {
      title: "Netflix Clone",
      description:
        "A responsive Netflix-inspired web application built with React and Tailwind CSS, featuring a modern UI and smooth user interactions.",
      image: "/netflix.png",
      technologies: ["React", "Tailwind CSS"],
      liveUrl: "https://netflix-pied-delta-80.vercel.app",
      githubUrl: "https://github.com/Anurag2k743/Netflix",
    },
    {
      title: "Vision UI",
      description:
        "A sleek and elegant user interface design system built with React and Tailwind CSS, tailored for dashboards and admin panels.",
      image: "/vision.png",
      technologies: ["React", "Tailwind CSS"],
      liveUrl: "https://vision-kappa-ten.vercel.app/",
      githubUrl: "https://github.com/Anurag2k743/Vision",
    },
    {
      title: "Netflix Clone",
      description:
        "A responsive Netflix-inspired web application built with React and Tailwind CSS, featuring a modern UI and smooth user interactions.",
      image: "/netflix.png",
      technologies: ["React", "Tailwind CSS"],
      liveUrl: "https://netflix-pied-delta-80.vercel.app",
      githubUrl: "https://github.com/Anurag2k743/Netflix",
    },
  ]

  return (
    <section id="projects" className="pt-10 md:pt-16  scroll-mt-20">
      <div className="container">
        <div className="text-center md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ">
            Featured <span className="text-[#7f45ee]">Projects</span> 
          </h2>
          <p className="text-white max-w-2xl mx-auto text-lg">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-[#1a1a1a] rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full  object-cover transition-transform duration-500 hover:scale-105 mb-4 rounded-lg"
                width={400}
                height={300}
              />
              <h3 className="text-xl font-black mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-white mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-white text-black text-sm rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.liveUrl}
                  className="flex items-center gap-2 text-[#7f45ee]  transition-all duration-300 hover:scale-105 group/link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink
                    size={16}
                    className="group-hover/link:rotate-45 transition-transform duration-300"
                  />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  className="flex items-center gap-2 text-white transition-all duration-300 hover:scale-105 group/link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github
                    size={16}
                    className="group-hover/link:rotate-12 transition-transform duration-300"
                  />
                  Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
