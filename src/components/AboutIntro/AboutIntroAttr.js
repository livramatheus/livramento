import { FaUserGraduate } from 'react-icons/fa';

function AboutIntroAttr() {

    return (
        <div className="about-intro-attr" >
            <div className="about-intro-attr-item">
                <div>
                    <FaUserGraduate size="1.9rem"/>
                </div>
                <div>Computer Science</div>
            </div>
            <div className="about-intro-attr-item">
                <div>4+</div>
                <div>Years of experience</div>
            </div>
            <div className="about-intro-attr-item">
                <div>8+</div>
                <div>Web Technologies</div>
            </div>
        </div>
    );
}

export default AboutIntroAttr;