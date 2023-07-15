import React from 'react';
import IProject from '@/interfaces/Project';
import Link from 'next/link';

interface IProps {
  projects: IProject[];
}

function PortfolioList(props: IProps) {
  if (props?.projects) {
    return (
      props?.projects.map((p) => (
        <div key={p.id} className="flex flex-col gap-3 bg-zinc-800 py-8 px-7 rounded-lg border-l-8 max-md:w-full w-9/12 border-zinc-400 hover:border-blue-400">
          <Link href={`/portfolio/${p.id}`} className="text-zinc-200 text-3xl font-bold hover:underline">{p.title}</Link>
          <div className="text-zinc-200">{p.abstract}</div>
          <div className="text-zinc-600">
            Technologies:
            {' '}
            {p.technologies}
          </div>
        </div>
      ))
    );
  }

  return null;
}

export default PortfolioList;
