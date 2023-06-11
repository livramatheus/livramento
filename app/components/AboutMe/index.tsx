import Image from "next/image";

import { FaUserGraduate, FaCode, FaLaptopCode } from 'react-icons/fa';
import AboutItm from "./AboutItm";
import Link from "next/link";

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
      <h2 className="text-zinc-200 text-center text-4xl font-bold">About Me</h2>

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

          <Link
            href="#"
            className="border-2 border-zinc-600 w-56 rounded-md py-2 text-center text-zinc-200 font-bold hover:bg-zinc-800"
          >
            More about Matheus
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;