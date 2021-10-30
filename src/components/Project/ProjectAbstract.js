
function ProjectAbstract(props) {

    let { abstract, technologies } = props;

    return (
        <blockquote>
            <p>{abstract} It was developed with {technologies}</p>
        </blockquote>
    );
}

export default ProjectAbstract;