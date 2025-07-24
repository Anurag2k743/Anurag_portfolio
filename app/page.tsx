import { Banner } from "./Sections/Banner";
import Contact from "./Sections/Contact";
import FooterSection from "./Components/FooterSection";
import { Header } from "./Components/Navbar";
import Projects from "./Sections/Project";
import Skills from "./Sections/Skills";
import SkillsSlider from "./Sections/SkillsSlider";
import About from "./Sections/About";


export default function Home() {
  return (

    <>
      <div className="h-screen overflow-y-auto text-white" >
        <Header />
        <Banner/>
        <SkillsSlider/>
        <About/>
]        <Skills/>
        <Projects />
        <Contact/>
        <FooterSection/>
      </div>
    </>

  );
}
