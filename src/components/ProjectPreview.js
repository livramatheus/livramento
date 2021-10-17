import { useRouteMatch, Link } from 'react-router-dom';

export default function ProjectPreview(props) {

    let { url } = useRouteMatch();

    return (
        <article className="project-preview">
            <div>
                <h1 className="header2">
                    {props.title}
                </h1>
            </div>
            <div className="text">
                {props.abstract}
            </div>
            <div className="project-preview-techs">
                {props.technologies}
            </div>
            <div>
                <Link to={`${url}/${props.idProj}`} className="btn">View More</Link>
            </div>
        </article>
    );

}