import { Link } from "react-router-dom";

export default function LatestProjectsPreview(props) {

    return (
        <div className="latest-projects-body-item" >
            <h2 className="latest-projects-body-item-title">
                {props.title}
            </h2>
            <div className="latest-projects-body-item-desc">
                {props.desc}
            </div>
            <div>
                <Link to={`/projects/${props.idProj}`} className="btn">View More</Link>
            </div>
        </div>
    );

}