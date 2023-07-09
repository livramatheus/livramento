import { IconType } from "react-icons";

interface IAboutItmProps {
  title: string;
  Icon: IconType;
}

const AboutItm = (props: IAboutItmProps) => {
  const { title, Icon } = props;

  return (
    <div className="flex flex-1 flex-col items-center text-center gap-5">
      {Icon && <Icon className="text-zinc-200" size="2rem" />}
      <span className="text-zinc-500">{title}</span>
    </div>
  );
}

export default AboutItm;