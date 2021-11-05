function ContactItemInfo(props) {

    const { title, desc } = props;

    return (
        <div>
            <div>{title}</div>
            <div>{desc}</div>
        </div>
    );
}

export default ContactItemInfo;