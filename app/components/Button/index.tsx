import Link from "next/link";

interface IProps {
  text: string;
  dest: string;
}

const Button = (props: IProps) => {
  return (
    <Link
      href={props.dest}
      className="border-2 border-zinc-600 w-56 rounded-md py-2 text-center text-zinc-200 font-bold hover:bg-zinc-800"
    >
      {props.text}
    </Link>
  )
}

export default Button;