// "use client"

// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
// import { motion } from "framer-motion"

// // CodeFlowAnimation component for the right section
// function CodeFlowAnimation() {
//   const floatingCodeBlockVariants = {
//     animate: (i: number) => ({
//       y: ["0%", "15%", "0%"], // Float up and down
//       x: ["0%", "10%", "-10%", "0%"], // Drift left and right
//       opacity: [0, 0.9, 0.9, 0], // Fade in, stay, fade out
//       scale: [0.9, 1.05, 1.05, 0.9],
//       rotate: [0, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, 0], // Subtle rotation
//       transition: {
//         duration: Math.random() * 10 + 7, // Random duration between 7 and 17 seconds
//         ease: "easeInOut",
//         repeat: Number.POSITIVE_INFINITY,
//         delay: Math.random() * 8, // Random initial delay
//       },
//     }),
//   }

//   const nodePulseVariants = {
//     animate: {
//       scale: [1, 1.2, 1],
//       opacity: [0.8, 1, 0.8],
//       transition: {
//         duration: 2,
//         ease: "easeInOut",
//         repeat: Number.POSITIVE_INFINITY,
//         repeatDelay: 0.5,
//       },
//     },
//   }

//   const connectingLineVariants = {
//     animate: (i: number) => ({
//       pathLength: [0, 1],
//       opacity: [0, 0.7, 0.7, 0],
//       transition: {
//         duration: Math.random() * 4 + 2,
//         ease: "easeInOut",
//         repeat: Number.POSITIVE_INFINITY,
//         delay: Math.random() * 5,
//       },
//     }),
//   }

//   const codeSnippets = [
//     {
//       lang: "html",
//       code: `<div class="container">\n  <h1>Hello, v0!</h1>\n</div>`,
//       color: "text-orange-400",
//     },
//     {
//       lang: "css",
//       code: `/* Tailwind CSS */\n.btn {\n  @apply px-4 py-2 rounded-md;\n}\n.text-primary {\n  @apply text-blue-500;\n}`,
//       color: "text-blue-400",
//     },
//     {
//       lang: "js",
//       code: `import React from 'react';\n\nfunction App() {\n  const [count, setCount] = React.useState(0);\n  return (\n    <button onClick={() => setCount(count + 1)}>\n      Count: {count}\n    </button>\n  );\n}`,
//       color: "text-yellow-400",
//     },
//     {
//       lang: "html",
//       code: `<section id="hero">\n  <p>Welcome to my portfolio</p>\n</section>`,
//       color: "text-orange-400",
//     },
//     {
//       lang: "css",
//       code: `.flex-center {\n  @apply flex items-center justify-center;\n}\n.shadow-lg {\n  @apply shadow-xl;\n}`,
//       color: "text-blue-400",
//     },
//     {
//       lang: "js",
//       code: `async function fetchData() {\n  const response = await fetch('/api/data');\n  const data = await response.json();\n  return data;\n}`,
//       color: "text-yellow-400",
//     },
//   ]

//   const frontendLogos = [
//     { src: "/placeholder.svg?height=40&width=40", alt: "HTML5 Logo" },
//     { src: "/placeholder.svg?height=40&width=40", alt: "CSS3 Logo" },
//     { src: "/placeholder.svg?height=40&width=40", alt: "Tailwind CSS Logo" },
//     { src: "/placeholder.svg?height=40&width=40", alt: "React Logo" },
//     { src: "/placeholder.svg?height=40&width=40", alt: "Git Logo" },
//     { src: "/placeholder.svg?height=40&width=40", alt: "GitHub Logo" },
//   ]

//   const nodes = Array.from({ length: 8 }).map(() => ({
//     x: Math.random() * 100,
//     y: Math.random() * 100,
//   }))

//   return (
//     <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-950 to-black">
//       {/* Floating Code Blocks with actual code */}
//       {codeSnippets.map((snippet, i) => (
//         <motion.div
//           key={`code-block-${i}`}
//           className={`absolute bg-gray-800/60 backdrop-blur-sm rounded-lg p-3 text-xs font-mono border border-gray-700 shadow-lg ${snippet.color}`}
//           style={{
//             top: `${Math.random() * 70 + 5}%`, // Keep within bounds
//             left: `${Math.random() * 70 + 5}%`, // Keep within bounds
//             width: `${Math.random() * 20 + 25}%`, // Larger width for readability
//             minWidth: "150px",
//             maxWidth: "300px",
//             whiteSpace: "pre-wrap", // Preserve whitespace and allow wrapping
//           }}
//           variants={floatingCodeBlockVariants}
//           custom={i}
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate="animate"
//         >
//           <span className="text-gray-500 pr-2">{snippet.lang}:</span>
//           {snippet.code}
//         </motion.div>
//       ))}

