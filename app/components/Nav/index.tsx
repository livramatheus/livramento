import Link from "next/link";

const Nav = () => {
  return (
    <nav
      className="flex justify-between items-center px-36 bg-zinc-900 text-zinc-200 sticky top-0 h-20 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50"
    >
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