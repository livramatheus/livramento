import IProject from "../interfaces/Project";
import SectionTitle from "../components/SectionTitle";
import PortfolioList from "../components/PortfolioList";

export const metadata = {
  title: "Livramento.dev - Portfolio",
  description: 'Matheus do Livramento - Back-end software engineer',
}

const Portfolio = async () => {
  const response = await fetch(`${process.env.SERVER_URL}/api/projects`);
  const jsonList = await response.json();
  let projects: IProject[] = jsonList.projectList;
  projects = projects.reverse();

  return (
    <section className="flex flex-col items-center gap-8">
      <SectionTitle title="Portfolio" />
      <PortfolioList projects={projects} />
    </section>
  );
}

export default Portfolio;