import { Route, Switch, useRouteMatch } from "react-router-dom";
import { useState } from "react";

import ProjectPreview from "./ProjectPreview";
import Project from "./Project";

export default function Projects() {

    const [projItem, setProjItem] = useState(
        [
            {idProj: 1, title: 'Yamch'         , abstract: 'Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', technologies: 'Technologies used: HTML, CSS, JavaScript'},
            {idProj: 2, title: 'Second Project', abstract: 'Lorem Teste este projeto é um teste Lorem ipsum.'                                                                                             , technologies: 'Technologies used: React, CSS'}
        ]);

    let { path } = useRouteMatch();

    return (
        <>
            <div className="header1">Projects</div>

            <Switch>
                <Route exact path={`${path}`}>
                    {
                        projItem.map((item) => {
                            return (
                                <ProjectPreview 
                                    idProj={item.idProj}
                                    title={item.title}
                                    abstract={item.abstract}
                                    technologies={item.technologies}
                                    key={item.idProj}
                                />
                            )
                        })
                    }
                </Route>
                <Route path={`${path}/:projId`}>
                    <Project />
                </Route>
            </Switch>
        </>
    );
}