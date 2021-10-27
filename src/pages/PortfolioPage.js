import { useRouteMatch } from "react-router";
import { Route, Switch } from "react-router-dom";
import Project from "../components/Project";
import Projects from "../components/Projects";

export default function PortfolioPage() {

    const { path } = useRouteMatch();
    
    return (
        <>
            <Switch>
                <Route exact path={`${path}`}>
                    <Projects />
                </Route>
                
                <Route path={`${path}/:projId`}>
                    <Project />
                </Route>
            </Switch>
        </>
    );
}