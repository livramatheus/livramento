import LatestProjectsListItemContent from "./LatestProjectsListItemContent";
import LatestProjectsListItemLink from "./LatestProjectsListItemLink";
import LatestProjectsListItemTitle from "./LatestProjectsListItemTitle";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

function LatestProjectsListItem(props) {

    let { title, desc, idProj} = props;

    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, []);

    return (
        <div className="latest-projects-body-item" data-aos="fade-up" data-aos-once="true">
            <LatestProjectsListItemTitle title={title} />
            <LatestProjectsListItemContent desc={desc} />
            <LatestProjectsListItemLink idProj={idProj} />

        </div>
    );
}

export default LatestProjectsListItem;