import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router";

export default function ArticlePreview(props) {

    let { url } = useRouteMatch();

    return (
        <article className="article">
            <div>
                <h1 className="header2">
                    <Link to={`${url}/${props.idArt}`} className="link">{props.title}</Link>
                </h1>
                <div className="small-blue-text">{props.date}</div>
            </div>
            <div className="text">{props.abstract}</div>
            <Link to={`${url}/${props.idArt}`} className="small-link">Read More...</Link>
        </article>
    );

}