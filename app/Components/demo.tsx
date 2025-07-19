"use client"

import React, { useMemo } from "react"
import { motion } from "framer-motion"

export default function CodeFlowAnimation() {
  const codeSnippets = useMemo(() => [
    {
      lang: "html",
      code: `<div class=\"container\">\n  <h1>Hello, v0!</h1>\n</div>`,
      color: "text-orange-400",
      top: `${Math.random() * 70 + 5}%`,
      left: `${Math.random() * 70 + 5}%`,
      width: `${Math.random() * 20 + 25}%`,
    },
    {
      lang: "css",
      code: `/* Tailwind CSS */\n.btn {\n  @apply px-4 py-2 rounded-md;\n}\n.text-primary {\n  @apply text-blue-500;\n}`,
      color: "text-blue-400",
      top: `${Math.random() * 70 + 5}%`,
      left: `${Math.random() * 70 + 5}%`,
      width: `${Math.random() * 20 + 25}%`,
    },
    {
      lang: "js",
      code: `import React from 'react';\n\nfunction App() {\n  const [count, setCount] = React.useState(0);\n  return (\n    <button onClick={() => setCount(count + 1)}>\n      Count: {count}\n    </button>\n  );\n}`,
      color: "text-yellow-400",
      top: `${Math.random() * 70 + 5}%`,
      left: `${Math.random() * 70 + 5}%`,
      width: `${Math.random() * 20 + 25}%`,
    },
  ], [])

  const nodes = useMemo(() => Array.from({ length: 8 }).map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
  })), [])

  const floatingCodeBlockVariants = {
    animate: (i: number) => ({
      y: ["0%", "15%", "0%"],
      x: ["0%", "10%", "-10%", "0%"],
      opacity: [0, 0.9, 0.9, 0],
      scale: [0.9, 1.05, 1.05, 0.9],
      rotate: [0, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, 0],
      transition: {
        duration: Math.random() * 10 + 7,
        ease: "easeInOut" as const,
        repeat: Number.POSITIVE_INFINITY,
        delay: Math.random() * 8,
      },
    }),
  }

  const nodePulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 2,
        ease: "easeInOut" as const,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 0.4,
      },
    },
  }

  const connectingLineVariants = {
    animate: (i: number) => ({
      pathLength: [0, 1],
      opacity: [0, 0.7, 0.7, 0],
      transition: {
        duration: Math.random() * 4 + 2,
        ease: "easeInOut" as const,
        repeat: Number.POSITIVE_INFINITY,
        delay: Math.random() * 5,
      },
    }),
  }

  const techLogos = [
    { src: "/html.png", alt: "HTML5", top: "10%", left: "10%" },
    { src: "/css.png", alt: "CSS3", top: "20%", left: "75%" },
    { src: "/js.png", alt: "JavaScript", top: "65%", left: "15%" },
    { src: "/react.png", alt: "React", top: "80%", left: "80%" },
    { src: "/tailwind.png", alt: "TailwindCSS", top: "35%", left: "40%" },
    { src: "/bootsrap.jpg", alt: "TailwindCSS", top: "45%", left: "80%" },
  ]

  return (
    <div className="relative w-full h-full overflow-hidden ">
      {/* Floating Code Blocks */}
      {codeSnippets.map((snippet, i) => (
        <motion.div
          key={`code-block-${i}`}
          className={`absolute bg-gray-800/60 backdrop-blur-sm rounded-lg p-3 text-xs font-mono border border-gray-700 shadow-lg ${snippet.color}`}
          style={{
            top: snippet.top,
            left: snippet.left,
            width: snippet.width,
            minWidth: "150px",
            maxWidth: "300px",
            whiteSpace: "pre-wrap",
          }}
          variants={floatingCodeBlockVariants}
          custom={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate="animate">
          <span className="text-gray-500 pr-2">{snippet.lang}:</span>
          {snippet.code}
        </motion.div>
      ))}

      {/* Glowing Nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-3 h-3 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"
          style={{
            top: `${node.y}%`,
            left: `${node.x}%`,
          }}
          variants={nodePulseVariants}
          initial={{ opacity: 0.8 }}
          animate="animate"
        />
      ))}

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {[...Array(5)].map((_, i) => {
          const startNode = nodes[Math.floor(Math.random() * nodes.length)]
          const endNode = nodes[Math.floor(Math.random() * nodes.length)]
          if (!startNode || !endNode || startNode === endNode) return null

          return (
            <motion.line
              key={`line-svg-${i}`}
              x1={`${startNode.x}%`}
              y1={`${startNode.y}%`}
              x2={`${endNode.x}%`}
              y2={`${endNode.y}%`}
              stroke="url(#gradient-line)"
              strokeWidth="1"
              strokeLinecap="round"
              variants={connectingLineVariants}
              custom={i}
              initial={{ opacity: 0, pathLength: 0 }}
              animate="animate"
            />
          )
        })}
        <defs>
          <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Tech Logos */}
      {techLogos.map((logo, i) => (
        <motion.img
          key={`logo-${i}`}
          src={logo.src}
          alt={logo.alt}
          className="absolute w-10 h-10 md:w-12 md:h-12 rounded-lg p-1 bg-white shadow-md"
          style={{ top: logo.top, left: logo.left }}
          animate={{
            y: ["0%", "-10%", "0%"],
            x: ["0%", "5%", "0%"],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 4,
            repeat: Infinity,
            repeatType: "loop",
          }}

            // <section className="relative z-10 flex min-h-[calc(100vh-7rem)] items-center justify-center py-10 md:px-8 lg:py-24 mt-6 md:mt-0  " id="home">
    //   <div className="container">
    //     <div className="grid grid-cols-1  gap-12 md:grid-cols-2">

    //       <div className="flex flex-col items-center md:items-start text-center md:text-left">
    //         <p className="text-sm font-medium uppercase tracking-widest text-gray-400">
    //           Frontend Developer
    //         </p>
    //         <h1 className="mt-4 text-3xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
    //           Anurag Vashisht
    //         </h1>
    //         <p className="mt-6 text-md md:text-lg text-gray-300 w-full md:max-w-lg">
    //           Hello! I'm Anurag Vashisht, a passionate Frontend Developer with
    //           expertise in building modern and responsive web applications. I
    //           specialize in creating engaging user experiences using
    //           cutting-edge technologies.
    //         </p>


    //           <div className="mt-8 flex flex-col sm:flex-row gap-4">
    //           <button className="flex items-center gap-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors px-6 py-3">
    //             Download Resume
    //             <ArrowRightIcon className="h-4 w-4" />
    //           </button>
    //           <button className="flex items-center gap-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors px-6 py-3">
    //             Contact Me
    //             <ArrowRightIcon className="h-4 w-4" />
    //           </button>
    //         </div> 

    //         <div className="mt-8 flex space-x-4">
    //           <a
    //             href="https://github.com"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className="w-12 h-12 bg-white rounded-xl shadow-md hover:shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-300 hover:-translate-y-1"
    //           >
    //             <Github size={20} />
    //           </a>
    //           <a
    //             href="https://linkedin.com"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className="w-12 h-12 bg-white rounded-xl shadow-md hover:shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-300 hover:-translate-y-1" >
    //             <Linkedin size={20} />
    //           </a>
    //           <a
    //             href="mailto:anurag@example.com"
    //             className="w-12 h-12 bg-white rounded-xl shadow-md hover:shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-300 hover:-translate-y-1">
    //             <Mail size={20} />
    //           </a>
    //         </div>
    //       </div> 

    //      <div className="flex justify-center"> 
    //           <Animation />
    //       </div> 
    //     </div>
    //   </div>
    // </section>
        />
      ))}
    </div>
  )
}
