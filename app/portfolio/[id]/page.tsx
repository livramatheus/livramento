"use client";

import SectionTitle from '@/app/components/SectionTitle';
import './PortfolioItem.css';

import IProject from "@/app/interfaces/Project";
import { useEffect, useState } from "react";
import format from 'date-fns/format';
import RepoBtn from '@/app/components/RepoBtn';

interface IProps {
  params: {
    id: string;
  }
}

const PortfolioItem = (props: IProps) => {
  const [ projectDetails, setProjectDetails ] = useState<null | IProject>(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      const response = await fetch(`/api/projects/${props.params.id}`);
      const project = await response.json();
      setProjectDetails(project);
    }

    fetchProjectDetails();
  }, [props.params.id]);

  return (
    <>
      {
        projectDetails && (
          <section className="flex flex-col gap-10">
            <div>
              <SectionTitle title={projectDetails.title} align="left" />
              <span className="text-zinc-600">Launched {format(new Date(projectDetails.launchdate), "PPPP")}</span>
            </div>
            
            <div className="bg-zinc-800 text-zinc-200 px-8 py-6 border-l-8 border-zinc-400">
              {projectDetails.abstract}
            </div>
            
            <div className="flex gap-3">
              {
                projectDetails.repourl.map((r, k) => <RepoBtn key={k} title={r.title} repoUrl={r.url} />)
              }
            </div>
            
            <div dangerouslySetInnerHTML={{ __html: projectDetails.description }} />
          </section>
        )
      }
    </>
  );
}

export default PortfolioItem;