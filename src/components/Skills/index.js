import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Skills(props) {

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, [])

    const skls = [
        {
            title: "HTML5/CSS3",
            experience: "Advanced",
            topics: ["Flexbox lover"]
        },
        {
            title: "JavaScript",
            experience: "Intermediate-advanced",
            topics: ["Familiar with ES6"]
        },
        {
            title: "React",
            experience: "Intermediate",
            topics: ["Developed various projects", "Functional programming"]
        },
        {
            title: "PHP",
            experience: "Advanced",
            topics: ["OOP", "MVC architecture"]
        },
        {
            title: "Node.js",
            experience: "Intermediate",
            topics: ["MVC architecture"]
        },
        {
            title: "Database",
            experience: "Intermediate",
            topics: ["MySQL", "PostgreSQL"]
        },
        {
            title: "Others",
            experience: "",
            topics: ["Basic Git Workflow", "jQuery", "BIRT", "PHPUnit", "Production Deploys", "NetBeans IDE", "VS Code"]
        }
    ];

    return (
        <div className="skill-card-group">
            {skls.map((e, id) => {
                return (
                    <div className="skill-card" data-aos="fade-up" data-aos-once="true" key={id}>
                        <div className="skill-card-header">
                            <h3>{e.title}</h3>
                            <span className="desc-itm">{e.experience}</span>
                        </div>

                        <div className="skill-card-items">
                            {e.topics.map((e, idt) => {
                                return <span key={idt}>{e}</span>;
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
