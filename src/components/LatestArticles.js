import { Link } from 'react-router-dom';
import LatestArticlesBody from './LatestArticlesPreview';

export default function LatestArticles() {

    return (
        <section id="section-latest-articles" >
            <div className="section-latest-articles-title">
                <h3 className="header2">Latest articles</h3>
                <Link to="/articles" className="link">Ver mais...</Link>
            </div>

            <LatestArticlesBody />
        </section>
    );

}