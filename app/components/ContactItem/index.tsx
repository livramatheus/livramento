import { IconType } from "react-icons";

interface IProps {
  title: string;
  desc: string;
  Icon: IconType;
}

const ContactItem = (props: IProps) => {

  const { title, desc, Icon } = props;

  return (
    <div className="flex gap-5 items-center">
      <Icon className="text-zinc-200 text-4xl" />

      <div className="flex flex-col">
        <span className="text-zinc-200 text-2xl">
          {title}
        </span>
        <span className="text-zinc-500">
          {desc}
        </span>
      </div>
    </div>
  );
}

export default ContactItem;