import { Link } from "react-router-dom";
import { ReactComponent as Img } from '../assets/images/matheus-2.svg'
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';

function LearningPage() {

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, []);

    return (
        <article>
            <Helmet>
                <title>Learning - Livramento.dev</title>
                <meta name="description" content="Learning - Matheus do Livramento" />
                <meta name="keywords" content="Matheus, Livramento, portfolio, web, developer, full, stack" />
                <meta name="author" content="Matheus do Livramento" />
            </Helmet>
            <div>
                <h1 className="header-article-title">What am I learning?</h1>

                <div className="learning-intro">
                    <Img data-aos="fade-right" data-aos-once="true" />
                    <p>
                        Since mid 2021 I'm focusing in a <strong>JavaScript stack</strong>. As I already had a good JS background, I'm not having much trouble dealing with <strong>React and Node.js</strong>, which are my main focus right now.
                    </p>
                    <p>
                        As I was a PHP guy who always built things from scratch, React and Node.js doesn't cease to impress me on how easy it is to develop big and complex projects by simply dealing with third party components and libraries.
                    </p>
                    <p>
                        Continuing my JavaSript journey, I'm looking forward to learn <strong>Next.js</strong>, which excites me a lot on how this technology can help to develop apps that runs in such an elegant and performatic way. As soon as I feel confident with Next.js, my next goal is to jump into React Native: I think that being able to develop mobile apps is an essential knowledge for a complete programmer.
                    </p>
                    <p>
                        Lastly, to put a cherry on top of my JavaSript cake, Im looking forward on learning <strong>TypeScript</strong>, which is gaining a lot of popularity recently.
                    </p>
                </div>

                <div className="learning-checklist">
                    <div className="learning-checklist-section">
                        <h2>My main learning goals:</h2>

                        <div className="learning-checklist-section-list">
                            <ul>
                                <li>Next.js</li>
                                <li>React Native</li>
                                <li>TypeScript</li>
                                <li>NoSql databases</li>
                            </ul>
                        </div>

                        <h2>Other tasks:</h2>
                        <div className="learning-checklist-section-list">
                            <ul>
                                <li>Rewrite livramento.dev in Next.js to improve maintainability (currently built with React)</li>
                                <li>Rewrite my <Link to="/portfolio/2" className="link">cryptocurrency project</Link> in Next.js to fix SEO and performance issues (currently built with React)</li>
                                <li>Add more content to my <Link to="/portfolio/2" className="link">cryptocurrency project</Link></li>
                                <li>Improve my knowledge about advanced CSS selectors</li>
                                <li>Improve my knowledge in CSS flexbox</li>
                                <li>Study Node.js authentication</li>
                                <li>Study git workflow</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default LearningPage;