//       {/* Pulsing Nodes */}
//       {nodes.map((node, i) => (
//         <motion.div
//           key={`node-${i}`}
//           className="absolute w-3 h-3 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"
//           style={{
//             top: `${node.y}%`,
//             left: `${node.x}%`,
//           }}
//           variants={nodePulseVariants}
//           initial={{ opacity: 0.8 }}
//           animate="animate"
//         />
//       ))}

//       {/* Connecting Lines (SVG for path animation) */}
//       <svg className="absolute inset-0 w-full h-full pointer-events-none">
//         {[...Array(5)].map((_, i) => {
//           const startNode = nodes[Math.floor(Math.random() * nodes.length)]
//           const endNode = nodes[Math.floor(Math.random() * nodes.length)]
//           if (!startNode || !endNode || startNode === endNode) return null

//           return (
//             <motion.line
//               key={`line-svg-${i}`}
//               x1={`${startNode.x}%`}
//               y1={`${startNode.y}%`}
//               x2={`${endNode.x}%`}
//               y2={`${endNode.y}%`}
//               stroke="url(#gradient-line)"
//               strokeWidth="1"
//               strokeLinecap="round"
//               variants={connectingLineVariants}
//               custom={i}
//               initial={{ opacity: 0, pathLength: 0 }}
//               animate="animate"
//             />
//           )
//         })}
//         <defs>
//           <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#8B5CF6" /> {/* Purple */}
//             <stop offset="100%" stopColor="#EC4899" /> {/* Pink */}
//           </linearGradient>
//         </defs>
//       </svg>

//       {/* Floating Logos as White Boxes */}
//       {frontendLogos.map((logo, i) => (
//         <motion.div
//           key={`logo-box-${i}`}
//           className="absolute bg-white p-2 rounded-lg shadow-md flex items-center justify-center"
//           style={{
//             top: `${Math.random() * 90}%`,
//             left: `${Math.random() * 90}%`,
//             width: "50px", // Fixed size for the box
//             height: "50px",
//           }}
//           initial={{ opacity: 0, y: 0, scale: 0.8 }}
//           animate={{
//             opacity: [0, 0.9, 0.9, 0],
//             y: [0, -20, -20, 0],
//             scale: [0.8, 1, 1, 0.8],
//             transition: {
//               duration: 5,
//               ease: "easeInOut",
//               repeat: Number.POSITIVE_INFINITY,
//               repeatDelay: 1,
//               delay: i * 0.7 + Math.random() * 3, // Staggered and random delay
//             },
//           }}
//         >
//           <img src={logo.src || "/placeholder.svg"} alt={logo.alt} className="w-8 h-8 object-contain" />
//         </motion.div>
//       ))}
//     </div>
//   )
// }

// export default function PortfolioBanner() {
//   return (
//     <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
//       <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
//         {/* Left Section: Text Content */}
//         <div className="space-y-4">
//           <p className="text-sm font-medium tracking-widest text-gray-400 uppercase">FRONTEND DEVELOPER</p>
//           <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">Anurag Vashisht</h1>
//           <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//             Hello! I'm Anurag Vashisht, a passionate Frontend Developer with expertise in building modern and responsive
//             web applications. I specialize in creating engaging user experiences using cutting-edge technologies.
//           </p>
//           <div className="flex flex-col gap-2 min-[400px]:flex-row">
//             <Button asChild className="px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white">
//               <Link href="#">
//                 Download Resume <ArrowRight className="ml-2 h-4 w-4" />
//               </Link>
//             </Button>
//             <Button
//               asChild
//               variant="outline"
//               className="px-6 py-3 rounded-full border-gray-700 bg-gray-900 hover:bg-gray-800 text-white"
//             >
//               <Link href="#">
//                 Contact Me <ArrowRight className="ml-2 h-4 w-4" />
//               </Link>
//             </Button>
//           </div>
//           <div className="flex space-x-4 pt-4">
//             <Button
//               variant="outline"
//               size="icon"
//               className="rounded-full border-gray-700 bg-gray-900 hover:bg-gray-800 text-white"
//             >
//               <Github className="h-5 w-5" />
//               <span className="sr-only">GitHub</span>
//             </Button>
//             <Button
//               variant="outline"
//               size="icon"
//               className="rounded-full border-gray-700 bg-gray-900 hover:bg-gray-800 text-white"
//             >
//               <Linkedin className="h-5 w-5" />
//               <span className="sr-only">LinkedIn</span>
//             </Button>
//             <Button
//               variant="outline"
//               size="icon"
//               className="rounded-full border-gray-700 bg-gray-900 hover:bg-gray-800 text-white"
//             >
//               <Mail className="h-5 w-5" />
//               <span className="sr-only">Email</span>
//             </Button>
//           </div>
//         </div>

//         {/* Right Section: Animation */}
//         <div className="relative flex items-center justify-center h-[300px] md:h-[400px] lg:h-[500px] w-full overflow-hidden rounded-lg bg-gray-900">
//           <CodeFlowAnimation />
//         </div>
//       </div>
//     </section>
//   )
// }
