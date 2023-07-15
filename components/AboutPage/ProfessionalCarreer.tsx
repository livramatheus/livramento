import React from 'react';
import {
  FaBuilding, FaCartPlus, FaChalkboardTeacher, FaCode, FaDesktop, FaGraduationCap, FaRegListAlt,
} from 'react-icons/fa';
import ProfessionalCard from '../ProfessionalCard';

function ProfessionalCarreer() {
  const professionalData = [
    {
      title: 'Back-end Software Engineer',
      location: 'Symplicity, Arlington, VA - USA (Remote)',
      desc: 'In charge of software engineering a product for higher education. Constant english-based communication with the international team.',
      skills: 'Agile | PHP | OOP | MySQL | GitLab | Unix/Linux CLI',
      timespan: '2022 - Present',
      Icon: FaCode,
    },
    {
      title: 'Full Stack Development Instructor',
      location: 'IPM Sistemas, Rio do Sul, SC',
      desc: 'In charge of training/tutoring newly hired programmers by lecturing Web Development classes.',
      skills: 'HTML | CSS | JavaScript | PHP | PostgreSQL | PHP Framework',
      timespan: '2018 - 2021',
      Icon: FaChalkboardTeacher,
    },
    {
      title: 'HR Business Rule Instructor',
      location: 'IPM Sistemas, Rio do Sul, SC',
      desc: 'In charge of training/tutoring employees that were hired to work with the Human Resources software.',
      skills: 'Public administration software | Human Resources',
      timespan: '2017 - 2018',
      Icon: FaDesktop,
    },
    {
      title: 'Bachelor degree in Computer Science',
      location: 'Instituto Federal Catarinense, Rio do Sul, SC',
      desc: 'Graduated in computer science, reaching maximum grade in the final thesis, which portrayed about Artificial Intelligence.',
      timespan: '2017',
      Icon: FaGraduationCap,
    },
    {
      title: 'Software Quality Assurance',
      location: 'IPM Sistemas, Rio do Sul, SC',
      desc: 'In charge of testing the HR software to detect and catalog errors. Also in charge of writing and executing test cases.',
      skills: 'Quality Assurance | HR Software',
      timespan: '2016 - 2017',
      Icon: FaRegListAlt,
    },
    {
      title: 'Office Assistant',
      location: 'Comercial Versatil, Rio do Sul, SC',
      desc: 'In charge of managing the e-commerce platform and leading marketing campaigns on social media.',
      timespan: '2014 - 2016',
      Icon: FaCartPlus,
    },
    {
      title: 'Administrative Assistant Intern',
      location: 'Town Hall, Rio do Sul, SC',
      desc: 'In charge of assorted office services, like register traffic tickets, catalog towed cars and organize old files.',
      timespan: '2011 - 2014',
      Icon: FaBuilding,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-bold border-b border-zinc-500">Professional Carreer</h3>

      <p>
        When I was 16, I got my first job as an Office Assistant at Rio do Sul&apos;s town hall.
        Today, more than 10 years later, I&apos;m a
        {' '}
        <b>professional back-end software engineer</b>
        .
        Also, under my career path, I was a web development teacher with more than 150 students.
      </p>

      <p>
        Below you can see my professional career timeline:
      </p>

      <div className="grid max-md:grid-cols-1 grid-cols-2 gap-5 my-5">
        {
          professionalData.map((p) => <ProfessionalCard key={p.title} {...p} />)
        }
      </div>
    </div>
  );
}

export default ProfessionalCarreer;
