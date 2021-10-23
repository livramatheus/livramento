import LatestArticlesItemElmContent from "./LatestArticlesItemElmContent";
import LatestArticlesItemElmImg from "./LatestArticlesItemElmImg";

function LatestArticlesItemElm() {
    return (
        <div className="section-latest-articles-body">
            <LatestArticlesItemElmImg />

            <LatestArticlesItemElmContent />
        </div>
    );
}

export default LatestArticlesItemElm;