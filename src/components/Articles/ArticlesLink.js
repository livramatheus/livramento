import { Link } from "react-router-dom";

function ArticlesLink(props) {

    let { url, idArt } = props;

    return (<Link to={`${url}/${idArt}`} className="small-link">Read More...</Link>);
}

export default ArticlesLink;