import Languages from '../components/Languages';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import { useState } from 'react';
import { Popover } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import { FaDownload } from "react-icons/fa";

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
                <h1 className="header-article-title" >About</h1>

                <div className="project-description">
                    <p>I'm <strong>Matheus do Livramento</strong>, 27 years old, living in Santa Catarina, Brazil since I was born.</p>
                    <p>Since I was a kid technology has always caught my attention. Today, as a professional, I can safely affirm that working with and developing technology was the correct choice.</p>
                    <p>I'm a <strong>full stack developer</strong> and web development teacher with a <strong>bachelor degree in computer science</strong> who loves to code and learn new technologies that makes programming cleaner.</p>
                    <p>Below you can see an overview about my skills and professional life. You can also download my resume below:</p>

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
                            <a className="link" href="https://drive.google.com/file/d/12bEHx_lNWTDdKxA6e-bcbutT0v8zdHgD/view?usp=sharing" target="_blank" rel="noreferrer">Portuguese</a>
                        </div>
                        <div>
                            <a className="link" href="https://drive.google.com/file/d/1rAD_frv-R0rdaRTOZfTMVtixZKvjQvV7/view?usp=sharing" target="_blank" rel="noreferrer">English</a>
                        </div>
                    </Popover>

                    <span className="btn btn-download-resume" onClick={handleClick} aria-describedby={id} style={{ margin: 'var(--hugegap) auto' }}>
                        <FaDownload />
                        <span>Download Resume</span>
                    </span>

                    <h2>Technical Skills</h2>

                    <p>I jumped into web development more than 12 years ago when I participated in my first Design & Web course. Three years later I started to learn Java and C++ in college. As time went on, I transitioned to PHP, and now I'm specializing on a JavaScript stack, since it excites me a lot on how productive it is.</p>
                    <p>Below you can see more detailed info about my skills:</p>

                    <Skills />

                    <h2>Professional Carreer</h2>

                    <p>When I was 16 I got my first job as an Office Assistant at Rio do Sul’s town hall. Today, 10 years later, I'm a <strong>professional full-stack developer</strong> and a web development teacher that had more than 150 students over the last 3 years.</p>
                    <p>Below you can see my professional career timeline:</p>

                    <Timeline />

                    <h2>Languages I speak</h2>

                    <p>Portuguese is my main language, however, as I grew up as a “tech/gamer kid”, English was part of my daily life, and learning it just came naturally.</p>

                    <p>Fast forward to January 2022, I got my first job that put my english skills to the test: I had to report the status of what I'm working on regularly to the international team through our Agile-based meetings. On top of that I also had to use english skills to ask questions to senior devs and product specialists.</p>

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