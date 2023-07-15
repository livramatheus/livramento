import React from 'react';
import {
  FaCode, FaDatabase, FaElementor, FaLaptopCode, FaNetworkWired, FaPeopleArrows,
} from 'react-icons/fa';
import SkillCard from '../SkillCard';

function Skills() {
  const skillsData = [
    {
      title: 'Languages',
      desc: 'TypeScript, JavaScript, PHP, SQL',
      Icon: FaCode,
    },
    {
      title: 'Soft Skills',
      desc: 'Knowledge Sharer, Curious, Well-organized, Critical thinker',
      Icon: FaPeopleArrows,
    },
    {
      title: 'Databases',
      desc: 'MySQL, PostgreSQL, Redis',
      Icon: FaDatabase,
    },
    {
      title: 'Web Development',
      desc: 'HTML5, CSS3, Tailwind, React, Next.js, Node.js, jQuery',
      Icon: FaLaptopCode,
    },
    {
      title: 'Misc',
      desc: 'Agile Methodology, Code Versioning, Unit Tests',
      Icon: FaElementor,
    },
    {
      title: 'Others',
      desc: 'Software Architecture, Design Patterns, Caching',
      Icon: FaNetworkWired,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-bold border-b border-zinc-500">Skills</h3>

      <p>
        I jumped into web development more than 12 years ago when I participated
        in my first Design & Web course. Three years later I started to learn
        Java and C++ in college. As time went on, I transitioned to PHP, which is
        the language that I use professionally.
      </p>

      <p>
        Other than PHP, I also work a lot with JavaScript/TypeScript on personal
        projects, which usually involve React, Next.js and Node.
      </p>

      <p>
        Below you can see more detailed info about my skills:
      </p>

      <div className="grid max-md:grid-cols-1 grid-cols-3 gap-5 my-5">
        {
          skillsData.map((s) => <SkillCard key={s.title} {...s} />)
        }
      </div>
    </div>
  );
}

export default Skills;
