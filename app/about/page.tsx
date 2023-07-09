import SectionTitle from "../components/SectionTitle";
import Skills from "../components/AboutPage/Skills";
import ProfessionalCarreer from "../components/AboutPage/ProfessionalCarreer";
import Languages from "../components/AboutPage/Languages";
import Intro from "../components/AboutPage/Intro";

const About = () => {
  return (
    <article className="flex flex-col gap-10 text-zinc-200">
      <SectionTitle title="About" />

      <Intro />

      <Skills />
      
      <ProfessionalCarreer />

      <Languages />
    </article>
  )
}

export default About;