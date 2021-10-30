function LatestProjectsListItemContent(props) {

    let { abstract } = props;

    return (
        <div className="latest-projects-body-item-desc">
            {abstract}
        </div>
    );
}

export default LatestProjectsListItemContent;