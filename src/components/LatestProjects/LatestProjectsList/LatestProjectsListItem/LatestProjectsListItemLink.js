import { Link } from "react-router-dom";

function LatestProjectsListItemLink(props) {

    let { id } = props;

    return <Link to={`/portfolio/${id}`} className="btn">View More</Link>;
}

export default LatestProjectsListItemLink;