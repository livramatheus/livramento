import { Link } from "react-router-dom";

function FooterPagesListItem(props) {

    let { to, title} = props;

    return (
        <li>
            <Link to={to} className="link">{title}</Link>
        </li>
    );
}

export default FooterPagesListItem;