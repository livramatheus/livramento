import { useRouteMatch, Link } from "react-router-dom";

function ProjectsLink(props) {

    let { url } = useRouteMatch();
    let { id } = props;

    return (
        <div className="btn-project">
            <Link to={`${url}/${id}`} className="btn">View More</Link>
        </div>
    );
}

export default ProjectsLink;