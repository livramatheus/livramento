import Image from "next/image";
import { FaMapMarkerAlt, FaLinkedinIn, FaGithub } from "react-icons/fa";

import ContactItem from "@/components/ContactItem";
import SectionTitle from "@/components/SectionTitle";

const Contact = () => {
  return (
    <article className="flex flex-col gap-10">
      <SectionTitle title="Reach me out"/>

      <div className="flex max-md:flex-col-reverse max-md:gap-8 justify-between items-center">
        <div className="flex flex-col max-md:gap-4 gap-7">
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