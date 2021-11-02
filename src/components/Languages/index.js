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
        <article className="languages" data-aos="fade-up" data-aos-once="true">
            <h2>Languages I speak</h2>

            {langs.map((itm, id) => {
                return <LanguageItem {...itm} key={id} />;
            })}
        </article>
    );
}
