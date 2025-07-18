import Image from "next/image";
import { ArrowRightIcon, Github, Linkedin, Mail } from "lucide-react";

export function Banner() {
  return (
    <section className="relative z-10 flex min-h-[calc(100vh-7rem)] items-center justify-center py-10 md:px-8 lg:py-24 mt-6 md:mt-0  " id="home">
      <div className="container">
        <div className="grid grid-cols-1  gap-12 md:grid-cols-2">

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-sm font-medium uppercase tracking-widest text-gray-400">
              Frontend Developer
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Anurag Vashisht
            </h1>
            <p className="mt-6 text-md md:text-lg text-gray-300 w-full md:max-w-lg">
              Hello! I'm Anurag Vashisht, a passionate Frontend Developer with
              expertise in building modern and responsive web applications. I
              specialize in creating engaging user experiences using
              cutting-edge technologies.
            </p>


              <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="flex items-center gap-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors px-6 py-3">
                Download Resume
                <ArrowRightIcon className="h-4 w-4" />
              </button>
              <button className="flex items-center gap-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors px-6 py-3">
                Contact Me
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div> 

            <div className="mt-8 flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-xl shadow-md hover:shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-300 hover:-translate-y-1"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-xl shadow-md hover:shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-300 hover:-translate-y-1" >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:anurag@example.com"
                className="w-12 h-12 bg-white rounded-xl shadow-md hover:shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-300 hover:-translate-y-1">
                <Mail size={20} />
              </a>
            </div>
          </div> 

         <div className="flex justify-center"> 
            {/* <Image
              src="/banner.jpg"
              alt="Anurag Vashisht"
              width={500}
              height={500}
              className="rounded-xl shadow-lg object-cover"
              priority/>  */}
          </div> 

        </div>
      </div>
    </section>
  );
}
