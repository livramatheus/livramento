import React from 'react';
import Link from 'next/link';

interface IProps {
  title: string;
  href: string;
}

function NavItem(props: IProps) {
  const { title, href } = props;

  return <Link className="hover:underline" href={href}>{title}</Link>;
}

export default NavItem;
