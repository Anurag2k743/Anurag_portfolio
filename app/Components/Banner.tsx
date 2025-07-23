import { ArrowRightIcon, Github, Linkedin, Mail } from "lucide-react";
import Animation from "./Animation";

export function Banner() {
  return (
    <section className="relative z-30  h-[calc(100vh-4rem)] md:h-[calc(100vh-2rem)] flex items-center justify-center" id="home">

      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30 h-full w-full"></div>
      <div className="flex justify-center absolute top-0 right-0 w-full h-full -z-1">
        <Animation />
      </div>

      <div className="container">
        <div className="grid grid-cols-1 relative z-60">
          <div className="flex flex-col items-center md:items-start text-center md:text-left mt-10">
            <p className="text-sm font-medium uppercase tracking-widest text-[#7f45ee]">
              Frontend Developer
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-white md:text-6xl lg:text-7xl ">
              Anurag Vashisht
            </h1>
            <p className="mt-6 text-md md:text-lg w-full md:max-w-lg text-[#ADADAD]">
              {"Hello! I'm Anurag Vashisht, a passionate Frontend Developer with expertise in building modern and responsive web applications. I specialize in creating engaging user experiences using cutting-edge technologies."}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="flex items-center gap-2 rounded-full bg-[#1a1a1a] hover:bg-[#7f45ee] text-white  transition-colors px-5 py-2 text-md ">
                Download Resume
                <ArrowRightIcon className="h-4 w-4" />
              </button>
              <button className="flex items-center gap-2 rounded-full text-md  text-white   px-5 py-2 bg-[#7f45ee] hover:bg-[#1a1a1a] ">
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
    </section>
  );
}
