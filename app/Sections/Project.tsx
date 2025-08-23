"use client"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { FreeMode, Pagination, Navigation } from "swiper/modules"

import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"

const projects = [
   {
  "title": "Arise UI - Business Growth Landing Page",
  "description": "A sleek and responsive website built with Next.js and Tailwind CSS, designed to elevate brands and drive real business growth.",
  "image": "/arise.png",
  "technologies": ["Next js", "Tailwind CSS"],
  "liveUrl": "https://arise-flame.vercel.app/",
  "githubUrl": "https://github.com/Anurag2k743/arise"
}
,
  {
    title: "Weather App",
    description: "A sleek weather app showing live data and 7-day forecasts using Next.js and Tailwind CSS.",
    image: "/weatherapp.png",
    technologies: ["Next.js", "Tailwind CSS"],
    liveUrl: "https://weatherapp-tau-fawn.vercel.app/",
    githubUrl: "https://github.com/Anurag2k743/weatherapp",
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

export default function Projects() {
  return (
    <section id="projects" className="pt-16 md:pt-20 scroll-mt-20">
      <div className="container">
        <div className="text-center md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Featured <span className="text-[#7f45ee]">Projects</span>
          </h2>
          <p className=" max-w-2xl mx-auto text-lg mb-8  text-[#E6E5E5]/80">
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
          navigation={true}
          loop={false}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper pb-10"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#1a1a1a] rounded-lg shadow-lg p-4 h-full flex flex-col justify-between">
                {/* ✅ FIXED: Consistent image container */}
                <div className="w-full h-[200px] mb-4 relative rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <h3 className="text-white text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm mb-3   text-[#E6E5E5]/80">{project.description}</p>
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
                    className="text-[#ffffff] flex items-center gap-1"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white flex items-center gap-1"
                  >
                    <Github size={16} /> GitHub
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{`
  .swiper-button-prev,
  .swiper-button-next {
    color: #7f45ee;
    top: 50%;
    transform: translateY(-50%);
    width: 25px;
    height: 60px;
    font-size: 21px;
    background-color: rgba(127, 69, 238, 0.1);
    border-radius: 5px; /* Square background */
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 18px;
    font-weight: bold;
  }

  .swiper-button-prev {
    left: 5px;
  }

  .swiper-button-next {
    right: 5px;
  }

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
      </div>
    </section>
  )
}
