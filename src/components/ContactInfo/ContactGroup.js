import { FaMapMarkerAlt, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import ContactItem from './ContactItem';

function ContactGroup() {

    const contacts = [
        {
            icon: <FaMapMarkerAlt size="2rem" />,
            title: 'E-mail',
            desc: 'hire.livramento@gmail.com'
        },
        {
            icon: <FaLinkedinIn size="2rem" />,
            title: 'LinkedIn',
            desc: 'linkedin.com/in/livramatheus'
        },
        {
            icon: <FaGithub size="2rem" />,
            title: 'GitHub',
            desc: 'github.com/livramatheus'
        }
    ]

    return (
        <div className="contact-group">
            {
                contacts.map((e, id) => {
                    return <ContactItem {...e} key={id}/>
                })
            }
        </div>
    );
}

export default ContactGroup;