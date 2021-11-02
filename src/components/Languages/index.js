import LanguageItem from "./LanguageItem";

export default function Languages() {
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
    <article className="languages">
      <h2>Languages I speak</h2>
      
      {langs.map((itm, id) => {
        return <LanguageItem {...itm} key={id} />;
      })}
    </article>
  );
}
