function LatestProjectsListItemTitle(props) {

    let { title } = props;

    return (
        <h2 className="latest-projects-body-item-title">
            {title}
        </h2>
    );
}

export default LatestProjectsListItemTitle;