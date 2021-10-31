import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

function LatestProjectsTitle() {

    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, []);

    return <h1 id="latest-projects-title" data-aos="fade-up" data-aos-once="true">Latest projects</h1>;
}

export default LatestProjectsTitle;