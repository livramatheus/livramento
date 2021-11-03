import { ReactComponent as MatheusCartoon } from "../../assets/images/matheus_cartoon.svg";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { isMobile } from 'react-device-detect';

function SectionMainImg() {
    
    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, [])

    return (
        <div className="section-main-img" data-aos={isMobile ? 'fade-up' : 'fade-left'} data-aos-once="true">
            <MatheusCartoon />
        </div>
    );
}

export default SectionMainImg;