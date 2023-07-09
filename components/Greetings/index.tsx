import Image from "next/image";

const Greetings = () => {
  return (
    <section className="flex max-md:flex-col max-md:items-center max-md:text-center max-md:gap-9">
      <div className="flex-1 flex flex-col gap-8 justify-center">
        <h1 className="text-5xl font-bold text-zinc-200">
          Hello! I&apos;m Matheus do Livramento!
        </h1>

        <span className="text-zinc-200">
          I welcome you to my website! Here you will 
          get to know more about me, about my work and what 
          are my next steps into web development!
        </span>
      </div>

      <div className="flex-1 flex justify-end">
        <Image
          src="/matheus_cartoon.svg"
          width={450}
          height={450}
          alt="Picture of the author"
        />
      </div>
    </section>
  );
}

export default Greetings;