function LatestProjectsListItemContent(props) {

    let { desc } = props;

    return (
        <div className="latest-projects-body-item-desc">
            {desc}
        </div>
    );
}

export default LatestProjectsListItemContent;