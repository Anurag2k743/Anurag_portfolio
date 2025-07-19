"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

type Snippet = {
  lang: string
  code: string
  color: string
  top: string
  left: string
  width: string
}

export default function CodeFlowAnimation() {
  const [codeSnippets, setCodeSnippets] = useState<Snippet[]>([])
  const [nodes, setNodes] = useState<{ x: number; y: number }[]>([])
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const generatedSnippets: Snippet[] = [
      {
        lang: "html",
        code: `<div class="container">\n  <h1>Hello, v0!</h1>\n</div>`,
        color: "text-orange-400",
      },
      {
        lang: "css",
        code: `/* Tailwind CSS */\n.btn {\n  @apply px-4 py-2 rounded-md;\n}\n.text-primary {\n  @apply text-blue-500;\n}`,
        color: "text-blue-400",
      },
      {
        lang: "js",
        code: `import React from 'react';\n\nfunction Animation() {\n  const [count, setCount] = React.useState(0);\n  return (\n    <button onClick={() => setCount(count + 1)}>\n      Count: {count}\n    </button>\n  );\n}`,
        color: "text-yellow-400",
      },
    ].map((s) => ({
      ...s,
      top: `${Math.random() * 70 + 5}%`,
      left: `${Math.random() * 70 + 5}%`,
      width: `${Math.random() * 20 + 25}%`,
    }))
    const generatedNodes = Array.from({ length: 8 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
    }))
    setCodeSnippets(generatedSnippets)
    setNodes(generatedNodes)
  }, [])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((event.clientX - rect.left) / rect.width) * 100,
          y: ((event.clientY - rect.top) / rect.height) * 100,
        })
      }
    }

    const handleMouseLeave = () => {
      setMousePosition(null)
    }

    const currentContainer = containerRef.current
    if (currentContainer) {
      currentContainer.addEventListener("mousemove", handleMouseMove)
      currentContainer.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener("mousemove", handleMouseMove)
        currentContainer.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

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
        repeatDelay: 0.5,
      },
    },
  }

  const connectingLineVariants = {
    animate: {
      pathLength: [0, 1],
      opacity: [0, 0.7, 0.7, 0],
      transition: {
        duration: 4,
        ease: "easeInOut" as const,
        repeat: Number.POSITIVE_INFINITY,
        delay: 1,
      },
    },
  }

  if (!codeSnippets.length || !nodes.length) return null

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[60vh] overflow-hidden bg-gray-950 flex items-center justify-center"
    >
      {codeSnippets.map((snippet, i) => (
        <motion.div
          key={`code-${i}`}
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
          animate="animate"
        >
          <span className="text-gray-500 pr-2">{snippet.lang}:</span>
          {snippet.code}
        </motion.div>
      ))}

      {nodes.map((node, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-3 h-3 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"
          style={{ top: `${node.y}%`, left: `${node.x}%` }}
          variants={nodePulseVariants}
          initial={{ opacity: 0.8 }}
          animate="animate"
        />
      ))}

      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
          <linearGradient id="gradient-mouse-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00F0FF" />
            <stop offset="100%" stopColor="#00FF80" />
          </linearGradient>
        </defs>

        {nodes.length > 1 &&
          [...Array(5)].map((_, _i) => {
            const start = nodes[Math.floor(Math.random() * nodes.length)]
            const end = nodes[Math.floor(Math.random() * nodes.length)]
            if (start === end) return null
            return (
              <motion.line
                key={`line-${_i}`}
                x1={`${start.x}%`}
                y1={`${start.y}%`}
                x2={`${end.x}%`}
                y2={`${end.y}%`}
                stroke="url(#gradient-line)"
                strokeWidth="1"
                strokeLinecap="round"
                variants={connectingLineVariants}
                initial={{ opacity: 0, pathLength: 0 }}
                animate="animate"
              />
            )
          })}

        {mousePosition &&
          nodes.map((node, _i) => (
            <line
              key={`mouse-line-${_i}`}
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${mousePosition.x}%`}
              y2={`${mousePosition.y}%`}
              stroke="url(#gradient-mouse-line)"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity={0.7}
            />
          ))}
      </svg>
    </div>
  )
}
