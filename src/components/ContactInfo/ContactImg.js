import { ReactComponent as Chat } from '../../assets/images/chatbot.svg';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

function ContactImg() {

    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    });

    return (
        <div className="contact-img" data-aos="fade-left" data-aos-once="true">
            <Chat />
        </div>
    );
}

export default ContactImg;