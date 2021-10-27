import { Switch, Route, useRouteMatch } from "react-router-dom";
import Article from "../components/Article";
import Articles from "../components/Articles";

export default function ArticlesPage() {

    let { path } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path}>
                <Articles />
            </Route>

            <Route path={`${path}/:articleId`}>
                <Article />
            </Route>
        </Switch>
    );

}