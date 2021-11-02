import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaDesktop } from "react-icons/fa";
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
        <VerticalTimeline>
            <VerticalTimelineElement
                contentStyle={boxStyle}
                contentArrowStyle={arrowStyle}
                date="2018 - Present"
                iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
                icon={<FaCode />}
                dateClassName="date-timeline"
            >
                <h3>Instructor/Programmer</h3>
                <h4>IPM Sistemas, Rio do Sul, SC</h4>
                <p>
                    In charge of training/tutoring newly hired programmers by lecturing
                    Web Development classes.
                </p>
                <p>HTML | CSS | JavaScript | PHP | PostgreSQL | PHP Framework</p>
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
                <h4>IPM Sistemas, Rio do Sul, SC</h4>
                <p>
                    In charge of training/tutoring employees that were hired to work with
                    the Human Resources software.
                </p>
                <p>Public administration software | Human Resources</p>
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
                <h4>Instituto Federal Catarinense, Rio do Sul, SC</h4>
                <p>
                    Graduated in computer science, reaching maximum grade in the final
                    thesis, which portrayed about Artificial Intelligence.
                </p>
                <p>Check my final thesis here (portuguese only)! </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={boxStyle}
                contentArrowStyle={arrowStyle}
                date="2016 - 2017"
                iconStyle={{ background: "var(--blue5)", color: "#fff" }}
                icon={<FaRegListAlt />}
                dateClassName="date-timeline"
            >
                <h3>Software Quality Analyst</h3>
                <h4>IPM Sistemas, Rio do Sul, SC</h4>
                <p>
                    In charge of testing the Human Resources software to detect and
                    catalog errors. Also in charge of writing and executing test cases.
                </p>
                <p>Software Quality | Human Resources</p>
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
                <h4>Rio do Sul, SC</h4>
                <p>
                    In charge of managing the e-commerce platform and leading marketing
                    campaigns on social media.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={boxStyle}
                contentArrowStyle={arrowStyle}
                date="2011 - 2014"
                iconStyle={{ background: "var(--blue5)", color: "#fff" }}
                icon={<FaBuilding />}
                dateClassName="date-timeline"
            >
                <h3>Part time intern</h3>
                <h4>Town Hall, Rio do Sul, SC</h4>
                <p>
                    In charge of assorted office services, like register traffic tickets,
                    catalog towed cars and organize old files.
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
}
