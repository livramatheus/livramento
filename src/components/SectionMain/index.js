import SectionMainContent from "./SectionMainContent";
import SectionMainImg from "./SectionMainImg";
import SectionMainTitle from "./SectionMainTitle";

export default function SectionMain() {

    return (
        <section id="section-main">
            <div>
                <SectionMainTitle />
                <SectionMainContent />
            </div>
            <div>
                <SectionMainImg />
            </div>
        </section>
    );

}