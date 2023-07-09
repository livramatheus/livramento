import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center text-zinc-200">
      <Link href="/" className="flex gap-3 items-center text-lg">
        <span>☕</span>
        <span className="font-bold">Matheus do Livramento</span>
      </Link>

      <div className="flex gap-10">
        <Link className="hover:underline" href="/portfolio">Portfolio</Link>
        <Link className="hover:underline" href="/about">About</Link>
        <Link className="hover:underline" href="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Nav;