interface IRepoURL {
  title?: string;
  url: string;
}

export default interface IProject {
  id: number;
  title: string;
  launchdate: string;
  abstract: string;
  description: string;
  technologies: string
  repourl: IRepoURL[];
}