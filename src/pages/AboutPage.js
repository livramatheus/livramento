import Languages from '../components/Languages';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';

export default function AboutPage() {

    return (
        <>
            <h1>About</h1>

            <article className="about-page-article">
                <p>I'm <strong>Matheus do Livramento</strong>, 26 years old, full stack programmer who loves to code and learn new technologies that makes programming cleaner.</p>

                <h2>Technical Skills</h2>

                <p>I jumped into web development more than 12 years ago when I participated in my first Design & Web course. Then, 3 years later I started to learn Java and C++ in college. As time went on, I transitioned to PHP and JavaScript and now I'm specializing on a JavaScript stack, since it excites me a lot on how productive it is.</p>
                <p>Below you can see more detailed info about my skills:</p>
                
                <Skills />

                <h2>Professional Carreer</h2>

                <Languages />
                <Timeline />

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