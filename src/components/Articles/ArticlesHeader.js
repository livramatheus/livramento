import { Link } from "react-router-dom";

function ArticlesHeader(props) {

    let { idArt, title, date, url } = props;

    return (
        <div>
            <h1 className="header2">
                <Link to={`${url}/${idArt}`} className="link">{title}</Link>
            </h1>
            <div className="small-blue-text">{date}</div>
        </div>
    );
}

export default ArticlesHeader;