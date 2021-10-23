import FooterPagesListItem from "./FooterPagesListItem";
import footerItems from "../../../../data/footerItems";

function FooterPagesList() {
    
    return (
        <ul id="page-footer-list">
            {
                footerItems.map((elm, id) => {
                    return <FooterPagesListItem {...elm} key={id} />
                })
            }
        </ul>
    );
}

export default FooterPagesList;