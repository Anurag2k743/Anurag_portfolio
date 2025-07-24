"use client";
import { ArrowRightIcon, Github, Linkedin, Mail } from "lucide-react";
import Particles from "../Components/Particles";
import { section } from "framer-motion/client";

export function Banner() {
  return (

    <div className="w-full h-[930px] relative" style={{
        background: `
          radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 60%), /* Central purple glow behind text */
          linear-gradient(180deg, #000000 0%, #050505 100%) /* Deep black to slightly lighter black base */
        `,
        backgroundSize: `
          100% 100%, /* For radial gradient */
          auto /* For linear gradient */
        `,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}>
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

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="grid grid-cols-1 relative z-60">
          <div className="flex flex-col items-center  text-center md:text-left mt-10">
            <p className="text-lg font-medium uppercase tracking-widest text-[#7f45ee]">
              Frontend Developer
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-white md:text-6xl lg:text-8xl ">
              Anurag Vashisht
            </h1>
            <p className="mt-6 text-md md:text-lg w-full md:max-w-3xl text-[#E6E5E5] text-center">
              {"Hello! I'm Anurag Vashisht, a passionate Frontend Developer with expertise in building modern and responsive web applications. I specialize in creating engaging user experiences using cutting-edge technologies."}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="flex items-center gap-2 rounded-full bg-[#1a1a1a] hover:bg-[#7f45ee] text-white  transition-colors px-5 py-3 text-md ">
                Download Resume
                <ArrowRightIcon className="h-4 w-4" />
              </button>
              <button className="flex items-center gap-2 rounded-full text-md  text-white   px-5 py-3 bg-[#7f45ee] hover:bg-[#1a1a1a] ">
                <a href="#contact"> Contact Me</a>
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-8 flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#1a1a1a] text-[#7f45ee]  rounded-xl shadow-md hover:shadow-lg flex items-center justify-center  transition-all duration-300 hover:-translate-y-1"
              >
                <Github size={20} />
              </a>


              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#1a1a1a] text-[#7f45ee] rounded-xl shadow-md hover:shadow-lg flex items-center justify-center  transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="anurag:vashishtanurag743@example.com"
                className="w-12 h-12 bg-[#1a1a1a] text-[#7f45ee] rounded-xl shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
