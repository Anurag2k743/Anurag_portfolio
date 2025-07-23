"use client"

import { motion } from "framer-motion"
import { Atom, Code, FileCode, Palette, Square, Laptop, Chrome } from "lucide-react" // Import Lucide icons

// Define the technology icons and their properties
const techIcons = [
  { icon: Code, alt: "JavaScript Icon", size: 48, color: "text-yellow-500" }, // JavaScript
  { icon: FileCode, alt: "HTML5 Icon", size: 48, color: "text-orange-600" }, // HTML5
  { icon: Palette, alt: "CSS3 Icon", size: 48, color: "text-blue-500" }, // CSS3
  { icon: Square, alt: "Angular Icon", size: 48, color: "text-red-600" }, // Angular (using Square as a placeholder)
  { icon: Laptop, alt: "VS Code Icon", size: 48, color: "text-blue-700" }, // VS Code
  { icon: Chrome, alt: "Chrome Icon", size: 48, color: "text-green-500" }, // Chrome
]

export default function BannerAnimation() {
  const innerRadius = 120 // Radius for the orbiting tech icons
  const outerRadius = 200 // Radius for the SVG text path
  const superOuterRadius = 280 // Radius for the outermost SVG text path
  const numIcons = techIcons.length
  const angleIncrement = 360 / numIcons // Angle between each orbiting icon

  return (
    <div className="relative flex items-center justify-center    overflow-hidden">
      {/* Central React Icon */}
      <motion.div
        className="absolute z-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
>
        <Atom size={100} className="text-blue-400 drop-shadow-lg" /> {/* React Atom icon */}
      </motion.div>

      {/* Orbiting Tech Icons Container */}
      <motion.div
        className="absolute flex items-center justify-center"
        style={{ width: innerRadius * 1, height: innerRadius * 1 }} // Set container size based on radius
        animate={{ rotate: 360 }}
        transition={{ duration: 20, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
      >
        {techIcons.map((tech, index) => {
          const angle = index * angleIncrement
          // Calculate x and y coordinates on the circle
          const x = innerRadius * Math.cos((angle * Math.PI) / 180)
          const y = innerRadius * Math.sin((angle * Math.PI) / 180)

          const IconComponent = tech.icon // Get the Lucide icon component

          return (
            <motion.div
              key={tech.alt}
              className="absolute"
              style={{
                // Position relative to the center of its parent container
                left: `calc(50% + ${x}px - ${tech.size / 2}px)`,
                top: `calc(50% + ${y}px - ${tech.size / 2}px)`,
              }}
              // Counter-rotate to keep icons upright relative to the screen
              animate={{ rotate: -360 }}
              transition={{ duration: 20, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
            >
              <IconComponent size={tech.size} className={`${tech.color} drop-shadow-md`} />
            </motion.div>
          )
        })}
      </motion.div>

      {/* Rotating Text SVG (Inner Circle) */}
      <motion.svg
        className="absolute"
        width={outerRadius * 2}
        height={outerRadius * 2}
        viewBox={`0 0 ${outerRadius * 2} ${outerRadius * 2}`}
        animate={{ rotate: -360 }} // Rotate in the opposite direction
        transition={{ duration: 30, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
        style={{ overflow: "visible" }} // Ensure text is not clipped
      >
        <defs>
          {/* Define a circular path for the text to follow */}
          <path
            id="circlePath"
            d={`M ${outerRadius}, ${outerRadius}
               m -${outerRadius}, 0
               a ${outerRadius},${outerRadius} 0 0,1 ${outerRadius * 2},0
               a ${outerRadius},${outerRadius} 0 0,1 -${outerRadius * 2},0
            `}
          />
        </defs>
        {/* Render text along the circular path */}
        <text fill="#9ca3af" style={{ fontSize: "14px", fontWeight: "600", textTransform: "uppercase" }}>
          <textPath href="#circlePath" startOffset="0%">
            FRONT END DEVELOPMENT FRONT END DEVELOPMENT FRONT END DEVELOPMENT FRONT END DEVELOPMENT FRONT END
            DEVELOPMENT FRONT END DEVELOPMENT
          </textPath>
        </text>
      </motion.svg>

      {/* Outermost Rotating Text SVG */}
      <motion.svg
        className="absolute"
        width={superOuterRadius * 2}
        height={superOuterRadius * 2}
        viewBox={`0 0 ${superOuterRadius * 2} ${superOuterRadius * 2}`}
        animate={{ rotate: 360 }} // Rotate in the opposite direction
        transition={{ duration: 40, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
        style={{ overflow: "visible" }} // Ensure text is not clipped
      >
        <defs>
          {/* Define a circular path for the text to follow */}
          <path
            id="superCirclePath"
            d={`M ${superOuterRadius}, ${superOuterRadius}
               m -${superOuterRadius}, 0
               a ${superOuterRadius},${superOuterRadius} 0 0,1 ${superOuterRadius * 2},0
               a ${superOuterRadius},${superOuterRadius} 0 0,1 -${superOuterRadius * 2},0
            `}
          />
        </defs>
        {/* Render text along the circular path */}
        <text fill="#d1d5db" style={{ fontSize: "16px", fontWeight: "700", textTransform: "uppercase" }}>
          <textPath href="#superCirclePath" startOffset="0%">
            WEB DEVELOPMENT WEB DEVELOPMENT WEB DEVELOPMENT WEB DEVELOPMENT WEB DEVELOPMENT WEB DEVELOPMENT
          </textPath>
        </text>
      </motion.svg>
    </div>
  )
}
