import React from 'react';

interface IProps {
  title: string;
  align?: string;
}

function SectionTitle({ title, align = 'center' }: IProps) {
  return <h2 className={`text-zinc-200 text-${align} text-4xl font-bold`}>{title}</h2>;
}

export default SectionTitle;
