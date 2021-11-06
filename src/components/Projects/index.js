import { useState, useEffect } from 'react';
import ProjectsHeader from './ProjectsHeader';
import ProjectsLink from './ProjectsLink';
import ProjectsTechs from './ProjectsTechs';
import ProjectsText from './ProjectsText';
import { getProjects } from "../../services/ServicesProjects";
import Aos from 'aos';
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet';

export default function Projects(props) {

    const [projItem, setProjItem] = useState();

    useEffect(() => {
        Aos.init({
            duration: 1000
        });

        getProjects().then((result) => {
            setProjItem(result.data);
        }).catch((error) => {
            console.log('There was an error!', error.message);
        })
    }, []);

    return (
        <>
            <Helmet>
                <title>Portfolio - Livramento.dev</title>
                <meta name="description" content="Portfolio - Matheus do Livramento" />
                <meta name="keywords" content="Matheus, Livramento, portfolio, web, developer, full, stack" />
                <meta name="author" content="Matheus do Livramento" />
            </Helmet>
            
            <h1>Portfolio</h1>
            {
                projItem && projItem.map((e, id) => {
                    return (
                        <article className="project-preview" data-aos="fade-up" data-aos-once="true" key={id}>
                            <ProjectsHeader title={e.title} />
                            <ProjectsText abstract={e.abstract} />
                            <ProjectsTechs technologies={e.technologies} />
                            <ProjectsLink id={e.id} />
                        </article>
                    )
                })
            }
        </>
    );

}