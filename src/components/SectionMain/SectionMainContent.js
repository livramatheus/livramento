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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    );
}

export default SectionMainContent;