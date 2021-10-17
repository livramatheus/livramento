import { useParams } from "react-router-dom";

export default function Article() {

    let { articleId } = useParams();

    return (
        <h1>
            Você está vendo o artigo {articleId}!
        </h1>
    );
}