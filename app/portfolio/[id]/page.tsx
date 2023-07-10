import './PortfolioItem.css';
import format from 'date-fns/format';
import IProject from '@/interfaces/Project';
import { Metadata } from 'next';
import SectionTitle from '@/components/SectionTitle';
import RepoBtn from '@/components/RepoBtn';

interface IProps {
  params: {
    id: string;
  }
}

interface IMetadataProps {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const fetchProject = async (id: string): Promise<IProject | null> => {
  const response = await fetch(`${process.env.SERVER_URL}/api/projects/${id}`);
  
  console.log(`TESTING -> ${process.env.SERVER_URL}/api/projects/${id}`);

  if (response.ok) {
    const projectDetails = await response.json();
    return projectDetails;
  }

  return null;
}

export async function generateMetadata(props: IMetadataProps): Promise<Metadata> {
  const projectDetails = await fetchProject(props.params.id);

  if (projectDetails) {
    return {
      title: `Livramento.dev - ${projectDetails.title}`,
      description: `${projectDetails.title}, built with ${projectDetails.technologies}`,
      keywords: [projectDetails.title, ...projectDetails.technologies.split(", ")],
      authors: [{ name: "Matheus do Livramento", url: "https://livramento.dev" }]
    }
  }

  return {};
};

const PortfolioItem = async (props: IProps) => {
  const projectDetails = await fetchProject(props.params.id);

  if (projectDetails) {
    return (
      <section className="flex flex-col gap-8">
        <div>
          <SectionTitle title={projectDetails.title} align="left" />
          <span className="text-zinc-600">Launched {format(new Date(projectDetails.launchdate), "PPPP")}</span>
        </div>
        
        <div className="flex flex-col gap-5">
          <div className="bg-zinc-800 text-zinc-200 px-8 py-6 border-l-8 border-zinc-400">
            {projectDetails.abstract}
          </div>
          
          <div className="flex gap-3">
            {
              projectDetails.repourl.map((r, k) => <RepoBtn key={k} title={r.title} repoUrl={r.url} />)
            }
          </div>
        </div>
        
        <article className="portfolio-item" dangerouslySetInnerHTML={{ __html: projectDetails.description }} />
      </section>
    );
  }
}

export default PortfolioItem;