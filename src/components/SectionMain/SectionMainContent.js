import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { isMobile } from 'react-device-detect';

function SectionMainContent() {

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, [])

    return (
        <p id="section-main-content" data-aos={isMobile ? 'fade-up' : 'fade-right'} data-aos-once="true">
            I welcome you to my website! Here you will get to know more about me, about my work and what are my next steps into web development!
        </p>
    );
}

export default SectionMainContent;