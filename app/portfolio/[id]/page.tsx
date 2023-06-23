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
    <div>
      {
        projectDetails && (
          <>
            <SectionTitle title={projectDetails.title} align="left" />
            <span className="text-zinc-600">Launched {format(new Date(projectDetails.launchdate), "PPPP")}</span>
            <div className="bg-zinc-800 text-zinc-200 px-8 py-6 my-10 border-l-8 border-zinc-400">{projectDetails.abstract}</div>
            <RepoBtn title="View on GitHub" repoUrl={projectDetails.gitaddr} />
            <div dangerouslySetInnerHTML={{ __html: projectDetails.description }} />
          </>
        )
      }
    </div>
  );
}

export default PortfolioItem;