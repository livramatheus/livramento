import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

function SectionMainTitle() {

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, [])

    return (
        <h1 id="section-main-title" data-aos="fade-right" data-aos-once="true">
            Matheus do Livramento, Lorem ipsum dolor sit amet, consectetur.
        </h1>
    );
}

export default SectionMainTitle;