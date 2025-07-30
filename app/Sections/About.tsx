import { Instagram, Send, PhoneIcon as Whatsapp } from "lucide-react"

export default function AboutUsSection() {
  return (
    <div className="pt-16 md:pt-20  scroll-mt-20" id="about" >
      <div className="container">
        <section className="relative py-16 sm:py-20 px-4 sm:px-8 lg:px-16 overflow-hidden bg-black text-white snap-start ">

          <div className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 border-t-2 border-l-2 border-[#7f45ee]"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 border-b-2 border-r-2 border-[#7f45ee]"></div>

          <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-start gap-6">
            <div className="inline-block px-4 py-1 rounded-full bg-[#1a1a1a] text-sm sm:text-base">
              About Me
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Know Me <span className="text-[#7f45ee]">Better</span>
            </h2>
            <div className="text-[#E6E5E5]/80">
              <p className="text-base sm:text-lg mb-4 ">
                As a frontend developer, I specialize in creating responsive and interactive web applications. My journey began with
                HTML and CSS, and I have evolved to master modern frameworks like React.js and Next.js. Over the years, I have built
                a wide range of user-centric interfaces—from simple landing pages to full-scale web platforms.
              </p>
              <p className=" text-base sm:text-lg mb-4">
                I am passionate about writing clean, efficient code and staying up-to-date with the latest web development trends
                and best practices. I focus on performance optimization, accessibility, and maintainable code structures, ensuring that
                every project I work on is both user-friendly and developer-friendly.
              </p>
              <p className=" text-base sm:text-lg mb-4">
                My workflow often includes tools and technologies like Tailwind CSS, TypeScript, Git, and Figma, allowing me to
                collaborate smoothly with designers and backend teams. I thrive in fast-paced environments and enjoy turning
                high-level ideas into functional, beautiful digital experiences.
              </p>
              <p className=" text-base sm:text-lg">
                When I am not coding, I love exploring new technologies, contributing to open-source projects, and sharing
                knowledge with the developer community through blogs, tutorials, or developer meetups. I strongly believe in
                lifelong learning and always look for ways to grow both professionally and personally.
              </p>
            </div>
          </div>

          {/* Social buttons on side (only visible on md+ screens) */}

          <div className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 flex-col gap-4 z-20">
            <button className="rounded-full border-white text-white hover:bg-white hover:text-black bg-transparent p-2">
             <a href="tel:+917876212773"><Whatsapp className="h-6 w-6" /></a> 
            </button>
            <button className="rounded-full border-white text-white hover:bg-white hover:text-black bg-transparent p-2">
              <Send className="h-6 w-6" />
            </button>
            <button className="rounded-full border-white text-white hover:bg-white hover:text-black bg-transparent p-2">
              <Instagram className="h-6 w-6" />
            </button>
          </div>

        </section>
      </div>
    </div>
  )
}
