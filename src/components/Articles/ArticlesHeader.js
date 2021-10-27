import { Link } from "react-router-dom";
import { format } from "date-fns";

function ArticlesHeader(props) {

    let { id, title, date, url } = props;

    return (
        <div>
            <h2>
                <Link to={`${url}/${id}`} className="link">{title}</Link>
            </h2>
            <div className="small-blue-text">{format(new Date(date), "PPPP")}</div>
        </div>
    );
}

export default ArticlesHeader;