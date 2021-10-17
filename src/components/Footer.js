import { Link } from 'react-router-dom';

import imgLinkedIn from '../imagens/white-social-icons/linkedin.svg';
import imgInstagram from '../imagens/white-social-icons/instagram.svg';
import imgFacebook from '../imagens/white-social-icons/facebook.svg';
import imgGithub from '../imagens/white-social-icons/github.svg';

export default function Footer() {

    return (
        <footer id="page-footer">
            <div id="page-footer-content">
                <p>
                    Desenvolvido por Matheus do Livramento
                </p>
                <ul id="page-footer-list">
                    <li>
                        <Link to="/references" className="link">References</Link>
                    </li>
                    <li>
                        <Link to="/about" className="link">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="link">Contato</Link>
                    </li>
                </ul>
            </div>
            <div id="page-footer-social-media" >
                <a href="https://www.linkedin.com/in/matheus-livramento-623590209/" title="LinkedIn">
                    <img src={imgLinkedIn} alt="LinkedIn" />
                </a>
                <a href="https://www.instagram.com/livramento08/" title="Instagram">
                    <img src={imgInstagram} alt="Instagram" />
                </a>
                <a href="https://www.facebook.com/MatheusLivramento" title="Facebook">
                    <img src={imgFacebook} alt="Facebook" />
                </a>
                <a href="https://www.github.com/livramatheus" title="GitHub">
                    <img src={imgGithub} alt="GitHub" />
                </a>
            </div>
        </footer>
    );

}