"use client"

import { ExternalLink, Github } from "lucide-react"

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
    ]

    return (
        <section id="projects" className="pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-white max-w-2xl mx-auto">
                        Here are some of my recent projects that showcase my skills and experience
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-[#1d2229] rounded-lg overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image || "/placeholder.svg?height=300&width=400"}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-white mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full hover:bg-blue-200 transition-colors duration-300 cursor-default"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex space-x-4">
                                    <a
                                        href={project.liveUrl}
                                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-105 group/link"
                                        target="_blank"
                                    >
                                        <ExternalLink size={16} className="group-hover/link:rotate-45 transition-transform duration-300" />
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        className="flex items-center gap-2 text-white hover:text-gray-800 transition-all duration-300 hover:scale-105 group/link"
                                        target="_blank"
                                    >
                                        <Github size={16} className="group-hover/link:rotate-12 transition-transform duration-300" />
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
