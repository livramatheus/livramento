import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticle } from "../../services/ServicesArticles";
import ArticleTitle from "./ArticleTitle";
import ArticleDescription from "./ArticleDescription";
import ArticleAbstract from "./ArticleAbstract";

export default function Article() {

    let { articleId } = useParams();
    const [articleData, setArticleData] = useState();
    const history = useHistory();

    useEffect(() => {
        getArticle(articleId).then((result) => {
            setArticleData(result.data);
        }).catch((error) => {
            history.push("/404");
        });
    }, [articleId]);

    return (
        articleData ? (
            <article>
                <Helmet>
                    <title>{articleData.title} - Livramento.dev</title>
                    <meta name="description" content={`${articleData.title} - Matheus do Livramento`} />
                    <meta name="keywords" content="Matheus, Livramento, portfolio, web, developer, full, stack" />
                    <meta name="author" content="Matheus do Livramento" />
                </Helmet>

                <ArticleTitle title={articleData.title} date={articleData.date}/>
                
                <ArticleAbstract abstract={articleData.abstract} />

                <ArticleDescription description={articleData.description} />
            </article>
        ) : (<h1>Loading...</h1>)
    );
}