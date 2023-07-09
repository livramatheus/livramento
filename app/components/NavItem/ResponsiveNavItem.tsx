import Link from "next/link";
import { IconType } from "react-icons";

interface IProps {
  title: string;
  href: string;
  Icon: IconType;
  setMenuOpen: (menuOpen: boolean) => void;
}

const ResponsiveNavItem = (props: IProps) => {
  const { title, href, Icon, setMenuOpen } = props;

  return (
    <div className="flex gap-4 items-center">
      <Icon className="text-xl" />
      <Link onClick={() => setMenuOpen(false)} className="hover:underline" href={href}>
        {title}
      </Link>
    </div>
  )
}

export default ResponsiveNavItem;