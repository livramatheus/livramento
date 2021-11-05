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
            experience: "5 years of experience",
            topics: ["Advanced", "Flexbox lover"]
        },
        {
            title: "JavaScript",
            experience: "3 years of experience",
            topics: ["Intermediate-advanced", "Familiar with ES6"]
        },
        {
            title: "React",
            experience: "1 year of experience",
            topics: ["Intermediate", "Developed various projects", "Functional programming"]
        },
        {
            title: "PHP",
            experience: "3 years of experience",
            topics: ["Advanced", "OOP", "MVC architecture"]
        },
        {
            title: "Node.js",
            experience: "1 year of experience",
            topics: ["Intermediate", "MVC architecture"]
        },
        {
            title: "Database",
            experience: "3 years of experience",
            topics: ["Intermediate", "MySQL", "PostgreSQL"]
        },
        {
            title: "Others",
            experience: "",
            topics: ["Basic Git Workflow", "jQuery", "BIRT", "Production Deploys", "NetBeans IDE", "VS Code"]
        }
    ];

    return (
        <div className="skill-card-group">
            {skls.map((e, id) => {
                return (
                    <div className="skill-card" data-aos="fade-up" data-aos-once="true">
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
