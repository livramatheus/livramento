"use client";

import { useEffect, useState } from "react";
import IProject from "../interfaces/Project";
import SectionTitle from "../components/SectionTitle";
import Link from "next/link";

const Portfolio = () => {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/api/projects");
      const projectList = await response.json();

      setProjects(projectList.projectList);
    }

    fetchProjects();
  }, []);

  return (
    <section className="flex flex-col items-center gap-8">
      <SectionTitle title="Portfolio" />

      {
        projects && (
          projects.map((p, i) => {
            return (
              <div key={i} className="flex flex-col gap-3 bg-zinc-800 py-8 px-7 rounded-lg border-l-8 w-9/12 border-zinc-400 hover:border-blue-400">
                <Link href={`/portfolio/${p.id}`} className="text-zinc-200 text-3xl font-bold hover:underline">{p.title}</Link>
                <div className="text-zinc-200">{p.abstract}</div>
                <div className="text-zinc-600">Technologies: {p.technologies}</div>
              </div>
            );
          })
        )
      }
    </section>
  );
}

export default Portfolio;