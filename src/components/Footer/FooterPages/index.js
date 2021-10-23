import { Link } from "react-router-dom";
import FooterPagesList from "./FooterPagesList";
import FooterPagesTitle from './FooterPagesTitle';

function FooterPages() {
    return (
        <div id="page-footer-content">
            
            <FooterPagesTitle />

            <FooterPagesList />
            
        </div>
    );
}

export default FooterPages;