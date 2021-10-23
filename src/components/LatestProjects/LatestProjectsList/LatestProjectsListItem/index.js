import { Link } from "react-router-dom";

function LatestProjectsListItem(props) {

    let {idProj, title, desc} = props;

    return (
        <div className="latest-projects-body-item" >
            <h2 className="latest-projects-body-item-title">
                {title}
            </h2>
            <div className="latest-projects-body-item-desc">
                {desc}
            </div>
            <div>
                <Link to={`/projects/${idProj}`} className="btn">View More</Link>
            </div>
        </div>
    );
}

export default LatestProjectsListItem;