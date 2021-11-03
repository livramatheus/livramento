import { Link } from "react-router-dom";

function AboutIntroBtn() {
    return (
        <div>
            <Link to="/about" className="btn">More about Matheus</Link>
        </div>
    );
}

export default AboutIntroBtn;