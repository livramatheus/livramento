import { Link } from 'react-router-dom';

export default function () {

    return (
        <nav id="navbar" >
            <div id="navbar-title" title="Let's have a ☕?">
                <Link to="/">☕ Matheus do Livramento</Link>
            </div>
            <div id="navbar-buttons">
                <Link to="/articles" className="link">Artigos</Link>
                <Link to="/projects" className="link">Projetos</Link>
                <Link to="/about" className="link">Sobre</Link>
                <Link to="/contact" className="link">Contato</Link>
            </div>
        </nav>
    );

}