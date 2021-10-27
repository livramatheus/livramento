import { useParams, useHistory } from "react-router-dom";
import { getProject } from "../../services/ServicesProjects";
import { useEffect, useState } from "react";
import ProjectTitle from './ProjectTitle';
import ProjectAbstract from './ProjectAbstract';
import ProjectDescription from './ProjectDescription';
import format from "date-fns/format";
import ProjectRepo from "./ProjectRepo";

export default function Project() {

    const { projId } = useParams();
    const history = useHistory();
    const [projectData, setProjectData] = useState();

    useEffect(() => {
        getProject(projId).then((result) => {
            result.data.launchdate = format(new Date(result.data.launchdate), "PPPP");
            setProjectData(result.data);
        }).catch((error) => {
            history.push('/404');
        });
    }, [projId]);

    return (
        projectData ? (
            <article>
                <ProjectTitle title={projectData.title} date={projectData.launchdate} />
                {projectData.gitaddr && <ProjectRepo gitaddr={projectData.gitaddr} />}
                <ProjectAbstract abstract={projectData.abstract} />
                <ProjectDescription description={projectData.description} />
            </article>
        ) : (
            <h1>Loading...</h1>
        )
    );

}