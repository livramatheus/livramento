function ProjectsHeader(props) {

    let { title } = props;

    return (
        <div>
            <h1 className="header2">
                {title}
            </h1>
        </div>
    );
}

export default ProjectsHeader;