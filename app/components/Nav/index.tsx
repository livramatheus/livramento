const Nav = () => {
  return (
    <nav className="flex justify-between text-zinc-200">
      <div className="flex gap-3">
        <span>☕</span>
        <span className="font-bold">Matheus do Livramento</span>
      </div>

      <div className="flex gap-10">
        <a href="#">Portfolio</a>
        <a href="#">Learning</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}

export default Nav;