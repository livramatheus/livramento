import { IconType } from "react-icons";

interface IProps {
  title: string;
  desc: string;
  Icon: IconType;
}

const SkillCard = (props: IProps) => {
  const { title, desc, Icon } = props;

  return (
    <div className="flex gap-6 border border-zinc-500 rounded-lg p-6">
      <div className="flex items-center">
        <Icon className="text-2xl"/>
      </div>

      <div className="flex flex-col justify-center">
        <b className="text-lg">{title}</b>
        <div className="text-zinc-400">{desc}</div>
      </div>
    </div>
  );
}

export default SkillCard;