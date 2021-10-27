import DOMPurify from "dompurify";

function ProjectDescription(props) {
    
    let { description } = props;

    return (
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}></div>
    );
}

export default ProjectDescription;