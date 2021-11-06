import { FaUserGraduate, FaCode, FaLaptopCode } from 'react-icons/fa';

function AboutIntroAttr() {

    return (
        <div className="about-intro-attr" >
            <div className="about-intro-attr-item">
                <div>
                    <FaUserGraduate size="1.9rem"/>
                </div>
                <div>Computer Science Bachelor</div>
            </div>
            <div className="about-intro-attr-item">
                <div>
                    <FaCode size="1.9rem"/>
                </div>
                <div>3+ Years of experience</div>
            </div>
            <div className="about-intro-attr-item">
                <div>
                    <FaLaptopCode size="1.9rem"/>
                </div>
                <div>8+ Web Technologies</div>
            </div>
        </div>
    );
}

export default AboutIntroAttr;