import { Link } from 'react-router-dom';

export default function () {

    return (
        <nav id="navbar" >
            <div id="navbar-title" title="Let's have a ☕?">
                <Link to="/">☕ Matheus do Livramento</Link>
            </div>
            <div id="navbar-buttons">
                <Link to="/articles" className="link">Articles</Link>
                <Link to="/portfolio" className="link">Portfolio</Link>
                <Link to="/learning" className="link">Learning</Link>
                <Link to="/about" className="link">About</Link>
                <Link to="/contact" className="link">Contact</Link>
            </div>
        </nav>
    );

}