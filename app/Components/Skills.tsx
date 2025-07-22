"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

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
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { margin: "0px 0px -20% 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const barVariants = (level: number) => ({
    hidden: { width: 0 },
    visible: { width: `${level}%` },
  });

  return (
    <section id="skills" className="pt-10 md:pt-20 px-4 sm:px-6 lg:px-8 scroll-mt-20" >
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="relative group rounded-xl overflow-hidden transition-all duration-300" >
              {/* Animated gradient border */}
              <div className="absolute inset-0 z-0 rounded-xl bg-gradient-to-r from-[#D71F26] to-[#FF7B1C] opacity-0 group-hover:opacity-100 transition duration-500 blur-md" />
              <div className="relative z-10 m-[1px] rounded-[calc(0.75rem-1px)] border border-white/10 bg-gradient-to-br from-[#111215] to-[#1c1d20] p-6 shadow-inner backdrop-blur-xl">
                <div className="absolute inset-0 rounded-xl pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05),_transparent_70%)]" />

                <h3 className="relative text-lg sm:text-xl font-semibold text-white mb-5 text-center z-10">
                  {category.title}
                </h3>
                <div className="relative space-y-4 z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1 text-sm sm:text-base text-white">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700/30 rounded-full h-2">
                        <motion.div
                          className="bg-[linear-gradient(90deg,_#D71F26,_#FF7B1C)] h-2 rounded-full"
                          variants={barVariants(skill.level)}
                          initial="hidden"
                          animate={controls}
                          transition={{
                            duration: 1,
                            delay: skillIndex * 0.1,
                          }}
                        ></motion.div>
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
  );
}
