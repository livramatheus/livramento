import React from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';

interface IProps {
  text: string;
  dest: string;
  Icon?: IconType;
  target?: '_blank' | '_self' | '_parent' | '_top';
  className?: string;
}

function Button(props: IProps) {
  const {
    text, dest, Icon = null, target = '_self', className = '',
  } = props;

  return (
    <Link
      href={dest}
      className={`flex justify-center items-center gap-2 border-2 border-zinc-500 w-56 rounded-md py-2 text-center text-zinc-200 hover:bg-zinc-800 ${className}`}
      target={target}
    >
      { Icon && <Icon /> }
      <span>{text}</span>
    </Link>
  );
}

export default Button;
