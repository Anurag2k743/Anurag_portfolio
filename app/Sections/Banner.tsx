"use client";
import { ArrowRightIcon, Github, Linkedin, Mail } from "lucide-react";
import Particles from "../Components/Particles";
import { section } from "framer-motion/client";

export function Banner() {
  return (

    <div className="w-full h-[600px] md:h-[930px] relative"  style={{
      background: `
          radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 60%), /* Central purple glow behind text */
          linear-gradient(180deg, #000000 0%, #050505 100%) /* Deep black to slightly lighter black base */
        `,
      backgroundSize: `
          100% 100%, 
          auto 
        `,
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
    }} id="home">
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />


      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
        <div className="text-center mt-20 sm:mt-10">
          <p className="text-sm sm:text-base uppercase tracking-widest text-[#7f45ee]">
            Frontend Developer
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Anurag Vashisht
          </h1>
          <p className="mt-4 sm:mt-6  text-base sm:text-lg text-[#E6E5E5] w-full sm:max-w-3xl mx-auto">
            Hello! I'm Anurag Vashisht, a passionate Frontend Developer with expertise
            in building modern and responsive web applications. I specialize in creating
            engaging user experiences using cutting-edge technologies.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">


            <button className="relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-[#1a1a1a] font-semibold  pl-5 pr-3 text-md text-white shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:ring-offset-2 focus:ring-offset-gray-900">
              <a href="#">Download Resume</a>
              <span className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#6D28D9]">
                <ArrowRightIcon className="h-4 w-4" />
              </span>
            </button>


            <button className="relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] font-semibold  text-md pl-5 pr-3 text-white shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:ring-offset-2 focus:ring-offset-gray-900">
              <a href="#contact">Contact Me</a>
              <span className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#6D28D9]">
                <ArrowRightIcon className="h-4 w-4" />
              </span>
            </button>

          </div>

          <div className="mt-6 sm:mt-8 flex justify-center items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1a1a1a] text-[#7f45ee] rounded-xl shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
            >
              <Github size={20} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1a1a1a] text-[#7f45ee] rounded-xl shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="anurag:vashishtanurag743@example.com"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1a1a1a] text-[#7f45ee] rounded-xl shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

    </div>

  );
}
