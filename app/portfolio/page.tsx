import SectionTitle from "@/components/SectionTitle";
import PortfolioList from "@/components/PortfolioList";
import IProject from "@/interfaces/Project";

export const metadata = {
  title: "Livramento.dev - Portfolio",
  description: 'Matheus do Livramento - Back-end software engineer',
}

const fetchProjects = async (): Promise<IProject[] | null> => {
  const response = await fetch(`${process.env.SERVER_URL}/api/projects`);

  if (response.ok) {
    const jsonList = await response.json();
    let projects: IProject[] = jsonList.projectList;
    projects = projects.reverse();
    return projects;
  }

  return null;
}

const Portfolio = async () => {
  const projects = await fetchProjects();

  if (projects) {
    return (
      <section className="flex flex-col items-center max-md:gap-4 gap-8">
        <SectionTitle title="Portfolio" />
        <PortfolioList projects={projects} />
      </section>
    );
  }
}

export default Portfolio;