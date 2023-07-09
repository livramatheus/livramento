import { FaDownload } from "react-icons/fa";
import Button from "../Button";

const Intro = () => {
  const getMatheusAge = (): number => {
    let currentDate = new Date();
    let birthDate = new Date("1994-12");
    let timeDiff = currentDate.getTime() - birthDate.getTime();
    
    return new Date(timeDiff).getUTCFullYear() - 1970;
  }

  return (
    <div className="flex flex-col gap-4">
      <p>
        I&apos;m Matheus do Livramento, {getMatheusAge()} years old, living in Santa Catarina,
        Brazil since I was born.
      </p>

      <p>
        I&apos;m a <b>back-end software engineer</b> and former web development teacher with 
        a bachelor degree in <b>computer science</b>. I absolutely love to code and learn new 
        patterns that make programming cleaner.
      </p>

      <p>
        Below you can see an overview about my skills and professional life.
        You can also <b>download my resume below:</b>
      </p>

      <div className="flex justify-center gap-5 my-5">
        <Button
          text="Portuguese Resume"
          dest="https://drive.google.com/file/d/12bEHx_lNWTDdKxA6e-bcbutT0v8zdHgD/view"
          Icon={FaDownload}
          target="_blank"

        />

        <Button
          text="English Resume"
          dest="https://drive.google.com/file/d/1rAD_frv-R0rdaRTOZfTMVtixZKvjQvV7/view"
          Icon={FaDownload}
          target="_blank"
        />
      </div>
    </div>
  );
}

export default Intro;