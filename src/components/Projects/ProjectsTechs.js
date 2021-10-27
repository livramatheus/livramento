function ProjectsTechs(props) {

    let { technologies } = props;

    return (
        <div className="project-preview-techs">
            Technologies used: {technologies}
        </div>
    );
}

export default ProjectsTechs;