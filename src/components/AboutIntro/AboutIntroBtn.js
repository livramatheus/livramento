import { Link } from "react-router-dom";

function AboutIntroBtn() {
    return (
        <div className="about-intro-btn">
            <Link to="/about" className="btn">More about Matheus</Link>
        </div>
    );
}

export default AboutIntroBtn;