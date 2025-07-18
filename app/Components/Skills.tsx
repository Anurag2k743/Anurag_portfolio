"use client"

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

  return (
    <section id="skills" className="pt-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className=" bg-[#1d2229] p-6 rounded-lg  group cursor-pointerl hover:shadow-[0_4px_20px_rgba(59,130,246,0.3)] transition-shadow duration-300" >
              <h3 className="text-xl font-bold mb-6 text-center group-hover:scale-105 transition-transform duration-300">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium group-hover/skill:text-blue-600 transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-white">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
