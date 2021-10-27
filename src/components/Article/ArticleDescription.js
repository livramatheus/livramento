import DOMPurify from "dompurify";

function ArticleDescription(props) {
    
    let { description } = props;

    return (
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}></div>
    );
}

export default ArticleDescription;