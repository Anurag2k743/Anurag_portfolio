import About from "./Components/About";
import { Banner } from "./Components/Banner";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Header } from "./Components/Navbar";
import Projects from "./Components/Project";
import Skills from "./Components/Skills";


export default function Home() {
  return (

    <>
      <div className="h-screen overflow-y-auto text-white">
        <Header />
        <Banner/>
        <About/>
        <Skills/>
        <Projects />
        <Contact/>
        <Footer/>
      </div>
    </>

  );
}
