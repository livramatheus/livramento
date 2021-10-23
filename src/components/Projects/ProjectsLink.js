import { useRouteMatch, Link } from "react-router-dom";

function ProjectsLink(props) {

    let { url } = useRouteMatch();
    let { idProj } = props;

    return (
        <div>
            <Link to={`${url}/${idProj}`} className="btn">View More</Link>
        </div>
    );
}

export default ProjectsLink;