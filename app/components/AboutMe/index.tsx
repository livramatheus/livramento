import Image from "next/image";

import { FaUserGraduate, FaCode, FaLaptopCode } from 'react-icons/fa';
import AboutItm from "./AboutItm";
import SectionTitle from "../SectionTitle";
import Button from "../Button";

const AboutMe = () => {
  const aboutItems = [
    {
      title: "Computer Science Bachelor",
      icon: FaUserGraduate
    },
    { 
      title: `${new Date().getFullYear() - 2018}+ Years of experience`,
      icon: FaCode
    },
    {
      title: "8+ Web Technologies", 
      icon: FaLaptopCode
    },
  ];

  return (
    <section className="flex gap-20 flex-col">
      <SectionTitle title="About Me" />

      <div className="flex gap-10">
        <div className="flex flex-1 justify-center">
          <Image
            src="/matheus.jpg"
            height={300}
            width={300}
            alt="Matheus do Livramento"
            className="rounded-2xl shadow-lg"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between items-center">
          <span className="text-zinc-200 text-center">
            I&apos;m an expert in back-end software engineering. However, 
            my skills are not limited to PHP and Node.js, as I also 
            like to mess around with front-end stuff in my spare time.
          </span>

          <div className="flex gap-5">
            {
              aboutItems.map((e, i) => <AboutItm key={i} title={e.title} Icon={e.icon} />)
            }
          </div>


          <Button dest="#" text="More about Matheus" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;