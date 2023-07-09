import path from "path";
import { promises as fs } from "fs";
import IProject from "@/interfaces/Project";


interface IParams {
  params: {
    id: string;
  }
}

export const GET = async (request: Request, params: IParams) => {
  const id = params.params.id;
  
  const jsonDirectory = path.join(process.cwd(), 'data');
  const fileContents = await fs.readFile(jsonDirectory + '/projects.json', 'utf8');
  const projects = JSON.parse(fileContents).projectList;
  
  const project = projects.find((p: IProject) => p.id == parseInt(id));

  if (project) {
    return new Response(JSON.stringify(project), {
      status: 200
    });
  }

  return new Response("Project not found", {
    status: 404
  });
}
