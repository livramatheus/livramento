import Image from "next/image";
import SectionTitle from "../components/SectionTitle";
import { FaMapMarkerAlt, FaLinkedinIn, FaGithub } from "react-icons/fa";
import ContactItem from "../components/ContactItem";

const Contact = () => {
  return (
    <article className="flex flex-col gap-10">
      <SectionTitle title="Reach me out" align="left"/>

      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-7">
          <ContactItem
            title="E-mail"
            desc="hire.livramento@gmail.com"
            Icon={FaMapMarkerAlt}
          />
          <ContactItem
            title="LinkedIn"
            desc="linkedin.com/in/livramatheus"
            Icon={FaLinkedinIn}
          />
          <ContactItem
            title="GitHub"
            desc="github.com/livramatheus"
            Icon={FaGithub}
          />
        </div>
        
        <Image
          src="/chatbot.svg"
          height={350}
          width={350}
          alt="Chat Bot"
        />
      </div>
    </article>
  )
}

export default Contact;