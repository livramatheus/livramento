import { Link } from 'react-router-dom';

import CSS3 from '../imagens/tech-icons/css3.svg';
import ImgDb from '../imagens/tech-icons/db.svg';
import ImgFirebase from '../imagens/tech-icons/firebase.svg';
import ImgHTML5 from '../imagens/tech-icons/html5.svg';
import ImgJavaScript from '../imagens/tech-icons/js.svg';
import ImgPHP from '../imagens/tech-icons/php.svg';
import ImgReact from '../imagens/tech-icons/react.svg';

export default function LatestArticlesPreview() {

    return (
        <>
            <div className="section-latest-articles-body">
                <div className="section-latest-articles-image">
                    <img src={CSS3} alt="CSS3" title="CSS3" className="tech-icon-small" />
                </div>

                <div className="section-latest-articles-body-content">
                    <Link to="/articles/1" className="section-latest-articles-body-content-title link">This Lorem Ipsum was made with JavaScript</Link>
                    <div className="small-blue-text">Resumo de Lorem Ipsum</div>
                </div>
            </div>

            <div className="section-latest-articles-body">
                <div className="section-latest-articles-image">
                    <img src={ImgDb} alt="Database" title="Database" className="tech-icon-small" />
                </div>

                <div className="section-latest-articles-body-content">
                    <Link to="/articles/2" className="section-latest-articles-body-content-title link">This React was developed by Matheus test</Link>
                    <div className="small-blue-text">This is a brief description about Lorem</div>
                </div>
            </div>

            <div className="section-latest-articles-body">
                <div className="section-latest-articles-image">
                    <img src={ImgFirebase} alt="Firebase" title="Firebase" className="tech-icon-small" />
                </div>

                <div className="section-latest-articles-body-content">
                    <Link to="/articles/3" className="section-latest-articles-body-content-title link">This is the third article</Link>
                    <div className="small-blue-text">Again, since 2021 was developed in React</div>
                </div>
            </div>

            <div className="section-latest-articles-body">
                <div className="section-latest-articles-image">
                    <img src={ImgHTML5} alt="HTML5" title="HTML5" className="tech-icon-small" />
                </div>

                <div className="section-latest-articles-body-content">
                    <Link to="/articles/3" className="section-latest-articles-body-content-title link">This Lorem Ipsum was made with JavaScript</Link>
                    <div className="small-blue-text">Resumo de Lorem Ipsum</div>
                </div>
            </div>

            <div className="section-latest-articles-body">
                <div className="section-latest-articles-image">
                    <img src={ImgJavaScript} alt="Java Script" title="Java Script" className="tech-icon-small" />
                </div>

                <div className="section-latest-articles-body-content">
                    <Link to="/articles/4" className="section-latest-articles-body-content-title link">This React was developed by Matheus test</Link>
                    <div className="small-blue-text">This is a brief description about Lorem</div>
                </div>
            </div>

            <div className="section-latest-articles-body">
                <div className="section-latest-articles-image">
                    <img src={ImgPHP} alt="PHP" title="PHP" className="tech-icon-small" />
                </div>

                <div className="section-latest-articles-body-content">
                    <Link to="/articles/4" className="section-latest-articles-body-content-title link">This is the third article</Link>
                    <div className="small-blue-text">Again, since 2021 was developed in React</div>
                </div>
            </div>

            <div className="section-latest-articles-body">
                <div className="section-latest-articles-image">
                    <img src={ImgReact} alt="React" title="React" className="tech-icon-small" />
                </div>

                <div className="section-latest-articles-body-content">
                    <Link to="/articles/5" className="section-latest-articles-body-content-title link">This is the third article</Link>
                    <div className="small-blue-text">Again, since 2021 was developed in React</div>
                </div>
            </div>
        </>
    );

}