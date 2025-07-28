"use client"
import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

// -----------------------------------------------------------------------------
//  Skills component
// -----------------------------------------------------------------------------
export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 80 },
      ],
    },
    {
      title: "Styling & Frameworks",
      skills: [
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "Sass/SCSS", level: 80 },
        { name: "Responsive Design", level: 92 },
        { name: "CSS Grid & Flexbox", level: 88 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "npm/yarn", level: 80 },
        { name: "Webpack", level: 70 },
        { name: "Postman", level: 75 },
      ],
    },
  ]
  // ---------------------------------------------------------------------------
  //  Framer-motion setup
  // ---------------------------------------------------------------------------
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { margin: "0px 0px -20% 0px" })
  const controls = useAnimation()

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden")
  }, [inView, controls]) // The useEffect hook is used to synchronize the animation with the `inView` state [^2].

  const barVariants = (level: number) => ({
    hidden: { width: 0 },
    visible: { width: `${level}%` },
  })

  return (
    <section id="skills" className=" scroll-mt-20  pt-16 md:pt-20">
      <div className="container" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Skills &amp; <span className="text-[#7f45ee]">Expertise</span>{" "}
          </h2>
          <p className="max-w-xl mx-auto text-lg  text-[#E6E5E5]/80">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>
        {/* Skill Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="relative rounded-xl overflow-hidden group p-[1px]">

              <div className="absolute inset-0 bg-gradient-to-br from-[#8A2BE2] to-[#FF69B4] opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-xl"></div>

              <div className="relative z-10 rounded-[calc(0.75rem-1px)] bg-gradient-to-br from-[#111215] to-[#1a1a1a] border border-white/10 p-6 shadow-inner backdrop-blur-sm">

                <h3 className="text-lg sm:text-xl font-semibold mb-5 text-center">{category.title}</h3>
                {/* Skill bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1 text-sm sm:text-base ">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700/30 rounded-full h-2">
                        <motion.div
                          className="h-2 rounded-full relative" // Added relative positioning for the circle
                          style={{
                            background: "linear-gradient(to right, #8A2BE2, #FF69B4)",
                          }}
                          variants={barVariants(skill.level)}
                          initial="hidden"
                          animate={controls}
                          transition={{
                            duration: 1,
                            delay: skillIndex * 0.1,
                          }}
                        >
                          {/* Small rounded circle at the end of the progress bar */}
                          <div
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-white border-2"
                            style={{ borderColor: "#" }} // Use the primary color for the border
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
