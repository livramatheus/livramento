import { Link } from "react-router-dom";

function LatestProjectsListItemLink(props) {

    let { idProj } = props;

    return (
        <div>
            <Link to={`/projects/${idProj}`} className="btn">View More</Link>
        </div>
    );
}

export default LatestProjectsListItemLink;