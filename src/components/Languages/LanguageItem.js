import { Line } from "rc-progress";

export default function LanguageItem(props) {
  const { language, description, percentage } = props;

  return (
    <div className="language-item">
      <div className="language-desc">
        <h2>{language}</h2>
        
        <div className="desc-itm">
          {description.map((e, id) => {
            return <p key={id}>{e}</p>;
          })}
        </div>
      </div>
      <div className="language-data">
        <h2>{`${percentage / 10}/10`}</h2>
        <Line
          percent={percentage}
          strokeWidth="4"
          trailWidth="4"
          strokeColor="var(--text1)"
          trailColor="var(--blue3)"
          strokeLinecap="round"
        />
      </div>
    </div>
  );
}
