import AboutIntroTitle from "./AboutIntroTitle";
import AboutIntroText from "./AboutIntroText";
import AboutIntroAttr from "./AboutIntroAttr";
import AboutIntroBtn from "./AboutIntroBtn";
import AboutIntroImg from "./AboutIntroImg";
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

function AboutIntro() {

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, []);

    return (
        <div className="about-intro" data-aos="fade-up" data-aos-once="true">
            <AboutIntroTitle />

            <div className="about-intro-body">
                <AboutIntroImg />
                <div className="about-intro-data">
                    <AboutIntroText />
                    <AboutIntroAttr />
                    <AboutIntroBtn />
                </div>

            </div>
        </div>
    );
}

export default AboutIntro;