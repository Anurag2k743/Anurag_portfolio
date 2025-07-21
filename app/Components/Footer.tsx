import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className=" text-white pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4 gradient-text">Anurag Vashisht</div>
          <p className="text-gray-400 mb-6">Frontend Developer passionate about creating amazing web experiences</p>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200">
              <Github size={24} className="w-8 h-8 text-gray-600 group-hover:scale-110 transition-transform duration-300 bg-white rounded p-2" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200">
              <Linkedin size={24} className="w-8 h-8 text-gray-600 group-hover:scale-110 transition-transform duration-300 bg-white rounded p-2" />
            </a>
            <a
              href="anurag:vashishtanurag@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200" >
              <Mail size={24}  className="w-8 h-8 text-gray-600 group-hover:scale-110 transition-transform duration-300 bg-white rounded p-2"/>
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              Made with <Heart size={16} className="text-red-500" /> by Anurag Vashisht © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}