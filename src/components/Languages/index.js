import LanguageItem from "./LanguageItem";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Languages() {

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, []);

    const langs = [
        {
            language: "Portuguese",
            description: ["Native"],
            percentage: 100
        },
        {
            language: "English",
            description: [
                "Excellent writing",
                "Excellent reading",
                "Good listening",
                "Reasonable speaking"
            ],
            percentage: 90
        }
    ];

    return (
        <div className="languages" data-aos="fade-up" data-aos-once="true">
            {langs.map((itm, id) => {
                return <LanguageItem {...itm} key={id} />;
            })}
        </div>
    );
}
