import { useRouteMatch, Link } from "react-router-dom";

function ProjectsLink(props) {

    let { url } = useRouteMatch();
    let { id } = props;

    return <Link to={`${url}/${id}`} className="btn">View More</Link>;
}

export default ProjectsLink;