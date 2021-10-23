import { useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Article from "../components/Article";
import Articles from "../components/Articles";

export default function ArticlesPage() {

    const [artItem, setArtItem] = useState(
        [
            { idArt: 1, title: 'Ullamco laboris nisi ut aliquip', date: '28/07/2021', abstract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { idArt: 2, title: 'Sed do eiusmod', date: '20/04/2021', abstract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { idArt: 3, title: 'Lorem ipsum dolor sit amet', date: '12/01/2021', abstract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        ]
    );

    let { path } = useRouteMatch();

    return (
        <>
            <div className="header1">Articles</div>

            <Switch>
                <Route exact path={path}>
                    {
                        artItem.map(
                            (item) => {
                                return <Articles
                                    idArt={item.idArt}
                                    title={item.title}
                                    date={item.date}
                                    abstract={item.abstract}
                                    key={item.idArt}
                                />
                            }
                        )
                    }
                </Route>

                <Route path={`${path}/:articleId`}>
                    <Article />
                </Route>
            </Switch>
        </>
    );

}