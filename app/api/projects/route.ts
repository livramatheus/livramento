import path from 'path';
import { promises as fs } from 'fs';

const GET = async () => {
  const jsonDirectory = path.join(process.cwd(), 'data');
  const fileContents = await fs.readFile(`${jsonDirectory}/projects.json`, 'utf8');

  return new Response(fileContents, {
    status: 200,
  });
};

export default GET;
