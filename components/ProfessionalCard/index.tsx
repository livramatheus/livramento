import React from 'react';
import { IconType } from 'react-icons';

interface IProps {
  title: string;
  location: string;
  desc: string;
  skills?: string;
  timespan: string;
  Icon: IconType;
}

function ProfessionalCard(props: IProps) {
  const {
    title, location, desc, skills = null, timespan, Icon,
  } = props;

  return (
    <div className="flex gap-6 border border-zinc-500 rounded-lg p-6">
      <div className="flex items-center">
        <Icon className="text-2xl" />
      </div>

      <div className="flex flex-col gap-3 justify-center">
        <div>
          <b className="text-lg">{title}</b>
          <div className="italic">{location}</div>
          <div className="italic">{timespan}</div>
        </div>
        <div className="text-zinc-400">{desc}</div>

        {
          skills && (
            <div className="text-zinc-400">{skills}</div>
          )
        }
      </div>
    </div>
  );
}

export default ProfessionalCard;
