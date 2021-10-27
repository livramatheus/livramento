import { Link } from "react-router-dom";
import { format } from "date-fns";

function ArticleTitle(props) {

    let { title, date } = props;

    return (
        <div className="article-title">
            <h1>{title}</h1>
            <span>
                <Link to="/articles" className="link bold">In Articles</Link>, <span className="weak-text">{format(new Date(date), "PPPP")}</span>
            </span>
        </div>
    );
}

export default ArticleTitle;