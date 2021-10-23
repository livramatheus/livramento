import ProjectsHeader from './ProjectsHeader';
import ProjectsLink from './ProjectsLink';
import ProjectsTechs from './ProjectsTechs';
import ProjectsText from './ProjectsText';

export default function Projects(props) {

    let { idProj, title, abstract, technologies } = props;

    return (
        <article className="project-preview">
            <ProjectsHeader title={title} />
            <ProjectsText abstract={abstract} />
            <ProjectsTechs technologies={technologies} />
            <ProjectsLink idProj={idProj} />
        </article>
    );

}