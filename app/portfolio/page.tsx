import SectionTitle from "@/components/SectionTitle";
import PortfolioList from "@/components/PortfolioList";
import IProject from "@/interfaces/Project";

export const metadata = {
  title: "Livramento.dev - Portfolio",
  description: 'Matheus do Livramento - Back-end software engineer',
}

const fetchProjects = async () => {
  const response = await fetch(`${process.env.SERVER_URL}/api/projects`);

  if (response.ok) {
    const jsonList = await response.json();
    let projects: IProject[] = jsonList.projectList;
    projects = projects.reverse();
    return projects;
  }

  return [];
}

const Portfolio = async () => {
  const projects = await fetchProjects();

  return (
    <section className="flex flex-col items-center max-md:gap-4 gap-8">
      <SectionTitle title="Portfolio" />
      <PortfolioList projects={projects} />
    </section>
  );
}

export default Portfolio;