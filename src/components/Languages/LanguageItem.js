import { Line } from "rc-progress";
import { FaInfoCircle } from 'react-icons/fa';
import { Popover } from '@material-ui/core';
import { useState } from "react";

export default function LanguageItem(props) {
  const { language, description, percentage } = props;

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? `popover-${language}` : undefined;

  return (
    <div className="language-item">
      <div className="language-item-header">
        <div className="lang-name">
          <span>{language}</span>
          <FaInfoCircle className="lang-name-info" onClick={handleClick} aria-describedby={id} />
          <Popover
            id={id}
            open={open}
            onClose={handleClose}
            anchorEl={anchorEl}
            classes={{paper: 'popover-style'}}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
          }}
          transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
          }}
          >
            {description.map((e, id) => {
              return <p key={id}>{e}</p>;
            })}
          </Popover>
        </div>
        <div className="lang-percent">{`${percentage / 10}/10`}</div>
      </div>
      <div>
        <Line
          percent={percentage}
          strokeWidth="1"
          trailWidth="1"
          strokeColor="var(--text1)"
          trailColor="var(--blue3)"
          strokeLinecap="round"
        />
      </div>
    </div>
  );
}
