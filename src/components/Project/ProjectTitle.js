function ProjectTitle(props) {

    let { title, date } = props;

    return (
        <div className="article-title">
            <h1>{title}</h1>
            <span>
                <span className="weak-text">Launched {date}</span>
            </span>
        </div>
    );
}

export default ProjectTitle;