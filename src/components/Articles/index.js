import { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
import { getArticles } from "../../services/ServicesArticles";
import ArticlesText from "./ArticlesText";
import ArticlesHeader from "./ArticlesHeader";
import ArticlesLink from "./ArticlesLink";

export default function Articles(props) {

    const { url } = useRouteMatch();
    const [artItem, setArtItem] = useState();

    useEffect(() => {
        getArticles().then((result) => {
            setArtItem(result.data);
        }).catch((error) => {
            console.log('There was an error!', error.message);
        });
    }, []);

    return (
        <>
            <h1>Articles</h1>

            <div className="article-preview">
                {
                    artItem && (
                        artItem.map((e) => {
                            return (
                                <>
                                    <Helmet>
                                        <title>Articles - Livramento.dev</title>
                                        <meta name="description" content="Articles - Matheus do Livramento" />
                                        <meta name="keywords" content="Matheus, Livramento, portfolio, web, developer, full, stack" />
                                        <meta name="author" content="Matheus do Livramento" />
                                    </Helmet>
                                    <ArticlesHeader id={e.id} title={e.title} date={e.date} url={url} />
                                    <ArticlesText abstract={e.abstract} />
                                    <ArticlesLink id={e.id} url={url} />
                                </>
                            )
                        })
                    )
                }
            </div>
        </>
    );

}