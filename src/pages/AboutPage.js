import Languages from '../components/Languages';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';

export default function AboutPage() {

    return (
        <>
            <h1>About</h1>

            <Languages />
            <Timeline />
            <Skills />

            <article className="article">
                <div>
                    <h2>
                        Profissional
                    </h2>
                </div>
                <div className="text">
                    <p className="text-paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p className="text-paragraph">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                <div>
                    <h2>
                        Development
                    </h2>
                </div>

                <div className="text">
                    <p className="text-paragraph">
                        Mauris rhoncus turpis augue, quis mollis diam eleifend sed. Morbi consequat, massa vitae cursus tincidunt, sem enim commodo elit, vel egestas dui mi at metus. Duis ornare magna quis augue vehicula tempor. Fusce imperdiet faucibus vehicula.
                    </p>
                    <p className="text-paragraph">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <p className="text-paragraph">Skills:</p>

                    <ul className="unordered-list">
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>PHP</li>
                    </ul>

                    <p className="text-paragraph">Suspendisse interdum nec nibh vel vehicula. Sed ultricies lacinia nibh, dictum scelerisque nunc eleifend eget. Vestibulum sodales lorem at mi tempus, quis aliquam nisi vehicula. </p>
                </div>

            </article>
        </>
    );
}