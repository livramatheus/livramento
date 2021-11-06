import { useParams, useHistory } from "react-router-dom";
import { getProject } from "../../services/ServicesProjects";
import { useEffect, useState } from "react";
import ProjectTitle from './ProjectTitle';
import ProjectAbstract from './ProjectAbstract';
import ProjectDescription from './ProjectDescription';
import ProjectRepo from "./ProjectRepo";
import { Helmet } from 'react-helmet';

export default function Project() {

    const { projId } = useParams();
    const history = useHistory();
    const [projectData, setProjectData] = useState();

    useEffect(() => {
        getProject(projId).then((result) => {
            setProjectData(result.data);
        }).catch((error) => {
            history.push('/404');
        });
    }, [projId]);

    return (
        projectData ? (
            <article id="project">
                <Helmet>
                    <title>{projectData.title} - Livramento.dev</title>
                    <meta name="description" content={`${projectData.title} - Matheus do Livramento`} />
                    <meta name="keywords" content="Matheus, Livramento, portfolio, web, developer, full, stack" />
                    <meta name="author" content="Matheus do Livramento" />
                </Helmet>
                <ProjectTitle title={projectData.title} date={projectData.launchdate} />
                <ProjectAbstract abstract={projectData.abstract} technologies={projectData.technologies} />
                {projectData.gitaddr && <ProjectRepo gitaddr={projectData.gitaddr} />}
                <ProjectDescription description={projectData.description} />
            </article>
        ) : (
            <h1>Loading...</h1>
        )
    );

}