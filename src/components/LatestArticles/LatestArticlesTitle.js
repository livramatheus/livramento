import { Link } from "react-router-dom";

function LatestArticlesTitle(props) {
    return (
        <div className="section-latest-articles-title">
            <h2>Latest articles</h2>
            <Link to="/articles" className="link">See more...</Link>
        </div>
    );
}

export default LatestArticlesTitle;