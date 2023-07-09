import IProject from "@/interfaces/Project";
import Link from "next/link";
import SectionTitle from "../SectionTitle";

interface IProps {
  projects: IProject[];
}

const ProjectsPreview = (props: IProps) => {
  const { projects } = props;

  return (
    <section className="flex flex-col max-md:gap-10 gap-20 ">
      <SectionTitle title="Latest Projects" />

      <div className="grid grid-cols-2 gap-4">
        {
          projects.map((p, k) => {
            return (
              <div
                key={k}
                className={`flex flex-col gap-4 justify-center bg-zinc-800 py-8 px-7 rounded-lg border-l-8 border-zinc-400 hover:border-blue-400 ${k === 2 ? "col-span-2" : ""}`}
              >
                <Link href={`/portfolio/${p.id}`} className="text-zinc-200 text-3xl font-bold hover:underline">{p.title}</Link>
                <div className="text-zinc-200">{p.abstract}</div>
                <div className="text-zinc-500">Technologies: {p.technologies}</div>
              </div>
            )
          })
        }
      </div>
    </section>
  );
}

export default ProjectsPreview;