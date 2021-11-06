import Languages from '../components/Languages';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import { useState } from 'react';
import { Popover } from '@material-ui/core';
import { Helmet } from 'react-helmet';

export default function AboutPage() {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? `popover-resume` : undefined;

    return (
        <>
            <Helmet>
                <title>About - Livramento.dev</title>
                <meta name="description" content="About - Matheus do Livramento" />
                <meta name="keywords" content="Matheus, Livramento, portfolio, web, developer, full, stack" />
                <meta name="author" content="Matheus do Livramento" />
            </Helmet>
            <article>
                <h1>About</h1>

                <div className="project-description">
                    <p>I'm <strong>Matheus do Livramento</strong>, 26 years old, living in Santa Catarina, Brazil since I was born.</p>
                    <p>Since I was a kid, technology has always caught my attention. Today, as a professional I can securely affirm that working with and developing technology is the right place for me.</p>
                    <p>I'm a <strong>full stack programmer</strong> and web development teacher with a <strong>bachelor degree in computer science</strong> who loves to code and learn new technologies that makes programming cleaner.</p>
                    <p>Below you can see an overview about my skills and professional life, however, you can also download my resume:</p>

                    <Popover
                        id={id}
                        open={open}
                        onClose={handleClose}
                        anchorEl={anchorEl}
                        classes={{ paper: 'popover-style' }}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <div>
                            <a>Portuguese</a>
                        </div>
                        <div>
                            <a>English</a>
                        </div>
                    </Popover>

                    <a className="btn" onClick={handleClick} aria-describedby={id} style={{ margin: 'var(--hugegap) auto' }}>Download Resume</a>

                    <h2>Technical Skills</h2>

                    <p>I jumped into web development more than 12 years ago when I participated in my first Design & Web course. Three years later I started to learn Java and C++ in college. As time went on, I transitioned to PHP and JavaScript and now I'm specializing on a JavaScript stack, since it excites me a lot on how productive it is.</p>
                    <p>Below you can see more detailed info about my skills:</p>

                    <Skills />

                    <h2>Professional Carreer</h2>

                    <p>When I was 16 I got my first job as an Office Assistant at Rio do Sul’s town hall. Today, 10 years later, I'm a <strong>professional full-stack developer</strong> and a web development teacher that had more than 150 students over the last 3 years.</p>
                    <p>Below you can see my professional career timeline:</p>

                    <Timeline />

                    <h2>Languages I speak</h2>

                    <p>Portuguese is my main language, however, as I grew up as a “tech/gamer kid”, English was part of my daily life, and learning it just came naturally.</p>

                    <blockquote>
                        <em>
                            “I recall that back when I was 12, after every daily session of online RPG gaming, I ran straight into my English dictionary and started to search and learn every unknown word that appeared in the game.”
                        </em>
                    </blockquote>

                    <br />

                    <p>
                        <em>Ps. this entire website was written directly in English by myself.</em>
                    </p>

                    <br />

                    <p>Check out below my language abilities:</p>

                    <Languages />
                </div>
            </article>
        </>
    );
}