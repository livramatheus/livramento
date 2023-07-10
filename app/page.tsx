import AboutMe from "@/components/AboutMe";
import Greetings from "@/components/Greetings";
import ProjectsPreview from "@/components/ProjectsPreview";
import IProject from "@/interfaces/Project";


export const metadata = {
  title: "Welcome - Livramento.dev",
  description: 'Matheus do Livramento - Back-end software engineer',
}

const fetchProjects = async (): Promise<IProject[] | null> => {
  const response = await fetch(`${process.env.SERVER_URL}/api/projects`);

  if (response.ok) {
    const jsonList = await response.json();
    let projects: IProject[] = jsonList.projectList;
    projects = projects.reverse();
    projects = projects.slice(0, 3);
    return projects;
  }

  return null;
}

export default async function Home() {
  const projects = await fetchProjects();

  return (
    <>
      <Greetings/>

      <AboutMe/>

      {
        projects && <ProjectsPreview projects={projects} />
      }
    </>
  )
}
