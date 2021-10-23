import { useRouteMatch } from "react-router";
import ArticlesText from "./ArticlesText";
import ArticlesHeader from "./ArticlesHeader";
import ArticlesLink from "./ArticlesLink";

export default function Articles(props) {

    let { abstract, idArt, date, title } = props;
    let { url } = useRouteMatch();

    return (
        <article className="article-preview">
            <ArticlesHeader idArt={idArt} title={title} date={date} url={url} />
            <ArticlesText abstract={abstract} />
            <ArticlesLink idArt={idArt} url={url} />
        </article>
    );

}