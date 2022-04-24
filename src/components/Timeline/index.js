import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaDesktop } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

export default function Timeline() {
    const boxStyle = {
        background: "var(--blue2)",
        color: "var(--text1)",
        boxShadow: "none",
        borderLeft: "8px solid #CCA9F4"
    };

    const arrowStyle = {
        display: "none"
    };

    return (
        <VerticalTimeline className="timeline-main">
            <VerticalTimelineElement
                contentStyle={boxStyle}
                contentArrowStyle={arrowStyle}
                date="2022 - Present"
                iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
                icon={<FaCode />}
                dateClassName="date-timeline"
            >
                <h3>Back-end Software Engineer (Remote)</h3>
                <span className="desc-itm">Symplicity, Arlington, VA - USA</span>
                <p className="desc-timeline">
                    In charge of software engineering a product for higher education.
                    In constant contact with the international team.
                </p>
                <p className="desc-timeline">PHP | MySQL | Agile Methodology</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={boxStyle}
                contentArrowStyle={arrowStyle}
                date="2018 - 2021"
                iconStyle={{ background: "var(--blue5)", color: "#fff" }}
                icon={<FaChalkboardTeacher />}
                dateClassName="date-timeline"
            >
                <h3>Full Stack Development Instructor</h3>
                <span className="desc-itm">IPM Sistemas, Rio do Sul, SC</span>
                <p className="desc-timeline">
                    In charge of training/tutoring newly hired programmers by lecturing
                    Web Development classes.
                </p>
                <p className="desc-timeline">HTML | CSS | JavaScript | PHP | PostgreSQL | PHP Framework</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={boxStyle}
                contentArrowStyle={arrowStyle}
                date="2017 - 2018"
                iconStyle={{ background: "var(--blue5)", color: "#fff" }}
                icon={<FaDesktop />}
                dateClassName="date-timeline"
            >
                <h3>HR business rule instructor</h3>
                <span className="desc-itm">IPM Sistemas, Rio do Sul, SC</span>
                <p className="desc-timeline">
                    In charge of training/tutoring employees that were hired to work with
                    the Human Resources software.
                </p>
                <p className="desc-timeline">Public administration software | Human Resources</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={boxStyle}
                contentArrowStyle={arrowStyle}
                date="2017"
                iconStyle={{ background: "var(--blue5)", color: "#fff" }}
                icon={<FaGraduationCap />}
                dateClassName="date-timeline"
            >
                <h3>Bachelor degree in Computer Science</h3>
                <span className="desc-itm">Instituto Federal Catarinense, Rio do Sul, SC</span>
                <p className="desc-timeline">
                    Graduated in computer science, reaching maximum grade in the <a href="https://drive.google.com/file/d/1VsHvTJDwGn4vUQScyiBjY_rh2zSOYPOb/view?usp=sharing" target="_blank" rel="noreferrer">final
                    thesis</a>, which portrayed about Artificial Intelligence.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={boxStyle}
                contentArrowStyle={arrowStyle}
                date="2016 - 2017"
                iconStyle={{ background: "var(--blue5)", color: "#fff" }}
                icon={<FaRegListAlt />}
                dateClassName="date-timeline"
            >
                <h3>Software Quality Assurance</h3>
                <span className="desc-itm">IPM Sistemas, Rio do Sul, SC</span>
                <p className="desc-timeline">
                    In charge of testing the Human Resources software to detect and
                    catalog errors. Also in charge of writing and executing test cases.
                </p>
                <p className="desc-timeline">Quality Assurance | Human Resources Software</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={boxStyle}
                contentArrowStyle={arrowStyle}
                date="2014 - 2016"
                iconStyle={{ background: "var(--blue5)", color: "#fff" }}
                icon={<FaCartPlus />}
                dateClassName="date-timeline"
            >
                <h3>Office Assistant</h3>
                <span className="desc-itm">Rio do Sul, SC</span>
                <p className="desc-timeline">
                    In charge of managing the e-commerce platform and leading marketing
                    campaigns on social media.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={boxStyle}
                contentArrowStyle={arrowStyle}
                date="2011 ~ 2014"
                iconStyle={{ background: "var(--blue5)", color: "#fff" }}
                icon={<FaBuilding />}
                dateClassName="date-timeline"
            >
                <h3>Administrative assistant</h3>
                <span className="desc-itm">Town Hall, Rio do Sul, SC</span>
                <p className="desc-timeline">
                    In charge of assorted office services, like register traffic tickets,
                    catalog towed cars and organize old files.
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
}
