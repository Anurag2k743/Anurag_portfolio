"use client"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { FreeMode, Pagination } from "swiper/modules"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"

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
    title: "Another Netflix Clone",
    description:
      "A similar Netflix clone project to demonstrate UI duplication and deployment.",
    image: "/netflix.png",
    technologies: ["React", "Tailwind CSS"],
    liveUrl: "https://netflix-pied-delta-80.vercel.app",
    githubUrl: "https://github.com/Anurag2k743/Netflix",
  },
  {
    title: "Another Netflix Clone",
    description:
      "A similar Netflix clone project to demonstrate UI duplication and deployment.",
    image: "/netflix.png",
    technologies: ["React", "Tailwind CSS"],
    liveUrl: "https://netflix-pied-delta-80.vercel.app",
    githubUrl: "https://github.com/Anurag2k743/Netflix",
  },
  {
    title: "Another Netflix Clone",
    description:
      "A similar Netflix clone project to demonstrate UI duplication and deployment.",
    image: "/netflix.png",
    technologies: ["React", "Tailwind CSS"],
    liveUrl: "https://netflix-pied-delta-80.vercel.app",
    githubUrl: "https://github.com/Anurag2k743/Netflix",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="pt-10 md:pt-16 scroll-mt-20 bg-black">
      <div className="container">
        <div className="text-center md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Featured <span className="text-[#7f45ee]">Projects</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto text-lg mb-8">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="mySwiper pb-10" // padding bottom for pagination
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#1a1a1a] rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300 h-full flex flex-col justify-between">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg mb-4 object-cover w-full"
                  width={400}
                  height={250}
                />
                <h3 className="text-white text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white text-black text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7f45ee] flex items-center gap-1 hover:scale-105 transition-transform"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white flex items-center gap-1 hover:scale-105 transition-transform"
                  >
                    <Github size={16} /> GitHub
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination styling */}
      <style jsx global>{`
        .swiper-pagination {
          text-align: center;
          margin-top: 20px;
          position: relative !important;
          bottom: 0 !important;
        }
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
          margin: 0 6px;
        }
        .swiper-pagination-bullet-active {
          background: #7f45ee;
          opacity: 1;
        }
      `}</style>
    </section>
  )
}
