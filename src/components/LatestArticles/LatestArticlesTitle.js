import { Link } from "react-router-dom";

function LatestArticlesTitle(props) {
    return (
        <div className="section-latest-articles-title">
            <h3 className="header2">Latest articles</h3>
            <Link to="/articles" className="link">Ver mais...</Link>
        </div>
    );
}

export default LatestArticlesTitle;