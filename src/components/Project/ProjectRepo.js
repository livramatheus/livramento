import ghLogo from '../../assets/images/github-logo.svg';

function ProjectRepo(props) {

    const { gitaddr } = props;

    return (
        <a href={gitaddr} className="gh-btn">
            <img src={ghLogo} alt="GitHub Repository" /> View on GitHub
        </a>
    );
}

export default ProjectRepo;