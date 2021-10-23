import { Link } from "react-router-dom";

function ContentArticle() {
    return (
        <div className="section-latest-articles-body-content">
            <Link to="/articles/3" className="section-latest-articles-body-content-title link">This Lorem Ipsum was made with JavaScript</Link>
            <div className="small-blue-text">Resumo de Lorem Ipsum</div>
        </div>
    );
}

export default ContentArticle;