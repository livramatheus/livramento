import Image from "next/image";
import Link from "next/link";

interface IProps {
  title?: string;
  repoUrl: string;
}

const RepoBtn = ({ title, repoUrl }: IProps) => {
  return (
    <Link href={repoUrl} target="_blank" className="flex justify-center items-center gap-3 bg-gradient-to-t from-zinc-500 to-zinc-200 py-1 px-5 rounded w-fit shadow-md cursor-pointer hover:bg-gradient-to-t hover:from-blue-400 hover:to-blue-100">
      <Image alt="" src="/github-logo.svg" width={24} height={24} />
      <span>{title ?? "View on GitHub"}</span>
    </Link>
  );
}

export default RepoBtn;