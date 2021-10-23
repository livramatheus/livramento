function ProjectsTechs(props) {

    let { technologies } = props;

    return (
        <div className="project-preview-techs">
            {technologies}
        </div>
    );
}

export default ProjectsTechs;