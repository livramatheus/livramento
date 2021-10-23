function FooterSocialListItem(props) {
    
    let {img, title, link } = props;
    
    return (
        <a href={link} title={title} >
            <img src={img} alt={title} />
        </a>
    );
}

export default FooterSocialListItem;