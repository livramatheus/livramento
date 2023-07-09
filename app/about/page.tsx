import Intro from "@/components/AboutPage/Intro";
import Languages from "@/components/AboutPage/Languages";
import ProfessionalCarreer from "@/components/AboutPage/ProfessionalCarreer";
import Skills from "@/components/AboutPage/Skills";
import SectionTitle from "@/components/SectionTitle";

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