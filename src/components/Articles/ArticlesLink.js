import { Link } from "react-router-dom";

function ArticlesLink(props) {
    let { id, url } = props;
    
    return (<Link to={`${url}/${id}`} className="small-link">Read More...</Link>);
}

export default ArticlesLink;