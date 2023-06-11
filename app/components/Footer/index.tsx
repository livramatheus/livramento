import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-between">
      <span className="text-zinc-200">
        Developed by Matheus do Livramento
      </span>

      <div className="flex gap-3">
        <Link href="https://github.com/livramatheus" target="_blank">
          <Image
            src="/github.svg"
            width={24}
            height={24}
            alt="GitHub"
          />
        </Link>

        <Link href="https://www.linkedin.com/in/livramatheus/" target="_blank">
          <Image
            src="/linkedin.svg"
            width={24}
            height={24}
            alt="LinkedIn"
          />
        </Link>

      </div>
    </footer>
  );
}

export default Footer;