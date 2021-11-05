import ContactInfoIcon from "./ContactInfoIcon";
import ContactItemInfo from "./ContactItemInfo";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

function ContactItem(props) {

    const { icon, title, desc } = props;

    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    });

    return (
        <div className="contact-item" data-aos="fade-right" data-aos-once="true" data-aos-offset="-200">
            <ContactInfoIcon icon={icon} />
            <ContactItemInfo title={title} desc={desc} />
        </div>
    );
}

export default ContactItem;