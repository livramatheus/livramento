import LatestProjectsListItemContent from "./LatestProjectsListItemContent";
import LatestProjectsListItemLink from "./LatestProjectsListItemLink";
import LatestProjectsListItemTitle from "./LatestProjectsListItemTitle";

function LatestProjectsListItem(props) {

    let { title, desc, idProj} = props;

    return (
        <div className="latest-projects-body-item" >
            <LatestProjectsListItemTitle title={title} />
            <LatestProjectsListItemContent desc={desc} />
            <LatestProjectsListItemLink idProj={idProj} />

        </div>
    );
}

export default LatestProjectsListItem;