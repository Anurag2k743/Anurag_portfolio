import AboutUsSection from "./Components/AboutUsSection";
import { Banner } from "./Components/Banner";
import Contact from "./Components/Contact";
import Copyright from "./Components/Copyright";
import Footer from "./Components/Footer";
import FooterSection from "./Components/FooterSection";
import { Header } from "./Components/Navbar";
import Projects from "./Components/Project";
import Skills from "./Components/Skills";
import SkillsSlider from "./Components/SkillsSlider";


export default function Home() {
  return (

    <>
      <div className="h-screen overflow-y-auto text-white">
        <Header />
        <Banner/>
        <SkillsSlider/>
        <AboutUsSection/>
]        <Skills/>
        <Projects />
        <Contact/>
        <FooterSection/>
      </div>
    </>

  );
}
