import path from 'path';
import { promises as fs } from 'fs';
import IProject from '@/interfaces/Project';

export async function GET(request: Request, context: Context) {
  try {
    const { id } = context.params;

    const jsonDirectory = path.join(process.cwd(), 'data');
    const fileContents = await fs.readFile(`${jsonDirectory}/projects.json`, 'utf8');
    const projects = JSON.parse(fileContents).projectList;
    const project = projects.find((p: IProject) => Number(p.id) === Number(id));

    if (project) {
      return new Response(JSON.stringify(project), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response('Project not found', {
      status: 404,
    });
  } catch (error) {
    return new Response('Something went wrong while processing', {
      status: 500,
    });
  }
};
