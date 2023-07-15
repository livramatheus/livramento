import React from 'react';

interface IProps {
  title: string;
  align?: string;
}

function SectionTitle({ title, align }: IProps) {
  return <h2 className={`text-zinc-200 text-${align} text-4xl font-bold`}>{title}</h2>;
}

SectionTitle.defaultProps = {
  align: 'center',
};

export default SectionTitle;
