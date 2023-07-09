const Languages = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-bold border-b border-zinc-500">Languages</h3>

      <p>
        Portuguese is my main language, however, as I grew up as a “tech/gamer kid”, English was 
        part of my daily life, and learning it just came naturally.
      </p>
      
      <p>
        Fast forward to January 2022, I got my first job that put my english skills to the test: 
        I had to report the status of what I&apos;m working on regularly to the international team 
        through our Agile-based meetings. On top of that I also had to use english skills to ask 
        questions to senior devs and product specialists.
      </p>

      <p>
        Check out below my language abilities:
      </p>

      <ul className="list-disc">
        <li className="ml-10">Portuguese (Native)</li>
        <li className="ml-10">English (Fluent)</li>
      </ul>
    </div>
  );
}

export default Languages;