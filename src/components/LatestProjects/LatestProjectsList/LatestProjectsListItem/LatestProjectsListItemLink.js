import { Link } from "react-router-dom";

function LatestProjectsListItemLink(props) {

    let { id } = props;

    return (
        <div>
            <Link to={`/portfolio/${id}`} className="btn">View More</Link>
        </div>
    );
}

export default LatestProjectsListItemLink;