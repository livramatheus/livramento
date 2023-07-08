import AboutMe from "./components/AboutMe";
import Greetings from "./components/Greetings";
import ProjectsPreview from "./components/ProjectsPreview";
import IProject from "./interfaces/Project";

export const metadata = {
  title: "Welcome - Livramento.dev",
  description: 'Matheus do Livramento - Back-end software engineer',
}

export default async function Home() {
  const response = await fetch(`${process.env.SERVER_URL}/api/projects`);
  const jsonList = await response.json();
  let projects: IProject[] = jsonList.projectList;
  projects = projects.reverse();
  projects = projects.slice(0, 3);

  return (
    <>
      <Greetings/>

      <AboutMe/>

      <ProjectsPreview projects={projects} />
    </>
  )
}
